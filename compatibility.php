<?php
global $wpdb;

$provider = ['user_id' => get_current_user_id()];
$business = ['user_id' => $wpdb->get_var("SELECT user_id FROM {$wpdb->prefix}frm_items WHERE id = {$rfp_id}")];

$fields = [
    ['color' => 'green', 'item' => "Business's Annual GR", 'field_id' => 951],
    ['color' => 'green', 'item' => "# business employees", 'field_id' => 550],
    ['color' => 'green', 'item' => "Business ownership", 'field_id' => 551],
    ['color' => 'green', 'item' => "Business headquarters state OR Business office States", 'field_id' => 569],
    ['color' => 'green', 'item' => "Business headquarters state OR Business office States", 'field_id' => 552],
    ['color' => 'green', 'item' => "Legal Structure", 'field_id' => 559],
    ['color' => 'green', 'item' => "Tax Form filing", 'field_id' => 560],
    ['color' => 'green', 'item' => "Preferred Provider Services Industry", 'field_id' => 4484],

    ['color' => 'orange', 'item' => "Preferred Provider years in business", 'field_id' => 4469],
    ['color' => 'orange', 'item' => "Preferred Provider # of employees", 'field_id' => 4470],
    ['color' => 'orange', 'item' => "Preferred Provider ownership", 'field_id' => 4474],
    ['color' => 'orange', 'item' => "Preferred Provider location", 'field_id' => 4478],

    ['color' => 'blue', 'item' => "Preferred Customer Annual GR", 'field_id' => 4439],
    ['color' => 'blue', 'item' => "Preferred Customer # employees", 'field_id' => 4440],
    ['color' => 'blue', 'item' => "Preferred Customer ownership", 'field_id' => 4444],
    ['color' => 'blue', 'item' => "Preferred Customer Location", 'field_id' => 4448],
    ['color' => 'blue', 'item' => "Preferred Customer Legal Structure", 'field_id' => 4460],
    ['color' => 'blue', 'item' => "Preferred Customer Tax Filing", 'field_id' => 4456],
    ['color' => 'blue', 'item' => "Preferred Customer Industry", 'field_id' => 4482],

    ['color' => 'red', 'item' => "Provider years in business", 'field_id' => 792],
    ['color' => 'red', 'item' => "Provider # of employees", 'field_id' => 793],
    ['color' => 'red', 'item' => "Provider ownership", 'field_id' => 794],
    ['color' => 'red', 'item' => "Provider HQ, Provider offices", 'field_id' => 795],
    ['color' => 'red', 'item' => "Provider HQ, Provider offices", 'field_id' => 796],
];

$matching = [
    ['match to' => 'included in', 'color pair' => 'green to blue'],
    ['match to' => 'included in', 'color pair' => 'green to blue'],
    ['match to' => 'included in OR equals', 'color pair' => 'green to blue'],
    ['match to' => 'included in', 'color pair' => 'green to blue'],
    ['match to' => 'included in', 'color pair' => 'green to blue'],
    ['match to' => 'included in', 'color pair' => 'green to blue'],
    ['match to' => 'included in', 'color pair' => 'green to blue'],
    ['match to' => 'includes', 'color pair' => 'orange to red'],
    ['match to' => 'includes', 'color pair' => 'orange to red'],
    ['match to' => 'equals "No Preference" OR includes', 'color pair' => 'orange to red'],
    ['match to' => 'includes', 'color pair' => 'orange to red'],
];

$business_fields = array_values(array_filter($fields, function ($field) {
    return in_array($field['color'], ['green', 'orange']);
}));
$business_field_ids = implode(',', array_map(function ($field) {
    return $field['field_id'];
}, $business_fields));

$provider_fields = array_values(array_filter($fields, function ($field) {
    return in_array($field['color'], ['blue', 'red']);
}));
$provider_field_ids = implode(',', array_map(function ($field) {
    return $field['field_id'];
}, $provider_fields));

$answers = $wpdb->get_results("
    SELECT
        entry.user_id,
        answer.field_id,
        answer.meta_value
    FROM {$wpdb->prefix}frm_item_metas answer
    LEFT JOIN {$wpdb->prefix}frm_items entry ON entry.id = answer.item_id
    WHERE (
        entry.user_id = {$business['user_id']}
        AND answer.field_id IN ({$business_field_ids})
    ) OR (
        entry.user_id = {$provider['user_id']}
        AND answer.field_id IN ({$provider_field_ids})
    )
");

foreach ($answers as $answer) {
    $answer_value = $answer->meta_value;
    foreach ($fields as $field) {
        if (!is_array($answer_value) && 'a:' === substr($answer_value, 0, 2)) $answer_value = unserialize($answer_value);

        if (in_array($field['color'], ['green', 'orange'])) {
            if ($answer->field_id == $field['field_id']) {
                if (isset($business[$field['item']])) {
                    $business[$field['item']] = is_array($business[$field['item']]) ? $business[$field['item']] : [$business[$field['item']]];
                    $answer_value = is_array($answer_value) ? $answer_value : [$answer_value];
                    $business[$field['item']] = array_merge($business[$field['item']] = $answer_value, $answer_value);
                } else $business[$field['item']] = $answer_value;
            }
        } else {
            if ($answer->field_id == $field['field_id']) {
                if (isset($provider[$field['item']])) {
                    $provider[$field['item']] = is_array($provider[$field['item']]) ? $provider[$field['item']] : [$provider[$field['item']]];
                    $answer_value = is_array($answer_value) ? $answer_value : [$answer_value];
                    $provider[$field['item']] = array_merge($provider[$field['item']] = $answer_value, $answer_value);
                } else $provider[$field['item']] = $answer_value;
            }
        }
    }
}

$business_has_orange_answers = false;
foreach ($fields as $field) {
    if ('orange' === $field['color']) {
        if (isset($business[$field['item']])) {
            $business_has_orange_answers = true;
        }
    }
}

$provider_has_red_answers = false;
foreach ($fields as $field) {
    if ('red' === $field['color']) {
        if (isset($provider[$field['item']])) {
            $provider_has_red_answers = true;
        }
    }
}

$processed = [];
$result_map = [
    'green to blue' => [
        'total matched' => 0,
        'total preferenced' => 0,
        'score' => 0,
        'score rounded' => 0
    ],
    'orange to red' => [
        'total matched' => 0,
        'total preferenced' => 0,
        'score' => 0,
        'score rounded' => 0
    ],
];

foreach ($matching as $row_num => $keyword) {
    $business_line = !in_array($business_fields[$row_num]['item'], $processed) ? $row_num : $row_num + 1;
    $business_item = $business_fields[$business_line]['item'];
    $business_color = $business_fields[$business_line]['color'];
    $processed[] = $business_item;

    $provider_line = !in_array($provider_fields[$row_num]['item'], $processed) ? $row_num : $row_num + 1;
    $provider_item = $provider_fields[$provider_line]['item'];
    $provider_color = $provider_fields[$provider_line]['color'];

    $left = is_array($business[$business_item]) ? $business[$business_item] : [$business[$business_item]];
    $right = is_array($provider[$provider_item]) ? $provider[$provider_item] : [$provider[$provider_item]];
    if (in_array('No Preference', array_merge($left, $right))) continue;
    $is_match = false;
    switch ($keyword['match to']) {
        case 'included in':
        case 'includes':
        case 'included in OR equals':
            $is_match = 0 < count(array_intersect($left, $right));
            break;
        case 'equals "No Preference" OR includes':
            if ($left[0] == 'No Preference') $is_match = true;
            else $is_match = 0 < count(array_intersect($left, $right));
            break;
    }
    $color_pair = $keyword['color pair'];
    $result_map[$color_pair]['total matched'] += $is_match ? 1 : 0;
    if ('green to blue' === $color_pair) echo json_encode([$business_item, $left, $provider_item, $right, $is_match, $result_map[$color_pair]['total matched']]) . '<br><br>'; // debug
    $result_map[$color_pair]['total preferenced'] += 1;
    $result_map[$color_pair]['score'] = 100 * ($result_map[$color_pair]['total matched'] / $result_map[$color_pair]['total preferenced']);
    $result_map[$color_pair]['score rounded'] = round($result_map[$color_pair]['score']);
}

$result = 0;
if (0 == $result_map['green to blue']['score rounded'] && 0 == $result_map['orange to red']['score rounded']) $result = '*';
else if (0 == $result_map['green to blue']['score rounded']) $result = $result_map['orange to red']['score rounded'] . '%*';
else if (0 == $result_map['orange to red']['score rounded']) $result = $result_map['green to blue']['score rounded'] . '%';
else $result = round(($result_map['green to blue']['score'] + $result_map['orange to red']['score']) / 2) . '%';

// echo json_encode($result_map) . '<br>'; //debug
// echo json_encode([
//     round(($result_map['orange to red']['score'] + $result_map['orange to red']['score'])),
//     round(($result_map['orange to red']['score'] + $result_map['orange to red']['score']) / 2),
//     round(($result_map['orange to red']['score'] + $result_map['orange to red']['score']) / 2) . '%'
// ]);
echo $result;

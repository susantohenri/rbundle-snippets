<?php
add_action('frm_after_create_entry', function ($entry_id, $form_id) {
    elda_1($entry_id, $form_id);
}, 30, 2);

// Grant Existing Eligible Provider Users Access to RFP in Dashboard
function elda_1($entry_id, $form_id)
{
    // 1.a
    if (58 != $form_id) return false;
    $entry_58 = elda_get_entry_by_id($entry_id);
    if ('Single Service' != $entry_58[880]) return false;

    // 1.b.i
    $entries_ids_31 = elda_get_entry_ids_by_form_id(31);
    $entries_31 = [];
    foreach ($entries_ids_31 as $id) $entries_31[] = elda_get_entry_by_id($id);
    $filtered_entries_31 = array_filter($entries_31, function ($entry_31) use ($entry_58) {
        $is_match_5069_883 = elda_compare($entry_31, 5069, 'match', $entry_58, 883);
        $is_match_431_884 = elda_compare($entry_31, 431, 'match', $entry_58, 884);
        $is_match_728_885 = elda_compare($entry_31, 728, 'match', $entry_58, 885);
        $filter_result = $is_match_5069_883 && ($is_match_431_884 || $is_match_728_885);
        return $filter_result;
    });

    // 1.b.ii
    $provider_service_subscribers = array_map(function ($entry_31) {
        return $entry_31[729];
    }, $filtered_entries_31);
    elda_update_answer($entry_58['id'], 1526, implode(';', $provider_service_subscribers));
}

// Update Eligible Provider Users Access to RFP in Dashboard From Form 31 Submission
function elda_2()
{
}

// Update Eligible Provider Users Access to RFP in Dashboard From Form 58 Update Submission
function elda_3()
{
}

// For Otherwise Ineligible Provider Users Grive Access to RFP in Dashboard From Form 58 Entry
function elda_4()
{
}

// For Otherwise Eligible Provider Users Remove Access to RFP in Dashboard From Form 58 Entry
function elda_5()
{
}

// Provider Email Notification
function elda_6()
{
}

function elda_get_entry_ids_by_form_id($form_id)
{
    global $wpdb;
    $entries = $wpdb->get_results("SELECT id FROM {$wpdb->prefix}frm_items WHERE form_id = {$form_id}");
    return array_map(function ($entry) {
        return $entry->id;
    }, $entries);
}

function elda_get_entry_by_id($entry_id)
{
    global $wpdb;
    $answers = $wpdb->get_results("
        SELECT field_id, meta_value
        FROM {$wpdb->prefix}frm_item_metas
        WHERE item_id = $entry_id
    ");
    $entry_obj = [];
    foreach ($answers as $answer) {
        $entry_obj[$answer->field_id] = $answer->meta_value;
        if ('a:' === substr($entry_obj[$answer->field_id], 0, 2)) $entry_obj[$answer->field_id] = unserialize($entry_obj[$answer->field_id]);
    }
    $entry_obj['id'] = $entry_id;
    return $entry_obj;
}

function elda_compare($left_entry, $left_field, $operator, $right_entry, $right_field)
{
    if (!isset($left_entry[$left_field])) return false;
    if (!isset($right_entry[$right_field])) return false;
    $left_answer = $left_entry[$left_field];
    $right_answer = $right_entry[$right_field];
    $left_answer = is_array($left_answer) ? $left_answer : [$left_answer];
    $right_answer = is_array($right_answer) ? $right_answer : [$right_answer];

    $filter_result = false;
    switch ($operator) {
        case 'match':
            if (in_array('All States', $left_answer) || in_array('All States', $right_answer)) $filter_result = true;
            else $filter_result = 0 < count(array_intersect($left_answer, $right_answer));
            break;
    }
    return $filter_result;
}

function elda_update_answer($entry_id, $field_id, $answer)
{
    global $wpdb;
    $answer_table = "{$wpdb->prefix}frm_item_metas";
    $answer_exists = $wpdb->get_var("SELECT meta_value FROM {$answer_table} WHERE item_id = {$entry_id} AND field_id = {$field_id}");
    if ($answer_exists) $wpdb->update($answer_table, ['meta_value' => $answer], ['item_id' => $entry_id, 'field_id' => $field_id]);
    else $wpdb->insert($answer_table, ['meta_value' => $answer, 'item_id' => $entry_id, 'field_id' => $field_id]);
}

// Debugger
function elda_debug($keyword, $data)
{
    global $wpdb;
    $wpdb->insert('wp_options', ['option_name' => 'elda_' . rand(), 'option_value' => json_encode([$keyword => $data])]);
}

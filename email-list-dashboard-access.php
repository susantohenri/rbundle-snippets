<?php
// Email List & Dashboard Access
add_action('frm_after_create_entry', function ($entry_id, $form_id) {
    elda_1($entry_id, $form_id);
    elda_2($entry_id, $form_id);
}, 30, 2);

add_action('frm_after_update_entry', function ($entry_id, $form_id) {
    elda_2($entry_id, $form_id);
    elda_3($entry_id, $form_id);
}, 10, 2);

// Grant Existing Eligible Provider Users Access to RFP in Dashboard
function elda_1($entry_id, $form_id)
{
    // 1.a
    if (58 != $form_id) return false;
    $entry_58 = elda_get_entry_by_id($entry_id);
    if ('Single Service' != $entry_58[880]) return false;

    // 1.b.i
    $entries_31 = array_map(function ($entry_31_id) {
        return elda_get_entry_by_id($entry_31_id);
    }, elda_get_entry_ids_by_form_id(31));
    $provider_service_subscribers = array_filter($entries_31, function ($entry_31) use ($entry_58) {
        $is_match_5069_883 = elda_compare($entry_31, 5069, 'match', $entry_58, 883);
        $is_match_431_884 = elda_compare($entry_31, 431, 'match', $entry_58, 884);
        $is_match_728_885 = elda_compare($entry_31, 728, 'match', $entry_58, 885);
        $filter_result = $is_match_5069_883 && ($is_match_431_884 || $is_match_728_885);
        return $filter_result;
    });

    // 1.b.ii
    $provider_service_subscribers_ids = array_map(function ($entry_31) {
        return $entry_31[729];
    }, $provider_service_subscribers);
    elda_update_answer($entry_58['id'], 1526, implode(';', $provider_service_subscribers_ids));
}

// Update Eligible Provider Users Access to RFP in Dashboard From Form 31 Submission
function elda_2($entry_id, $form_id)
{
    // 2.a.i
    if (31 != $form_id) return false;
    $entry_31 = elda_get_entry_by_id($entry_id);

    // 2.b.i
    $entries_58 = array_map(function ($entry_58_id) {
        return elda_get_entry_by_id($entry_58_id);
    }, elda_get_entry_ids_by_form_id(58));
    $entries_58_2bi = array_filter($entries_58, function ($entry_58) use ($entry_31) {
        $is_submitted = 'Submitted' == $entry_58[1086];
        $is_1526_includes_729 = elda_compare($entry_58, 1526, 'includes', $entry_31, 729);
        return $is_submitted && $is_1526_includes_729;
    });

    // 2.b.ii
    $entries_58_2bii = array_filter($entries_58_2bi, function ($entry_58) use ($entry_31) {
        $is_1086_submitted = 'Submitted' == $entry_58[1086];
        $is_match_883_5069 = elda_compare($entry_58, 883, 'match', $entry_31, 5069);
        $is_match_884_431 = elda_compare($entry_58, 884, 'match', $entry_31, 431);
        $is_match_885_728 = elda_compare($entry_58, 885, 'match', $entry_31, 728);

        $is_true = $is_1086_submitted && $is_match_883_5069 && ($is_match_884_431 || $is_match_885_728);
        return !$is_true;
    });
    foreach ($entries_58_2bii as $entry_58) {
        $entry_58_1526 = explode(';', $entry_58[1526]);
        if (in_array($entry_31[729], $entry_58_1526)) {
            unset($entry_58_1526[$entry_31[729]]);
            $entry_58_1526 = array_values($entry_58_1526);
            $entry_58_1526 = implode(';', $entry_58_1526);
            elda_update_answer($entry_58['id'], 1526, $entry_58_1526);
        }
    }

    // 2.b.iii
    $entries_58 = array_map(function ($entry_58_id) {
        return elda_get_entry_by_id($entry_58_id);
    }, elda_get_entry_ids_by_form_id(58));
    $entries_58_2biii = array_filter($entries_58, function ($entry_58) use ($entry_31) {
        $is_1086_submitted = 'Submitted' == $entry_58[1086];
        $is_match_883_5069 = elda_compare($entry_58, 883, 'match', $entry_31, 5069);
        $is_match_884_431 = elda_compare($entry_58, 884, 'match', $entry_31, 431);
        $is_match_885_728 = elda_compare($entry_58, 885, 'match', $entry_31, 728);
        return $is_1086_submitted && $is_match_883_5069 && ($is_match_884_431 || $is_match_885_728);
    });

    // 2.b.iv
    foreach ($entries_58_2biii as $entry_58) {
        $entry_58_1526 = explode(';', $entry_58[1526]);
        $entry_58_1526[] = $entry_31[729];
        $entry_58_1526 = implode(';', $entry_58_1526);
        elda_update_answer($entry_58['id'], 1526, $entry_58_1526);
    }
}

// Update Eligible Provider Users Access to RFP in Dashboard From Form 58 Update Submission
function elda_3($entry_id, $form_id)
{
    // 3.a
    if (58 != $form_id) return false;
    $entry_58 = elda_get_entry_by_id($entry_id);
    if ('Single Service' != $entry_58[880]) return false;

    // 3.b.i
    $entries_31 = array_map(function ($entry_31_id) {
        return elda_get_entry_by_id($entry_31_id);
    }, elda_get_entry_ids_by_form_id(31));
    $entries_31_3bi = array_filter($entries_31, function ($entry_31) use ($entry_58) {
        return elda_compare($entry_31, 729, 'included', $entry_58, 1526);
    });

    // 3.b.ii: something wrong with the instruction
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
function elda_6($entry_id, $field_id)
{
    // fn Provider Email Notification.1.a
    if (1526 != $field_id) return false;

    $entry_58 = elda_get_entry_by_id($entry_id);

    // fn Provider Email Notification.2.a
    $entries_31 = array_map(function ($entry_31_id) {
        return elda_get_entry_by_id($entry_31_id);
    }, elda_get_entry_ids_by_form_id(31));
    $entries_31_62a = array_filter($entries_31, function ($entry_31) use ($entry_58) {
        $is_729_match_1526 = elda_compare($entry_31, 729, 'match', $entry_58, 1526);
        $is_5069_match_883 = elda_compare($entry_31, 5069, 'match', $entry_58, 883);
        return $is_729_match_1526 && $is_5069_match_883;
    });

    // fn Provider Email Notification.2.b
    $entries_31_62b = array_filter($entries_31_62a, function ($entry_31) {
        return 'Yes' == $entry_31[5265];
    });

    // fn Provider Email Notification.2.c
    $email_address_list = array_map(function ($entry_31) {
        return $entry_31[870];
    }, $entries_31_62b);
    $email_address_list = implode(';', $email_address_list);
    elda_update_answer($entry_58['id'], 1088, $email_address_list);
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
    $comparison_result = false;
    $left_answer = isset($left_entry[$left_field]) ? $left_entry[$left_field] : null;
    $right_answer = isset($right_entry[$right_field]) ? $right_entry[$right_field] : null;

    if (!is_null($left_answer) && !is_null($right_answer)) switch ($operator) {
        case 'match':
            $left_answer = is_array($left_answer) ? $left_answer : [$left_answer];
            $right_answer = is_array($right_answer) ? $right_answer : [$right_answer];

            if (in_array('All States', $left_answer) || in_array('All States', $right_answer)) $comparison_result = true;
            else $comparison_result = 0 < count(array_intersect($left_answer, $right_answer));
            break;
        case 'includes':
            $comparison_result = in_array($right_answer, explode(';', $left_answer));
            break;
        case 'included':
            $comparison_result = in_array($left_answer, explode(';', $right_answer));
            break;
    }
    return $comparison_result;
}

function elda_update_answer($entry_id, $field_id, $answer)
{
    global $wpdb;
    $answer_table = "{$wpdb->prefix}frm_item_metas";
    $answer_exists = $wpdb->get_var("SELECT meta_value FROM {$answer_table} WHERE item_id = {$entry_id} AND field_id = {$field_id}");
    if ($answer_exists) $wpdb->update($answer_table, ['meta_value' => $answer], ['item_id' => $entry_id, 'field_id' => $field_id]);
    else $wpdb->insert($answer_table, ['meta_value' => $answer, 'item_id' => $entry_id, 'field_id' => $field_id]);

    elda_6($entry_id, $field_id);
}

// Debugger
function elda_debug($keyword, $data)
{
    global $wpdb;
    $wpdb->insert('wp_options', ['option_name' => 'elda_' . rand(), 'option_value' => json_encode([$keyword => $data])]);
}

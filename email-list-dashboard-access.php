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

    // 1.b
    $entries_ids_31 = elda_get_entry_ids_by_form_id(31);
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
    return explode(',', $wpdb->get_var("SELECT GROUP_CONCAT(id) FROM {$wpdb->prefix}frm_items WHERE form_id = {$form_id}"));
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
    foreach ($answers as $answer) $entry_obj[$answer->field_id] = $answer->meta_value;
    return $entry_obj;
}

function elda_filter_by_compare($left_entry, $left_field, $operator, $right_entry, $right_field)
{
    return true;
}

function elda_compare($left, $operator, $right)
{
}

function elda_update_answer($entry_id, $field_id, $answer)
{
}

// Debugger
function elda_debug($keyword, $data)
{
    global $wpdb;
    $wpdb->insert('wp_options', ['option_name' => 'elda_' . rand(), 'option_value' => json_encode([$keyword => $data])]);
}

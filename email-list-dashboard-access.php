<?php
// Email List & Dashboard Access
add_action('frm_after_create_entry', function ($entry_id, $form_id) {
    elda_1($entry_id, $form_id);
    elda_2($entry_id, $form_id, 'create');
    elda_58_894($entry_id, $form_id);
    elda_58_2534($entry_id, $form_id);
}, 30, 2);

add_action('frm_after_update_entry', function ($entry_id, $form_id) {
    elda_2($entry_id, $form_id, 'update');
    elda_3($entry_id, $form_id);
    elda_58_894($entry_id, $form_id);
    elda_58_2534($entry_id, $form_id);
}, 10, 2);

add_action('frm_before_destroy_entry', function ($entry_id) {
    $entry = FrmEntry::getOne($entry_id);
    if (31 == $entry->form_id) elda_2($entry_id, $entry->form_id, 'delete');
});

add_action('wp_head', function () {
	?><script type="text/javascript">const elda_current_user_id=<?= get_current_user_id() ?>;</script>'<?php
});
add_action('rest_api_init', function () {
    register_rest_route('elda/v1', '/remove-rfp-from-provider-dashboard', array(
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $rfp_id = $_POST['rfp_id'];
            $provider_id = $_POST['provider_id'];

            $rfp = elda_get_entry_by_id($rfp_id);
            elda_exclude_provider($rfp, $provider_id);

            return 200;
        }
    ));
});

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
        $is_5069_match_5368 = elda_compare($entry_31, 5069, 'match', $entry_58, 5368);
        $is_431_match_884 = elda_compare($entry_31, 431, 'match', $entry_58, 884);
        $is_728_match_885 = elda_compare($entry_31, 728, 'match', $entry_58, 885);
        $filter_result = $is_5069_match_5368 && ($is_431_match_884 || $is_728_match_885);
        return $filter_result;
    });

    // 1.b.ii
    $provider_service_subscribers_ids = array_map(function ($entry_31) {
        return $entry_31[729];
    }, $provider_service_subscribers);
    $entry_58_1526 = array_unique($provider_service_subscribers_ids);
    $entry_58_1526 = implode(';', $entry_58_1526);
    elda_update_answer($entry_58['id'], 1526, $entry_58_1526);
}

// Update Eligible Provider Users Access to RFP in Dashboard From Form 31 Submission
function elda_2($entry_id, $form_id, $hook)
{
    // 2.a.i
    if (31 != $form_id) return false;
    $entry_31 = elda_get_entry_by_id($entry_id);

    switch ($hook) {
        case 'update':
            // exclusion
            $entries_58_2bii = elda_2_collect_record_to_exclude($entry_31);
            foreach ($entries_58_2bii as $entry_58) elda_exclude_provider($entry_58, $entry_31[729]);
        case 'create':
            // inclusion
            $entries_58_2biii = elda_2_collect_record_to_include($entry_31);
            // 2.b.iv.1
            foreach ($entries_58_2biii as $entry_58) elda_include_provider($entry_58, $entry_31[729]);
            break;
        case 'delete':
            $entries_58 = elda_2_collect_record_to_include($entry_31);
            foreach ($entries_58 as $entry_58) elda_exclude_provider($entry_58, $entry_31[729]);
            break;
    }
}

function elda_2_collect_record_to_include($entry_31)
{
    // 2.b.iii
    $entries_58 = array_map(function ($entry_58_id) {
        return elda_get_entry_by_id($entry_58_id);
    }, elda_get_entry_ids_by_form_id(58));
    return array_filter($entries_58, function ($entry_58) use ($entry_31) {
        $is_1086_submitted = 'Submitted' == $entry_58[1086];
        $is_5368_match_5069 = elda_compare($entry_58, 5368, 'match', $entry_31, 5069);
        $is_884_match_431 = elda_compare($entry_58, 884, 'match', $entry_31, 431);
        $is_885_match_728 = elda_compare($entry_58, 885, 'match', $entry_31, 728);
        return $is_1086_submitted && $is_5368_match_5069 && ($is_884_match_431 || $is_885_match_728);
    });
}

function elda_2_collect_record_to_exclude($entry_31)
{
    // 2.b.i
    $entries_58 = array_map(function ($entry_58_id) {
        return elda_get_entry_by_id($entry_58_id);
    }, elda_get_entry_ids_by_form_id(58));
    $entries_58_2bi = array_filter($entries_58, function ($entry_58) use ($entry_31) {
        $is_submitted = 'Submitted' == $entry_58[1086];
        $is_1526_includes_729 = elda_compare($entry_58, 1526, 'includes', $entry_31, 729);
        $is_5368_match_5069 = elda_compare($entry_58, 5368, 'match', $entry_31, 5069);
        return $is_submitted && $is_1526_includes_729 && $is_5368_match_5069;
    });

    // 2.b.ii
    return array_filter($entries_58_2bi, function ($entry_58) use ($entry_31) {
        $is_1086_submitted = 'Submitted' == $entry_58[1086];
        $is_884_match_431 = elda_compare($entry_58, 884, 'match', $entry_31, 431);
        $is_885_match_728 = elda_compare($entry_58, 885, 'match', $entry_31, 728);

        $is_true = $is_884_match_431 || $is_885_match_728;
        return $is_1086_submitted && !$is_true;
    });
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
        $is_5069_match_5368 = elda_compare($entry_31, 5069, 'match', $entry_58, 5368);
        $is_729_included_1526 = elda_compare($entry_31, 729, 'included', $entry_58, 1526);
        return $is_5069_match_5368 && $is_729_included_1526;
    });

    // 3.b.ii
    $entry_31_3bii = array_filter($entries_31_3bi, function ($entry_31) use ($entry_58) {
        $is_431_match_884 = elda_compare($entry_31, 431, 'match', $entry_58, 884);
        $is_728_match_885 = elda_compare($entry_31, 728, 'match', $entry_58, 885);
        $is_true = $is_431_match_884 || $is_728_match_885;
        return !$is_true;
    });
    foreach ($entry_31_3bii as $entry_31) elda_exclude_provider($entry_58, $entry_31[729]);

    // 3.b.iii
    $entry_31_3biii = array_filter($entries_31, function ($entry_31) use ($entry_58) {
        $is_5069_match_5368 = elda_compare($entry_31, 5069, 'match', $entry_58, 5368);
        $is_431_match_884 = elda_compare($entry_31, 431, 'match', $entry_58, 884);
        $is_728_match_885 = elda_compare($entry_31, 728, 'match', $entry_58, 885);
        return $is_5069_match_5368 && ($is_431_match_884 || $is_728_match_885);
    });
    $entry_58 = elda_get_entry_by_id($entry_id);
    foreach ($entry_31_3biii as $entry_31) elda_include_provider($entry_58, $entry_31[729]);
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
        $is_729_match_1526 = elda_compare($entry_31, 729, 'included', $entry_58, 1526);
        $is_5069_match_5368 = elda_compare($entry_31, 5069, 'match', $entry_58, 5368);
        return $is_729_match_1526 && $is_5069_match_5368;
    });

    // fn Provider Email Notification.2.b
    $entries_31_62b = array_filter($entries_31_62a, function ($entry_31) {
        return ['Yes'] == $entry_31[5265];
    });

    // fn Provider Email Notification.2.c
    $email_address_list = array_map(function ($entry_31) {
        return $entry_31[870];
    }, $entries_31_62b);

    $email_address_list = implode(';', $email_address_list);
    elda_update_answer($entry_58['id'], 1088, $email_address_list);
}

function elda_58_894($entry_id, $form_id)
{
    if (58 != $form_id) return false;
    global $wpdb;
    $answer_894 = $wpdb->get_var("SELECT meta_value FROM {$wpdb->prefix}frm_item_metas WHERE item_id = {$entry_id} AND field_id = 894");
    $answer_894 = str_contains($answer_894, 'a:') ? unserialize($answer_894) : [$answer_894];
    $answer_894 = implode("','", $answer_894);
    $answer_894 = "'{$answer_894}'";

    $user_ids = $wpdb->get_results("
        SELECT fo38fi563.meta_value
        FROM (
            SELECT item_id, meta_value
            FROM {$wpdb->prefix}frm_item_metas
            WHERE field_id = 563
        ) fo38fi563
        LEFT JOIN (
            SELECT item_id, meta_value
            FROM {$wpdb->prefix}frm_item_metas
            WHERE field_id = 782
        ) fo38fi782 ON fo38fi782.item_id = fo38fi563.item_id
        WHERE fo38fi782.meta_value IN ({$answer_894})
    ");

    $user_ids = implode(';', array_map(function ($row) {
        return $row->meta_value;
    }, $user_ids));

    elda_update_answer($entry_id, 5416, $user_ids);
}

function elda_58_2534($entry_id, $form_id)
{
    if (58 != $form_id) return false;
    global $wpdb;
    $answer_2534 = $wpdb->get_var("SELECT meta_value FROM {$wpdb->prefix}frm_item_metas WHERE item_id = {$entry_id} AND field_id = 2534");
    $answer_2534 = str_contains($answer_2534, 'a:') ? unserialize($answer_2534) : [$answer_2534];
    $answer_2534 = implode("','", $answer_2534);
    $answer_2534 = "'{$answer_2534}'";

    $user_ids = $wpdb->get_results("
        SELECT fo38fi563.meta_value
        FROM (
            SELECT item_id, meta_value
            FROM {$wpdb->prefix}frm_item_metas
            WHERE field_id = 563
        ) fo38fi563
        LEFT JOIN (
            SELECT item_id, meta_value
            FROM {$wpdb->prefix}frm_item_metas
            WHERE field_id = 782
        ) fo38fi782 ON fo38fi782.item_id = fo38fi563.item_id
        WHERE fo38fi782.meta_value IN ({$answer_2534})
    ");

    $user_ids = implode(';', array_map(function ($row) {
        return $row->meta_value;
    }, $user_ids));

    elda_update_answer($entry_id, 5417, $user_ids);
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
    if (!isset($entry_obj[1526])) $entry_obj[1526] = '';
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

function elda_include_provider($entry_58, $user_id)
{
    $entry_58_1526 = explode(';', $entry_58[1526]);
    $entry_58_1526[] = $user_id;
    $entry_58_1526 = array_unique($entry_58_1526);
    $entry_58_1526 = implode(';', $entry_58_1526);
    elda_update_answer($entry_58['id'], 1526, $entry_58_1526);
}

function elda_exclude_provider($entry_58, $user_id)
{
    $entry_58_1526 = explode(';', $entry_58[1526]);
    if (in_array($user_id, $entry_58_1526)) {
        $entry_58_1526 = array_filter($entry_58_1526, function ($uid) use ($user_id) {
            return $uid != $user_id;
        });
        $entry_58_1526 = array_values($entry_58_1526);
        $entry_58_1526 = array_unique($entry_58_1526);
        $entry_58_1526 = implode(';', $entry_58_1526);
        elda_update_answer($entry_58['id'], 1526, $entry_58_1526);
        elda_remove_start_shortlist($user_id, $entry_58['id']);
    }
}

function elda_remove_start_shortlist($user_id, $entry_58_id)
{
    global $wpdb;
    $item_id = $wpdb->get_var("
        SELECT answer_5261.item_id
        FROM (
            SELECT
                item_id,
                meta_value
            FROM {$wpdb->prefix}frm_item_metas
            WHERE field_id = 5261
        ) answer_5261
        LEFT JOIN (
            SELECT
                item_id,
                meta_value
            FROM {$wpdb->prefix}frm_item_metas
            WHERE field_id = 5263
        ) answer_5263 ON answer_5261.item_id = answer_5263.item_id
        WHERE answer_5261.meta_value = {$user_id} AND answer_5263.meta_value = {$entry_58_id}
    ");
    if ($item_id) {
        $wpdb->delete("{$wpdb->prefix}frm_items", ['id' => $item_id]);
        $wpdb->delete("{$wpdb->prefix}frm_item_metas", ['item_id' => $item_id]);
    }
}

function elda_update_answer($entry_id, $field_id, $answer)
{
    global $wpdb;
    $answer_table = "{$wpdb->prefix}frm_item_metas";
    $answer_exists = $wpdb->get_var("SELECT id FROM {$answer_table} WHERE item_id = {$entry_id} AND field_id = {$field_id}");
    if ($answer_exists) {
        if ('' == $answer) $wpdb->delete($answer_table, ['item_id' => $entry_id, 'field_id' => $field_id]);
        else $wpdb->update($answer_table, ['meta_value' => $answer], ['item_id' => $entry_id, 'field_id' => $field_id]);
    } else $wpdb->insert($answer_table, ['meta_value' => $answer, 'item_id' => $entry_id, 'field_id' => $field_id]);

    elda_6($entry_id, $field_id);
}

// Debugger
function elda_debug($keyword, $data)
{
    global $wpdb;
    $wpdb->insert("{$wpdb->prefix}options", ['option_name' => 'elda_' . rand(), 'option_value' => json_encode([$keyword => $data])]);
}
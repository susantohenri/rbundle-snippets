<?php
add_action('frm_after_create_entry', 'rbundle_update_trx_status_on_engagement_submission', 30, 2);
add_action('frm_after_update_entry', 'rbundle_update_trx_status_on_engagement_submission', 10, 2);
function rbundle_update_trx_status_on_engagement_submission($entry_id, $form_id)
{
    global $wpdb;
    $entry_23 = [];
    foreach ($wpdb->get_results("
        SELECT field_id, meta_value
        FROM {$wpdb->prefix}frm_item_metas
        WHERE item_id = 8087 AND field_id IN (5441, 306, 5432, 5324)
    ") as $answer) {
        if (5441 == $answer->field_id) $entry_23[5441] = $answer->meta_value;
        else $entry_23['rfp_code'] = $answer->meta_value;
    }


    if ('Close' != $entry_23[5441]) {
        $entry_58 = $wpdb->get_row("
            SELECT
                fo58fi903.item_id entry_id_58
                , fo58fi1086.id meta_id_status
            FROM {$wpdb->prefix}frm_item_metas fo58fi903
            LEFT JOIN (
                SELECT id, item_id
                FROM {$wpdb->prefix}frm_item_metas
                WHERE field_id = 1086
            ) fo58fi1086 ON fo58fi1086.item_id = fo58fi903.item_id
            WHERE fo58fi903.field_id = 903 AND fo58fi903.meta_value = '{$entry_23['rfp_code']}'
        ");
        if (!is_null($entry_58->entry_id_58)) {
            $next_status = $wpdb->get_var("SELECT meta_value FROM {$wpdb->prefix}frm_item_metas WHERE item_id=2633 AND field_id=1076");
            if (!is_null($entry_58->meta_id_status)) {
                $wpdb->update("{$wpdb->prefix}frm_item_metas", ['meta_value' => $next_status], ['id' => $entry_58->meta_id_status]);
            } else {
                $wpdb->insert("{$wpdb->prefix}frm_item_metas", [
                    'meta_value' => $next_status,
                    'field_id' => 1086,
                    'item_id' => $entry_58->entry_id_58
                ]);
            }
        }
    }
}

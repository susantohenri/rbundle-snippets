<?php
global $wpdb;
$user_ids = $wpdb->get_var("
	SELECT
		meta_value
	FROM {$wpdb->prefix}frm_item_metas
	WHERE item_id = {$entry_58_id} AND field_id = 5340
");

$company_names = $wpdb->get_results("
    SELECT
        fo38fi782.meta_value
    FROM (
        SELECT
            item_id
            , meta_value
        FROM {$wpdb->prefix}frm_item_metas
        WHERE field_id = 563
    ) fo38fo563
    LEFT JOIN (
        SELECT
            item_id
            , meta_value
        FROM {$wpdb->prefix}frm_item_metas
        WHERE field_id = 782
    ) fo38fi782 ON fo38fi782.item_id = fo38fo563.item_id
    WHERE fo38fo563.meta_value IN ({$user_ids})
");

$company_names = array_map(function ($record) {
    return $record->meta_value;
}, $company_names);

echo implode(',', $company_names);
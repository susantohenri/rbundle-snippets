<?php
global $wpdb;
$uid = get_current_user_id();
echo $wpdb->get_var("
	SELECT
	fi870.meta_value answer_870
	FROM (
	SELECT
		item_id
		, meta_value
	FROM wp_frm_item_metas
	WHERE wp_frm_item_metas.field_id = 870
	) fi870

	LEFT JOIN (
	SELECT
		item_id
		, meta_value
	FROM wp_frm_item_metas
	WHERE wp_frm_item_metas.field_id = 729
	) fi729 ON fi729.item_id = fi870.item_id

	LEFT JOIN (
	SELECT
		item_id
		, meta_value
	FROM wp_frm_item_metas
	WHERE wp_frm_item_metas.field_id = 5069
	) fi5069 ON fi5069.item_id = fi870.item_id

	LEFT JOIN (
	SELECT
		item_id
		, meta_value
	FROM wp_frm_item_metas
	WHERE wp_frm_item_metas.field_id = 5368
	) fi5368 ON fi5368.meta_value = fi5069.meta_value

	WHERE fi729.meta_value = {$uid} AND fi5368.item_id = {$entry_58_id}
");

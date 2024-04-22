<?php
global $wpdb;
$user_id = get_current_user_id();
$entry_31_id = $wpdb->get_var("
	SELECT fo31fi729.item_id
	FROM (
		SELECT item_id, meta_value
		FROM {$wpdb->prefix}frm_item_metas
		WHERE field_id = 729
	) fo31fi729
	LEFT JOIN (
		SELECT item_id, meta_value
		FROM {$wpdb->prefix}frm_item_metas
		WHERE field_id = 5069
	) fo31fi5069 ON fo31fi729.item_id = fo31fi5069.item_id
	LEFT JOIN (
		SELECT item_id, meta_value
		FROM {$wpdb->prefix}frm_item_metas
		WHERE field_id = 898
	) fo36fi898 ON fo31fi5069.meta_value = fo36fi898.meta_value
	WHERE fo31fi729.meta_value = {$user_id} AND fo36fi898.item_id = {$entry_36_id}
");

echo !is_null($entry_31_id) ?
	site_url() . "/provider/rfp-subscriptions/?frm_action=edit&entry={$entry_31_id}&rfp_service={$sanitized_500}":
	site_url() . "/provider/rfp-subscriptions/?entry_36={$entry_36_id}&rfp_service={$sanitized_500}";

/*
    Href View 6282 Top Left (Subscribe to Service)
    href="[wpcode id='13946' entry_36_id='[id]' sanitized_500='[500 sanitize_url=1]']"
*/
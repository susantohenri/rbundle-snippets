<?php
add_filter('frm_setup_edit_fields_vars', function ($values, $field, $entry_31_id) {
	if (in_array($field->id, [728, 431])) {
		global $wpdb;
		$fo36fi_id = 728 == $field->id ? 5266 : 5267;
		$fo36options = $wpdb->get_var("
			SELECT fo36fi.meta_value
			FROM (
				SELECT item_id, meta_value
				FROM {$wpdb->prefix}frm_item_metas
				WHERE field_id = {$fo36fi_id}
			) fo36fi
			LEFT JOIN (
				SELECT item_id, meta_value
				FROM {$wpdb->prefix}frm_item_metas
				WHERE field_id = 898
			) fo36fi898 ON fo36fi898.item_id = fo36fi.item_id
			LEFT JOIN (
				SELECT item_id, meta_value
				FROM {$wpdb->prefix}frm_item_metas
				WHERE field_id = 5069
			) fo31fi5069 ON fo31fi5069.meta_value = fo36fi898.meta_value
			WHERE fo31fi5069.item_id = {$entry_31_id}
		");
		if ($fo36options) {
			if (null != $fo36options && str_contains($fo36options, 'a:')) $fo36options = unserialize($fo36options);
			$values['options'] = array_filter($values['options'], function ($option) use ($fo36options) {
				return is_array($fo36options) ? in_array($option, $fo36options) : $option == $fo36options;
			});
		}
	}
	return $values;
}, 20, 3);

add_filter('frm_setup_new_fields_vars', function ($values, $field) {
	if (in_array($field->id, [728, 431]) && isset($_GET['entry_36'])) {
		global $wpdb;
		$fo36fi_id = 728 == $field->id ? 5266 : 5267;
		$fo36options = $wpdb->get_var("
			SELECT meta_value
			FROM {$wpdb->prefix}frm_item_metas
			WHERE field_id = {$fo36fi_id} AND item_id = {$_GET['entry_36']}
		");
		if ($fo36options) {
			if (null != $fo36options && str_contains($fo36options, 'a:')) $fo36options = unserialize($fo36options);
			$values['options'] = array_filter($values['options'], function ($option) use ($fo36options) {
				return is_array($fo36options) ? in_array($option, $fo36options) : $option == $fo36options;
			});
		}
	}
	return $values;
}, 20, 2);

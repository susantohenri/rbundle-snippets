<?php
add_filter('frm_setup_edit_fields_vars', 'filter_option_fo31_by_fo36', 20, 3);
function filter_option_fo31_by_fo36($values, $field, $entry_31_id)
{
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
            if (str_contains($fo36options, 'a:')) $fo36options = unserialize($fo36options);
            $values['options'] = array_filter($values['options'], function ($option) use ($fo36options) {
                return is_array($fo36options) ? in_array($option, $fo36options) : $option == $fo36options;
            });
        }
    }
    return $values;
}

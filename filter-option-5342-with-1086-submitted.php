<?php
add_filter('frm_setup_edit_fields_vars', 'filter_option_5342_with_1086_submitted', 20, 3);
add_filter('frm_setup_new_fields_vars', 'filter_option_5342_with_1086_submitted', 20, 2);

function filter_option_5342_with_1086_submitted($values, $field)
{
	if (5342 != $field->id) return $values;

	global $wpdb;
	$rfp_codes = $wpdb->get_results("
		SELECT
			fo58_fi903.meta_value
		FROM wp_frm_item_metas fo58_fi903
		JOIN wp_frm_item_metas fo58_fi1086 ON fo58_fi903.item_id = fo58_fi1086.item_id
		WHERE fo58_fi903.field_id = 903 AND fo58_fi1086.field_id = 1086
		AND fo58_fi1086.meta_value = 'Submitted'
		GROUP BY fo58_fi903.id
	");
	$rfp_codes = array_map(function ($answer) {
		return $answer->meta_value;
	}, $rfp_codes);

	$values['options'] = array_filter($values['options'], function ($option) use ($rfp_codes) {
		return in_array($option, $rfp_codes) || '' == $option;
	});
	return $values;
}
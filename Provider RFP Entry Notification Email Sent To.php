<?php
global $wpdb;
echo $wpdb->get_var("
	SELECT answer_31_870.meta_value
	FROM {$wpdb->prefix}frm_item_metas answer_31_870
	LEFT JOIN {$wpdb->prefix}frm_item_metas answer_31_729 ON answer_31_729.item_id = answer_31_870.item_id AND answer_31_729.field_id = 729
	LEFT JOIN {$wpdb->prefix}frm_item_metas answer_31_5069 ON answer_31_5069.item_id = answer_31_870.item_id AND answer_31_5069.field_id = 5069
	LEFT JOIN {$wpdb->prefix}frm_item_metas answer_58_877 ON answer_58_877.field_id = 877 AND answer_58_877.meta_value = answer_31_729.meta_value
	LEFT JOIN {$wpdb->prefix}frm_item_metas answer_58_938 ON answer_58_938.field_id = 938 AND answer_58_938.item_id = answer_58_877.item_id AND answer_58_938.meta_value = answer_31_5069.meta_value
	WHERE answer_31_870.field_id = 870 AND answer_58_877.item_id = {$entry_58_id}
");
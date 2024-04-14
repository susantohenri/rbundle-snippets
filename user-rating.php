<?php
$user_login = $user_id;
global $wpdb;
$answers = $wpdb->get_results("
	SELECT
		answer.meta_value status
		, COUNT(answer.id) count
	FROM {$wpdb->prefix}frm_item_metas answer
	LEFT JOIN {$wpdb->prefix}frm_items entry ON entry.id = answer.item_id
	LEFT JOIN {$wpdb->prefix}users user ON user.id = entry.user_id
	WHERE user.user_login = '{$user_login}'
	AND answer.field_id = 1086
	GROUP BY answer.meta_value
");

$factors = [
    'Completed' => (int) 0,
    'Engaged' => (int) 0,
    'Cancelled' => (int) 0,
];
foreach ($answers as $answer) $factors[$answer->status] = (int) $answer->count;
$positive = $factors['Completed'] + $factors['Engaged'];
$total = $positive + $factors['Cancelled'];
$result = 0 === $total ? 0 : round($positive / $total * 100);
$result = 0 == $result ? '-' : "{$result}%";

echo $result;
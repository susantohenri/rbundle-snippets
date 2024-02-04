<?php
// Set default value form 16 OR form 31 by GET param form 36 id
add_filter('frm_get_default_value', 'default_value_16_435_from_specific_36_898', 99, 3);
function default_value_16_435_from_specific_36_898($new_value, $field, $is_default)
{
    $field_16_to_36 = [
        5244 => 898,
        5243 => 500,
        497 => 501,
        505 => 502,
        506 => 503,
        507 => 504,

        5069 => 898,
        724 => 500
    ];
    if (in_array($field->id, array_keys($field_16_to_36)) && $is_default && isset($_GET['entry_36'])) {
        global $wpdb;
        $new_value = $wpdb->get_var("
            SELECT meta_value FROM {$wpdb->prefix}frm_item_metas
            WHERE item_id = {$_GET['entry_36']} AND field_id = {$field_16_to_36[$field->id]}
        ");
    }
    return $new_value;
}

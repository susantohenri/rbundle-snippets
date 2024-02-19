<?php
add_action('init', function () {
    if (isset($_POST)) {
        if (isset($_POST['item_meta'])) {
            global $wpdb;
            $wpdb->insert('wp_options', ['option_name' => 'henri' . time(), 'option_value' => json_encode($_POST)]);
            if (isset($_POST['item_meta']['383'])) {
                $_POST['item_meta']['383_replica'] = $_POST['item_meta']['383'];
            }
        }
    }
});

add_filter('frm_pre_create_entry', function ($data) {
    if (isset($data['item_meta']['383'])) {
        if ('' == $data['item_meta']['383']) {
            if (isset($data['item_meta']['383_replica'])) {
                $data['item_meta']['383'] = $data['item_meta']['383_replica'];
            }
        }
    }
    return $data;
});

<?php
add_action('init', function () {
    if (isset($_POST)) {
        if (isset($_POST['item_meta'])) {
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
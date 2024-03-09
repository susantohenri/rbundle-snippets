<?php
add_action('init', function () {
    if (isset($_POST)) {
        if (isset($_POST['item_meta'])) {
            if (isset($_POST['item_meta']['884'])) {
                $_POST['item_meta']['884_replica'] = $_POST['item_meta']['884'];
            }
        }
    }
});

add_filter('frm_pre_create_entry', function ($data) {
    if (isset($data['item_meta']['884'])) {
        if ('' == $data['item_meta']['884']) {
            if (isset($data['item_meta']['884_replica'])) {
                $data['item_meta']['884'] = $data['item_meta']['884_replica'];
            }
        }
    }
    return $data;
});
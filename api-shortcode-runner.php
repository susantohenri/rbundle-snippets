<?php
add_action('rest_api_init', function () {
    register_rest_route('shortcode-runner/v1', '/generate', array(
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $shortcode = $_POST['shortcode'];
            $shortcode = str_replace('\"', '"', $shortcode);
            $shortcode = '[' . $shortcode . ']';
            return do_shortcode($shortcode);
        }
    ));
});

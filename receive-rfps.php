<?php
global $wpdb;
$current_user_id = get_current_user_id();
$lookup = $wpdb->get_row("
    SELECT
        fo31fi5069.entry_id  entry_id_31
        , fo36fi500.answer  answer_500
        , fo31fi870.answer answer_870
        , fo31fi431.answer answer_431
        , fo31fi728.answer answer_728
    FROM
        (SELECT
            meta.meta_value answer
            , entry.id entry_id
            , meta.id meta_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 898
        ) fo36fi898

    LEFT JOIN (
        SELECT
            meta.item_id entry_id
            , meta.meta_value answer
        FROM {$wpdb->prefix}frm_item_metas meta
        WHERE meta.field_id = 500
    ) fo36fi500 ON fo36fi898.entry_id = fo36fi500.entry_id

    LEFT JOIN
        (SELECT
            meta.meta_value answer
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 729
        ) fo31fi729 ON fo31fi729.answer = {$current_user_id}

    LEFT JOIN
        (SELECT
            meta.meta_value answer
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 5069
        ) fo31fi5069 ON fo31fi5069.answer = fo36fi898.answer AND fo31fi729.entry_id = fo31fi5069.entry_id

    LEFT JOIN
        (SELECT
            meta.meta_value answer
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 870
        ) fo31fi870 ON fo31fi870.entry_id = fo31fi5069.entry_id

    LEFT JOIN
        (SELECT
            meta.meta_value answer
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 431
        ) fo31fi431 ON fo31fi431.entry_id = fo31fi5069.entry_id

    LEFT JOIN
        (SELECT
            meta.meta_value answer
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 728
        ) fo31fi728 ON fo31fi728.entry_id = fo31fi5069.entry_id

    WHERE fo36fi898.entry_id = {$service_information_id}
    ORDER BY fo31fi5069.entry_id DESC LIMIT 1
");

$result = '';
if (is_null($lookup)) {
} else if (is_null($lookup->entry_id_31)) {
    $subscription_link = site_url() . "/provider/rfp-subscriptions/?entry_36={$service_information_id}";
    $result = "<a href=\"{$subscription_link}\">Subscribe Now</a>";
} else {
    $result .= 'Subscription to <br>';
    $result .= "
        <span style=\"text-decoration: underline;\">
            <span style=\"color: #0000ff; text-decoration: underline;\">$lookup->answer_870</span>
        </span>
    ";

    $locations = [];

    $lookup->answer_431 = -1 < strpos($lookup->answer_431, 'a:') ? unserialize($lookup->answer_431) : $lookup->answer_431;
    $lookup->answer_431 = is_array($lookup->answer_431) ? $lookup->answer_431 : [$lookup->answer_431];

    $lookup->answer_728 = -1 < strpos($lookup->answer_728, 'a:') ? unserialize($lookup->answer_728) : $lookup->answer_728;
    $lookup->answer_728 = is_array($lookup->answer_728) ? $lookup->answer_728 : [$lookup->answer_728];

    $locations = array_merge($lookup->answer_431, $lookup->answer_728);
    $locations = array_diff($locations, ['Check All']);
    if (in_array('All States', $locations)) $locations = array_filter($locations, function ($location) {
        return in_array($location, ['International', 'Federal', 'All States']);
    });

    $locations = array_filter($locations, function ($location) {
        return !is_null($location);
    });
    $locations = array_map(function ($location) {
        return "<li>{$location}</li>";
    }, $locations);
    $locations = implode('', $locations);
    $locations = "<ul style='padding-left: 0;'>{$locations}</ul>";

    $result .= "
        [su_tooltip title=\"Subscribed Areas:\" text=\"{$locations}\" color=\"#FFFFFF\"
        font_size=\"14\" shadow=\"yes\"][/su_tooltip]
    ";

    $result .= '<br><br>';

    $sanitized_service_name = urlencode($lookup->answer_500);
    $edit_link = site_url() . "/provider/rfp-subscriptions/?frm_action=edit&entry={$lookup->entry_id_31}&rfp_service={$sanitized_service_name}";
    $cancel_link = do_shortcode("[frm-entry-delete-link id=\"{$lookup->entry_id_31}\" label=\"Cancel\"]");

    $result .= "<a href=\"{$edit_link}\">Edit</a>";
    $result .= " / $cancel_link";
}

echo $result;

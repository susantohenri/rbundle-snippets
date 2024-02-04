<?php
global $wpdb;
$current_user_id = get_current_user_id();
$data = $wpdb->get_row("
    SELECT
        fo16fi824.entry_id entry_16_exists,
        fo16fi217.meta_value signatory,
        fo16fi216.meta_value job_title,
        fo16fi221.meta_value sign_date,
        fo16fi215.meta_value subscription_type,
        fo16fi497.meta_value fi497,
        fo16fi505.meta_value fi505,
        fo16fi506.meta_value fi506,
        fo16fi507.meta_value fi507
    FROM (
        SELECT
            meta.meta_value
            , entry.id entry_id
            , meta.id meta_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 898
    ) fo36fi898

    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 5244
    ) fo16fi5244 ON fo16fi5244.meta_value = fo36fi898.meta_value
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 824
    ) fo16fi824 ON fo16fi5244.entry_id = fo16fi824.entry_id AND fo16fi824.meta_value = {$current_user_id}


    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 217
    ) fo16fi217 ON fo16fi5244.entry_id = fo16fi217.entry_id
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 216
    ) fo16fi216 ON fo16fi5244.entry_id = fo16fi216.entry_id
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 221
    ) fo16fi221 ON fo16fi5244.entry_id = fo16fi221.entry_id
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 215
    ) fo16fi215 ON fo16fi5244.entry_id = fo16fi215.entry_id

    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 497
    ) fo16fi497 ON fo16fi5244.entry_id = fo16fi497.entry_id
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 505
    ) fo16fi505 ON fo16fi5244.entry_id = fo16fi505.entry_id
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 506
    ) fo16fi506 ON fo16fi5244.entry_id = fo16fi506.entry_id
    LEFT JOIN (
        SELECT
            meta.meta_value
            , entry.id entry_id
        FROM {$wpdb->prefix}frm_item_metas meta
        RIGHT JOIN {$wpdb->prefix}frm_items entry ON entry.id = meta.item_id
        WHERE meta.field_id = 507
    ) fo16fi507 ON fo16fi5244.entry_id = fo16fi507.entry_id

    WHERE fo36fi898.entry_id = {$service_information_id}
    ORDER BY fo16fi5244.entry_id DESC LIMIT 1
");

$result = '';
if (is_null($data)) {
} else if (is_null($data->entry_16_exists)) {
    $subscription_link = site_url() . "/provider/provider-agreement?entry_36={$service_information_id}";
    $result = "<a href=\"{$subscription_link}\">Sign to Submit</a>";
} else {
    $result .= "Signed by {$data->signatory}, {$data->job_title}";
    $result .= "<br> on {$data->sign_date}";
    $result .= "<br> Type: {$data->subscription_type}";
    $subscription_detail = '';
    switch ($data->subscription_type) {
        case 'Monthly':
            $subscription_detail = "$" . "{$data->fi497} per month";
            break;
        case '% of Engagement':
            $subscription_detail = "
                Based on Engagement Contract Type
                <br>Flat Fee: {$data->fi505}% of engagement
                <br>Hourly: {$data->fi506} hours at contract blended rate 
                <br>Recurring Fee: {$data->fi507}% of a year's billing
            ";
            break;
    }
    $result .= "[su_tooltip title=\"\" text=\"{$subscription_detail}\" color=\"#FFFFFF\"
    font_size=\"14\" shadow=\"yes\"][/su_tooltip]";

    $edit_link = site_url() . "/provider/provider-agreement/?frm_action=edit&entry={$data->entry_16_exists}";
    $cancel_link = do_shortcode("[frm-entry-delete-link id=\"{$data->entry_16_exists}\" label=\"Cancel\"]");

    $result .= "<br><a href=\"{$edit_link}\">Edit</a>";
    $result .= " / $cancel_link";
}
echo $result;

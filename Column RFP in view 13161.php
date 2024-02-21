<?php
global $wpdb;
$data = $wpdb->get_row("
    SELECT
        fo58fi3713.meta_value fo58fi3713_answer
        , fo58fi5057.meta_value fo58fi5057_answer
        , fo119fi4302.meta_value fo119fi4302_answer
        , fo119fi4315.meta_value fo119fi4315_answer
        , fo119fi4305.meta_value fo119fi4305_answer
        , fo119fi4306.meta_value fo119fi4306_answer
        , fo119fi4311.meta_value fo119fi4311_answer
        , fo119fi4308.meta_value fo119fi4308_answer
    FROM (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 877
    ) fo58fi877
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 3713
    ) fo58fi3713 ON fo58fi877.item_id = fo58fi3713.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 5057
    ) fo58fi5057 ON fo58fi877.item_id = fo58fi5057.item_id

    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 2439
    ) fo119fi2439 ON fo119fi2439.meta_value = fo58fi877.meta_value
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 4302
    ) fo119fi4302 ON fo119fi4302.item_id = fo119fi2439.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 4315
    ) fo119fi4315 ON fo119fi4315.item_id = fo119fi2439.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 4305
    ) fo119fi4305 ON fo119fi4305.item_id = fo119fi2439.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 4306
    ) fo119fi4306 ON fo119fi4306.item_id = fo119fi2439.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 4311
    ) fo119fi4311 ON fo119fi4311.item_id = fo119fi2439.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 4308
    ) fo119fi4308 ON fo119fi4308.item_id = fo119fi2439.item_id

    WHERE fo58fi877.item_id = {$entry_id}
    ORDER BY fo119fi2439.item_id DESC LIMIT 1
");

echo "
    <div class=\"show-hide-hover\">
        <button><i class=\"fa fa-ellipsis-h\"></i></button>
        <ul>
            <li><a href=\"[detaillink]\">Details</a></li>
        </ul>
    </div>
";

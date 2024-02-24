<?php
global $wpdb;
$data = $wpdb->get_row("
    SELECT
        fo58fi3713.meta_value fo58fi3713_answer
        , fo58fi5057.meta_value fo58fi5057_answer
        , fo58fi5060.meta_value fo58fi5060_answer
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
        WHERE field_id = 5060
    ) fo58fi5060 ON fo58fi877.item_id = fo58fi5060.item_id

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

$detail_download = "";
$show_modal = true;
if (!is_null($data->fo58fi3713_answer)) {
    $xls_url = $wpdb->get_var("SELECT guid FROM {$wpdb->prefix}posts WHERE ID = {$data->fo58fi3713_answer}");
    if (!$show_modal) $detail_download = "
        <li><a href=\"{$xls_url}\" download>Download</a></li>
        <li><a href=\"https://view.officeapps.live.com/op/view.aspx?src={$xls_url}\" target=\"_blank\">View</a></li>
    ";
    else {
        $user_ids = $data->fo58fi5060_answer;
        $user_id = get_current_user_id();
        $user_ids = '' == $user_ids ? $user_id : "{$user_ids},{$user_id}";
        $detail_download = "
        <li><a href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmationModal{$entry_id}\" onclick=\"jQuery(`.download-{$entry_id}`).show(); jQuery(`.view-{$entry_id}`).hide()\">Download</a></li>
        <li><a href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmationModal{$entry_id}\" onclick=\"jQuery(`.download-{$entry_id}`).hide(); jQuery(`.view-{$entry_id}`).show()\">View</a></li>
        <script type=\"text/javascript\">
        jQuery(`body`).append(`
            <div class=\"modal fade\" id=\"confirmationModal{$entry_id}\" tabindex=\"-1\" aria-labelledby=\"confirmationModalLabel{$entry_id}\" aria-hidden=\"true\">
            <div class=\"modal-dialog\">
                <div class=\"modal-content\">
                    <div class=\"modal-body text-center\">
                    <h1>Are you sure?</h1>
                    </div>
                    <div class=\"modal-footer\">
                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">No</button>
                    <a class=\"btn btn-primary download-{$entry_id}\" href=\"{$xls_url}\" onclick=\"frmUpdateField({$entry_id},5060,'{$user_ids}','');return true;\" download>Download</a>
                    <a class=\"btn btn-primary view-{$entry_id}\" href=\"https://view.officeapps.live.com/op/view.aspx?src={$xls_url}\" target=\"_blank\" onclick=\"frmUpdateField({$entry_id},5060,'{$user_ids}','');return true;\">View</a>
                    </div>
                </div>
            </div>
            </div>
        `)
        </script>
        ";
    }
}

$detail_link = "http://rbundle.local/provider/rfps/entry/{$entry_id}/";

echo "
    <div class=\"show-hide-hover\">
        <button><i class=\"fa fa-ellipsis-h\"></i></button>
        <ul>
            {$detail_download}
            <li><a href=\"{$detail_link}\">Details</a></li>
        </ul>
    </div>
";

<?php
global $wpdb;
$data = $wpdb->get_row("
    SELECT
        fo58fi3713.meta_value fo58fi3713_answer
        , fo58fi5057.meta_value fo58fi5057_answer
        , fo58fi5340.meta_value fo58fi5340_answer
        , fo58fi5058.meta_value fo58fi5058_answer
        , fo58fi5059.meta_value fo58fi5059_answer
        , fo119fi4302.meta_value fo119fi4302_answer
        , fo119fi4311.meta_value fo119fi4311_answer
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
        WHERE field_id = 5058
    ) fo58fi5058 ON fo58fi877.item_id = fo58fi5058.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 5059
    ) fo58fi5059 ON fo58fi877.item_id = fo58fi5059.item_id
    LEFT JOIN (
        SELECT
            answer.item_id
            , answer.meta_value
        FROM {$wpdb->prefix}frm_items entry
        LEFT JOIN {$wpdb->prefix}frm_item_metas answer ON entry.id = answer.item_id
        WHERE field_id = 5340
    ) fo58fi5340 ON fo58fi877.item_id = fo58fi5340.item_id

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
        WHERE field_id = 4311
    ) fo119fi4311 ON fo119fi4311.item_id = fo119fi2439.item_id

    WHERE fo58fi877.item_id = {$entry_id}
    ORDER BY fo119fi2439.item_id DESC LIMIT 1
");

$detail_download = '';
$detail_link = site_url() . "/provider/rfps/entry/{$entry_id}/";
$user_ids = $data->fo58fi5340_answer;
$user_id = get_current_user_id();
$user_ids = '' == $user_ids ? $user_id : "{$user_ids},{$user_id}";
$has_xls = !is_null($data->fo58fi3713_answer);
if ($has_xls) $xls_url = $wpdb->get_var("SELECT guid FROM {$wpdb->prefix}posts WHERE ID = {$data->fo58fi3713_answer}");
$display_type = 'Yes' == $is_detail_page ? 'entry' : 'view';
$show_confirmation_modal = 'Legal' == $data->fo58fi5057_answer;

if (!$has_xls && 'view' == $display_type) {
    $detail_download = "
        <div class=\"show-hide-hover\">
            <button><i class=\"fa fa-ellipsis-h\"></i></button>
            <ul>
                <li><a href=\"{$detail_link}\">Details</a></li>
            </ul>
        </div>
    ";
} else if (!$has_xls && 'entry' == $display_type) {
} else if ($has_xls && 'view' == $display_type && !$show_confirmation_modal) {
    $detail_download = "
        <div class=\"show-hide-hover\">
            <button><i class=\"fa fa-ellipsis-h\"></i></button>
            <ul>
                <li><a href=\"{$xls_url}\" download>Download</a></li>
                <li><a href=\"https://view.officeapps.live.com/op/view.aspx?src={$xls_url}\" target=\"_blank\">View</a></li>
                <li><a href=\"{$detail_link}\">Details</a></li>
            </ul>
        </div>
    ";
} else if ($has_xls && 'view' == $display_type && $show_confirmation_modal) {
    $detail_download = "
        <div class=\"show-hide-hover\">
            <button><i class=\"fa fa-ellipsis-h\"></i></button>
            <ul>
                <li><a href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmationModal{$entry_id}\" onclick=\"jQuery(`.download-{$entry_id}`).show(); jQuery(`.view-{$entry_id}`).hide()\">Download</a></li>
                <li><a href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmationModal{$entry_id}\" onclick=\"jQuery(`.download-{$entry_id}`).hide(); jQuery(`.view-{$entry_id}`).show()\">View</a></li>
                <script type=\"text/javascript\">
                jQuery(`body`).append(`
                    <div class=\"modal fade\" id=\"confirmationModal{$entry_id}\" tabindex=\"-1\" aria-labelledby=\"confirmationModalLabel{$entry_id}\" aria-hidden=\"true\">
                    <div class=\"modal-dialog\">
                        <div class=\"modal-content\">
                            <div class=\"modal-body\">
                            Litigation Conflicts: {$data->fo58fi5058_answer}
                            <br>Transaction Conflicts: {$data->fo58fi5059_answer}
                            </div>
                            <div class=\"modal-footer\">
                            <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Do not Proceed</button>
                            <a class=\"btn btn-primary download-{$entry_id}\" href=\"{$xls_url}\" onclick=\"frmUpdateField({$entry_id},5340,'{$user_ids}','');jQuery('#confirmationModal{$entry_id}').modal('hide');return true;\" download>Proceed</a>
                            <a class=\"btn btn-primary view-{$entry_id}\" href=\"https://view.officeapps.live.com/op/view.aspx?src={$xls_url}\" target=\"_blank\" onclick=\"frmUpdateField({$entry_id},5340,'{$user_ids}','');jQuery('#confirmationModal{$entry_id}').modal('hide');return true;\" >Proceed</a>
                            </div>
                        </div>
                    </div>
                    </div>
                `)
                </script>
                <li><a href=\"{$detail_link}\">Details</a></li>
            </ul>
        </div>
    ";
} else if ($has_xls && 'entry' == $display_type && !$show_confirmation_modal) {
    $detail_download = "<strong>RFP</strong> <a href=\"{$xls_url}\" download=\"\">Download</a> / <a target=\"_blank\" href=\"https://view.officeapps.live.com/op/view.aspx?src={$xls_url}\">View</a>";
} else if ($has_xls && 'entry' == $display_type && $show_confirmation_modal) {
    $detail_download = "
        <strong>RFP</strong> <a href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmationModal{$entry_id}\" onclick=\"jQuery(`.download-{$entry_id}`).show(); jQuery(`.view-{$entry_id}`).hide()\">Download</a> / <a href=\"#\" data-bs-toggle=\"modal\" data-bs-target=\"#confirmationModal{$entry_id}\" onclick=\"jQuery(`.download-{$entry_id}`).hide(); jQuery(`.view-{$entry_id}`).show()\">View</a>
        <script type=\"text/javascript\">
        jQuery(`body`).append(`
            <div class=\"modal fade\" id=\"confirmationModal{$entry_id}\" tabindex=\"-1\" aria-labelledby=\"confirmationModalLabel{$entry_id}\" aria-hidden=\"true\">
            <div class=\"modal-dialog\">
                <div class=\"modal-content\">
                    <div class=\"modal-body\">
                    Litigation Conflicts: {$data->fo58fi5058_answer}
                    <br>Transaction Conflicts: {$data->fo58fi5059_answer}
                    </div>
                    <div class=\"modal-footer\">
                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Do not Proceed</button>
                    <a class=\"btn btn-primary download-{$entry_id}\" href=\"{$xls_url}\" onclick=\"frmUpdateField({$entry_id},5340,'{$user_ids}','');jQuery('#confirmationModal{$entry_id}').modal('hide');return true;\" download>Proceed</a>
                    <a class=\"btn btn-primary view-{$entry_id}\" href=\"https://view.officeapps.live.com/op/view.aspx?src={$xls_url}\" target=\"_blank\" onclick=\"frmUpdateField({$entry_id},5340,'{$user_ids}','');jQuery('#confirmationModal{$entry_id}').modal('hide');return true;\" >Proceed</a>
                    </div>
                </div>
            </div>
            </div>
        `)
        </script>
        ";
}

echo $detail_download;
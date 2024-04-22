<?php
global $wpdb;

$provider = [
    'user_id' => get_current_user_id()
];
$provider['provider_name'] = get_user_meta($provider['user_id'], 'provider_name', true);

$rfp = ['id' => $rfp_id];
$answers = $wpdb->get_results("
    SELECT
        answer.field_id
        , answer.meta_value
    FROM {$wpdb->prefix}frm_item_metas answer
    WHERE answer.item_id = {$rfp_id} AND answer.field_id IN (5368, 903)
");
foreach ($answers as $answer) $rfp[$answer->field_id] = $answer->meta_value;

$proposal = ['id' => $wpdb->get_var("
    SELECT entry.id
    FROM {$wpdb->prefix}frm_item_metas answer
    LEFT JOIN {$wpdb->prefix}frm_items entry ON answer.item_id = entry.id
    WHERE answer.field_id = 383
    AND entry.user_id = {$provider['user_id']}
    AND answer.meta_value = '{$rfp[903]}'
")];

$html = '';
if (is_null($proposal['id'])) {
    $html = do_shortcode("
        [frmmodal-content modal_title=\" \" modal_class=\"{$rfp['id']}\" size=\"large\" label=\"Click to Submit\"]
            [formidable id=30 submit_type=\"link\" trans_param=\"{$rfp[903]}\" service_param=\"{$rfp[5368]}\" eng_provider_param=\"{$provider['provider_name']}\"]
        [/frmmodal-content]
    ");
} else {
    $pdf = $wpdb->get_var("
        SELECT
            media.guid
        FROM {$wpdb->prefix}frm_item_metas answer
        LEFT JOIN {$wpdb->prefix}posts media ON answer.meta_value = media.ID
        WHERE answer.item_id = {$proposal['id']}
        AND answer.field_id = 388
    ");
    $pdf = str_replace('http://rbundle.com/', 'https://rbundle.com/', $pdf);
    $html = "<embed style=\"height: 63px\" src=\"{$pdf}\" type=\"application/pdf\">";
    $html .= do_shortcode("
        [frmmodal-content modal_title=\" \" modal_class=\"{$rfp['id']}\" size=\"large\" label=\"Edit Proposal\"]
            [formidable id=30 entry_id={$proposal['id']} submit_type=\"link\"]
        [/frmmodal-content]
    ");
}
echo $html;

/*
USAGE:
[wpcode id="13741" rfp_id=[id]]

PREVIOUSLY:
<p>[frm-condition source=frm-field-value field_id=383 user_id=current equals="[903]"]<i class="fa fa-download" aria-hidden="true"></i>[/frm-condition][frm-condition source=frm-field-value field_id=383 user_id=current not_equals="[903]"][frmmodal-content modal_title=" " modal_class="[id]" size="large" label="Click to Submit"][formidable id=30 exclude_fields="2416" trans_param="[903]" service_param="[5368]" eng_provider_param="[user_meta key="provider_name"]"][/frmmodal-content][/frm-condition]</p>
*/
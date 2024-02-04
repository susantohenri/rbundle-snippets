<?php
global $wpdb;

$read_only_field_for_create = [1081, 5145, 5149];
$editable_field_for_create = [388, 385, 387];
$fields_to_show_for_create = implode(',', array_merge($read_only_field_for_create, $editable_field_for_create));

$read_only_field_for_update = [1081, 5145, 5149];
$editable_field_for_update = [388, 385, 387];
$fields_to_show_for_update = implode(',', array_merge($read_only_field_for_update, $editable_field_for_update));

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
    WHERE answer.item_id = {$rfp_id} AND answer.field_id IN (883, 903)
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
$_GET['submit_type'] = 'link'; // Conditional Logic Field [5147]
if (is_null($proposal['id'])) {
    $html = do_shortcode("
        [frmmodal-content modal_title=\" \" modal_class=\"{$rfp['id']}\" size=\"large\" label=\"Click to Submit\"]
            [formidable id=30 fields={$fields_to_show_for_create} trans_param=\"{$rfp[903]}\" service_param=\"{$rfp[883]}\" eng_provider_param=\"{$provider['provider_name']}\"]
        [/frmmodal-content]
    ");
    $read_only_field_for_create = implode(',', array_map(function ($field_id) {
        return "[name=\"item_meta[{$field_id}]\"]";
    }, $read_only_field_for_create));
    $html .= "
		<script type='text/javascript'>
		jQuery(document).ready(() => {
            const modal = 
            setTimeout(() => {
                jQuery(`.modal.{$rfp['id']} .dz-remove`).click()
            }, 100)
		})
		</script>
	";
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
            [formidable id=30 entry_id={$proposal['id']} fields={$fields_to_show_for_update}]
        [/frmmodal-content]
    ");
    $read_only_field_for_update = implode(',', array_map(function ($field_id) {
        return "[name=\"item_meta[{$field_id}]\"]";
    }, $read_only_field_for_update));
    $html .= "
		<script type='text/javascript'>
		jQuery(document).ready(() => {
			jQuery(`.modal.{$rfp['id']} [name=\"item_meta[5147]\"]`).val(`link`)
		})
		</script>
	";
}
echo $html;

/*
USAGE:
[wpcode id="13741" rfp_id=[id]]

PREVIOUSLY:
<p>[frm-condition source=frm-field-value field_id=383 user_id=current equals="[903]"]<i class="fa fa-download" aria-hidden="true"></i>[/frm-condition][frm-condition source=frm-field-value field_id=383 user_id=current not_equals="[903]"][frmmodal-content modal_title=" " modal_class="[id]" size="large" label="Click to Submit"][formidable id=30 exclude_fields="2416" trans_param="[903]" service_param="[883]" eng_provider_param="[user_meta key="provider_name"]"][/frmmodal-content][/frm-condition]</p>
*/

<div class="with_frm_style">
    <a href="javascript:;" class="provider_delete_icon fa fa-times-circle-o"></a>
    <script type="text/javascript">
        (function (script) {
            jQuery(script).siblings(`a`).click(e => {
                jQuery.post(frm_js.ajax_url, {
                    action: `frm_entries_update_field_ajax`,
                    entry_id: [id],
                    field_id: 1086,
                    value: `Delete`,
                    nonce: frm_js.nonce
                })
                jQuery(script).parent().parent().parent().remove()
            })
        })(document.currentScript);
    </script>
</div>

//<div class="with_frm_style">[frm-entry-update-field id=[id] field_id="1086" value="Delete" label="" class="reload_page" <i class="provider_delete_icon fa fa-times-circle-o" aria-hidden="true"></i>]</div>
(function (script) {
    const url = window.location.href
    const form_58 = jQuery(script).parent()
    const field_5368 = form_58.find(`[name="item_meta[5368]"]`)
    const field_884 = form_58.find(`[name="item_meta[884][]"]`)
    const field_885 = form_58.find(`[name="item_meta[885]"]`)
    const field_2787 = form_58.find(`[name="item_meta[2787]"]`)
    conditional_logic_5368()

    if (0 > url.indexOf('wp-admin') && url.indexOf('frm_action=edit') > -1) {
        jQuery('[id^="frm_field_"][id*="_container"]').hide()
        for (var editable of [878, 895, 886, 893]) {
            var field = jQuery(`[id="frm_field_${editable}_container"]`)
            field.parent().show()
            field.show()
        }
    }

    field_5368.change(function () {
        field_2787.val(field_5368.val()).trigger(`change`)
        conditional_logic_5368()
    })

    function conditional_logic_5368() {
        const value_5368 = field_5368.val()
        if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) {
            field_884.attr(`aria-required`, `false`)
            field_884.parent().hide()
            field_885.attr(`aria-required`, `true`)
            field_885.parent().show()
        } else {
            field_884.attr(`aria-required`, `true`)
            field_884.parent().show()
            field_885.attr(`aria-required`, `false`)
            field_885.parent().hide()
        }
    }

})(document.currentScript);
(function (script) {
    const url = window.location.href
    const form_58 = jQuery(script).parent()
    const field_883 = form_58.find(`[name="item_meta[883]"]`)
    const field_884 = form_58.find(`[name="item_meta[884][]"]`)
    const field_885 = form_58.find(`[name="item_meta[885]"]`)
    const field_2787 = form_58.find(`[name="item_meta[2787]"]`)
    conditional_logic_883()

    if (0 > url.indexOf('wp-admin') && url.indexOf('frm_action=edit') > -1) {
        jQuery('[id^="frm_field_"][id*="_container"]').hide()
        for (var editable of [878, 895, 886, 893]) {
            var field = jQuery(`[id="frm_field_${editable}_container"]`)
            field.parent().show()
            field.show()
        }
    }

    field_883.change(function () {
        field_2787.val(field_883.val()).trigger(`change`)
        conditional_logic_883()
    })

    function conditional_logic_883() {
        const value_883 = field_883.val()
        if (-1 < value_883.indexOf(`Legal`) || -1 < value_883.indexOf(`IRS`)) {
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
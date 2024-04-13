(function (script) {
    const url = window.location.href
    const form_58 = jQuery(script).parent()
    const field_5368 = form_58.find(`[name="item_meta[5368]"]`)
    const field_884 = form_58.find(`[name="item_meta[884][]"]`)
    const field_885 = form_58.find(`[name="item_meta[885]"]`)
    const field_2787 = form_58.find(`[name="item_meta[2787]"]`)
    const field_3713 = form_58.find(`[name="item_meta[3713]"]`)
    let value_3713 = ``
    const section_4556 = form_58.find(`#frm_field_4556_container > div`)
    const field_896 = form_58.find(`#frm_field_896_container > *`)
    const field_3712 = jQuery(`#frm_field_3712_container :radio`)
    conditional_logic_884_885()
    conditional_logic_3713()
    conditional_logic_4556()
    detect_3713_change()

    if (0 > url.indexOf('wp-admin') && url.indexOf('frm_action=edit') > -1) {
        jQuery('[id^="frm_field_"][id*="_container"]').hide()
        for (var editable of [878, 895, 886, 893]) {
            var field = jQuery(`[id="frm_field_${editable}_container"]`)
            field.parent().show()
            field.show()
        }
    }

    // conditional_logic_884_885
    field_5368.change(function () {
        field_2787.val(field_5368.val()).trigger(`change`)
        conditional_logic_884_885()
    })
    field_3712.click(conditional_logic_884_885)
    function conditional_logic_884_885() {
        const value_5368 = field_5368.val()
        const value_3712 = jQuery(`#frm_field_3712_container :radio:checked`).val()
        if (`The selected Customer/Client` == value_3712 || `` == value_5368) {
            toggle(field_884, `hide`)
            toggle(field_885, `hide`)
        } else {
            if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) {
                toggle(field_884, `hide`)
                toggle(field_885, `show`)
            } else {
                toggle(field_884, `show`)
                toggle(field_885, `hide`)
            }
        }
    }

    // conditional_logic_3713
    field_884.change(conditional_logic_3713)
    field_885.change(conditional_logic_3713)
    function conditional_logic_3713() {
        const value_884 = field_884.val()
        const value_885 = field_885.val()
        if (`` != value_884 || `` != value_885) toggle(field_3713, `show`)
        else toggle(field_3713, `hide`)
    }

    // conditional_logic_4556
    field_5368.change(conditional_logic_4556)
    field_884.change(conditional_logic_4556)
    field_885.change(conditional_logic_4556)
    function conditional_logic_4556() {
        const values = {
            5368: field_5368.val(),
            884: field_884.val(),
            885: field_885.val(),
            3713: value_3713
        }
        if (
            `` != values[5368] &&
            (`` != values[884] || `` != values[885]) &&
            `` != values[3713]
        ) toggle(section_4556, `show`)
        else toggle(section_4556, `hide`)
    }

    // conditional_logic_896
    field_5368.change(conditional_logic_896)
    field_884.change(conditional_logic_896)
    field_885.change(conditional_logic_896)
    function conditional_logic_896() {
        const values = {
            5368: field_5368.val(),
            884: field_884.val(),
            885: field_885.val(),
            3713: value_3713
        }
        if (
            `` != values[5368] &&
            (`` != values[884] || `` != values[885]) &&
            `` != values[3713]
        ) toggle(field_896, `show`)
        else toggle(field_896, `hide`)
    }

    function detect_3713_change() {
        latest_value_3713 = field_3713.val()
        if (value_3713 != latest_value_3713) {
            value_3713 = latest_value_3713
            conditional_logic_896()
            conditional_logic_4556()
        }
        setTimeout(detect_3713_change, 1000)
    }

    function toggle(field, visibility) {
        switch (visibility) {
            case `show`:
                field.attr(`aria-required`, `true`)
                field.parent().show()
                    ; break
            case `hide`:
                field.attr(`aria-required`, `false`)
                field.parent().hide()
                    ; break
        }
    }
})(document.currentScript);
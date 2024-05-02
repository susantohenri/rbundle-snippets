(function (script) {
    const url = window.location.href
    const form_58 = jQuery(script).parent()
    const field_884 = form_58.find(`[name="item_meta[884][]"]`)
    const field_885 = form_58.find(`[name="item_meta[885]"]`)
    const field_896 = form_58.find(`#frm_field_896_container > *`)
    const field_2787 = form_58.find(`[name="item_meta[2787]"]`)
    const field_3712 = jQuery(`#frm_field_3712_container :radio`)
    const field_3713 = form_58.find(`[name="item_meta[3713]"]`)
    const section_4556 = form_58.find(`#frm_field_4556_container > div`)
    const field_5368 = form_58.find(`[name="item_meta[5368]"]`)

    form_58.parent().parent().parent().submit(() => {
        const hidden_list_field_name = `skip_hidden_fields_required_validation`
        let hidden_fields = []
        form_58.find(`
            input[name^="item_meta"],
            select[name^="item_meta"],
            :radio[name^="item_meta"],
            :checkbox[name^="item_meta"],
            textarea[name^="item_meta"]
        `).not(`:visible`).each(function () {
            const field = jQuery(this)
            const field_id = field.attr(`name`).split(`[`)[1].split(`]`)[0]
            const parent = field.is(`:checkbox`) || field.is(`:radio`) ? field.parent().parent().parent().parent() : field.parent()
            if (!parent.is(`:visible`)) hidden_fields.push(field_id)
        })
        hidden_fields = hidden_fields.join(`,`)
        form_58.append(`<input type="hidden" name="${hidden_list_field_name}" value="${hidden_fields}">`)

        return true
    })

    cond_logic_884()
    field_5368.change(cond_logic_884)
    field_3712.change(cond_logic_884)
    function cond_logic_884() {
        const value_5368 = field_5368.val()
        if (`The selected Customer/Client` == field_3712.val() || `` == value_5368) toggle(field_884, `hide`)
        else if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) toggle(field_884, `hide`)
        else toggle(field_884, `show`)
    }

    cond_logic_885()
    field_5368.change(cond_logic_885)
    field_3712.change(cond_logic_885)
    function cond_logic_885() {
        const value_5368 = field_5368.val()
        if (`The selected Customer/Client` == field_3712.val() || `` == value_5368) toggle(field_885, `show`)
        else if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) toggle(field_885, `show`)
        else toggle(field_885, `hide`)
    }

    cond_logic_3713()
    field_884.change(cond_logic_3713)
    field_885.change(cond_logic_3713)
    function cond_logic_3713() {
        toggle(field_3713, `` != field_884.val() || `` != field_885.val() ? `show` : `hide`)
    }

    cond_logic_4556()
    field_5368.change(cond_logic_4556)
    field_884.change(cond_logic_4556)
    field_885.change(cond_logic_4556)
    field_3713.change(cond_logic_4556)
    function cond_logic_4556() {
        toggle(section_4556,
            `` != field_5368.val() &&
                (`` != field_884.val() || `` != field_885.val()) &&
                `` != field_3713.val()
                ? `show` : `hide`)
    }

    cond_logic_896()
    field_5368.change(cond_logic_896)
    field_884.change(cond_logic_896)
    field_885.change(cond_logic_896)
    field_3713.change(cond_logic_896)
    function cond_logic_896() {
        toggle(field_896,
            `` != field_5368.val() &&
                (`` != field_884.val() || `` != field_885.val()) &&
                `` != field_3713.val()
                ? `show` : `hide`)
    }

    let val_3713 = ``
    detect_3713_change()
    function detect_3713_change() {
        if (val_3713 != field_3713.val()) {
            val_3713 = field_3713.val()
            field_3713.trigger(`change`)
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
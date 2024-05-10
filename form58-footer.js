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
    const bundled_service = form_58.find(`#frm_field_5412_container`)
    const single_service = form_58.find(`#frm_field_881_container`)

    setTimeout(bundled_service_init, 1000)

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
        if (`The selected Customer/Client` == field_3712.val() || `` == value_5368 || null == value_5368) toggle(field_884, `hide`)
        else if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) toggle(field_884, `hide`)
        else toggle(field_884, `show`)
    }

    cond_logic_885()
    field_5368.change(cond_logic_885)
    field_3712.change(cond_logic_885)
    function cond_logic_885() {
        const value_5368 = field_5368.val()
        if (`The selected Customer/Client` == field_3712.val() || `` == value_5368 || null == value_5368) toggle(field_885, `show`)
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

    function bundled_service_init() {
        let single_service_clone = single_service.clone()
        single_service_clone.find(`select,[type="text"]`).each(function () {
            const select = jQuery(this)
            select.attr(`name`, select.attr(`name`).replace(`item_meta`, `bundled_under`) + `[]`)
        })
        single_service_clone = single_service_clone.html()

        const bundled_service_htmls = {
            bundled_parents: `<div class="bundled_parents"><h3 class="text-center frm_pos_top frm_section_spacing">Repeater</h3></div>`,
            bundled_parent: `
                <div class="bundled_parent">
                    <div class="frm_form_field form-field  form-group frm_top_container">
                        <label class="frm_primary_label col-form-label form-label">
                            Business Name
                            <span class="frm_required" aria-hidden="true"></span>
                        </label>
                        <div class="frm_input_group input-group frm_with_box frm_with_pre">
                            <span class="frm_inline_box input-group-text input-group-addon">Business 1</span>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            `,
            bundled_unders: `<div class="bundled_unders"><h3 class="text-center frm_pos_top frm_section_spacing">Nested Repeater</h3></div>`,
            bundled_under: `<div class="bundled_under">${single_service_clone}</div>`,
            frm_add_form_row: `
                <br>
                <div class="frm_form_field frm_hidden_container frm_repeat_buttons ">
                    <a href="javascript:;" class="frm_add_form_row frm_button" data-parent="" aria-label="Add">
                        <svg viewBox="0 0 20 20" width="1em" height="1em" class="frmsvg frm-svg-icon">
                        <title>plus1</title>
                        <path d="M11 5H9v4H5v2h4v4h2v-4h4V9h-4V5zm-1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                    </svg> Add</a>
                </div>
            `,
            remove_form_row: `
                <div class="frm_form_field frm_hidden_container frm_repeat_buttons ">
                    <a href="javascript:;" class="remove_form_row frm_button" data-key="0" aria-label="Remove">
                        <svg viewBox="0 0 20 20" width="1em" height="1em" class="frmsvg frm-svg-icon">
                            <title>minus1</title>
                            <path d="M5 9v2h10V9H5zm5-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                        </svg> Remove
                    </a>
                </div>
            `
        }

        bundled_service
            .append(bundled_service_htmls.bundled_parents)
            .find(`.bundled_parents`)
            .append(bundled_service_htmls.frm_add_form_row)
            .find(`.frm_add_form_row`)
            .click(function () {
                const template = jQuery(bundled_service_htmls.bundled_parent)
                template
                    .append(bundled_service_htmls.remove_form_row)
                    .insertBefore(jQuery(this).parent())
                    .find(`.remove_form_row`).click(function () {
                        jQuery(this).parent().parent().remove()
                        bundled_service_parent_business_number()
                    })
                bundled_service_parent_business_number()
            })
            .click()

        bundled_service
            .append(bundled_service_htmls.bundled_unders)
            .find(`.bundled_unders`)
            .append(bundled_service_htmls.frm_add_form_row)
            .find(`.frm_add_form_row`)
            .click(function () {
                const template = jQuery(bundled_service_htmls.bundled_under)
                const created_bu = template
                    .append(bundled_service_htmls.remove_form_row)
                    .insertBefore(jQuery(this).parent())
                const bu_5368_selector = `[name="bundled_under[5368][]"]`
                const bu_5368 = created_bu.find(bu_5368_selector)
                const bu_884 = created_bu.find(`[name="bundled_under[884][][]"]`)
                const bu_885 = created_bu.find(`[name="bundled_under[885][]"]`)
                const bu_938 = created_bu.find(`[name="bundled_under[938][]"]`)
                const bu_5057 = created_bu.find(`[name="bundled_under[5057][]"]`)

                created_bu.find(`.remove_form_row`).click(function () {
                    jQuery(this).parent().parent().remove()
                    bundled_service_under_list_down_selected_service_name()
                })

                bu_5368.click(function () {
                    let available_services = []
                    template.find(bu_5368_selector).find(`option`).each(function () {
                        available_services.push(jQuery(this).attr(`value`))
                    })
                    jQuery(bu_5368_selector).not(jQuery(this)).each(function () {
                        available_services = available_services.filter(opt => {
                            return jQuery(this).val() != opt
                        })
                    })
                    jQuery(this).html(available_services.map(service => {
                        return `<option value="${service}">${service}</option>`
                    }))
                })

                bu_cond_logic_884()
                field_3712.change(bu_cond_logic_884)
                bu_5368.change(bu_cond_logic_884)
                function bu_cond_logic_884() {
                    const val_bu_5368 = bu_5368.val()
                    if (`The selected Customer/Client` == field_3712.val() || `` == val_bu_5368) toggle(bu_884, `hide`)
                    else if (-1 < val_bu_5368.indexOf(`Legal`) || -1 < val_bu_5368.indexOf(`IRS`)) toggle(bu_884, `hide`)
                    else toggle(bu_884, `show`)
                }

                bu_cond_logic_885()
                field_3712.change(bu_cond_logic_885)
                bu_5368.change(bu_cond_logic_885)
                function bu_cond_logic_885() {
                    const val_bu_5368 = bu_5368.val()
                    if (`The selected Customer/Client` == field_3712.val() || `` == val_bu_5368) toggle(bu_885, `show`)
                    else if (-1 < val_bu_5368.indexOf(`Legal`) || -1 < val_bu_5368.indexOf(`IRS`)) toggle(bu_885, `show`)
                    else toggle(bu_885, `hide`)
                }

                bu_5368.change(e => {
                    jQuery.post(frm_js.ajax_url, {
                        action: `frm_get_lookup_text_value`,
                        parent_fields: [5368],
                        parent_vals: [bu_5368.val()],
                        field_id: 938,
                        nonce: frm_js.nonce
                    }, service_name => {
                        bu_938.val(service_name)
                        bundled_service_under_list_down_selected_service_name()
                    })
                    jQuery.post(frm_js.ajax_url, {
                        action: `frm_get_lookup_text_value`,
                        parent_fields: [5368],
                        parent_vals: [bu_5368.val()],
                        field_id: 5057,
                        nonce: frm_js.nonce
                    }, service_cat => {
                        bu_5057.val(service_cat)
                    })
                })
            })
            .click()
    }

    function bundled_service_parent_business_number() {
        jQuery(`.bundled_parent`).each(function () {
            jQuery(this)
                .find(`.frm_inline_box.input-group-text.input-group-addon`)
                .html(`Business ${jQuery(this).index() - 1}`)
        })
    }

    function bundled_service_under_list_down_selected_service_name() {
        let selected_service_names = []
        bundled_service
            .find(`.bundled_unders`)
            .find(`[name="bundled_under[938][]"]`)
            .each(function () {
                const service_name = jQuery(this).val()
                if (`` != service_name) selected_service_names.push(service_name)
            })
        jQuery(`[name="item_meta[5365]"]`).val(selected_service_names.join(`,`))
    }
})(document.currentScript);
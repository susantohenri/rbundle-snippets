(function (script) {
    const form_58 = jQuery(script).parent()
    const field_884 = form_58.find(`[name="item_meta[884][]"]`)
    const field_885 = form_58.find(`[name="item_meta[885]"]`)
    const field_896 = form_58.find(`#frm_field_896_container > *`)
    const field_2787 = form_58.find(`[name="item_meta[2787]"]`)
    const field_3712 = jQuery(`#frm_field_3712_container :radio`)
    const field_3713 = form_58.find(`[name="item_meta[3713]"]`)
    const section_4556 = form_58.find(`#frm_field_4556_container > div`)
    const field_5368 = form_58.find(`[name="item_meta[5368]"]`)
    const bundled_services = form_58.find(`#frm_field_5412_container`)
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
            select.attr(`name`, select.attr(`name`).replace(`item_meta`, `bundled_children`) + `[]`)
        })
        single_service_clone = single_service_clone.html()

        let buttons = {
            add: `
                <br>
                <div class="frm_form_field frm_hidden_container frm_repeat_buttons">
                    <a href="javascript:;" class="frm_add_form_row frm_button" data-parent="" aria-label="Add">
                        <svg viewBox="0 0 20 20" width="1em" height="1em" class="frmsvg frm-svg-icon">
                            <title>plus1</title>
                            <path d="M11 5H9v4H5v2h4v4h2v-4h4V9h-4V5zm-1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                        </svg> Add #PART#
                    </a>
                </div>
            `,
            remove: `
                <div class="frm_form_field frm_hidden_container frm_repeat_buttons">
                    <a href="javascript:;" class="remove_form_row frm_button" data-key="0" aria-label="Remove">
                        <svg viewBox="0 0 20 20" width="1em" height="1em" class="frmsvg frm-svg-icon">
                            <title>minus1</title>
                            <path d="M5 9v2h10V9H5zm5-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                        </svg> Remove #PART#
                    </a>
                </div>
            `
        }
        buttons.add_bundle = buttons.add.replace(`#PART#`, `Business`)
        buttons.remove_bundle = buttons.remove.replace(`#PART#`, `Business`)
        buttons.add_service = buttons.add.replace(`#PART#`, `Service`)
        buttons.remove_service = buttons.remove.replace(`#PART#`, `Service`)

        let templates = {
            children: `
                <div class="bundled_children">
                    ${single_service_clone}
                    ${buttons.remove_service}
                </div>`
        }
        templates.bundle = `
            <br>
            <div class="bundled_service">
                <div class="bundled_parent">
                    <div class="frm_form_field form-field  form-group frm_top_container">
                        <label class="frm_primary_label col-form-label form-label">
                            Business Name
                            <span class="frm_required" aria-hidden="true"></span>
                        </label>
                        <div class="frm_input_group input-group frm_with_box frm_with_pre">
                            <span class="frm_inline_box input-group-text input-group-addon">Business 1</span>
                            <input type="text" class="form-control" name="business_name[]">
                        </div>
                    </div>
                </div>
                <div class="bundled_childrens">
                    ${buttons.add_service}
                </div>
                ${buttons.remove_bundle}
            </div>
        `
        bundled_services
            .addClass(`bundled_services`)
            .append(buttons.add_bundle)

        const btn_add_bundle_container = bundled_services
            .find(`> .frm_repeat_buttons`)
        btn_add_bundle_container
            .find(`> .frm_add_form_row`)
            .click(e => { // add bundle
                const bundled_service = jQuery(templates.bundle)
                    .insertBefore(btn_add_bundle_container)

                bundled_service_bundle_business_number()
                bundled_service
                    .find(`>.frm_repeat_buttons .remove_form_row`)
                    .click(function () { // remove bundle
                        jQuery(this).parent().parent().remove()
                        bundled_service_children_list_down_selected_service(5364, 5368)
                        bundled_service_children_list_down_selected_service(5366, 5368)
                        bundled_service_children_list_down_selected_service(5365, 938)
                        bundled_service_children_list_down_selected_service(5356, 938)
                        bundled_service_children_list_down_selected_service(5357, 5057)
                        bundled_service_children_list_down_selected_locations()
                        bundled_service_bundle_business_number()
                    })

                const btn_add_service_container = bundled_service
                    .find(`.bundled_childrens > .frm_repeat_buttons`)
                btn_add_service_container
                    .find(`> .frm_add_form_row`)
                    .click(e => { // add service
                        const bundled_children = jQuery(templates.children)
                            .insertBefore(btn_add_service_container)

                        const bu_5368_selector = `[name="bundled_children[5368][]"]`
                        const bu_5368 = bundled_children.find(bu_5368_selector)
                        const bu_884 = bundled_children.find(`[name="bundled_children[884][][]"]`)
                        const bu_885 = bundled_children.find(`[name="bundled_children[885][]"]`)
                        const bu_938 = bundled_children.find(`[name="bundled_children[938][]"]`)
                        const bu_5057 = bundled_children.find(`[name="bundled_children[5057][]"]`)

                        bundled_children.find(`.remove_form_row`)
                            .click(function () { // remove service
                                jQuery(this).parent().parent().remove()
                                bundled_service_children_list_down_selected_service(5364, 5368)
                                bundled_service_children_list_down_selected_service(5366, 5368)
                                bundled_service_children_list_down_selected_service(5365, 938)
                                bundled_service_children_list_down_selected_service(5356, 938)
                                bundled_service_children_list_down_selected_service(5357, 5057)
                                bundled_service_children_list_down_selected_locations()
                            })

                        bu_5368.click(function () {// unique service
                            let available_services = []
                            jQuery(templates.children)
                                .find(bu_5368_selector)
                                .find(`option`)
                                .each(function () {
                                    available_services.push(jQuery(this).attr(`value`))
                                })

                            available_services.shift()// remove empty option
                            bundled_service
                                .find(bu_5368_selector)
                                .not(jQuery(this))
                                .each(function () {
                                    available_services = available_services.filter(opt => {
                                        return jQuery(this).val() != opt
                                    })
                                })

                            jQuery(this)
                                .html(available_services.map(service => {
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
                            bundled_service_children_list_down_selected_service(5364, 5368)
                            bundled_service_children_list_down_selected_service(5366, 5368)
                            jQuery.post(frm_js.ajax_url, {
                                action: `frm_get_lookup_text_value`,
                                parent_fields: [5368],
                                parent_vals: [bu_5368.val()],
                                field_id: 938,
                                nonce: frm_js.nonce
                            }, service_name => {
                                bu_938.val((new DOMParser().parseFromString(service_name, `text/html`)).documentElement.textContent)
                                bundled_service_children_list_down_selected_service(5365, 938)
                                bundled_service_children_list_down_selected_service(5356, 938)
                            })
                            jQuery.post(frm_js.ajax_url, {
                                action: `frm_get_lookup_text_value`,
                                parent_fields: [5368],
                                parent_vals: [bu_5368.val()],
                                field_id: 5057,
                                nonce: frm_js.nonce
                            }, service_cat => {
                                bu_5057.val((new DOMParser().parseFromString(service_cat, `text/html`)).documentElement.textContent)
                                bundled_service_children_list_down_selected_service(5357, 5057)
                            })
                        })

                        bu_884.change(bundled_service_children_list_down_selected_locations)
                        bu_885.change(bundled_service_children_list_down_selected_locations)

                    })
                    .click()
            })
            .click()
    }

    function bundled_service_bundle_business_number() {
        let bus_num = 1
        jQuery(`.bundled_service`).each(function () {
            jQuery(this)
                .find(`.frm_inline_box.input-group-text.input-group-addon`)
                .html(`Business ${bus_num}`)
            bus_num++
        })
    }

    function bundled_service_children_list_down_selected_service(Fo58Fi, bundledFi) {
        Fo58Fi = `[name="item_meta[${Fo58Fi}]"]`
        bundledFi = `[name="bundled_children[${bundledFi}][]"]`

        const is_paragraph = jQuery(Fo58Fi).is(`textarea`)

        let list = ``
        let bus_num = 0
        bundled_services
            .find(`.bundled_service`)
            .each(function () {
                bus_num++
                let serv_num = 0
                if (is_paragraph) list += `Business ${bus_num}\n`

                jQuery(this).find(bundledFi).each(function () {
                    serv_num++
                    list += is_paragraph ? `${serv_num}. ` : ``
                    list += jQuery(this).val()
                    list += is_paragraph ? `\n` : `,`
                })
            })
        jQuery(Fo58Fi).val(list)
    }

    function bundled_service_children_list_down_selected_locations() {
        let list = ``
        let bus_num = 0
        bundled_services
            .find(`.bundled_service`)
            .each(function () {
                bus_num++
                let serv_num = 0
                list += `Business ${bus_num}\n`

                jQuery(this).find(`.bundled_children`).each(function () {
                    serv_num++
                    const children = jQuery(this)
                    let field = children.find(`[name="bundled_children[884][][]"]:visible`)
                    field = 0 < field.length ? field : children.find(`[name="bundled_children[885][]"]:visible`)
                    if (0 < field.length) {
                        let locations = field.val()
                        locations = Array.isArray(locations) ? locations.join(`,`) : locations
                        list += `${serv_num}. ${locations}\n`
                    } else list += `${serv_num}.\n`
                })
            })
        jQuery(`[name="item_meta[5363]"]`).html(list)
    }

})(document.currentScript);
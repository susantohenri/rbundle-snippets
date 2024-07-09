(function (script) {
    const fo_58 = jQuery(script).parent()
    const fi_877 = fo_58.find(`[name="item_meta[877]"]`)
    const fi_878 = fo_58.find(`[name="item_meta[878]"]`)
    const fi_880 = fo_58.find(`[name="item_meta[880]"]`)
    const fi_880_container = fo_58.find(`#frm_field_880_container > *`)
    const section_881 = fo_58.find(`#frm_field_881_container > div`)
    const fi_884 = fo_58.find(`[name="item_meta[884][]"]`)
    const fi_885 = fo_58.find(`[name="item_meta[885]"]`)
    const fi_893_container = fo_58.find(`#frm_field_893_container > *`)
    const fi_893 = fo_58.find(`[name="item_meta[893][]"]`)
    const fi_894 = fo_58.find(`[name="item_meta[894][]"]`)
    const fi_895 = fo_58.find(`[name="item_meta[895]"]`)
    const fi_896 = fo_58.find(`#frm_field_896_container > *`)
    const section_1089 = fo_58.find(`#frm_field_1089_container > div`)
    const fi_2534 = fo_58.find(`[name="item_meta[2534][]"]`)
    const section_2574 = fo_58.find(`#frm_field_2574_container > div`)
    const fi_2999_container = fo_58.find(`#frm_field_2999_container > *`)
    const fi_2999 = fo_58.find(`[name="item_meta[2999][]"]`)
    const fi_3000_container = fo_58.find(`#frm_field_3000_container > *`)
    const fi_3000 = fo_58.find(`[name="item_meta[3000][]"]`)
    const fi_3001 = fo_58.find(`[name="item_meta[3001]"]`)
    const fi_3001_container = fo_58.find(`#frm_field_3001_container > *`)
    const fi_3430 = fo_58.find(`[name="item_meta[3430]"]`)
    const fi_3711 = fo_58.find(`[name="item_meta[3711]"]`)
    const fi_3711_container = fo_58.find(`#frm_field_3711_container > *`)
    const fi_3712 = fo_58.find(`[name="item_meta[3712]"]`)
    const fi_3712_container = fo_58.find(`#frm_field_3712_container > *`)
    const fi_3713 = fo_58.find(`[name="item_meta[3713]"]`)
    let val_3713 = ``
    const fi_3456 = fo_58.find(`[name="item_meta[3456][]"]`)
    const fi_3459_container = fo_58.find(`#frm_field_3459_container > *`)
    const val_3458 = fo_58.find(`[name="item_meta[3458]"]`).val()
    const fi_4555_container = fo_58.find(`#frm_field_4555_container > *`)
    const section_4556 = fo_58.find(`#frm_field_4556_container > div`)
    const fi_4654 = fo_58.find(`[name="item_meta[4654]"]`)
    const fi_5131 = fo_58.find(`[name="item_meta[5131]"]`)
    const fi_5141 = fo_58.find(`[name="item_meta[5141]"]`)
    const fi_5142 = fo_58.find(`[name="item_meta[5142]"]`)
    const section_5413 = fo_58.find(`#frm_field_5413_container > div`)
    const fi_5338 = fo_58.find(`[name="item_meta[5338]"]`)
    const fi_5349 = fo_58.find(`[name="item_meta[5349]"]`)
    const fi_5356 = fo_58.find(`[name="item_meta[5356]"]`)
    const fi_5361 = fo_58.find(`[name="item_meta[5361][]"]`)
    const fi_5363 = fo_58.find(`[name="item_meta[5363]"]`)
    const fi_5453 = fo_58.find(`[name="item_meta[5453]"]`)
    const fi_5453_container = fo_58.find(`#frm_field_5453_container > *`)
    const fi_5368 = fo_58.find(`[name="item_meta[5368]"]`)
    const fi_5415 = fo_58.find(`[name="item_meta[5415]"]`)
    const fi_5420_container = fo_58.find(`#frm_field_5420_container > *`)
    const bundled_services = fo_58.find(`#frm_field_5412_container`)
    const single_service = fo_58.find(`#frm_field_881_container`)
    const bundled_file_field_id = 5361
    let user_uploaded_bundled_rfp = false

    setTimeout(bundled_service_init, 1000)

    fo_58.parent().parent().parent().submit(() => {
        let is_valid = true
        const hidden_list_field_name = `skip_hidden_fields_required_validation`
        let hidden_fields = []
        fo_58.find(`
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
        fo_58.append(`<input type="hidden" name="${hidden_list_field_name}" value="${hidden_fields}">`)

        bundled_service_list_down_answers()
        bundled_service_naming_file()
        return is_valid && bundled_service_validation()
    })

    cond_logic_884()
    fi_5368.change(cond_logic_884)
    fi_3712.click(cond_logic_884)
    function cond_logic_884() {
        const value_5368 = fi_5368.val()
        if (`The selected Customer/Client` == get_checkbox_value(3712) || `` == value_5368 || null == value_5368) toggle(fi_884, `hide`)
        else if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) toggle(fi_884, `hide`)
        else toggle(fi_884, `show`)
    }

    cond_logic_885()
    fi_5368.change(cond_logic_885)
    fi_3712.click(cond_logic_885)
    function cond_logic_885() {
        const value_5368 = fi_5368.val()
        if (`The selected Customer/Client` == get_checkbox_value(3712) || `` == value_5368 || null == value_5368) toggle(fi_885, `hide`)
        else if (-1 < value_5368.indexOf(`Legal`) || -1 < value_5368.indexOf(`IRS`)) toggle(fi_885, `show`)
        else toggle(fi_885, `hide`)
    }

    cond_logic_3713()
    fi_5368.change(cond_logic_3713)
    fi_3712.click(cond_logic_3713)
    function cond_logic_3713() {
        const value_5368 = fi_5368.val()
        toggle(fi_3713, `The selected Customer/Client` == get_checkbox_value(3712) || `` == value_5368 || null == value_5368 ? `hide` : `show`)
    }

    cond_logic_4556()
    fi_5356.change(cond_logic_4556)
    fi_5363.change(cond_logic_4556)
    fi_5361.change(cond_logic_4556)
    fi_5368.change(cond_logic_4556)
    fi_884.change(cond_logic_4556)
    fi_885.change(cond_logic_4556)
    fi_3713.change(cond_logic_4556)
    fi_3712.click(cond_logic_4556)
    function cond_logic_4556() {
        let decission = `hide`
        const not_empty_5356 = `` != fi_5356.val()
        const not_empty_5363 = `` != fi_5363.val()
        const not_empty_5361 = user_uploaded_bundled_rfp//`` != fi_5361.val()
        const not_empty_5368 = `` != fi_5368.val()
        const not_empty_884_885 = `` != fi_884.val() || `` != fi_885.val()
        const not_empty_3713 = `` != val_3713

        if (`Business` == val_3458) {
            decission = (not_empty_5356 && not_empty_5363 && not_empty_5361)
                || (not_empty_5368 && not_empty_884_885 && not_empty_3713)
                ? `show` : `hide`
        } else if (`Provider` == val_3458) {
            if (`This user` == get_checkbox_value(3712)) {
                decission = (not_empty_5356 && not_empty_5363 && not_empty_5361)
                    || (not_empty_5368 && not_empty_884_885 && not_empty_3713)
                    ? `show` : `hide`
            } else if (`The selected Customer/Client` == get_checkbox_value(3712)) {
                decission = not_empty_5368 ? `show` : `hide`
            }
        }

        toggle(section_4556, decission)
        if (`show` == decission) fi_878.change()
    }

    cond_logic_896()
    fi_878.change(cond_logic_896)
    fi_5356.change(cond_logic_896)
    fi_5363.change(cond_logic_896)
    fi_5361.change(cond_logic_896)
    fi_5368.change(cond_logic_896)
    fi_884.change(cond_logic_896)
    fi_885.change(cond_logic_896)
    fi_3713.change(cond_logic_896)
    function cond_logic_896() {
        const not_empty_5361 = user_uploaded_bundled_rfp//`` != fi_5361.val()
        const bundled_service_complete =
            `` != fi_5356.val() &&
            `` != fi_5363.val() &&
            not_empty_5361

        const single_service_complete =
            `` != fi_5368.val() &&
            (`` != fi_884.val() || `` != fi_885.val()) &&
            `` != val_3713

        const provider_selected_customer_client = `` != fi_5368.val() && fi_5453.is(`:visible`)

        const decission = (bundled_service_complete || single_service_complete || provider_selected_customer_client) && `` != fi_878.val()
        toggle(fi_896, decission ? `show` : `hide`)
        if (!decission && `Yes` == fo_58.find(`[name="item_meta[896][]"]:checked`).val()) fo_58.find(`[name="item_meta[896][]"]`).click()
    }

    cond_logic_4654()
    fi_5453.click(cond_logic_4654)
    function cond_logic_4654() {
        fi_4654.val(`Business` == val_3458 || `` != get_checkbox_value(5453) ? `Show` : ``)
    }

    cond_logic_5141()
    fi_3711.click(cond_logic_5141)
    function cond_logic_5141() {
        fi_5141.val(-1 < [`Marketplace`, `Both`].indexOf(get_checkbox_value(3711)) ? `Show` : ``)
    }

    cond_logic_5142()
    fi_880.change(cond_logic_5142)
    function cond_logic_5142() {
        fi_5142.val(`Bundled Services` == get_checkbox_value(880) ? `Show` : ``)
    }

    cond_logic_2574()
    function cond_logic_2574() {
        toggle(section_2574, `Provider` == val_3458 ? `show` : `hide`)
    }

    cond_logic_5131()
    function cond_logic_5131() {
        toggle(fi_5131, `Provider` == val_3458 ? `show` : `hide`)
    }

    cond_logic_3430()
    fi_5131.change(cond_logic_3430)
    function cond_logic_3430() {
        toggle(fi_3430, `Yes` == fi_5131.val() ? `show` : `hide`)
    }

    cond_logic_3711()
    fi_3430.change(cond_logic_3711)
    function cond_logic_3711() {
        toggle(fi_3711_container, `` != fi_3430.val() ? `show` : `hide`)
    }

    cond_logic_3456()
    fi_3711.click(cond_logic_3456)
    function cond_logic_3456() {
        const val_3711 = get_checkbox_value(3711)
        toggle(fi_3456, (undefined != val_3711 && -1 < val_3711.indexOf(`My Referrals`)) || `Both` == val_3711 ? `show` : `hide`)
    }

    cond_logic_3712()
    fi_3711.click(cond_logic_3712)
    function cond_logic_3712() {
        toggle(fi_3712_container, `` != get_checkbox_value(3711) ? `show` : `hide`)
    }

    cond_logic_5453()
    fi_3712.click(cond_logic_5453)
    function cond_logic_5453() {
        toggle(fi_5453_container, `The selected Customer/Client` == get_checkbox_value(3712) ? `show` : `hide`)
    }

    cond_logic_880()
    fi_3712.click(cond_logic_880)
    fi_5453.click(cond_logic_880)
    function cond_logic_880() {
        let decission = `Business` == val_3458
        if (!decission) {
            decission = `` != get_checkbox_value(5453)
            decission = `This user` == get_checkbox_value(3712)
        }
        toggle(fi_880_container, decission ? `show` : `hide`)
    }

    cond_logic_5415()
    function cond_logic_5415() {
        fi_5415.val(`The selected Customer/Client` == get_checkbox_value(3712) && `` != fi_5368.val() ? `Show` : ``)
    }

    cond_logic_881()
    fi_880.change(cond_logic_881)
    fi_5453.click(cond_logic_881)
    function cond_logic_881() {
        toggle(section_881, `Single Service` == get_checkbox_value(880) && (!fi_5453.is(`:visible`) || `` != get_checkbox_value(5453)) ? `show` : `hide`)
        fi_5368.change()
    }

    cond_logic_5413()
    fi_880.change(cond_logic_5413)
    function cond_logic_5413() {
        toggle(section_5413, `Bundled Services` == get_checkbox_value(880) ? `show` : `hide`)
    }

    cond_logic_5338()
    fi_884.change(cond_logic_5338)
    fi_885.change(cond_logic_5338)
    function cond_logic_5338() {
        fi_5338.val(`` != fi_884.val() || `` != fi_885.val() ? `Show` : ``)
    }

    cond_logic_895()
    function cond_logic_895() {
        toggle(fi_895, `hide`)
    }

    cond_logic_878()
    fi_5356.change(cond_logic_878)
    fi_5363.change(cond_logic_878)
    fi_5361.change(cond_logic_878)
    fi_5368.change(cond_logic_878)
    fi_884.change(cond_logic_878)
    fi_885.change(cond_logic_878)
    fi_3713.change(cond_logic_878)
    function cond_logic_878() {
        const not_empty_5361 = user_uploaded_bundled_rfp//`` != fi_5361.val()
        const single_service_complete =
            `` != fi_5368.val() &&
            (`` != fi_884.val() || `` != fi_885.val()) &&
            `` != val_3713
        const bundled_service_complete =
            `` != fi_5356.val() &&
            `` != fi_5363.val() &&
            not_empty_5361
        const provider_selected_customer_client = `` != fi_5368.val() && fi_5453.is(`:visible`)

        const decission = single_service_complete || bundled_service_complete || provider_selected_customer_client
        toggle(fi_878, decission ? `show` : `hide`)
    }

    cond_logic_3001()
    fi_3711.click(fi_3001)
    function cond_logic_3001() {
        toggle(fi_3001_container, -1 < `My Referrals`.indexOf(get_checkbox_value(3711)) ? `hide` : `show`)
    }

    cond_logic_893()
    fi_3001.click(cond_logic_893)
    function cond_logic_893() {
        toggle(fi_893_container, `Yes` == get_checkbox_value(3001) ? `show` : `hide`)
    }

    cond_logic_1089()
    fi_893.click(cond_logic_1089)
    function cond_logic_1089() {
        toggle(section_1089, `` != get_checkbox_value(893) ? `show` : `hide`)
    }

    cond_logic_2999()
    fi_3001.click(cond_logic_2999)
    function cond_logic_2999() {
        toggle(fi_2999_container, `Yes` == get_checkbox_value(3001) ? `show` : `hide`)
    }

    cond_logic_894()
    fi_2999.change(cond_logic_894)
    function cond_logic_894() {
        toggle(fi_894, `Request specific Rbundle Provider(s)` == fo_58.find(`[name="item_meta[2999][]"]:checked`).val() ? `show` : `hide`)
    }

    cond_logic_3000()
    fi_3001.click(cond_logic_3000)
    function cond_logic_3000() {
        toggle(fi_3000_container, `Yes` == get_checkbox_value(3001) ? `show` : `hide`)
    }

    cond_logic_2534()
    fi_3000.change(cond_logic_2534)
    function cond_logic_2534() {
        toggle(fi_2534, `Do not send to selected Rbundle Provider(s)` == fo_58.find(`[name="item_meta[3000][]"]:checked`).val() ? `show` : `hide`)
    }

    cond_logic_3459()
    fi_3001.click(cond_logic_3459)
    function cond_logic_3459() {
        toggle(fi_3459_container, `Yes` == get_checkbox_value(3001) ? `show` : `hide`)
    }

    cond_logic_4555()
    function cond_logic_4555() {
        toggle(fi_4555_container, `` == fi_877.val() && `` !== fi_877.val() ? `show` : `hide`)
    }

    cond_logic_5420()
    fi_896.click(cond_logic_5420)
    function cond_logic_5420() {
        const val_896 = fo_58.find(`[name="item_meta[896][]"]:checked`).val() || ``
        toggle(fi_5420_container, `` != val_896 ? `show` : `hide`)
    }

    fi_3712.click(e => {
        if (`The selected Customer/Client` == get_checkbox_value(3712)) {
            fo_58.find(`[name="item_meta[880]"][value="Single Service"]`).click()
        }
    })

    detect_3713_change()
    function detect_3713_change() {
        if (val_3713 != fi_3713.val()) {
            val_3713 = fi_3713.val()
            fi_3713.trigger(`change`)
        }
        setTimeout(detect_3713_change, 1000)
    }

    function get_checkbox_value(id) {
        return fo_58.find(`[name="item_meta[${id}]"]:checked`).val() || ``
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
        single_service_clone.find(`select,[type="text"],[type="hidden"]`).each(function () {
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
                <div class="frm_form_field frm_hidden_container frm_repeat_buttons remove-#PART#">
                    <a href="javascript:;" class="remove_form_row frm_button" data-key="0" aria-label="Remove">
                        <svg viewBox="0 0 20 20" width="1em" height="1em" class="frmsvg frm-svg-icon">
                            <title>minus1</title>
                            <path d="M5 9v2h10V9H5zm5-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                        </svg> Remove #PART#
                    </a>
                </div>
            `
        }
        buttons.add_bundle = buttons.add.replaceAll(`#PART#`, `Business`)
        buttons.remove_bundle = buttons.remove.replaceAll(`#PART#`, `Business`)
        buttons.add_service = buttons.add.replaceAll(`#PART#`, `Service`)
        buttons.remove_service = buttons.remove.replaceAll(`#PART#`, `Service`)

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
                        const bundle = jQuery(this).parent().parent()
                        bundle.prev(`br`).remove()
                        bundle.remove()

                        bundled_service_bundle_business_number()
                        bundled_service_limit_add_buttons()
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
                        const bu_3713 = bundled_children.find(`[name="bundled_children[3713][]"]`)

                        bu_5368.change(bundled_service_list_down_answers)
                        bu_884.change(bundled_service_list_down_answers)
                        bu_885.change(bundled_service_list_down_answers)
                        bu_3713.change(bundled_service_list_down_answers)

                        bundled_children.find(`.remove_form_row`)
                            .click(function () { // remove service
                                const service = jQuery(this).parent().parent()
                                service.prev(`br`).remove()
                                service.remove()
                                bundled_service_limit_add_buttons()
                            })

                        bu_cond_logic_884()
                        fi_3712.click(bu_cond_logic_884)
                        bu_5368.change(bu_cond_logic_884)
                        function bu_cond_logic_884() {
                            const val_bu_5368 = bu_5368.val()
                            if (`The selected Customer/Client` == get_checkbox_value(3712) || `` == val_bu_5368) toggle(bu_884, `hide`)
                            else if (-1 < val_bu_5368.indexOf(`Legal`) || -1 < val_bu_5368.indexOf(`IRS`)) toggle(bu_884, `hide`)
                            else toggle(bu_884, `show`)
                        }

                        bu_cond_logic_885()
                        fi_3712.click(bu_cond_logic_885)
                        bu_5368.change(bu_cond_logic_885)
                        function bu_cond_logic_885() {
                            const val_bu_5368 = bu_5368.val()
                            if (`The selected Customer/Client` == get_checkbox_value(3712) || `` == val_bu_5368) toggle(bu_885, `hide`)
                            else if (-1 < val_bu_5368.indexOf(`Legal`) || -1 < val_bu_5368.indexOf(`IRS`)) toggle(bu_885, `show`)
                            else toggle(bu_885, `hide`)
                        }

                        bu_cond_logic_3713()
                        bu_5368.change(bu_cond_logic_3713)
                        function bu_cond_logic_3713() {
                            toggle(bu_3713, `` == bu_5368.val() ? `hide` : `show`)
                        }

                        bu_5368.change(e => {
                            jQuery.post(frm_js.ajax_url, {
                                action: `frm_get_lookup_text_value`,
                                parent_fields: [5368],
                                parent_vals: [bu_5368.val()],
                                field_id: 938,
                                nonce: frm_js.nonce
                            }, service_name => {
                                bu_938.val((new DOMParser().parseFromString(service_name, `text/html`)).documentElement.textContent)
                            })
                            jQuery.post(frm_js.ajax_url, {
                                action: `frm_get_lookup_text_value`,
                                parent_fields: [5368],
                                parent_vals: [bu_5368.val()],
                                field_id: 5057,
                                nonce: frm_js.nonce
                            }, service_cat => {
                                bu_5057.val((new DOMParser().parseFromString(service_cat, `text/html`)).documentElement.textContent)
                            })
                        })

                        bundled_children
                            .find(`.frm_dropzone`)
                            .each(function () {
                                const dz = {
                                    element: jQuery(this)
                                }
                                dz.icon = jQuery(this).find(`.dz-message`)
                                dz.hidden_input = jQuery(this).siblings(`[name="bundled_children[3713][]"]`)
                                dz.preview_html = `
                                    <div class="dz-preview dz-file-preview frm_clearfix dz-processing dz-success dz-complete">
                                        <div class="dz-image"><img data-dz-thumbnail="" src="${window.location.origin}/wp-content/plugins/formidable-pro/images/doc.svg">
                                        </div>
                                        <div class="dz-column">
                                            <div class="dz-details">
                                                <div class="dz-filename"><span data-dz-name=""></span></div>
                                                <div class="dz-size"></div>
                                                <a class="dz-remove frm_remove_link" href="javascript:;" data-dz-remove="" title="Remove file">
                                                    <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm3.6-13L10 8.6 6.4 5 5 6.4 8.6 10 5 13.6 6.4 15l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L15 6.4z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                `

                                dz.icon
                                    .click(e => {
                                        dz.element.find(`[type="file"]`).remove()
                                        const file_input = jQuery(`<input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">`)
                                            .insertBefore(dz.icon)
                                            .hide()
                                            .click()

                                        file_input.change(e => {
                                            let formData = new FormData()
                                            formData.append(`action`, 'rbundle_custom_submit_dropzone')
                                            formData.append(`field_id`, bundled_file_field_id)
                                            formData.append(`form_id`, 58)
                                            formData.append(`nonce`, frm_js.nonce)
                                            formData.append(`antispam_token`, jQuery(`[data-token]`).attr(`data-token`))
                                            formData.append(`file${bundled_file_field_id}`, file_input[0].files[0])

                                            xhr = new XMLHttpRequest()
                                            xhr.open(`POST`, frm_js.ajax_url, true)
                                            xhr.onreadystatechange = function () {
                                                if (xhr.readyState == XMLHttpRequest.DONE) {
                                                    let resp = xhr.responseText
                                                    resp = JSON.parse(resp)
                                                    resp = resp[0]

                                                    dz.icon.hide()
                                                    dz.hidden_input.val(resp).change()
                                                    dz.element.find(`.dz-preview`).remove()
                                                    dz.element.append(dz.preview_html)
                                                    dz.element.find(`[data-dz-name]`).html(file_input[0].files[0].name)
                                                    dz.element.find(`[data-dz-remove]`).click(e => {
                                                        dz.icon.show()
                                                    })
                                                    user_uploaded_bundled_rfp = true
                                                    fi_5361.change()
                                                    cond_logic_896(true)
                                                }
                                            }
                                            xhr.send(formData)

                                            file_input.remove()
                                        })
                                    })
                            })

                        bundled_service_limit_add_buttons()
                    })
                    .click()
                bundled_service_limit_add_buttons()
            })
            .click()
    }

    function bundled_service_limit_add_buttons() {
        const businesses = fo_58.find(`.bundled_service`)
        const first_add_bundle_btn = businesses.eq(0).find(`.remove-Business`)
        if (2 > businesses.length) first_add_bundle_btn.hide()
        else first_add_bundle_btn.show()

        businesses.each(function () {
            const business = jQuery(this)
            const services = business.find(`.bundled_children`)
            const first_add_service_btn = services.eq(0).find(`.remove-Service`)
            if (2 > services.length) first_add_service_btn.hide()
            else first_add_service_btn.show()
        })
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

    function bundled_service_validation() {
        let is_valid = true
        fo_58.find(`.bundled_children:visible`).each(function () {
            const child = jQuery(this)
            const srv = child.find(`[name="bundled_children[5368][]"]`)
            const file = child.find(`[name="bundled_children[3713][]"]`)

            if (`` == srv.val()) {
                is_valid = false
                let error_message = srv.attr(`data-reqmsg`)
                error_message = `<div class="frm_error" role="alert" id="frm_error_field_xepcm">${error_message}</div>`
                srv.siblings(`.frm_error`).remove()
                jQuery(error_message).insertAfter(srv)
                srv.get(0).scrollIntoView({ behavior: 'smooth' })
                srv.focus(e => {
                    srv.siblings(`.frm_error`).remove()
                })
            }

            let area = child.find(`[name="bundled_children[884][][]"]:visible`)
            area = 0 < area.length ? area : child.find(`[name="bundled_children[885][]"]:visible`)
            if (0 < area.length) {
                if (`` == area.val()) {
                    is_valid = false
                    let error_message = area.attr(`data-reqmsg`)
                    error_message = `<div class="frm_error" role="alert" id="frm_error_field_xepcm">${error_message}</div>`
                    area.siblings(`.frm_error`).remove()
                    jQuery(error_message).insertAfter(area)
                    area.get(0).scrollIntoView({ behavior: 'smooth' })
                    area.focus(e => {
                        area.siblings(`.frm_error`).remove()
                    })
                }
            }

            if (`` == file.val()) {
                is_valid = false
                let error_message = file.attr(`data-reqmsg`)
                error_message = `<div class="frm_error" role="alert" id="frm_error_field_xepcm">${error_message}</div>`
                file.siblings(`.frm_error`).remove()
                jQuery(error_message).appendTo(file.parent())
                file.get(0).scrollIntoView({ behavior: 'smooth' })
                file.change(e => {
                    file.siblings(`.frm_error`).remove()
                })
            }

        })

        fo_58.find(`.bundled_service`).each(function () {
            const business = jQuery(this)
            let selected_services = []
            business.find(`[name="bundled_children[5368][]"]`).each(function () {
                const srv = jQuery(this)
                if (-1 < selected_services.indexOf(srv.val())) {
                    is_valid = false
                    let error_message = `Service already selected`
                    error_message = `<div class="frm_error" role="alert" id="frm_error_field_xepcm">${error_message}</div>`
                    srv.siblings(`.frm_error`).remove()
                    jQuery(error_message).insertAfter(srv)
                    srv.get(0).scrollIntoView({ behavior: 'smooth' })
                    srv.focus(e => {
                        srv.siblings(`.frm_error`).remove()
                    })
                } else selected_services.push(srv.val())
            })

        })

        return is_valid
    }

    function bundled_service_list_down_answers() {
        let list_down = {
            5356: [],
            5365: [],
            5364: [],
            5366: [],
            5357: [],
            5363: [],
            5367: [],
        }
        const single_lines = [5356, 5364, 5357]
        const textareas = [5365, 5366, 5363, 5367]
        let bus_num = 0
        let is_multi_bus = false
        let is_multi_srv = false

        bundled_services
            .find(`.bundled_service`)
            .each(function () {
                const business = jQuery(this)
                let srv_num = 0

                bus_num++
                if (1 < bus_num) is_multi_bus = true

                for (let field_id of textareas) list_down[field_id].push(`Business ${bus_num}`)

                business.find(`.bundled_children`).each(function () {
                    const service = jQuery(this)

                    srv_num++
                    if (1 < srv_num) is_multi_srv = true

                    const name_only = service.find(`[name="bundled_children[938][]"]`).val()
                    const taxonomy = service.find(`[name="bundled_children[5368][]"]`).val()
                    const category = service.find(`[name="bundled_children[5057][]"]`).val()

                    let area = service.find(`[name="bundled_children[884][][]"]:visible`)
                    area = 0 < area.length ? area : service.find(`[name="bundled_children[885][]"]:visible`)
                    if (0 < area.length) {
                        area = area.val()
                        area = Array.isArray(area) ? area.join(`, `) : area
                    } else area = ``

                    if (0 > list_down[5356].indexOf(name_only)) list_down[5356].push(name_only)
                    list_down[5365].push(`${srv_num}. ${name_only}`)
                    if (0 > list_down[5364].indexOf(taxonomy)) list_down[5364].push(taxonomy)
                    list_down[5366].push(`${srv_num}. ${taxonomy}`)
                    if (0 > list_down[5357].indexOf(category)) list_down[5357].push(category)
                    list_down[5363].push(`${srv_num}. ${area}`)
                    list_down[5367].push(`${srv_num}. ${taxonomy}: ${area}`)
                })
            })

        for (let field_id of Object.keys(list_down)) {
            list_down[field_id] = list_down[field_id].filter(srv => { return `` != srv })

            if (-1 < single_lines.indexOf(field_id)) list_down[field_id] = list_down[field_id].join(`, `)
            else if (-1 < textareas.indexOf(field_id)) list_down[field_id] = list_down[field_id].join(`\n`)

            fo_58.find(`[name="item_meta[${field_id}]"]`).val(list_down[field_id]).change()
        }

        let answer_5349 = []
        if (is_multi_srv) answer_5349.push(`Multiple Services`)
        if (is_multi_bus) answer_5349.push(`Multiple Businesses`)
        fi_5349.val(JSON.stringify(answer_5349)).change()
    }

    function bundled_service_naming_file() {
        const is_multi_bus = 1 < fo_58.find(`.bundled_service`).length
        fo_58.find(`.bundled_service`).each(function () {
            const business = jQuery(this)
            let bus_no = business.find(`.frm_inline_box.input-group-text.input-group-addon`).html()
            bus_no = bus_no.replace(`Business`, `Bus`)
            business.find(`.bundled_children`).each(function () {
                const service = jQuery(this)
                const service_name = service.find(`[name="bundled_children[938][]"]`).val()
                const media_input = service.find(`[name="bundled_children[3713][]"]`)
                const media_id = media_input.val()

                if (`` != service_name && `` != media_id) {
                    let sheet_name = ``
                    if (is_multi_bus) sheet_name = `${bus_no} - ${service_name}`
                    else sheet_name = service_name

                    sheet_name = sheet_name.substring(0, 31)
                    media_input.val(`${media_id}|${sheet_name}`)
                }

            })
        })
    }

})(document.currentScript);
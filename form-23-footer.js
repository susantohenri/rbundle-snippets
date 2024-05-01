(function (script) {
    const fo_23 = jQuery(script).parent()
    const fi_964 = fo_23.find(`[name="item_meta[964]"]`)
    const fi_965 = fo_23.find(`[name="item_meta[965]"]`)
    const fi_306 = fo_23.find(`[name="item_meta[306]"]`)
    const fi_822 = fo_23.find(`[name="item_meta[822]"]`)
    const fi_1083 = fo_23.find(`[name="item_meta[1083]"]`)
    const fi_1452 = fo_23.find(`#frm_field_1452_container > *`)
    const fi_1454 = fo_23.find(`[name="item_meta[1452][0][1454]"]`)
    const fi_1455 = fo_23.find(`[name="item_meta[1452][0][1455]"]`)
    const fi_1456 = fo_23.find(`[name="item_meta[1452][0][1456]"]`)
    const fi_1457 = fo_23.find(`[name="item_meta[1452][0][1457]"]`)
    const section_1474 = fo_23.find(`#frm_field_1474_container > *`)
    const fi_1524 = fo_23.find(`[name="item_meta[1524][]"]`)
    const fi_1525 = fo_23.find(`[name="item_meta[1525]"]`)
    const fi_1553 = fo_23.find(`[name="item_meta[1553]"]`)
    const fi_1554 = fo_23.find(`#frm_field_1554_container > *`)
    const fi_1555 = fo_23.find(`[name="item_meta[1555]"]`)
    const fi_1556 = fo_23.find(`#frm_field_1556_container > *`)
    const fi_1557 = fo_23.find(`#frm_field_1557_container > *`)
    const fi_1558 = fo_23.find(`[name="item_meta[1558]"]`)
    const fi_1559 = fo_23.find(`#frm_field_1559_container > *`)
    const fi_2380 = fo_23.find(`#frm_field_2380_container > *`)
    const fi_2381 = fo_23.find(`#frm_field_2381_container > *`)
    const fi_2382 = fo_23.find(`#frm_field_2382_container > *`)
    const fi_2383 = fo_23.find(`#frm_field_2383_container > *`)
    const fi_2388 = fo_23.find(`#frm_field_2388_container > *`)
    const fi_2393 = fo_23.find(`[name="item_meta[2393]"]`)
    const fi_2396 = fo_23.find(`#frm_field_2396_container > *`)
    const fi_2397 = fo_23.find(`#frm_field_2397_container > *`)
    const fi_2401 = fo_23.find(`#frm_field_2401_container > *`)
    const fi_2384 = fo_23.find(`#frm_field_2384_container > *`)
    const fi_2385 = fo_23.find(`#frm_field_2385_container > *`)
    const fi_2387 = fo_23.find(`#frm_field_2387_container > *`)
    const fi_2402 = fo_23.find(`[name="item_meta[2402]"]`)
    const fi_2403 = fo_23.find(`#frm_field_2403_container > *`)
    const fi_5307 = fo_23.find(`[name="item_meta[5307]"]`)
    const val_5341 = get_checkbox_value(5341)
    const fi_5342 = fo_23.find(`[name="item_meta[5342]"]`)
    const fi_5343 = fo_23.find(`[name="item_meta[5343]"]`)
    const val_5345 = fo_23.find(`[name="item_meta[5345]"]`).val()
    const fi_5429 = fo_23.find(`[name="item_meta[5429]"]`)
    const fi_5432 = fo_23.find(`[name="item_meta[5432]"]`)
    const fi_5436 = fo_23.find(`[name="item_meta[5436]"]`)
    const fi_5437 = fo_23.find(`[name="item_meta[5437]"]`)
    const fi_5438 = fo_23.find(`[name="item_meta[5438]"]`)
    const val_5441 = get_checkbox_value(5441)
    const fi_5442 = fo_23.find(`[name="item_meta[5442]"]`)
    const section_5443 = fo_23.find(`#frm_field_5443_container > *`)
    const fi_5459 = fo_23.find(`[name="item_meta[5459]"]`)
    const fi_Lookup_38_782 = fo_23.find(`[name="item_meta[5522]"]`)
    const fi_Lookup_38_784 = fo_23.find(`[name="item_meta[5523]"]`)

    fo_23.parent().parent().parent().submit(() => {
        const hidden_list_field_name = `skip_hidden_fields_required_validation`
        let hidden_fields = []
        fo_23.find(`
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
        fo_23.append(`<input type="hidden" name="${hidden_list_field_name}" value="${hidden_fields}">`)

        return true
    })

    toggle(fi_306, `Provider` == val_5345 && `Pop` == val_5341 ? `show` : `hide`)
    toggle(section_1474, `Close` == val_5441 ? `show` : `hide`)
    toggle(fi_5307, `Provider` == val_5345 && `Pop` == val_5341 ? `show` : `hide`)
    toggle(fi_5342, `Business` == val_5345 ? `show` : `hide`)
    toggle(fi_5343, `Business` == val_5345 && `Pop` == val_5341 ? `show` : `hide`)
    toggle(fi_5429, `Business` == val_5345 ? `show` : `hide`)
    toggle(fi_5432, `Provider` == val_5345 && `Pop` != val_5341 ? `show` : `hide`)
    toggle(fi_5437, `Provider` == val_5345 && `Pop` != val_5341 ? `show` : `hide`)
    toggle(section_5443, `Business` == val_5345 && `Engage` == val_5441 ? `show` : `hide`)
    toggle(fi_5438, `Engage` == val_5441 ? `show` : `hide`)
    toggle(fi_822, `Business` == val_5345 ? `show` : `hide`)

    fi_5432.keyup(() => {
        fi_5432.val(fi_5432.val().trim())
    })

    if (fo_23.parent().parent().parent().parent().parent().is(`.modal-body`)) {
        fi_306.attr(`disabled`, true)
        fi_5307.attr(`disabled`, true)
        fo_23.parent().parent().parent().submit(() => {
            fi_306.removeAttr(`disabled`)
            fi_5307.removeAttr(`disabled`)

            return true
        })
    }

    cond_logic_5459()
    fi_5442.change(cond_logic_5459)
    function cond_logic_5459() {
        fi_5459.val(`Show` == fi_5442.val() ? `Show` : ``).trigger(`change`)
    }

    cond_logic_2380()
    fi_965.change(cond_logic_2380)
    function cond_logic_2380() {
        toggle(fi_2380, `Flat Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_1553()
    fi_965.change(cond_logic_1553)
    function cond_logic_1553() {
        toggle(fi_1553, `Flat Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2381()
    fi_965.change(cond_logic_2381)
    function cond_logic_2381() {
        toggle(fi_2381, `Flat Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2382()
    fi_965.change(cond_logic_2382)
    function cond_logic_2382() {
        toggle(fi_2382, `Hourly Rate` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2383()
    fi_965.change(cond_logic_2383)
    function cond_logic_2383() {
        toggle(fi_2383, `Hourly Rate` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_1554()
    fi_965.change(cond_logic_1554)
    function cond_logic_1554() {
        toggle(fi_1554, `Hourly Rate` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2396()
    fi_822.change(cond_logic_2396)
    function cond_logic_2396() {
        toggle(fi_2396, `` != fi_822.val() ? `show` : `hide`)
    }

    cond_logic_2397()
    fi_822.change(cond_logic_2397)
    function cond_logic_2397() {
        toggle(fi_2397, `` != fi_822.val() ? `show` : `hide`)
    }

    cond_logic_1559()
    fi_5459.change(cond_logic_1559)
    function cond_logic_1559() {
        toggle(fi_1559, (`Show` == fi_5459.val() && `Engage` == val_5441) || (`Pop` == val_5341 && `Provider` == val_5345) ? `show` : `hide`)
    }

    cond_logic_2401()
    fi_965.change(cond_logic_2401)
    function cond_logic_2401() {
        toggle(fi_2401, `Other` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2402()
    fi_965.change(cond_logic_2402)
    function cond_logic_2402() {
        toggle(fi_2402, `Other` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2403()
    fi_965.change(cond_logic_2403)
    function cond_logic_2403() {
        toggle(fi_2403, `Other` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2384()
    fi_965.change(cond_logic_2384)
    function cond_logic_2384() {
        toggle(fi_2384, `Other` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_1558()
    fi_965.change(cond_logic_1558)
    function cond_logic_1558() {
        toggle(fi_1558, `Other` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2385()
    fi_965.change(cond_logic_2385)
    function cond_logic_2385() {
        toggle(fi_2385, `Other` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2387()
    fi_965.change(cond_logic_2387)
    function cond_logic_2387() {
        toggle(fi_2387, `Recurring Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_1556()
    fi_965.change(cond_logic_1556)
    function cond_logic_1556() {
        toggle(fi_1556, `Recurring Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_1557()
    fi_965.change(cond_logic_1557)
    function cond_logic_1557() {
        toggle(fi_1557, `Recurring Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_2388()
    fi_965.change(cond_logic_2388)
    function cond_logic_2388() {
        toggle(fi_2388, `Recurring Fee` == get_checkbox_value(965) ? `show` : `hide`)
    }

    cond_logic_964()
    fi_822.change(cond_logic_964)
    function cond_logic_964() {
        const val_822 = fi_822.val()
        if (`` == val_822) toggle(fi_964, `hide`)
        else {
            fi_Lookup_38_782.val(val_822).trigger(`change`)
            setTimeout(() => {
                fi_964.val(fi_Lookup_38_784.val().replaceAll(`<br />`, `\n`)).trigger(`change`)
                toggle(fi_964, `show`)
            }, 1000)
        }
    }

    cond_logic_1555()
    function cond_logic_1555() {
        toggle(fi_1555,
            `` != fi_1553.val()
                || `` != fi_1554.parent().find(`input`).val()
                || `` != fi_2402.val()
                || `` != fi_1558.val()
                || `` != fi_1557.val()
                ? `show` : `hide`)
    }

    cond_logic_1452()
    fi_2393.click(fi_1452)
    function cond_logic_1452() {
        toggle(fi_1452, `Yes` == get_checkbox_value(2393) ? `show` : `hide`)
    }

    cond_logic_1456()
    fi_2393.click(fi_1456)
    function cond_logic_1456() {
        toggle(fi_1456, `Yes` == get_checkbox_value(2393) ? `show` : `hide`)
    }

    cond_logic_1457()
    fi_1456.change(cond_logic_1457)
    function cond_logic_1457() {
        toggle(fi_1457, -1 < [`Payment Period`, `Service Benefit Receipt`].indexOf(fi_1456.val()) ? `show` : `hide`)
    }

    cond_logic_1454()
    fi_2393.click(fi_1454)
    function cond_logic_1454() {
        toggle(fi_1454, `Yes` == get_checkbox_value(2393) ? `show` : `hide`)
    }

    cond_logic_1455()
    fi_2393.click(fi_1455)
    function cond_logic_1455() {
        toggle(fi_1455, `Yes` == get_checkbox_value(2393) ? `show` : `hide`)
    }

    cond_logic_1525()
    fi_1524.click(cond_logic_1525)
    function cond_logic_1525() {
        toggle(fi_1525, 'Yes' == get_checkbox_value(1524) ? `show` : `hide`)
    }

    cond_logic_5442()
    fi_5437.change(cond_logic_5442)
    fi_5432.change(cond_logic_5442)
    function cond_logic_5442() {
        if (`` == fi_5437.val() || `` == fi_5432.val()) fi_5442.val(``).trigger(`change`)
        else {
            setTimeout(() => {
                fi_5442.val(fi_5437.val() == fi_5436.val() ? `Show` : `No Match`).trigger(`change`)
            }, 1000)
        }
    }

    jQuery(document).ready(cond_logic_submit)
    fi_5442.change(cond_logic_submit)
    function cond_logic_submit() {
        const submit = fo_23.find(`[type="submit"]`)
        if (`Business` == val_5345 || `Show` == fi_5442.val() || `Pop` == val_5341) submit.show()
        else submit.hide()
    }

    function get_checkbox_value(id) {
        return fo_23.find(`[name="item_meta[${id}]"]:checked`).val()
    }

    function toggle(field, visibility) {
        const parent = field.is(`:checkbox`) || field.is(`:radio`) ? field.parent().parent().parent().parent() : field.parent()
        switch (visibility) {
            case `show`:
                field.attr(`aria-required`, `true`)
                parent.show()
                    ; break
            case `hide`:
                field.attr(`aria-required`, `false`)
                parent.hide()
                    ; break
        }
    }
})(document.currentScript);
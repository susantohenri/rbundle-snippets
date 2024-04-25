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
    const fi_1524 = fo_23.find(`[name="item_meta[1524]"]`)
    const fi_1525 = fo_23.find(`[name="item_meta[1525]"]`)
    const fi_1553 = fo_23.find(`[name="item_meta[1553]"]`)
    const fi_1554 = fo_23.find(`#frm_field_1554_container > *`)
    const fi_1555 = fo_23.find(`[name="item_meta[1555]"]`)
    const fi_1556 = fo_23.find(`#frm_field_1556_container > *`)
    const fi_1557 = fo_23.find(`#frm_field_1557_container > *`)
    const fi_1558 = fo_23.find(`[name="item_meta[1558]"]`)
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
    const val_5341 = fo_23.find(`[name="item_meta[5341]"]`).val()
    const fi_5342 = fo_23.find(`[name="item_meta[5342]"]`)
    const fi_5343 = fo_23.find(`[name="item_meta[5343]"]`)
    const val_5345 = fo_23.find(`[name="item_meta[5345]"]`).val()

    toggle(fi_306, `Provider` == val_5345 ? `show` : `hide`)
    toggle(fi_5307, `Provider` == val_5345 ? `show` : `hide`)
    toggle(fi_5342, `Business` == val_5345 && `Pop` == val_5341 ? `show` : `hide`)
    toggle(fi_5343, `Business` == val_5345 && `Pop` == val_5341 ? `show` : `hide`)

    cond_logic_2380()
    fi_965.change(cond_logic_2380)
    function cond_logic_2380() {
        toggle(fi_2380, `Flat Fee` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2381()
    fi_965.change(cond_logic_2381)
    function cond_logic_2381() {
        toggle(fi_2381, `Flat Fee` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2382()
    fi_965.change(cond_logic_2382)
    function cond_logic_2382() {
        toggle(fi_2382, `Hourly Rate` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2383()
    fi_965.change(cond_logic_2383)
    function cond_logic_2383() {
        toggle(fi_2383, `Hourly Rate` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_1554()
    fi_965.change(cond_logic_1554)
    function cond_logic_1554() {
        toggle(fi_1554, `Hourly Rate` == fi_965.val() ? `show` : `hide`)
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

    cond_logic_2401()
    fi_965.change(cond_logic_2401)
    function cond_logic_2401() {
        toggle(fi_2401, `Other` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2402()
    fi_965.change(cond_logic_2402)
    function cond_logic_2402() {
        toggle(fi_2402, `Other` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2403()
    fi_965.change(cond_logic_2403)
    function cond_logic_2403() {
        toggle(fi_2403, `Other` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2384()
    fi_965.change(cond_logic_2384)
    function cond_logic_2384() {
        toggle(fi_2384, `Other` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_1558()
    fi_965.change(cond_logic_1558)
    function cond_logic_1558() {
        toggle(fi_1558, `Other` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2385()
    fi_965.change(cond_logic_2385)
    function cond_logic_2385() {
        toggle(fi_2385, `Other` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2387()
    fi_965.change(cond_logic_2387)
    function cond_logic_2387() {
        toggle(fi_2387, `Recurring Fee` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_1556()
    fi_965.change(cond_logic_1556)
    function cond_logic_1556() {
        toggle(fi_1556, `Recurring Fee` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_1557()
    fi_965.change(cond_logic_1557)
    function cond_logic_1557() {
        toggle(fi_1557, `Recurring Fee` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_2388()
    fi_965.change(cond_logic_2388)
    function cond_logic_2388() {
        toggle(fi_2388, `Recurring Fee` == fi_965.val() ? `show` : `hide`)
    }

    cond_logic_964()
    fi_822.change(cond_logic_964)
    function cond_logic_964() {
        toggle(fi_964, `` != fi_822.val() ? `show` : `hide`)
    }

    format_964()
    fi_964.change(format_964)
    fi_964.keyup(format_964)
    function format_964() {
        fi_964.val(fi_964.val().replaceAll(`<br />`, `\n`))
    }

    cond_logic_1555()
    function cond_logic_1555() {
        toggle(fi_1555, `` != fi_1553.val()
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

    cond_logic_1474()
    fi_1083.change(cond_logic_1474)
    function cond_logic_1474() {
        const val_1083 = fi_1083.val()
        toggle(section_1474, `` == val_1083 && `` != val_1083 ? `show` : `hide`)
    }

    cond_logic_1525()
    fi_1524.click(cond_logic_1525)
    function cond_logic_1525() {
        toggle(fi_1525, 'Yes' == get_checkbox_value(1524) ? `show` : `hide`)
    }

    function get_checkbox_value(id) {
        return fo_23.find(`[name="item_meta[${id}]"]:checked`).val()
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
(function (script) {
    const fo_30 = jQuery(script).parent()
    const fi_383 = fo_30.find(`[name="item_meta[383]"]`)
    const fi_384 = fo_30.find(`[name="item_meta[384]"]`)
    const fi_385 = fo_30.find(`[name="item_meta[385]"]`)
    const fi_387 = fo_30.find(`[name="item_meta[387][]"]`)
    const fi_388 = fo_30.find(`#frm_field_388_container > *`)
    const fi_959 = fo_30.find(`[name="item_meta[959]"]`)
    const fi_961 = fo_30.find(`[name="item_meta[961]"]`)
    const sec_2416 = fo_30.find(`#frm_field_2416_container > *`)
    const fi_3897 = fo_30.find(`#frm_field_3897_container`)
    const fi_3899 = fo_30.find(`#frm_field_3899_container`)
    const fi_5146 = fo_30.find(`[name="item_meta[5146]"]`)
    const fi_5147 = fo_30.find(`[name="item_meta[5147]"]:checked`)
    const fi_5148 = fo_30.find(`[name="item_meta[5148]"]`)
    const fi_5149 = fo_30.find(`[name="item_meta[5149]"]`)
    const fi_5250 = fo_30.find(`[name="item_meta[5250]"]`)
    const fi_5251 = fo_30.find(`[name="item_meta[5251]"]`)
    const fi_5255 = fo_30.find(`[name="item_meta[5255]"]`)
    const fi_5256 = fo_30.find(`[name="item_meta[5256]"]`)
    const fi_5264 = fo_30.find(`[name="item_meta[5264]"]`)

    cond_logic_5250()
    fi_384.change(cond_logic_5250)
    function cond_logic_5250() {
        const val_384 = fi_384.val()
        if (0 < fi_5250.find(`option[value="${val_384}"]`).length) fi_5250.val(val_384).trigger(`change`)
    }

    cond_logic_5146_5148()
    fi_383.change(cond_logic_5146_5148)
    fi_384.change(cond_logic_5146_5148)
    fi_961.change(cond_logic_5146_5148)
    function cond_logic_5146_5148() {
        const val_383 = fi_383.val()
        const val_384 = fi_384.val()
        const val_961 = fi_961.val()
        fi_5146.val(`` == val_961 && `` != val_384 && `` != val_383 ? `Show` : ``).trigger(`change`)
        fi_5148.val(`` != val_961 && `` != val_384 && `` != val_383 ? `Show` : ``).trigger(`change`)
    }

    cond_logic_5251()
    fi_5264.change(cond_logic_5251)
    fi_5148.change(cond_logic_5251)
    function cond_logic_5251() {
        fi_5251.val(`` == fi_5264.val() && `Show` == fi_5148.val() ? `Show` : ``).trigger(`change`)
    }

    cond_logic_5256()
    fi_5264.change(cond_logic_5256)
    function cond_logic_5256() {
        fi_5256.val(`Match` == fi_5264.val() ? `Show` : ``).trigger(`change`)
    }

    cond_logic_5255()
    fi_5148.change(cond_logic_5255)
    fi_5256.change(cond_logic_5255)
    function cond_logic_5255() {
        fi_5255.val(`Show` == fi_5148.val() && `Show` == fi_5256.val() ? `Show` : ``).trigger(`change`)
    }

    jQuery(document).ready(cond_logic_submit)
    fi_387.click(cond_logic_submit)
    function cond_logic_submit() {
        const submit = fo_30.find(`[type="submit"]`)
        if (fi_387.is(`:checked`)) submit.show()
        else submit.hide()
    }

    cond_logic_5149()
    fi_5147.change(cond_logic_5149)
    function cond_logic_5149() {
        toggle(fi_5149, `link` == fi_5147.val() ? `show` : `hide`)
    }

    cond_logic_383()
    fi_5147.change(cond_logic_383)
    function cond_logic_383() {
        toggle(fi_383, `blank` == fi_5147.val() ? `show` : `hide`)
    }

    cond_logic_384()
    fi_5147.change(cond_logic_384)
    function cond_logic_384() {
        toggle(fi_384, `blank` == fi_5147.val() ? `show` : `hide`)
    }

    cond_logic_3897()
    fi_5146.change(cond_logic_3897)
    fi_5147.change(cond_logic_3897)
    function cond_logic_3897() {
        if (`` != fi_5146.val() && `blank` == fi_5147.val()) fi_3897.show()
        else fi_3897.hide()
    }

    cond_logic_3899()
    fi_5251.change(cond_logic_3899)
    fi_5147.change(cond_logic_3899)
    function cond_logic_3899() {
        if (`Show` == fi_5251.val() && `blank` == fi_5147.val()) fi_3899.show()
        else fi_3899.hide()
    }

    cond_logic_388()
    fi_5147.change(cond_logic_388)
    fi_5255.change(cond_logic_388)
    function cond_logic_388() {
        toggle(fi_388, `link` == fi_5147.val() || `Show` == fi_5255.val() ? `show` : `hide`)
    }

    cond_logic_385()
    fi_5147.change(cond_logic_385)
    fi_5255.change(cond_logic_385)
    function cond_logic_385() {
        toggle(fi_385, `link` == fi_5147.val() || `Show` == fi_5255.val() ? `show` : `hide`)
    }

    cond_logic_387()
    fi_5147.change(cond_logic_387)
    fi_5255.change(cond_logic_387)
    function cond_logic_387() {
        const container_387 = fo_30.find(`#frm_field_387_container`)
        if (`link` == fi_5147.val() || `Show` == fi_5255.val()) container_387.show()
        else container_387.hide()
    }

    cond_logic_961()
    fi_384.change(cond_logic_961)
    fi_959.change(cond_logic_961)
    function cond_logic_961() {
        fi_961.val(fi_384.val() == fi_959.val() ? `Match` : ``).trigger(`change`)
    }

    cond_logic_5264()
    fi_384.change(cond_logic_5264)
    fi_5250.change(cond_logic_5264)
    function cond_logic_5264() {
        fi_5264.val(fi_384.val() == fi_5250.val() ? `Match` : ``).trigger(`change`)
    }

    cond_logic_2416()
    function cond_logic_2416() {
        toggle(sec_2416, -1 < window.location.href.indexOf(`business/rfps/entry`) ? `show` : `hide`)
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
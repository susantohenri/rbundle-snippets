(function (script) {
    const fo_23 = jQuery(script).parent()
    const fi_964 = fo_23.find(`[name="item_meta[964]"]`)

    fi_964.val(fi_964.val().replaceAll(`<br />`, `\n`))
})(document.currentScript);
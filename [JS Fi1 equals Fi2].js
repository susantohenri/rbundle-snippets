// usage: set field default value to [JS 384 equals 5250]
jQuery(document).ready(() => {
    jQuery(`input[value^="[JS "]`).each(function () {
        const self = jQuery(this)
        const val = self.val()
        self.val(``)
        const formulas = val.split(` `)
        const left_field_id = formulas[1]
        const operator = formulas[2]
        const right_field_id = formulas[3]
        const left_input = jQuery(`[name="item_meta[${left_field_id}]"]`)
        const right_input = jQuery(`[name="item_meta[${right_field_id}"]`)
        left_input.change(() => {
            js_calculate_compare(self, left_input, operator, right_input)
        })
        right_input.change(() => {
            js_calculate_compare(self, left_input, operator, right_input)
        })
    })

    function js_calculate_compare(target, left, operator, right) {
        let result = ``
        left = left.val()
        right = right.val()
        if (`` == left && `` == right) result = ``
        else switch (operator) {
            case `equals`: if (left == right) result = `Match`; break
        }
        target.val(result).trigger(`change`)
    }
})
jQuery(`.star-shortlist`).click((e) => {
    const self = jQuery(e.target)
    if (self.hasClass(`fa-star-o`)) {
		const form_url = `${frm_js.ajax_url}?action=frm_forms_preview&form=dummyform`
		jQuery.get(form_url, (form156) => {
			jQuery(`body`).append(`<div id="temporary_form_156" class="hidden">${form156}</div>`)
			jQuery(`#temporary_form_156 [name="item_meta[5263]"]`).val(self.parent().parent().attr(`data-parent-id`))
			jQuery(`#temporary_form_156 form`).append(`<input type="hidden" name="antispam_token" value="${jQuery(`#temporary_form_156 form`).attr(`data-token`)}">`)
			jQuery.post(form_url, jQuery(`#temporary_form_156 form`).serialize(), (confirmation_page) => {
				const created_id = confirmation_page.split(`<p>`)[1].split(`</p>`)[0]
				jQuery(`#temporary_form_156`).remove()
				self.removeClass(`fa-star-o`).addClass(`fa-star`).attr(`data-id`, created_id)
			})
		})
    } else {
		jQuery.post(frm_js.ajax_url, {
			action: `frm_entries_destroy`,
			entry: self.attr(`data-id`),
			nonce: frm_js.nonce
		}, () => {
			self.removeClass(`fa-star`).addClass(`fa-star-o`).attr(`data-id`, 0)
		})
    }
})
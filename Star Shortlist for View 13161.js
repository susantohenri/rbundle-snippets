jQuery(`.star-shortlist`).click((e) => {
	const self = jQuery(e.target)
	const need_reload = !jQuery(`table thead tr th`).eq(0).hasClass(`tablesorter-headerUnSorted`)
	if (self.hasClass(`fa-star-o`)) {
		self.removeClass(`fa-star-o`).addClass(`fa-star`)
		const form_url = `${frm_js.ajax_url}?action=frm_forms_preview&form=dummyform`
		jQuery.get(form_url, (form156) => {
			jQuery(`body`).append(`<div id="temporary_form_156" class="hidden">${form156}</div>`)
			jQuery(`#temporary_form_156 [name="item_meta[5263]"]`).val(self.parent().parent().attr(`data-parent-id`))
			jQuery(`#temporary_form_156 form`).append(`<input type="hidden" name="antispam_token" value="${jQuery(`#temporary_form_156 form`).attr(`data-token`)}">`)
			jQuery.post(form_url, jQuery(`#temporary_form_156 form`).serialize(), (confirmation_page) => {
				if (need_reload) window.location.reload()
				const created_id = confirmation_page.split(`<p>`)[1].split(`</p>`)[0]
				jQuery(`#temporary_form_156`).remove()
				self.attr(`data-id`, created_id)
			})
		})
	} else {
		jQuery.post(frm_js.ajax_url, {
			action: `frm_entries_destroy`,
			entry: self.attr(`data-id`),
			nonce: frm_js.nonce
		}, () => {
			if (need_reload) window.location.reload()
			self.removeClass(`fa-star`).addClass(`fa-star-o`).attr(`data-id`, 0)
		})
	}
})

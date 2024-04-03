jQuery(`body`).append(`
    <div class="modal fade" id="edit_rfp" tabindex="-1" aria-labelledby="editRFP" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                </div>
            </div>
        </div>
    </div>
`)
jQuery(`[edit-entry-id]`).click(function () {
	const entry_id = jQuery(this).attr(`edit-entry-id`)
	jQuery.post( `${window.location.origin}/wp-json/shortcode-runner/v1/generate`, {
		shortcode: `formidable fields="878,886,881,887,892,893,894,1089,1091" id="58" entry_id="${entry_id}"`
	}, response => {
		jQuery(`#edit_rfp .modal-body`).html(response)
		jQuery(`#edit_rfp .modal-body form`).addClass(`frm_no_hide`)
		jQuery(`#edit_rfp`).modal(`show`)
	})
})

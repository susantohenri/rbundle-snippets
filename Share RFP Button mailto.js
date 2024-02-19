if (1 == jQuery(`a.su-button span:contains(Share RFP)`).length) {
	if (1 == jQuery(`h1[data-rfp-title] strong span`).length) {
		const fi500 = jQuery(`h1[data-rfp-title] strong span`).text()
		const current_url = window.location.href
		jQuery(`a.su-button span:contains(Share RFP)`)
			.parent()
			.attr(`href`, `mailto:?subject=Get Proposals for ${fi500}&body=Check out Rbundle common RFP for ${fi500} at ${current_url}. It makes it faster and easier than ever to see if your business is eligible for ${fi500}. If eligible, its the fastest way to get competitive proposals.`)
	}
}
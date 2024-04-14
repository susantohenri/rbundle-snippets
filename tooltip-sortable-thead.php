<?php
wp_register_script('bootstrap-v5', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.0.2');
wp_enqueue_script('bootstrap-v5');

$unique_id = bin2hex(random_bytes(5));
echo "
	<span class=\"with_frm_style su-tooltip-button\" id=\"{$unique_id}\" title=\"{$text}\" data-bs-html=\"true\"></span>
	<script type=\"text/javascript\">
		jQuery(document).ready(() => {
			new bootstrap.Tooltip(jQuery(`#{$unique_id}.with_frm_style.su-tooltip-button`))		
		})
	</script>
";
<?php
$order_field = 1566;
$order_type = 'DESC';

echo FrmViewsDisplaysController::get_shortcode([
    'id' => 13161,
    'filter' => 'limited',
    'order_by' => $order_field,
    'order' => $order_type
]);

echo "
<script type=\"text/javascript\">
    (function (script) {
        const view = jQuery(script).parent().find(`table`)
        const headers = view.find(`thead tr th`)

        setTimeout(() => {
            headers.eq(8).click()
        }, 500)
    })(document.currentScript);
</script>
";
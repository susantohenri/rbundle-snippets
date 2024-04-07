<?php
$order_field = 1566;
$order_type = 'DESC';

echo FrmViewsDisplaysController::get_shortcode([
    'id' => 13161,
    'filter' => 'limited',
    'order_by' => $order_field,
    'order' => $order_type
]);

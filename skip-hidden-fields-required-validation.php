<?php
add_filter(
    'frm_fields_to_validate',
    function ($fields) {
        $hidden_list_field_name = 'skip_hidden_fields_required_validation';
        if (isset($_POST[$hidden_list_field_name])) {
            $hidden_fields = explode(',', $_POST[$hidden_list_field_name]);
            $fields = array_map(function ($field) use ($hidden_fields) {
                if (in_array($field->id, $hidden_fields)) $field->required = 0;
                return $field;
            }, $fields);
        }
        return $fields;
    },
    10,
    1
);

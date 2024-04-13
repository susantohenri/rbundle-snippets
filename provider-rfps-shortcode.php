<?php
$order_field = 1566;
$order_type = 'DESC';

if (isset($_GET['sorting_column'])) {
    $sorting_column = $_GET['sorting_column'];
    switch ($sorting_column) {
        case 0:
            $order_field = 'star_shortlist';
            break;
        case 1:
            $order_field = 938;
            break;
        case 6:
        case 7:
            $order_field = 880;
            break;
        case 8:
            $order_field = 1566;
            break;
    }

    if (isset($_GET['sorting_type'])) $order_type = 'tablesorter-headerDesc' == $_GET['sorting_type'] ? 'DESC' : 'ASC';
}

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

        let get = {
            sorting_column: 8,
            sorting_type: `tablesorter-headerDesc`
        }

        for (let param of window.location.search.replace(`?`, ``).split(`&`)) {
            if (`` == param) continue;
            param = param.split(`=`)
            get[param[0]] = param[1]
        }

        setTimeout(() => {
            const target = headers.eq(get.sorting_column)

            headers.eq(0).removeClass(`tablesorter-headerDesc`)
            headers.eq(0).addClass(`tablesorter-headerUnSorted`)

            target.removeClass(`tablesorter-headerUnSorted`)
            target.addClass(get.sorting_type)

            headers.each(index => {
                const header = headers.eq(index)
                let url = window.location.href.split(`?`)[0] + `?`
    
                get.sorting_column = index
                get.sorting_type = header.hasClass(`tablesorter-headerAsc`) ? `tablesorter-headerDesc` : `tablesorter-headerAsc`
    
                if (0 == index && header.hasClass(`tablesorter-headerUnSorted`)) get.sorting_type = `tablesorter-headerDesc`

                for (let param in get) url += param +`=`+ get[param] + `&`
                header.click(e => { window.location = url })
            })
        }, 1000)
    })(document.currentScript);
</script>
";

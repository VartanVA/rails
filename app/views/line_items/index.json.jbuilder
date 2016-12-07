json.array! @line_items, partial: 'line_items/line_item', as: :line_item
$('#cart').html("<%= escape_javascript render(@cart) %>");

$('#current_item').css({'background-color':'#88ff88'}).animate({'background-color':'#114411'}, 1000);
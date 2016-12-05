//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require fancybox

$(document).ready(function(){
    
    $(".single").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
    
    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
    
});
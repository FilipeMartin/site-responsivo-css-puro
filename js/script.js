$(document).ready(function(){
	var btn = $('#btnMenuTop');
	var menu = $('#menuTopo');

	btn.click(function(){
		
		if(menu.css("display") == "none"){
			menu.addClass("abilitar");

		}else{
			menu.removeClass("abilitar");
		}

	});

});
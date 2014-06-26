$(function() {

	var cookie = $.cookie('todo');	
	if(cookie != undefined && cookie != null) {
		var obj = jQuery.parseJSON(cookie);
		$.each(obj, function(key,value) {
			if(value.status) {
				$('.list').append('<li class="checked"><i class="fa fa-minus-square-o"></i> <span>' + value.name + '</span></li>');	
			} else {
				$('.list').append('<li class="unchecked"><i class="fa fa-minus-square-o"></i> <span>' + value.name + '</span></li>');	
			}
		});
	}

	$('.newtask').keypress(function(event) {
		if (event.keyCode == 13) {
			if( $('.newtask').val() != '' ) {
				$('.list').append('<li class="unchecked"><i class="fa fa-minus-square-o"></i> <span>' + $('.newtask').val() + '</span></li>');
				$('.newtask').val('');	
			}
		}
    });



	$(document).on('click', '.fa-minus-square-o', function() {
		$(this).parent().remove();
	});


    $(document).on('click', '.checked', function() {
    	$(this).addClass('unchecked');
    	$(this).removeClass('checked');
    });


	$(document).on('click', '.unchecked', function() {
    	$(this).addClass('checked');
    	$(this).removeClass('unchecked');
    });    



    var save = function(){
		var finalJson = [];

	    $('.list').each(function() {
	    	$(this).find('li').each(function(){
	    		var currentJson = new Object();
	    		currentJson.name = $(this).text();
	    		if($(this).hasClass('checked')) {
	    			currentJson.status = true
	    		} else {
	    			currentJson.status = false;
	    		}
	    		finalJson.push(currentJson);
	    	}); 
	    });

	    $.cookie('todo', JSON.stringify(finalJson));
    	setTimeout(arguments.callee, 5000);
	};

    var timer = 0;

	(function() {
		if(timer == 15) {
			timer = 0;
			save();
		}
		$('footer').html("<a href='#' class='reset'>Reset list</a> - <a class='save' href='#'>Force save</a> - Saved in cookies " + timer + " seconds ago. Created by <a href='http://tiphedor.fr'>tiphedor</a>. Sources <a href='http://github.com'>here</a>");
		timer++;
		
		setTimeout(arguments.callee, 1000);
	})();

	$('footer').on('click', '.save', function() {
		save();
		timer = 0;
	});

	$('footer').on('click', '.reset', function() {
		$('.list').html('');
		$.removeCookie('todo');
	});



});
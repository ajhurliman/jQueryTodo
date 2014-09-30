$(document).ready(function() {
	//add item if the button is clicked
	$('#addButton').click(function(){
		$('<li class="list-group-item"><span class="badge">X</span>' + $('#input').val() + '</li>').appendTo('#list');
		$('#input').val(null);
	});

	//add item if the enter key is pressed
	$('#input').bind("enterKey",function(e){
		$('<li class="list-group-item"><span class="badge">X</span>' + $('#input').val() + '</li>').appendTo('#list');
		$('#input').val(null);
	});

	$('#input').keyup(function(e){
	    if(e.keyCode == 13) {
	        $(this).trigger("enterKey");
	    }
	});

	//remove an item by clicking the badge
	$(document).on('click', '.badge', function() {
		$(this).parent().remove();
	});
});

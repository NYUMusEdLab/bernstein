function main() {


	$("#searchbutton").click(function(){
		alert("spicy");

		var new_search = $("#video1");
		new_search.prop("data-search", "tuning");
		location.reload();



	});

}

$(document).ready(main);
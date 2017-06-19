function main() {


	$("#searchbutton").click(function(){

		//var new_search = $("#video1");
		var search_value = $("#search-bar").val();
		alert(search_value);

		d = new Date();
		$("#video1").attr("data-search", search_value+d.getTime());




	});

}

$(document).ready(main);
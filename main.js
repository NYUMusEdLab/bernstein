function main() {
	var player = new AblePlayer($('#video1'));

	var url = $.url().param("search");

	//check for search term
	if (url != ""){

        $("#search-term").text(url);
        player.searchString = url;
        player.showSearchResults();


	}

	$("#searchbutton").click(function(){
		var search_value = $("#search-bar").val();
		window.location = "?search=" + search_value;
	});

}

$(document).ready(main);
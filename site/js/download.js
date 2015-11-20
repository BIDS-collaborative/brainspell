
var searchString;
function setSearchString(str)
{
	searchString=str;
}

function getSearchString() {
	return searchString;
}

function result_to_csv() {
	if(searchString == null) {
		var filename = "SearchResult_DefaultPage";
	} else {
		var filename = "SearchResult_" + getSearchString();
	}
	var csvfile = "Titles, Reference, \n";
	$('.paper-stuff').each(function() { 
		csvfile += $(this).find('a').text() + ",";
		csvfile += '"' + $(this).find('.info').text() + '", \n';
	});
	var csvData = 'data:text/json;charset=utf-8,'+ encodeURIComponent(csvfile);
	var a = document.createElement('a');
	a.href = csvData;
	a.download = filename + '.csv';
	document.body.appendChild(a);
	a.click();
}

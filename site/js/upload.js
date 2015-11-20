var csv;

function setCsv(array) {
	csv = array;
}

function getCsv() {
	return csv;
}

function csv_to_page() {
	$(document).ready(function() {
		$("#filename").change(function(e) {
			var ext = $("input#filename").val().split(".").pop().toLowerCase();
			if($.inArray(ext, ["csv"]) == -1) {
			alert('Upload CSV');
			return false;
			}
			if (e.target.files != undefined) {
				var reader = new FileReader();
				reader.onload = function(e) {
					var csvval = e.target.result.split(",");
					var inputrad = "";
					var li = [];
					for(var i=0;i<csvval.length;i++)
					{
						var temp=csvval[i].trim();
						var inputrad=inputrad+" "+temp;
						li.push(temp);
					}
					$("#csvimporthinttitle").show();
					alert(li);
				};
				reader.readAsText(e.target.files.item(0));
			}
		});
	});
	return_to_normal();
}

function return_to_normal() {
	$("body").click(function (evt) {
		if (evt.target.id != "button_for_upload") {
			$("#filename").css("display", "none");
		}
	});
}


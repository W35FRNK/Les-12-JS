$(document).ready(function () {
	$.ajax({
		url: "content12-2.html",
		succes: function (data) {
			$("#divResult").append(data);
		},
		error: function () {
			$("#divResult").append("Er is een error!");
		},
	});
});

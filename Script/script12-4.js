$(document).ready(function () {
	$.get(
		"https://openexchangerates.org/api/latest.json",
		{ app_id: "0c9762d4977945c0b87e91a20a2a908c" },
		function (data) {
			const koersEur = data.rates.EUR;
			console.log(data.rates);
			console.log(koersEur);

			$("#btnValuta").on("click", function () {
				const nrVal = parseInt($("#nrValuta").val());
				console.log(nrVal);
				var check = $.isNumeric(nrVal);
				console.log(nrVal * koersEur);
				var usdEur = nrVal * koersEur;

				if (check) {
					$("#divResult").append("€ " + usdEur);
				} else {
					alert("Voer een getal in!");
				}
			});
		}
	);
});

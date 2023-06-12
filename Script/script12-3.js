$(document).ready(function () {
	// Weer voor gezochte stad ophalen bij klik op knop
	$("#btnWeather").on("click", function () {
		let weatherUrl =
			"https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q=";
		const stadUrl = "https://openweathermap.org/city/";
		weatherUrl += $("#textCity").val();
		weatherUrl += "&units=metric&lang=nl";

		$.ajax({
			url: weatherUrl,
			success: function (weather) {
				console.log(weather);
				const divResult = $("#divResult");
				divResult.empty();
				let html = '<strong><a href="' + stadUrl + weather.id;
				html += '" target="_blank">' + weather.name;
				html += " (" + weather.sys.country + ")</a></strong>";
				html += ", temperatuur: " + weather.main.temp + " graden.<br />";
				html +=
					", luchtvochtigheid: " + weather.main.humidity + " procent.<br />";
				html += ", luchtdruk: " + weather.main.pressure + " hPa.<br />";
				divResult.append(html);
			},
			error: function (jqXhr, textStatus, errorThrown) {
				let html = "<strong>Er is een fout opgetreden: </strong>";
				html += jqXhr.responseJSON.cod + ", " + jqXhr.responseJSON.message;
				$("#divResult").append(html);
			},
		});
	});
});

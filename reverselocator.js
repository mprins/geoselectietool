function reverseLocate(x,y,srs) {
	var url = "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Locators/ESRI_Geocode_EU/GeocodeServer/reverseGeocode?location=%7By%3A"+y+"%2Cx%3A"+x+"%7D&distance=5000&outSR="+srs+"&f=json&callback=parseLocation";
	var script = document.createElement('script');
	script.setAttribute('src', url);
	document.getElementsByTagName('head')[0].appendChild(script);
}

function parseLocation(response) {
	try {
		document.getElementById('adres').value=response.address.Address+", " +response.address.City;
	} catch(an_exception){}
}

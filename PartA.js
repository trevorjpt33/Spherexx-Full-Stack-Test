function calculate_rent()
{
	var result = 0;
	var marketRent = parseFloat(document.getElementById("market_rent").value);
	var upFrontConcession = parseFloat(document.getElementById("up_front_concession").value);
	var monthlyConcession = parseFloat(document.getElementById("monthly_concession").value);
	
	result = marketRent - (monthlyConcession + (upFrontConcession / 12));
	
	
	document.getElementById("effective_rent").value = result; 
	//Display result in text input "effective_rent"
}
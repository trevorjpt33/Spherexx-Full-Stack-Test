function validate_form(o_form)
{	
	//Make sure they enter a value for Building Name
	if (o_form.BuildingName.value == "")
	{
		alert("Please enter a building name.");
		o_form.BuildingName.focus();
		return false;
	}
	
	//Make sure they enter a value for Year Built
	if (o_form.YearBuilt.value == "")
	{
		alert("Please enter the year built.");
		o_form.YearBuilt.focus();
		return false;
	}
	else
	{
		//Make sure the value entered is valid
		if (o_form.YearBuilt.value.length != 4 || isNaN(o_form.YearBuilt.value))
		{
			alert("Please enter a valid 4 digit year for the year built.");
			o_form.YearBuilt.focus();
			return false;
		}
	}
	
	//Make sure they enter a value for Number of Units
	if (o_form.NumberOfUnits.value == "")
	{
		alert("Please enter a number of units.");
		o_form.NumberOfUnits.focus();
		return false;
	}

	
	return true;
}
<%
Dim BuildingName, YearBuilt, NumberOfUnits
BuildingName = Left(Request.Form("BuildingName"), 50) 'Trim any extra characters from form field
YearBuilt = Left(Request.Form("YearBuilt"), 4) 'Trim any extra characters from form field
NumberOfUnits = Request.Form("NumberOfUnits")

Dim Query
Query = "INSERT INTO Building (BuildingName, YearBuilt, NumberOfUnits) VALUES ('" & BuildingName & "', '" & YearBuilt & "', '" & NumberOfUnits & "')"
Call SetAnyDBItem(strConnect, Query)
%>
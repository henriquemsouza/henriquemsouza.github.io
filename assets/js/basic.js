
window.onload = function () {
	var doughnutData = [
		{
			value: 40,
			color:"#1e7b1e",
			label: "Team Work"
		},
		{
			value : 10,
			color : "#ecf0f1",
			label: "Autodidata"
		},
		{
			value:60,
			color:"#6867b8",
			label: "Logica"
		},
		{
			value:50,
			color:"#475dc2",
			label : "Comprometido"
		},
		
	];
	var myDoughnut = new Chart(document.getElementById("TeamWORKER").getContext("2d")).Doughnut(doughnutData);
	

	//

	
	//
}




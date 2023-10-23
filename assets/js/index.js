$(document).ready(function(){
    $("#respuesta").hide();
    function datosApi(id){
        const token = 4905856019427443;
    $.ajax({
        type: "get",
        url:`https://www.superheroapi.com/api.php/${token}/${id}`,
        async: true,
        dataType:"json",
        success: function(response){
            console.log(response)
            if (response.name == "-"){
                response.name = "Dato no encontrado"
            }
            if (response.connections["group-affiliation"] == "-"){
                response.connections["group-affiliation"] = "Dato no encontrado"
            }
            if (response.biography.publisher == "-"){
                response.biography.publisher = "Dato no encontrado"
            }
            if (response.work.occupation == "-"){
                response.work.occupation = "Dato no encontrado"
            }
            if (response.biography["first-appearance"] == "-"){
                response.biography["first-appearance"] = "Dato no encontrado"
            }
            if (response.appearance.height == "-"){
                response.appearance.height = "Dato no encontrado"
            }
            if (response.appearance.weight == "-"){
                response.appearance.weight = "Dato no encontrado"
            }
            if (response.biography.aliases == "-"){
                response.biography.aliases = "Dato no encontrado"
            }
            if (response.powerstats.intelligence == "null"){
                response.powerstats.intelligence = 1
            }
            if (response.powerstats.strength == "null"){
                response.powerstats.strength = 1
            }
            if (response.powerstats.speed == "null"){
                response.powerstats.speed = 1
            }
            if (response.powerstats.durability == "null"){
                response.powerstats.durability = 1
            }
            if (response.powerstats.power == "null"){
                response.powerstats.power = 1
            }
            if (response.powerstats.combat == "null"){
                response.powerstats.combat = 1
            }
            
            $(`.margen`).attr("class", "card");
            $("#fotito").attr("src", `${response.image.url}`)  
            
            $(`.card-title`).html(`${response.name}<hr>`)
            $(`.card-text`).html(`
                <p>Name: ${response.name}</p>
                <p>Connections: ${response.connections["group-affiliation"]}</p><br>
                <p>Published by: ${response.biography.publisher}</p><hr>
                <p>Occupation: ${response.work.occupation}</p><hr>
                <p>First appearance: ${response.biography["first-appearance"]}</p><hr>
                <p>Height: ${response.appearance.height}</p><hr>
                <p>Weight: ${response.appearance.weight}</p><hr>
                <p>Alliances: ${response.biography.aliases}</p>
                               
            `)
            let options = {
                title: {
                    text: `Power statistics for ${response.name}`
                },
                subtitles: [{
                    text: ""
                }],
                animationEnabled: true,
                data: [{
                    type: "pie",
                    startAngle: 40,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                        { y: `${response.powerstats.intelligence}`, label: "Intelligence" },
                        { y: `${response.powerstats.strength}`, label: "Strength" },
                        { y: `${response.powerstats.speed}`, label: "Speed" },
                        { y: `${response.powerstats.durability}`, label: "Durability" },
                        { y: `${response.powerstats.power}`, label: "Power" },
                        { y: `${response.powerstats.combat}`, label: "Combat" },              
                        
                    ]
                }]
            };
            $("#chartContainer").CanvasJSChart(options);            
        },
        error: function(error){            
           console.log(error); 
           $("#informacion").html("Ha ocurrido un error: " + error.statusText);

        }            
    })
    }

    $("button").click(function(){        
        let id= $("#numero").val();
        $("#respuesta").hide();
        $("#informacion").hide();
        
        if(id == 453) {
            $(".noencontrado").show(404);
        }else {
            $(".noencontrado").hide();
        }
       
        if ( isNaN(id) || id >= 733 || id <= 0) {           
            $("#respuesta").show(500);
            $("#informacion").hide();
            
            
        }else{
            datosApi(id);
            if (datosApi){
                $("#informacion").show(500);
                $("#respuesta").hide(); 
                $("#noencontrado").hide();                 
            }
        }           
    });    
   
})

// descarga de canvas

// <!DOCTYPE HTML>
// <html>
// <head>
// <script>
window.onload = function () {

var options = {
	title: {
		text: "Desktop OS Market Share in 2017"
	},
	subtitles: [{
		text: "As of November, 2017"
	}],
	animationEnabled: true,
	data: [{
		type: "pie",
		startAngle: 40,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 48.36, label: "Windows 7" },
			{ y: 26.85, label: "Windows 10" },
			{ y: 1.49, label: "Windows 8" },
			{ y: 6.98, label: "Windows XP" },
			{ y: 6.53, label: "Windows 8.1" },
			{ y: 2.45, label: "Linux" },
			{ y: 3.32, label: "Mac OS X 10.12" },
			{ y: 4.03, label: "Others" }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}
// </script>
// </head>
// <body>
// <div id="chartContainer" style="height: 370px; width: 100%;"></div>
// <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
// <script src="https://cdn.canvasjs.com/jquery.canvasjs.min.js"></script>
// </body>
// </html>
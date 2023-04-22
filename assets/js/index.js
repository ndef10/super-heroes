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
            $(`.margen`).attr("class", "card");
            $("#fotito").attr("src", `${response.image.url}`)  
            
            $(`.card-title`).html(`Super heroe encontrado<hr>`)
            $(`.card-text`).html(`
                <p>Nombre: ${response.name}</p>
                <p>Conexiones: ${response.connections["group-affiliation"]}</p><br>
                <p>Publicado por: ${response.biography.publisher}</p><hr>
                <p>Ocupación: ${response.work.occupation}</p><hr>
                <p>Primera aparición: ${response.biography["first-appearance"]}</p><hr>
                <p>Altura: ${response.appearance.height}</p><hr>
                <p>Peso: ${response.appearance.weight}</p><hr>
                <p>Alianzas: ${response.biography.aliases}</p>
                               
            `)
            let options = {
                title: {
                    text: `Estadisticas de poder para ${response.name}`
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
        }            
    })
    }

    $("button").click(function(){        
        let id= $("#numero").val();
       
        if ( isNaN(id) || id >= 733 || id <= 0) {           
            $("#respuesta").show(500);
            $("#informacion").hide(); 
            
        }else{
            datosApi(id);
            if (datosApi){
                $("#informacion").show(500);
                $("#respuesta").hide();                
            }
        }           
    });    
   
})

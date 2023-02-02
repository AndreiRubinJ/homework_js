tempData = [{
    name: "Chekasy Oblast",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2023,0,24), y: -1 },
        { x: new Date(2023,0,25), y: -2 },
        { x: new Date(2023,0,26), y: 0 },
        { x: new Date(2023,0,27), y: 1 },
        { x: new Date(2023,0,28), y: 0 },
        { x: new Date(2023,0,29), y: 1 },
        { x: new Date(2023,0,30), y: -3 }
    ]
},
{
    name: "Chernihiv Oblast",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2023,0,24), y: -2 },
        { x: new Date(2023,0,25), y: 0 },
        { x: new Date(2023,0,26), y: 0 },
        { x: new Date(2023,0,27), y: -6 },
        { x: new Date(2023,0,28), y: -5 },
        { x: new Date(2023,0,29), y: -3 },
        { x: new Date(2023,0,30), y: -5 }
    ]
},
{
    name: "Chernivtsi Oblast",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2023,0,24), y: 0 },
        { x: new Date(2023,0,25), y: 0 },
        { x: new Date(2023,0,26), y: 0 },
        { x: new Date(2023,0,27), y: 1 },
        { x: new Date(2023,0,28), y: -1 },
        { x: new Date(2023,0,29), y: -1 },
        { x: new Date(2023,0,30), y: 0 }
    ]
},
{
    name: "Dnipropetrovsk Oblast",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2023,0,24), y: -2 },
        { x: new Date(2023,0,25), y: -3 },
        { x: new Date(2023,0,26), y: -3 },
        { x: new Date(2023,0,27), y: -4 },
        { x: new Date(2023,0,28), y: -5 },
        { x: new Date(2023,0,29), y: -4 },
        { x: new Date(2023,0,30), y: -2 }
    ]
},
{
    name: "Donetsk Oblast",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2023,0,24), y: 0 },
        { x: new Date(2023,0,25), y: 0 },
        { x: new Date(2023,0,26), y: 0 },
        { x: new Date(2023,0,27), y: -2 },
        { x: new Date(2023,0,28), y: -1 },
        { x: new Date(2023,0,29), y: 1 },
        { x: new Date(2023,0,30), y: 0 }
    ]
},
{
    name: "Kyiv Oblast",
    type: "spline",
    yValueFormatString: "#0.## °C",
    showInLegend: true,
    dataPoints: [
        { x: new Date(2023,0,24), y: -4 },
        { x: new Date(2023,0,25), y: -3 },
        { x: new Date(2023,0,26), y: -6 },
        { x: new Date(2023,0,27), y: -10 },
        { x: new Date(2023,0,28), y: -9 },
        { x: new Date(2023,0,29), y: -11 },
        { x: new Date(2023,0,30), y: -8 }
    ]
}
]


window.onload = () => {
    let inputWidth = document.querySelector('.width');
    let inputHeight = document.querySelector('.height');
    let checkBox = document.querySelector('.form-check-input');
    let btn = document.querySelector('.submit-drow');
   

    inputHeight.addEventListener("input", function(){                         
        btn.disabled = (isNaN(parseFloat(this.value)) || isNaN(parseFloat(inputWidth.value))) ;
      })

      inputWidth.addEventListener("input", function(){                   
        btn.disabled = (isNaN(parseFloat(this.value)) || isNaN(parseFloat(inputHeight.value))) ; ;      
      })   

      btn.addEventListener('click', (e) =>{  
        let form = drowFromForm(inputWidth.value,inputHeight.value,checkBox.checked);
        document.querySelector('body section').appendChild(form);        
        e.preventDefault();
        document.getElementById("formid").reset();
        
        
      } ) 

    document.querySelector('.drow_circle').addEventListener('click', (e) =>{   
    let r = document.querySelector(".form-control").value             
    document.querySelector('body section').appendChild(drowCircle(r));
  });
    document.querySelector('.drow_canvas').addEventListener('click', (e) =>{
        let text = document.querySelector(".canvas-text").value
        document.querySelector('body section').appendChild(drowCircleCanvas(text));
    })

    makeChars()

}


function drowCircle(radius){
    let div = document.createElement('div');
    let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let cycle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    div.classList.add("ms-5");   
    div.classList.add("mt-5");
    svg.setAttribute("height", `${radius*2}`);
    svg.setAttribute("width", `${radius*2}`);    
    
    cycle.setAttributeNS(null, "cx",radius);
    cycle.setAttributeNS(null, "cy",radius);    
    cycle.setAttributeNS(null, "r",radius);    
    svg.appendChild(cycle);
    div.appendChild(svg);
    div.addEventListener('click', (e) =>{       
        div.remove();

    });
    return div
}

function drowCircleCanvas(text) {
    let div = document.createElement('div');    
    div.classList.add("ms-5");   
    div.classList.add("mt-5");

    let canvas = document.createElement("canvas");
    canvas.setAttribute("width",250)
    canvas.setAttribute("height",250)
    let context = canvas.getContext('2d'); 
    context.beginPath();
    context.fillStyle = "blue";
    context.strokeStyle = "black";
    context.font = "20px Georgia";
    context.lineWidth = 10;
    context.arc(125, 125, 125, 0, 2 * Math.PI, false);
    context.fill();    
    context.beginPath();
    context.fillStyle = "white";    
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, 125, 125, 300);    
    context.fill();
    div.appendChild(canvas);
    div.addEventListener('click', (e) =>{       
        div.remove();

    });
    return div;
}

function drowFromForm(w,h,isElips = true) {
    let type = isElips ? 'ellipse': 'rect';
    let div = document.createElement('div');
    let svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let cycle = document.createElementNS("http://www.w3.org/2000/svg", type);
    div.classList.add("mt-5");
    div.classList.add("ms-5");        
    svg.setAttribute("height", `${h*2}`);
    svg.setAttribute("width", `${w*2}`);  
       
    if(isElips){
    cycle.setAttributeNS(null, "cx",w);
    cycle.setAttributeNS(null, "cy",h);    
    cycle.setAttributeNS(null, "rx",w/2);    
    cycle.setAttributeNS(null, "ry",h/2);    
    cycle.setAttribute("style", "fill: blue");
    }else{
        cycle.setAttribute("height", `${h}`);
        cycle.setAttribute("width", `${w}`);
        cycle.setAttribute("style", "fill: green");

    }
    svg.appendChild(cycle);
    div.appendChild(svg);
    div.addEventListener('click', (e) =>{       
        div.remove();

    });
    return div;
    
}

function makeChars(){
let chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Daily High Temperature"
	},
	axisX: {
		valueFormatString: "DD MMM,YY"
	},
	axisY: {
		title: "Temperature (in °C)",
		suffix: " °C"
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,        
		itemclick: toggleDataSeries
		
	},
	toolTip:{
		shared: true
	},
	data:tempData
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}


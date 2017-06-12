/* Bar Chart Js file */

$(document).ready(function(){

	var xaxisdata = [];
	var yaxisdata = [];

	//Retrieving data from "carprices.json" by using getJSON, JSON file is stored locally in "json" folder
	$.getJSON("json/carprices.json", function(cars){
		$.each(cars,function(key,value){

			xaxisdata.push(value.car_name); 
			yaxisdata.push(value.price_from);
		})


	// High Chart code Started //
	Highcharts.chart('mychart', {

	chart: {
	    type: 'bar'
	},
	title: {
	    text: 'Car Prices in Ireland'
	},
	subtitle: {
	    text: '(Data consume from JSON file)'
	},
	xAxis: {
	    categories: xaxisdata,
	    title: {
	        text: '(Car Name)'
	    }
	},
	yAxis: {
	    min: 0,
	    title: {
	        text: '(Car Price "euro")',
	        
	    },
	    labels: {
	        overflow: 'justify'
	    }
	},
	tooltip: {
	    valueSuffix: ' Euro'
	},
	plotOptions: {
	    bar: {
	        dataLabels: {
	            enabled: true
	        }
	    }
	},

	credits: {
	    text: 'Khalid Mahmood',
	    enabled: true
	},
	series: [{
	    name: 'Price',
	    data: yaxisdata
	    }]
	});
	// High Chart code Ended //
	});


});


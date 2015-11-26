module.exports = {
	init: function() {
		localStorage.clear();
		localStorage.setItem('datasets', JSON.stringify({
			set1: {
				chartType: "Line",
				title: "Time Spent on Homework, hours/month",
				data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [
					{
						label: "2014",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [65, 59, 80, 81, 56, 55, 40]
					},
					{
						label: "2015",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [28, 48, 40, 19, 86, 27, 90]
					}
					]
				}
			},
			set2: {
				chartType: "Bar",
				title: "Activities, hours/week",
				data: {
					labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
					datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [28, 48, 40, 19, 96, 27, 100]
					},
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [65, 59, 90, 81, 56, 55, 40]
					}
					]
				}
			},
			set3: {
				chartType: "Bar",
				title: "Thanksgiving Foods Consumed, lbs",
				data: {
					labels: ["Turkey", "Stuffing", "Cranberry Sauce", "Potatoes", "Peas and Onions", "Biscuits", "Gravy"],
					datasets: [
					{
						label: "2014",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: "2015",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [28, 48, 40, 19, 96, 27, 100]
					}
					]
				}
			},
			set4: {
				chartType: "PolarArea",
				title: "Priorities",
				data:  [
					{
						value: 100,
						color:"#07070A",
						highlight: "#070700",
						label: "Happiness"
					},
					{
						value: 20,
						color: "#5C646E",
						highlight: "#5C645E",
						label: "Sleep"
					},
					{
						value: 40,
						color: "#3E78B2",
						highlight: "#3E78A2",
						label: "Salary"
					},
					{
						value: 40,
						color: "#004BA8",
						highlight: "#004BA0",
						label: "Fun"
					},
					{
						value: 60,
						color: "#8F8F8F",
						highlight: "#8F8F85",
						label: "Family"
					}
				]
			},
			set5: {
				chartType: "Doughnut",
				title: "Doughnuts Consumed, lifetime",
				data: [
					{
						value: 300,
						color:"#07070A",
						highlight: "#070700",
						label: "Chocolate"
					},
					{
						value: 50,
						color: "#5C646E",
						highlight: "#5C645E",
						label: "Plain"
					},
					{
						value: 100,
						color: "#3E78B2",
						highlight: "#3E78A2",
						label: "Sprinkles"
					}
				]
			},
			set6: {
				chartType: "Radar",
				title: "Activities, hours/week",
				data: {
					labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
					datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [28, 48, 40, 19, 96, 27, 100]
					},
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [65, 59, 90, 81, 56, 55, 40]
					}
					]
				}
			}
		}));
}
};
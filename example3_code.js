"use strict";
//Function to calculate the area of a circle
function circleArea() {
    var radius, area;
    radius = Number(document.getElementById("id1").value);
    area = Math.PI * radius * radius;
    document.getElementById("id2").value = area.toFixed(2);
	document.getElementById("id3").innerHTML = "Result is " + area.toFixed(2);
}
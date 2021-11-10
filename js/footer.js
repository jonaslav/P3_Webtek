// JavaScript Document
function createFooter(){
	var f = document.createElement("footer"); 
	f.setAttribute("id", "pageFooter");
	document.body.appendChild(f); 
	
	var y = document.createElement("P");
	var t = document.createTextNode("Tlf: +47 123 45 678      Adresse: Gløshaugen 123     E-post: gløs_takeaway@gmail.no"); 
	y.appendChild(t); 
	
	document.getElementById("pageFooter").appendChild(y); 
}
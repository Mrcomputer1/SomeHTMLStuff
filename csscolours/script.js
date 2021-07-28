var lastSelectedColour = "transparent";

function intToRGB(i){
	return {
		r: Math.floor(i / (256 * 256)),
		g: Math.floor(i / 256) % 256,
		b: i % 256
	};
}

function updateChipBuiltIn(name, hexCode){
	hexCode = parseInt(hexCode);
	var rgb = intToRGB(hexCode);
	
	var text = "Built-in Colour: " + name;
	text += " - Hex: #" + hexCode.toString(16).toUpperCase().padStart(6, "0");
	text += " - RGB: " + rgb.r + ", " + rgb.g + ", " + rgb.b;
	
	document.querySelector("#chip").innerText = text;
}

function updateChipUserEntered(value){
	document.querySelector("#chip").innerText = "Custom Colour: " + value;
}

function displayColour(e){
	document.querySelector("#colour-preview").style.backgroundColor = e.target.dataset.name;
	updateChipBuiltIn(e.target.dataset.name, e.target.dataset.hexCode);
	
	document.querySelector("#last-a").style.color = lastSelectedColour;
	lastSelectedColour = "#" + parseInt(e.target.dataset.hexCode).toString(16);
}

function displayColourCustom(code){
	document.querySelector("#colour-preview").style.backgroundColor = code;
	updateChipUserEntered(code);
	
	document.querySelector("#last-a").style.color = lastSelectedColour;
	lastSelectedColour = code;
}

// https://stackoverflow.com/a/5624139/4013760
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function displayColourPickerSelection(code){
	var css = "rgb(" + code[0] + ", " + code[1] + ", " + code[2] + ")";
	
	document.querySelector("#colour-preview").style.backgroundColor = css;
	updateChipUserEntered(("#" + componentToHex(code[0]) + componentToHex(code[1]) + componentToHex(code[2])).toUpperCase());
	
	document.querySelector("#last-a").style.color = lastSelectedColour;
	lastSelectedColour = css;
}

function loadColourList(){
	var list = document.querySelector("#colour-list>ul");
	list.innerHTML = "";
	for(var colour of COLOURS){
		var li = document.createElement("li");
		var palette = document.createElement("span");
		palette.className = "colour-palette";
		palette.style.backgroundColor = colour.name;
		li.appendChild(palette);
		var name = document.createTextNode(" " + colour.name);
		li.appendChild(name);
		li.dataset.name = colour.name;
		li.dataset.hexCode = colour.hex;
		li.onclick = displayColour;
		
		list.appendChild(li);
	}
}

function closeAllDialogs(){
	for(var dialog of document.querySelectorAll(".dialog")){
		dialog.style.display = "none";
	}
}

// Run
loadColourList();

document.querySelector("#btn-custom").onclick = function(){
	document.querySelector("#dialog-custom").style.display = "block";
};

document.querySelector("#btn-picker").onclick = function(){
	document.querySelector("#dialog-picker").style.display = "block";
	renderCanvas();
};

document.querySelector("#btn-custom-colour").onclick = function(){
	closeAllDialogs();
	
	displayColourCustom(document.querySelector("#css-colour-input").value);
	document.querySelector("#css-colour-input").value = "";
};
document.querySelector("#btn-picker-colour").onclick = function(){
	closeAllDialogs();
	
	var rgb = hslToRgb(ColourPickerState.hue, ColourPickerState.sat, ColourPickerState.light);
	displayColourPickerSelection(rgb);
	ColourPickerState.hue = 0;
	ColourPickerState.sat = 100;
	ColourPickerState.light = 50;
};

for(var el of document.querySelectorAll(".btn-close-dialog")){
	el.onclick = closeAllDialogs;
}
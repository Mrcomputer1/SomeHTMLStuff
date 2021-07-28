// https://stackoverflow.com/a/9493060/4013760
function hslToRgb(h, s, l){
	h = h / 360;
	s = s / 100;
	l = l / 100;
	
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}

// https://stackoverflow.com/a/18053642/4013760
function getClickPositionOnCanvas(e){
	var rect = e.target.getBoundingClientRect();
	return [e.clientX - rect.left, e.clientY - rect.top];
}

var ColourPickerState = {
	hue: 0,
	sat: 100,
	light: 50,
	isChangingHueSat: false,
	isChangingLight: false
};

function getPixelLocation(width, x, y, v){
	return (y * (width * 4) + x * 4) + v;
}

function renderCanvas(){
	var lightCanvas = document.querySelector("#picker-light");
	var lightCanvasCtx = lightCanvas.getContext("2d");
	var lightCanvasImgData = lightCanvasCtx.createImageData(20, 360);
	
	for(var x = 0; x < 100; x++){
		var rgb = hslToRgb(ColourPickerState.hue, ColourPickerState.sat, x);
		for(var y = 0; y < 20; y++){
			lightCanvasImgData.data[getPixelLocation(20, y, x, 0)] = rgb[0];
			lightCanvasImgData.data[getPixelLocation(20, y, x, 1)] = rgb[1];
			lightCanvasImgData.data[getPixelLocation(20, y, x, 2)] = rgb[2];
			lightCanvasImgData.data[getPixelLocation(20, y, x, 3)] = 255;
		}
	}
	
	lightCanvasCtx.putImageData(lightCanvasImgData, 0, 0);
	
	var hueSatCanvas = document.querySelector("#picker-hue-sat");
	var hueSatCanvasCtx = hueSatCanvas.getContext("2d");
	var hueSatImgData = hueSatCanvasCtx.createImageData(360, 100);
	
	for(var x = 0; x < 360; x++){
		for(var y = 0; y < 100; y++){
			var rgb = hslToRgb(x, 100 - y, 50);
			hueSatImgData.data[getPixelLocation(360, x, y, 0)] = rgb[0];
			hueSatImgData.data[getPixelLocation(360, x, y, 1)] = rgb[1];
			hueSatImgData.data[getPixelLocation(360, x, y, 2)] = rgb[2];
			hueSatImgData.data[getPixelLocation(360, x, y, 3)] = 255;
		}
	}
	
	hueSatCanvasCtx.putImageData(hueSatImgData, 0, 0);
}

function updateSelectedColour(){
	var rgb = hslToRgb(ColourPickerState.hue, ColourPickerState.sat, ColourPickerState.light);
	document.querySelector("#picker-selected").style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	document.querySelector("#picker-selected-text").innerText = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ") - hsl(" + ColourPickerState.hue + ", " + ColourPickerState.sat + "%, " + ColourPickerState.light + "%)";
}

document.querySelector("#picker-hue-sat").onmousedown = function(e){
	ColourPickerState.isChangingHueSat = true;
};
document.querySelector("#picker-hue-sat").onmouseup = function(e){
	ColourPickerState.isChangingHueSat = false;
};
document.querySelector("#picker-hue-sat").onmouseout = function(e){
	ColourPickerState.isChangingHueSat = false;
};
document.querySelector("#picker-hue-sat").onmousemove = function(e){
	if(ColourPickerState.isChangingHueSat){
		var hueSatCanvas = e.target;
		var hueSatCanvasCtx = hueSatCanvas.getContext("2d");
		
		var clickPos = getClickPositionOnCanvas(e);
		var pixel = hueSatCanvasCtx.getImageData(clickPos[0], clickPos[1], 1, 1).data;
		var hsl = rgbToHsl(pixel[0], pixel[1], pixel[2]);
		
		ColourPickerState.hue = hsl[0];
		ColourPickerState.sat = hsl[1];
		
		updateSelectedColour();
		renderCanvas();
	}
};

document.querySelector("#picker-light").onmousedown = function(e){
	ColourPickerState.isChangingLight = true;
};
document.querySelector("#picker-light").onmouseup = function(e){
	ColourPickerState.isChangingLight = false;
};
document.querySelector("#picker-light").onmouseout = function(e){
	ColourPickerState.isChangingLight = false;
};
document.querySelector("#picker-light").onmousemove = function(e){
	if(ColourPickerState.isChangingLight){
		var lightCanvas = e.target;
		var lightCanvasCtx = lightCanvas.getContext("2d");
		
		var clickPos = getClickPositionOnCanvas(e);
		var pixel = lightCanvasCtx.getImageData(clickPos[0], clickPos[1], 1, 1).data;
		var hsl = rgbToHsl(pixel[0], pixel[1], pixel[2]);
		
		ColourPickerState.light = hsl[2];
		
		updateSelectedColour();
		renderCanvas();
	}
};
var a = '';   // becomes the text file
var g = 220; // .2 - .35
var l = 211; // .35 - .5
var s = 192; // .5 - .65
var d = 169; // .65 - .8
var gg = 128; // .8 - .95
var dd = 105; // .95 - 1.10
var ab = 50; // 1.10 - 1.25
var b = 0; // 1.25 - 1.4

// first row is blue greem alternating
// next row is green red alternating

var blue = false;
var green = false;
var red = false;
var bluerow = false;
var redrow = false;

// how to know what row we are on? 512 rows!
// if length / 512 is even we are on a row, if it is odd we are on another row.
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

var counter = 0; // for going through the text files
var colorcounter = 0; //for switching colors

window.onload=function(){

  // This stuff was more for testing how the canvas worked

  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");

      // Create an ImageData object
      //178, 216, 179, 217
      var id = context.createImageData(1,1);
      d[0]   =  178;
      d[1]   = 216;
      d[2]   = 179;
      d[3]   = 217;
      context.putImageData( id, 0, 0 );
      // Pick a text file
  document.getElementById("openFile").addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = function() {
      document.getElementById("fileContents").textContent = this.result;
      a = this.result;
    }
    fr.readAsText(this.files[0]);
  })

}

// Function for easy text file

function jvalen15_easy() {
  counter = 0;
  a = a.substr(1);
  a = a.substring(0, a.length - 1);
  var b = a.split(', ').map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();

  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");
  var i = 0;
  var j = 0;
  //console.log(canvas.height);
  for (i = 0; i < canvas.width; i++) {
    for (j = 0; j < canvas.height; j++) {
      // one pixel
      var id = context.createImageData(1,1);
      var d  = id.data;
      // Lots of if loops for the color
      if (b[counter] < .35) {
        d[0]   = g;
        d[1]   = g;
        d[2]   = g;
      }

      if (b[counter] > .35 && b[counter] < .5) {
        d[0]   = l;
        d[1]   = l;
        d[2]   = l;
      }
      if (b[counter] > .5 && b[counter] < .65) {
        d[0]   = s;
        d[1]   = s;
        d[2]   = s;
      }
      if (b[counter] > .65 && b[counter] < .8) {
        d[0]   = d;
        d[1]   = d;
        d[2]   = d;
      }
      if (b[counter] > .8 && b[counter] < .95) {
        d[0]   = gg;
        d[1]   = gg;
        d[2]   = gg;
      }
      if (b[counter] > .95 && b[counter] < 1.1) {
        d[0]   = dd;
        d[1]   = dd;
        d[2]   = dd;
      }
      if (b[counter] > 1.1 && b[counter] < 1.25) {
        d[0]   = ab;
        d[1]   = ab;
        d[2]   = ab;
      }
      if (b[counter] > 1.25) {
        d[0]   = b;
        d[1]   = b;
        d[2]   = b;
      }
      // Alpha is always 100%
      d[3]   = 255;
      context.putImageData( id, i, j );
      counter++;
    }
  }
}
function jvalen15_easy_ass2() {
  counter = 0;
  a = a.substr(1);
  a = a.substring(0, a.length - 1);
  var b = a.split(', ').map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var canvas = document.getElementById("viewporthard");
  var context = canvas.getContext("2d");
  var i = 0;
  var id = context.createImageData(512,512);
  var d  = id.data;
  //var j = 0;
  for (i = 0; i < b.length * 4; i+=4) {

      if (Math.trunc(counter / 512) % 2 == 0) {
        redrow = false;
        bluerow = true;
        //console.log(0);
      }

      else {

        bluerow = false;
        redrow = true;
        //console.log(1);

      }

      if (bluerow == true) {
        red = false;

        if (counter % 2 == 0){
          blue = false;
          green = true;
        }

        if (counter % 2 == 1){
          blue = true;
          green = false;
        }
      }

      if (redrow == true) {
        blue = false;

        if (counter % 2 == 0){
          red = true;
          green = false;
        }

        if (counter % 2 == 1){
          red = false;
          green = true;
        }
      }

      if (red == true) {
        d[i]   =  b[counter-1];
        d[i+1]   = 0;
        d[i+2]   = 0;
        d[i+3]   = 255;
      }
      if (green == true) {
        d[i]   =  0;
        d[i+1]   = b[counter-1];
        d[i+2]   = 0;
        d[i+3]   = 255;
      }
      if (blue == true) {
        d[i]   =  0;
        d[i+1]   = 0;
        d[i+2]   = b[counter-1];
        d[i+3]   = 255;
      }

      counter++;

  }
  context.putImageData( id, 0, 0 );
}
// Function for Medium text file (Produces double images and purple and green colors)
function jvalen15_medium() {
  counter = 0;
  a = a.substr(1);
  a = a.substring(0, a.length - 1);
  var b = a.split(', ').map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");
  var i = 0;
  var j = 0;
  for (i = 0; i < canvas.height; i++) {
    //console.log("hey");
    for (j = 0; j < canvas.width; j++) {
      var id = context.createImageData(1,1);
      var d  = id.data;
      //console.log(b[counter]);
      d[0]   =  b[counter];
      counter++;
      //console.log(b[counter]);
      d[1]   = b[counter];
      counter++;
      //console.log(b[counter]);
      d[2]   = b[counter];
      counter++;
      //console.log(b[counter]);
      d[3]   = 255;
      counter++;
      context.putImageData( id, i, j );

    }
  }
}
function jvalen15_medium_ass2() {
	counter = 0;
  a = a.substr(1);
  a = a.substring(0, a.length - 1);
  var b = a.split(', ').map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var canvas = document.getElementById("viewporthard");
  var context = canvas.getContext("2d");
  var i = 0;
  var id = context.createImageData(512,512);
  var d  = id.data;
  //var j = 0;
	for (i = 0; i < b.length * 4; i+=4) {

      if (Math.trunc(counter / 512) % 2 == 0) {
        redrow = false;
        bluerow = true;
        //console.log(0);
      }

      else {

        bluerow = false;
        redrow = true;
        //console.log(1);

      }

      if (bluerow == true) {
        red = false;

        if (counter % 2 == 0){
          blue = false;
          green = true;
        }

        if (counter % 2 == 1){
          blue = true;
          green = false;
        }
      }

      if (redrow == true) {
        blue = false;

        if (counter % 2 == 0){
          red = true;
          green = false;
        }

        if (counter % 2 == 1){
          red = false;
          green = true;
        }
      }

			if (red == true) {
        d[i]   =  b[counter-1];
        d[i+1]   = (b[counter-2] + b[counter-513])/2;
        d[i+2]   = b[counter-514];
        d[i+3]   = 255;
      }
      if (green == true && redrow == true) {
        d[i]   =  b[counter];
        d[i+1]   = b[counter-1];
        d[i+2]   = b[counter-513];
        d[i+3]   = 255;
				//console.log("red");
      }
			if (green == true && bluerow == true) {
        d[i]   =  b[counter+511];
        d[i+1]   = b[counter-1];
        d[i+2]   = b[counter-2];
        d[i+3]   = 255;
				//console.log("blue");
      }
      if (blue == true) {
        d[i]   =  b[counter+512];
        d[i+1]   = (b[counter] + b[counter+511])/2;
        d[i+2]   = b[counter-1];
        d[i+3]   = 255;
      }

      counter+=1;

  }
  context.putImageData( id, 0, 0 );
}
// Function for hard text file (Produces double images and purple and green colors)
function jvalen15_hard() {
  counter = 0;
  a = a.substr(1);
  a = a.substring(0, a.length - 1);
  var b = a.split(', ').map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var canvas = document.getElementById("viewporthard");
  var context = canvas.getContext("2d");
  var i = 0;
  var j = 0;
  for (i = 0; i < canvas.height; i++) {
    //console.log("hey");
    for (j = 0; j < canvas.width; j++) {
      var id = context.createImageData(1,1);
      var d  = id.data;
      //console.log(b[counter]);
      d[0]   =  b[counter];
      counter++;
      //console.log(b[counter]);
      d[1]   = b[counter];
      counter++;
      //console.log(b[counter]);
      d[2]   = b[counter];
      counter++;
      //console.log(b[counter]);
      d[3]   = 255;
      counter++;
      context.putImageData( id, i, j );

    }
  }
}

function jvalen15_hard_ass2() {
  counter = 0;
  a = a.substr(1);
  a = a.substring(0, a.length - 1);
  var b = a.split(', ').map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var canvas = document.getElementById("viewportharder");
  var context = canvas.getContext("2d");
  var i = 0;
  var id = context.createImageData(1024,1024);
  var d  = id.data;
  //var j = 0;
	for (i = 0; i < b.length * 4; i+=4) {

      if (Math.trunc(colorcounter / 1024) % 2 == 0) {
        redrow = false;
        bluerow = true;
        //console.log(0);
      }

      else {

        bluerow = false;
        redrow = true;
        //console.log(1);

      }

      if (bluerow == true) {
        red = false;

        if (colorcounter % 2 == 0){
          blue = false;
          green = true;
        }

        if (colorcounter % 2 == 1){
          blue = true;
          green = false;
        }
      }

      if (redrow == true) {
        blue = false;

        if (colorcounter % 2 == 0){
          red = true;
          green = false;
        }

        if (colorcounter % 2 == 1){
          red = false;
          green = true;
        }
      }

      if (red == true) {
        d[i]   =  b[counter-1];
        d[i+1]   = (b[counter-2] + b[counter-1025])/2;
        d[i+2]   = b[counter-1026];
        d[i+3]   = 255;
      }
      if (green == true && redrow == true) {
        d[i]   =  b[counter];
        d[i+1]   = b[counter-1];
        d[i+2]   = b[counter-1025];
        d[i+3]   = 255;
				//console.log("red");
      }
			if (green == true && bluerow == true) {
        d[i]   =  b[counter+1023];
        d[i+1]   = b[counter-1];
        d[i+2]   = b[counter-2];
        d[i+3]   = 255;
				//console.log("blue");
      }
      if (blue == true) {
        d[i]   =  b[counter+1024];
        d[i+1]   = (b[counter] + b[counter+1023])/2;
        d[i+2]   = b[counter-1];
        d[i+3]   = 255;
      }
			colorcounter++;
      counter+=1;

  }
  context.putImageData( id, 0, 0 );
}

var red = false;
var green = false;
var blue = false;
var avg = 0;
var rgb = ("RGB" + "\n" + "768" + "\n" + "768\n");
var final = "";
var commacounter = 1;
window.onload=function(){
      // Pick a text file
  document.getElementById("openFile").addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = function() {
      //document.getElementById("fileContents").textContent = this.result;
      a = this.result;
    }
    fr.readAsText(this.files[0]);
    console.log("read");
  })
}

function a31() {
  console.log(a);
  a = a.substr(12);
  a = a.substring(0, a.length - 1);
  var b = a.split(/(?: |\n)+/).map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var i = 0;
  //var j = 0;
  for (i = 3; i < b.length; i+=3) {

    avg = (b[i - 1] + b[i - 2] + b[i - 3]) / 3 ;

    b[i - 1] = Math.trunc(avg);
    b[i - 2] = Math.trunc(avg);
    b[i - 3] = Math.trunc(avg);

  }

  var c = b.join();

  console.log(c.length);

  for (i = 0; i < c.length; i++) {

    if (c[i] == ',' && commacounter % 3 != 0) {
      final = final.concat(" ");
      commacounter++;
      //console.log("changing to space");
    }

    else if (commacounter % 3 == 0 && c[i] == ',') {
      final = final.concat("\n");
      commacounter++;
      //console.log("changing to new line");
    }

    else {
      final = final.concat(c[i]);
    }

  }

  final = rgb + final

  console.log(final);

  downloadString(final, "text", "grayscale1.txt")

}

function a32() {
  a = a.substr(12);
  a = a.substring(0, a.length - 1);
  var b = a.split(/(?: |\n)+/).map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var i = 0;
  //var j = 0;
  for (i = 3; i < b.length; i+=3) {

    avg = ((b[i - 1] * .25) + (b[i - 2] * .5) + (b[i - 3] * .25))  ;

    b[i - 1] = Math.trunc(avg);
    b[i - 2] = Math.trunc(avg);
    b[i - 3] = Math.trunc(avg);

  }

  var c = b.join();

  console.log(c.length);

  for (i = 0; i < c.length; i++) {

    if (c[i] == ',' && commacounter % 3 != 0) {
      final = final.concat(" ");
      commacounter++;
      //console.log("changing to space");
    }

    else if (commacounter % 3 == 0 && c[i] == ',') {
      final = final.concat("\n");
      commacounter++;
      //console.log("changing to new line");
    }

    else {
      final = final.concat(c[i]);
    }

  }

  final = rgb + final

  console.log(final);

  downloadString(final, "text", "grayscale2.txt")
}

function a33() {a = a.substr(12);
a = a.substring(0, a.length - 1);
var b = a.split(/(?: |\n)+/).map(Number);
//console.log(c);
console.log(b);
//alert(array[1]).toPrecision();
var i = 0;
//var j = 0;
for (i = 3; i < b.length; i+=3) {

  avg = ((b[i - 1] * .299) + (b[i - 2] * .587) + (b[i - 3] * .114))  ;

  b[i - 1] = Math.trunc(avg);
  b[i - 2] = Math.trunc(avg);
  b[i - 3] = Math.trunc(avg);

}

var c = b.join();

console.log(c.length);

for (i = 0; i < c.length; i++) {

  if (c[i] == ',' && commacounter % 3 != 0) {
    final = final.concat(" ");
    commacounter++;
    //console.log("changing to space");
  }

  else if (commacounter % 3 == 0 && c[i] == ',') {
    final = final.concat("\n");
    commacounter++;
    //console.log("changing to new line");
  }

  else {
    final = final.concat(c[i]);
  }

}

final = rgb + final

console.log(final);

downloadString(final, "text", "grayscale3.txt")
}

function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

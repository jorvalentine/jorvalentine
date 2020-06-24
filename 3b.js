var red = false;
var green = false;
var blue = false;
var rc = [];
var gc = [];
var bc = [];
var nrc = [];
var ngc = [];
var nbc = [];
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

function identity () {
  console.log(a);
  a = a.substr(12);
  a = a.substring(0, a.length - 1);
  var b = a.split(/(?: |\n)+/).map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var i = 0;
  //var j = 0;

  for (i = 0; i < b.length; i+=3) {
    rc[i/3] = b[i];
  }

  for (i = 1; i < b.length; i+=3) {
    gc[(i-1)/3] = b[i];
  }

  for (i = 2; i < b.length; i+=3) {
    bc[(i-2)/3] = b[i];
  }

  for (i = 0; i < rc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i + 1] * 0) + (rc[i + 768] * 0) + (rc[i + 769] * 0)) / 1);
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i - 1] * 0) + (rc[i + 768] * 0) + (rc[i + 767] * 0)) / 1);
    }

    // bottom left corner
    else if (i == rc.length - 768) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i + 1] * 0) + (rc[i - 768] * 0) + (rc[i - 767] * 0)) / 1);
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == rc.length - 1) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i - 1] * 0) + (rc[i - 768] * 0) + (rc[i - 769] * 0)) / 1);
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i - 1] * 0) + (rc[i + 768] * 0) + (rc[i + 769] * 0) + (rc[i + 767] * 0) + (rc[i + 1] * 0)) / 1);
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i - 1] * 0) + (rc[i - 768] * 0) + (rc[i + 767] * 0) + (rc[i + 768] * 0) + (rc[i - 769] * 0)) / 1);

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i + 1] * 0) + (rc[i - 767] * 0) + (rc[i + 769] * 0) + (rc[i - 768] * 0) + (rc[i + 768] * 0)) / 1);
    }

    // bottom row
    else if (i > (rc.length - 768) && i < (rc.length - 1)){
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i - 1] * 0) + (rc[i + 1] * 0) + (rc[i - 769] * 0) + (rc[i - 768] * 0) + (rc[i - 767] * 0)) / 1);
    }

    // everything else
    else {
      // 9 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 1) + (rc[i - 1] * 0) + (rc[i - 768] * 0) + (rc[i - 769] * 0) + (rc[i - 767] * 0) + (rc[i + 768] * 0) + (rc[i + 769] * 0) + (rc[i + 767] * 0) + (rc[i + 1] * 0)) / 1);

    }
  }

  for (i = 0; i < gc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i + 1] * 0) + (gc[i + 768] * 0) + (gc[i + 769] * 0)) / 1);
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i - 1] * 0) + (gc[i + 768] * 0) + (gc[i + 767] * 0)) / 1);
    }

    // bottom left corner
    else if (i == gc.length - 768) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i + 1] * 0) + (gc[i - 768] * 0) + (gc[i - 767] * 0)) / 1);
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == gc.length - 1) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i - 1] * 0) + (gc[i - 768] * 0) + (gc[i - 769] * 0)) / 1);
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i - 1] * 0) + (gc[i + 768] * 0) + (gc[i + 769] * 0) + (gc[i + 767] * 0) + (gc[i + 1] * 0)) / 1);
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i - 1] * 0) + (gc[i - 768] * 0) + (gc[i + 767] * 0) + (gc[i + 768] * 0) + (gc[i - 769] * 0)) / 1);

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i + 1] * 0) + (gc[i - 767] * 0) + (gc[i + 769] * 0) + (gc[i - 768] * 0) + (gc[i + 768] * 0)) / 1);
    }

    // bottom row
    else if (i > (gc.length - 768) && i < (gc.length - 1)){
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i - 1] * 0) + (gc[i + 1] * 0) + (gc[i - 769] * 0) + (gc[i - 768] * 0) + (gc[i - 767] * 0)) / 1);
    }

    // everything else
    else {
      // 9 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 1) + (gc[i - 1] * 0) + (gc[i - 768] * 0) + (gc[i - 769] * 0) + (gc[i - 767] * 0) + (gc[i + 768] * 0) + (gc[i + 769] * 0) + (gc[i + 767] * 0) + (gc[i + 1] * 0)) / 1);

    }
  }

  for (i = 0; i < bc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i + 1] * 0) + (bc[i + 768] * 0) + (bc[i + 769] * 0)) / 1);
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i - 1] * 0) + (bc[i + 768] * 0) + (bc[i + 767] * 0)) / 1);
    }

    // bottom left corner
    else if (i == bc.length - 768) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i + 1] * 0) + (bc[i - 768] * 0) + (bc[i - 767] * 0)) / 1);
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == bc.length - 1) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i - 1] * 0) + (bc[i - 768] * 0) + (bc[i - 769] * 0)) / 1);
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i - 1] * 0) + (bc[i + 768] * 0) + (bc[i + 769] * 0) + (bc[i + 767] * 0) + (bc[i + 1] * 0)) / 1);
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i - 1] * 0) + (bc[i - 768] * 0) + (bc[i + 767] * 0) + (bc[i + 768] * 0) + (bc[i - 769] * 0)) / 1);

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i + 1] * 0) + (bc[i - 767] * 0) + (bc[i + 769] * 0) + (bc[i - 768] * 0) + (bc[i + 768] * 0)) / 1);
    }

    // bottom row
    else if (i > (bc.length - 768) && i < (bc.length - 1)){
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i - 1] * 0) + (bc[i + 1] * 0) + (bc[i - 769] * 0) + (bc[i - 768] * 0) + (bc[i - 767] * 0)) / 1);
    }

    // everything else
    else {
      // 9 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 1) + (bc[i - 1] * 0) + (bc[i - 768] * 0) + (bc[i - 769] * 0) + (bc[i - 767] * 0) + (bc[i + 768] * 0) + (bc[i + 769] * 0) + (bc[i + 767] * 0) + (bc[i + 1] * 0)) / 1);

    }
  }

  for (i = 0; i < b.length; i+=3) {
    b[i] = nrc[i/3];
  }

  for (i = 1; i < b.length; i+=3) {
    b[i] = ngc[(i-1)/3];
  }

  for (i = 2; i < b.length; i+=3) {
    b[i] = nbc[(i-2)/3];
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

  //console.log(final);
  //console.log(greenchannel);

  downloadString(final, "text", "identity.txt")

}

function edge() {
  console.log(a);
  a = a.substr(12);
  a = a.substring(0, a.length - 1);
  var b = a.split(/(?: |\n)+/).map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var i = 0;
  //var j = 0;

  for (i = 0; i < b.length; i+=3) {
    rc[i/3] = b[i];
  }

  for (i = 1; i < b.length; i+=3) {
    gc[(i-1)/3] = b[i];
  }

  for (i = 2; i < b.length; i+=3) {
    bc[(i-2)/3] = b[i];
  }

  for (i = 0; i < rc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i + 1] * -1) + (rc[i + 768] * -1) + (rc[i + 769] * -1)) / 1);
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i - 1] * -1) + (rc[i + 768] * -1) + (rc[i + 767] * -1)) / 1);
    }

    // bottom left corner
    else if (i == rc.length - 768) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i + 1] * -1) + (rc[i - 768] * -1) + (rc[i - 767] * -1)) / 1);
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == rc.length - 1) {
      // 4 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i - 1] * -1) + (rc[i - 768] * -1) + (rc[i - 769] * -1)) / 1);
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i - 1] * -1) + (rc[i + 768] * -1) + (rc[i + 769] * -1) + (rc[i + 767] * -1) + (rc[i + 1] * -1)) / 1);
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i - 1] * -1) + (rc[i - 768] * -1) + (rc[i + 767] * -1) + (rc[i + 768] * -1) + (rc[i - 769] * -1)) / 1);

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i + 1] * -1) + (rc[i - 767] * -1) + (rc[i + 769] * -1) + (rc[i - 768] * -1) + (rc[i + 768] * -1)) / 1);
    }

    // bottom row
    else if (i > (rc.length - 768) && i < (rc.length - 1)){
      // 6 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i - 1] * -1) + (rc[i + 1] * -1) + (rc[i - 769] * -1) + (rc[i - 768] * -1) + (rc[i - 767] * -1)) / 1);
    }

    // everything else
    else {
      // 9 pixels to check
      nrc[i] = Math.trunc(((rc[i] * 8) + (rc[i - 1] * -1) + (rc[i - 768] * -1) + (rc[i - 769] * -1) + (rc[i - 767] * -1) + (rc[i + 768] * -1) + (rc[i + 769] * -1) + (rc[i + 767] * -1) + (rc[i + 1] * -1)) / 1);

    }
  }

  for (i = 0; i < gc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i + 1] * -1) + (gc[i + 768] * -1) + (gc[i + 769] * -1)) / 1);
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i - 1] * -1) + (gc[i + 768] * -1) + (gc[i + 767] * -1)) / 1);
    }

    // bottom left corner
    else if (i == gc.length - 768) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i + 1] * -1) + (gc[i - 768] * -1) + (gc[i - 767] * -1)) / 1);
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == gc.length - 1) {
      // 4 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i - 1] * -1) + (gc[i - 768] * -1) + (gc[i - 769] * -1)) / 1);
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i - 1] * -1) + (gc[i + 768] * -1) + (gc[i + 769] * -1) + (gc[i + 767] * -1) + (gc[i + 1] * -1)) / 1);
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i - 1] * -1) + (gc[i - 768] * -1) + (gc[i + 767] * -1) + (gc[i + 768] * -1) + (gc[i - 769] * -1)) / 1);

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i + 1] * -1) + (gc[i - 767] * -1) + (gc[i + 769] * -1) + (gc[i - 768] * -1) + (gc[i + 768] * -1)) / 1);
    }

    // bottom row
    else if (i > (gc.length - 768) && i < (gc.length - 1)){
      // 6 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i - 1] * -1) + (gc[i + 1] * -1) + (gc[i - 769] * -1) + (gc[i - 768] * -1) + (gc[i - 767] * -1)) / 1);
    }

    // everything else
    else {
      // 9 pixels to check
      ngc[i] = Math.trunc(((gc[i] * 8) + (gc[i - 1] * -1) + (gc[i - 768] * -1) + (gc[i - 769] * -1) + (gc[i - 767] * -1) + (gc[i + 768] * -1) + (gc[i + 769] * -1) + (gc[i + 767] * -1) + (gc[i + 1] * -1)) / 1);

    }
  }

  for (i = 0; i < bc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i + 1] * -1) + (bc[i + 768] * -1) + (bc[i + 769] * -1)) / 1);
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i - 1] * -1) + (bc[i + 768] * -1) + (bc[i + 767] * -1)) / 1);
    }

    // bottom left corner
    else if (i == bc.length - 768) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i + 1] * -1) + (bc[i - 768] * -1) + (bc[i - 767] * -1)) / 1);
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == bc.length - 1) {
      // 4 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i - 1] * -1) + (bc[i - 768] * -1) + (bc[i - 769] * -1)) / 1);
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i - 1] * -1) + (bc[i + 768] * -1) + (bc[i + 769] * -1) + (bc[i + 767] * -1) + (bc[i + 1] * -1)) / 1);
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i - 1] * -1) + (bc[i - 768] * -1) + (bc[i + 767] * -1) + (bc[i + 768] * -1) + (bc[i - 769] * -1)) / 1);

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i + 1] * -1) + (bc[i - 767] * -1) + (bc[i + 769] * -1) + (bc[i - 768] * -1) + (bc[i + 768] * -1)) / 1);
    }

    // bottom row
    else if (i > (bc.length - 768) && i < (bc.length - 1)){
      // 6 pixels to check
      nbc[i] = Math.trunc(((rc[i] * 8) + (bc[i - 1] * -1) + (bc[i + 1] * -1) + (bc[i - 769] * -1) + (bc[i - 768] * -1) + (bc[i - 767] * -1)) / 1);
    }

    // everything else
    else {
      // 9 pixels to check
      nbc[i] = Math.trunc(((bc[i] * 8) + (bc[i - 1] * -1) + (bc[i - 768] * -1) + (bc[i - 769] * -1) + (bc[i - 767] * -1) + (bc[i + 768] * -1) + (bc[i + 769] * -1) + (bc[i + 767] * -1) + (bc[i + 1] * -1)) / 1);
    }
  }

  for (i = 0; i < b.length; i+=3) {
    b[i] = nrc[i/3];
    if (b[i] < 0) {
      b[i] = 0;
    }
    if (b[i] > 255) {
      b[i] = 255;
    }
  }

  for (i = 1; i < b.length; i+=3) {
    b[i] = ngc[(i-1)/3];
    if (b[i] < 0) {
      b[i] = 0;
    }
    if (b[i] > 255) {
      b[i] = 255;
    }
  }

  for (i = 2; i < b.length; i+=3) {
    b[i] = nbc[(i-2)/3];
    if (b[i] < 0) {
      b[i] = 0;
    }
    if (b[i] > 255) {
      b[i] = 255;
    }
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
  //console.log(greenchannel);

  downloadString(final, "text", "edgedetection.txt")

}

function gaussian() {
  console.log(a);
  a = a.substr(12);
  a = a.substring(0, a.length - 1);
  var b = a.split(/(?: |\n)+/).map(Number);
  //console.log(c);
  console.log(b);
  //alert(array[1]).toPrecision();
  var i = 0;
  //var j = 0;

  for (i = 0; i < b.length; i+=3) {
    rc[i/3] = b[i];
  }

  for (i = 1; i < b.length; i+=3) {
    gc[(i-1)/3] = b[i];
  }

  for (i = 2; i < b.length; i+=3) {
    bc[(i-2)/3] = b[i];
  }

  for (i = 0; i < rc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      nrc[i] = 0;
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      nrc[i] = 0;
    }

    // bottom left corner
    else if (i == rc.length - 768) {
      // 4 pixels to check
      nrc[i] = 0;
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == rc.length - 1) {
      // 4 pixels to check
      nrc[i] = 0;
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      nrc[i] = 0;
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      nrc[i] = 0;

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      nrc[i] = 0;
    }

    //bottom row
    else if (i > (rc.length - 768) && i < (rc.length - 1)){
      // 6 pixels to check
      nrc[i] = 0;
    }

    // second to top row
    else if (i > 768 && i < 1535) {
      // 6 pixels to check
      nrc[i] = 0;
    }

    // second to far right column
    else if ((i+2) % 768 == 0) {
      // 6 pixels to check
      nrc[i] = 0;

    }

    // second to far left column
    else if ((i-1) % 768 == 0){
      // 6 pixels to check
      nrc[i] = 0;
    }

    // second to bottom row
    else if (i > (rc.length - 1536) && i < (rc.length - 769)){
      // 6 pixels to check
      nrc[i] = 0;
    }

    // everything else
    else {
      // 9 pixels to check
      nrc[i] = Math.trunc(((rc[i]*36)+(rc[i-1]*24)+(rc[i-768]*24)+(rc[i-769]*16)+(rc[i-767]*16)+(rc[i+768]*24)+(rc[i+769]*16)+(rc[i+767]*16) + (rc[i + 1] * 24) + (rc[i - 1538] * 1) + (rc[i - 1537] * 4) + (rc[i - 1536] * 6) + (rc[i - 1535] * 4) + (rc[i - 1534] * 1) + (rc[i - 770] * 4) + (rc[i - 766] * 4) + (rc[i - 2] * 6) + (rc[i + 2] * 6) + (rc[i + 766] * 4) + (rc[i + 770] * 4) + (rc[i + 1534] * 1) + (rc[i + 1535] * 4) + (rc[i + 1536] * 6) + (rc[i + 1537] * 4) + (rc[i + 1538] * 1)) / 256);
    }
  }

  for (i = 0; i < gc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      ngc[i] = 0;
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      ngc[i] = 0;
    }

    // bottom left corner
    else if (i == gc.length - 768) {
      // 4 pixels to check
      ngc[i] = 0;
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == gc.length - 1) {
      // 4 pixels to check
      ngc[i] = 0;
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      ngc[i] = 0;
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      ngc[i] = 0;

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      ngc[i] = 0;
    }

    //bottom row
    else if (i > (gc.length - 768) && i < (gc.length - 1)){
      // 6 pixels to check
      ngc[i] = 0;
    }

    // second to top row
    else if (i > 768 && i < 1535) {
      // 6 pixels to check
      ngc[i] = 0;
    }

    // second to far right column
    else if ((i+2) % 768 == 0) {
      // 6 pixels to check
      ngc[i] = 0;

    }

    // second to far left column
    else if ((i-1) % 768 == 0){
      // 6 pixels to check
      ngc[i] = 0;
    }

    // second to bottom row
    else if (i > (gc.length - 1536) && i < (gc.length - 769)){
      // 6 pixels to check
      ngc[i] = 0;
    }

    // everything else
    else {
      // 9 pixels to check
      ngc[i] = Math.trunc(((gc[i]*36)+(gc[i-1]*24)+(gc[i-768]*24)+(gc[i-769]*16)+(gc[i-767]*16)+(gc[i+768]*24)+(gc[i+769]*16)+(gc[i+767]*16) + (gc[i + 1] * 24) + (gc[i - 1538] * 1) + (gc[i - 1537] * 4) + (gc[i - 1536] * 6) + (gc[i - 1535] * 4) + (gc[i - 1534] * 1) + (gc[i - 770] * 4) + (gc[i - 766] * 4) + (gc[i - 2] * 6) + (gc[i + 2] * 6) + (gc[i + 766] * 4) + (gc[i + 770] * 4) + (gc[i + 1534] * 1) + (gc[i + 1535] * 4) + (gc[i + 1536] * 6) + (gc[i + 1537] * 4) + (gc[i + 1538] * 1)) / 256);
    }
  }

  for (i = 0; i < bc.length; i++) {

    // first pixel
    if (i == 0) {
      // 4 pixels to check
      nbc[i] = 0;
    }

    // top right corner
    else if (i == 767) {
      // 4 pixels to check
      nbc[i] = 0;
    }

    // bottom left corner
    else if (i == bc.length - 768) {
      // 4 pixels to check
      nbc[i] = 0;
      //console.log(rc[i]);
    }

    // last pixel
    else if (i == bc.length - 1) {
      // 4 pixels to check
      nbc[i] = 0;
      //if (isNaN(rc[i])){console.log(rc[i]);}
    }

    // top row
    else if (i > 0 && i < 767) {
      // 6 pixels to check
      nbc[i] = 0;
    }

    // far right column
    else if ((i+1) % 768 == 0) {
      // 6 pixels to check
      nbc[i] = 0;

    }

    // far left column
    else if (i % 768 == 0){
      // 6 pixels to check
      nbc[i] = 0;
    }

    //bottom row
    else if (i > (bc.length - 768) && i < (bc.length - 1)){
      // 6 pixels to check
      nbc[i] = 0;
    }

    // second to top row
    else if (i > 768 && i < 1535) {
      // 6 pixels to check
      nbc[i] = 0;
    }

    // second to far right column
    else if ((i+2) % 768 == 0) {
      // 6 pixels to check
      nbc[i] = 0;

    }

    // second to far left column
    else if ((i-1) % 768 == 0){
      // 6 pixels to check
      nbc[i] = 0;
    }

    // second to bottom row
    else if (i > (bc.length - 1536) && i < (bc.length - 769)){
      // 6 pixels to check
      nbc[i] = 0;
    }

    // everything else
    else {
      // 9 pixels to check
      nbc[i] = Math.trunc(((bc[i]*36)+(bc[i-1]*24)+(bc[i-768]*24)+(bc[i-769]*16)+(bc[i-767]*16)+(bc[i+768]*24)+(bc[i+769]*16)+(bc[i+767]*16) + (bc[i + 1] * 24) + (bc[i - 1538] * 1) + (bc[i - 1537] * 4) + (bc[i - 1536] * 6) + (bc[i - 1535] * 4) + (bc[i - 1534] * 1) + (bc[i - 770] * 4) + (bc[i - 766] * 4) + (bc[i - 2] * 6) + (bc[i + 2] * 6) + (bc[i + 766] * 4) + (bc[i + 770] * 4) + (bc[i + 1534] * 1) + (bc[i + 1535] * 4) + (bc[i + 1536] * 6) + (bc[i + 1537] * 4) + (bc[i + 1538] * 1)) / 256);
    }
  }

  for (i = 0; i < b.length; i+=3) {
    b[i] = nrc[i/3];
    if (b[i] < 0) {
      b[i] = 0;
    }
    if (b[i] > 255) {
      b[i] = 255;
    }
  }

  for (i = 1; i < b.length; i+=3) {
    b[i] = ngc[(i-1)/3];
    if (b[i] < 0) {
      b[i] = 0;
    }
    if (b[i] > 255) {
      b[i] = 255;
    }
  }

  for (i = 2; i < b.length; i+=3) {
    b[i] = nbc[(i-2)/3];
    if (b[i] < 0) {
      b[i] = 0;
    }
    if (b[i] > 255) {
      b[i] = 255;
    }
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
  //console.log(greenchannel);

  downloadString(final, "text", "gaussian.txt")

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

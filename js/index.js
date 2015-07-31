var audio = new Audio('opening-sound.mp3');
var manager = new jsAnimManager();
shroom = document.getElementById("Tobeanim");
shroom.style.position = "relative";
var anim = manager.createAnimObject("Tobeanim");
var spinner = function() {
  console.log("GL");
  audio.play();
  randomize();
  anim.add({property: Prop.left, to: 0, duration: 1,});
  anim.add({property: Prop.left, to: 1000, duration: 1400,});
  anim.add({property: Prop.left, to: 3000, duration: 5000, ease: jsAnimEase.parabolicNeg});
}
var randomize = function() {
  var counter = 0;
  for (var i=0; i < 25; i++) {
    var counter = counter + 1
    var frame= "frame" + counter
    console.log(frame)
    if (frame == "frame5") {
      Get = Math.floor((Math.random() * 10000) + 1);
      console.log(Get)
      if (Get >= 1 && Get <= 8700) {
        document.getElementById("frame5").src = "framerestricted.png"
        document.getElementById("restrictednumber").innerHtml = "yay"
      }
      else if (Get >= 8701 && Get <= 9600) {
        document.getElementById("frame5").src = "frameclassified.png"
      }
      else if (Get >= 9601 && Get <= 9870) {
        document.getElementById("frame5").src = "framecovert.png"
      }
      else if (Get >= 9871 && Get <= 9971) {
        document.getElementById("frame5").src = "frameknife.png"
      }
      else{
        document.getElementById("frame5").src = "framecontraband.png"
      }
    }
    else {
      var result = Math.floor((Math.random() * 1000) + 1);
      if (result >= 0 && result <= 750) {
      console.log(result)
        document.getElementById(frame).src = "framerestricted.png"
      }
      else if (result >= 751 && result <= 900) {
        document.getElementById(frame).src = "frameclassified.png"
      }
      else if (result >= 901 && result <= 982) {
        document.getElementById(frame).src = "framecovert.png"
      }
      else if (result >= 983 && result <= 998) {
        document.getElementById(frame).src = "frameknife.png"
      }
      else{
        document.getElementById(frame).src = "framecontraband.png"
      }
    }
  }
}
randomize();

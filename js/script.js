
function init ( )
  {
    timeDisplay = document.createTextNode ( "" );
    document.getElementById("clock").appendChild ( timeDisplay );
  }

  function updateClock ( )
  {
    var currentTime = new Date ( );

    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
    
    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes;

    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  }


  function ChangeColor () {
  var colours = ["green", "blue", "red"];

  document.getElementById("one").onclick = GreenBackground;
    
    function GreenBackground() {
      alert("Waving like I've never waved before!");
    }

}
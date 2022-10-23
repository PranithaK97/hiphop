
for(var i=0; i<document.querySelectorAll(".common").length;i++){
  document.querySelectorAll(".common")[i].addEventListener("click", function(){

  var buttoninnerHTML=this.innerHTML;


  switch ( buttoninnerHTML) {
    case "Play1":
      var audio1= new Audio("songs/meesayamurukku.mp3");
      audio1.play();
      break;

    case "Play2":
      var audio2= new Audio("songs/takkarutakkaru.mp3");
      audio2.play();
      break;
   case "Play3":
      var audio3= new Audio("songs/vaadipullavaadi.mp3");
      audio3.play();
      break;

   case "Play4":
      var audio4= new Audio("songs/dhomdhom.mp3");
      audio4.play();
      break;
   case "Play5":
      var audio5= new Audio("songs/theemaithan.mp3");
      audio5.play();
      break;
  case "Play6":
      var audio6= new Audio("songs/vaadineevaadi.mp3");
      audio6.play();

      break;

    default:

  }
this.innerHTML="Playing";
this.style.color="white";
});


}



for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}





function handleClick() {
    console.log(this.style.color= "yellow");
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}
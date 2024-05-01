var numberOfButton=document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
    function handleclick(){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
       
      }     
}

document.addEventListener("keydown",presskey);
function presskey(event){
    var keypressed=event.key;
    makeSound(event.key);
    buttonAnimation(event.key);
}


function makeSound(key){

    switch (key) {
        case "w":
          var tom1= new Audio("public/sounds/tom-1.mp3");
          tom1.play();
            break;
        case "a":
            var tom2= new Audio("public/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("public/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("public/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare= new Audio("public/sounds/snare.mp3");
            snare.play();
            break;
        case "k" :
            var kick= new Audio("public/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l" :
            var crash= new Audio("public/sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }

}


function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed"); 
    }, 100);
}
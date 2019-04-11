const drumArray = document.querySelectorAll(".drum");

for(let i = 0; i < drumArray.length; i++) {
    drumArray[i].addEventListener("click", function() {
        this.style.color = "white";
    });
}


// const tom1Sound = new Audio("sounds/tom-1.mp3");
//         tom1Sound.play();
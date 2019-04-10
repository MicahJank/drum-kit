const drumArray = document.querySelectorAll(".drum");

for(let i = 0; i < drumArray.length; i++) {
    drumArray[i].addEventListener("click", handleClick);
}

function handleClick() {
    alert("I got clicked!");
}


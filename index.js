

/* for(let i=0; i<7; ++i){
    document.querySelectorAll('button')[i].addEventListener("click", handleClick);
}

function handleClick(){
    alert("I got clicked!");
} */

// OR


/* Detecting Button/Click Press. */
var numberOfDrumClassButton = document.querySelectorAll(".drum").length; // selecting button which has a class drum, not by using button tag. think why ?

for(let i=0; i<numberOfDrumClassButton; ++i){
    document.querySelectorAll('button')[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML; 
        makeSound(buttonInnerHtml);
        // this.style.color = "lightblue";
        buttonAnimation(buttonInnerHtml);
    });
}


/* Detecting Keyboard Press. */
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default: console.log(buttonInnerHtml);
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButtonAnimination = document.querySelector('.'+currentKey);  // '.' + currentKey -> .key( .w, .l, .k, etc... ) which is a class name for button
    activeButtonAnimination.classList.add("pressed");
    setTimeout(function(){
        activeButtonAnimination.classList.remove("pressed");
    }, 100);
}



/*
document.querySelector('button').addEventListener("click", functionName);  -> if a function has some name we can replace function -> functionName.

function functionName(){                                                            
    alert("I got clicked!");
}

is equivalent to

document.querySelector('button').addEventListener("click", function(){     -> functions without name are called anonymous function.
    alert("I got clicked!");
});


but but but...


document.querySelector('button').addEventListener("click", functionName());

function functionName(){
    alert("I got clicked!");
}

is equivalent to

document.querySelector('button').addEventListener("click", alert("I got clicked") <- this will popup before click. );
*/
// ASSIGNMENT 1
/* Change the border of Caps Lock Button on each click.. 
 Green - Enabled
 Red - Disabled*/


let givenString = "";
let capsLockValue = 0;

function capsLockFunction() {
    var element = document.getElementById("capsButton");
        element.classList.toggle("greenButton");

    if (capsLockValue == 0) {
        capsLockValue = 1;
       
    } else {
        capsLockValue = 0

    }

}

function stringFunction(givenCharacter) {

    if (capsLockValue) {
        givenString += givenCharacter;
    } else {
        givenString += givenCharacter.toLowerCase();
    }

    document.getElementById("demo1").innerHTML = givenString;
}
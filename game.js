


var randomNumber = Math.round(Math.random()*100);
var submitButton = document.getElementById("submit");
var message = document.getElementById("message");
var msg;s


submitButton.onclick =() => 
{
    let input = document.getElementById("number-input").value;
    if(inputNumber == randomNumber)
    {

    }
    else if(inputNumber > randomNumber)
    {
            msg ="Oops! you guess is high!"
    }
    else if(inputNumber < randomNumber)
    {
        msg = "Oops! you guess is low"
    }
    message.style.display ="Inherit";
    message.innerHTML = msg;

}

let timeElement = document.querySelector(".time");
let dateElement = document.querySelector(".date");

function formatTime(date) 
{
    let hours12 = date.getHours() % 12 || 12;
    let minutes = date.getMinutes();
    let isAm = date.getHours() < 12; 
    
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

function formatDate(date) 
{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"]; 

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

}

setInterval(() => 
{
    let now  = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);

}, 200);


function getPolygon() 
{
    var userInput = document.getElementById("poly").value;
    var positiveInt = Math.abs(Math.round(parseFloat(userInput)));
    var polygon = ["", "Monogon", "Bigon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
    if (positiveInt >= 0 && positiveInt <= 10) 
    {
        alert("The polygon with " + positiveInt + " sides is a " + polygon[positiveInt]);
    } 
    else 
    {
        alert("ERROR: Please enter a number between 0 and 10.");
    }
}


function questions() 
{
    let txt1 = document.getElementById('firstname');
    let output1 = document.getElementById('output1');
    let txt2 = document.getElementById('feel');
    let output2 = document.getElementById('output2');
    let feel = "";

    if (txt2.value.toLowerCase() == "bad") 
    {
        feel = "Sorry to hear that, hope your day gets better!"
    } else if (txt2.value.toLowerCase() == "good") 
    {
        feel = "Glad to hear you are doing well today!"
    }
    else
    {
        feel = "I didn't quite understand, but I'm still glad you are here!"
    }
    

    return output1.innerHTML = "Welcome to Big Moose Outdoors, " + txt1.value + ". " + feel; 
    
}


const home = document.createElement('a');
home.setAttribute('href', "inex.html");
home.innerHTML = "HOME";

const introduction = document.createElement('a');
introduction.setAttribute('href', "introduction.html");
introduction.innerHTML = "Intro";

document.getElementsByTagName('nav')[0].appendChild(home);
document.getElementsByTagName('nav')[0].appendChild(introduction);


function mountain() {
    let showImageButton = document.getElementById("Mountain");
    let myImage = document.getElementById("mountain_img");
    myImage.style.display="block";
}
function typesofoutside() {
    let typesofoutside = document.getElementById("typesofoutside");
    typesofoutside.style.display = "block";
}
function specilize() {
    let specilize = document.getElementById("specilize");
    specilize.style.display="block";
}
function moose() {
    let moose = document.getElementById("moose");
    moose.style.display="block";
}

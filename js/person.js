const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
const query = searchParams.get('personID'); //finds the personID parameter
const url = "https://api.tvmaze.com/people/";
const resultList = document.querySelector("#personInfo");
const resultIMG = document.querySelector("#personImage");
fetch(url + query)
.then((person) => person.json())//convert the results to an object
.then(function(value){resultList.insertAdjacentHTML('beforeend', '<li class="minFontSize">' + "Name: " + value.name + '</li>' +
    '</li>' + '<li class="minFontSize">' + "Country: " + value.country.name + '</li>' +
    '</li>' + '<li class="minFontSize">' + "Birthday: " + value.birthday + '</li>' +
    '</li>' + '<li class="minFontSize">' + "Deathday: " + value.deathday + '</li>' +
    '</li>' + '<li class="minFontSize">' + "Gender: " + value.gender + '</li>'
)//sends relevant info back to person.html
resultIMG.insertAdjacentHTML('beforeend', '<li><img src="' + value.image.medium + '" class="imgone" alt="Image of person"></li>')})//Sends the person's image back to person.html


const urlEnd = "/castcredits";
const resultListCast = document.querySelector("#castCredits");

fetch(url + query + urlEnd)
.then((person) => person.json())//convert the results to an object
.then(function(data) {
    data.forEach(function (value) {
        resultListCast.insertAdjacentHTML('beforeend', '<li class="minFontSize">' + "Show: " + value._links.show.name + '</li>' +
            '<li class="minFontSize">' + "Charecter: " + value._links.character.name + '</li>'

        );})//Return the shows and charecters to person.html as html list items
    });


const urlEnd2 = "/crewcredits";
const resultListCrew = document.querySelector("#crewCredits");

fetch(url + query + urlEnd)
.then((person) => person.json())//convert the results to an object
.then(function(data) {
    data.forEach(function (value) {
        resultListCrew.insertAdjacentHTML('beforeend', '<li class="minFontSize">' + "Show: " + value._links.show.name + '</li>' +
            '<li class="minFontSize">' + "Role: " + value.type + '</li>'
        );})//Return the shows and roles to person.html as html list items
    });
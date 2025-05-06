const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
const query = searchParams.get('fullname'); //finds the fullname parameter
const url = "https://api.tvmaze.com/search/people?q=";
fetch(url + query)
.then((person) => person.json())//convert the results to an object
.then(function(data) {
    data.forEach(function (value) {
        resultList.insertAdjacentHTML('beforeend', '<li class="minFontSize"><a href="person.html?personID=' + value.person.id + '"class="coloryellow">' + value.person.name + '</li>');
        });//go through the data and make each show and score into an object 
    });
const resultList = document.querySelector('#personResults');
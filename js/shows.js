const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
const query = searchParams.get('showName'); //finds the showName parameter
const url = "https://api.tvmaze.com/search/shows?q=";
fetch(url + query)
.then((show) => show.json())//convert the results to an object
.then(function(data) {
    data.forEach(function (value) {
        resultList.insertAdjacentHTML('beforeend', '<li><a href="show.html?showName=' + value.show.name + '"class="coloryellow">' + value.show.name + '</li>');//send relevant info back to shows
        });//Return the shows in the form of html list items to shows.html
    });
const resultList = document.querySelector('#showResults');

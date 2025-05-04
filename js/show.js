const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
const query = searchParams.get('showName'); //finds the showName parameter
const url = "https://api.tvmaze.com/singlesearch/shows?q=";
const resultList = document.querySelector("#showInfo");
const resultIMG = document.querySelector("#showImage");
fetch(url + query)
.then((show) => show.json())//convert the results to an object
.then(function(show){resultList.insertAdjacentHTML('beforeend', '<li>' +"Show name: " + show.name +
    '</li>' + '<li>' + "Language: " + show.language + '</li>' +
    '</li>' + '<li>' + "Genres: " + show.genres + '</li>' +
    '</li>' + '<li>' + "Rating: " + show.rating.average + '</li>' +
    '</li>' + '<li>' + "Average runtime: " + show.averageRuntime + '</li>' +
    '</li>' + '<li>' + "Premiered: " + show.premiered + '</li>' +
    '</li>' + '<li>' + "ended: " + show.ended + '</li>' +
    '</li>' + '<li>' + "Official Site: " + show.officialSite + '</li>')//Send relevant info about the show back to show.html
    resultIMG.insertAdjacentHTML('beforeend', '<li><img src="' + show.image.medium + '" class="imgone" alt="Image of show"></li>')//Sends the person's image back to person.html

    const url2 = "https://api.tvmaze.com/shows/";
    const resultList2 = document.querySelector("#episodes");
    const urlEnd = "/episodes"
    const id = show.id
    console.log(show.id)
    fetch(url2 + id + urlEnd)
    .then((show) => show.json())//convert the results to an object
    .then(function(data) {
        data.forEach(function (episode) {
            const episodeID = episode.id
            resultList2.insertAdjacentHTML('beforeend', '<li><a href="episode.html?id=' + episodeID + '" class="coloryellow">' + episode.name + '</li>');
            });//send the name of each episode as list items to show.html with the href elements set to the episode.html page url for that episode 
    })})
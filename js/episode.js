const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
const query = searchParams.get('id'); //finds the fullname parameter
const url = "https://api.tvmaze.com/episodes/";
fetch(url + query)
.then((episode) => episode.json())//convert the results to an object
.then(function(episode) {
    resultList.insertAdjacentHTML('beforeend', `<li class="minFontSize">Name: ${episode.name}</li>
        <li class="minFontSize">Season: ${episode.season}</li>
        <li class="minFontSize">Number: ${episode.number}</li>
        <li class="minFontSize">"Rating: ${episode.rating.average}/10</li>
        <li class="minFontSize">Airdate: ${episode.airdate}</li>
        <li class="minFontSize">Runtime: ${episode.runtime}</li>`);//sends general episode information to episode.html

        try{resultIMG.insertAdjacentHTML('beforeend', `<li><img src="${episode.image.medium}" class="imgone" alt="Episode image"></li>`)} catch(TypeError){console.log("No episode image found")}//sends the episode image to episode.html
        
        resultList2.insertAdjacentHTML('beforeend', `<li class="minFontSize stylessList ">Desctiption: <br>${episode.summary}</li>`);//sends the episode description to episode.html
    });
const resultList = document.querySelector('#episodeInfo');
const resultList2 = document.querySelector('#episodeDescription');
const resultIMG = document.querySelector('#episodeImage');
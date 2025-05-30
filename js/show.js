const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
const query = searchParams.get('showName'); //finds the showName parameter
const url = "https://api.tvmaze.com/singlesearch/shows?q=";
const resultList = document.querySelector("#showInfo");
const resultIMG = document.querySelector("#showImage");
const resultCast = document.querySelector("#cast");
const resultListEpisode = document.querySelector("#episodes");
const resultShowDesc = document.querySelector("#showDesc");
fetch(url + query)
.then((show) => show.json())//convert the results to an object
.then(function(show){resultList.insertAdjacentHTML('beforeend', `<li class="minFontSize">Show name: ${show.name}
    </li><li class="minFontSize">Language: ${show.language}</li>
    </li><li class="minFontSize">Genres: ${show.genre}</li>
    </li><li class="minFontSize">Rating: ${show.rating.average}/ 10</li>
    </li><li class="minFontSize">Average runtime: ${show.averageRuntime}</li>
    </li><li class="minFontSize">Premiered: ${show.premiered}</li>
    </li><li class="minFontSize">ended: ${show.ended}</li>
    </li><li class="minFontSize"><a href="${show.officialSite}" class="colorred" target="_blank">Official Site: ${show.officialSite}</a></li>`)//Send relevant info about the show back to show.html
    try{resultIMG.insertAdjacentHTML('beforeend', `<li><img src="${show.image.medium}" class="imgone" alt="Image of show"></li>`)}//sends the show's image to show.html
    catch(TypeError){}
    resultShowDesc.insertAdjacentHTML('beforeend', `<li id="" class="minFontSize colorred textalignleft stylessList">${show.summary}</li>`);//sends the show summary back to show.html

    const url2 = "https://api.tvmaze.com/shows/";
    const urlEnd = "/episodes"
    const id = show.id
    console.log(show.id)
    fetch(url2 + id + urlEnd)
    .then((show) => show.json())//convert the results to an object
    .then(function(data) {
        data.forEach(function (episode) {
            const episodeID = episode.id
            try{resultListEpisode.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                <div class="card mb-4 bootCard">
                <a target="_blank" href="episode.html?id=${episodeID}">
                    <img class="card-img-top" src="${episode.image.medium}" alt="Episode image">
                </a>
                    <div class="card-body">
                        <h5 class="card-title">${episode.name}</h5>
                        <p class="card-text">${episode.summary}</p>
                        <input type="checkbox" class="expandTextChk">
                        <a target="_blank" href="episode.html?id=${episodeID}" class="btn btn-primary">View episode</a>
                    </div>
                </div>
                </div>`)}//sends episode results and information to show.html
                catch(TypeError){
                    resultListEpisode.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                <div class="card mb-4 bootCard">
                    <div class="card-body">
                        <h5 class="card-title">${episode.name}</h5>
                        <p class="card-text">${episode.summary}</p>
                        <input type="checkbox" class="expandTextChk">
                        <a target="_blank" href="episode.html?id=${episodeID}" class="btn btn-primary">View episode</a>
                    </div>
                </div>
                </div>`)}
            })//Displays the episode without an image if it dosnt have one
    })
    const url3 = "https://api.tvmaze.com/shows/"
    const id2 = show.id
    const urlEnd2 = "/cast"
    fetch(url3 + id2 + urlEnd2)
    .then((cast) => cast.json())//convert the results to an object
    .then(function(data) {
        data.forEach(function (cast) {
            try{resultCast.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                <div class="card mb-4 bootCard">
                <a target="_blank" href="person.html?personID=${cast.person.id}">
                    <img class="card-img-top" src="${cast.person.image.medium}" alt="Person image">
                </a>
                    <div class="card-body">
                        <h5 class="card-title">${cast.person.name}</h5>
                        <a target="_blank" target="_blank" href="person.html?personID=${cast.person.id}" class="btn btn-primary">View person</a>
                    </div>
                </div>
                </div>`)}//Send castlist back to show.html as url list elements
                catch(TypeError){resultCast.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                <div class="card mb-4 bootCard">
                    <div class="card-body">
                        <h5 class="card-title">${cast.person.name}</h5>
                        <a target="_blank" href="person.html?personID=${cast.person.id}" class="btn btn-primary">View person</a>
                    </div>
                </div>
                </div>`)}//if there is no image for this person it will be displayed without one
            });
    })
})
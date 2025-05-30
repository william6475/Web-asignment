const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
let query = searchParams.get('showName'); //finds the showName parameter
if(query == null){query = 'breaking bad'}
const url = "https://api.tvmaze.com/search/shows?q=";
fetch(url + query)
.then((show) => show.json())//convert the results to an object
.then(function(data) {
    data.forEach(function (value) {
        try{resultList.insertAdjacentHTML('beforeend', `<div class="col-md-4">
            <div class="card mb-4 bootCard">
            <a href="show.html?showName=${value.show.name}">
                <img class="card-img-top bootCardIMG" src="${value.show.image.medium}" alt="Show image">
            </a>
                <div class="card-body">
                    <h5 class="card-title">${value.show.name}</h5>
                    <p class="card-text">${value.show.summary}</p>
                    <input type="checkbox" class="expandTextChk">
                    <a href="show.html?showName=${value.show.name}" class="btn btn-primary">View show</a>
                </div>
            </div></div>`)}//returns show results and infomration to shows.html
            catch(TypeError){//Ensures that shows without iamges are displayed without them rather than an uncaught error
                resultList.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                    <div class="card mb-4 bootCard">
                        <div class="card-body">
                            <h5 class="card-title">${value.show.name}</h5>
                            <p class="noIMGBootCard card-text">${value.show.summary}</p>
                            <input type="checkbox" class="expandTextChk">
                            <a href="show.html?showName=${value.show.name}" class="btn btn-primary">View show</a>
                        </div>
                    </div></div>`)
            };//send relevant info back to shows.html
        });//Return the shows in the form of html list items to shows.html
    });
const resultList = document.querySelector('#showResults');

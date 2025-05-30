const searchParams = new URLSearchParams(window.location.search);//gets the url parameters
let query = searchParams.get('fullname'); //finds the fullname parameter
if(query == null){query = 'jack black'}
const url = "https://api.tvmaze.com/search/people?q=";
fetch(url + query)
.then((person) => person.json())//convert the results to an object
.then(function(data) {
    data.forEach(function (value) {
        try{resultList.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                                                        <div class="card bootCard mb-4">
                                                        <a href="person.html?personID=${value.person.id}">
                                                            <img class="card-img-top bootCardIMG" src="${value.person.image.medium}" alt="Person image">
                                                        </a>
                                                            <div class="card-body">
                                                                <h5 class="card-title">${value.person.name}</h5>
                                                                <a href="person.html?personID=${value.person.id}" class="btn btn-primary">View person</a>
                                                    </div></div></div>`);//sends results and relevant information back to people.html
        }
        catch(TypeError){//Ensures that people without iamges are displayed without them rather than an uncaught error
            resultList.insertAdjacentHTML('beforeend', `<div class="col-md-4">
                                                        <div class="card bootCard mb-4">
                                                            <div class="card-body">
                                                                <h5 class="noIMGBootCard card-title">${value.person.name}</h5>
                                                                <a href="person.html?personID=${value.person.id}" class="btn btn-primary">View person</a>
                                                    </div></div></div>`);
        }
        });//returns relevant information for a person if they ndo not have an image
    });
const resultList = document.querySelector('#personResults');
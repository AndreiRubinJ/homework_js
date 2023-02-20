'use strict'
async function getDogs(url_section) {
    await getDogsNameList(url_section)
        .then(result => {
            return result.message
        })
        .then(result => {
            let names = [];
            for (const [key, value] of Object.entries(result)) {
                let type = [...value];
                if (type.length > 0) {
                    type.forEach(item => names.push(`${key} ${item}`));
                } else {
                    names.push(key)
                }

            }
            return names;
        })
        .then(names => {
            let row = document.querySelector('.row');
            names.forEach(item => {
            row.innerHTML += `<div class="col-md-2 mb-4">
            <div class="card col-md-2 text-center shadow-sm" style="width: 11rem;">
                <img src="https://www.pngkey.com/png/detail/124-1246222_pet-clipart-many-dog-dog-cartoon-png.png"
                    class="card-img-top" style="height:10rem;" alt="Special title treatment">
                <div class="card-body" style="height:5rem;">
                    <h5 class="card-title">${item}</h5>                    
                </div>
                <a href="#" class="btn btn-primary mt-3">Get Photo</a>
            </div>
        </div>`})
        return names;
        })
        .then(names => {
            let element =  document.querySelectorAll('.card');
            element.forEach(item => {
                let button = item.querySelector('a');
                button.addEventListener('click', function (e) {
                    document.querySelector("#spinner-div").hidden = false;
                    getDogsImage(item.querySelector('.card-title').innerHTML)
                    .then(message => console.log(item.querySelector('img').setAttribute('src', message.message)))                   
                    .then(() => document.querySelector("#spinner-div").hidden = true);
                    e.preventDefault();
                });
            })
        })
        .then(() => {
            document.querySelector("#spinner-div").hidden = true;
        })

}

async function getDogsImage(name) {        
    let dogName  = name.replace(' ','/');    
    let url = `https://dog.ceo/api/breed/${dogName}/images/random`
    
    try {
        let res = await fetch(url);        
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getDogsNameList(url) {
    try {
        let res = await fetch(url);        
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

window.onload = () => {  
getDogs("https://dog.ceo/api/breeds/list/all");
}
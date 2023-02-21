let planetData;
const cardContextClassName = ["row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative", "bg-light"];
const cardContextInformationClassName = ["col", "p-4", "d-flex", "flex-column", "position-static"];
const cardUserNameClassName = ["d-inline-block", "mb-2", "text-success"];
const cardInfoClassName = ["col-5", "p-3", "d-flex", "flex-column", "bg-secondary", "text-white", "justify-content-between"];
const cardGeoLocationClassName = ["mb-2", "mt-1"];
const url = 'https://swapi.dev/api/planets';


async function geDataFromResponse(url) {
  try {
    let res = await fetch(url);
    console.log(url)
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function getStarWarsCards(url_section) {

    await geDataFromResponse(url_section)
      .then(result => {
        console.log(result)
        planetData = [...result.results]
        showCards(result.results);
        return result
      })
      .then(result => {
        document.querySelector(".next").disabled = result.next === null ? true : false;
        document.querySelector(".diameter").disabled = result.results !== null ? false : true;
        document.querySelector(".population").disabled = result.results !== null ? false : true;
        document.querySelector(".previous").disabled = result.previous === null ? true : false;
        return result;
      })
      .then(result => {
        nextPage = result.next;
        previousPage = result.previous;
        document.querySelector("#spinner-div").hidden = true;
      })
  
  }
  
  
  function showCards(data) {
    planetData = [...data];
    // data.sort((current, next) => Number.parseInt(current.diameter) -  Number.parseInt(next.diameter))  
    let mainElement = document.querySelector('.container');
    console.log(mainElement.children);
    if (mainElement.children.length != 0) {
      mainElement.removeChild(mainElement.children[0]);
    }
    let cardList = document.createElement("div");
    cardList.classList.add("list-cards");
    mainElement.appendChild(cardList);
  
  
    for (const { name, climate, diameter, gravity, population, rotation_period, terrain } of data) {
      console.log(`name ${climate, diameter}`);
      let planet_info = { name, climate, diameter, population, gravity, rotation_period, terrain };
      cardList.classList.add("row", "mb-2");
      const card = document.createElement("div");
      card.classList.add("col-md-6");
      let cardContext = document.createElement("div");
      cardContext.classList.add(...cardContextClassName);
      card.appendChild(cardContext);
      const cardInformation = createCardInormation(planet_info);
      const cardOtherInformation = createPlanetImage(name);
      //const card_Button = createSelectButton(id, name);
      cardContext.appendChild(cardInformation);
      cardContext.appendChild(cardOtherInformation);
      cardList.appendChild(card);
    }
  }
  
  function createCardInormation(information) {
    let companyTnfo = information.company;
    let documentFragment = document.createDocumentFragment();
    let info = document.createElement("div");
    info.classList.add(...cardContextInformationClassName);
    documentFragment.appendChild(info);
    info.appendChild(creatPlanetNameElements(information.name))
    info.appendChild(creatInformationElements(`climate:&nbsp; ${information.climate}`))
    info.appendChild(creatInformationElements(`gravity:&nbsp;${information.gravity}`))
    //info.appendChild(creatEmailElements(`terrain:&nbsp;${information.terrain}`))  
    info.appendChild(creatInformationElements(`diameter:&nbsp;${information.diameter}`))
    info.appendChild(creatInformationElements(`population:&nbsp; ${information.population}`))
    info.appendChild(creatInformationElements(`rotation period:&nbsp;${information.rotation_period}`))
  
    return documentFragment;
  
  }
  
  function createPlanetImage(name) {
    let documentFragment = document.createDocumentFragment();
    let information = document.createElement("div");
    information.classList.add(...cardInfoClassName);
    documentFragment.appendChild(information);
    information.appendChild(createImage(name))
    return documentFragment;
  
  }
  
  function creatPlanetNameElements(text) {
    let userName = document.createElement("h3");
    userName.classList.add(...cardUserNameClassName);
    userName.innerHTML = text;
    return userName;
  }
  
  function creatInformationElements(text) {
    let userName = document.createElement("div");
    userName.classList.add("mb-1", "text-muted");
    userName.innerHTML = text;
    return userName;
  }
  function createImage(text) {
    let img = document.createElement("img");
    img.src = `./img/planets/img/${text}.jpg`.toLowerCase();
    return img;
  }
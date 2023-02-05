const usersDataURL = "https://jsonplaceholder.typicode.com/users";
const cardContextClassName = ["row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative", "bg-light"];
const cardContextInformationClassName = ["col", "p-4", "d-flex", "flex-column", "position-static"];
const cardUserNameClassName = ["d-inline-block", "mb-2", "text-success"];
const cardUserAddressClassName = ["col-5", "p-3", "d-flex", "flex-column", "bg-secondary", "text-white", "justify-content-between"];
const cardGeoLocationClassName = ["mb-2", "mt-1"];
let cardsUserList;

window.onload = () => {
  window.localStorage.clear();
  let mainElement = document.querySelector('.container');
  makeRequest('GET', usersDataURL)
    .then(function (usersList) {
      cardsUserList = [...JSON.parse(usersList)];
      mainElement.appendChild(createCards(cardsUserList));
      setSerchEvent(mainElement);      
      document.querySelector("#spinner-div").hidden = true;
    })
    .catch(function (err) {
      console.error('Some error!', err.statusText);
      mainElement.appendChild(createCards([]));
      document.querySelector("#spinner-div").hidden = true;
    });
}

function createCards(cardsList) {
  let cardList = document.createElement("div");
  cardList.classList.add("list-cards");
  if (cardsList === undefined || cardsList.length > 0) {
    for (const { id, name, username, email, address, phone, website, company } of cardsList) {
      let cardInfo = { name, username, email, website, company };
      let cardUserAddres = { id, phone, address };
      cardList.classList.add("row", "mb-2");
      const card = document.createElement("div");
      card.classList.add("col-md-6");
      cardContext = document.createElement("div");
      cardContext.classList.add(...cardContextClassName);
      card.appendChild(cardContext);
      const cardInformation = createCardInormation(cardInfo);
      const cardAddresInformation = createCardAddresInformation(cardUserAddres);
      const card_Button = createSelectButton(id, name);
      cardContext.appendChild(cardInformation);
      cardContext.appendChild(cardAddresInformation);
      cardContext.appendChild(card_Button);
      cardList.appendChild(card);
    }
  } else {
    cardList.classList.add("d-flex", "justify-content-center");
    let error = document.createElement("span");
    error.classList.add("text-danger", "fs-2", "bi", "bi-x-octagon-fill");
    error.innerHTML = `&nbsp;&nbsp;&nbsp; Cards not found !!`;
    cardList.appendChild(error);
  }
  return cardList;
}

function createCardInormation(information) {
  let companyTnfo = information.company;
  let documentFragment = document.createDocumentFragment();
  let info = document.createElement("div");
  info.classList.add(...cardContextInformationClassName);
  documentFragment.appendChild(info);
  info.appendChild(createUserNameElement(information.username))
  info.appendChild(creatNameElements(information.name))
  info.appendChild(creatEmailElements(information.email))
  info.appendChild(creatCompanyElement(companyTnfo.bs, companyTnfo.catchPhrase))
  info.appendChild(createCompanyLinkElement(information.website, companyTnfo.name));
  return documentFragment;

}

function createCardAddresInformation(addressInformation) {
  let address = addressInformation.address;
  let documentFragment = document.createDocumentFragment();
  let informationAddress = document.createElement("div");
  informationAddress.classList.add(...cardUserAddressClassName);
  documentFragment.appendChild(informationAddress);
  informationAddress.appendChild(createCityElement(` ${address.city}`))
  informationAddress.appendChild(createAddresElement(` ${address.street}, ${address.suite}, ${address.zipcode}`))
  informationAddress.appendChild(createPhoneElement(` ${addressInformation.phone}`));
  informationAddress.appendChild(createGeoLocation(`${address.geo.lng},${address.geo.lat}`));
  return documentFragment;

}

function createUserNameElement(text) {
  let userName = document.createElement("strong")
  userName.classList.add(...cardUserNameClassName);
  userName.innerHTML = text;
  return userName;
}

function creatNameElements(text) {
  let userName = document.createElement("h3");
  userName.classList.add("mb-0");
  userName.innerHTML = text;
  return userName;
}

function creatEmailElements(text) {
  let userName = document.createElement("div");
  userName.classList.add("mb-1", "text-muted");
  userName.innerHTML = text;
  return userName;
}

function creatCompanyElement(bsText, catchPhraseText) {
  bsText = bsText.charAt(0).toUpperCase() + bsText.slice(1)
  let companyInfo = document.createElement("p");
  companyInfo.classList.add("mb-auto");
  companyInfo.innerHTML = `${bsText}<br>${catchPhraseText}`;
  return companyInfo;
}

function createCompanyLinkElement(link, compamy) {
  let linkCompany = document.createElement("a");
  linkCompany.setAttribute("href", `http://${link}`);
  linkCompany.innerHTML = compamy;
  return linkCompany;
}

function createGeoLocation(text) {
  let geo = document.createElement("span");
  geo.setAttribute("style", "font-size: 12px;");
  geo.classList.add(...cardGeoLocationClassName);
  geo.innerHTML = `<a class = "bi bi-geo-alt" 
                    style="color: white"
                    href="https://maps.google.com/?q=${text} 
                    target="_blank"
                    rel="noopener noreferrer"></a> ${text}`;
  return geo;
}

function createCityElement(text) {
  let city = document.createElement("span");
  city.classList.add("bi", "bi-geo", "mb-2");
  city.innerHTML = "&nbsp;&nbsp" + text;
  return city;
}

function createAddresElement(text) {
  let addres = document.createElement("span");
  addres.setAttribute("style", "font-size: 12px;");
  addres.classList.add("bi", "bi-map", "mb-2");
  addres.innerHTML = "&nbsp;&nbsp" + text;
  return addres;
}

function createPhoneElement(text) {
  let phone = document.createElement("span");
  phone.classList.add("bi", "bi-telephone", "mb-2");
  phone.setAttribute("style", "font-size: 12px;");
  phone.innerHTML = "&nbsp;&nbsp" + text;
  return phone;
}

function createSelectButton(id, name) {
  let count_selected_cards = "count_selected_cards";
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("btn", "btn-outline-info");
  button.innerHTML = "Select card";
  button.addEventListener("click", () => {
    let count = window.localStorage.getItem(count_selected_cards) || 0;
    let saved_user = JSON.parse(window.localStorage.getItem(`selected_card_${id}`)) || "";
    console.error(saved_user)
    if (saved_user === "") {
      window.localStorage.setItem(count_selected_cards, ++count);
      window.localStorage.setItem(`selected_card_${id}`, JSON.stringify({
        id: id,
        name: name
      }));
    }
  });

  return button;
}

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

function setSerchEvent(element) {
  document.querySelector(".search").addEventListener("keyup", function () {
    console.log(cardsUserList);
    let searchvalue = this.value.toLowerCase()
    let filterObj = cardsUserList.filter((item) =>
      item.name.toLowerCase().includes(searchvalue) || item.username.toLowerCase().includes(searchvalue));
    let cards = document.querySelector('.list-cards');
    if (cards != null && filterObj != null) {
      cards.remove();
      element.appendChild(createCards(filterObj));
    }
  });
}







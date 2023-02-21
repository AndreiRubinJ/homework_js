let nextPage;
let previousPage;
let typeOfSort;

function setEventListner(){
    document.querySelector(".next").addEventListener("click", function () {
        if (!this.disabled) {
          getStarWarsCards(nextPage);
        }
      })
      document.querySelector(".previous").addEventListener("click", function () {
        if (!this.disabled) {
          getStarWarsCards(previousPage);
        }
      })
    
      document.querySelector(".population").addEventListener("click", function () {
        if (planetData.length > 0) {
          if (typeOfSort) {
            planetData.sort((current, next) => Number.parseInt(current.population) - Number.parseInt(next.population));
          } else {
            planetData.sort((current, next) => Number.parseInt(next.population) - Number.parseInt(current.population));
          }
          typeOfSort = !typeOfSort;
          showCards(planetData);
    
        }
      })
    
      document.querySelector(".diameter").addEventListener("click", function () {
        if (planetData.length > 0) {
          if (typeOfSort) {
            planetData.sort((current, next) => Number.parseInt(current.diameter) - Number.parseInt(next.diameter));
          } else {
            planetData.sort((current, next) => Number.parseInt(next.diameter) - Number.parseInt(current.diameter));
          }
          typeOfSort = !typeOfSort;
          showCards(planetData);
    
        }
      })
}
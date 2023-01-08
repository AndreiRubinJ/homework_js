window.onload = ()=> {        
    //Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li
    const body = document.querySelector("body");
    let h_1 = document.createElement("h1");    
    h_1.innerHTML = "Home work 07";
    body.appendChild(h_1);    
    let header = document.createElement("header");
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");    
    let footer = document.createElement("footer");
    body.appendChild(header);
    body.appendChild(nav);
    body.appendChild(footer);
    nav.appendChild(ul);
    for (const { name, year, genre} of films) {
        let li = document.createElement("li");
           li.classList.add(`li_${genre}`); 
           ul.appendChild(li);     
 //          отримати доступ до ціх елементів і змінити там текст за допомогою innerHtml        
           li.innerHTML = `${name} year: ${year} ${genre.toUpperCase()}`;           
    }
       
    let li = document.querySelector('li');

    //Знайти батьківський елемент li елемента через методи пошуку батьківського елементу вивести в консоль отримане значення
    console.log(li.parentElement);

    let [...list] = document.querySelectorAll('[class*=li_')
    console.log(list);      
}

//Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
class Film {
    constructor(name, year, genre = '', viewsCount = 0) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.viewsCount = viewsCount;        
    }   
    
    get name() {
        return this._name
    }
    set name(newName) {
        if (newName === '') {
            return;
        }
        this._name = newName;
    }

    get viewsCount() {
        return this._viewsCount;
    }
    set viewsCount(count) {
        if (this._viewsCount >= 0) {
            this._viewsCount += count;
        } else {
            this._viewsCount = count;
        }
    }
//В классі створити метод який визначає рейтинг в залежності від року випуску і кількості переглядів  ( кількість переглядів поділена на різницю між сьогоднішнім роком і роком випуску ) 
    getReating() {
        let age = new Date().getUTCFullYear() - this.year;         
        if(this.viewsCount === 0){
            return 0;
        }        
        if(age === 0){
            return this.viewsCount;
        }
        return Math.floor(this.viewsCount/age);   
    }   
   
}


//Створіть массив і розмістіть в ньому створені обєкти фільмів, далі за допомогою синтаксису деструктирізації  переберіть масив  і виведіть значення по року випуску.

let films = [new Film('The Shawshank Redemption',1994,'Drama',9100),
             new Film('The Godfather',1972,'Drama',5200),
             new Film('The Dark Knight',2008, 'Action', 8300),
             new Film('12 Angry Men',1957,'Crime',2000),
             new Film('The Lord of the Rings: The Two Towers',2002,'Adventure',5700)].sort((a, b) => a.year - b.year);
             console.log(films[0].getReating());

for (const { name, year, genre, viewsCount} of films) {
    console.log(name, year,genre,viewsCount)
}
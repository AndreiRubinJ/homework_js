let table_data = [{
    "name": "Andrei",
    "city": "KYIV",
    "curse": "JS",    
},
{
    "name": "Fedor",
    "city": "KYIV",
    "curse": "JS"
},
{
    "name": "Mikola",
    "city": "New York",
    "curse": "Java"
},
{
    "name": "Stipan",
    "city": "New York",
    "curse": "Java",
    "email": "arubin@gmail.com"
},
{
    "name": "Boris",
    "city": "New York",
    "addres": "123 Streat",
    "curse": "Java",
    "email": "boris@gmail.com"
}
];

let images = [
    {
        'imgPath':'img/image1.jpg',
        'alt':'png image 1',
        'href':'https://img.com/60903073638.jpg'
    },
    {
        'imgPath':'img/image5.jpg',
        'alt':'png image 5',
        'href':'https://img.com/60903073639.jpg'
    },
    {
        'imgPath':'img/image3.jpg',
        'alt':'png image 3',
        'href':'https://img.com/60903073640.jpg'
    },
    {
        'imgPath':'img/image4.jpg',
        'alt':'png image 4',
        'href':'https://img.com/60903073641.jpg'
    },
    {
        'imgPath':'img/image5.jpg',
        'alt':'png image',
        'href':'https://img.com/60903073642.jpg'
    }    
]

window.onload = () => {    
    const form_fileds = 'form [class *=col]';
    document.querySelector('form .btn-primary').onclick = function () {
        getDataForm(form_fileds, updateListInfo);
        return false;

    };

    let body = document.querySelector('body');
    let table = new HomeWorkTable(table_data).createTable();
    let images_elements = new HomeWorkImage(images).createImageElement();
    body.appendChild(images_elements);
    body.appendChild(table);

}

function getDataForm(form, updateListInfo) {
    const lists = '.list-group'
    var formData = new FormData();
    document.querySelectorAll(form).forEach((item) => {
        formData.append(
            item.querySelector('label').innerText,
            item.querySelector('.form-control').value
        );
    });
    updateListInfo(lists, formData)
}

function createList(data) {
    let name_content = createContent();
    let first_name = data.get('First name');
    let last_name = data.get('Last name');
    let address = data.get("Address");
    let email = data.get("Email");
    let user_name = data.get("Username");
    name_content.appendChild(createUserNameContent(first_name, last_name));
    name_content.appendChild(createDataContent());
    let li_element = createListElement();
    li_element.appendChild(name_content)
    li_element.appendChild(createDataAddres(address));
    li_element.appendChild(createEmailContent(email, user_name));
    return li_element;


}

function updateListInfo(listData, data) {
    let list = document.querySelector(listData);
    let record_count = list.childElementCount;
    list.appendChild(createList(data));
    if (record_count >= 4) {
        list.removeChild(list.firstElementChild)
    }
    updateCount(listData);

}

function updateCount(count) {
    let list = document.querySelector(count);
    document.querySelector('.rounded-pill').innerText = list.childElementCount;

}

function createDataContent() {
    let data = new Date();
    let data_content = document.createElement('small')
    data_content.innerHTML = `${data.getDay()}-${data.getMonth() + 1}-${data.getUTCFullYear()}-${data.getHours()}:${data.getMinutes()} `
    data_content.classList.add('text-muted');
    return data_content;
}

function createDataAddres(adress) {
    let adress_content = document.createElement('p')
    adress_content.innerHTML = adress;
    adress_content.classList.add('mb-1');
    return adress_content;
}

function createUserNameContent(firstName, secondName) {
    let name_userName = document.createElement('h6');
    name_userName.innerHTML = `${firstName} ${secondName}`;
    name_userName.classList.add('name_userName');
    return name_userName
}
function createEmailContent(email, userName) {
    let email_content = document.createElement('small')
    email_content.innerHTML = `${email}  ( ${userName} )`;
    email_content.classList.add('text-muted');
    return email_content
}

function createListElement() {
    let li_element = document.createElement('li');
    li_element.classList.add(`list-group-item`);
    li_element.classList.add(`list-group-item-action`);
    return li_element;
}
function createContent() {
    let name_content = document.createElement('div');
    name_content.classList.add('d-flex');
    name_content.classList.add('w-100');
    name_content.classList.add('justify-content-between');
    return name_content;

}
////////////////////////////////////////////////// 2 ///////////////////////////////////////////////////////////
class HomeWorkImage{
    constructor(image_data){
        this.image_data = image_data;
    }

    createImageElement(){
        let initial_div = document.createElement('div');
        initial_div.classList.add('row');
        initial_div.classList.add('justify-content-center');
        
        
        for(let i=0; i<2; i++ ){
        for(let {imgPath,alt,href} of this.image_data){
            let div = document.createElement('div');
            div.classList.add('col-md-1');
            let img = document.createElement('img');           
            let a = document.createElement('a');           
            a.setAttribute("href", href);
            img.setAttribute("src", imgPath); 
            img.setAttribute("alt", alt);
            img.setAttribute("style", "height:75px");  
            img.classList.add("img-thumbnail");
            a.appendChild(img);
            div.appendChild(a)
            initial_div.appendChild(div)            
       }
    }
       return initial_div;

    } 

}




////////////////////////////////////////////////// 3 ///////////////////////////////////////////////////////////

class HomeWorkTable {
    constructor(table_date) {
        this.table_date = table_date;
    }

    createTable(){
        let div = document.createElement('div');
        div.classList.add("table-responsive-sm");
        let main_table = document.createElement('table');
        main_table.classList.add("table");  
        main_table.classList.add("table-striped");
        main_table.classList.add("mt-5");
        main_table.appendChild(this.createTableHeader());
        main_table.appendChild(this.createBody());
        div.appendChild(main_table);
        return div;

    }

    createTableHeader() {               
        let thead = document.createElement('thead');
        let tr = this.createHeaderRow();
        thead.appendChild(tr);        
        return thead;
    }
    

    createHeaderRow() {
        let table_row = this.getHeaders();
        let tr = document.createElement('tr')
        tr.appendChild(this.createHeaderCell("#"))
        for(let name of table_row){
            tr.appendChild(this.createHeaderCell(name))  
        }
        return tr;        
    }

    getHeaders() {
        let arr = []
        for (let obj of this.table_date) {
            arr.push(...Object.keys(obj));
        }
        return arr.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
    }

    createHeaderCell(name) {
        let th = document.createElement('th')
        th.setAttribute("scope","col")
        th.innerHTML = name.toUpperCase();
        return th;
    }

    createBody(){
        let tbody = document.createElement('tbody');
        let headers = this.getHeaders();
        let count = 0;
        for(let temp_data of this.table_date){
             count++
             let tr = document.createElement("tr");
             let th = document.createElement("th");
             th.setAttribute("scope","row")
             th.innerHTML = count;
             tr.appendChild(th);             
            for(const header_name of headers){
                let td = document.createElement("th");
                td.innerHTML = temp_data[header_name] === undefined ? '-': temp_data[header_name];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);            
        }
        return tbody;
    }
}







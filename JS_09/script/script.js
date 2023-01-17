let scroll;
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
    let interval;
    let modal = createModalDialog();
    let modal_button = document.querySelector('.btn_modal');    
    let close_button  = document.querySelector('.modal_content span')
    close_button.onmouseover = function(){
        this.style.color = "#000";
        this.style.cursor = "pointer";
        this.style.textDecoration = "none";

    }

    close_button.onmouseout  = function(){
        this.style.color = "#aaaaaa";   
    }

    modal_button.onclick = function(){               
        modal.style.display = "block";
        setModalByCenter(document.querySelector('div.modal_content')); 
        let element = document.querySelector('p.modal_content');
        console.log(element.innerHTML)
        interval = printNumbers(60, 0, modal);
    }

    close_button.onclick = function(){
        clearInterval(interval);
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          clearInterval(interval);
          modal.style.display = "none";
        }
      }

      new HomeWorkSlider(images).createImageElement();
      startSlaider(2000);

      let next = document.querySelector('.next');
      let prew = document.querySelector('.prew');
      let next_count = 0;     

      next.onclick = function () {      
        clearInterval(scroll);        
        const imgWraper = document.querySelector('.img-wrapper');            
        const imgItems = document.querySelectorAll('.img-wrapper > *');
        if(next_count == imgItems.length - 3){
            next_count = 0;
        }else{
            next_count++;
        }
        let widthEl = document.querySelector('.img-wrapper > :first-child').offsetWidth + 24;
        imgWraper.style.left = `-${widthEl * next_count}px`;
        imgWraper.style.transition ='all ease .3s;';       
    };      
    prew.onclick = function () {      
        clearInterval(scroll);        
        const imgWraper = document.querySelector('.img-wrapper');                    
        const imgItems = document.querySelectorAll('.img-wrapper > *');
        if(next_count < 0){
            next_count = imgItems.length - 3;  
        }else{
            next_count--;
        }
        let widthEl = document.querySelector('.img-wrapper > :first-child').offsetWidth + 24;
        imgWraper.style.left = `-${widthEl * next_count}px`;
        imgWraper.style.transition ='all ease .3s;';       
    };      

}


window.onresize = () => {           
    setModalByCenter(document.querySelector('div.modal_content'));
    
}

function printNumbers(from, to, element) {    
    let info = element.querySelector('p.modal_content');
    let timerId = setInterval(() => {        
        info.innerHTML = ` ${from--}`;        
      if (from < to ) {
        clearInterval(timerId);
        element.style.display = "none";
        info.innerHTML = 'Ви дочикались знижок!!!';
      }
    }, 1000);
    return timerId;
  }


  function createModalDialog(){    
    let modal_element = document.createElement('div');
    modal_element.classList.add('modal');
    modal_element.style.display = 'none';
    modal_element.style.position = 'absolute';
    modal_element.style.overflow = 'auto';
    modal_element.style.backgroundColor = 'rgba(0,0,0,0.4)'        
    modal_element.style.zIndex = '1';
    modal_element.style.paddingTop = '100px';
    modal_element.style.left = '0';
    modal_element.style.top = '0';
    modal_element.style.width = '100%';
    modal_element.style.height = '100%';
    modal_element.style.overflow = 'auto';
    modal_element.appendChild(cleateModalContext());
    document.querySelector('body').appendChild(modal_element);
    return modal_element;    
  }

  function cleateModalContext(){
    let modal_windows = document.createElement('div');
    modal_windows.classList.add('modal_content');
    modal_windows.style.backgroundColor = '#fefefe';
    modal_windows.style.position = 'absolute';    
    modal_windows.style.contenttextAlign = "center";
    modal_windows.style.margin = "auto";
    modal_windows.style.padding = '20px';
    modal_windows.style.width = '25%';
    modal_windows.style.borderStyle = "1px solid #888";
    let close_button =  document.createElement('span');
    close_button.innerHTML = "&times;"
    close_button.style.color = "#aaaaaa";
    close_button.style.float = "right";
    close_button.style.fontSize = '20px';
    close_button.style.fontWeight = "bold";    
    let content =  document.createElement('p');
    content.classList.add('modal_content');
    content.style.textAlign = "center";
    content.style.fontSize = '40px';
    content.style.color = "red";    
    modal_windows.appendChild(close_button);
    modal_windows.appendChild(content);
    return modal_windows;
  }

  function setModalByCenter(element){
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let winH = window.innerHeight;
    let winW = window.innerWidth;
    element.style.top = ((winH - height)/2) + 'px';
    element.style.left = ((winW - width)/2) + 'px';
  }

  class HomeWorkSlider {
    constructor(images, dalay) {
        this.images = images;
        this.dalay = dalay;
    }

    createImageElement() {
        let img_wrapper = document.querySelector('.img-wrapper')                
        for(let {imgPath} of this.images){
            let initial_div = document.createElement('div');
            let img = document.createElement('img'); 
            img.setAttribute("src", imgPath);
            initial_div.appendChild(img);
            img_wrapper.appendChild(initial_div);
        }  
       
   }   
    
}

function startSlaider(dalay = 3000) {
    const imgWraper = document.querySelector('.img-wrapper');
    const imgItems = document.querySelectorAll('.img-wrapper > *');
    const length = imgItems.length;
    const view = 3;
    imgWraper.style.setProperty('--per-view', view);
    for(let i=0; i<= view; i++){
      imgWraper.insertAdjacentHTML('beforeend', imgItems[i].outerHTML)
    }
    let count = 0;      
    scroll = setInterval(() => {     
       count++;  
       if(count == length){
          clearInterval(scroll);
          count = 1;            
          imgWraper.style.left ='0';
          imgWraper.style.transition ='0s';
          scroll = startSlaider(dalay);
       }
       let widthEl = document.querySelector('.img-wrapper > :first-child').offsetWidth + 24;         
       imgWraper.style.left = `-${widthEl * count}px`;
       imgWraper.style.transition ='.3s';
    }, dalay);        
     return scroll;
  }
  
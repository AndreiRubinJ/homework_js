/*
-------------------------- 01 ---------------------------
Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
*/
 
function countLowrercase(str1=""){
  let pattern = /[A-Z]/gm;
  return (str1.match(pattern)||[]).length;

}

console.log(countLowrercase("abcABC123!@€£#$%^&*()AAA_-+=}{[]|\':;?/>.<,~"));


/*
-------------------------- 02 ---------------------------
Написати функцію яка видаляє всі тексктові символи з стрінга, а отриманні цифрові значення переводить в тип намбер та повертає його
*/

function strToNumber(str1=""){
  let pattern = /\D+/gm;
  return Number.parseInt((str1.replace(pattern,"")|| 0));

}

console.log(strToNumber("hell5o wor6ld$%^"));

/*
-------------------------- 03 ---------------------------
За допомогою регулярки перевітити чи валідний пін код ввів користувач
*/

function validatePinCode(str1=""){
  let regExp = /^\d{4}$/gm;
  return regExp.test(str1);

}

console.log(validatePinCode("1235"))
console.log(validatePinCode("11235"))
console.log(validatePinCode("1235a"))
console.log(validatePinCode("w134"))

/*
-------------------------- 04 ---------------------------
Створити регулярку яка отримує адресс сторінки і повертає тільки адресс
*/

function getURI(url = "") {
  regExp = /^(www.|http:|https:)\/\/\S+([.]\w{3}|\/)/gmi || [];
  return url.match(regExp).join("");
}

console.log(getURI("https://prog.academy/?page=1"))
console.log(getURI("https://prog.academy.com/?page=1"))
console.log(getURI("https://prog.academy.ua/?page=1"))
console.log(getURI("http://prog.academy.ua/?page=1"))


/*
-------------------------- 05 ---------------------------
Створити функцію валідації юзернейма, імя може включати літери цифри, тире і нижьнє тире, довжина імя повина бути від 4 до 10 символів
*/

function validateUSerName(userName){
  let regExp = /^([a-z]|[0-9]|-|_){4,10}$/gmi;
  return regExp.test(userName);
}

console.log(validateUSerName("a"))
console.log(validateUSerName("p1pp1"))
console.log(validateUSerName("a_sd43_34"))
console.log(validateUSerName("a_sd-43_34"))
console.log(validateUSerName("asd43$34'"))

window.onload = () => {

  const input = document.querySelector('.input-group-sm');
input.addEventListener('change', (e) =>{
  console.log('onchange + ', e.target.value)
     let isValid = validatePinCode(e.target.value) 
     e.target.classList.remove("bg-danger")
     e.target.classList.remove("bg-success");
     e.target.classList.remove("text-white");
     if(!isValid){
      e.target.classList.add("bg-danger");
      e.target.classList.add("text-white");
     }else{
      e.target.classList.add("bg-success");
      e.target.classList.add("text-white");            
      
     }
     
});

function updateValue(e) {
    validatePinCode(e.target.value);
}
}
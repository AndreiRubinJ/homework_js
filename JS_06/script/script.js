//*************************** -1- ******************************/

function calculate(...args) {
    let sum = 0;
    for (let arg of args) {
        if (typeof arg == "number") {
            sum += arg;
        } else if (Array.isArray(arg)) {
            sum += calculate.apply(this, arg);
        }
    }
    return sum;

}

console.log(calculate(5, [1, 2], [1, 1], 3));
console.log(calculate(5, [1, 2], [1, 1, 'test'], 3, "wrwer", "werwer"));





//*************************** -2- -3-******************************/

function greeting(dataBirth, monthFull, ageNow) {
    if (monthFull == 0 && dataBirth == new Date().getDate()) {
        console.log(`З днем народження тебе
        Щиро я вітаю! 
        тобі виповнилося ${ageNow}`)
    }
}
function getUserAge(dataBirth, monthBirth, yearBirth, greeting) {
    let currDate = new Date();
    let birth = new Date(`${monthBirth} ${dataBirth}, ${yearBirth}`);
    let ageNow = currDate.getFullYear() - birth.getFullYear();
    let monthFull = currDate.getMonth() - birth.getMonth()
    if (monthFull < 0 || (monthFull === 0 && currDate.getDate() < birth.getDate())) {
        ageNow--;
    }
    greeting(birth.getDate(), monthFull, ageNow);
    return ageNow;
}



console.log(getUserAge(4, "Januar", 1998, greeting))



//*************************** -4- ******************************/

function getCentury(year) {
    year = parseInt(year);
    if (!Number.isNaN(year)) {
        return Math.floor((year - 1) / 100) + 1;
    }else{
        return undefined;
    }

}

console.log("сторіччя", getCentury(2023));
console.log("сторіччя", getCentury("1999"));
console.log("сторіччя", getCentury(1810));
console.log("сторіччя", getCentury(1700));
console.log("сторіччя", getCentury("1601"));
console.log("сторіччя", getCentury("2000"));

//*************************** -5- ******************************/

function getCountDate() {
    let currentDate = new Date()
    let current_days = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    let next_month = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
     return ` ${current_days.getDate()} днів у ${current_days.toLocaleString('default', { month: 'long' })}\n ${next_month.getDate()} днів у ${next_month.toLocaleString('default', { month: 'long' })}`

}

console.log(getCountDate());
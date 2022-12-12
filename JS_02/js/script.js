let OPERATOR = '';
let RESULT;
let NUMBER_MEMORY;

function save_operator(operator_name) {
    console.log(operator_name);
    OPERATOR = operator_name;
    NUMBER_MEMORY = parseFloat(document.querySelector('.calculator_display').innerHTML);
    document.querySelector('.calculator_display').innerHTML = `${NUMBER_MEMORY}${OPERATOR}`;
}

function equal() {
    OPERATOR = '';
    RESULT = 0;
    NUMBER_MEMORY = 0;
}

function clear_calc() {
    OPERATOR = '';
    RESULT = 0;
    NUMBER_MEMORY = 0;
    document.querySelector('.calculator_display').innerHTML = "0";
}

function save_number(number) {
    let number_internal = document.querySelector('.calculator_display').innerHTML;
    if (number_internal == '0') {
        document.querySelector('.calculator_display').innerHTML = number;
    } else {
        document.querySelector('.calculator_display').innerHTML += number;
    }
}

function equal() {
    let operation;
    if (OPERATOR !== "") {
        operation = document.querySelector('.calculator_display').innerHTML.split(OPERATOR);
        let first = parseFloat(operation[0]);
        let second = parseFloat(operation[1]);
        if (OPERATOR === "+") {
            RESULT = first + second;
        } else if (OPERATOR === "-") {
            RESULT = first - second;
        } else if (OPERATOR === "/") {
            if (second == 0) {
                alert('на нуль ділити не можна');
                clear_calc();
                return;
            }
            RESULT = first / second;
        } else if (OPERATOR === "*") {
            RESULT = first * second;
        }
        document.querySelector('.calculator_display').innerHTML = RESULT;
    }

}

function set_decimal() {
    let rst = document.querySelector('.calculator_display').innerHTML
    if (OPERATOR === "") {
        if (!rst.includes('.')) {
            rst += '.';
        }
    } else {
        let multi_operator = rst.split(OPERATOR)[1];
        if (multi_operator === "") {
            rst += '0.';
        } else {
            rst += '.';
        }

    }
    document.querySelector('.calculator_display').innerHTML = rst;
}

function even_numbers() {
    let number = 'As';
    while (true) {
        number = parseInt(prompt('задайте число', "20"));
        if (!Number.isNaN(number)) {
            break;
        }
    }
    for (let i = 2; i <= number; i += 2) {
        console.log(i);
    }
}

function calc_sum() {
    let sum = 0;
    let numberA = getNumber('задайте число A');
    let numberB = getNumber('задайте число B');
    if (numberA < numberB) {
        console.log(`Cумa чисел між ${numberA} i ${numberB} = `);
        for (; numberA < numberB - 1;) {
            sum += ++numberA;
        }
    }
    console.log(sum)

}
function getNumber(str) {
    let number
    while (true) {
        number = parseInt(prompt(str));
        if (!Number.isNaN(number)) {
            break;
        }
    }
    return number;
}

function loop_numbers() {
    let numberA = getNumber('задайте число A');
    let numberB = getNumber('задайте число B');
    if (numberA < numberB) {
        logNumbers(numberA, numberB);
    } else {

        logNumbers(numberB, numberA);
    }
}

function logNumbers(less, more) {
    for (; more >= less; more--) {
        console.log(more);
    }
}

function even_print_star() {
    let numberA = getNumber('задайте число A');
    let numberB = getNumber('задайте число B');
    let star = '';
    for (let i = 0; i < numberA; i++) {
        for (let y = 0; y < numberB; y++) {
            star += '*';
        }
        star += '\n';
    }
    console.log(star);
}

function get_from_prompt(question) {
    return prompt(question);
}

function admin_login() {
    const ADMIN_LOGIN_NAME = "admin";
    const ADMIN_PASSWORD = '12345';
    const SUCCESS_LOGIN = "вітаємо в системі"
    const NOT_SUCCESS_LOGIN = "Пароль логін не вірні"
    let login = get_from_prompt('login name')
    let password = get_from_prompt('password');
    if (login == ADMIN_LOGIN_NAME && password == ADMIN_PASSWORD) {
        alert(SUCCESS_LOGIN);
    } else {
        alert(NOT_SUCCESS_LOGIN);
    }
}

function calc_avg() {
    let list_num = get_from_prompt('введіть числа відокремлюючи їх пробілами').split(' ');
    let avg = 0;
    for (let i = 0; i < list_num.length; i++) {
        avg += parseFloat(list_num[i]);
    }
    avg = avg / list_num.length;
    alert(`середнє значення ${list_num.length} чисел = ${avg}`);

}

function vik() {
    let is_good = getNumber('яке зараз твой вік') >= 18;
    alert(is_good);
}

function solar_system() {
    let planet_search = prompt('введіть назву планети');
    const planets = {
        Mercury: ["Mercury", "Меркурій"],
        Venus: ["Venus", "Венера"],
        Earth: ["Earth", "Земля"],
        Mars: ["Mars", "Марс"],
        Jupiter: ["Jupiter", "Юпітер"],
        Saturn: ["Saturn", "Сатурн"],
        Uranus: ["Uranus", "Уран"],
        Neptune: ["Neptune", "Нептун"],
        default: ["", ""]
    }

    function getPlanetByName(name) {
        for (let planet in planets) {
            for (let planet_name of planets[planet]) {
                if (planet_name.toUpperCase() === name.toUpperCase()) {
                    console.log(planets[planet])
                    return planets[planet];
                }
            }
        }
        return planets.default;
    }

    let planet = getPlanetByName(planet_search);

    switch (planet) {
        case planets.Venus:
        case planets.Earth:
        case planets.Jupiter:
        case planets.Neptune:
        case planets.Mars:
        case planets.Mercury:
        case planets.Uranus:
        case planets.Saturn:
            alert(`planet '${planet_search}' exist`);
            break;
        default:
            alert(`planet ' ${planet_search} ' not exist`);
    }
}

function calc_discount(){
    let sum = getNumber('задайте число');
    let discount = 0;

    if(sum >= 10000){
        discount = 7;
    }else if(sum >=3000){
        discount = 5
    }else if(sum >=100){
        discount = 3
    }    
    sum = (sum * discount)/100;
    discount = discount > 0? `У вас ${discount} % знижки - ${sum} `:`У вас нема знижки`;
    alert(discount)
}
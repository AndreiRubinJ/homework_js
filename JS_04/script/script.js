// ************************************* -1- ************************************
let userWallet = {
    amountUsa: 10000,
    amountEuro: 20000,
    amountUa: 200000
};

let bank = [{
    buy: 41.40,
    sell: 42.40,
    CurrencyName: 'USD'
},
{
    buy: 40.00,
    sell: 40.55,
    CurrencyName: 'EUR'
},
{
    buy: 0.9,
    sell: 1.2,
    CurrencyName: 'UA'
}
];

let currencsySum = (currencyName) => {
    return currencyName === 'USD'
        ? userWallet.amountUsa
        : currencyName == 'EUR'
            ? userWallet.amountEuro
            : userWallet.amountUa;
}

function sel_by(currencyName, type, currencsySum) {
    let info = `you can ${type} currency ${currencyName} in summ :`;
    let sum_wallet = type == 'buy' ? currencsySum() : currencsySum(currencyName);
    let course = bank.filter((item) => item.CurrencyName === currencyName)[0][type];
    return type == 'buy' ? info + (sum_wallet / course).toFixed(2) : info + (sum_wallet * course).toFixed(2);
}


console.info(sel_by('USD', 'buy', currencsySum));
console.info(sel_by('EUR', 'sell', currencsySum));

// ************************************* -2- ************************************
function move(step, ditection) {
    if (typeof ditection == "string") {
        if (ditection.toLowerCase() == 'north') {
            ditection = 'північ';
        } else if (ditection.toLowerCase() == 'south') {
            ditection = 'південь';
        } else if (ditection.toLowerCase() == 'west') {
            ditection = 'захід';
        } else if (ditection.toLowerCase() == 'east') {
            ditection = 'схід';
        }else{
            ditection = 'невідомий напрямок';
        }
    }else{
        ditection = 'невідомий напрямок';
    }
    return ` перемістився на ${ditection} на ${step} кроків`;
}

function moveUser(userName, move, step, ditection) {
    return userName + move(step, ditection);
}
console.log(moveUser('Andrei', move, 10, 'north'));
console.log(moveUser('Andrei', move, 100, 'east'));
console.log(moveUser('Andrei', move, 50, 'esdfsdfast'));
console.log(moveUser('Andrei', move, 100, 40));


// ************************************* -3- ************************************
let keep_remove = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"];

function get_keep(arr) {
    if (keep_remove.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            keep_remove.splice(i + 1, 1);
        }
        return arr;
    } else {
        return -1;
    }
}

console.info(get_keep(keep_remove))


// ************************************* -4- ************************************

let figurs = [
    {
        figure: "Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure: "Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

let square = function (obj) {
    for (let fig of obj) {
        if (fig.figure == "Rectangle" || fig.figure == "Squar") {
            fig.square = fig.sizeA * fig.sizeB;
        }
    }
    return obj;
}
square(figurs).forEach(function (obj) {
    for (var key in obj) {
        console.log(key, obj[key]);
    }
});




// ************************************* -5- ************************************

let ara_ay = [2, 3, 5, 4, 8, 7, 9, 10];
function calc_array(arr) {
    let new_array = [];
    arr.forEach((item, index) => {
        new_array[index] = !(item & 1) ? item * 4 : item;

    })
    return new_array
}
console.info(calc_array(ara_ay));
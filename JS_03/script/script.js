let arrRandomNumbers = [1,3,5,4,6,9,8,20,31,33,10,"44"];
function getEvenNumbers(arr) {
    let result = [];
    let item = 0;
    if (Array.isArray(arr)) {
        for (i = 0; i < arr.length; i++) {
            item = arr[i];
            if (typeof item !== 'string') {
                if (item % 2 == 0) {
                    result.push(item);
                }
            }
        }
    }
    return result;
}


function getItemsFromMarket() {
    let items = [];
    let item = '';
    for (let i = 0; i < 5; i++) {
        item = prompt(' set item', "beer: guinness");
        items.push(item);
    }
    return items
}

function getAverage(arr) {
    let count = 1;
    return Array.isArray(arr) ?
        arr.reduce((i, x) => {
            i = typeof i === 'string' ? 0 : i;
            x = typeof x === 'string' ? 0 : x;
            if (x != 0 && i != 0) {
                count++;

            }
            return i + x;

        }) / count : 0;

}

function changeArray() {
    let letsmile = [':)', '=)', ':)', '=)', ':)', '=)'];
    const ELEMENT_TO_FIND = "=)"
    const ELEMENT_TO_EDD = ";)"
    for (let x = 0; x < letsmile.length; x++) {
        if (letsmile[x] == ELEMENT_TO_FIND) {
            letsmile[x] = ELEMENT_TO_EDD;
        }
    }
    return letsmile;
}

let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
function firstLast(type, array) {    
    if (Array.isArray(array)) {
        if (type === "last") {
            return array.splice(-1, 1)
        } else if (type == "first") {
            return array.splice(0, 1);
        }
        return array;
    }
    return [];

}


function getSummArray(arr = []) {
    return Array.isArray(arr) ?
        arr.reduce((a, b) => {
            a = typeof a === 'string' ? 0 : a;
            b = typeof b === 'string' ? 0 : b;
            return a + b;
        }) :
        0;
}
// 7) 
function getArrayFromStartToFinish(start = "0", finish = "100", arr = []) {
    if (Array.isArray(arr)) {
        let first = arr.findIndex(s => s == start);
        let end = arr.findIndex(f => f == finish);
        if (first > end) {
            let temp = end;
            end = first;
            first = temp;
        }
        if (first == -1 && end == -1) {
            return arr;
        } else if (first == -1) {
            arr.splice(end, arr.length - end + 1);
            return arr;
        } else if (end == -1) {
            arr.splice(first, arr.length - first + 1);
            return arr;
        } else {
            arr.splice(first, end - first + 1);
            return arr;
        }

    }
    return [];
}

function getArrayFromStartToFinish_02(start = "0", finish = "100", arr = []) {
    if (Array.isArray(arr)) {
        let first = arr.findIndex(s => s == start);
        let end = arr.findIndex(f => f == finish);
        if (first > end) {
            let temp = end;
            end = first;
            first = temp;
        }
        if (first == -1 && end == -1) {
            return arr;
        } else if (first == -1) {
            return arr.slice(end, arr.length);            
        } else if (end == -1) {
            return arr.slice(first, arr.length);            
        } else {
            return arr.slice(first, end+1);
            
        }

    }
    return [];
}
console.log(`01 - ${getEvenNumbers(arrRandomNumbers)}`);
console.log(`02 - ${getItemsFromMarket()}`);
console.log(`03 - ${getAverage(arrRandomNumbers)}`);
console.log(`04 - ${changeArray()}`);
console.log(`05 - ${firstLast('last',animals)}`);
console.log(`05 - ${firstLast('first',animals)}`);
console.log(`06 - ${getSummArray(arrRandomNumbers)}`);
animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
console.log(`07 - ${getArrayFromStartToFinish_02('cow','dog', animals)}`);
animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
console.log(`07 - ${getArrayFromStartToFinish('cow','dog', animals)}`);

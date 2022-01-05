function filtraPares(arr){
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}

const arr = [2, 5, 8, 16, 7, 55, 54 ];

console.log(filtraPares(arr));
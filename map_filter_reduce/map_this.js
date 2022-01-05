const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArgs){
    return arr.map(function(item){
        return item * this.value;
    }, thisArgs);
}
const arr = [1,2];
console.log('This -> maçã ' + mapComThis(arr, maca));
console.log('This -> laranja ' + mapComThis(arr, laranja));
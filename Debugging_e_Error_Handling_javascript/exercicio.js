function validaArray(arr, num){

    try {
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr !== "object") throw TypeError("Array precisa ser do tipo object");
    
        if(typeof num !== "number") throw TypeError("Num precisa ser do tipo number");
    
        if(arr.length != num) throw new RangeError("Tamanho inválido");
    
        return arr;        
        
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um erro de ReferenceError!");
            console.log(e.message)
        }else if (e instanceof TypeError) {
            console.log("Este erro é um erro de TypeError!");
            console.log(e.message)
        }else if (e instanceof RangeError) {
            console.log("Este erro é um erro de RangeError!");
            console.log(e.message)
        }else {
            console.log("Tipo de erro inesperado" + e);
        }
        
    }
    
}

console.log(validaArray([1,2,3,4,5], 5));
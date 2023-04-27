const pedirAumento = new Promise((resolve,reject)=> {
    const tiempo = 10;
    if(tiempo >= 10){
         resolve('Ya tengo el tiempo para pedir un aumento de sueldo');
    }else{
        reject('Todavia no puedo pedir aumento no tengo la antiguedad');
    }
});
console.log(pedirAumento);
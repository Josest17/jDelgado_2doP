let suma = 0;

function calculoPar(x) {
    if (x == 7){
        suma += 3;
    }
    else if (x%2 == 0){
        suma += 2;
    }
    else {
        suma += 1;
    }
}

function sumaArreglo(x) {
    let i = 0;
    for(let list of x){
        calculoPar(x[i]);
        i +=1;
    }
    console.log(`Entrada: [${x}] 👉 resultado: ${suma}`);
    suma = 0;
}

let arregloPrueba = [1,2,3,4,5];
let arregloPrueba2 = [17,19,21];
let arregloPrueba3 = [7,7,7];
sumaArreglo(arregloPrueba)
sumaArreglo(arregloPrueba2)
sumaArreglo(arregloPrueba3)
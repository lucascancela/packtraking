let cuentaAtras = numero => {
    //base case
    if (numero == 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
//console.log(cuentaAtras(5))

function par_impar(numero){
    if(numero==1){
        return "impar";

    }else if(numero==0){
        return "par";
    }else{
        return par_impar(numero-2);
    }
}
//console.log(par_impar(10101));
// console.log("palique");
    /*existe var: se puede usar en todo el programa
            let: se puede usar nomas por donde lo declare(?)
            const: no se puede cambiar nunca, si se cambia tira error    
    */ 

            var numero = 5;
            var numero2 = 17;
        
            console.log("la suma da " + (numero + numero2));
        
            numero++;  //se le suma 1
            console.log(numero);
        
            numero--;  // se le resta 1
        
            //sacar el resto de una division:
            var resto;
            resto = 11 % 3;
            console.log(resto);
        
            //sumarle a una variable de otra fomra
            numero += 12;     // es lo mismo que hacer:   numero = numero + 12;   (pasa lo mismo con -= y se resta, y tmb con *= y /=)
        
            
            // .length es para saber el numero de caracteres q tiene un string
        
            // var palabra = "hola";
            // len = palabra.length;
        
            // console.log(len);
        
        //funcion
        
        function oracion(adjetivo, sustantivo, verbo, adverbio)
        {
            var resultado = "";
            resultado += "el " + adjetivo + " " + sustantivo + " " + verbo + " a la tienda " + adverbio;
            
            return resultado;
        }
        
        console.log(oracion("gran", "ladron", "corrio", "rapidamente"));
        console.log(oracion("super", "perro", "ladro", "fuertemente"));
        
        
        //listas (arrays)
        
        // var miLista = ["hola", 3, 3.54, "naranja"];
        // var listaGrande = [miLista, ["kajhsb", 9182], ["oui", 309, "knad"]];
        
        
        var lista = [50, 60, 70, 13];
        var valorLista = lista[0];    // aca ocnsigo el primer valor de la lista de arriba y si ponog consolelog me da "50" q es el primer valor
        
        // console.log(valorLista);
        
        lista[0] = 1;       //cambiar el valor de una variable dentro de una lsita
        // console.log(lista);
        
        lista.push(["hola" , 23, "oi"]);    // le meto algo a la lista q llame, q en ese caso le pongo otra lsta
        
        var listaGrande = [["oiuad", 8237], [36, "jdksa", "hdkd"]];
        
        var sacarDeLista = []
        sacarDeLista += "  lista grande: "  + listaGrande.pop(); // te borra la ultima lista de una lista con listas dentro. La lista q saca de la lista grande, la guarda en la variable sacardelista
        sacarDeLista += "  lista grande: "  + listaGrande.shift(); //shift es lo mismo q pop, pero en vez de la ultima, agarra la primera
        //                  ESTO DE ARRIBA TMB FUNCIONA EN LISTA NORMAL
        
        // console.log(sacarDeLista);
        // console.log(listaGrande);
        
        lista.unshift("hola", 32);
        listaGrande.unshift(["kuabd", 2863]);
        

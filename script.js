let cuenta ="0";
let cuenta2=0;
let operator="0";
let tado=0;
let redo=0;
let des=1;
console.log(cuenta, typeof cuenta);
console.log(cuenta, typeof cuenta, cuenta.search("1"));

function addone(){ 
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "1";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "1";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addtwo(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "2";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "2";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addthree(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "3";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "3";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addfour(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "4";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "4";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addfive(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "5";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "5";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addsix(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "6";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "6";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addseven(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "7";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "7";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addeight(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "8";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "8";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function addnine(){
    console.log(redo);
    if(redo === 0){
        cuenta = cuenta + "9";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }  
    AC();
    cuenta = cuenta + "9";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    redo=0;
}
function AC(){
    cuenta="0";
    cuenta2=0;
    operator="0";
    tado=0;
    redo=0;
    document.getElementById("display").innerHTML="0";
}
function addzero(){
    if(cuenta != "0" && redo === 0){

        cuenta = cuenta + "0";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }
    console.log("no entra");
    cuenta="0";
    redo =0;
    document.getElementById("display").innerHTML=0;
    }
function addpoint(){ 
    console.log(cuenta,cuenta.includes("."), redo === 0);
    if(cuenta.includes(".") === false)
    {
        if (redo === 1){
            AC();
            cuenta = cuenta + ".";
            document.getElementById("display").innerHTML=cuenta.slice(1);
            return 0;
        }
        console.log("entra");
        cuenta = cuenta + ".";
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }


}
function plus(){
    if(redo === 1){
        cuenta2=parseFloat(tado);
        cuenta="0";
        operator="+";
        document.getElementById("display").innerHTML="0";
        console.log(operator);
        console.log(cuenta, cuenta2);
        redo=0;
        return 0;
    }
    cuenta2=parseFloat(cuenta);
    cuenta="0";
    operator="+";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
    console.log(cuenta, cuenta2);
}
function minus(){
    if(redo === 1){
        cuenta2=parseFloat(tado);
        cuenta="0";
        operator="-";
        document.getElementById("display").innerHTML="0";
        console.log(operator);
        console.log(cuenta, cuenta2);
        redo=0;
        return 0;
    }
    cuenta2=parseFloat(cuenta);
    cuenta="0";
    operator="-";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
    console.log(cuenta, cuenta2);
    
    console.log(cuenta, cuenta2);
}
function times(){
    if(redo === 1){
        cuenta2=parseFloat(tado);
        cuenta="0";
        operator="*";
        document.getElementById("display").innerHTML="0";
        console.log(operator);
        console.log(cuenta, cuenta2);
        redo=0;
        return 0;
    }
    cuenta2=parseFloat(cuenta);
    cuenta="0";
    operator="*";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
    console.log(cuenta, cuenta2);
}
function divid(){
    if(redo === 1){
        cuenta2=parseFloat(tado);
        cuenta="0";
        operator="/";
        document.getElementById("display").innerHTML="0";
        console.log(operator);
        console.log(cuenta, cuenta2);
        redo=0;
        return 0;
    }
    cuenta2=parseFloat(cuenta);
    cuenta="0";
    operator="/";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
    console.log(cuenta, cuenta2);
}
function DEL(){

    console.log(cuenta.length);
    if(cuenta.length>2 && redo === 0){
        console.log("si entra");
        cuenta=cuenta.slice(0,-1);
        console.log(cuenta);
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }
    console.log("no entra");
    AC();

}
function plusmin(){
    if(redo === 1){
        cuenta=-1 * parseFloat(tado);
        redo=0;
        document.getElementById("display").innerHTML=cuenta;
        return 0;
    }
    cuenta=-1 * cuenta;
    document.getElementById("display").innerHTML=cuenta;
}
function res(){
    if(redo != 1){
        redo=1;
        console.log(cuenta2,typeof cuenta2,cuenta, typeof cuenta2);
        console.log(operator);
        switch(operator){
        
            case "+" :
                tado= cuenta2 + parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                console.log(cuenta,operator,cuenta2,"=",tado);
                break;
            case "-" :
                tado= cuenta2 - parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                break;
            case "*" :
                tado= cuenta2 * parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                break;
            case "/" :
                tado= cuenta2 / parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                break;
            default:
            }
        return 0;
    }
        console.log(cuenta2,typeof cuenta2,cuenta, typeof cuenta2);
        console.log(operator);
        cuenta2=tado;
        switch(operator){
        
            case "+" :
                tado= cuenta2 + parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                console.log(cuenta,operator,cuenta2,"=",tado);
                break;
            case "-" :
                tado= cuenta2 - parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                break;
            case "*" :
                tado= cuenta2 * parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                break;
            case "/" :
                tado= cuenta2 / parseFloat(cuenta); 
                document.getElementById("display").innerHTML=tado;
                break;
            default:
            }
        return 0;
}
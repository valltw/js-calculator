let cuenta ="0";
let cuenta2=0;
let operator="0";
let tado=0;
// let primerDato=0;
console.log(cuenta, typeof cuenta);
console.log(cuenta, typeof cuenta);

function addone(){    
    cuenta = cuenta + "1";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addtwo(){

    cuenta = cuenta + "2";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addthree(){
    
    cuenta = cuenta + "3";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addfour(){
    
    cuenta = cuenta + "4";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addfive(){
    
    cuenta = cuenta + "5";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addsix(){
    
    cuenta = cuenta + "6";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addseven(){
    
    cuenta = cuenta + "7";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addeight(){

    cuenta = cuenta + "8";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function addnine(){
    
    cuenta = cuenta + "9";
    console.log(cuenta.slice(1));
    document.getElementById("display").innerHTML=cuenta.slice(1);
}
function AC(){
    cuenta="0";
    cuenta2=0;
    operator="0";
    tado=0;
    document.getElementById("display").innerHTML="0";
}
function addzero(){
    if(cuenta>0){

        cuenta = cuenta + "0";
        console.log(cuenta.slice(1));
        document.getElementById("display").innerHTML=cuenta.slice(1);

    }
    }
// function addpoint(){ 
//     if(cuenta.search(".") === -1)
//     {
//         cuenta = cuenta + ".";
//     console.log(cuenta.slice(1));
//     document.getElementById("display").innerHTML=cuenta.slice(1);
//     }
    
// }
function plus(){
    cuenta2=parseFloat(cuenta);
    cuenta=0;
    operator="+";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
      
    
    console.log(cuenta, cuenta2);
}
function minus(){
    cuenta2=parseFloat(cuenta);
    cuenta=0;
    operator="-";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
      
    
    console.log(cuenta, cuenta2);
}
function times(){
    cuenta2=parseFloat(cuenta);
    cuenta=0;
    operator="*";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
      
    
    console.log(cuenta, cuenta2);
}
function divid(){
    cuenta2=parseFloat(cuenta);
    cuenta=0;
    operator="/";
    document.getElementById("display").innerHTML="0";
    console.log(operator);
      
    
    console.log(cuenta, cuenta2);
}
function DEL(){

    console.log(cuenta.length);
    if(cuenta.length>2){
        console.log("si entra");
        cuenta=cuenta.slice(0,-1);
        console.log(cuenta);
        document.getElementById("display").innerHTML=cuenta.slice(1);
        return 0;
    }
    console.log("no entra");
    cuenta="0";
    document.getElementById("display").innerHTML="0";
               

}
function res(){
    switch(operator){
        case "+" :
            tado= cuenta2 + parseFloat(cuenta); 
            cuenta=tado;
            document.getElementById("display").innerHTML=tado;
            break;
        case "-" :
            tado= cuenta2 - parseFloat(cuenta); 
            cuenta=tado;
            document.getElementById("display").innerHTML=tado;
            break;
        case "*" :
            tado= cuenta2 * parseFloat(cuenta); 
            cuenta=tado;
            document.getElementById("display").innerHTML=tado;
            break;
        case "/" :
            tado= cuenta2 / parseFloat(cuenta); 
            cuenta=tado;
            document.getElementById("display").innerHTML=tado;
            break;
        default:
    }
   
}
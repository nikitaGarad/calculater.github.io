function calculator(number){
    result=document.getElementById("inputext");
    result.value +=number;
}


function equal(){
    result.value=eval(result.value);
}

function clr(){
    result.value=" ";
}

function del(){
   result.value=result.value.slice(0,-1);
   
}
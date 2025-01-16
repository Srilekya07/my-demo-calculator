let string="";
let textField=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
let records=[];

buttons.forEach((e)=>{
    e.addEventListener('click', f);        
})


function f(buttons){
    if (buttons.target.innerHTML=='AC') {
        textField.value="";
        string="";
    }
    else if(buttons.target.innerHTML=='❌'){
        let temp=textField.value.toString();
        textField.value=temp.slice(0,string.length-1);
        string=textField.value;
    }
    
    else if (buttons.target.innerHTML=='='){
        let result=execute(textField.value);
        textField.value=result;
        string=result;
        records.push(string);
    }
    
    else if(buttons.target.innerHTML=='x^x'){
        let res=execute(Math.pow(textField.value,textField.value));
        textField.value=res;
        string=res;
        records.push(string);
    }

    else if(buttons.target.innerHTML=='log'){
        let res=execute(Math.log10(textField.value));
        textField.value=res;
        string=res;
        records.push(string);
    }
    
    else if(buttons.target.innerHTML=='exp'){
        let res=execute(Math.exp(textField.value));
        textField.value=res;
        string=res;
        records.push(string);
    }
    
    else if(buttons.target.innerHTML=='ln'){
        let res=execute(Math.log(textField.value));
        textField.value=res;
        string=res;
        records.push(string);
    }

    else if(buttons.target.innerHTML=='sqrt'){
        let res=execute(Math.sqrt(textField.value));
        textField.value=res;
        string=res;
        records.push(string);
    }

    else{
        string+=buttons.target.innerHTML;
        textField.value=string;
    }
}



function execute(expression){
    try {
        return eval(expression);
    } catch (error) {
        console.log(error);
        return 'Error';
    }
}

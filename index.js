var inputval = "";
let input = document.querySelector('#input');
let output = document.querySelector('#output');

let btn = document.querySelectorAll('.btn');

        for (let index = 0; index <btn.length ; index++) {
            btn[index].addEventListener("click",()=>{
                btn[index].classList.add('pressed');
                
                setInterval(() => {
                    btn[index].classList.remove('pressed');
                }, 150);
            })}

for (let index = 0; index < btn.length; index++) {
    let a = btn[index];
    a.addEventListener("click", ()=> {
        inputval+=a.innerHTML;
        input.value = inputval;
    })
    // animationButton(a.innerHTML);
}

function iskey(key){
    if(key=="1" ||key=="2" ||key=="3" ||key=="4" ||key=="5" ||key=="6" ||key=="7" ||key=="8" ||key=="9" ||key=="0" ||key=="+" ||key=="-" ||key=="*" ||key=="/" ||key=="." || key == "c" || key == "C" || key=="("||key==")"){
        return true;
    }
    else{
        return false;
    }
}

document.addEventListener("keypress", event=> {
    inputval+=event.key;
    input.value = inputval;
    if(event.key == "c" || event.key == "C"){
        reset();
    }
    if(event.key == "Enter"){
        removech();
        removech();
        removech();
        removech();
    }
    if(!iskey(event.key)){
        alert('Enter a valid value🙂');
        removech();
    }
})

function removech(){
    inputval = inputval.substring(0 , inputval.length - 1);
    input.value = inputval;
}

function ans(){
    let a = eval(inputval);
    output.value = a;
}

function reset(){
    inputval = "";
    input.value = inputval;
    output.value = inputval;
}


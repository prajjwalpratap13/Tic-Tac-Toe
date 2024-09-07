let turn="X";
const changeTurn=()=>{
    if(turn==="X"){
        turn="0";
    }
    else{
        turn="X";
    }
    return turn;
}

const checkWin=()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let boxtext=document.getElementsByClassName("boxpart");
    wins.forEach(result=>{
        if(boxtext[result[0]].innerText===boxtext[result[1]].innerText && boxtext[result[1]].innerText===boxtext[result[2]].innerText && boxtext[result[0]].innerText!==""){
            document.querySelector(".win").innerText= boxtext[result[0]].innerText+" Win\nPress Reset button to restart";
            document.querySelector(".win").classList.remove("none");
            document.querySelector("img").classList.remove("excited");
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(val =>{
let boxFill=val.querySelector('.boxpart');
val.addEventListener('click',()=>{
    if(boxFill.innerText===''){
        boxFill.innerText=turn;
        turn=changeTurn();
        checkWin();
    }
})
})

let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let boxcontent=document.querySelectorAll(".boxpart");
    Array.from(boxcontent).forEach(element=>{
        element.innerText="";
        turn="X";
        document.querySelector(".win").classList.add("none");
        document.querySelector("img").classList.add("excited");
    })
})
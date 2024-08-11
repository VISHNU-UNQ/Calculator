// By using qurey selector we can select any selctor.
let input = document.querySelector('input')

let getValue = (e)=>{
    let btnVal=e.target.innerText;
    input.value+= btnVal
    //  here + we doing because for not to update the value.
}

let result = ()=>{
    //  here eval is a inbuilt function which is used to perform function.
    input.value= eval(input.value)
}

// //! Seperate functions for ()=) and (ce) (numbers,symbols)

let empty = ()=>{
    input.value=""
}





//Shortcut.
// let input = document.querySelector('input')
// let getValue=e=>{input.value += e.target.innerText}
// let result 


// let input=document.querySelector('input')
// // console.log(input)

// let getValue=(e)=>{
//     console.log(e.target)
// }
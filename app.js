let inputValue = document.getElementById('value');


// function add() {
//     let value = inputValue.value;
//     console.log(value);
    
// }

let arr = [];
let arrayLength = arr.length


function add() {    
    let value = inputValue.value;
    if (value == "") {
    alert('Please fill input')
}
else{
    
    
    arr.push(inputValue.value)
    console.log(arr);
    inputValue.value = "";
    
    function lists() {

        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            
           
        }
    let ul = document.getElementById('ul');
    ul.innerHTML += `<li>${value} <button onClick="edit()">Edit</button> <button onClick="del()">Del</button></li><br>` 
    // console.log(value);
     
}
    lists()
   

}
  
}
function edit(){
        console.log(`edit`);
        
    }    
    function del(){
        console.log('del');
        
    }


function clearlists() {
   let ul = document.getElementById('ul');
    ul.innerHTML = ` ` 
}
let clear = document.getElementById('clear').addEventListener('click', function(){
    arr.splice(0,arr.length)
    console.log(arr);
    
    clearlists()
})



//Задача 1
function showMessage(){
    if (a>0) 
    {
       return true;
    } else 
    {
       return confirm();
    }
}
let a = prompt('a');
if (a>0) {
    alert('!');
} else {
    alert ('!!');
}
//Задача 2
var arr = [];
for (i=1; i<= 10; i++){
    arr [i]='x';
}
console.log(arr);
//Задача 3
//функция которая считает и выводит количество своих вызовов
function makeCounter() {
    let count =1;
    return function(){
        return count++;
    }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



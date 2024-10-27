//case1:-

let number = max(1,2);
function max(a,b){
    if (a > b) return a;
    else return b;
}
console.log(number);


//case2:- 

let num = max(3,3);
console.log(num);

function max(a,b){
    if (a > b) return a;
    return b;
}

//case3:-

let numb = max(5,3);
console.log(numb);
function max(a,b) {
    return (a > b)? a : b;
}

// let array=[1,2,3,4,5,6,7];
// let product=array[4];
// console.log(product);

// let array =['apple','xioami','redmi','samsung'];
// let myChoice=array[0];
// console.log(myChoice);

// array.push('Oneplus','Google');
// console.log(array);
// array.pop();
// console.log(array);
// console.log(array.length);

// array[5]='poco';
// console.log(array);

// array.unshift('poco');
// console.log(array);

// array.shift();
// console.log(array);

// array.sort();
// console.log(array);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 70, 30, 90];

function comp(a, b) {
    return a - b;
}
number.sort(comp);
console.log(number);
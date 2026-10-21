let arr1 = new Array()
let arr2 = [];

arr1 [0] = 10;
arr1 [1] = 20;
arr1 [2] = 30;
arr1.psuh(40);

arr2 [0] = 10;
arr2 [1] = 20;
arr2 [2] = 30;
arr2.psuh(40);

let result = [];

for (let i = 0; i < 100; i++) {
    result = [...result, i + 1]
}

console.log((result));

result.push(i);

arr2 = [...arr1,...arr2, 50];
console.log(arr1, arr2);
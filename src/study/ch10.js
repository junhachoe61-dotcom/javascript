// 비동기 동작을 위한 Promise

console.log(1);
console.log(2);
console.log(3);
// setTimeout(() => console.log(4), 1000);
console.log(5);

const p1 = new Promise((resolve, reject) => {
    console.log("프로미스 생성");
    resolve(10);
});

p1.then((result) => {
    console.log(result);
    return 30;
}).then((result) => {
    console.log(result);
});

const p2 = new Promise((resolve, reject) => {
    console.log("프로미스 생성2");
    resolve(20);
});

p2.then((result) => {
    console.log(result);
    return 40;
}).then((result) => {
    console.log(result);
});


new Promise((resolve, reject) => {
    resolve("1단계");
}).then((result) => {

    console.log(result);

    new Promise((resolve,require) => {
        resolve("2단계");
    }).then((result) => {

        console.log(result);

    })
});






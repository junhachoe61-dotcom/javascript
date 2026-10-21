/*

1.

function calculate(a, b, callback) {
    // TODO: a와 b를 더한 값을 구한 뒤, 그 결과를 callback 함수의 인자로 전달해 실행하세요.
}

function a1() {
    console.log(a);
}

function b1() {
    console.log(b);
}

function c(callbackA) {
    callbackA();
    console.log("c 함수로출");
}

calcaulate(3, 5, function(result) {
    console.log('결과는 ${result}입니다');

c(a1 + a2);

// 테스트 코드
calculate(3, 5, function(result) {
    console.log(`결과는 ${result}입니다`);
});



2.

function checkAdult(name, age, adultCallback, minorCallback) {
    // TODO: 나이가 20세 이상이면 adultCallback(name)을, 아니면 minorCallback(name)을 실행하세요.
}

function checkAdult(name, age, adultCallback, minorCallback) {
    if (age > 20) {
        adultCallback(name);
    } else {
        minorcallback(name);
    }
}





// 테스트 코드
checkAdult("철수", 25,
    function(name) { console.log(`${name}님은 성인입니다. 입장이 가능합니다!`)},
    function(name) { console.log(`${name}님은 미성년자입니다. 보호자가 필요해요.`)}
);



3.

function processArray(arr, callback) {
    // TODO: 반복문을 사용하여 배열의 각 요소를 순회하며 콜백 함수에 요소를 전달해 실행하세요.
}

3-1

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}


3-2

function processArray(arr, callback) {
    for (let n of arr) {
        callback(n);
    }
}


// 테스트 코드
processArray([1, 2, 3, 4], function(item) {
    console.log(item * 2);
});

 */


    // TODO: setTimeout을 사용하여 seconds(초) * 1000 밀리초 뒤에
    // message를 출력하고 콜백 함수를 실행하세요.


function delayedMessage(message, seconds, callback) {
    console.log(message);
    setTimeout(callback, seconds * 1000);
    console.log("여기 실행!!")
}

// 테스트 코드
delayedMessage("안녕하세요!", 2, function() {
    console.log("콜백 함수가 실행되었습니다!");
});

function call(num) {
    console.log(num);
}

for (let i = 0; i < 10; i++) {
    console.log(`index: ${i}`);
    setTimeout(function () {
        call(i + 1)
    }, (i + 1) * 1000);
}

function step1(callback) {
    function timeoutCallback() {
        console.log("1단계 완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

function step2(callback) {
    function timeoutCallback() {
        console.log("2단계 완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

function step3(callback) {
    function timeoutCallback() {
        console.log("3단계 완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

step1(function () {
    step2(function () {
        step3(function () {
            console.log("마지막 콜백!")
        })
    })
})

// 화살표 함수

function sum(a, b) {
    return a + b;
}

const sum2 = function (a, b) {
    return a + b;
}

const sum3 = (a, b) => {
    return a + b;
}

// 실행코드 하나이면  중괄호 생략가능
const sum4 = (a, b) => a + b;
console.log(sum4(10, 20));

const sum5 = (a, b) => console.log(a, b);
sum5(20, 30);

// 매개변수의 갯수가 하나면 () 생략가능
const sum6 = a => console.log(a + a);
sum6(100);

setTimeout(() => {console.log("화살표함수 호출")}, 1000);

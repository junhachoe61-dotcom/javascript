let score = 85;

if (score > 89) {
    console.log("A");
} else if (score > 79) {
    console.log("B");
} else if (score > 69) {
    console.log("C");
} else if (score > 59) {
    console.log("D");
} else {
    console.log("F");
}

console.log(Math.floor(score/10));

switch (score/10) {
    case 10:
    case 9:
        console.log("A")
        break;
    case 8:
        console.log("B")
        break;
    case 7:
        console.log("C")
        break;
    case 6:
        console.log("D")
        break;
    default:
        console.log("F")
}

import readlineSync from 'readline-sync';

while (true) {
    const input = readlineSync.question(decodeURI("input: "));

    if (input === "q") {
        break;
    } else if (input === "a1") {
        console.log("a1를 선택");
    } else if (input === "a2") {
        console.log("a2를 선택");
    } else {
        console.log("다시입력");
    }

    console.log(input);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
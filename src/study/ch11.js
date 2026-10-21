// console.log(1)
// new Promise(() => {
//     console.log(2);
// });
//
// console.log(3)
// new Promise(() => {
//     console.log(4);
// });
//
// new Promise((resolve) => {
//     console.log(5);
//     resolve(6);
// }).then(r => console.log(r))
//
// new Promise((resolve) => {
//     console.log(7);
//     resolve(8);
// }).then(r => console.log(r))
//
// new Promise((resolve) => {
//     console.log(5);
//     resolve(6);
// }).then(r => {
//     console.log(r);
//     return 9;
// }).then(r => {
//     console.log(r);
// });
//
// new Promise((resolve) => {
//     console.log(11);
//     resolve(12);
// }).then(r => console.log(r))
//
// new Promise((resolve) => {
//     console.log(13);
//    resolve (14);
// }).then(r => {
//     console.log(r);
//     return 15;
// }).then(r => {
//     console.log(r);
//     return 16;
// }).then(r => {
//     console.log(r)
// });
//
// new Promise((resolve, reject) => {
//     console.log(17);
//     reject (18);
// }).catch(r => {
//     console.log(r);
//     throw 19;
//     // return 19;
// }).catch(r => {
//     console.log(r);
//     throw 20;
// }).catch(r => {
//     console.log(r)
// });

function getUserOfController(username) {
    console.log("서버로 사용자 정보 요청 받음");
    const response = {
        status: 200,
        data: {
            username: username,
            password: "12345",
            name: "김준일",
            email: "test@gmail.com",
        },
        requestAddress: "192.168.0.109",
        requestHeader: "https-only",
    }

    if (!(username ?? "").trim()) {
        return{
            ...response,
            status: 400,
            data: {
                message: "사용자 정보를 확인하세요.",
            }
        }
    }

    return response;

}

function getUser(username) {
    return new Promise((resolve, reject) => {

        console.log("서버로 사용자 정보 요청");
        const response = getUserOfController(username)
        if (response.status !== 200) {
            reject(response.data);
            return;
        }
        resolve(response.data);
    });
}

console.log("전체 렌더링 시작.");
getUser("test-user").then(responseData => {
    console.log(responseData);
}).catch(error => {
    console.log(error);
});
console.log("다른 요청2.");
console.log("다른 요청3.");
console.log("전체 렌더링 종료.");
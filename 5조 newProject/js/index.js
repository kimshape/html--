let target = document.querySelector("#dynamic");

function randomString(){
let stringArr = ["당신이 찾던, 그 곳.", "당신이 찾던, 그 호텔.","당신이 찾던, 그 스파.", "당신이 찾던, 그 풀빌라.", "바로, 여기!" ]
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
let selectStringArr = selectString.split("");
return selectStringArr;
}
//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());

}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
if(randomArr.length>0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
        dynamic(randomArr);
    },150);
}else{
    setTimeout(resetTyping,500);
}
}

dynamic(randomString())

console.log(selectString)
console.log(selectStringArr)


//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);










// let target = document.querySelector("#dynamic");

// function randomString(){
// let stringArr = ["당신이 찾던, 그 곳.", "당신이 찾던, 그 호텔.","당신이 찾던, 그 스파.", "당신이 찾던, 그 풀빌라.", "바로, 여기!" ]
// let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
// let selectStringArr = selectString.split("");
// return selectStringArr;
// }
// //타이핑 리셋
// function resetTyping(){
//     target.textContent = "";
//     dynamic(randomString());

// }

// //한글자씩 텍스트 출력 함수
// function dynamic(randomArr){
// if(randomArr.length>0){
//     target.textContent += randomArr.shift();
//     setTimeout(function(){
//         dynamic(randomArr);
//     },200);
// }else{
//     setTimeout(resetTyping,2000);
// }
// }

// dynamic(randomString())

// console.log(selectString)
// console.log(selectStringArr)


// //커서 깜빡임 효과
// function blink(){
//     target.classList.toggle("active");
// }
// setInterval(blink, 100);

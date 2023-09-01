// [알고리즘] 최소 공배수의 합
// 양의 정수의 배열 arr이 주어질 때 모든 원소들이 둘 씩 짝지어 생기는 최소공배수를 합한 값을 리턴하는 solution 함수를 작성해주세요.

// 🚩 [제한사항]
// - arr 내 원소들은 중복되지 않습니다.
// - arr 배열의 길이는 최소 3입니다.
// - 입출력 예 : [ 1 , 2 , 3 ] → ( {1 | 2} → 2 + { 1 | 3 } → 3 + { 2 | 3 } → 6 ) = 11

//입력: arr

function getGCD(num1, num2) {

    let gcd = 1;

    let max = 0;

    max = (num1>num2)?num2 : num1;

    for (let i=2; i<=max; i++) {

        gcd = ((num1%i==0)&&(num2%i==0))?i : gcd;

    }

    return gcd;

}

function solution(arr) {

    let lcm = 1;

    let sum = 0;

    let arrLen = arr.length;

    for (let i=0; i<arrLen; i++) {

        for (let j=1; j<arrLen-i; j++){

            lcm = arr[i] * arr[i+j] / getGCD(arr[i], arr[i+j]);

            sum = sum + lcm;

        }

    }

    return sum;

}

var answer = solution(arr);
console.log(answer);
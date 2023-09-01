// [알고리즘]소수의 합
// 양의 정수인 a값이 주어질 때 1부터 a값 이하에 존재하는 모든 소수의 합을 리턴하는 solution 함수를 작성해주세요.

// 🚩 [제한사항]
// - 소수란 1과 자기 자신으로만 나눠지는 수 입니다. ( 1인 소수가 아닙니다. )
// - a는 최소 4부터 주어집니다.
// 🚩 [입출력 예]
// a : 5 → 10
// a : 10 → 17
// a : 30 → 129

//입력: a, 출력: answer

function isPrime(num) {

    for (let i=2; i<=(num/2); i++) {

        if (num%i == 0) return false;

    }

    return true;

}

function solution(a) {

    let sum = 0;

    for (let i=2; i<=a; i++) {

        if (isPrime(i)) {

            sum = sum + i;

        }

    }

    return sum;

}

var answer = solution(a);
console.log(answer);
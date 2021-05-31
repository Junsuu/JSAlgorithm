function solution(numbers, target) {
    let answer = 0;
    recursive(0, 0);

    function recursive(x, value){
        if (x < numbers.length) {
            recursive(x + 1, value + numbers[x]);
            recursive(x + 1, value - numbers[x]);
        } else {
            if (value == target) {
                answer++
            }
        }
    }

    return answer;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;
console.log(solution(numbers,target))
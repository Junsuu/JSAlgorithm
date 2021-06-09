function solution(numbers) {
    let answer = numbers.map(v => v + '')
    answer.sort((next, prev) => {
        console.log(`prev :  ${prev}      |  next :  ${next}`)
        return (prev+next)*1 - (next+prev)*1
    })
    answer.join('');
    return answer[0]==='0'?'0':answer;;
}

// let numbers = [6, 10, 2]
// "6210"
let numbers = [ 30 , 5, 34,9,10,32,3,44]
// "9534330"

console.log(solution(numbers));
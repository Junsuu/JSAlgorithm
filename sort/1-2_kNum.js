//NOTE: array.slice() 함수는 start는 포함 end는 미포함이다..
//NOTE: javascript sort() 함수 compareFuction 매개변수 안주면 유니코드 포인터 순서로 문자열 비교 정렬
// sort 쓸때 인자로 꼭 함수 전달하자 ... 오름차순 정렬일때도..
// arrray = [1,30,4,21,10000]
// array.sort()
// array = [1,10000,21,30,4]

function solution(array, commands) {
    var answer = [];
    let copy = array.slice();

    for (let i = 0; i < commands.length; i++){
        let target = copy.slice(commands[i][0] - 1, commands[i][1]).sort((a,b)=> a-b)
        answer.push(target[commands[i][2] - 1]);
    }
    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
console.log(solution(array, commands));
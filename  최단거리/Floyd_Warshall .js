const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
    })
    .on('close', function () {
        solution(input);
         process.exit();
    });

// let exInput = [
//     '5',
//     '14',
//     '1 2 2',
//     '1 3 3',
//     '1 4 1',
//     '1 5 10',
//     '2 4 2',
//     '3 4 1',
//     '3 5 1',
//     '4 5 3',
//     '3 5 10',
//     '3 1 8',
//     '1 4 2',
//     '5 1 7',
//     '3 4 2',
//     '5 2 4',
// ]
//NOTE: 정답
// 0 2 3 1 4
// 12 0 15 2 5
// 8 5 0 1 1
// 10 7 13 0 3
// 7 4 10 6 0

// solution(exInput);
function solution(inputArr) {

    let nodeNum = parseInt(inputArr[0]);
    let lineNum = parseInt(inputArr[1]);
    let cost = [];
    let resultArr = [];

    for (let i = 2; i < inputArr.length; i++){
        cost.push(inputArr[i]);
    }

    resultArr = setCost(resetArr(nodeNum), cost);
    let answer = floydWarshall(resultArr);

    printAnswer(answer);


    function printAnswer(answer) {
        for (let i = 0; i < answer.length; i++){
            let message = '';

            for (let j = 0; j < answer.length; j++){
                if (answer[i][j] === Infinity) {
                    message += 0
                } else {
                    message += answer[i][j]
                }

                if (j !== answer.length - 1) {
                    message += ' '
                }
            }
            console.log(message);
        }
    }

    // NOTE: 플로이드 워셜 알고리즘
    function floydWarshall(resultArr) {
        let resultCopy = resultArr.slice();

        for (let k = 0; k < resultCopy.length; k++){
            for (let i = 0; i < resultCopy.length; i++){
                for (let j = 0; j < resultCopy.length; j++){
                    if (i === j) {
                        // 자기 자신 가중치는 0
                        resultCopy[i][j] = 0
                    } else {
                        resultCopy[i][j] = Math.min(resultCopy[i][j], resultCopy[i][k] + resultCopy[k][j]);
                    }
                }
            }
        }
        return resultCopy
    }


    //NOTE: input cost 적용
    function setCost(resultArr, cost) {
        let result = resultArr.slice();

        for (let i = 0; i < cost.length; i++){
            let index = cost[i].split(' ');
            index.forEach((item, idx) => {
                index[idx] = parseInt(item);
            })
            result[index[0] - 1][index[1] - 1] = Math.min(result[index[0] - 1][index[1] - 1], index[2])
        }
        return result
    }

    //NOTE: 배열 크기의 이차원 배열 infinite로 초기화
    function resetArr(n) {
        let resetArr = [];

        for (let i = 0; i < n; i++){
            let indexArr = [];

            for (let j = 0; j < n; j++){
                indexArr.push(Infinity);
            }
            resetArr.push(indexArr);
        }
        return resetArr
    }
}
function solution(n, computers) {
    var answer = 0;
    let searchQue = [];
    let finish = [];

    // 첫번째 인덱스 서치큐에 담기
    searchQue.push(0);
    // 완료조건 만족까지 루프
    while (finish.length !== computers.length) {
        // 큐 비어있음
        if (searchQue.length > 0) {
            dfs();
            // 마지막 한번때문에
            if (finish.length === computers.length) {
                answer += 1;
            }
        } else {
            answer += 1;
            //서치 큐에 완료되지않은 인덱스 넣어줘야한다.
            for (let i = 0; i < computers.length; i++){
                let nonSearchIndex = finish.find(e => {
                    return e === i
                });
                if (nonSearchIndex === undefined) {
                    searchQue.push(i);
                    break;
                }
            }
        }
    }
    //역할은 서치 큐에서 한개 뺴고 해당 배열 인덱스에서 연결되있는 친구 찾기;
    function dfs() {
        // 찾는 큐에서 deQue
        let current = searchQue.shift();
        // 해당 배열에서 자기 자신 빼고 enQue
        computers[current].forEach((item, idx) => {
            if (item === 1 && current !== idx) {
                // 피니쉬 배열에 있는지 체크
                let searchFinish = finish.find(element => {
                    return element === idx
                })
                // 피니쉬에 없으면 탐색큐에 넣기
                if (searchFinish == undefined) {
                    searchQue.push(idx);
                }
            }
        })
        finish.push(current);
    }
    return answer;
}

// let n = 8;
// let computers = [
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [1, 1, 1, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0]
// ]

// let n = 6;
// let computers = [[1, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 1], [1, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1]]

// let n = 6;
// let computers = [[1, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 1], [1, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1]]

let n = 3;
let computers = [[1,0,1],[0,1,0],[1,0,1]]
console.log(solution(n, computers))
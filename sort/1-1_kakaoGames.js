//TODO: 코드가 지저분함.. 리펙토링 할수 있을꺼 같음
// fail 떠서 tc 한개봄... ... ...;;;
function solution(N, stages) {
    var answer = [];
    // 스태이지 순으로 소팅
    let copyStages = stages.sort();
    let fail = [];
    //실패율 배열 0으로 초기화 
    for (let i = 0; i < N; i++){
        fail.push(0);
    }

    // 스테이지 별 유저카운트 셋팅
    for (let i = 0; i < copyStages.length; i++) {
        if (copyStages[i] !== N + 1) {
            fail[copyStages[i] - 1] += 1;
        }
    }
    // 실패율 배열 만들기
    let target = copyStages.length;
    for (let i = 0; i < fail.length; i++){
        //NOTE: 모든 사람이 도달하지않을 스테이지 0 / 기준 0 => NaN 뜸
        if (fail[i] !== 0) {
            let tmp = fail[i]
            fail[i] = fail[i] / target;
            target -= tmp;
        }
        let tmp = fail[i]
        fail[i] = fail[i] / target;
        target -= tmp;
    }

    // 각 인덱스별 맥스값 찾아서 return에 넣고 처리해준값은 -1 셋팅
    while (answer.length !== N) {
        let tmp = fail[0];
        let index = 0;

        for (let j = index + 1; j < fail.length; j++){
            if (tmp < fail[j]) {
                tmp = fail[j];
                index = j;
            }
        }
        answer.push(index + 1);
        fail[index] = -1;
    }
    return answer;
}

let n = 5;
let stages =  [1,2,2,1,3];
console.log(solution(n, stages));
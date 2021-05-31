function solution(progresses, speeds) {
    var answer = [];
    // js 에는 queue는 배열로 (push, shift)
    let progressQueue = progresses.slice();
    let speedQueue = speeds.slice();

    let dayCount = 0;
    
    // 큐 다뺄때 까지 뺑글뺑글
    while (progressQueue.length !== 0) {
        // 큐 헤드에 있는 값 걸리는 시간 계산
        dayCount = Math.ceil((100 - progressQueue[0]) / speedQueue[0]);
        // 하나씩 앞에서 빼주고 count 1 초기화
        progressQueue.shift();
        speedQueue.shift();
        let count = 1;

        // 같은 날 처리 되는 갯수만큼 뺑글뻉글 
        while (progressQueue[0] + (dayCount * speedQueue[0]) >= 100) {
            // 큐에서 빼주고 카운트 올리기
            progressQueue.shift();
            speedQueue.shift();
            count += 1;
        }
        answer.push(count);
    }


    return answer;
}

let progressess = [95, 90, 99, 99, 80, 99]
let speeds = [1, 1, 1, 1, 1, 1]
console.log(solution(progressess, speeds));

    //NOTE: 첫번째 코드
    // while (progressQueue.length !== 0) {
    //     // 큐 헤드에 잇는 값 걸리는 시간 계산
    //     dayCount = Math.ceil((100 - progressQueue[0]) / speedQueue[0]);
    //     let i = 1;

    //     while (progressQueue[i] + (dayCount * speedQueue[i]) >= 100) {
    //         i += 1;
    //     }
    //     answer.push(i);

    //     for (let j = 0; j < i; j++){
    //         progressQueue.shift();
    //         speedQueue.shift();
    //     }
    // }
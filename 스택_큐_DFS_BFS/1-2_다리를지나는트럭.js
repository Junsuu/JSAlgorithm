function solution(bridge_length, weight, truck_weights) {
    // 걸린시간
    let answer = 0;
    // 현재 상태큐
    let currentQue = [];
    // 완료된 트럭 리스트
    let finishQue = [];
    // 트럭 무게 카피 배열
    let truckArr = truck_weights.slice();
    // 현재 무게
    let current_weight = 0;

    // 완료 트럭 리스트가 length 만큼 될떄까지 뺑뺑이
    while (finishQue.length !== truck_weights.length) {
        // 1초 증가
        answer += 1;
        
        // 현재 큐랑 다리 길이 같으면 현재 큐에서 하나 빼기 (먼저 빼고 다음 조건 비교 해야함)
        if (currentQue.length === bridge_length) {
            let shiftTruck = currentQue.shift();
            // 0 넣은 값은 무시
            if (shiftTruck > 0) {
                finishQue.push(shiftTruck)
                current_weight -= shiftTruck;
            }
        }
        // length 체크 후 무게 검사해서 무게 초과면 0 넣고 아니면 트럭넣고
        if (current_weight + truckArr[0] <= weight) {
            let curTruck = truckArr.shift();
            currentQue.push(curTruck);
            current_weight += curTruck;
        } else {
            currentQue.push(0);
        }
    }
    return answer;
}


let bridge_length = 100;
let weight = 100;
let truck_weights = [10,10,10,10,10,10,10,10,10,10]

console.log(solution(bridge_length,weight,truck_weights))
function solution(key, lock) {
    let answer = false;
    let kc = key;
    let lc = lock;

    // lock 크기 만큼 key 만들기
    let distance = lc[0].length - kc[0].length;
    // 세로
    for (let i = 1; i <= distance; i++){
        for (let j = 0; j < kc.length; j++){
            kc[]
            // kc[(kc.length - 1) + i].push(0);
        }
    }
    console.log(kc);
    // 가로
    // for (let i = 0; i < key.length; i++){
    //     for (let j = 1; j <= distance; j++){
    //         kc[i].push(0);
    //     }
    // }

    debug(kc, lc);

    return answer;

    function rotateRight() {
        
    }

    function shift(firstDirect, secendDirect) {
        
    }

    function debug(kc, lc) {
        console.log(kc);
        console.log(lc);
    }
}

let key = [[0, 0, 0], [1, 0, 0], [0, 1, 1]]	;
let lock = [[1, 1, 1,1], [1, 1, 0,1], [1, 0, 1,1], [0, 0, 0,1]];

console.log(solution(key,lock));
// 回傳 1 + 2 + ... + n 的結果 
// O(1) for 迴圈 ( n 較小執行時間越快，反之)
function sum(n) {
    let sum =0;
    for (let i =0; i <= n; i ++){
        sum += i;
    }
    return sum;
}

// 測試結果
console.log(sum(1));
console.log(sum(2));
console.log(sum(10));
console.log(sum(100));

// 測試花費的時間(面試可能會考)
console.time('SUM1');
for(let i =0; i < 1000; i++){
    sum1(1000);
    // 拿 1000 跟 10 來試試看
}

console.timeEnd('SUM1');

// O(1) 公式解 ( n 較大的話，效能較高，反之)
function sum2(n) {
    return ((n + 1) * n) / 2;
    // (上底 + 下底) * 高 / 2
}

// 測試結果
console.log(sum(1));
console.log(sum(2));
console.log(sum(10));
console.log(sum(100));

// 測試花費的時間
console.time('SUM2');
for(let i =0; i < 1000; i++){
    sum2(1000);
}

console.timeEnd('SUM2');

// reduce (其實效能很慢，但看起來很潮...)
function sum3(n){
    [1,2,3,...n].reduce((sum, item) => sum + item, 0);
}

// recursive 版本 : 一直呼叫自己，直到結束
function sum4(n){
    if (n === 1) {
        return n;
    }
    return sum4(n - 1) + n;
}

console.log(sum4(10));
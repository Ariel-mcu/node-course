// 回傳 1 + 2 + ... + n 的結果 
function sum(n) {
    let sum =0;
    for (let i =0; i <= n; i ++){
        sum += i;
    }
    return sum;
}
console.log(sum(2));

const fs = require('fs');

// 讀檔案 => callback 呼叫函式
let result =  fs.readFile('test.txt', 'utf-8', function (err,data) {
    if(err){
        return err;
    }else{
        console.log(data);
    }
});
console.log(result);
const fs = require('fs');

// 讀檔案 => callback 呼叫函式
fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    // 錯誤了
    console.log('喔喔喔，發生錯誤了');
    console.error(err);
  } else {
    // 因為沒有 err，所以是正確的
    console.log(data);
  }
});


// function readFile(path, callback){
//     // 這裡會去讀檔案
//     callback(err, data);
//     // 呼叫(檔案, 資料)
// }







const fs = require('fs');

let p = new Promise((resolve, reject) => {
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
      // 錯誤了
      reject(err);
    } else {
      // 因為沒有 err，所以是正確的
      resolve(data);
    }
  });
});


// function readFile(path, callback){
//     // 這裡會去讀檔案
//     callback(err, data);
//     // 呼叫(檔案, 資料)
// }
p.then ((result) => {
    console.log(`resovle: ${result}`)
}).catch((error) => {
    console.log(error)
})

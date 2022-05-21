const fs = require('fs');

function getReadfilePromise(filepath) {
    return p = new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
          // 錯誤了
          reject(err);
        } else {
          // 因為沒有 err，所以是正確的
          resolve(data);
        }
      });
    });
  }


async function main(){
  
    // 可以在這裡拿到 promise 的結果 (偵錯寫法 try catch)
    try{
        let getRead =  await getReadfilePromise("test.txt");
        console.log(getRead);

        
    }catch(e){
        console.log('這裡是 try catch', e);
    }
  
  
    // 很漂釀的寫法
    // 可以在這裡拿到 promise 的結果
    // let resultBrush =  await doWork('刷牙', 3000);
    // console.log(resultBrush);
  
    // let resultEat =  await doWork('吃早餐', 5000);
    // console.log(resultEat);
  
    // let resultHW =  await doWork('寫功課', 3000);
    // console.log(resultHW);
  
  
  }
  main();

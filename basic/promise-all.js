let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
    let timer = Math.floor(Math.random() * 5000);
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

let doBrushPromise = doWork('刷牙', 3000);
let doEatPromise = doWork('吃早餐', 5000);
let doHWPromise = doWork('寫功課', 3000);

promises.all([doBrushPromise,doEatPromise,doHWPromise]).then((values) =>{
    console.log(values);
});
console.log('p: ', p); 
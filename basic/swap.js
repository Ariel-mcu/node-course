let a = 1; // 電腦會在記憶體放一個空間給 a，其值是 1
let b = 2;
// 如果 a 和 b 要交換不能直接寫 a = b;


console.log('before', a, b); // 1, 2

// TODO:
let temp = a; // temp = 1
a = b;
b = temp;

console.log('after', a,b) // 2, 1


// =======
// 變數交換
let fruit = 'banana';
let veg = 'tomato';
[veg, fruit] ==> ['tomato','banana']; 

[fruit, veg] = [veg, fruit]; // 左邊是新的變數名，右邊是交換後的值

console.log(fruit, veg);
// "tomato" "banana"

// ========

let person = {
    name: 'Aming',
    age: 25,
    city: 'Taichung',
  }
  let another = {
    name: person.name,
    age: 28,
    city: person.city,
  }



// ...person

// {person.name, person.age, person.city}

// {name:'Aming', age: 25, city: 'Taichung', age: 28}

let another{...person, age: 28}


//   let another ={
//       name:'Aming',
//       age: 28,
//       city: 'Taichung'
//   }


setA(2) // 非同步函式 (外包)

function syncF() {
    console.log(1);
  
    setTimeout(() => {
      console.log(2);
    }, 0);
  
    console.log(3);
  }
  
  console.log(4);
  syncF();
  console.log(5);

  // 4 1 3 5 2
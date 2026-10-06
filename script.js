
  for (let i = 1; i <= 10; i++) {
    console.log(`--- Tabuada do ${i} ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


  for (let  i = 1; i <= 100; i++) {
      if (i % 3 !== 0) continue;
      console.log(i);
  }
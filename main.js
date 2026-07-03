function outerFun() {
  const name = "Venkat";

  function innerFun() {
    console.log(name);
  }
  innerFun();
}

outerFun();

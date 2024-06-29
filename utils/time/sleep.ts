const sleep = (milliseconds: number) => {
  let timeStart = new Date().getTime();

  while (true) {
    let elapsedTime = new Date().getTime() - timeStart;

    if (elapsedTime > milliseconds) {
      break;
    }
  }
};

export default sleep;

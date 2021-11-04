const HTML_OBJECT = {
  btnOne: document.getElementById('btn-one'),
  pOne: document.getElementById('return-one'),
  btnTwo: document.getElementById('btn-two'),
  pTwo: document.getElementById('return-two'),
  btnThree: document.getElementById('btn-three'),
  pThree: document.getElementById('return-three'),
}

const countMark = () => {
  let a = 0;
  return function () {
    a++;
    return a;
  };
};

const TEST_COUNT = {
  pOne: countMark(),
  pTwo: countMark(),
  PThree: countMark(),
};

HTML_OBJECT.btnOne.addEventListener('click', () => {
  HTML_OBJECT.pOne.innerText = TEST_COUNT.pOne();
});

HTML_OBJECT.btnTwo.addEventListener('click', () => {
  HTML_OBJECT.pTwo.innerText = TEST_COUNT.pTwo();
});

HTML_OBJECT.btnThree.addEventListener('click', () => {
  HTML_OBJECT.pThree.innerText = TEST_COUNT.pTwo();
});

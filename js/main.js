(() => {
  'use strict';

  let pointsA = document.getElementById('pointsA');
  let pointsB = document.getElementById('pointsB');
  let plusA = document.getElementById('plusA');
  let minusA = document.getElementById('minusA');
  let plusB = document.getElementById('plusB');
  let minusB = document.getElementById('minusB');
  let sendResult = document.getElementById('sendResult');
  let resetAll = document.getElementById('resetAll');
  let setCount = document.getElementById('setCount');
  let result = document.getElementById('result');
  let firstSet = document.getElementById('firstSet');
  let secondSet = document.getElementById('secondSet');
  let thirdSet = document.getElementById('thirdSet');
  let countsA = document.getElementById('countsA');
  let countsB = document.getElementById('countsB');
  let currentSet = document.getElementById('currentSet');


  let valueA = 0;
  let valueB = 0;
  let diffAB;
  let diffBA;

  let countsValueA = 0;
  let countsValueB = 0;

  currentSet.textContent = "現在1セット目";

  let checkSet = () => {
    if(firstSet.textContent == '') {
      firstSet.textContent = `Set 1 ${pointsA.textContent}-${pointsB.textContent}`;
      currentSet.textContent = "現在2セット目";
    } else if (secondSet.textContent == '') {
      secondSet.textContent = `Set 2 ${pointsA.textContent}-${pointsB.textContent}`;
      currentSet.textContent = "現在3セット目";
    } else if (thirdSet.textContent == '') {
      thirdSet.textContent = `Set 3 ${pointsA.textContent}-${pointsB.textContent}`;
      currentSet.textContent ="現在4セット目";
    } else if (forthSet.textContent == '') {
      forthSet.textContent = `Set 4 ${pointsA.textContent}-${pointsB.textContent}`;
      currentSet.textContent = "現在5セット目";
    } else if (fifthSet.textContent == '') {
      fifthSet.textContent = `Set 5 ${pointsA.textContent}-${pointsB.textContent}`;
      currentSet.textContent ="試合終了";
    } else {
      return;
    }
  }

  let resetPoints = () => {
    valueA = 0;
    valueB = 0;
    pointsA.textContent = valueA;
    pointsB.textContent = valueB;
  }

  plusA.addEventListener ('click', () => {
    diffAB = valueA - valueB;
    if(result.textContent !== '') {
      return;
    } else {
      if(forthSet.textContent === '') {
        if (valueA >= 25 && diffAB >= 2 && valueA > valueB) {
          return;
        }
        valueA += 1;
        pointsA.textContent = valueA;
      } else {
        if(valueA >= 15 && diffAB >= 2 && valueA > valueB) {
          return;
        }
        valueA += 1;
        pointsA.textContent = valueA;
      }
    }
  });

  minusA.addEventListener ('click', () => {
    if (valueA <= 0) {
      return;
    }
    valueA -= 1;
    pointsA.textContent = valueA;
  });

  plusB.addEventListener ('click', () => {
    diffBA = valueB - valueA;
    if(result.textContent !== '') {
      return;
    } else {
      if(forthSet.textContent === '') {
        if (valueB >= 25 && diffBA >= 2 && valueB > valueA) {
          return;
        }
        valueB += 1;
        pointsB.textContent = valueB;
      } else {
        if(valueB >= 15 && diffBA >= 2 && valueB > valueA) {
          return;
        }
        valueB += 1;
        pointsB.textContent = valueB;
      }
    }
  });

  minusB.addEventListener ('click', () => {
    if (valueB <= 0) {
      return;
    }
    valueB -= 1;
    pointsB.textContent = valueB;
  });

  sendResult.addEventListener('click', () => {
    if(result.textContent === '') {
      if(forthSet.textContent === '') {
        if(valueA >= 25 && diffAB >= 2 && valueA > valueB ) {
          checkSet();
          resetPoints();

          countsValueA += 1 ;
          countsA.textContent = countsValueA;
          if(countsValueA === 3) {
            result.textContent = `A team win!`
          }
        } else if (valueB >= 25 && diffBA >= 2 && valueB > valueA ) {
            checkSet();
            resetPoints();

            countsValueB += 1 ;
            countsB.textContent = countsValueB;
            if(countsValueB === 3) {
              result.textContent = `B team win!`
            }
          }

    } else {
      if(valueA >= 15 && diffAB >= 2 && valueA > valueB ) {
        checkSet();
        resetPoints();

        countsValueA += 1 ;
        countsA.textContent = countsValueA;
        if(countsValueA === 3) {
          result.textContent = `A team win!`
        }
      } else if (valueB >= 15 && diffBA >= 2 && valueB > valueA ) {
          checkSet();
          resetPoints();

          countsValueB += 1 ;
          countsB.textContent = countsValueB;
          if(countsValueB === 3) {
            result.textContent = `B team win!`;
          }
        }
      }
    }
  });

  resetAll.addEventListener('click', () => {
    resetPoints();
    countsValueA = 0;
    countsValueB = 0;
    countsA.textContent = countsValueA;
    countsB.textContent = countsValueB;
    result.textContent = '';
    firstSet.textContent = '';
    secondSet.textContent = '';
    thirdSet.textContent = '';
    forthSet.textContent = '';
    fifthSet.textContent = '';
  });
})();

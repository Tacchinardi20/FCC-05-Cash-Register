const DENOMINATIONS = [["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]];

function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round(cash * 100) - Math.round(price * 100);
  let cashOnHand = {};
  let cashToGive = {};

  cid.forEach(function(denomination) {
    /*Or (Since Line 8) cid.forEach(denomination => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
    });*/
    //console.log(denomination[0], denomination[1]);
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
  });
    //console.log(cashOnHand);

    let index = DENOMINATIONS.length - 1;

    while (index >= 0 && amountToReturn > 0) {
      let moneyName = DENOMINATIONS[index][0];
      let moneyValue = DENOMINATIONS[index][1];
      //console.log(moneyName, moneyValue);

      //console.log(amountToReturn - moneyValue);
      if (amountToReturn - moneyValue > 0 && cashOnHand[moneyName], amountToReturn) {
        //console.log(DENOMINATIONS[index]);
        cashToGive[moneyName] = 0;
        //console.log(cashOnHand[moneyName] > 0);
        while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
          //console.log(amountToReturn, cashOnHand[moneyName]);
          //console.log("amount to return =", amountToReturn, cashToGive);
          cashOnHand[moneyName] -= moneyValue;
          cashToGive[moneyName] += moneyValue;
          amountToReturn -= moneyValue;
        }
      }
      index -= 1;
    }
    //console.log(cashToGive, amountToReturn);

    if (amountToReturn === 0) {
      let isRegisterEmpty = true;
      Object.keys(cashOnHand).forEach(function(moneyType) {
        /*Or (Since Line 43) Object.keys(cashOnHand).forEach(moneyType => {
          if (cashOnHand[moneyType] > 0) {
            isRegisterEmpty = false;
          }
        });*/
        //console.log(cashOnHand[moneyType]);
        if (cashOnHand[moneyType] > 0) {
          isRegisterEmpty = false;
        }
      });
      //console.log(isRegisterEmpty);

      if (isRegisterEmpty === true) {
        return {
          status: "CLOSED",
          change: cid
        }
      } else {
        let changeArray = [];
        Object.keys(cashToGive).map(function(moneyType) {
          /*Or (Since Line 63) Object.keys(cashToGive).map(moneyType => {
            if (cashToGive[moneyType] > 0) {
            changeArray.push([moneyType, cashToGive[moneyType] / 100]);
          }
        });*/
          //console.log(moneyType, cashToGive[moneyType]);
          //console.log(cashToGive[moneyType] > 0);
          if (cashToGive[moneyType] > 0) {
            changeArray.push([moneyType, cashToGive[moneyType] / 100]);
          }
        });

      return {status: "OPEN", change: changeArray}
      }
    }
    return {status: "INSUFFICIENT_FUNDS", change: []}
}

let result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result);
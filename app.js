function findTotalAmountPurchasesThreeMostCashBuyers(u) {
  let totalAmountOfPurchases = 0;
  purchaseAmountByCustomers.forEach(i => {
    totalAmountOfPurchases += i;
  });
  return totalAmountOfPurchases;
}

let purchaseAmountByCustomers = [10000, 20000, 30000];
console.log(findTotalAmountPurchasesThreeMostCashBuyers(purchaseAmountByCustomers));

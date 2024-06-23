// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) {
  let filteredAccounts = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    let account = bankAccounts[i];
    if (!account.deposits || account.deposits.length === 0) {
      
      filteredAccounts.push(account);
    } else {
      
      let totalSum = account.deposits.reduce((total, deposit) => total + deposit, 0);

      if (totalSum < 2000) {
        filteredAccounts.push(account);
      }
    }
  }
  return filteredAccounts;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

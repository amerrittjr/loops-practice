// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]
export function getClientsWithLetterInName(bankAccounts, letter) {
  let result = [];
  let lowerCase = letter.toLowerCase();

  for (let i = 0; i < bankAccounts.length; i++) {
      let accountName = bankAccounts[i].name.toLowerCase();
      if (accountName.includes(lowerCase)) {
          result.push(bankAccounts[i].name);
      }
  }
  return result;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

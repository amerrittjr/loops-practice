// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(bankAccounts, letter) {
  let result = [];
  let lowerCaseLetter = letter.charCodeAt(0);
  if (lowerCaseLetter >= 65 && lowerCaseLetter <= 90) {
    lowerCaseLetter += 32;
  }

  for (let i = 0; i < bankAccounts.length; i++) {
    let accountName = bankAccounts[i].name;
    let containsLetter = false;
    for (let j = 0; j < accountName.length; j++) {
      let charCode = accountName[j].charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        charCode += 32;
      }
      if (charCode === lowerCaseLetter) {
        containsLetter = true;
        break;
      }
    }
    if (containsLetter) {
      result.push(accountName);
    }
  }
  return result;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

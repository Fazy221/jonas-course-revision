// Lec 154 - The find Method (can retrieve 1 el of array based on condition)
// Won't ret new arr like filter method but 1st el only
// Take out first withdrawl from movements arr
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);
// Take out jessica owner account from accounts
const accFind = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(accFind);
// Using same for for-Of loop (couldn't work)
for (const acc of accounts) {
  for (const accs of acc.owner) {
    if (accs === 'Jessica Davis') console.log(accs);
  }
}

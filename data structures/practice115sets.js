// Sets
// Make new set of orders
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

//Log set
console.log(orderSet);
// Use .size to know how many values in set like .length in array
console.log(orderSet.size);
// Check if certain element is present
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
// Adding to set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
// Deleting from set
orderSet.delete('Risotto');
console.log(orderSet);
// Deleting everything from set
// orderSet.clear();
// As iterables so can loop to log all elements
for (const order of orderSet) {
  console.log(order);
}
// Make array of staff
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Convert array to set
const staffUnique = new Set(staff);
console.log(staffUnique);
// Convert set back to new array
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);
// Alternative way
const staffUniqueArrayAlt = new Array(...new Set(staff));
console.log(staffUniqueArrayAlt);
// See size of array without duplicates
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// Can also know how many different letters are in string
console.log(new Set('jonnashshcemmetman').size);

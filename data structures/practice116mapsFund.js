// Maps (more useful than sets)
// In obj, keys are only string but we can assign different type of variabels in maps
// Make empty map of restaurant
const rest = new Map();
// We'll use set method to fill map which's similar to add method in sets
// rest.set('keyname', 'restaurant name itself')
rest.set('name', 'Classico Italiano');
// Now using number data type as key, let's say different branches of restaurant
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
// Calling this set method does return whole set
console.log(rest.set(2, 'Lisbon, Portugal'));
// Same as below
console.log(rest);
// Can also add long chain with different sets (categories, open/close, true/false)
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// Use get method to read data by using keys from map (data type matters there)
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
// Can't log boolean or number keys as string, will return undefined
console.log(rest.get('true'));
console.log(rest.get('1'));
// Checking time (clever but not so readable so don't overuse, it's only to show power of Booleans as map keys)
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// See if map contain certain key
console.log(rest.has('categories'));
// deleting from map
rest.delete(2);
console.log(rest);
// checking size of map
console.log(rest.size);
// clearing everything from map
// rest.clear();
// Use array as map key (failed method with numbers)
rest.set([1, 2, 3], 'Test');
console.log(rest.get([1, 2, 3]));
// Recommended method of using array as map key
const arr = [4, 5, 6];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Using obj as map keys (qs and h1)
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

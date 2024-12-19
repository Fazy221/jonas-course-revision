const computerShop = new Map();
computerShop
  .set('name', 'Hardware Haven')
  .set('location', '123 Main St, Anytown, USA')
  .set(1, 'Monitors')
  .set(2, 'Keyboards')
  .set(3, 'Mice')
  .set('open', 9)
  .set('close', 18)
  .set(true, "We're open for business!")
  .set(false, "Sorry, we're closed");
console.log(computerShop.get('name'));
console.log(computerShop.get(1));
console.log(computerShop.get('open'));
console.log(computerShop.has('location'));
console.log(computerShop.has('hours'));
computerShop.delete(3);
console.log(computerShop.size);
const arr = ['Casing', 'Web Came', 'Gaming Gear'];
computerShop.set(arr, 'PC Components');
const title = document.querySelector('h1');
computerShop.set(title, 'header');
console.log(computerShop);

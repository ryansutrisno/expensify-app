//
// Object Destructuring
//

// const person = {
//   name: 'Ryan',
//   age: 31,
//   location: {
//     city: 'Yogyakarta',
//     temp: 30
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['Jalan Tegal Gendu', 'Banguntapan', 'Bantul', '55092'];
// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [drink, , priceMedium] = item;
console.log(`A medium ${drink} costs ${priceMedium}`);

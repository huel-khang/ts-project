const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Khang',
  age: 28
};

const copiedPerson = { ...person }; // using the spread operator extracts the actual object and it's vaule, where as const copiedPerson = person is directing me to the saved value.

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0);
};

const addedNumbers = add(5, 2, 3, 9);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);

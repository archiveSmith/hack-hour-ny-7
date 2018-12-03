/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  return jazbook[name] ? jazbook[name] : false;
}

function removeName(jazbook, name) {
  return jazbook[name] ? delete jazbook[name] : false;
}
function addName(jazbook, newName) {
  let added = jazbook.concat([newName]);
  added.sort((a, b) => {
    return a > b;
  });
  jazbook = added;
  console.log(jazbook);
  return makePhoneBookObject(jazbook);
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  let sortedBook = jazbook.sort((a, b) => {
    return a > b;
  });
  let phonebook = sortedBook.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
  return phonebook;
}

const objectToExport = {
  findName,
  makePhoneBookObject
};

module.exports = objectToExport;

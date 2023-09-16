const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {}

// 2. Add Data
function addData() {}

// 3. Remove Admins
function removeAdmin() {}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

for(let i = 0; i < array2.length; i++) {
  array1.push(array2[i])
}

console.log(array1)
}

// 5. Average Age
function averageAge() {
  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );
}

// 6. Age Check
function checkAgeAbove25() {
  var age=document.getElementById('averageAge').value;
if(age == 25)     
    return true;

else
    return false;
}


// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {
  const myTeam = [
    {
      name: "Virat",
      age: 40
    },
      {
      name: "Rohit",
      age: 30
    },
      {
      name: "Bhuvi",
      age: 20
    },
      {
      name: "Raina",
      age: 33
    }
  ]
  
  const sortedByAge = myTeam.sort((firstEl,secondEl)=> secondEl.age - secondEl.age);
  
    console.log(sortByAge);
}

// 9. Update Profession
function updateJohnsProfession() {}

// 10. Profession Count
function getTotalProfessions() {}

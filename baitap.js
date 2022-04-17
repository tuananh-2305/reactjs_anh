//bai1
var d1 = [0, 5, 4, 2, 8];

var sum = 0;
for(el of d1) {
	sum +=el;
}
console.log(sum);

//
let tong = [0, 5, 4, 2, 8];
let sum = 0;
for (let i = 0; i < tong.length; i++) {
  sum += tong[i];
}
console.log(sum);

//bai2
const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }
]
const ten = person.map(person =>person.name);
console.log(ten);
//bai2
arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']
arr3= [...arr1, ...arr2]
newArr = []
arr3.map(i=>{
    if (!newArr.includes(i)) 
      newArr.push(i)
    })
    console.log(newArr);

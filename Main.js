const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
  ];

let head = document.querySelectorAll(".titles");
let body = document.querySelectorAll(".names");
let bodies = document.querySelectorAll(".name");
let title = document.querySelectorAll(".lvl");
let profession = document.querySelectorAll(".title");
let email = document.querySelectorAll(".lvls");
let phone = document.querySelectorAll(".titlee");
let arr = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];

for (const key in employees[0]) {
  arr.push(key);
}

employees.forEach(e=>{
  for (const key in e) {
      arr1.push(e[key])
    }
  }
)
let i = 0; 
head.forEach(e =>{
  e.textContent = arr[i];
  i++;
})

let j = 0;

body.forEach(e =>{
  if (!(arr1[j] instanceof Object)) {
    e.textContent = arr1[j];
    j++;
  }
  else if(Array.isArray(arr1[j])){
    e.textContent = arr1[j];
    j++;
  }
  else{
    for (const key in arr1[j]) {
      arr2.push(key);
      arr3.push(arr1[j][key])
    }
let z = 0;
    title.forEach(x =>{
      x.textContent = arr2[z];
      z++;})
let m = 0;
    profession.forEach(z =>{
      z.textContent = arr3[m];
      m++;})
let y = 0;
      email.forEach(x =>{
        x.textContent = arr2[y];
        y++;})
let a = 0;
      phone.forEach(z =>{
        z.textContent = arr3[a];
        a++;})
      j++;
    }
  }
)
console.log(arr3);
bodies.forEach(e =>{
  if (!(arr1[j] instanceof Object)) {
    e.textContent = arr1[j];
    j++;
  }else if(Array.isArray(arr1[j])){
    e.textContent = arr1[j];
  }
  else{
    j++;
  }
})

      
type listTypes = {
  name:string,
  date: number,
  children: number,
  country: string,
  knowsProgramming: boolean

}

const list = [
  {
    name: "Adolpho Maginot",
    date: 2 / 1 / 2002,
    children: 0,
    country: "Indonesia",
    knowsProgramming: false
  },
  {
    name: "Cthrine De Clerc",
    date: 5 / 5 / 1991,
    children: 4,
    country: "Japan",
    knowsProgramming: false
  },
  {
    name: "Aldwin Wynch",
    date: 3 / 28 / 1996,
    children: 0,
    country: "Russia",
    knowsProgramming: false
  },
  {
    name: "Tori Ramsted",
    date: 10 / 12 / 1987,
    children: 0,
    country: "Sri Lanka",
    knowsProgramming: false
  },
  {
    name: "Olympe Kroger",
    date: 9 / 24 / 2000,
    children: 3,
    country: "Colombia",
    knowsProgramming: false
  },
]
const listDiv:HTMLElement | null = document.getElementById("List")
//is the first person older than the last person
if (list[0].date < list[4].date){
  console.log("The firs person is older")
  if(listDiv) {
    listDiv.innerHTML = "The first person is older"
  }
} else {
  console.log("the first person is not older")
  if(listDiv) {
    listDiv.innerHTML = "The first person is not older"
  }
}

// Does the 2nd person have the same amount of kids as the 3rd?
if (list[1].children === list[2].children) {
  console.log("Have the same amount of children")
} else {
  console.log("Dont have the same amount of children")
}

//Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.

if(list[0].knowsProgramming, list[3].knowsProgramming === true){
  console.log("Yay!")
} else {
  console.log("LMGTFY")
}

/*
Create a statement that checks the 2nd person in the array for their nationality. 
If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, 
if he/she is from Korea output “여보세요”). 
If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task. 
*/

if(list[1].country === "Iceland"){
  console.log("Hæ")
} else if(list[1].country === "Spain"){
  console.log("Hola")
} else if(list[1].country === "Korea"){
  console.log("여보세요")
} else{
  console.log("Hello")
} 

/*
Ternary Operator:
Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
*/ 


(list[1].name.length > 5)? 
  console.log("His name is longer than 5 Charecters"): 
  console.log("His name is not longer")




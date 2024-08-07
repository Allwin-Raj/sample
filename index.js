// let firstnumber=Number(prompt("enter your number"));
// let secondnumber=Number(promt("enter your number"));
// alert(firstnumber+secondnumber)

// let myage = Number(prompt("enter your age:"))

// if (myage >=18 && myage<=35) {

//     alert("eligible for government job") }

//     else {
//         alreart("not eligible. for government job.")
//     }

// let mysalary = Number(prompt("enter your salary"))

// if (mysalary >=100000 && mysalary<=200000) {

//     alert("eligible for loan")}

//     else {
//         alreart("not eligible for loan")
//     }

// let mysalary = Number(prompt("enter your salary"))

// switch (true) {
//     case mysalary >=100000 && mysalary<=200000:
//         alert("eligible")
//         break;

//     default:
//         alert("not eligble")
//         break;
// }

// let firstnumber = Number(prompt("enter the first number"))

// for (let index = 0; index < firstnumber; index++) {
//     console.log(index);

// }

// let firstnumber = Number(prompt("enter the first number"))
// let secondnumber = Number(prompt("enter the second number"))
// for (let index = 0; index < firstnumber; index++) {
//     console.log(index);

// }

// let myname= prompt("enter your name:")
// for (let index = 0; index < myname.length; index++) {
//     console.log(myname[index]);

// }

// let myname= prompt("enter your name:")
// for (const iterator of myname) {

// }

// let details = {name:"allwin",age:20}

// for (const key in details) {
//   console.log(details[key]);
// }

// let array = [];
// for (let index = 0; index < 5; index++) {
//   let value = prompt(`enter your value ${index + 1}`);
//   array.push(value);
// }
// console.log(array);

// let myname = prompt("enter your name");
// alert(myname.charAt(2))
// alert(myname.concat(" ","mowlish") .concat(" ",'allwin'))
// alert(myname.indexOf("l"))
// console.log(myname.match("allwin"))
// // alert(myname.toLocaleUpperCase())

//  setInterval(() => {
//   let mytime = new Date();
//   if(mytime.getHours() >=12 ){

//     let justtime = mytime.getHours() + ":" +mytime.getMinutes() +"pm"
//     console.log(justtime);
//   }

//   else{
//     let justtime =mytime.getHours() + ":" +mytime.getMinutes() +"am"
//   }
//   }
//  , 1000);

// setTimeout(()=> {
//   let content = document.getElementById('settimeout')
//   let spin = document.getElementById('spinner')
//   spin.style.display = "none"
//   content.style.display = "block"

// },5000);

// let contentpass = document.getElementById(spinner)
// let contentpass = document.querySelector('.three');
// contentpass.innerHTML = "wing456s"

// let today = new Date();
// if (today.getMonth() == 0) {
//   let today1 = today.getDate() + ":" + "jan" + "2024 ";
//   console.log(today1);
// } else if (today.getMonth() == 1) {
//   let today1 = today.getDate() + ":" + "Feb" + "2024";
//   console.log(today1);
// } else if (today.getMonth() == 7) {
//   let today1 = today.getDate() + ":" + "Aug" + "2024";
//   console.log(today1);
// } else {
//   let today2 = today.getDate();
//   console.log(today2);
// }

let httpcreate = new XMLHttpRequest();

httpcreate.open("GET", "allwin.txt");
httpcreate.onload = function name(params) {
  alert(this.responseText);
};

httpcreate.send();

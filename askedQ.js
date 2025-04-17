// //Q1 revrse the string 

// let str = "aditya"
// n = str.length

// // first idea
// // for(let i = n-1; i>=0; i--){
// //     newstr = str[i];
// //     console.log(newstr);
// // }

// // //second idea
// // for(let i = n-1; i>=0; i--){
// //     console.log(str[i])
// // }

// //those methods can not create a string for creating a string we should go with 

// let newstr = ""

// for(let i = n-1; i>=0; i--){
//     newstr += str[i]
// }

// console.log(newstr)

//q2 is to find vowels in a string

// let str = "Aditya jain";
// let count = 0;


// for(let i of str.toLowerCase()){
//     if(i == 'a' || i== 'e' || i=='o' || i=='i' || i== 'u'){
//         count = count + 1;
//     }
// }
// console.log(count);

// create a function for above code 

// function numOfVowels(str){
//     let count = 0;
//     for(let i of str){
//         if(i=='a' || i =='o' || i=='e' || i=='i' || i=='u'){
//             count++;
//         }
//     }
//      return count;
// }

// let nnumber = numOfVowels('adi');

// console.log(nnumber)

//arrowfunction for above function 

// const NoV = (str) =>{
//     let count = 0;
//     for(let i of str){
//         if(i=='a' || i =='o' || i=='e' || i=='i' || i=='u'){
//             count++;
//         }
//     }
//      return count;
// }

// console.log(NoV('adityajaind'));

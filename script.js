let name = "   Danish Shaikh                 ";
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// console.log(name.charAt(0));
// console.log(name.indexOf("h"));
// console.log(name.slice(0,6));
// console.log(name.length);
// console.log(name.lastIndexOf("h"));

// console.log(name.split(""));
// console.log(name.substring(7));
// console.log(name.replace("Shaikh","Khan"));
// console.log(name.replaceAll("i","X"));
// console.log(name.repeat(5));
// console.log(name.trim());
// console.log(name.length);
// console.log(name.trimEnd().length);
// let num = 987654321;
// console.log(typeof num);
// let str = num+"";
// console.log(typeof str);
// let str2 = num.toString();
// console.log(typeof str2);
let str1 = "Hello";
// let str2 = " World";
// let concatString = str1+str2;
// let str3 = " How are you?"
// let conStr = str1.concat(str2,str3,str3," How are you doing"); 
// console.log(conStr);

// let str2 = new String("Danish");
// console.log(str2[0]);

// console.log(typeof str2);


// console.log(typeof str1);

// let word = "hello how are you? how are you doing?";
// console.log(word.includes("you"));
// console.log(word.indexOf("you"));   


// console.log(hasLength);
// console.log(hasNumber);
// console.log(hasSymbol);

// if(){
//     if(pwd.includes("0") || pwd.includes("1") || pwd.includes("2") || 
//         pwd.includes("3") || pwd.includes("4") || pwd.includes("5") || 
//         pwd.includes("6") || pwd.includes("7") || pwd.includes("8") || 
//         pwd.includes("9")){
//             if(){
//                 console.log("Successful your password follows our conditions");
//             }else{
//                 console.log("Password should contain atleast one special symbol i.e @ or #");
                
//             }
//     }else{
//         console.log("Password should contains atleast one number");   
//     }
// }else{
//     console.log("Password Length should be greater than 8");
// }


// Mohd Danish
// M.D

let fullName = "Mohd Danish Shaikh"
let shortForm = "";

let splittedFullNameArray = fullName.split(" ");

for(let i = 0; i< splittedFullNameArray.length ; i++){
    shortForm = shortForm +  splittedFullNameArray[i].charAt(0) + ".";    
}
// console.log(shortForm[5]);

console.log(shortForm.slice(0,shortForm.length-1));

// console.log(splittedFullNameArray,fullName,shortForm);

















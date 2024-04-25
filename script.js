
// var password;
// function generatePassword(){
//     let pass='';
//     let charStr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//     let passLen=20;
//     for(let i=1;i<=passLen;i++){
//         let char=Math.floor(Math.random()*charStr.length);

//         pass+=charStr.charAt(char);


//         // console.log(charStr.charAt(char));
//     }
//     // console.log(pass);
//     password=pass;
//     document.getElementById("current-password").innerText=password;

// }

// function PasswordGenerator(){
//     document.getElementById('div1').style.display="block";

// }
// function hide(){
//     document.getElementById('div1').style.display="none";

// }

// function usePass(){
//     document.getElementById("password").value=password;
// }

// generatePassword();




function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}

checkPassword = (form) => { 
    password = form.password.value; 
    confirmpassword = form.confirmpassword.value; 

    if (password == '') 
        alert ("Por favor, digite uma senha"); 
    
    else if (confirmpassword == '') 
        alert ("Por favor, confirme sua senha"); 
            
    else if (password != confirmpassword) { 
        alert ("\nAs senhas não combinam. Tente novamente...") 
        return false; 
    } 
    else{  
        return true; 
    } 
},

emailIsValid = (email) => {
var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

if (reg.test(email.value) == false) { 
    alert ("Email inválido");
        return false;
}
    return true;
}
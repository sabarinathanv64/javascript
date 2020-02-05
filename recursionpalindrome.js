try {
function palindrome(n){
    var a=n.split().reverse().join("");
    if(n==a){
        return "palindrome";  
    }
    else{
        return "not palindrome";
    }
}
   console.log(palindrome("12321"));
   }
catch(ee){
    console.log(ee.message);
}

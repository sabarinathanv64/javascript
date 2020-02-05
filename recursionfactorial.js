try {
function factorial(n){
    var fac=1;
    for(var i=1;i<=n;i++){
        fac*=i;
        
    }
    return fac;
    }
   console.log(factorial(5));
   }  
catch(ee){
    console.log(ee.message);
}

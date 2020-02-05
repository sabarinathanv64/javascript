try {
function sum(n){
    var a=0;
    for(var i=1;i<=n;i++){
        a += i;  
    }
    return a;
    }
   console.log(sum(15));
   }
catch(ee){
    console.log(ee.message);
}

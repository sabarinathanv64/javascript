try {
function fibanacci(n){
    var a=0,b=1,r=[b];
    for(var i=1;i<=n;i++){
        var c=a+b;
        a=b;
        b=c;
      r.push(c);  
    }
    return r.join(" ");
    }
   console.log(fibanacci(15));
   }
catch(ee){
    console.log(ee.message);
}

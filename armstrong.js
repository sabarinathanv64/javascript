try{  
var sum=0;    
console.log("ARMSTRONG NUMBER");
var a="153"
for(var i=0;i<a.length;i++){
     sum += a[i]*a[i]*a[i];
 }
if(a==sum)
{
    console.log("armstrong number")
}
else{
console.log("not armstrong");
}
}   
catch(ee){
    console.log(ee.message);}

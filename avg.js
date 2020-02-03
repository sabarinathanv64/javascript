try{
var sum=0;    
console.log("AVERAGE OF N NUMBER");
var a=[85,23,65,12,57,12,54,32];
for(var i=0;i<a.length;i++){
     sum += a[i];
}
var avg=sum/a.length;
console.log(avg);
}
    
catch(ee){
    console.log(ee.message);}

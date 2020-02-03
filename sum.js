try{  
var sum=0;    
console.log("sum of number");
var array=[1,2,3,4,5];
array.forEach(function(items)
{
    sum+=items;
    
})
console.log(sum) 
}
catch(ee){
    console.log(ee.message);}

try{  
var s=[];    
console.log("sum of number");
var a=20;
a.forEach(i=>{

    if (a%i==0){
        s.push(i);
    }    
})
console.log(s.join("  ")) ;
}
catch(ee){
    console.log(ee.message);}

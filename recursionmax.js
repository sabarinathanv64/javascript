try {
function largest(arr){
    var max=0
    arr.forEach(i=>{
        if(max<i){
            max=i
        }
    })
        return max;
}
   console.log(largest([12,32,31]));
   }
catch(ee){
    console.log(ee.message);
}

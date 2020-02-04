try{
    console.log("LARGEST OF GIVEN NUMBER");
    var arr=[89,64,23,657,223];
    var max=0;
    arr.forEach(item=>{
        if(max<item){
            max=item;
        }
    })
    console.log(max);
}
catch(ee){
    console.log(ee.message);
}

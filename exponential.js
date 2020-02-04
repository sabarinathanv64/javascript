try{
    console.log("EXPONENTIAL");
    var b=5;
    var e=3;
    var pow=1;
    for(var i=0;i<e;i++){
        pow*=b;
    }
    console.log(pow);
}
catch(ee){
    console.log(ee.message);
}

try{
    console.log("INT OR FLOAT");
    var n=23.5;
    if(n%1==0){
        console.log("integer");
    }
    else{
        console.log("float");
    }
    
}
catch(ee){
    console.log(ee.message);
}

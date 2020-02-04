try
{
console.log("DUPLICATE VALUES")
var r=[];
var arr=[2,1,3,5,8,3,2,1,4,5,6,7];
var s=arr.sort();
for(var i=0;i<s.length;i++){
    if(s[i]==s[i+1]){
        r.push(s[i+1]);
        
    }
}
console.log(r);}
catch(ee){
    console.log(ee.message);}

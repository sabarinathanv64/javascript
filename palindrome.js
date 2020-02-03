try
{
var n="madam";
var a=[];
console.log("palindrome or not");
for(var i=n.length;i>=0;i--){
    a.push(n[i]);
}
if(n==a.join(""))
{
    console.log("palindrome");
}
else{
console.log("not apalindrome");
}}
catch(ee){
    console.log(ee.message);}

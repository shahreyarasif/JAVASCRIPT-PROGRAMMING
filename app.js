//CHAPTER # 01

//Task1
alert("Hello!");

//Task2
alert("Error! Please enter a valid password")

//Task3
alert("Welcome to JS Land\nHappy Coding")

//Task4
alert("Welcome to JS Land...")
alert("Happy Coding\nPrevent this page from creating additional dialogs")

//Task5
alert("Hello.. I can run JS through my web brouser's console")


//Task6
alert("my new project")



//CHAPTER # 02

//Task1
var UserName;

//Task2
var Myname="SHAHREYAR ASIF";

//Task3
var  message;
message="Hello World";
alert(message)

//Task4
var Name="SHAHREYAR ASIF";
var Age="19";
var Course="Certified Mobile Application Development"
alert(Name)
alert(Age)
alert(Course)

//Task6
var email="abc@gmail.com";
alert("My email adsress is "+email)

//Task7
var book="A smarter way to learn JavaScript";
alert(book)

//Task8'
document.write("Yah! I can write html content through javascript")




//CHAPTER#3

//Task1
var Age="20";
alert("I am "+Age+" years old")

//Task3
var birthyear="2000";
document.write("My birth year is "+birthyear+"\n datatype of declared variable is number")

//Task4
var  Visitorsname="John Doe ";
var Producttitle=" T-shirt(s)";
var  Quantity="5";
document.write( Visitorsname+"ordered " +Quantity+ Producttitle+"on  SHAHREYAR Clothing store")


//Task 1
var a=10;
document.write(a)
// 10
++a;
// 11
a++;
document.write(a)
// 11
++a;
document.write(a)
// 12
--a;
document.write(a)
// 11
a--;
document.write(a)
// 11
--a;
document.write(a)
// 10

//Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;


//Task 3
var inn=prompt("Enter your name")







//CHAPTER # 9-11

//Task 1
var c=prompt("Enter city")
if (c==="Karachi"){
    document.write("city of lights")
}

//Task 2
var d=prompt("Enter gender")
if (d==="female"){
    document.write("Good Morning Ma'am")
}
else if (d==="male"){
    document.write("Good Morning Sir")
}

//Task 3
var d=prompt("Enter trafic signal colour")
if (d==="red"){
    document.write("Stop Now")
}
else if (d==="yellow"){
    document.write("ready to move")
}
else if (d==="green"){
    document.write("Now move")
}

//Task 4
var c=prompt("Enter fuel in liters")
if (c<0.25){
    document.write("Please refill your car fuel")
}

//Task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }

 //Task 7
 var gg=prompt("Enter secret number")  
 if (gg==7) {
     document.write("Correct")
 }
 else{
     document.write("Incorrect")
 }

 //Task 8
 var d3=prompt("Enter number")  
 if (d3%3==0) {
     document.write("Divisible by 3")
 }
 else{
     document.write("Not divisible by 3")
 }

 // Task 9
 var xyz=prompt("Enter number")  
 if (xyz%2==0) {
     document.write("Even")
 }
 else{
     document.write("Odd")
 }

 //Task 10
 var temp=prompt("Enter tempeature")  
 if (temp>40) {
     document.write("Hot")
 }
 else if (temp>30) {
    document.write("Normal")
}
else if (temp>20) {
    document.write("Cool")
}
else if (temp>10) {
    document.write("So Cool")
}

// Task 11
var num1=prompt("Enter First number")
var op=prompt("Enter Operator")    
var num2=prompt("Enter Second Number")  
 if (op=="+") {
     document.write(num1+num2)
 }
 else if (op=="-") {
    document.write(num1-num2)
}
else if (op=="*") {
    document.write(num1*num2)
}
else if (op=="/") {
    document.write(num1/num2)
}




 

 

    




//CHAPTER 12-13

//Task 1
var ch=prompt("Enter character")
if (ch>=65 && ch<=90)
		document.write("Character is a capital letter")
else if (ch>=97 && ch<=122)
        document.write("Character is a small letter")
else if (ch>=48 && ch<=57)
         document.write("Character is a digit")
else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
        (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
        document.write("Character is a special symbol")

//Task2
var int1=prompt("Enter integer 1")       
var int2=prompt("Enter integer 2")   
if (int1>int2 ){
    document.write(int1+"is greater")
}
else if (int1<int2 ){
    document.write(int2+"is greater")
}
else{
    document.write("both are eual")
}

//Task 3
var int3=prompt("Enter integer ")   
if (int3>0){
    document.write(int3+"is positive")
}
else{
    document.write(int3+"is negative")
}

//Task 4
var l3=prompt("Enter letter ")   
if(l3=="a"|| l3=="e"|| l3=="i"|| l3=="o"|| l3=="u"||)
{
    document.write("Vowel")
}
else{
    document.write("Not vowel")

}
//Task 5
var pas="Password";
if (pas==" "){
    document.write("Please enter your password")
}
if (pas=="Password"){
    document.write("Correct Password")
}
else{
    document.write("Incorrect password")
}

//Task 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
    greeting = "Good evening";
}









//CHAPTER # 14 to 16


//Task 1
var sn1=Array()

//Task 2
var sn=[]

//Task 3
var arr1=["a","b","c"]

//Task 4
var arr2=[1,2,3]

//Task 5
var arr3=[True,False]

//Task 6
var arr4=[1,"x",0.2]

//Task 7

var arr5=[ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
for(var i=0;i<arr5.length;i++){
    document.write("<br>"+arr5[i])
}

//Task 8
var students=["SHAHREYAR","RAMZAN","HAMZA"]
var marks=[451,378,300]
for(var k=0;k<marks.length;k++){
    document.write("<br>"+ "score of "+ students[k]+" is "+marks[k]+"."+" Percentage "+(marks[k]/500)*100+"%")
}

//Task 9
var clr=["red","blue","green"]
document.write("<br>"+clr)
var clr1=prompt("Which colour do you want to add in begining ")
clr.unshift(clr1)
document.write("<br>"+clr)
var clr2=prompt("Which colour do you want to add in end ")
clr.push(clr2)
document.write("<br>"+clr)
var clr3=prompt("Add two more colour in begining ")
clr4=" "
cl3+=clr4;
clr.unshift(clr4)
document.write("<br>"+clr)

clr.shift()
document.write("<br>"+clr)

clr.pop()
document.write("<br>"+clr)

//Task 10
var lst=[2,4,1,5,3]
document.write("<br>"+lst.sort())


//Task 11
var city=["Karachi","Lahore","Islamabad","Queta","Peshawar"]
document.write(city)
document.write(city.slice(1,4))

//Task 12
var arr7 = ["This ",  "is" , "my", "cat"];
document.write(arr7)
document.write(arr7.join())

//Task 13
var arr8=["keyboard","mouse","monitor","printer"]
for (var o=0;o<arr8.length;o++){
    document.write("<br>" +arr8[0])
}

//Task 14
var arr8=["keyboard","mouse","monitor","printer"]
for (var o=0;o<arr8.length;o++){
    var poped=arr8.pop()
    document.write("<br>" +poped)
}

//CHAPTER # 17 to 20 

//Task 1
var my2d_emptylist=[[],[],[],[]]

//Task 2
var my2dlist=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

//Task3

for(var i=1;i<11;i++){
    document.write("<br>"+i)

}
//Task4
var t=prompt("Enter table number")
var u=prompt("Enter table length")
for (t=1 ; t<=u ; t++){
    document.write("<br>"+"2" + " x" + t + " =" +2*t)
}

//Task 5
var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (var j=0;j<fruits.length;j++){
    document.write("<br>"+"Element at index "+j+" is "+fruits[j])
}

//Task 6
document.write("<br>"+"Counting"+"<br>")
for(var i=1;i<16;i++){
    document.write(" "+i+" ")

}
document.write("<br>"+"Reverse"+"<br>")
for(var i=15;i>0;i--){
    document.write(" "+i+" ")

}
document.write("<br>"+"Even"+"<br>")
for(var i=0;i<21;i+2){
    document.write(" "+i+" ")

}
document.write("<br>"+"Even"+"<br>")
for(var i=0;i<21;i++){
    if(i%2==0) {
        document.write(" "+i+" ")

    }
    
}
document.write("<br>"+"Odd"+"<br>")
for(var i=0;i<21;i++){
    if(i%2!=0) {
        document.write(" "+i+" ")

    }
    
}
document.write("<br>"+"Even"+"<br>")
for(var i=2;i<21;i++){
    if(i%2==0) {
        document.write(" "+i+"k"+" ")

    }
    
}
//Task 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var find=prompt("what do you want to order")

if (A.includes(find)){
    document.write(" is available")
}
else{
    document.write(" is not available")
}

//Task 8
var B = [24, 53, 78, 91, 12];

var largest= 0;

for (i=0; i<=largest;i++){
    if (B[i]>largest) {
        var largest=B[i];
    }
}

document.write("<br>"+largest+" is largest")

//Task 9
var B = [24, 53, 78, 91, 12];

var smallest= B[0];

for (i=0; i<=B.length;i++){
    if (B[i]<smallest) {
        var smallest=B[i];
    }
}

document.write("<br>"+smallest+" is smallest")



//Task 10
document.write("<br>"+"Counting"+"<br>")
for(var i=1;i<21;i++){
    document.write(" "+i*5+" ")
    
}






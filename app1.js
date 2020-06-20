
//CHAPTER 21-25
//Task 1

//var firstname =prompt("Enter first name"); 
//var Lastname =prompt("Enter Last Name");
//var fullName= firstname+ " "+ Lastname;
//document.write("HI "+fullName);



//Task 2

//var mobName=prompt("Enter your mobile Name");
//alert("My Favorite Mobile is "+ mobName +    " \nLength of string is "+ mobName.length  );


//Task 3

// var string="Pakistani";
// for (var i=0;i<string.length ;i++){
    
//     if(string[i]=="n")
//     {
       
//         alert("Index Of n Is " + i); 
//         break;

//     }
    
// }

//Task 4

// var hhh ="Hello World";
// for(var i=hhh.length ;i>0;i--)
// {
// if(hhh[i]=="l")
// {
// alert("Last index Of l is "+ i);
// break;

// }
// }
//Task 5

// var word="Pakistani";
// document.write("Index At 3 is "+ word[3]);

//Task 6

// var firstname = "Shahreyar ";
// var lastname = "Asif";
// var fullname = firstname.concat(lastname);
// document.write(fullname);

//tAst 7

// var city="abad";
// city1="Hyder";
// var name=city1+city;
// document.write(name);
// city1="Islam";
// var name=city1+city;
// document.write("<br />  After replacing " + name )

//Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var msg=message.replace(/and/gi,'&');
// document.write(msg); 

//Task 9

// var val="472";
// document.write("Value :"+ val +"<br/> Type : string");
// var a=parseInt(val);
// document.write("<br/>Value :"+ a +"<br/> Type : number");

//Task 10

// var aa=prompt("User Input");
// document.write(aa.toUpperCase());

//Task 11

// var input = prompt("User Input");
// document.write(input[0].toUpperCase());
// for(var i=1;i<input.length;i++)
// {

//     document.write(input[i]);
// }


// Task 12
// var d = 35.36
// var s = d + '';
// s =s.replace('.', '');
// alert(s);

//Task 13

// var Username =prompt("Enter username");
// for(var i=0;i<Username.length;i++)
// {
// if(Username.fromCharCode(i)==String.fromCharCode(64))
// {
//     alert("Please Try again");
// }
// if(Username.fromCharCode(i)==String.fromCharCode(44))
// {
//     alert("Please Try again");
// }
// if(Username.fromCharCode(i)==String.fromCharCode(46))
// {
//     alert("Please Try again");
// }
// if(Username.fromCharCode(i)==String.fromCharCode(33))
// {
//     alert("Please Try again");
// }
// else{alert("Valid");}
// }


//Task 14

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var x=prompt("Enter user Input");
// var z=x.toLowerCase();
// var a;
// for(var i=0;i<A.length;i++)
// {
// if(z==A[i])
// {
// a=i;
// document.write(z +" Is available at index "+a +" in Our backery ");
// break;
// }
// if(a!="")  {
    

//     document.write("Not available in Our bakery Sorry");

// }
// }


//Task 16


// var university="University of karachi"
// for(var i=0;i<university.length;i++)
// {

//     document.write(university[i]+"</br>");
// }

//Task 17

// var input=prompt("User Input");
// document.write("Last character of user input "+ input[input.length-1] );



//Chapter 26-30

//Task 1
// var int=prompt("Enter Number");
// var a =Math.round(int);
// var aa=Math.ceil(int);
// var aaa=Math.floor(int);
// document.write("</br>Number :"+int)
// document.write("</br>Round off value :"+a)
// document.write("</br>floor value :"+aaa)
// document.write("</br>ceil value :"+aa)

//Task 2
// var int=prompt("Enter Number");
// var a =Math.round(int);
// var aa=Math.ceil(int);
// var aaa=Math.floor(int);
// document.write("</br>Number :"+int)
// document.write("</br>Round off value :"+a)
// document.write("</br>floor value :"+aaa)
// document.write("</br>ceil value :"+aa)

// //Task 3
// var a = prompt("Enter Value");
// if(a<0)
// {
//     alert("Absolute value of "+a+" is "+ (a*-1));
// }
// else{
//     alert("Absolute value of "+a+" is " +(a));

// }


//Task 4
// var a=Math.random();
// document.write("Random DICE value"+Math.floor(a*6+1));

// //Task 5
// var a=Math.random();
// var b=Math.floor(a*3+1);
// if(b==2)
//  {document.write("Random coins value : Head" );}
//  else
//  {
// document.write("Random coins value : Tails")
//  }

// //Task 6
// var a=Math.random();
//  document.write("Random value between 1 and 100 is "+Math.floor(a*100+1));

//Task 7
// var weight=prompt("Enter Weight");
// if(weight==50 && weight== "50kgs" && weight== "50.2kgs" && weight== "50.2kilograms"  )
// {
//     document.write("The weight of user is 58.3 kilogram");
// }

//Task 8

// var secreat =prompt("Enter Number");
// var ran=Math.random(10);
// var floor= Math.floor(ran);
// if(secreat==floor)
// {
// alert("Congrutalations")

// }
// else{
//     alert("Please Try Again")
// }


//Chapter 31-34
//Task 1
// var a=new Date();
// document.write(a);

//Task 2
// var a = new Date(); 
//  var currentMonth = a.getMonth();
//  if(currentMonth==5)
//  {
//  document.write("May");}

//Task 3

// var a=new Date();
// var currentday=a.getDay();;
// if(currentday==1)
// {
//     document.write("Mon")
// }
// if(currentday==2)
// {
//     document.write("Tue")
// }
// if(currentday==3)
// {
//     document.write("Wen")
// }
// if(currentday==4)
// {
//     document.write("Thu")
// }
// if(currentday==5)
// {
//     document.write("Fri")
// }

// if(currentday==6)
// {
//     document.write("Sat")
// }

// if(currentday==7)
// {
//     document.write("Sunday")
// }

//Task 4

// var a=new Date();
// var currentday=a.getDay();
// if(currentday==6||currentday==7)
// {

//     document.write("Its Fun day")
// }

//Task 5

// var a=new Date();
// var currentdate=a.getUTCDate();
// if(currentdate>=16)
// {
//     document.write("Last Days of the Month");
// }
// if(currentdate<=15)
// {
//     document.write("Last Days of the Month");
// }


//Task 6

// var a = new Date()
// document.write("Current Date : "+a)
// var b= a.getTime()
// document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
// var min = b/(1000*3600)
// document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)

//Task 7

// var a = new Date()
// b=a.getHours()
// if (b < 12){
// 	alert("Its AM")
// }
// else{
// 	alert("It's PM")
// }

//Task 8

// var laterDate = new Date("Dec 31, 2020")
// document.write(laterDate)

//Task 9

// var a = new Date("Jun 18, 2015")
// b=a.getTime()
// var today = new Date()
// var tomili = today.getTime()
// var d = tomili-b
// d=d/(1000*3600*24)
// //d=Math.round(d)
// document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")

//Task 10

// var start = new Date("Jan 01, 2015")
//  var startsec = start.getTime()
//  var end = new Date("Dec 05, 2015")
//  var endsec = end.getTime()
//  document.write("On reference date "+end+"<br>")
//  var dif = endsec-startsec;
//  document.write(dif/(1000*60)+" seconds had passed since begining of 2015")

//Task 11

// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getHours()
// var d = new Date();
// a=ab-1
// d.setHours(a)
// document.write("1 hour ago, it was "+d)

//Task 12

// var a = new Date()
// document.write("Current date : "+a+"<br>")
// ab =a.getFullYear()
// var d = new Date();
// a=ab-100
// d.setFullYear(a)
// document.write("100 year back, it was "+d)

//Task 13

// var age = prompt("enter your age")
// var a = new Date()
// var year = a.getFullYear()
// document.write("Your age is "+age)
// dif=year-age
// document.write("<br>Your birth year is "+dif)

//Task 14

// var name ="ABC Customer"
// var a = new Date();
// var b= a.getMonth();
// var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var month = arr[b]
// var unit = 410
// var chrg = 16
// var net = unit*chrg
// var late =350
// var gross =net +late
// document.write("<h1>K-Electric Bill </h1>")
// document.write("<br>Customer Name  "+name)
// document.write("<br> Current Month "+month)
// document.write("<br>  Number of units "+unit)
// document.write("<br> Charges per unit "+chrg+"<br>")
// document.write("<br>Net Amount Payable (within Due Date) "+net)
// document.write("<br>Late Payment Surcharge  "+late)
// document.write("<br>Gross Amount Payable (after Due Date)  "+gross)



//chapter 35-38



//Task 1

// function dateandtime(){
// 	var a = new Date()
// 	alert(a)
// }
// dateandtime()

//Task 2
// var a = prompt("Enter your First Name")
// var b = prompt("Enter your last Name")
// Name(a,b)
//  function Name(a,b){
//  	document.write("Hello "+a+" "+b)
//  }
 
 //Task 3
//  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// document.write(Add(a,b))
//  function Add(a,b){
//  	return a+b;
//  }
 
 //Task 4

 //  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// var c = prompt("Enter Character")
// document.write(Calculator(a,b,c))
// function Calculator(a,b,c){
// 	if (c=="+") {
// 		return a+b
// 	}
// 	else if (c=="-") {
// 		return a-b
// 	}
// 	else if (c=="/") {
// 		return a/b
// 	}
// 	else if (c=="%") {
// 		return a%b
// 	}
// }

//Task 5

//  var a = +prompt("Enter number")
// Square(a)
//  function Square(a){
//  	document.write(Math.pow(a,2))
//  }
 
 //Task 6

 //  var a = +prompt("Enter number")
//  document.write(Factorial(a))
//  function Factorial(n) { 
//             if (n === 0) {  
//                 return 1;  
//             } 
//             else {  
//                 return n * Factorial( n - 1 );  
//             } 
//  }
 

//Task 7

 //  var a = +prompt("Enter first number")
// var b = +prompt("Enter last number")
// Counting(a,b)
// function Counting(a,b){
// 	for (var i = a; i <= b; i++){
// 		document.write(i+"<br>")
// 	}
// }


//Task 8 

// function hypotenuse(a, b) {
//                function square(x) { return x*x; }
//                return Math.sqrt(square(a) + square(b));
// }
// document.write(hypotenuse(1,2))

//Task 9

// var a = +prompt("Enter width")
// var b = +prompt("Enter height")
// function CalculatesArea(w,h){
// 	document.write("<br>Area of Rectangle : "+(w*h))
// }
// CalculatesArea(a,b)
// CalculatesArea(8,4)

//Task 10

// function palindrome(str){
// 	var splitString = str.split("");
// 	var reverseArray = splitString.reverse();
// 	var joinArray = reverseArray.join("");
// 	if (str == joinArray){
// 		document.write("String is palindrome")
// 	}
// 	else{
// 		document.write("String is not palindrome")
// 	}
// }
// palindrome("mad")
// palindrome("madam")

//Task 11

// var a ="the quick brown fox";
// UppperCase(a);
// function UppperCase(str){
// 	document.write("Example String : " +str+"<br>")
// 	x=str.slice(0,1)
// 	y=x.toUpperCase()
// 	var sttr= str.split('')
// 	for (var i = 0; i < sttr.length; i++) {
// 		if (sttr[i] == ' '){
// 			j=i+1
// 			k=sttr[j].toUpperCase()
// 			sttr[j]=k
// 		}
// 	}
// 	sttr[0]=y
// 	var abc =sttr.join("")
// 	document.write("Expected Output : "+abc)
// }

//Task 12

// var a="Web Development Tutorial"
// LongestWord(a)
// function LongestWord(str){
// 	var ar =str.split('')
// 	var b =1
// 	var arr=[0]
// 	var word=[]
// 	var count =[]
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i] == ' ') {
// 			arr[b]=i
// 			b+=1
// 		}
// 	}
// 	arr[b]=ar.length
// 	b=0
// 	//document.write(arr)
// 	for (var i = 0; i < arr.length-1; i++) {
// 		j=i+1
// 		word[b]=str.slice(arr[i],arr[j])
// 		b=b+1
// 	}
// 	b=0
// 	//document.write("<br>"+word)
// 	for (var i = 0; i < word.length; i++) {
// 		if (b ==0){
// 		count[b]=word[b].length
// 		b=b+1
// 	}
// 	else{
// 		count[b]=word[b].length-1
// 		b=b+1
// 	}
// 	}
// 	//document.write("<br>"+count)
// 	var max =Math.max(...count)
// 	//document.write(" <br>"+max)
// 	var ind =count.indexOf(max)
// 	document.write("EXAMPLE STRING : "+str)
// 	document.write("<br>EXPECTED OUTPUT : "+word[ind])
// }

//Task 13

// function Occurrences(a,b){
// 	a=a.toLowerCase()
// 	var ar= a.split('')
// 	var count =0
// 	for (var i = 0; i < ar.length; i++) {
// 		if (ar[i]==b) {
// 			count+=1
// 		}
// 	}
// 	document.write("Occurrences of letter "+b+" is : "+count)
// }
// Occurrences("JSResourceS.com","o")

//Task 14

// function calcCircumference(r){
// 	var a = Math.PI
// 	var circum = 2*a*r
// 	document.write("The circumference is : "+circum+"<br>")
// }
// function calcArea(r){
// 	var a = Math.PI
// 	ra =Math.pow(r,2)
// 	var area =a*ra
// 	document.write("The area is : "+area)
// }
// calcCircumference(2)
// calcArea(2)

# Basic JavaScript Notes

JavaScript Notes :
1.	Unlike var, in ES6 the javascript language introduce the “let” keyword, which make a variable be declared once. For example if I use “var I = john” and then “var I = me” then “I = me”. Unlike “let” that if I use “let I = me” and then “let I = not me” then error will occur. <br>
2.	Const is like let but is read-only. A variable with const will not change. <br>
3.	Operators : +, -, *, / (just like c#)  <br>
4.	 To get the last character of a string we can use the length of that word – 1. <br>
for example const string myStr = “Matan”;  <br>
To get the last string we can use const LastWord = myStr[myStr.length – 1] <br>
Because myStr.length is 6. 6-1  = 5. Index starting from 0. So 5 will be the last word. <br>
5.	In javascript I can add value to array using push. <br>
So for example if I have the array of const myArray = [1, 2, 3]; <br>
I can add now 4 into the array (later on) using the push function as follow: <br>
myArray.push(4); <br>
Now I can think of myArray as [1, 2, 3, 4] <br>
6.	Pop function do the opposite. <br>
7.	Shift function work like pop but remove the first. <br>
unshift adds to the first <br>
8.	Function in javascript unlike c# is function <functionName>(); instead of public void functionName()  <br>
9.	When Declaring a global variable, outside a function we should always use the let or const or else we will get undefined variable.  <Br>
If inside a function, we should create a variable without let or const. <br>
10.	 Local variable will override a global variable. <br>
11.	Queue is an abstract Data Structure where items are kept in order. <br>
12.	Strict equality (===) is more strict and data sensitive. For example, in javascript 12 (int) == “12” (string) is true, unlike other program languages which this is false as int is not a string. <br>
but in javascript if I want to check more strictly if 12 is only 12 as int and not as string like the example before I should use ===.  <br>
so unlike the earlier example, 12 === “12” is false and not true like ==. <br>
13.	Above true to != (not equal) also. The type conversion javascript does when is != is just as it does on (==). To be more strict I should use (!==). <br>
14.	To access properties I should use dot notation (.). <br>
for example : <br>
myobj = { shirt: “shirt” }; <br>
const myShirt = myobj.shirt; <br>
if there is space, I should use [] <br>
15.	To delete a property I will use the “delete” element. <br>
delete myobj.obj; <br>
16.	Recursion is a function that call itself until the loop is executed by the exit code. <br>
Every recursion supposed to have an exit code. If ( + or -) so the return should be 0 because + or – with 0 is the same, and not vice-versa for * or /. <br>
When using * or / operators is best-practice to use <br>
17.	Math.floor will round a number to the nearest point. <br> 
Multiplie a random number with 10 will give us a random number between 0 and 9, multiple by 100 will give the same with more options 0 to 90. <br>
18.	Redix is referring to “root”, and when using a parseInt we define the redix as the second overload. For example parseInt(11, 2), 2 is the redix (which is refer to “base 2 – 0 and 1”. <br>
19.	Conditional operator is just like if/else but more easily for reading. <br>
for example : <br>
if ( a == b ) { something } else { something } <br>
We can change this easily to <br>
return a == b ? “equal” : “not equal”; <br>
so if a == b is true (?), “equal” will be printed. Else ( : ) “not equal” will be printed. <br>
20.	Array Recursion – link to github 

# Computer Workshop - I Programs
::: tip **Pro Tip** :sunglasses:
Most of the online compilers sometimes don't have the specific modules available that we use in our programs but almost every module is available on **[Tio.run](https://tio.run)**. Just select the language and you are good to go.
:::

<br>
<a href="/pdfs/CW_Lab_manual.pdf"  target="_self">
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">View Lab Manual</button>
</a>
&nbsp;
<a href="/pdfs/CW_Lab_manual.pdf"  target="_self" download>
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">Download Lab Manual</button>
</a>

## Experiment 2
### Experiment 2-A
```html
<html>
<head>
<title>my first web page</title>
</head>
<body bgcolor="white"text="black">
<h1><center><b><i>GOOD MORNING</b></i></center></h1>
</body>
</html>
```

### Experiment 2-B
```html
<html>
<head>
	<title>Image alignment</title>
</head>
<body bgcolor="pink">
<center><h1>The three images are aligned as left, center and right.</h1></center>
<img src="left.png" width="200" height="170" align="left">
<img src="right.png" width="200" height="170" align="right">
<center><img src="center.png" width="250" height="170"></center>
</body>
</html>
```

### Experiment 2-C
```html
<html>
<head>
<title>hyperlink</title>
</head>
<body bgcolor="orange"text="white">
<center><a href="http://www.google.com">GOOGLE</a></center>
</body>
</html>
```

## Experiment 3
```html
<html>
<head>
<title>table of emplyoee</title>
</head>
<body background="D:\The big folder of photos\HD Wallpapers\Full HD
1080p Wallpapers (25).jpg">
<b><h1><CENTER>THE TABLE OF EMPLYOEES OF DIFFERENT
DEPARTMENTS</CENTER></H1></B>
<center><table border="1" cellpadding="5" cellspacing="5"
BGCOLOR="ORANGE">
<tr bgcolor="red">
<th>SR.NO</TH>
<th>NAME</th>
<th>SALARY</th>
<th>DEPARTMENT</th>
<th>SIGNATURE</th>
</tr>
<tr>
<td>01</td>
<td>PUSHPAK</td>
<td>1000000</td>
<td>RESEARCH AND DEVELOPMENT</td>
<td> </td>
</tr>
<tr>
<td rowspan="2">02</td>
<td>ROHISH</td>
<td>300000</td>
<td>MOBILES AND NETWORK</td>
<td> </td>
</tr>
<tr>
<td>03</td>
<td>SMIT</td>
<td>4000000</td>
<td>FOOD AND TECHNOLOGY</td>
<td> </td>
</tr>
<tr>
<td>04</td>
<td>TEJAS</td>
<td>700000</td>
<td>FOOD AND FLAVOURS</td>
<td> </td>
</tr>
<tr>
<td>05</td>
<td>MANAL</td>
<td>89076</td>
<td>AUTOMOBILES</td>
<td> </td>
</tr>
<tr>
<td>06</td>
<td>KALPAK</td>
<td>80976</td>
<td>ELECTRICAL</td>
<td> </td>
</tr>
<tr>
<td>07</td>
<td>HARSHIT</td>
<td>567894</td>
<td>CARS AND DESIGN</td>
<td> </td>
</tr>
<tr>
<td>08</td>
<td>SAMYAK</td>
<td>908753</td>
<td>ELECTRONIC DEVICES</td>
<td> </td>
</tr>
<tr>
<td>09</td>
<td>DEEPAK</td>
<td>87654</td>
<td>BUILDINGS AND INFRASTRUCTURE</td>
<td> </td>
</tr>
<tr>
<td>10</td>
<td>PIYUSH</td>
<td>98076</td>
<td>SOFTWARE DEVELOPMENT</td>
<td> </td>
</tr>
<tr>
<td>11</td>
<td>IMDAD</td>
<td>98765432</td>
<td>ENGLISH LITERATURE</td>
<td> </td>
</tr>
<tr>
<td>12</td>
<td>SOHAIL</td>
<td>897000</td>
<td>SCIENCE AND HUMANITIES</td>
<td> </td>
</tr>
</table></center>
</body>
</html>
```

## Experiment 4
```html
<html>
<head>
<title>HTML Frames</title>
</head>
<frameset rows = "30%,40%,30%" border="5" framespacing="5">
<frame name = "top" src = "FRAME1.html">
<frame name = "main" scrolling="yes" src = "FRAME2.html">
<frame name = "bottom" src = "FRAME3.html">
<noframes>
<body>Your browser does not support frames.</body>
</noframes>
</frameset>
</html>
```


## Experiment 5 & 6
```html
<!doctype html>
<html>
<head>
<title>to diplay the forms</title>
</head>
<body text="black">

<pre>
<h1><center>APLICATION FORM</H1>
</CENTER>
<center><form bgcolor="yellow">FIRST NAME:<input
type="text"placeholder="FIRST NAME" name="">
<br>
LAST NAME:<input type="text" placeholder="LAST NAME"
name=""><br>
USER ID: <input type="text" placeholder="USER ID"name=""><br>
PASSWORD:<input type="password" placeholder="PASSWORD"
name=""><br>
MALE:<input type="radio" name="GENDER" value="MALE">
FEMALE:<input type="radio" name="GENDER" value="FEMALE">
SUBJECT:<select name="dropdown">
<option value="Maths" selected>Maths</option>
<option value="Physics" selected>Physics</option>
<option value="chemistry" selected>chemistery</option>
<option value="c programming" selected>"c" programming</option>
<option value="HTML" selected>HTML</option></SELECT>
ADDRESS:<input type="address"
placeholder="ADDRESS"name=""><br>
EMAIL :<input type="email" placeholder="E-MAIL"name="email"><br>
COMMENT: <br>
<textarea rows = "10" cols = "100" bgcolor="green" name="descripton">
Enter your comment.............
</textarea>
<input type="submit" name="submit" value="SUBMIT"><br>
</form></center></pre>
</body>
```

## Experiment 8
### Experiment 8-A
```VB
dim a,b,c
a=0
b=1
c=0
msgbox(a)
msgbox(b)
do while c<=21
c=a+b
a=b
b=c
msgbox(c)
loop
```

### Experiment 8-B
```VB
msgbox("The current date is " & Date )
msgbox("The current month is " & Month(Date))
msgbox("The current year is " & Year(Date))
msgbox("The current Day is " & Day(Date))
msgbox("Date is IsDatefunction is " & IsDate(Date) )
msgbox("'January first eighteen hundred' a valid date format: " & IsDate("January first eighteen hundred"))
msgbox("The time is now " & Time )
msgbox("The current minute is " & Minute(Time) )
msgbox("The current hour is " & Hour(Time) )
msgbox("The current second is " & Second(Time) )
msgbox("Number of seconds elapsed in the current day: " & Timer)
msgbox("Date and time: " & Now)
msgbox("Current date: " & FormatDateTime(Date, 0) )
msgbox("Current date: " & FormatDateTime(Date, 1) )
msgbox("Current date: " & FormatDateTime(Date, 2) )
msgbox("Current time: " & FormatDateTime(Time, 3) )
msgbox("Current time: " & FormatDateTime(Time, 4))
```

## Experiment 10
### Experiment 10-A
```HTML
<html>
<head><title>Fibonacci Series</title></head>
<body>
<script type="text/javascript">

var var1 = 0;
var var2 = 1;
var var3;
var num = prompt("Enter the limit to generate fibonacci no");
document.write(var1+"<br />");
document.write(var2+"<br />");
for(var i=3; i <= num;i++)
{
var3 = var1 + var2;
var1 = var2;
var2 = var3;
document.write(var3+"<br />");
}
</script>
</body>
</html>
```

### Experiment 10-B
```HTML
<html>
<body>
<script type="text/javascript">

var i;
for (i=1; i<=15; i++)
{
if( i % 2 == 0){
document.write(i+ "<b> is Even Number</b><br>");
}
else{
document.write(i+ "<b> is Odd number</b><br>");
}
}
```
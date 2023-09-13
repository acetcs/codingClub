# Object-oriented Programming With Java

::: tip **Pro Tip** :sunglasses:
Most of the online compilers sometimes don't have the specific modules available that we use in our programs but almost every module is available on **[Tio.run](https://tio.run)**. Just select the language and you are good to go.
:::
<br>

<a href="../../../public/pdfs/Java_Lab_manual.pdf">
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">View Lab Manual</button>
</a>
&nbsp;
<a href="../../../public/pdfs/Java_Lab_manual.pdf" download>
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">Download Lab Manual</button>
</a>

## Experiment 1
### Experiment 1-A
```java
class Area{
    public static void main(String args[]){
        int height = 10, base = 6;
        float area = 0.5F * height * base;
        System.out.println("Area of triangle = " + area);
    }
}
```
### Experiment 1-B
```java
import java.util.Scanner;
class Prime{
    public static void main(String args[]){
        int c;
        Scanner in =  new Scanner(System.in);
        System.out.println("Enter number to be tested for prime: ");
        int n = in.nextInt();

        for(c = 2; c<=n-1; c++){
            if(n%c == 0){
                System.out.println(n + " is not prime.");
                break;
            }
        }
        if(c == n){
            System.out.println(n + " is prime.");
        }
    }
}
```
### Experiment 1-C
```java
import java.util.Scanner;
class Ladder{
    public static void main( String args[]){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");

        int a = in.nextInt();
        System.out.print("\n");

        for(int i=1;i<=a;i++){
            for(int j=1;j<=a;j++){
                System.out.print(j);
                for(int k=i-1;k>=1;k--)
                    System.out.print(k);
                    System.out.print("\n"); 
            }
        }
    }
}
```

## Experiment 2
### Experiment 2-A
```java
class Student{
    String name, city; 
    int age;
    static int m; 

    void printData(){
        System.out.println("Student name = "+name); 
        System.out.println("Student city = "+city); 
        System.out.println("Student age = "+age);
    }
    public static void main(String[] args){
        Student s1=new Student(); 
        Student s2=new Student(); 
        s1.name="Amit"; 
        s1.city="Dehradun"; 
        s1.age=22; 
        s2.name="Kapil"; 
        s2.city="Delhi"; 
        s2.age=23;
        s2.printData();
        s1.printData();
        s1.m=20; 
        s2.m=22;
        Student.m=27; 
        System.out.println("s1.m = "+s1.m); 
        System.out.println("s2.m = "+s2.m);
        System.out.println("Student.m = "+Student.m);
    }
}
```

### Experiment 2-B
```java
class Student2{
    private String name, city; 
    private int age;
    public void getData(String x, String y, int t)
    {
    name=x; 
    city=y; age=t;
    }
    public void printData()
    {
    System.out.println("Student name = "+name);
    System.out.println("Student city = "+city);
    System.out.println("Student age = "+age);
    }
}
class STtest{
    public static void main(String args[]){
        Student2 s1 = new Student2() ;
        Student2 s2 = new Student2() ;
        s2.getData("Kapil","Delhi",23); 
        s2.printData(); 
        s1.getData("Amit","Dehradun",22);
        s1.printData();
    }
}
```

### Experiment 2-C
```java
class Employee 
{ 
int empId;
String empName;

Employee(int id, String name)
{
this.empId = id; 
this.empName = name;
}
void info()
{
System.out.println("Id: "+empId+" Name: "+empName);
}
public static void main(String args[])
{
Employee obj1 = new Employee(10245,"Chaitanya");
Employee obj2 = new Employee(92232,"Negan"); 
obj1.info();
obj2.info();
}
}
```

## Experiment 3
### Experiment 3-A
```java
class Avg
{
public static void main(String args[])
{
String[] arr={"2","10"};
int n=arr.length;
float [] x=new float[n]; 
for(int i=0; i<n; i++)
{ 
x[i]=Float.parseFloat(arr[i]);
}
float sum=0;
for(int i=0; i<n; i++) 
sum=sum+x[i];
float avg=sum/n;
System.out.println("Average of given numbers is "+avg);
}
}
```

### Experiment 3-B
```java
class Add{
    public static void main(String args[]){
        int [][] x={
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };
        int [][] y={
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };
        int [][] z =new int[3][3];

        for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
        {
            z[i][j] = x[i][j] + y[i][j];
        }
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                System.out.print(z[i][j]+" ");
            }
            System.out.print("\n");
        }
    }
}
```

## Experiment 4
### Experiment 4-A
```java
public class WrapperExample3
{ 
public static void main(String args[])
{ 
byte b=10; 
short s=20; 
int i=30; 
long l=40; 
float f=50.0F; 
double d=60.0D; 
char c='a'; 
boolean b2=true; 
 
Byte byteobj=b; 
Short shortobj=s; 
Integer intobj=i; 
Long longobj=l; 
Float floatobj=f; 
Double doubleobj=d; 
Character charobj=c; 
Boolean boolobj=b2; 
 
System.out.println("---Printing object values---"); 
System.out.println("Byte object: "+byteobj); 
System.out.println("Short object: "+shortobj); 
System.out.println("Integer object: "+intobj); 
System.out.println("Long object: "+longobj); 
System.out.println("Float object: "+floatobj); 
System.out.println("Double object: "+doubleobj); 
System.out.println("Character object: "+charobj); 
System.out.println("Boolean object: "+boolobj); 
 
byte bytevalue=byteobj; 
short shortvalue=shortobj; 
int intvalue=intobj; 
long longvalue=longobj; 
float floatvalue=floatobj; 
double doublevalue=doubleobj; 
char charvalue=charobj; 
boolean boolvalue=boolobj; 
 
System.out.println("---Printing primitive values---"); 
System.out.println("byte value: "+bytevalue); 
System.out.println("short value: "+shortvalue); 
System.out.println("int value: "+intvalue); 
System.out.println("long value: "+longvalue); 
System.out.println("float value: "+floatvalue); 
System.out.println("double value: "+doublevalue); 
System.out.println("char value: "+charvalue); 
System.out.println("boolean value: "+boolvalue); 
}}

```

### Experiment 4-B
```java
class Javacustom
{ 
private int i; 
Javacustom(int i){ 
this.i=i; 
} 
public int getValue(){ 
return i; 
} 
public void setValue(int i){ 
this.i=i; 
} 
@Override 
public String toString() { 
 return Integer.toString(i); 
} 
}
public class TestJavatcustom{ 
public static void main(String[] args){ 
Javacustom j=new Javacustom(10); 
System.out.println(j); 
}
}
```


## Experiment 5
### Experiment 5-A
```java
import java.lang.*;
import java.io.*;

class one
{
public void print_geek()
{
System.out.println("Geeks");
}
}
class two extends one
{
public void print_for()
{
System.out.println("for");
}
}
class three extends two
{
public void print_geek2()
{
System.out.println("Geeks");
}
}
public class Main
{
public static void main(String[] args)
{
three g = new three(); 
g.print_geek();
g.print_for(); 
g.print_geek();
}}
```

### Experiment 5-B
```java
class Parent {
void show()
{
System.out.println("Parent's show()");
}
}
class Child extends Parent {
@Override
void show()
{
System.out.println("Child's show()");
}
}
class ClassMain {
public static void main(String[] args) 
{
Parent obj1 = new Parent();
obj1.show();
Parent obj2 = new Child(); 
obj2.show();
}}

```

### Experiment 5-C
```java
abstract class Vehicle
{
abstract void engine();
}
class car extends Vehicle
{
public void engine()
{
System.out.println("car has good engine");
}
}
class truck extends Vehicle
{
public void engine()
{
System.out.println("truck has bad engine");
}}
public class TestVehicle
{
public static void main(String arr[])
{
Vehicle v=new car(); 
v.engine();
Vehicle n=new truck(); 
n.engine();
}}

```

## Experiment 6
### Experiment 6-A
```java
import java.io.*;

class CustomTest{
    public static void main(String arr[]){
        
        try{
            int a = 6; 
            if(a<0 || a>50)
            throw (new Exception("valid range is 10 to 50"));
            {
                int s = a*a;
                System.out.println("Square is: " +s);
            }
        }
        catch(Exception ex){
            System.out.println(ex);
        }
    }
}
```

### Experiment 6-B
```java
class Divide
{
public static void main(String args[])
{
String[] arr={"20","0"};
try
{
if(arr.length<2)
throw(new Exception("two argument must be provided")); 
int a= Integer.parseInt(arr[0]);
int b=Integer.parseInt(arr[1]); 
if(b==0)
throw(new Exception("second argument should be non zero")); 
int c=a/b;
System.out.println("result:"+c);
}
catch(Exception e)
{
System.out.println(e);
}
}
}
```
### Experiment 6-C
```java
class Divide3
{
int x=300;
int y=10;
public static int divide(int x, int y)
{
int z=0;
try
{
try
{
z= x/y;
}
finally
{
return z;
}
}
catch(ArithmeticException ex)
{
System.out.println(ex);
}
return z;
}
public static void main(String args[])
{
try
{
String[] arr={"20000","10"};

int a=Integer.parseInt(arr[0]); 
int b=Integer.parseInt(arr[1]); 
int c=divide(a,b);
System.out.println("Result is="+c);
}
catch(Exception e)
{
System.out.println(e);
}
}
}
```
## Experiment 7
### Experiment 7-A
```java
import java.lang.*;
class ThreadTest extends Thread
{
static
{
Thread t = Thread.currentThread();
System.out.println("thread test is loaded by "+t.getName()+" thread"); 
t.setName("vishal");
System.out.println("changed the name of thread"); 
System.out.println("suspending thread for 5 sec"); 
try
{
Thread.sleep(5000);
}
catch(Exception ex){}
}
public static void main(String arr[])
{
Thread t=Thread.currentThread();
System.out.println("main() is invoked in "+t.getName()+" thread...");
}
}
```

### Experiment 7-B
```java
import java.lang.*; 
class Thread1
{
public static void main(String arr[])
{
Thread t= Thread.currentThread();
System.out.println("current thread is:"+t);
t.setName("vishal thread"); 
System.out.println("after name chage thread:"+t);
try
{
for(int n=5; n>0; n--)
{
System.out.println(n);
Thread.sleep(6000);
}
}
catch(InterruptedException e)
{
System.out.println("main thread is interrupted");
}
}
}

```

## Experiment 8
### Experiment 8-A
```java
class UserThread extends Thread
{
public void run()
{
Thread t = Thread.currentThread();
System.out.println("run() is invoked in "+t.getName()+" thread..."); 
for(int i=1;i<=10;i++)
{
System.out.println("run:"+i);
try
{
Thread.sleep(1000);
}
catch(Exception e){}
}
System.out.println("run() is completed");
}
}
class MultiThread{
public static void main(String arr[]){
System.out.println("main() started creating an object of user Thread. ");
UserThread t=new UserThread(); 
System.out.println("directly invoking run() of user thread"); 
t.run();
System.out.println("control back in main() ");
System.out.println("launching new thread for run() of user thread. ");
t.start();
for(int i=10;i>0;i--)
{
System.out.println("main:"+i); 
try
{
Thread.sleep(1000);
}
catch(Exception e)
{
}
}
System.out.println("main() completed");
}
}
```

### Experiment 8-B
```java
class Buffer
{
int value;
boolean produced=false;
public synchronized void produce(int x)
{
if(produced)
{
System.out.println("producer enter monitor out of turn..suspend. ");
try
{
wait();
}
catch(Exception e)
{
}
}
value=x;
System.out.println(value+" is produced"); 
produced=true;
notify();
}
public synchronized void consume()
{
if(! produced)
{
System.out.println("consumer entered the monitor out of turn,suspend. ");
try
{ 
wait();
}
catch(Exception e)
{}
}
System.out.println(value+" is consumed"); 
produced=false;
notify();
}
}
class Producer extends Thread
{
Buffer buffer;
public Producer(Buffer b)
{
buffer =b;
}
public void run()
{
System.out.println("producer started ,producing value. ");
for(int i=1;1<=10;i++)
buffer.produce(i);
}
}
class Consumer extends Thread
{
Buffer buffer;
public Consumer(Buffer b)
{
buffer =b;
}
public void run()
{
System.out.println("consumer started,consuming value. ");
for(int i=1;i<=10;i++) 
buffer.consume();
}
}
class PC1
{
public static void main(String arr[])
{
Buffer b=new Buffer(); 
Producer p=new Producer(b); 
Consumer c=new Consumer(b);
p.start();
c.start();
}
}

```

## Experiment 9
```java
import java.util.*;
class ArrayListTest
{
 public static void main(String[] args) 
{ 
 ArrayList al = new ArrayList();
 al.add("aaa");
 al.add("bbb");
 al.add("ccc");
 System.out.println(al.add("ddd")); 
 al.size(); 
 System.out.println(al.size());
 al.isEmpty();
 System.out.println("iteration of Arraylist by for loop"); 
 for (int i = 0; i < al.size(); i++) 
 {
 System.out.println(al.get(i));
 }
 System.out.println("iteration of Arraylist by Iterator");
 Iterator itr = al.iterator();
 while (itr.hasNext()) 
 { 
 Object o = itr.next(); 
 String s = (String) o; 
 System.out.println(s);
 }
 System.out.println("iteration of Arraylist by List Iterator");
 ListIterator ltr = al.listIterator(); 
 while (ltr.hasNext()) 
 {
 Object o = ltr.next();
 String s = (String) o; 
 System.out.println(s);
 }
 }
}
```
## Experiment 10
```java
import java.util.*;
import java.io.*;
class HashMapTest{
public static void main(String args[]) {
 Map hm = new HashMap();
 hm.put("101", "java");
 hm.put("102", ".Net");
 Object o = hm.put("103", "C++"); 
 System.out.println(o);
 Object o1 = hm.put("103", "C");
 System.out.println(o1);
 System.out.println("======By using Iterator======");
 Set s = hm.keySet();
 Iterator itr = s.iterator();
 while (itr.hasNext())
{
 String key = (String) itr.next(); 
 System.out.println("Key : "+key); 
 System.out.println("Value : "+ hm.get(key));
 }
 System.out.println("====== By using Map.Entry ======");
 Set set = hm.entrySet();
 Iterator it = set.iterator();
 while(it.hasNext()) 
{ 
 Map.Entry me = (Map.Entry) it.next(); 
 System.out.print(me.getKey()+ " : ");
 System.out.println(me.getValue());
 }
 }
}
```

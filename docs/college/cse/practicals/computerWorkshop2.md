# Computer Workshop - II Programs

::: tip **Pro Tip** :sunglasses:
Most of the online compilers sometimes don't have the specific modules available that we use in our programs but almost every module is available on **[Tio.run](https://tio.run)**. Just select the language and you are good to go.
:::

<br>

<a href="../../../public/pdfs/CW2_Lab_manual.pdf">
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">View Lab Manual</button>
</a>
&nbsp;
<a href="../../../public/pdfs/CW2_Lab_manual.pdf" download>
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">Download Lab Manual</button>
</a>

## Experiment 1
### Experiment 1-A
```python
list = ["apple", "banana", "cherry"]
print(list)
list.insert(0, "papaya")
print(list)
list.remove("apple")
print(list)
list.append("mango")
print(list)
print(len(list))
list.pop()
print(list)
list.clear()
print(list)
```
### Experiment 1-B
```python
student = {
    "Name": "",
    "Section": "",
    "Roll no.":"",
    "Address":""
}

print("\n\n\nDictionary: ",student)
print("Name:", student["Name"])
print("Section:", student["Section"])
x = student.get("Roll no.")
y = student.get("Address")
print("Roll no.:", x)
print("Address:", y)

student["Address"] = "Amravati"
print("Updated Address:", student["Address"])
print("Length of dictionary is",len(student))
print("\n\n\n")
```
### Experiment 1-C
```python
my_tuple = ('P','R','O','G','R','A','M')
my_tuple = my_tuple + ('M','I','N','G')
print("\n\n")
print("Tuple:",my_tuple)
print("Length of Tuple is",len(my_tuple))
print("P is present in Tuple? :",'P' in my_tuple)
print("4th element of Tuple is:",my_tuple[3])
print("\n\n")
```

## Experiment 2
### Experiment 2-A
```python
print("\n\n")
a = int(input("Enter 1st element: "))
b = int(input("Enter 2nd element: "))
c = a + b
print("Sum is:",c)
print("\n\n")
```

### Experiment 2-B
```python
x = int(input("\n\nEnter number to check positive or negative: "))
if x<0:
    print("Number is negative")
else:
    print("Number is positive")
```

### Experiment 2-C
```python

list1 = list(map(int,input("Enter the numbers: ").split(" ")))
list1.sort(reverse=True)

print(list1[0])
```

## Experiment 3
### Experiment 3-A
```python
def add():
    sum = 0
    arr = []
    print("Enter number of elements to add: ")
    num = int(input())
    for i in range(1,num+1):
        x = int(input(f"Enter {i} element: "))
        arr.append(x)
    
    for i in range(0,num):
        sum = sum + arr[i]
    
    print("Sum is", sum)

def subs():
    res = 0
    arr = []
    print("Enter number of elements to subtract: ")
    num = int(input())
    for i in range(1,num+1):
        x = int(input(f"Enter {i} element: "))
        arr.append(x)
    res = arr[0] - arr[1]
    for i in range(2,num):
        res = res - arr[i]
    
    print("Answer is", res)

def mul():
    res = 0
    arr = []
    print("Enter number of elements to multiply: ")
    num = int(input())
    for i in range(1,num+1):
        x = int(input(f"Enter {i} element: "))
        arr.append(x)
    res = arr[0] * arr[1]
    for i in range(2,num):
        res = res * arr[i]
    
    print("Answer is", res)

def division():
    res = 0
    
    x = int(input("Enter numerator: "))
    y = int(input("Enter denominator: "))
    res = x / y
    print("Answer is", res)

while 1:
    print("Select operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit Program")


    operation = int(input("Enter operation to perform: "))
    if operation == 1:
        add()
    elif operation == 2:
        subs()
    elif operation == 3:
        mul()
    elif operation == 4:
        division()
    elif operation == 5:
        print("Ended Successfully")
        break;
```

### Experiment 3-B
```python
def is_palindrome(s):
    return s == s[::-1]

# Test the function
s = input("Enter a string: ")
if is_palindrome(s):
    print(s, "is a palindrome")
else:
    print(s, "is not a palindrome")
```

### Experiment 3-C
```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)

# take input from user
num = int(input("Enter a number: "))

# check if number is negative or zero
if num < 0:
    print("Factorial does not exist for negative numbers")
elif num == 0:
    print("Factorial of 0 is 1")
else:
    print("Factorial of", num, "is", factorial(num))

```

## Experiment 4
### Experiment 4-A
```python
double = lambda x:2*x
print(double(5))
add = lambda x,y:x+y
print(add(5,4))

```

### Experiment 4-B
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def is_even(num):
    return num % 2 == 0

even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```


## Experiment 5
### Experiment 5-A
```python
a=5
b=0
print(a/b)
print("bye")
```

### Experiment 5-B
```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Error: division by zero")
finally:
    print("This will always execute")

```

## Experiment 6
### Experiment 6-A
```python
import sys
print("System version is:")
print(sys.version)
print("Version information is:")
print(sys.version_info)

Output:
System version is:
3.11.3 (tags/v3.11.3:f3909b8, Apr 4 2023,23:49:59) [MSC v.1934 64 bit (AMD64)]
Version Information is:
sys.version_info(major=3,minor=11,micro=3; releaselevel='Final',serial=0)
```

### Experiment 6-B
```python
import os

def check_file_permissions(file_path):
    if os.path.exists(file_path):
        # Check if the file is readable
        if os.access(file_path, os.R_OK):
            print(f"File '{file_path}' is readable.")
        else:
            print(f"File '{file_path}' is not readable.")

        # Check if the file is writable
        if os.access(file_path, os.W_OK):
            print(f"File '{file_path}' is writable.")
        else:
            print(f"File '{file_path}' is not writable.")

        # Check if the file is executable
        if os.access(file_path, os.X_OK):
            print(f"File '{file_path}' is executable.")
        else:
            print(f"File '{file_path}' is not executable.")
    else:
        print(f"File '{file_path}' does not exist.")


# Provide the file path here
file_path = "/path/to/your/file.txt"
check_file_permissions(file_path)
```

## Experiment 7
### Experiment 7-A
```python
import datetime
now = datetime.datetime.now()
print ("Current date and time : ")
print (now.strftime("%Y-%m-%d %H:%M:%S"))
```

### Experiment 7-B
```python
from datetime import timedelta,date
Date_req= date.today()+timedelta(days=6)
Print(Date_req)
```

## Experiment 8
### Experiment 8-A
```python
def admin():
        print(“hi”)
def cabin():
         print(“hello”)
```

### Experiment 8-B
```python
def staff():
     print(“This is the staff function in the sem module”)
def student():
     print(“This is the student function in the sem module”)
```

## Experiment 9
### Experiment 9-A
```python
Class display:
      Def displayMethod(self):
          Print(“WELCOME TO ACET”)
#object creation process
Obj = display()
Obj.displayMethod()
```

### Experiment 9-B
```python
Class Myclass:
      my_variable = “hello, world!”
def my_function(self):
       print(“This is a member function”)
my_object = Myclass()
print (my_object.my_variable)
my_object.my_function()
```

## Experiment 10
### Experiment 10-A
```python
import numpy as np

# Create a NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Check the type of array
print("Type of array:", type(arr))

# Check the axes of the array
print("Axes of array:", arr.ndim)

# Check the shape of the array
print("Shape of array:", arr.shape)

# Check the type of elements in the array
print("Type of elements in array:", arr.dtype)
Output:
Type of array: <class 'numpy.ndarray'>
Axes of array: 2
Shape of array: (2, 3)
Type of elements in array: int64
```

### Experiment 10-B
```python

import numpy as np

# Create a NumPy array from a list with type float
arr1 = np.array([1, 2, 3, 4, 5], dtype=float)
print("Array from list with type float:")
print(arr1)

# Create a 3x4 array with all zeros
arr2 = np.zeros((3, 4))
print("\n3x4 array with all zeros:")
print(arr2)

# Create an array from a tuple
arr3 = np.array(((1, 2, 3), (4, 5, 6)))
print("\nArray from tuple:")
print(arr3)

# Create a 2x3 array with random values between 0 and 1
arr4 = np.random.rand(2, 3)
print("\n2x3 array with random values between 0 and 1:")
print(arr4)
output:
Array from list with type float:
[1. 2. 3. 4. 5.]

3x4 array with all zeros:
[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]

Array from tuple:
[[1 2 3]
 [4 5 6]]

2x3 array with random values between 0 and 1:
[[0.13423991 0.93426504 0.18475334]
 [0.41679286 0.15494821 0.67071257]]
```

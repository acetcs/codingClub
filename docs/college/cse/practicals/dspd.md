# DSPD Practical Programs

::: details **Pro Tip** :sunglasses:
- It's boring :sleeping: to use the TurboC++ code editor to manually write code & compile the programs. 
- Instead! just go to the **'TurboC'** folder in the **C:/** drive.
- Then goto the **Bin** folder. Create a file in notepad and paste the **C** program in the file and save it with extension **".C"**.
- Now open TurboC applicaton and browse to your file and just compile it. :stuck_out_tongue_winking_eye:
- You got the job done under 10 minutes. :sunglasses:
:::
<br>

<a href="/pdfs/DSPD_Lab_manual.pdf"  target="_self, _blank">
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">View Lab Manual</button>
</a>


## Linear Search

```C
#include<stdio.h>
#include<conio.h>

int linearSearch(int a[], int val, int n){
 int i;
 for(i=0; i<n; i++){
  if(a[i]==val)
	return i;
 }
 return -1;
}
int main()
{
 int a[] = {10, 20, 30, 40, 50, 60};
 int n = 6,val, res,i;

 clrscr();
 printf("Enter element to search: ");
 scanf("%d", &val);
 printf("Elements present in array: ");
 for(i=0;i<n;i++){
  printf("%d ",a[i]);
 }
 res = linearSearch(a,val,n);
 if(res != -1){
  printf("\nElement found at index %d",res);
 }
 else
  printf("\nElement not found");
 getch();
 return 0;
}
```

## Binary Search

```C
#include<stdio.h>
#include<conio.h>
int binarySearch(int arr[], int l, int r, int x)
{
	while (l <= r) {
		int m = l + (r - l) / 2;

		if (arr[m] == x)
			return m;
		if (arr[m] < x)
			l = m + 1;
		else
			r = m - 1;
	}
	return -1;
}

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int n = sizeof(arr) / sizeof(arr[0]);
	int x = 10;
	int result = binarySearch(arr, 0, n - 1, x);
	clrscr();
	(result == -1) ? printf("Element is not present in array")
		       : printf("Element is present at index %d",result);
	getch();
	return 0;
}
```

## Selection Sort

```C
#include <stdio.h>

int main() {
    int a[] = {50,30,2,1,78,98,100,43,70};
    int n = 9;
    int i,j,temp,position;
    for(i = 0; i< n-1; i++){
        position = i;
        for(j=i+1; j<n; j++){
            if(a[j] < a[position]){
                position = j;
            }
        }
        temp = a[i];
        a[i] = a[position];
        a[position] = temp;
    }
    printf("Sorted array: \n");
    for(i=0;i<n;i++){
        printf("%d ",a[i]);
    }
    return 0;
}
```

## Shell Sort

```C
#include <stdio.h>

void shellSort(int *array, int size) {
	int gap, i, j, temp;
	for (gap = size / 2; gap > 0; gap /= 2) {
		for (i = gap; i < size; i++) {
			temp = array[i];
			for (j = i - gap; j >= 0 && array[j] > temp; j -= gap) {
				array[j + gap] = array[j];
			}
		array[j + gap] = temp;
		}
	}
}

int main() {
	int array[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
	int size = sizeof(array) / sizeof(array[0]);
	shellSort(array, size);
	for (int i = 0; i < size; i++) {
		printf("%d ", array[i]);
	}
	printf("\n");
	return 0;
}
```

## Stack

```C
#include <stdio.h>
#define MAX_SIZE 100
int stack[MAX_SIZE];
int top = -1;

int is_empty(){
    return top == -1;
}
int is_full(){
    return top == MAX_SIZE-1;
}
void push(int element){
    if(is_full()){
        printf("Stack overflow");
    }
    else{
        top++;
        stack[top]=element;
    }
}
int pop(){
    int element;
    if(is_empty()){
        printf("Stack underflow");
    }
    else{
        element = stack[top];
        top--;
        return element;
    }
}
void display(){
    printf("Elements present in stack: \n");
    for(int i=0;i<=top;i++){
        printf("%d ",stack[i]);
    }
    printf("\n");
}
int main() {
    push(10);
    push(20);
    push(30);
    display();
    printf("Popped element: %d\n",pop());
    printf("Popped element: %d\n",pop());
    printf("Popped element: %d\n",pop());
    return 0;
}
```

## Queue

```C
#include <stdio.h>
#define MAX_SIZE 10

int queue[MAX_SIZE];
int front = -1, rear = -1;

void insert(int item) {
    if (rear == MAX_SIZE - 1) {
        printf("Queue Overflow\n");
        return;
    }
    if (front == -1) {
        front = 0;
    }
    rear++;
    queue[rear] = item;
    printf("Inserted %d to the queue\n", item);
}

void delete() {
    if (front == -1 || front > rear) {
        printf("Queue Underflow\n");
        return;
    }
    printf("Deleted %d from the queue\n", queue[front]);
    front++;
}

int main() {
    insert(10);
    insert(20);
    insert(30);
    delete();
    insert(40);
    delete();
    return 0;
}
```

## Linked List

```C
#include <stdio.h>
#include <stdlib.h>

// Define the structure for a node in the linked list
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node with the given data
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a new node at the beginning of the linked list
void insertNode(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
    printf("Node with data %d inserted at the beginning.\n", data);
}

// Function to delete a node with the given data from the linked list
void deleteNode(struct Node** head, int data) {
    struct Node* temp = *head;
    struct Node* prev = NULL;
    if (temp != NULL && temp->data == data) {
        *head = temp->next;
        free(temp);
        printf("Node with data %d deleted.\n", data);
        return;
    }
    while (temp != NULL && temp->data != data) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == NULL) {
        printf("Node with data %d not found.\n", data);
        return;
    }
    prev->next = temp->next;
    free(temp);
    printf("Node with data %d deleted.\n", data);
}

// Function to print the linked list
void printList(struct Node* head) {
    struct Node* temp = head;
    printf("Linked List: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

// Main function to test the linked list operations
int main() {
    struct Node* head = NULL;
    insertNode(&head, 5);
    insertNode(&head, 10);
    insertNode(&head, 15);
    printList(head);
    deleteNode(&head, 10);
    printList(head);
    deleteNode(&head, 20);
    printList(head);
    return 0;
}
```

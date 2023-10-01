# Algorithms

Algorithms plays an important part in computer science engineering

Here is the github Repo for all the Algorithms: [Click here](https://github.com/acetcs/algorithms)

Algorithms are divided into making types but here we are only going to classify into two types i.e.
- Searching
- Sorting

## Searching Algorithms
#### 1. Linear search
```Cpp client

#include<iostream>

int linearsearch(int arr[],int key){
/*linearsearch is a bruteforce solution, it will check every and each
element with the key.*/
    for(int i=0;i<sizeof(arr)/sizeof(arr[0]);i++){
        if(arr[i]==key){
            return i;
        }
    }
    return -1;
}
int main(){
    int arr[]={14,15,2,6,89,109,1,7};//given array, 
    //you can also take it from user
    int key = 109;//finding these elements position from the above array
    int res=linearsearch(arr,key)
    std::cout<<"The position of target key is "<<res<<std::endl;
}
```

#### 2. Binary search
```Cpp Client

#include<iostream>
int binarysearch(int arr[],int size,int key){
    int front=0,rear=size;
    int count=0;
    while(front<=rear){
        int mid=(front + rear)/2;
        if(arr[mid]>key){
            rear=mid -1;
        }
        else if(arr[mid]<key){
            front = mid+1;
        }
        else{
            return mid+1;
        }
    }
}
int main(){
    int arr[]={6,8,10,19,34,56,89,291},key=89;
    int size=sizeof(arr)/sizeof(arr[0]),res=binarysearch(arr,size,key);
    std::cout<<"The position of target key is "<<res<<std::endl;
}
```

## Sorting Algorithms

#### 1. Selection Sort

```Cpp Client

#include<iostream>

int * selectionSort(int arr[],int size){
    for(int i=0;i<size;i++){
        for(int j=i;j<size;j++){
            if(arr[i]>arr[j]){
                arr[i]=arr[i]-arr[j];
                arr[j]=arr[j]+arr[i];
                arr[i]=arr[j]-arr[i];
            }
        }
    }
    return arr;
}
void printArray(int arr[],int size){
    for(int i=0;i<size;i++){
        std::cout<<arr[i]<<std::endl;
    }
}
int main(){
    int arr[]={25,6,9,1,17,99,38,48};
    int size=sizeof(arr)/sizeof(arr[0]);
    selectionSort(arr,size);
    printArray(arr,size);
}
```
#### 2. Insertion Sort

```Cpp Client
#include<iostream>
int * insertionSort(int arr[],int size){
    for(int i=0;i<size-1;i++){
        if(arr[i]>arr[i+1]){
            arr[i]=arr[i]-arr[i+1];
            arr[i+1]=arr[i+1]+arr[i];
            arr[i]=arr[i+1]-arr[i];
            for(int j=i;j>0;j--){
                if(arr[j]<arr[j-1]){
                    arr[j-1]=arr[j-1]-arr[j];
                    arr[j]=arr[j]+arr[j-1];
                    arr[j-1]=arr[j]-arr[j-1];
                }
            }
        }
    }
    return arr;
}
void printArray(int arr[],int size){
    for(int i=0;i<size;i++){
        std::cout<<arr[i]<<std::endl;
    }
}
int main(){
    int arr[]={25,6,9,1,17,99,38,48};
    int size=sizeof(arr)/sizeof(arr[0]);
    insertionSort(arr,size);
    printArray(arr,size);
}
```

#### 3. Bubble sort

```Cpp Client

#include<iostream>

int * bubblesort(int arr[],int size){
    int i=size;
    while(i!=0){
        for(int j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                arr[j]=arr[j]-arr[j+1];
                arr[j+1]=arr[j+1]+arr[j];
                arr[j]=arr[j+1]-arr[j];
            }
        }
        i--;
    }
    return arr;
}
void printArray(int arr[],int size){
    for(int i=0;i<size;i++){
        std::cout<<arr[i]<<std::endl;
    }
}
int main(){
    int arr[]={41,2,3,81,9,1,-5,0};
    int size=sizeof(arr)/sizeof(arr[0]);
    bubblesort(arr,size);
    printArray(arr,size);
}

```

#### 4. Merge sort

```Cpp Client
#include<iostream>
//merge function
void merge(int arr[], int front, int mid, int rear) {
    int n1=mid-front+1;
    int n2=rear-mid;

    int leftarr[n1], rightarr[n2];

    for(int i=0;i<n1;i++){
        leftarr[i]=arr[front+i];
        
    }
    for(int i=0;i<n2;i++){
        rightarr[i]=arr[mid+1+i];
        
    }
    int i=0,j=0,k=front;
    while(n1>i&&n2>j){
        if(leftarr[i]>rightarr[j]){
            arr[k]=rightarr[j];
            j++;
        } else{
            arr[k]=leftarr[i];
            i++;
        }
        k++;
    }

    while(i<n1){
        arr[k]=leftarr[i];
        i++;
        k++;
    }

    while(j<n2){
        arr[k]=rightarr[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int front, int rear) {
    if (front < rear) {
        int mid = (front + rear) / 2;
        mergeSort(arr, front, mid);
        mergeSort(arr, mid + 1, rear);
        merge(arr, front, mid, rear);
    }
}
//printing the array
void printArray(int arr[], int size) {
    for (int i = 0;i < size;i++) {
        std::cout << arr[i] << std::endl;
    }
}
//main function
int main() {
    int arr[] = { 41,2,3,81,9,1,-5,0 };
    int size = sizeof(arr) / sizeof(arr[0]);
    mergeSort(arr, 0, size - 1);
    printArray(arr, size);
}

```
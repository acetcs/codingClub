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

int main(){
    int arr[]={25,6,9,1,17,99,38,48};
    int size=sizeof(arr)/sizeof(arr[0]);
    for(int i=0;i<size;i++){
        for(int j=i;j<size;j++){
            if(arr[i]>arr[j]){
                arr[i]=arr[i]-arr[j];
                arr[j]=arr[j]+arr[i];
                arr[i]=arr[j]-arr[i];
            }
        }
    }
    for(int i=0;i<size;i++){
        std::cout<<arr[i<<std::endl;
    }
}
```
#### 2. Insertion Sort

```Cpp Client
#include<iostream>

int main(){
    int arr[]={25,6,9,1,17,99,38,48};
    int size=sizeof(arr)/sizeof(arr[0]);

    for(int i=0;i<size;i++){
        if(arr[i]>arr[i+1]){
            arr[i]=arr[i]-arr[i+1];
            arr[i+1]=arr[i+1]+arr[i];
            arr[i]=arr[i+1]-arr[i];
            for(int j=i;j<0;j--){
                if(arr[j]<arr[j-1]){
                    arr[j-1]=arr[j-1]-arr[j];
                    arr[j]=arr[j]+arr[j-1];
                    arr[j-1]=arr[j]-arr[j-1];
                }
            }
        }
    }
    for(int i=0;i<size;i++){
        std::cout<<arr[i<<std::endl;
    }
}
```
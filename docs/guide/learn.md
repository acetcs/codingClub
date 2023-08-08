# How to learn?

Data Structures and Algorithms plays a very vital rule in Software development.
```Cpp client

#include<iostream>

void primeNumbers(int n){
    int count=0;
    for(int i=2;i<=n;i++){
        bool result=true;
        for(int j=1;j<i;j++){
            if(i%j == 0 && j!=1){
                result = false;
            }
        }
        if(result){
            std::cout<< i<<std::endl;
            count++;
        }
    }
    std::cout<<count<<std::endl;

}
int main(){
    int n=200;
    primeNumbers(n);
}
```
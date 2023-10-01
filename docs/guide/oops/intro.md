# Major topics

Data Structures and Algorithms plays a very vital rule in Software development.

### 1. Abstraction
```Cpp client

#include<iostream>

class Parent{
public:
        void common(){
            std::cout<<"In common method of parent"<<std::endl;
        }
        virtual void vary() = 0;
};
class Child1 : public Parent{
    public: 
        void vary() override{
            std::cout<<"In vary method of child 1"<<std::endl;
        }
};
class Child2 : public Parent{
    public:
        void vary() override{
            std::cout<<"In vary method of child 2"<<std::endl;
        }
};

int main(){
    Child1 child1;
    child1.common();
    child1.vary();

    Child2 child2;
    child2.common();
    child2.vary();
}
```

### 2. Encapsulation

```cpp client
#include <iostream>

class Product {
private:
    int __maxprice;

public:
    Product(){
        __maxprice= 900;
    }

    void sell() {
        std::cout << "Selling Price: " << __maxprice << std::endl;
    }

    void set_max_price(int price) {
        __maxprice = price;
    }
};

int main() {
    Product product;
    product.sell();

    // change the price without the function, an inaccessable error will occur if used in cpp
    product.__maxprice = 1000;
    product.sell();

    // using setter function
    product.set_max_price(1000);
    product.sell();

    return 0;
}
```

### 3. Polymorphism

```cpp client
#include<iostream>

class Bishop{
    public:
        void move(){
            std::cout<< "Bishops move diagonally"<<std::endl;
        }
};

class Knights{
    public:
        void move(){
            std::cout<<"Knights can move two squares vertically and one square horizontally, or two square horizontally and one square vertically"<<std::endl;
        }
};
void test_move(Bishop chess_piece){
    chess_piece.move();
}
void test_move(Knights chess_piece){
    chess_piece.move();
}
int main(){
    Bishop b;
    Knights k;
    test_move(b);
    test_move(k);

}
```
### 4. Inheritance
```cpp client
#include<iostream>

class person{
    private:
        std::string name;
    public:
        person(std::string pname) : name(pname){}
        std::string getname(){
            return name;
        }
        virtual bool is_employee(){
            return false;
        }
};

class employee : public person{
public:
    employee(std::string pname) : person(pname){}

    bool is_employee() override{
        return true;
    }
};

int main(){
    person per("person1");
    std::cout<<per.getname()<<" is a employee "<<( per.is_employee() ? "true" : "false")<<std::endl;
    employee emp("Saif");
    std::cout<<emp.getname()<<" is a employee "<<(emp.is_employee() ? "true" : "false")<<std::endl;
}
```
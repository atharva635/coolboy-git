#include<stdio.h>
#include<stdlib.h>
int top = -1,a[10],ele;

void push(int ele){
    if(top == 10){
        printf("overflow\n");
    }
    else{
        top = top +1;
        a[top] = ele;
        printf("Succefully pushed\n");
    }
}

void pop(){
    if(top==-1){
        printf("Underflow\n");
    }
    else{
        ele = a[top];
        top = top-1;
        printf("Succeful poped\n");
    }
}

void peek(){
    if(top==-1){
        printf("Underflow\n");
    }
    else{
        printf("%d\n",a[top]);
    }
}

void isempty(){
    if(top==-1){
        printf("Underflow\n");
    }
    else{
        printf("not empty\n");
    }
}

void display(){
    if(top==-1){
        printf("Underflow\n");
    }
    else{
        for(int i=top;i>=0;i--){
            printf("%d ",a[i]);
        }
        printf("\n");
    }
}
int main()
{
    int n,x;

    while(1){
            printf("push pop peek isempty display\n");
    scanf("%d",&n);
    switch(n){
        case 1:
        printf("Enter element ");
        scanf("%d",&x);
        push(x);
        break;


        case 2:
      
        pop();
        break;


        case 3:

        peek();
        break;


        case 4:
  
        isempty();
        break;


        case 5:
  
        display();
        break;

        case 6:
  
        exit(0);
    } 
    }
    return 0;
}
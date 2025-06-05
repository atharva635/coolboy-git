#include<stdio.h>
#include<stdlib.h>
int top = -1,a[10],ele;
void push(int ele){
    if(top == 10){
        printf("Full\n");
    }
    else{
        top = top +1;
        a[top] = ele;
        printf("Succe pushed\n");
    }
}
void pop(){
    if(top = -1){
        printf("empty\n");
    }
    else{
        ele = a[top];
        top = top -1;
        printf("%d",ele);
        printf("Succe poped");
    }
}
void peek(){
        if(top = -1){
        printf("empty\n");
    }
    else{
        ele = a[top];
        printf("%d",ele);
    }
}
void isempty(){
    if(top == -1){
        printf("Empty");
    }
    else{
        printf("not empty");
    }
}
void display(){
if(top==-1){
    printf("Empty");
}
else{
    for(int i=top;i>=0;i--){
        printf("%d",a[i]);

    }
}
}









int main()
{
    int n,x;
    while(1){
        printf("Push pop peek isempty display\n");
        scanf("%d",&n);
        switch(n){
            case 1:
            printf("enter the number ");
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
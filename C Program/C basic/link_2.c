#include<stdio.h>
int main()
{
    int n,a[10];
    printf("Enter  : ");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d --> ",&a[i]);
    }
    for(int i=0;i<n;i++){
        printf("%d --> ",a[i]);
    }
    printf("NULL\n");

    for(int i=n-1;i>=0;i--){
        printf("%d --> ",a[i]);
    }
    printf("NULL");
    return 0;
}
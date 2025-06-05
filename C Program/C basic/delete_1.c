#include<stdio.h>
int main()
{
int n,a[10];
printf("E : ");
scanf("%d",&n);
for(int i=0;i<n;i++){
    scanf("%d",&a[i]);
}
for(int i=0;i<n;i++){
    printf("%d <--> ",a[i]);
}
printf("NULL\n");


for(int i=0;i<n;i++){
if(i%2==0){
    printf("%d <--> ",a[i]);
}
}
printf("NULL");



    return 0;
}
#include<stdio.h>
int main()
{
    int a[10],n;
    printf("Enter list 1 : \n");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    

    int b[10],m;
    printf("Enter list 2 : \n");
    scanf("%d",&m);
    for(int i=0;i<m;i++){
        scanf("%d",&b[i]);
    }
    
    
     int f[20];
     int i,j;
     for(i=0;i<n;i++){
        f[i]=a[i];
     }
     for(j=0;j<m;j++){
        f[i+j]=b[j];
     }
     printf("Contatenated List : ");
     for(int k=0;k<n+m;k++){
        printf("%d --> ",f[k]);
     }
     printf("NULL");
    return 0;
}

def fact(n):
    if(n==1 or n==0):
        return 1
    else:
        return n*fact(n-1)
n = int(input("Enter the number : "))
print(f"Recursion value = {fact(n)}")

#in python we have to first define the fuction then call that function
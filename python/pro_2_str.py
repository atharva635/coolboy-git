a= '''Dear <|Name|>
You are selected on 
<|Date|>
'''
print(a.replace("<|Name|>" , "Atharva"),(a.replace("<|Date|>","14/03/2005")))
print(a.replace("<|Name|>" , "Atharva").replace("<|Date|>","14/03/2005"))



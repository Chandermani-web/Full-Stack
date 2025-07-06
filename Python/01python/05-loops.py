#For loop
print("Counting from 1 to 5:")
for i in range(1,6):
    print(i)

print("Reverse Counting 5 to 0:")
for i in range(5,0,-1):
    print(i)
    

#While loop
count = 1
print("Print While Loop")
while count <= 5:
    print(count)
    count+=1
    
count = 5
print("Reversed While Loop")
while count >= 1:
    print(count)
    count -= 1
    

print("\nFruits name")
fruits = ["Apple","Banana","Cherry"]
for fruit in fruits:
    print(fruit)
    
print("\nFruits with index")
for index,fruit in enumerate(fruits):
    print(f"{index}:{fruit}")
    
    
person = {"name":"Amit Kumar","age":"19","Phoneno":"8607653657"}
print("\nPerson Dictionary" + "="*20)
for key,value in person.items():
    print(f"{key}:{value}")
    

#Break and Continue
print("\nLoop With Break")
for i in range(1,10):
    if i > 5:
        break
    print(i)

print("\nLoop With Continue")
for i in range(1,19):
    if i > 10:
        continue
    print(i)
    
#Infinite loop with break condition

# i = 1
# while True:
#     print(i)
#     i += 1
    
        
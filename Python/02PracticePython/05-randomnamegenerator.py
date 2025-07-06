import random

print("="*40)
print("✨ FANTASY INDIAN NAME GENERATOR ✨")
print("="*40)

first_name = ["Amit","Ankit","Vishal","Mahesh","Anuj","Partham","Paras","Mayank","Harsh","Aniket","Anshuman","Ayushman","Anurag","Anshul","Aditya","Bheem","Chetan","Chandermani","Chanderveer","Dev","Diljit","Ganesh","Piyush","Vijay","Veena","Ritika","Ritik","Raj","Reena","Prem","Priyanshu","Nitin","Nitesh","Ritesh","Sumesh","Suraj","Sarthak","Tushar","Vansh","Manish"] 
last_name = ["Sharma","Mishra","Jha","Malik","Jangra","Jangid","Kandwal","Kumar","Shrewat","Ahlawat","Ohlyan","Khan","Tiwari","Chandervanshi","Parmar","Pal"] 

count = int(input("How much names do you want? "))

for i in range(count):
    first = random.choice(first_name)
    last = random.choice(last_name)
    print(f"{first} {last}")
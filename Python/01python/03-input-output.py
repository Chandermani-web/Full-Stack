# Collect user info
name = input("What is your name? ")
age = int(input("What is your age? "))
work = input("What are you doing? ")

# Display stored data
print(f"\n✅ Your data has been stored successfully.")
print(f"👤 Name: {name}\n🎂 Age: {age}\n💼 Occupation: {work}")

# Calculate years left until 100
if age >= 100:
    print("⚠️ You've already crossed 100 or are exactly 100!")
    years_left = 0
else:
    years_left = 100 - age
    print(f"📈 You will turn 100 in {years_left} years.")

# Advanced input using unpacking (Father, Mother, Address)
try:
    name2, age2, father_name = input("\nEnter your father's name, mother's name, and address separated by spaces: ").split()
    print(f"\n👨‍👧 Father's Name: {name2}\n👩 Mother's Name: {age2}\n🏡 Address: {father_name}")
except ValueError:
    print("❌ Please enter exactly three values: father's_name mother's_name address")
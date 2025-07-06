print("\n","="*10, " 📲 Simple Calculator 📲 " ,"="*10)

def addition(x,y):
    return x + y
def subtraction(x,y):
    return x - y
def multiply(x,y):
    return x * y
def division(x,y):
        return x / y

while True:
    try:
        print("\n 👀Select operation (or 'quit')👀:\n1. ➕ Addition \n2. ➖ Subtraction \n3. ✖️  Multiplication \n4. ➗ Division\n")
    
        operation = input("\n❓ Enter choice (1-4) or ('exit/quit/enter): ")
    
        if operation.startswith("q") or operation == "" or operation.startswith("e"):
            print("👋Goodbye")
            break
    
        num1 = float(input("\n1️⃣  Enter first number: "))
        num2 = float(input("2️⃣  Enter second number: "))
    
        if operation == "1":
            print(f"\n✅The Sum(➕) of {num1} and {num2} is: {addition(num1,num2)}")
        elif operation == "2":
            print(f"\n✅The Subtraction(➖) of {num1} and {num2} is: {subtraction(num1,num2)}")
        elif operation == "3":
            print(f"\n✅The Multiplication(✖️) of {num1} and {num2} is : {multiply(num1,num2)}")
        elif operation == "4":
            if num2 == 0:
                print("\n🚫Divisible by zero is not possible🚫")
            else:
                print(f"\n✅The Division(➗) of {num1} and {num2} is : {division(num1,num2)}")
        else:
            print("❌Please enter the value between (1-4❌")
        
        
        again = input("\n🔁 Are You want to calculate again? (yes/no): ").lower()
        if not again.startswith("y"):
            break
    except ValueError:
        print("❌ Error! Please Enter valid number! ❌")
        break
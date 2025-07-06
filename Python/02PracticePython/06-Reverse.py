print("="*40)
print("◀️ REVERSE NAME ◀️")
print("="*40)


while True:
    name = input("\nEnter a name: ")
    
    if not name:
        break
    
    reverse_name = name[::-1]
    
    print(f"Your reversed name is: \"{reverse_name}\"")
    print(f"In a parallel universe, they call you \"{reverse_name.title()}\"")
    
    answer = input("\n Try another name? (y/n): ")
    if answer == "n":
        break
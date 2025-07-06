print("="*30)
print("🗨️TEXT CAPITALIZER💬")
print("="*30)

text = input("👤ℹ️ Enter some text: ")

print("\n✨ 1. UPPERCASE \n👀 2. lowercase \n🎉 3. Title Case \n🚀 4. Sentence Case")

option = input("Choose a format (1-4): ")

if option == "1":
    print("👍"+text.upper())
elif option == "2":
    print("👍"+text.lower())
elif option == "3":
    print("👍"+text.title())
elif option == "4":
    print("👍"+text.capitalize())
else:
    print("Bsdk 1-4 ke bich mai dal")
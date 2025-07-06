import time

print("="*10, " ⌚  COUNTDOWN TIMER ⌚", "="*10)
print("✨ Count down from your chosen seconds! ✨")

while True:
    try:    
        second = int(input("🤔 Enter seconds to countdown from: "))
    
        print(f"⏳ Starting countdown from {time} seconds!")
    
        for i in range(second, 0, -1):
            print(f"{i} seconds remaining...")
            time.sleep(1)
        
        print("\n🎉 COUNTDOWN COMPLETE! 🎉")
    
        again = input("\n🔁 Start another countdown? (yes/no): ").lower()
        if not again.startswith("y"):
            break
    except ValueError:
        print("❌ Please enter a number ❌")
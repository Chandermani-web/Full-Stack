print("="*30)
print("🚶 STEP COUNTER 🚶")
print("="*30)

daily_steps = int(input("👤  🎯What is your daily step goals? "))
current_steps = int(input("✨ How much steps have you taken today? "))

remaining = daily_steps - current_steps

if remaining > 0:
    print(f"💪 You need {remaining} more steps to reach your goal!")
else:
    print(f"🎉 Congratulations! You've exceeded your goal by {-remaining} steps!")



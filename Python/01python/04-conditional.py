# 🟦 Collect All Inputs First
name = input("What is your name? ").strip()
age = int(input("What is your age? "))
work = input("What are you doing? ").strip()

# 🟩 Ask Family Information Separately
father = input("What is your father's name? ").strip()
mother = input("What is your mother's name? ").strip()
address = input("What is your address? ").strip()

age_for_license = int(input("Enter your age again for license check: "))
has_license = input("Do you have a driving license? (yes/no): ").strip().lower() == "yes"

email = input("Enter your email: ").strip()

temperature = float(input("Enter your city or village Temperature (°C): "))

# 🟩 Process and Output All at Once
print("\n" + "="*40)
print("✅ YOUR DETAILS & ANALYSIS")
print("="*40)

# User Info
print(f"👤 Name       : {name}")
print(f"🎂 Age        : {age}")
print(f"💼 Occupation : {work}")

# Family Info
print(f"👨‍👧 Father     : {father}")
print(f"👩 Mother     : {mother}")
print(f"🏡 Address    : {address}")

# Age Status
years_left = 0 if age >= 100 else 100 - age
print(f"\n📈 You will turn 100 in {years_left} years.")
print(f"🔎 Status     : {'adult' if age >= 18 else 'minor'}")

# Driving Check
if age_for_license >= 18 and has_license:
    print("🚗 License    : ✅ You can drive a car.")
elif age_for_license >= 18:
    print("🚗 License    : ⚠️ You need to get a driver's licence first.")
else:
    print("🚗 License    : 🚫 You are too young to drive.")

# Email Validation
access = "Granted" if "@" in email and "." in email and "com" in email else "No access!"
print(f"📧 Email      : {email}")
print(f"🔐 Access     : {access}")

# Temperature Advice
if temperature > 30:
    weather_msg = "🥵 It's hot outside."
elif temperature > 20:
    weather_msg = "🌤️ It's a nice day."
else:
    weather_msg = "🧥 It's cold outside."
print(f"\n🌡️ Temperature: {temperature}°C")
print(f"🌍 Weather    : {weather_msg}")

print("="*40)

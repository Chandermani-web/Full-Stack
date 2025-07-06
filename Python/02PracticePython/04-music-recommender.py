import random

print("="*40)
print("🎶🎸Music Recommender🎶🎸")
print("="*40)

genres = {
    "rock" : ["AC/DC","Queen","Led Zeppelin"],
    "pop" : ["Taylor Swift","ED Sheeran", "Ariana Grande"],
    "hip-hop": ["Kendrick Lamar","Drake","J. Cole"],
}

choice = input("❓What genre do you like? (rock/pop/hip-hop): ")

if choice not in genres:
    print("😔Sorry I don't know that genre.")
else:
    print(f"Check out \"{random.choice(genres[choice])}\"")
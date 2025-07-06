import random

print("="*40)
print("=== 🎮 COIN FLIP GAME 🎮 ===")
print("="*40)

while True:
    guess = input("\n🤔Enter your guess (heads/tails):")
    
    choise = ["heads","tails"]
    
    if(guess.lower() != "heads" and guess.lower() != "tails"):
        print("❌ Please Enter 'heads' or 'tails' ❌")
        continue
    
    if(guess == random.choice(choise)):
        print("🎉 You Guessed correctly! You won! 🏆\n")
    else:
        print("😔 Sorry, wrong guess. Try again ☘️\n")
    
    play_again = input("\n🔁 Play Again? (yes/no): ")
    
    if(play_again == "no"):
        print("👋 Bye")
        break
    
    
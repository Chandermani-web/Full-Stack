import time
import random
import os

def clear_screen():
    """Clear the terminal screen"""
    os.system("cls" if os.name == "nt" else "clear")

print("="*10, "🧠 MEMORY SEQUENCE GAME 🧠" ,"="*10)
print("✨ Remember the sequence and type it back! ✨")

print("\nRules:\n-Watch as numbers appear one by one\m-After the sequence is shown, type it back in order\n-Each round adds one more number to remember\n-How far can you go? 🏆\n")

input("Press Enter to start...")

sequence = []
current_round = 1
game_over = False

while not game_over:
    sequence.append(random.randint(1,9))
    
    clear_screen()
    print(f"Remember this Sequence of {len(sequence)} numbers")
    
    for number in sequence:
        time.sleep(0.3)
        print(f"\n{number}")
        time.sleep(0.3)
        clear_screen()
        
    print("\nNow repeat the sequence by typing each number, separated by spaces:")
    player_answer = input("> ")
    
    try:
        player_sequence = [int(num) for num in player_answer.split()]
    except ValueError:
        print("❌Please enter number only!")
        game_over = True
        continue
    
    
    if player_sequence == sequence:
        print(f"🎉Congrats! You remembered all {len(sequence)} numbers!")
        current_round += 1
        time.sleep(2)
    else:
        print(f"🥲 Game Over! you remembered all {current_round - 1} numers!")
        print(f"The correct sequence was: {" ".join(str(num) for num in sequence)}")
        game_over = True
        
    
    if game_over:
        player_again = input("\n Play again? (yes/no): ").lower()
        if player_again.startswith("y"):
            pass
        else:
            print("Thanks for playing! 👋")
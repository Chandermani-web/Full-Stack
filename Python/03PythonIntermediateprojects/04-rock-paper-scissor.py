import random
import time



def display_welcome():
    print("\n==== ROCK PAPER SCISSOR ====")
    print("🪨 📃 ✂️")
    print("\nRules:\n-Rock crushes Scissors\n-Scissors cuts paper\n-Paper covers Rock\n-First to win 3 rounds is the champion!")
    print("\n","-"*40)



def get_user_choice():
    while True:
        print("\nMake your Choice:\n1. Rock 🪨\n-2. Paper 📃\n3. Scissor ✂️")
        
        try:
            choice = int(input("Enter your choice (1-3): "))
            if 1 <= choice <= 3:
                return choice
            else:
                print("Please enter a number between (1-3): ")
        except ValueError:
            print("Please enter a valid number")



def get_computer_choice():
    return random.randint(1,3)



def convert_choice_to_text(choice):
    option = {1:"Rock 🪨",2:"Paper 📃",3: "Scissor ✂️"}
    return option[choice]
    


def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "Tie"
    elif((user_choice == 1 and computer_choice == 3) or
         (user_choice == 3 and computer_choice == 2) or
         (user_choice == 2 and computer_choice == 1)):
        return "user"
    else:
        return "computer"


def display_round_result(user_choice, computer_choice, result):
    user_text = convert_choice_to_text(user_choice)
    computer_text = convert_choice_to_text(computer_choice)
    
    print(f"\nYou chose: {user_text}")
    print("Computer is chosing",end="")
    for _ in range(3):
        print(".",end="",flush=True)
        time.sleep(0.5)
        
    print(f"Computer chose: {computer_text}")
    
    if result == "tie":
        print("It is a tie! 🤝")
    elif result == "user":
        print("You win this round! 🎉")
    else:
        print("Computer wins this rounds! 🖥️")


def play_game():
    """Main game function"""
    display_welcome()
    
    user_score = 0
    computer_score = 0
    target_score = 3
    round_num = 1
    
    while user_score < target_score and computer_score < target_score:
        print(f"\n===Round {round_num} ===")
        print(f"Score: You {user_score} - {computer_score} Computer")
        
        user_choice = get_user_choice()        
        computer_choice= get_computer_choice()
        
        result = determine_winner(user_choice,computer_choice)
        display_round_result(user_choice, computer_choice, result)
        
        if result == "user":
            user_score += 1
        elif result == "computer":
            computer_score += 1
            
        round_num += 1
        
    print("\n==== GAME OVER ====")
    print(f"Final Score: You {user_score} - {computer_score} Computer")
    
    
    if user_score > computer_score:
        print("😸Congrats! You are the champion 🎉")
    else:
        print("🙂Better luck next time! The computer winds this game.")
        
    play_again = input("\nDo you want to play again? (y/n): ").lower()
    if play_again.startswith("y"):
        play_game()
    else:
        print("GoodBye 👋")    
                
                
play_game()
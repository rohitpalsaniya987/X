import random
import time

def spin_wheel():
    print("Spinning the wheel...")
    time.sleep(2)  # Simulating wheel spin with a delay
    return random.randint(1, 100)

def main():
    initial_money = 1000
    current_money = initial_money

    print("Welcome to the Wheel of Fortune Game!")
    print(f"You currently have ${current_money}.")

    while current_money > 0:
        try:
            chosen_number = int(input("Choose a number between 1 and 100: "))
            if 1 <= chosen_number <= 100:
                break
            else:
                print("Invalid choice. Please choose a number between 1 and 100.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")

    result_number = spin_wheel()

    print(f"The wheel landed on {result_number}.")

    if chosen_number == result_number:
        print("Congratulations! You guessed the correct number.")
        current_money += 1000
    else:
        print(f"Oops! You guessed wrong. $20 will be deducted.")
        current_money -= 20

    print(f"You now have ${current_money}.")

    if current_money <= 0:
        print("Game over. You are out of money. Better luck next time!")

if __name__ == "__main__":
    main()

import random

def get_truth():
    truths = [
        "Have you ever cheated on a test?",
        "What is your biggest fear?",
        "What is the most embarrassing thing you've ever done?",
        "Have you ever lied to get out of trouble?",
        # Add more truths here
    ]
    return random.choice(truths)

def get_dare():
    dares = [
        "Do your best impression of a celebrity.",
        "Sing a song in a funny voice.",
        "Act like a chicken for one minute.",
        "Text someone and tell them you love them.",
        # Add more dares here
    ]
    return random.choice(dares)

def main():
    while True:
        choice = input("Choose truth or dare (t/d): ").lower()
        if choice == 't':
            print("Truth: ", get_truth())
        elif choice == 'd':
            print("Dare: ", get_dare())
        else:
            print("Invalid choice. Please choose 't' for truth or 'd' for dare.")

        play_again = input("Do you want to play again? (yes/no): ").lower()
        if play_again != 'yes':
            print("Thanks for playing!")
            break

if __name__ == "__main__":
    main()

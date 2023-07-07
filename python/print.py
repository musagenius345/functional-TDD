def print_numbers_version_one(upperLimit):
    number = 2 
    while number <= upperLimit:# If number is even, print it:
        if number % 2 == 0:
            print(number) 
        number += 1 
def print_numbers_version_two(upperLimit):
    number = 2 
    while number <= upperLimit:
        print(number) 
        # Increase number by 2, which, by definition, is the next even number:
        number +=2

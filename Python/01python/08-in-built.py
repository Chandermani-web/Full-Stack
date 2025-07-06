import random
import math
import datetime
import os
import sys
import time

#Get a random number
random_number = random.randint(1,100)
print(f"Random number is {random_number}")

#Choose a random element from a list
name = ["Chandermani","Anuj Parmar","Partham","Sarthak"]
random_name = random.choice(name)
print(f"Who is Amit father : {random_name}")


#Datetime module
current_time = datetime.datetime.now()
print(f"\nCurrent date and time: {current_time}")
print(f"Today's Date: {datetime.date.today()}")
print(f"Today's Date: {datetime.date.today().year}")


#OS module
current_directory = os.getcwd()
print(f"Current Directory: {current_directory}")
print(f"List of files: {os.listdir('.')}")
print(f"List of files: {os.getpid().real}")

#Time module
print("Waiting for 1 second...")
time.sleep(1)
print("Done!")


#Sys module
print(f"Python Version: {sys.version}")
print(f"Platform: {sys.platform}")
import schedule
import time
import calendar

def homework():
    print("Time for CMPE 131...")


if __name__ == '__main__':
    #Calendar and scheduling a task
    #flask buttons GUI
    print("Main Menu: ")
    print("1. Display Calendar")
    print("2. Schedule a task for the day give time")
    print("3. Subjects/ Schedule")
    print("4. Display week assignments")

    menu = int(input("What would you like to do?"))
    #new Page menu outcome
    if menu == 1:
        year = 2021
        print(calendar.calendar(year))
        month = (int(input("What month do you want to see?")))
        print(calendar.month(year, month))
    elif menu == 2:
        schedule.every().day.at("14:58").do(homework) # Scheduling a time
        while True:
            schedule.run_pending()
            time.sleep(1)



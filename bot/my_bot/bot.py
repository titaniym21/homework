from aiogram import executor
from dispatcher import dp
import personal_actions

from db import BotDB
BotDB = BotDB('db.db')

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)
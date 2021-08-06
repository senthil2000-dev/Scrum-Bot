FROM gorialis/discord.py

WORKDIR /app

COPY ./bot/requirements.txt ./
RUN pip install -r requirements.txt

COPY ./bot .

CMD ["python", "-u", "scrum-bot.py"]

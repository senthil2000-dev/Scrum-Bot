import discord
import re
from discord.ext import commands

with open('token.txt') as file:
    TOKEN = file.read()
bot = commands.Bot(command_prefix='!')

def get_scrum_info(message: str) -> bool:
    pattern = re.compile(r'!scrum(?P<keywords>[^:]+):(?P<content>[\w\W]+)')
    result = pattern.match(message)
    if not result:
        return False
    d = result.groupdict()
    keywords = [keyword.strip() for keyword in d['keywords'].split(',') if keyword.strip() != '']
    if not keywords:
        return False
    content = d['content'].strip()
    print(f'KeyWords: {keywords}')
    print(f'Content: {content}')
    return True

@bot.command(brief='', description='')
async def scrum(ctx: commands.Context):
    content: str = ctx.message.content
    if get_scrum_info(content):
        await ctx.message.add_reaction('\U0001F44D')
    else:
        await ctx.message.add_reaction('\U0001F44E')

@bot.event
async def on_message_edit(before: discord.Message, after: discord.Message):
    for reaction in after.reactions:
        await reaction.remove(bot.user)
    await bot.process_commands(after)

@bot.event
async def on_message(message: discord.Message):
    await bot.process_commands(message)
    if message.reference:
        parent_message_id = message.reference.id
        # check if parent message is already in a document
        # if yes add this message to the same conversation

@bot.event
async def on_ready():
    print("ready!")

bot.run(TOKEN)

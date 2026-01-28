import os
import re
import shutil

# the repo i got the stock icons from had every single png in one folder, so i just had chatgpt write this script to sort them.
# in other words: i didn't write any of this code, just commented for my own understanding

base_dir = "." # whatever folder the script is in

for filename in os.listdir(base_dir): # for every file inside of the folder
    if not os.path.isfile(filename): # if its not a file (a.k.a. another directory), ignore
        continue

    name, ext = os.path.splitext(filename) # splits the name from the extention, the 'Mario1' from the '.png'

    # regexplanation
    # r(
    #    . : match ANY characters you can find, (except newline) ('M')
    #    * : at least 0 or more times
    #    ? : but be lazy with it: try with the fewest amount characters first, try another character ONLY if the rest of the regex fails
    # )(
    #    \d : match one digit 0-9 ('1')
    #    + : do this one or more times (get all of the trailing numbers)
    # )
    # $ : nothing is allowed after those two parts ('Mario1A' would fail / wouldn't match)

    match = re.match(r"(.*?)(\d+)$", name) # regex to split the name and the number while creating a boolean telling us if it worked or not
    if not match: # if the regex didn't work, invalid file name, ignore
        continue

    base_name = match.group(1) # pulls just the name from the file, just 'Mario'

    folder = os.path.join(base_dir, base_name) # creates the path for the folder
    os.makedirs(folder, exist_ok=True) # make the folder if it's not already in there

    shutil.move(filename, os.path.join(folder, filename)) # move the file into the correct folder

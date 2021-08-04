import json
import os

def createFolder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print ('Error: Creating directory. ' +  directory)

with open('./values.json', 'r') as f:
    values = json.load(f)


with open('./index.html', 'r') as f:
    line = f.read()

for key, value in values.items():
    line = line.replace("${" + key + "}", value)

createFolder("./outHTML/")

with open('./outHTML/index.html', 'w') as f:
    f.write(line)

print('작업완료!')
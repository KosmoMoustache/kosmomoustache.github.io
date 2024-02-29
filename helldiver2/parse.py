import json
import re 

data = """
Eagle Strafing Run
Eagle Airstrike
Eagle Cluster Bomb
Eagle Napalm Strike
Eagle Smoke Strike
Eagle 110MM Rocket Pods
Eagle 500kg Bomb
"""

lines = data.strip().split('\n')
json_object = {}

for line in lines:
    sanitized_name = re.sub(r'[^a-zA-Z_]', '', line.replace(' ', '_').replace('/', '_')).lower()
    json_object[sanitized_name] = {
        "name": line,
        "icon": f"./assets/icons/{sanitized_name}.webp",
        "sequence": ""
    }

print(json.dumps(json_object, indent=4))
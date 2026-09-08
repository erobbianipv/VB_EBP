with open('constants.tsx') as f:
    text = f.read()
import re
match = re.search(r'id:\s*"elite-development-program".*?details:\s*`([^`]+)`', text, re.DOTALL)
if match:
    details = match.group(1)
    print("DETAILS FOUND:")
    blocks = [b for b in details.split('\n\n') if b.strip() != '']
    print("BLOCKS COUNT:", len(blocks))
    for i, b in enumerate(blocks):
        lines = b.split('\n')
        print(f"Block {i} first line: {repr(lines[0].strip())}")
        print(f"Block {i} lines count: {len(lines)}")

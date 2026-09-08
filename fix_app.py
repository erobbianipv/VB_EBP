with open("App.tsx", "r") as f:
    content = f.read()
import re
# Find the end of the file normally
match = re.search(r'export default App;\s*', content)
if match:
    original = content[:match.end()]
    with open("App.tsx", "w") as f:
        f.write(original)

with open("App.tsx", "r") as f:
    content = f.read()

# 1. Update getImage3
import re
get_image3_orig = r"if \(programId === 'travel-team'\) return \"https://i.imgur.com/0yycsqq.png\";"
get_image3_new = r"""if (programId === 'travel-team') return "https://i.imgur.com/0yycsqq.png";
    if (programId === 'elite-development-program') return "https://i.imgur.com/mVN6zQs.png";"""
content = re.sub(get_image3_orig, get_image3_new, content)

# 2. Update target audience block
target_audience_orig = r"else if \(isTitleMatch\(section.title, 'target audience'\) && programId === 'academy'\) \{"
target_audience_new = r"else if (isTitleMatch(section.title, 'target audience') && (programId === 'academy' || programId === 'elite-development-program')) {"
content = re.sub(target_audience_orig, target_audience_new, content)

with open("App.tsx", "w") as f:
    f.write(content)

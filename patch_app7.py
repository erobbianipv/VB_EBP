with open("App.tsx", "r") as f:
    content = f.read()

import re

# We will modify the ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER block in App.tsx
old_block = r'''            if \(line\.includes\("ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER"\)\) \{
              const programBoxes = \[
                \{ title: 'Elite Player Development', icon: <Target className="w-8 h-8 text-red-varese mb-4" /> \},
                \{ title: 'Full Board & Accomodation', icon: <Home className="w-8 h-8 text-red-varese mb-4" /> \},
                \{ title: 'Elite Coaching Staff & Facilities', icon: <Users className="w-8 h-8 text-red-varese mb-4" /> \},
                \{ title: 'International Tournaments Opportunities', icon: <Trophy className="w-8 h-8 text-red-varese mb-4" /> \}
              \];
              return \(
                <div key=\{lIdx\} className="mt-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    \{programBoxes\.map\(\(item, i\) => \(
                      <div key=\{i\} className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center min-h-\[160px\] group">
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          \{item\.icon\}
                        </div>
                        <h5 className="font-oswald text-black font-bold uppercase tracking-wider text-base lg:text-sm xl:text-base leading-tight group-hover:text-red-varese transition-colors">\{item\.title\}</h5>
                      </div>
                    \)\)\}
                  </div>
                </div>
              \);
            \}'''

new_block = r'''            if (line.includes("ELITE_DEVELOPMENT_PROGRAM_BOXES_PLACEHOLDER")) {
              const programBoxes = [
                { title: 'Elite Player Development', icon: <Target className="w-8 h-8 text-red-varese mb-4" /> },
                { title: 'Full Board & Accomodation', icon: <Home className="w-8 h-8 text-red-varese mb-4" /> },
                { title: 'Elite Coaching Staff & Facilities', icon: <Users className="w-8 h-8 text-red-varese mb-4" /> },
                { title: 'International Tournaments Opportunities', icon: <Trophy className="w-8 h-8 text-red-varese mb-4" /> }
              ];
              return (
                <div key={lIdx} className="mt-8 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programBoxes.map((item, i) => (
                      <div key={i} className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center min-h-[160px] group">
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h5 className="font-oswald text-black font-bold uppercase tracking-wider text-base lg:text-lg leading-tight group-hover:text-red-varese transition-colors">{item.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }'''

content = re.sub(old_block, new_block, content)

with open("App.tsx", "w") as f:
    f.write(content)

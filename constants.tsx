
import React from 'react';
import { Achievement, StaffMember, Facility, Program } from './types';

export const CLUB_LOGO = "https://i.imgur.com/v00SQfx.png";

export const ACHIEVEMENTS = [
  { title: "CAMPIONATO ITALIANO", count: 10, image: "https://i.imgur.com/vHq0L5K.png" },
  { title: "COPPA ITALIA", count: 4, image: "https://i.imgur.com/k2oT5XF.png" },
  { title: "SUPERCOPPA ITALIANA", count: 1, image: "https://i.imgur.com/4q3Nn3C.png" },
  { title: "COPPA DEI CAMPIONI", count: 5, image: "https://i.imgur.com/jM8V9xS.png" },
  { title: "COPPA DELLE COPPE", count: 2, image: "https://i.imgur.com/Hl8h3hF.png" },
  { title: "COPPA INTERCONTINENTALE", count: 3, image: "https://i.imgur.com/X2f8V5t.png" }
];

export const STAFF: StaffMember[] = [
  {
    name: "LUIS SCOLA",
    role: "CHIEF EXECUTIVE OFFICER",
    bio: ["26 years as a PRO player", "10 seasons in the NBA", "12 seasons in the Euroleague"],
    image: "https://i.imgur.com/L2lsWUH.jpeg",
    category: 'leadership'
  },
  {
    name: "MAKSIM HOROWITZ",
    role: "GM BASKETBALL STRATEGY",
    bio: ["2 years NBA League Office", "5 years Atlanta Hawks"],
    image: "https://i.imgur.com/5n1bXhZ.jpeg",
    category: 'leadership'
  },
  {
    name: "ZACKARY SOGOLOW",
    role: "GM BASKETBALL OPERATIONS",
    bio: ["2 years NBA League Office", "6 years Philadelphia 76ers"],
    image: "https://i.imgur.com/JKw4AEj.jpeg",
    category: 'leadership'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'arena',
    titleKey: 'arena',
    descriptionKey: 'arenaDesc',
    coverImage: "https://i.imgur.com/PVVnsrw.png",
    galleryImages: [
      "https://i.imgur.com/t3fdvkU.jpeg",
      "https://i.imgur.com/AQa6ZU7.jpeg",
      "https://i.imgur.com/Q82fvie.jpeg"
    ],
    galleryDescriptionKey: 'arenaGalleryDesc'
  },
  {
    id: 'campus',
    titleKey: 'campus',
    descriptionKey: 'campusDesc',
    noteKey: 'campusNote',
    coverImage: "https://i.imgur.com/7oppVoG.jpeg",
    galleryImages: [
      "https://i.imgur.com/VyQomc7.jpeg",
      "https://i.imgur.com/4xQhHKX.jpeg",
      "https://i.imgur.com/gv99hGV.jpeg"
    ],
    galleryDescriptionKey: 'campusGalleryDesc',
    secondaryGallery: {
      titleKey: 'campus2.0',
      descriptionKey: 'campus2_0_desc',
      images: [
        "https://i.imgur.com/ji2ZgHb.png",
        "https://i.imgur.com/7uFsaKo.png",
        "https://i.imgur.com/7VQQLfO.png"
      ]
    }
  },
  {
    id: 'housing',
    titleKey: 'eliteHousing',
    descriptionKey: 'eliteHousingDesc',
    coverImage: "https://i.imgur.com/LfpEJsZ.jpeg",
    galleryImages: [
        "https://i.imgur.com/6Nx6xAa.jpeg",
        "https://i.imgur.com/gUAdBl5.jpeg",
        "https://i.imgur.com/tFicZRK.jpeg"
    ],
    galleryDescriptionKey: 'housingGalleryDesc'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "academy",
    title: "BASKETBALL ACADEMY",
    target: "Dedicated to kids between 5 and 19",
    timing: "Year around",
    description: "A commitment to fostering growth through a two-way approach: Grassroots and Elite Player Development.",
    highlights: ["Expert Coaching", "High-quality facilities", "Community engagement"],
    image: "https://i.imgur.com/uTz60Cd.jpeg",
    detailImage: "https://i.imgur.com/XHAw3Qn.jpeg",
    details: `A Vision for the Future: The Basketball Academy
Pallacanestro Varese is proud to announce the establishment of its Basketball Academy, a project born from a deep commitment to fostering the growth of basketball both locally and nationally. This isn’t just a sports program; it’s a collaborative effort to build a legacy of excellence, teamwork, and passion for the game.

A Comprehensive Two-Way Approach
Our Academy is built on two fundamental pillars designed to serve every aspect of the sport:

Grassroots Excellence: We believe in basketball as a powerful tool for the community. Our program promotes an active, positive spirit, helping young athletes develop social skills and a healthy lifestyle.

Elite Player Development: For those dreaming of the big leagues, we provide the ultimate pathway. By offering expert coaching, professional training programs, and access to high-quality facilities, we cultivate the basketball stars of tomorrow.

The Perfect Environment for Young Athletes
We are dedicated to kids between the ages of 5 and 19, providing a structured environment that grows with them. Our program operates year-round, ensuring that development never stops and that every student has the consistent support they need to reach their full potential.

Ambitious Growth & Proven Strategy
We are on a fast track to becoming the preeminent academy in the region. Over a three-year period, we are scaling our operations significantly to provide more opportunities than ever before:

Facilities: Expanding from 1 to 4 professional basketball courts.

Community: Growing from 100 to 500 young athletes.

Expertise: Increasing our staff from 8 to 40 dedicated coaches.

Competition: Scaling from 6 to 30 organized teams.

Our Professional Commitment
To ensure the success of our athletes and partners, we focus on a rigorous development framework. Our roadmap includes professional consulting and follow-up, a robust business plan, strategic naming opportunities, and a constant search for synergy between sport and community.`
  },
  {
    id: "full-time",
    title: "FULL TIME TRAINING",
    target: "Ages 13-17 (Ideally < 15 for Italian Status)",
    timing: "End of August to End of June",
    description: "A comprehensive package designed for year-round development in Varese with professional integration.",
    highlights: ["Italian Player Status potential", "Tailored training programs", "Competitive environment"],
    image: "https://i.imgur.com/LaQoOFy.jpeg",
    detailImage: "https://i.imgur.com/5HSDvUF.jpeg",
    details: `The Elite Full-Time Training Program
Experience an unparalleled, year-round basketball journey in Varese. This program is a meticulously designed package offering a tailored environment and high-level services to elevate dedicated players to the next level. Running from the end of August to the end of June, it provides a consistent, professional atmosphere for growth.

Target Audience & Future Opportunities
This elite path is specifically designed for young athletes looking to build a career in European basketball:
Target Age: Ideally suited for kids between 13 and 17.
Italian Player Status: We prioritize athletes no older than 15 upon entry to facilitate the acquisition of Italian Player Status.
Long-term Growth: By committing to four years within our system, players can acquire Italian status while maintaining their eligibility for their respective National Teams.

A Holistic 360° Offer
We believe that peak performance requires a balance between sports, living conditions, and personal development. Our comprehensive offer includes:
Professional Basketball: Daily training and competition.
Premium Room and Board: High-standard, newly constructed living facilities.
Education: A variety of school paths to ensure academic success alongside sports.

World-Class Training & Sports Science
Our methodology is backed by research and proven success, focusing on the continuous improvement of every individual. The training program covers:
On-Court Fundamentals: Shooting, playmaking, dribbling, and finishing.
Physical Excellence: Strength development, power, speed, agility, and stamina.
Injury Management: Specialized treatment, recovery, and rehabilitation protocols.
Cutting-Edge Technology: We utilize Sports Science tools (Catapult, Pushband, Inertial) and Big Data analytics to monitor performance.
Leadership: Mental conditioning and leadership skills to prepare players for the pressure of professional sports.

Data-Driven Personalization
Through our Research & Analytics Department, we track every practice session to generate detailed reports. We use this data for:
Teaching: Periodic analysis sessions where players engage with their own data.
Personalization: Tailored practice plans designed by coaching staff based on individual insights.
Feedback: Weekly performance evaluations shared with leadership to ensure constant progress.

Premium Living & Academic Success
We provide a "home away from home" located just a 5-minute walk from our training center and major schools:
The Dormitory: Features 14 well-appointed rooms, a spacious dining room for 20 guests, a living area, and private gardens.
Dedicated Staff: A professional chef prepares daily meals, and weekly cleaning services are provided.
Educational Flexibility: We offer access to Public Schools, Private International Schools (European School, Liceo Vico), and Online Partnerships (EDMENTUM, TPT International) to guarantee the perfect balance between study and sport.`
  },
  {
    id: "summer-camp",
    title: "ELITE SUMMER CAMP",
    target: "Ages 15-19",
    timing: "One week (6 days, 5 nights)",
    description: "Immersive 'Train Like a Pro' experience for aspiring basketball players.",
    highlights: ["Serie A techniques", "Elite Competition", "Performance Analytics"],
    image: "https://i.imgur.com/ngjbsbC.jpeg",
    detailImage: "https://i.imgur.com/1GpB0Cl.jpeg",
    details: `Elevate Your Game: The Elite Summer Camp
Join Pallacanestro Varese for an immersive, all-inclusive one-week experience designed for aspiring basketball players who want to push their limits. This intensive program offers a rare taste of the dedication required to succeed in elite basketball, focusing on high-level fundamentals, performance, and sports science.

Target Audience: Young athletes between the ages of 15 and 19.

Timing: A 6-day, 5-night experience during the summer (dates to be confirmed).

The Pro Experience: Train using the same techniques employed by Serie A athletes under the guidance of our elite coaching staff.

The Summer Camp Offer: All-Inclusive Excellence
We provide a comprehensive environment so players can focus entirely on their development:

Elite Training: Individualized 1-on-1 sessions, team practices, scrimmages, and strength training.

Analytics: Personal performance feedback throughout the week based on advanced data.

Premium Housing: Newly renovated (2024) single rooms with shared common spaces, located just a 5-minute walk from the training facility.

Nutrition: Three meals a day freshly made by Italian Chefs, featuring menus driven by sports nutrition.

Official Gear: Every player receives authentic practice jerseys and equipment, identical to those provided to our Serie A team, plus additional merchandise from our team store.

The Full Time Training Program: A Year-Round Path to Pro
For those seeking a long-term professional pathway, our Full Time Training Program provides an unparalleled experience in Varese from late August to the end of June.

Strategic Integration: Players are placed in the most suitable team for their skill level, allowing them to showcase talent in a highly competitive environment.

Italian Player Status: We offer a unique opportunity to acquire Italian player status after four years of commitment to our system, while still maintaining eligibility for your home National Team.

Target Audience: Ideally for kids aged 13 to 17, with a recommendation to join by age 15 to secure future eligibility.

World-Class Sports Science & Personalization
Our program is backed by a dedicated Research & Analytics Department that monitors every practice session. We use cutting-edge technology to ensure peak performance:

Advanced Tools: We utilize Catapult, Pushband, and Inertial sensors alongside Big Data to analyze every move.

Holistic Development: Training covers on-court fundamentals (shooting, playmaking, finishing), strength & conditioning, injury prevention, and Basketball Leadership (mental conditioning).

Data-Driven Feedback: Players receive weekly performance reports and engage in periodic analysis sessions with staff to gain valuable insights into their progress.

Academic Excellence & Living Standards
Education is a pillar of our program. We offer various paths to ensure athletes never have to choose between their studies and their sport:

Flexible Schooling: Options include local public schools, private international schools (European School, Liceo Vico), and certified online partnerships (EDMENTUM, TPT International).

Luxury Dormitory: Our newly constructed housing features 14 well-appointed rooms, a spacious dining area for 20 guests, a dedicated laundry room, and two private gardens.

Professional Care: A dedicated chef and weekly cleaning services are provided to ensure a high-standard living environment.

Learn from the Best: Our Elite Team
Your development is guided by professionals with extensive experience at the highest levels of international basketball:

Matteo Jemoli: Assistant Coach, Pallacanestro Varese.

Marcelo Lopez: Strength & Conditioning Coach, former S&C Coach for the Argentina National Team.

Davide Zonca: Trainer/Physio with 8 years of experience in Serie A.`
  },
  {
    id: "internship",
    title: "COACHES INTERNSHIP",
    target: "Aspiring Coaches",
    timing: "Flexible Duration",
    description: "A professional path for aspiring coaches to learn the Varese methodology directly from our Serie A staff.",
    highlights: ["Methodology Study", "Practice Observation", "Staff Integration"],
    image: "https://i.imgur.com/RQQuoWs.jpeg",
    detailImage: "https://i.imgur.com/WTBbv9k.jpeg",
    details: `Master the Bench: Coaches Internship Program
Step into the world of elite European basketball with an unparalleled opportunity to join the professional coaching staff at Pallacanestro Varese. This program is specifically designed for ambitious international coaches who are eager to gain firsthand experience in a high-stakes, professional environment. Operating during the LBA season from August to June, the program requires a minimum commitment of one month.

Elite Professional Integration
This is more than just a course; it is an immersion into the daily operations of a Serie A basketball team. As an intern, you will:

Shadow the Pros: Gain invaluable insights by observing and learning from our experienced coaching professionals during practices and games.

Active Court Participation: Take a hands-on role by running drills with Serie A players and assisting with professional practices.

Strategic Development: Attend coaches' meetings to understand the tactical and strategic decision-making processes at the highest level.

Youth Development: Contribute to the future of the sport by assisting the coaching staff of our youth teams.

Advanced Scouting and Analytics
Refine your technical skills with access to modern coaching tools and methodologies. The program provides specific training in:

Player Scouting: Learn how to identify and evaluate talent effectively.

Video Analysis: Master the use of Hudl for performance breakdown and video analysis.

Coaching Clinics: Participate in specialized clinics designed to expand your technical and tactical knowledge.

A Comprehensive "All-Inclusive" Package
We take care of the logistics so you can focus entirely on your professional growth. Our all-inclusive offer for interns includes:

Premium Housing: A private, single room in our newly renovated (2024) dormitory, located just a 5-minute walk from the training facilities.

Elite Nutrition: Daily meals (lunch and dinner) freshly prepared by Italian chefs, featuring sports nutrition-driven menus.

Networking: An exceptional opportunity to expand your professional network within the international basketball community.

The Ultimate Resume Builder
The goal of this internship is to transform your coaching acumen. By completing this program, you will acquire practical skills from an esteemed coaching staff and enhance your resume with a prestigious experience that will set you apart from other candidates in the global basketball market.`
  },
  {
    id: "summer-prog",
    title: "SUMMER PROGRAM",
    target: "International Clubs and Academies",
    timing: "July",
    description: "Short-term high-intensity training cycles designed for international clubs and academies during the off-season.",
    highlights: ["Intensity Training", "Elite Competition", "Skill Development"],
    image: "https://i.imgur.com/K09B4ge.png",
    detailImage: "https://i.imgur.com/C9Jvhwq.jpeg",
    details: `The Ultimate Offseason Training Residency
Pallacanestro Varese invites your team to experience the Summer Elite Program, a premium residency designed for Youth National Teams (U14 to U18), Junior Programs, and professional Senior clubs. This program is more than just a training camp; it is a high-performance ecosystem where athletes can immerse themselves in the game. Our all-inclusive, minimum 7-day formula is designed to eliminate every distraction, allowing coaching staff and players to focus entirely on skill development and team chemistry. Every aspect of the program is fully modular and can be tailored to meet your team’s specific technical requirements and scheduling needs.

Pro-Level Facilities & Performance Nutrition
Success on the court starts with the right environment. We provide exclusive daily access (from 9:00 AM to 12:00 PM) to a professional-grade basketball court, ensuring your sessions are private and uninterrupted. Your athletes will also benefit from a dedicated weight and recovery room, as well as specialized physical therapy areas to manage peak physical condition. To fuel this elite training, we provide a personalized catering service with a strict focus on sports nutrition. Each meal is meticulously crafted and delivered directly to the team, featuring a fresh salad bar, lean protein options like chicken or beef, and healthy side dishes specifically designed for high-performance recovery.

Elite Housing & Seamless Logistics
Comfort is essential for mental and physical rejuvenation. Your team will be hosted in newly constructed, 400 sqm elite accommodations that offer the perfect balance of privacy and community. Located just a five-minute walk from the training facility and the arena, the housing includes spacious dining areas, relaxation zones, and two 300 sqm private gardens. To ensure a seamless experience, we handle all transportation logistics. Upon arrival, two spacious 9-seat vans will be waiting to transport your group from the airport directly to your door, with the same dedicated service provided for your departure to guarantee a stress-free conclusion to your camp.

Strategic Location & Italian Culture
Varese’s strategic position offers a unique opportunity to combine elite basketball with world-class travel experiences. When the team is off the court, you can take advantage of our tailored tourist packages designed to showcase the beauty of Northern Italy. Within a short 40-minute drive, your team can explore the vibrant streets of Milan, the breathtaking shores of Lake Como and Lake Maggiore, or the scenic landscapes of Lugano, Switzerland. These excursions are perfect for team-building and creating lasting memories, making your training residency in Varese a truly unforgettable international experience.`,
    successStoryLink: "https://www.instagram.com/reel/C87rC5aI2Xz/"
  }
];

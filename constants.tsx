
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
    overview: "Pallacanestro Varese is proud to announce the establishment of its Basketball Academy, a project born from a deep commitment to fostering the growth of basketball both locally and nationally. This isn’t just a sports program; it’s a collaborative effort to build a legacy of excellence, teamwork, and passion for the game.",
    highlights: ["Expert Coaching", "High-quality facilities", "Community engagement"],
    image: "https://i.imgur.com/uTz60Cd.jpeg",
    detailImage: "https://i.imgur.com/ONYoMaE.jpeg",
    details: `A Comprehensive Two-Way Approach
Our Academy is built on two fundamental pillars designed to serve every aspect of the sport:

Grassroots Excellence: We believe in basketball as a powerful tool for the community. Our program promotes an active, positive spirit, helping young athletes develop social skills and a healthy lifestyle.

Elite Player Development: For those dreaming of the big leagues, we provide the ultimate pathway. By offering expert coaching, professional training programs, and access to high-quality facilities, we cultivate the basketball stars of tomorrow.

Target audience
Our Academy’s comprehensive training programs are strategically engineered to serve a diverse demographic of aspiring youth athletes. We focus our curriculum on a specific developmental window, targeting individuals who fall between the ages of 5 and 19. This range allows us to provide a structured pathway from foundational motor skills to advanced competitive tactics.
To maintain our rigorous safety protocols and ensure that coaching standards are perfectly aligned with each player's physical and cognitive maturity, we enforce a strict eligibility cutoff. Consequently, enrollment for the upcoming season is exclusively available to participants born no later than the year 2020. This policy ensures that every athlete receives the specialized attention and age-appropriate instruction necessary for long-term athletic success.

When and where
Our programs operate on a year-round basis at our premier Varese campus, conveniently located in Via Pirandello. This full-calendar schedule ensures consistent athletic development within a professional environment.

pricing
Please contact us or click here for detailed pricing information tailored to your specific needs.`
  },
  {
    id: "full-time",
    title: "FULL TIME TRAINING PROGRAM",
    target: "Ages 13-17 (Ideally < 15 for Italian Status)",
    timing: "End of August to End of June",
    description: "Experience an unparalleled, year-round basketball journey in Varese. This program is a meticulously designed package offering a tailored environment and high-level services to elevate dedicated players to the next level. Running from the end of August to the end of June, it provides a consistent, professional atmosphere for growth.",
    highlights: ["Italian Player Status potential", "Tailored training programs", "Competitive environment"],
    image: "https://i.imgur.com/LaQoOFy.jpeg",
    detailImage: "https://i.imgur.com/KIuuWg2.jpeg",
    details: `target audience
This elite professional pathway has been meticulously engineered for highly ambitious young athletes who demonstrate a profound commitment to establishing a long-term, high-level career within the competitive European basketball ecosystem. We recognize that the journey to the professional ranks requires more than just talent; it demands a structured, high-performance environment that bridges the gap between youth potential and professional execution.
The program is strategically tailored to address the unique physiological and technical developmental needs of student-athletes aged strictly between 13 and 17. By focusing on this critical age bracket, we are able to provide a specialized competitive framework that is essential for excelling in the modern professional circuit. Our curriculum ensures that every participant is equipped with the tactical intelligence and physical readiness required to navigate the complexities of European basketball at its highest levels.

Future Opportunities
Our recruitment strategy places a high priority on athletes who are no older than 15 years of age at the time of their initial entry into the program. This specific age threshold is a deliberate choice, designed to facilitate the complex legal and athletic process of acquiring Italian Player Status. By starting at this developmental stage, we ensure there is sufficient time to meet the residency and registration requirements mandated by national sports regulations.

By committing to a comprehensive four-year tenure within our integrated system, players are afforded a unique dual-advantage. They can successfully complete the necessary steps to earn their Italian status—providing them with greater flexibility in European professional leagues—while simultaneously maintaining their full eligibility to represent their respective National Teams on the international stage. This structure allows our athletes to broaden their professional horizons without sacrificing their patriotic aspirations.

when and where
Our premium facilities—including the Foresteria Elite Housing and the via Pirandello Campus—are strategically located within a 5-minute walk of each other. This integrated layout optimizes daily transitions for the duration of the program, which runs from late August through late June, allowing athletes to focus entirely on their rigorous training schedule.

pricing
Please contact us or click here for detailed pricing information tailored to your specific needs.`
  },
  {
    id: "summer-camp",
    title: "ELITE SUMMER CAMP",
    target: "Born between 2007 and 2011",
    timing: "One week (6 days, 5 nights)",
    description: "We invite you to join Pallacanestro Varese for a transformative, all-inclusive one-week experience specifically engineered for aspiring basketball players who possess the drive to push their physical and mental limits. This is not merely a training camp; it is a deep dive into a professional culture, offering participants a rare and authentic taste of the relentless dedication and discipline required to achieve success at the highest tiers of elite basketball.",
    highlights: ["Serie A techniques", "Elite Competition", "Performance Analytics"],
    image: "https://i.imgur.com/ngjbsbC.jpeg",
    detailImage: "https://i.imgur.com/bUSyHZP.jpeg",
    details: `target audience
This premier summer experience has been exclusively designed and curated for a select group of ambitious young athletes, specifically those born between 2007 and 2011, who demonstrate an unwavering commitment to achieving elite-level performance. We understand that the off-season is a critical window for growth, and this program serves as the definitive platform for players who are serious about their athletic trajectory and long-term development.
To facilitate this growth, the program offers a sophisticated and high-intensity training environment that is meticulously tailored to meet the needs of high-potential players. Our primary objective is to provide these athletes with the advanced technical tools and tactical insights necessary to refine their individual skill sets. By immersing participants in a professional-grade atmosphere, we empower them to elevate their game to a standard that meets the rigorous demands of the modern professional circuit.

when and where
Our premium facilities—including the Foresteria Elite Housing and the via Pirandello Campus—are strategically located within a 5-minute walk of each other. This integrated layout optimizes daily transitions for the duration of the program, which runs from late August through late June, allowing athletes to focus entirely on their rigorous training schedule.

the training program
Placeholder

Sample Daily Routine
TABLES_PLACEHOLDER`
  },
  {
    id: "internship",
    title: "COACHES INTERNSHIP PROGRAM",
    target: "Aspiring Coaches",
    timing: "Flexible Duration",
    description: "We invite you to step into the prestigious world of elite European basketball with an unparalleled opportunity to integrate directly with the professional coaching staff at Pallacanestro Varese. This immersive program has been specifically designed for ambitious international coaches who are not merely looking for a seminar, but are eager to gain firsthand, high-level experience within a high-stakes, professional environment. By working alongside our technical team, participants will witness the daily operations, tactical planning, and player management strategies that define top-tier European competition.",
    highlights: ["Methodology Study", "Practice Observation", "Staff Integration"],
    image: "https://i.imgur.com/RQQuoWs.jpeg",
    detailImage: "https://i.imgur.com/eRNwmeQ.jpeg",
    details: `target audience
We invite you to step into the prestigious world of elite European basketball with an unparalleled opportunity to integrate directly with the professional coaching staff at Pallacanestro Varese. This immersive program has been specifically designed for ambitious international coaches who are not merely looking for a seminar, but are eager to gain firsthand, high-level experience within a high-stakes, professional environment. By working alongside our technical team, participants will witness the daily operations, tactical planning, and player management strategies that define top-tier European competition.

The program is structured to align with the official LBA (Lega Basket Serie A) season, operating in full capacity from the initial pre-season preparations in August through the final competitive stages in June. To ensure that every visiting coach has ample time to absorb the complexities of our system and build meaningful professional relationships, the program requires a minimum commitment of at least one month. This duration allows for a comprehensive understanding of our coaching philosophy, from scouting and video analysis to the execution of elite-level game plans.

Elite Professional Integration
This is more than just a course; it is an immersion into the daily operations of a Serie A basketball team. As an intern, you will:

Shadow the Pros: Gain invaluable insights by observing and learning from our experienced coaching professionals during practices and games.

Active Court Participation: Take a hands-on role by running drills with Serie A players and assisting with professional practices.

Strategic Development: Attend coaches' meetings to understand the tactical and strategic decision-making processes at the highest level.

Youth Development: Contribute to the future of the sport by assisting the coaching staff of our youth teams.

when and where
The program will be hosted across our premier facilities, specifically the Foresteria Elite Housing and our Campus in via Pirandello. These two flagship locations are strategically situated just a 5-minute walk from one another, ensuring seamless transitions between residency and training. This integrated logistical setup allows athletes to maximize their time and focus entirely on their professional development.

pricing
Please contact us or click here for detailed pricing information tailored to your specific needs.`
  },
  {
    id: "summer-prog",
    title: "SUMMER ELITE PROGRAM",
    target: "International Clubs and Academies",
    timing: "July",
    description: "Short-term high-intensity training cycles designed for international clubs and academies during the off-season. Pallacanestro Varese invites your team to experience the Summer Elite Program, a premium residency designed for Youth National Teams (U14 to U18), Junior Programs, and professional Senior clubs. This program is more than just a training camp; it is a high-performance ecosystem where athletes can immerse themselves in the game.",
    highlights: ["Intensity Training", "Elite Competition", "Skill Development"],
    image: "https://i.imgur.com/K09B4ge.png",
    detailImage: "https://i.imgur.com/C9Jvhwq.jpeg",
    details: `pro-level program
Our all-inclusive, minimum seven-day formula has been strategically developed to provide an elite, high-performance environment that effectively eliminates every possible outside distraction. By providing a seamless, fully managed logistical experience, we allow both the coaching staff and the players to dedicate their entire focus to intensive skill development and the critical process of building team chemistry. We believe that by removing the administrative and logistical burdens of travel, the group can achieve a level of synergy and growth that is simply not possible in a standard training setting.

To ensure that every group achieves its unique goals, every single aspect of this program is fully modular and highly flexible. We understand that no two teams have the same objectives; therefore, the curriculum can be precisely tailored to meet your team’s specific technical requirements and individual scheduling needs. Whether you require advanced tactical walkthroughs, intensive physical conditioning, or specific film study sessions, our framework is designed to adapt to your vision, providing a bespoke professional experience from start to finish.

target audience
Our state-of-the-art facilities and specialized training programs have been specifically engineered to host Youth National Teams, ranging from the U14 to the U18 categories, as well as prestigious Junior Programs in search of an elite performance environment. We understand the unique demands of high-level youth development, and our infrastructure is designed to provide the rigorous standards required by national federations to prepare their next generation of talent for international competition.

In addition to our youth-focused initiatives, we also cater extensively to Medium Level Senior teams who are seeking the perfect strategic balance between professional-grade logistics and high-quality athletic preparation. Whether your objective is the long-term development of emerging young prospects or the meticulous refining of senior-level strategies ahead of a new season, our camp provides the comprehensive, tailored support necessary for success. We take pride in offering a versatile platform where every team, regardless of their specific competitive level, can find the professional tools and dedicated environment they need to excel.

when and where
Experience elite 400 sqm accommodations with private gardens, located just five minutes from the arena. The camp requires a minimum stay of 1 week (7 days, 6 nights), tailored to your team’s specific needs and availability. To ensure total relaxation, we manage all logistics: two 9-seat vans provide seamless airport transfers for both arrival and departure. This setup offers the perfect balance of privacy and community for a stress-free, professional training experience.

pricing
Please contact us or click here for detailed pricing information tailored to your specific needs.`,
    successStoryLink: "https://www.instagram.com/reel/C87rC5aI2Xz/"
  }
];

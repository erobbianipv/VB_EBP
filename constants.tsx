
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
    details: `The academy will operate with a two-way approach:
Grassroots: Promoting basketball as a tool for fostering a positive and active community spirit.
Elite Player Development: Cultivating future basketball stars by providing them with expert coaching, training programs, and access to high-quality facilities.
Over a three year time period, we are committed to becoming the preeminent academy, renowned for both elite player development and unwavering community engagement.`
  },
  {
    id: "full-time",
    title: "FULL TIME TRAINING",
    target: "Ages 13-17 (Ideally < 15 for Italian Status)",
    timing: "End of August to End of June",
    description: "A comprehensive package designed for year-round development in Varese with professional integration.",
    highlights: ["Italian Player Status potential", "Tailored training programs", "Competitive environment"],
    image: "https://i.imgur.com/LaQoOFy.jpeg",
    details: `This program offers a tailored environment featuring high-level services to elevate players’ skills to the next level.
Pallacanestro Varese provides:
Player Development and Integration:
Placement in the most suitable team for their age and skill level.
Players will benefit from a comprehensive tailored training program
Allow players to showcase their talents in a competitive environment.
Future Opportunity:
We offer the potential to acquire Italian player status after four years of commitment within our system, while maintaining eligibility to play for the National Team.`
  },
  {
    id: "summer-camp",
    title: "ELITE SUMMER CAMP",
    target: "Ages 15-19",
    timing: "One week (6 days, 5 nights)",
    description: "Immersive 'Train Like a Pro' experience for aspiring basketball players.",
    highlights: ["Serie A techniques", "Elite Competition", "Performance Analytics"],
    image: "https://i.imgur.com/ngjbsbC.jpeg",
    details: `This immersive program offers an opportunity to:
Train Like a Pro: experience the same training techniques employed by Serie A athletes.
Expert Coaching: learn from elite coaching staff
Elite Competition: compete against other top prospects in a challenging environment.
Development: focus on fundamentals, perfomance, analytics and sports science.
This intensive one week camp is designed to push players’ limits, elevate your skills, and provide a taste of the dedication and commitment required to succeed in Elite basketball.`
  },
  {
    id: "internship",
    title: "COACHES INTERNSHIP",
    target: "Aspiring Coaches",
    timing: "Flexible Duration",
    description: "A professional path for aspiring coaches to learn the Varese methodology directly from our Serie A staff.",
    highlights: ["Methodology Study", "Practice Observation", "Staff Integration"],
    image: "https://i.imgur.com/RQQuoWs.jpeg",
    details: `This program is designed for ambitious international basketball coaches seeking an unparalleled opportunity to gain firsthand experience within a professional coaching staff.
Program Highlights:
Shadow and learn from experienced coaching professionals
Develop coaching skills
Expand professional network
Program Requirements:
Minimum experience level: Basketball coaching license
Language fluency: English mandatory, any additional language is a plus
Time commitment: At least one month`
  },
  {
    id: "summer-prog",
    title: "SUMMER PROGRAM",
    target: "International Clubs and Academies",
    timing: "July",
    description: "Short-term high-intensity training cycles designed for international clubs and academies during the off-season.",
    highlights: ["Intensity Training", "Elite Competition", "Skill Development"],
    image: "https://i.imgur.com/K09B4ge.png",
    details: `The initial 7 days, 6 nights all inclusive offer include:
ACCOMMODATION (single or double rooms based on availability)
FOOD (Breakfast, lunch and dinner)
TRAINING FACILITY EXCLUSIVITY (3h/day use of one full-size, professional basketball court, one weight and recovery room, and one locker room)
TRANSPORTATION from/to Airport

The offer can be customized and tailored based on team’s requests and additional services can be provided.`,
    successStoryLink: "https://www.instagram.com/reel/C87rC5aI2Xz/"
  }
];
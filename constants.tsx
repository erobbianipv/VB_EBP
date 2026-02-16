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

export const PROGRAMS: Program[] = [
  {
    id: "academy",
    title: "BASKETBALL ACADEMY",
    target: "Dedicated to kids between 5 and 19",
    timing: "Year around",
    description: "A commitment to fostering growth through a two-way approach: Grassroots and Elite Player Development.",
    highlights: ["Expert Coaching", "High-quality facilities", "Community engagement"],
    image: "https://i.imgur.com/uTz60Cd.jpeg"
  },
  {
    id: "full-time",
    title: "FULL TIME TRAINING",
    target: "Ages 13-17 (Ideally < 15 for Italian Status)",
    timing: "End of August to End of June",
    description: "A comprehensive package designed for year-round development in Varese with professional integration.",
    highlights: ["Italian Player Status potential", "Tailored training programs", "Competitive environment"],
    image: "https://i.imgur.com/LaQoOFy.jpeg"
  },
  {
    id: "summer-camp",
    title: "ELITE SUMMER CAMP",
    target: "Ages 15-19",
    timing: "One week (6 days, 5 nights)",
    description: "Immersive 'Train Like a Pro' experience for aspiring basketball players.",
    highlights: ["Serie A techniques", "Elite Competition", "Performance Analytics"],
    image: "https://i.imgur.com/ngjbsbC.jpeg"
  },
  {
    id: "internship",
    title: "COACHES INTERNSHIP",
    target: "Aspiring Coaches",
    timing: "Flexible Duration",
    description: "A professional path for aspiring coaches to learn the Varese methodology directly from our Serie A staff.",
    highlights: ["Methodology Study", "Practice Observation", "Staff Integration"],
    image: "https://i.imgur.com/RQQuoWs.jpeg"
  },
  {
    id: "summer-prog",
    title: "SUMMER PROGRAM",
    target: "International Clubs and Academies",
    timing: "July",
    description: "Short-term high-intensity training cycles designed for international clubs and academies during the off-season.",
    highlights: ["Intensity Training", "Elite Competition", "Skill Development"],
    image: "https://i.imgur.com/K09B4ge.png"
  }
];
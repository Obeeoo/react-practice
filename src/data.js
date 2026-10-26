export const faculties = [
  "All",
  "Business & Management",
  "Computing",
  "Engineering",
  "Law",
  "Medicine & Health",
  "Arts & Design",
];
export const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const names = [
  "University of Southampton",
  "University of Liverpool",
  "Newcastle University",
  "University of York",
  "Lancaster University",
  "Queen’s University Belfast",
  "University of Reading",
  "Loughborough University",
  "University of Strathclyde",
  "University of Surrey",
  "University of Sussex",
  "University of Aberdeen",
];
const cities = [
  "Southampton",
  "Liverpool",
  "Newcastle upon Tyne",
  "York",
  "Lancaster",
  "Belfast",
  "Reading",
  "Loughborough",
  "Glasgow",
  "Guildford",
  "Brighton",
  "Aberdeen",
];
export const universities = names.map((name, i) => ({
  id: slug(name),
  name,
  city: cities[i],
  logo: `/images/university-${i}.webp`,
  region: [5, 8, 11].includes(i) ? "Scotland & Northern Ireland" : "England",
  intake: i % 3 === 0 ? "January" : "September",
  score: i > 7 ? "6.0" : "6.5",
  established: [
    1862, 1881, 1834, 1963, 1964, 1845, 1892, 1909, 1796, 1966, 1961, 1495,
  ][i],
}));
const rows = [
  [
    "Advanced Geotechnical Engineering",
    "Engineering",
    9,
    "Postgraduate",
    24900,
    "1 year",
  ],
  [
    "BA Business Administration Events Management",
    "Business & Management",
    1,
    "Undergraduate",
    16800,
    "3 years",
  ],
  [
    "BA Business Finance and Accounting",
    "Business & Management",
    0,
    "Undergraduate",
    17000,
    "3 years",
  ],
  [
    "MSc Business Management",
    "Business & Management",
    3,
    "Postgraduate",
    21600,
    "1 year",
  ],
  ["BSc Computer Science", "Computing", 2, "Undergraduate", 22500, "3 years"],
  [
    "MSc Artificial Intelligence",
    "Computing",
    4,
    "Postgraduate",
    26500,
    "1 year",
  ],
  [
    "BA Animation and Digital Design",
    "Arts & Design",
    6,
    "Undergraduate",
    17000,
    "3 years",
  ],
  ["LLB Law", "Law", 5, "Undergraduate", 19500, "3 years"],
  [
    "BSc Accounting and Finance",
    "Business & Management",
    0,
    "Undergraduate",
    26200,
    "3 years",
  ],
  [
    "MSc Public Health",
    "Medicine & Health",
    8,
    "Postgraduate",
    23000,
    "1 year",
  ],
  [
    "BEng Civil Engineering",
    "Engineering",
    10,
    "Undergraduate",
    24700,
    "3 years",
  ],
  ["MSc Data Science", "Computing", 11, "Postgraduate", 24950, "1 year"],
  [
    "BA Marketing and Management",
    "Business & Management",
    2,
    "Undergraduate",
    19500,
    "3 years",
  ],
  ["MSc Renewable Energy", "Engineering", 8, "Postgraduate", 23500, "1 year"],
  ["BA International Relations", "Law", 3, "Undergraduate", 22000, "3 years"],
  ["BSc Psychology", "Medicine & Health", 6, "Undergraduate", 21400, "3 years"],
];
export const courses = rows.map(
  ([name, faculty, uni, level, fee, duration]) => ({
    id: slug(name),
    name,
    faculty,
    university: universities[uni],
    level,
    fee,
    duration,
  }),
);
export const money = (n) => "£" + n.toLocaleString("en-GB");
export const faqs = [
  [
    "How do I start my study abroad journey?",
    "Start by exploring universities and courses that match your interests. Book a free consultation and we’ll help you understand your options, entry requirements and next steps.",
  ],
  [
    "Which documents do I need to apply?",
    "You will usually need academic transcripts, a valid passport, a personal statement, references and evidence of English language proficiency. Requirements vary by university and course.",
  ],
  [
    "Can I apply for a scholarship?",
    "Many universities offer scholarships for international students. Eligibility, awards and deadlines vary. Our team can help you check the opportunities available for your chosen course.",
  ],
  [
    "Do I need an IELTS score?",
    "English language requirements depend on your university and programme. Some accept other tests or previous English-medium study. Always confirm the current requirements before applying.",
  ],
  [
    "When should I start my application?",
    "Starting 6–12 months before your intended intake gives you time to prepare documents, explore funding and complete the visa process.",
  ],
];

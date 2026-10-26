import { useEffect, useState } from "react";
import { courses, universities, faculties, faqs, money } from "./data";

function Icon({ name = "arrow", size = 20 }) {
  const paths = {
    arrow: "M4 12h16m-6-6 6 6-6 6",
    search: "m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
    globe:
      "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18",
    book: "M3 4h6l3 2 3-2h6v15h-6l-3 2-3-2H3V4m9 2v15",
    pin: "M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 1 1 14 0m-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
    cap: "m2 9 10-5 10 5-10 5L2 9m4 2v6c4 4 8 4 12 0v-6m4-2v8",
    clock: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-5v5l4 2",
    shield: "m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4m-4 10 3 3 5-6",
    mail: "M3 5h18v14H3V5m0 0 9 8 9-8",
    check: "m5 12 4 4L19 6",
    menu: "M3 6h18M3 12h18M3 18h18",
    close: "m5 5 14 14M5 19 19 5",
    filter: "M4 6h16M7 12h10M10 18h4",
    star: "m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6",
    plus: "M12 5v14M5 12h14",
    heart: "M12 21S2 14 2 8c0-6 8-7 10-2 2-5 10-4 10 2 0 6-10 13-10 13",
    building:
      "M4 22V4h16v18M1 22h22M8 8h1m6 0h1M8 12h1m6 0h1M8 16h1m6 0h1M10 22v-3h4v3",
    users:
      "M16 21v-3c0-5-12-5-12 0v3m10-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3 6c4 0 5 3 5 5v3",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
function navigate(to) {
  history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}
function Link({ to, children, className = "", ...props }) {
  return (
    <a
      href={to}
      className={className}
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        if (
          !e.defaultPrevented &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey &&
          e.button === 0
        ) {
          e.preventDefault();
          if (location.pathname + location.search !== to) navigate(to);
        }
      }}
    >
      {children}
    </a>
  );
}
const Button = ({ to = "/contact", children, secondary = false }) => (
  <Link to={to} className={`button ${secondary ? "secondary" : ""}`}>
    {children}
    <Icon size={17} />
  </Link>
);
function Brand({ light = false }) {
  return (
    <Link
      to="/"
      className={`brand ${light ? "light" : ""}`}
      aria-label="The Shield Education home"
    >
      <span className="brand-mark">
        <Icon name="shield" size={35} />
      </span>
      <span>
        THE SHIELD<small>E D U C A T I O N</small>
      </span>
    </Link>
  );
}
function Header({ path }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <Icon name="globe" size={13} />
            Your future. A world of possibilities.
          </span>
          <Link to="/contact">
            <Icon name="mail" size={13} />
            Let’s plan your next chapter ↗
          </Link>
        </div>
      </div>
      <header>
        <div className="container nav">
          <Brand />
          <nav aria-label="Main navigation" className={open ? "open" : ""}>
            {[
              ["Home", "/"],
              ["About us", "/about"],
              ["Universities", "/universities"],
              ["Courses", "/courses"],
              ["Contact us", "/contact"],
            ].map(([label, url]) => (
              <Link
                key={url}
                to={url}
                className={
                  (url === "/" ? path === "/" : path.startsWith(url))
                    ? "active"
                    : ""
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Button>Free consultation</Button>
            <button
              className="menu-button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand light />
          <p>
            Big ambitions deserve the right guidance.
            <br />
            Your trusted companion for studying abroad.
          </p>
          <div className="footer-social">
            <Link to="/contact" aria-label="Contact our team">
              <Icon name="mail" />
            </Link>
            <Link to="/about" aria-label="Meet our team">
              <Icon name="users" />
            </Link>
            <Link to="/universities" aria-label="Explore universities">
              <Icon name="globe" />
            </Link>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/universities">Our universities</Link>
          <Link to="/courses">Find your course</Link>
          <Link to="/courses?level=Postgraduate">Postgraduate study</Link>
          <Link to="/courses?level=Undergraduate">Undergraduate study</Link>
        </div>
        <div>
          <h4>The Shield Education</h4>
          <Link to="/about">About us</Link>
          <Link to="/about#journey">How we help</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/contact">Book a consultation</Link>
        </div>
        <div>
          <h4>Here for your next step</h4>
          <p>
            University selection. Application guidance.
            <br />
            Support throughout your journey.
          </p>
          <Button>Let’s talk about your future</Button>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} The Shield Education. All rights
          reserved.
        </span>
        <span>
          Built around your ambition. <b>✦</b>
        </span>
      </div>
    </footer>
  );
}
function Heading({ label, title, accent, description, left = false, action }) {
  return (
    <div className={`section-heading ${left ? "left" : ""}`}>
      <div>
        {label && <span className="eyebrow">✦ {label}</span>}
        <h2>
          {title} <span className="gradient-text">{accent}</span>
        </h2>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}
function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          A big dream.
          <br />
          An even bigger <span>future.</span>
        </h2>
        <p>
          Let’s find the university, course and opportunities that are right for
          you.
        </p>
        <Button secondary>Book your free consultation</Button>
        <div className="cta-note">
          <Icon name="check" size={15} />
          Personal guidance <i /> No obligation <i /> Your ambitions first
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  return (
    <section className="section container faq-layout">
      <Heading
        left
        label="A little clarity"
        title="Big questions."
        accent="Clear answers."
        description="Taking the next step is easier when you know what to expect."
      />
      <div className="faqs">
        {faqs.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>
              {q}
              <Icon name="plus" size={17} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
function UniversityCard({ uni }) {
  return (
    <article className="university-card">
      <Link to={"/universities/" + uni.id} className="university-logo">
        <img src={uni.logo} alt={`${uni.name} logo`} loading="lazy" />
      </Link>
      <div className="uni-card-body">
        <h3>
          <Link to={"/universities/" + uni.id}>{uni.name}</Link>
        </h3>
        <p className="location">
          <Icon name="pin" size={14} />
          {uni.city}, United Kingdom
        </p>
        <dl>
          <div>
            <dt>Study destination</dt>
            <dd>United Kingdom</dd>
          </div>
          <div>
            <dt>Typical intake</dt>
            <dd>{uni.intake}</dd>
          </div>
          <div>
            <dt>English language guide</dt>
            <dd>{uni.score} IELTS</dd>
          </div>
        </dl>
        <Button secondary to={"/universities/" + uni.id}>
          Explore university
        </Button>
      </div>
    </article>
  );
}
function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-top">
        <span className="course-category">{course.faculty}</span>
        <span className="tag">Explore funding</span>
      </div>
      <h3>
        <Link to={"/courses/" + course.id}>{course.name}</Link>
      </h3>
      <Link className="course-uni" to={"/universities/" + course.university.id}>
        <Icon name="building" size={14} />
        {course.university.name}
      </Link>
      <div className="course-card-bottom">
        <div className="course-meta">
          <span>
            <Icon name="cap" size={14} />
            {course.level}
          </span>
          <span>
            <Icon name="clock" size={14} />
            {course.duration}
          </span>
        </div>
        <div className="fee">
          <small>INDICATIVE TUITION / YEAR</small>
          <strong>
            {money(course.fee)}
            <small> /yr</small>
          </strong>
        </div>
      </div>
      <Link className="card-link" to={"/courses/" + course.id}>
        View course <Icon size={16} />
      </Link>
    </article>
  );
}
function SearchBox() {
  const [type, setType] = useState("Universities");
  const [query, setQuery] = useState("");
  return (
    <div className="search-box">
      <div className="search-tabs" role="group" aria-label="Search type">
        {["Universities", "Courses"].map((t) => (
          <button
            className={t === type ? "selected" : ""}
            key={t}
            onClick={() => setType(t)}
          >
            <Icon name={t === "Courses" ? "book" : "building"} size={17} />
            {t}
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/${type.toLowerCase()}?q=${encodeURIComponent(query)}`);
        }}
      >
        <label>
          <Icon name="search" />
          <input
            aria-label={`Search ${type.toLowerCase()}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Find your ${type === "Courses" ? "perfect course" : "dream university"}…`}
          />
        </label>
        <button className="button" type="submit">
          Find my match <Icon size={17} />
        </button>
      </form>
      <div className="popular-searches">
        <span>Popular searches</span>
        {["Computer Science", "Business", "Engineering"].map((x) => (
          <Link key={x} to={"/courses?q=" + encodeURIComponent(x)}>
            {x} ↗
          </Link>
        ))}
      </div>
    </div>
  );
}
const services = [
  [
    "shield",
    "Expert guidance",
    "A clear path, built around you.",
    "From choosing your university to preparing your application, get thoughtful support at every step.",
  ],
  [
    "cap",
    "Scholarship support",
    "Make your ambitions go further.",
    "Explore university funding options and understand the eligibility and application process.",
  ],
  [
    "globe",
    "Visa preparation",
    "Feel ready for your next chapter.",
    "Get help understanding your documents, timelines and student visa requirements.",
  ],
  [
    "heart",
    "Support that stays",
    "Beyond your offer letter.",
    "Prepare for departure, settling in and making the most of your new student life.",
  ],
];
function Services() {
  return (
    <div className="service-grid">
      {services.map(([icon, title, sub, text], i) => (
        <article className="service-card" key={title}>
          <span className={"service-icon color-" + i}>
            <Icon name={icon} size={25} />
          </span>
          <h3>{title}</h3>
          <strong>{sub}</strong>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
function Journey() {
  return (
    <section className="journey-section section" id="journey">
      <div className="container">
        <Heading
          label="A little direction goes a long way"
          title="Your next chapter,"
          accent="step by step."
        />
        <div className="journey-grid">
          {[
            [
              "01",
              "Let’s talk",
              "Tell us about your interests, ambitions and what matters to you.",
            ],
            [
              "02",
              "Find your fit",
              "Explore universities and courses tailored to your goals.",
            ],
            [
              "03",
              "Make it happen",
              "Prepare your documents and submit a confident application.",
            ],
            [
              "04",
              "Your world awaits",
              "Get ready for your visa, your departure and a fresh start.",
            ],
          ].map(([n, title, text]) => (
            <div key={n}>
              <span className="step-number">
                {n}
                <Icon size={18} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-orbit" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot" />
              BIG DREAMS. BORDERLESS POSSIBILITIES.
            </span>
            <h1>
              Your ambition.
              <br />A world of
              <br />
              <span className="gradient-text">opportunities.</span>
            </h1>
            <p>
              From Bangladesh to your dream university.
              <br />
              Find the right course, unlock new possibilities, and take your
              next step with The Shield Education.
            </p>
            <div className="hero-buttons">
              <Button to="/courses">Explore your future</Button>
              <Link to="/about" className="text-link">
                Get to know us <Icon size={16} />
              </Link>
            </div>
            <div className="hero-trust">
              <span className="trust-mark">
                <Icon name="shield" size={22} />
              </span>
              <div>
                <span className="trust-title">Your ambition comes first.</span>
                <small>Personal guidance. Global possibilities.</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src="/images/students.webp"
                alt="International students with books in London, Canada and Australia"
                fetchPriority="high"
              />
            </div>
            <span className="floating-note note-top">
              <span className="note-icon">
                <Icon name="globe" />
              </span>
              <span>
                Your world awaits<small>Find where you belong</small>
              </span>
            </span>
            <span className="floating-note note-bottom">
              <span className="note-icon green">
                <Icon name="cap" />
              </span>
              <span>
                One dream. Endless possibilities.
                <small>Let’s make your next move count.</small>
              </span>
            </span>
            <div className="visual-caption">
              <span>✦</span> A new perspective starts with a new place.
            </div>
          </div>
        </div>
      </section>
      <section className="match-section container">
        <Heading
          label="Find your path"
          title="A future that feels"
          accent="like you."
          description="Discover universities and courses that match your interests, goals and potential."
        />
        <SearchBox />
      </section>
      <section className="section destinations-section">
        <div className="container">
          <Heading
            left
            label="Go beyond borders"
            title="Where will your"
            accent="ambition take you?"
            action={<Button secondary>Explore your options</Button>}
          />
          <div className="destinations">
            {[
              ["uk", "United Kingdom", "Tradition meets possibility", "01"],
              ["australia", "Australia", "Big ideas. Brighter horizons.", "02"],
              ["canada", "Canada", "A world of new perspectives", "03"],
              [
                "malaysia",
                "Malaysia",
                "Discover something extraordinary",
                "04",
              ],
            ].map(([img, title, desc, n]) => (
              <Link
                key={img}
                to={
                  img === "uk"
                    ? "/universities"
                    : "/contact?destination=" + title
                }
                className="destination-card"
              >
                <div className="destination-copy">
                  <span>{n} / STUDY DESTINATION</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="destination-arrow">
                    <Icon />
                  </span>
                </div>
                <img
                  src={"/images/" + img + ".webp"}
                  alt={title + " city skyline"}
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section services-section container">
        <div className="services-intro">
          <Heading
            left
            label="More than an application"
            title="Your dream."
            accent="Our shared journey."
            description="There’s a lot to think about when you study abroad. You don’t have to figure it all out alone."
          />
          <Button secondary to="/about">
            The Shield difference
          </Button>
          <div className="service-quote">
            <span>“</span>Good guidance doesn’t just open doors.
            <br />
            It helps you choose the right one.
          </div>
        </div>
        <Services />
      </section>
      <section className="section faculties-section">
        <div className="container">
          <Heading
            label="Made for your curiosity"
            title="Big ideas start with"
            accent="the right course."
            description="Explore your interests. Build your expertise. Make your mark."
          />
          <div className="faculty-grid">
            {faculties.slice(1).map((f, i) => (
              <Link key={f} to={"/courses?faculty=" + encodeURIComponent(f)}>
                <span className={"service-icon color-" + (i % 4)}>
                  <Icon
                    name={
                      ["building", "book", "globe", "shield", "heart", "star"][
                        i
                      ]
                    }
                  />
                </span>
                <h3>{f}</h3>
                <span>
                  Explore courses <Icon size={16} />
                </span>
              </Link>
            ))}
          </div>
          <div className="center">
            <Button secondary to="/courses">
              Discover all courses
            </Button>
          </div>
        </div>
      </section>
      <section className="section container">
        <Heading
          left
          label="Find where you belong"
          title="Exceptional universities."
          accent="Extraordinary possibilities."
          action={
            <Link to="/universities" className="text-link">
              View all universities <Icon size={17} />
            </Link>
          }
        />
        <div className="university-grid home-universities">
          {universities.slice(0, 3).map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>
      </section>
      <Journey />
      <FAQ />
      <CTA />
    </>
  );
}
function Breadcrumb({ items }) {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {items.map(([label, to], i) => (
        <span key={i}>
          <span>›</span>
          {to ? <Link to={to}>{label}</Link> : label}
        </span>
      ))}
    </div>
  );
}
function Listing({ kind, search }) {
  const isUni = kind === "universities";
  const params = new URLSearchParams(search);
  const [query, setQuery] = useState(params.get("q") || "");
  const [filterOpen, setFilterOpen] = useState(false);
  const [faculty, setFaculty] = useState(params.get("faculty") || "All");
  const [level, setLevel] = useState(params.get("level") || "All");
  const [region, setRegion] = useState("All");
  const [page, setPage] = useState(1);
  const data = isUni
    ? universities.filter(
        (u) =>
          (u.name + u.city).toLowerCase().includes(query.toLowerCase()) &&
          (region === "All" || u.region === region),
      )
    : courses.filter(
        (c) =>
          (c.name + c.university.name)
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (faculty === "All" || c.faculty === faculty) &&
          (level === "All" || c.level === level),
      );
  const pageSize = isUni ? 9 : 10;
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  function reset() {
    setQuery("");
    setFaculty("All");
    setLevel("All");
    setRegion("All");
    setPage(1);
  }
  function changePage(p) {
    setPage(p);
    document
      .querySelector(".listing-search")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <>
      <section className="listing-heading">
        <div className="container">
          <Breadcrumb items={[[isUni ? "Universities" : "Courses"]]} />
          <span className="eyebrow">
            {isUni
              ? "YOUR PLACE IN THE WORLD"
              : "TURN CURIOSITY INTO POSSIBILITY"}
          </span>
          <h1>
            {isUni ? "Find your university." : "Find your course."}
            <br />
            <span className="gradient-text">Shape your future.</span>
          </h1>
          <p>
            {isUni
              ? "Explore UK universities and find a place to make your own."
              : "Discover a subject you love. Build a future you’re excited about."}
          </p>
        </div>
      </section>
      <main className="container listing-main">
        <div className="listing-search">
          <label>
            <Icon name="search" />
            <input
              type="search"
              aria-label={isUni ? "Search universities" : "Search courses"}
              placeholder={
                isUni
                  ? "Search by university or city…"
                  : "Search courses or universities…"
              }
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </label>
          <button
            className={"button filter-button " + (filterOpen ? "is-open" : "")}
            onClick={() => setFilterOpen(!filterOpen)}
            aria-expanded={filterOpen}
          >
            <Icon name="filter" size={17} />
            Filters
            {(level !== "All" || region !== "All") && (
              <span className="filter-dot" />
            )}
          </button>
        </div>
        {filterOpen && (
          <div className="filter-panel">
            {isUni ? (
              <label>
                Region
                <select
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    setPage(1);
                  }}
                >
                  <option>All</option>
                  <option>England</option>
                  <option>Scotland & Northern Ireland</option>
                </select>
              </label>
            ) : (
              <label>
                Study level
                <select
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                    setPage(1);
                  }}
                >
                  <option>All</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                </select>
              </label>
            )}
            <button className="text-button" onClick={reset}>
              Reset filters
            </button>
          </div>
        )}
        <div className="results-meta" aria-live="polite">
          <span>
            <strong>{data.length}</strong> {isUni ? "universities" : "courses"}{" "}
            to explore
          </span>
          <span>
            Sample catalogue · confirm current details with the university
          </span>
        </div>
        {!isUni && (
          <>
            <div className="match-banner">
              <div>
                <span className="eyebrow">LET’S FIND YOUR FIT</span>
                <h3>Not sure what you qualify for?</h3>
                <p>A conversation can bring your next step into focus.</p>
                <Button>Find my options</Button>
              </div>
              <Icon name="cap" size={95} />
            </div>
            <div className="faculty-filter">
              <strong>Explore by subject</strong>
              <div className="pills">
                {faculties.map((f) => (
                  <button
                    key={f}
                    className={faculty === f ? "selected" : ""}
                    onClick={() => {
                      setFaculty(f);
                      setPage(1);
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {data.length ? (
          <div className={isUni ? "university-grid" : "course-grid"}>
            {data
              .slice((page - 1) * pageSize, page * pageSize)
              .map((item) =>
                isUni ? (
                  <UniversityCard key={item.id} uni={item} />
                ) : (
                  <CourseCard key={item.id} course={item} />
                ),
              )}
          </div>
        ) : (
          <div className="empty-state">
            <Icon name="search" size={36} />
            <h3>No matches just yet.</h3>
            <p>
              Try another search or reset your filters to explore more options.
            </p>
            <button className="button" onClick={reset}>
              Reset search
            </button>
          </div>
        )}
        <div className="pagination" aria-label="Pagination">
          <button disabled={page === 1} onClick={() => changePage(page - 1)}>
            ← Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "selected" : ""}
              aria-label={"Page " + (i + 1)}
              aria-current={page === i + 1 ? "page" : undefined}
              onClick={() => changePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => changePage(page + 1)}
          >
            Next →
          </button>
        </div>
      </main>
      <CTA />
    </>
  );
}
function Sidebar({ course, uni }) {
  const rows = course
    ? [
        ["Indicative tuition / year", money(course.fee)],
        ["Duration", course.duration + " · Full-time"],
        ["Study level", course.level],
        ["Study destination", "United Kingdom"],
      ]
    : [
        ["Founded", "Established in " + uni.established],
        ["University type", "Public university"],
        ["Location", uni.city + ", UK"],
        ["Typical intake", uni.intake],
        ["English language guide", uni.score + " IELTS"],
      ];
  const to =
    "/contact?interest=" + encodeURIComponent(course?.name || uni.name);
  return (
    <aside className="detail-sidebar">
      <div className="sidebar-help">
        <Icon name="globe" size={26} />
        <h3>A future that fits you.</h3>
        <p>Let’s explore your options together.</p>
        <Button secondary to={to}>
          Get free guidance
        </Button>
      </div>
      <div className="sidebar-facts">
        {rows.map(([title, value]) => (
          <div key={title}>
            <span>{title}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <p>
          Illustrative information. Confirm fees, deadlines and entry
          requirements before applying.
        </p>
      </div>
      <Button to={to}>
        {course ? "Enquire about this course" : "Enquire about this university"}
      </Button>
    </aside>
  );
}
function ContentSection({ title, children, id }) {
  return (
    <section className="detail-section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function ReadyBanner({ interest }) {
  return (
    <div className="ready-banner">
      <span className="service-icon">
        <Icon name="cap" size={30} />
      </span>
      <div>
        <h3>Ready for your next chapter?</h3>
        <p>Let’s make a plan that’s right for you.</p>
      </div>
      <Button to={"/contact?interest=" + encodeURIComponent(interest)}>
        Let’s get started
      </Button>
    </div>
  );
}
function UniversityDetail({ uni }) {
  const [subject, setSubject] = useState("All");
  const [entry, setEntry] = useState("Undergraduate");
  const uniCourses = courses.filter((c) => c.university.id === uni.id);
  const programmes = uniCourses.filter(
    (c) => subject === "All" || c.faculty === subject,
  );
  return (
    <main className="container detail-page">
      <Breadcrumb items={[["Universities", "/universities"], [uni.name]]} />
      <div className="detail-title">
        <div className="detail-logo">
          <img src={uni.logo} alt="" />
        </div>
        <div>
          <span className="eyebrow">YOUR PLACE TO GROW</span>
          <h1>{uni.name}</h1>
          <p className="location">
            <Icon name="pin" size={15} />
            {uni.city}, United Kingdom
          </p>
        </div>
      </div>
      <div className="detail-layout">
        <Sidebar uni={uni} />
        <div className="detail-content">
          <div className="uni-stat-grid">
            <div>
              <Icon name="building" />
              <strong>{uni.established}</strong>
              <span>Year established</span>
            </div>
            <div>
              <Icon name="globe" />
              <strong>UK</strong>
              <span>Study destination</span>
            </div>
            <div>
              <Icon name="book" />
              <strong>{uniCourses.length}</strong>
              <span>Featured programmes</span>
            </div>
            <div>
              <Icon name="cap" />
              <strong>{uni.score}</strong>
              <span>IELTS guide</span>
            </div>
          </div>
          <ContentSection title="University overview">
            <p>
              Discover your next chapter at {uni.name}, in the heart of{" "}
              {uni.city}. Explore an academic community where new ideas,
              independent thinking and personal ambition come together.
            </p>
            <p>
              Find a programme that matches your interests and learn more about
              the opportunities available to international students. Our
              advisers can help you compare your options and understand the
              application process.
            </p>
            <div className="info-note">
              This is an illustrative profile based on your design reference.
              Ask our team to verify current university information.
            </div>
          </ContentSection>
          <ContentSection title="University programmes" id="programmes">
            <div className="pills">
              {["All", ...new Set(uniCourses.map((c) => c.faculty))].map(
                (f) => (
                  <button
                    key={f}
                    className={subject === f ? "selected" : ""}
                    onClick={() => setSubject(f)}
                  >
                    {f}
                  </button>
                ),
              )}
            </div>
            <div className="course-grid compact">
              {programmes.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
            <Link
              className="text-link"
              to={"/courses?q=" + encodeURIComponent(uni.name)}
            >
              Explore featured courses <Icon size={17} />
            </Link>
          </ContentSection>
          <ContentSection title="Entry requirements">
            <div className="pills">
              {["Foundation", "Undergraduate", "Postgraduate"].map((x) => (
                <button
                  key={x}
                  className={entry === x ? "selected" : ""}
                  onClick={() => setEntry(x)}
                >
                  {x} entry
                </button>
              ))}
            </div>
            <p className="entry-info">
              {entry === "Foundation"
                ? "Foundation routes may be available for students who need additional preparation before an undergraduate degree."
                : entry === "Undergraduate"
                  ? "Undergraduate applicants typically need recognised secondary qualifications and evidence of English language proficiency."
                  : "Postgraduate applicants typically need a relevant undergraduate degree and evidence of English language proficiency."}{" "}
              Course-specific requirements vary. Contact us to discuss your
              qualifications.
            </p>
          </ContentSection>
          <ContentSection title="Student accommodation">
            <p>
              Finding the right place to live is part of feeling at home.
              Explore university-managed accommodation and private housing
              options in {uni.city}, taking your budget, location and
              preferences into account.
            </p>
            <p>
              Availability, application deadlines and eligibility vary. Check
              accommodation details directly with the university before making
              arrangements.
            </p>
          </ContentSection>
          <ContentSection title="Student life">
            <div className="student-life-image">
              <img
                src="/images/students.webp"
                alt="Students pursuing their education around the world"
                loading="lazy"
              />
            </div>
            <p>
              A new city brings new people, perspectives and possibilities.
              Explore student societies, local culture and the support available
              to help international students settle in.
            </p>
          </ContentSection>
          <ContentSection title="Admission">
            <p>
              Your application route depends on your programme and study level.
              Speak with an adviser about the documents you need, the timeline
              and the next steps for {uni.name}.
            </p>
          </ContentSection>
          <ReadyBanner interest={uni.name} />
        </div>
      </div>
    </main>
  );
}
function CourseDetail({ course }) {
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shield-saved") || "[]").includes(
        course.id,
      );
    } catch {
      return false;
    }
  });
  function save() {
    try {
      const ids = JSON.parse(localStorage.getItem("shield-saved") || "[]");
      localStorage.setItem(
        "shield-saved",
        JSON.stringify(
          saved ? ids.filter((id) => id !== course.id) : [...ids, course.id],
        ),
      );
      setSaved(!saved);
    } catch {
      setSaved(!saved);
    }
  }
  return (
    <main className="container detail-page">
      <Breadcrumb items={[["Courses", "/courses"], [course.name]]} />
      <div className="detail-title">
        <div className="detail-logo">
          <Icon name="book" size={30} />
        </div>
        <div>
          <span className="eyebrow">{course.faculty}</span>
          <h1>{course.name}</h1>
          <Link
            to={"/universities/" + course.university.id}
            className="text-link"
          >
            {course.university.name} <Icon size={14} />
          </Link>
        </div>
        <button
          className={"save-button " + (saved ? "saved" : "")}
          aria-pressed={saved}
          onClick={save}
        >
          <Icon name="heart" size={17} />
          {saved ? "Saved on this device" : "Save course"}
        </button>
      </div>
      <div className="detail-layout">
        <Sidebar course={course} />
        <div className="detail-content">
          <div className="detail-anchors">
            <a href="#overview">Overview</a>
            <a href="#entry">Entry requirements</a>
            <a href="#funding">Funding</a>
            <a href="#careers">Careers</a>
          </div>
          <ContentSection title="Course overview" id="overview">
            <p>
              Take the next step in {course.faculty.toLowerCase()} with{" "}
              {course.name} at {course.university.name}. Develop your knowledge,
              explore new ideas and build skills for your future.
            </p>
            <p>
              This {course.level.toLowerCase()} programme provides an
              opportunity to deepen your interests in an international academic
              setting. Discuss the current course structure, modules and
              available study routes with your adviser.
            </p>
            <div className="info-note">
              Illustrative course information. Fees and entry requirements must
              be confirmed with the university before applying.
            </div>
          </ContentSection>
          <ContentSection title="Entry requirements" id="entry">
            <p>
              Entry requirements are specific to your qualifications, country of
              study and programme. Your adviser can help you understand the
              current criteria.
            </p>
            <h3>Academic qualifications</h3>
            <ul>
              <li>
                {course.level === "Postgraduate"
                  ? "A relevant undergraduate degree or equivalent qualification."
                  : "Recognised secondary school qualifications or a suitable foundation programme."}
              </li>
              <li>Additional subject requirements may apply.</li>
            </ul>
            <h3>English language proficiency</h3>
            <p>
              The university may accept IELTS or another recognised
              qualification. Confirm the overall score, individual band scores
              and any accepted exemptions.
            </p>
          </ContentSection>
          <ContentSection title="Scholarships & funding" id="funding">
            <p>
              Funding can help make your study plans possible. Explore the
              options for your circumstances and confirm eligibility with the
              university.
            </p>
            {[
              [
                "University scholarships",
                "Merit-based awards may be available for international applicants. Eligibility and application deadlines vary.",
              ],
              [
                "International student funding",
                "Explore university bursaries, external scholarships and other sources of financial support.",
              ],
              [
                "Planning your budget",
                "Consider tuition, accommodation, travel, visa costs and everyday living expenses.",
              ],
            ].map(([title, text]) => (
              <div className="funding-row" key={title}>
                <span className="service-icon">
                  <Icon name="cap" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
            <Link
              className="text-link"
              to={"/contact?interest=" + encodeURIComponent(course.name)}
            >
              Talk to us about funding <Icon size={17} />
            </Link>
          </ContentSection>
          <ContentSection title="Career opportunities" id="careers">
            <p>
              Studying {course.faculty.toLowerCase()} can open a range of career
              directions. The right route depends on your interests, skills,
              experience and professional requirements.
            </p>
            <p>
              Ask about placements, careers services and graduate pathways when
              comparing courses. Employment outcomes are not guaranteed.
            </p>
          </ContentSection>
          <ContentSection title="Cost of study">
            <p>
              The indicative annual tuition fee shown for this example is{" "}
              <strong>{money(course.fee)}</strong>. Fees may change, and
              additional costs may apply. Confirm the latest fee and payment
              arrangements directly with the university.
            </p>
          </ContentSection>
          <ContentSection title="Admission">
            <p>
              Prepare a strong application with the right documents and a clear
              timeline. Speak with our team before applying to confirm your next
              steps.
            </p>
          </ContentSection>
          <ReadyBanner interest={course.name} />
        </div>
      </div>
    </main>
  );
}
function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <Breadcrumb items={[["About us"]]} />
          <div className="about-grid">
            <div>
              <span className="eyebrow">HELLO, WE’RE THE SHIELD EDUCATION</span>
              <h1>
                Big ambitions.
                <br />
                Personal guidance.
                <br />
                <span className="gradient-text">A shared journey.</span>
              </h1>
              <p>
                We believe the right education can change the way you see the
                world — and the possibilities you see in yourself.
              </p>
              <Button>Let’s talk about your future</Button>
            </div>
            <div className="about-image">
              <img
                src="/images/students.webp"
                alt="Students pursuing their education around the world"
              />
              <span className="about-stamp">
                YOUR AMBITION
                <br />
                <strong>
                  AT THE HEART
                  <br />
                  OF EVERYTHING.
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section container about-story">
        <span className="eyebrow">OUR PURPOSE</span>
        <h2>
          Opening doors.
          <br />
          <span className="gradient-text">Building confidence.</span>
        </h2>
        <div>
          <p>
            Choosing to study abroad is about more than choosing a university.
            It’s about your interests, your family, your future — and a whole
            new chapter of your life.
          </p>
          <p>
            The Shield Education is here to help you make those choices with
            clarity. From exploring courses to understanding applications and
            preparing for departure, we put your goals at the centre of the
            conversation.
          </p>
          <p>
            We listen first. Then we help you build a plan that feels right for
            you.
          </p>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <Heading
            label="What matters to us"
            title="Guidance with"
            accent="you at its heart."
          />
          <div className="values-grid">
            {[
              [
                "heart",
                "People before paperwork",
                "Your interests, circumstances and ambitions shape the guidance we provide.",
              ],
              [
                "shield",
                "Clarity at every step",
                "Understand your options, ask questions and make informed decisions.",
              ],
              [
                "globe",
                "Possibilities without borders",
                "Explore new places, new perspectives and a future you can feel excited about.",
              ],
            ].map(([icon, title, text]) => (
              <article key={title}>
                <span className="service-icon">
                  <Icon name={icon} size={28} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Journey />
      <CTA />
    </>
  );
}
function Contact({ search }) {
  const params = new URLSearchParams(search);
  const [finished, setFinished] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: params.get("destination") || "United Kingdom",
    interest: params.get("interest") || "",
    message: "",
  });
  function field(name) {
    return {
      name,
      value: form[name],
      onChange: (e) => {
        setForm({ ...form, [name]: e.target.value });
        setFinished(false);
      },
    };
  }
  function download() {
    const blob = new Blob(
      [
        `THE SHIELD EDUCATION — ENQUIRY DRAFT\n\n${Object.entries(form)
          .map(([k, v]) => k + ": " + v)
          .join(
            "\n",
          )}\n\nThis draft has not been sent. A contact service is required to submit it.`,
      ],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shield-enquiry.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <>
      <section className="contact-heading container">
        <Breadcrumb items={[["Contact us"]]} />
        <span className="eyebrow">LET’S START WITH A CONVERSATION</span>
        <h1>
          Your next chapter
          <br />
          <span className="gradient-text">starts with hello.</span>
        </h1>
        <p>
          Questions, big dreams, or just figuring things out?
          <br />
          We’re here to help you find your way.
        </p>
      </section>
      <main className="container contact-layout">
        <aside className="contact-aside">
          <div>
            <span className="service-icon">
              <Icon name="users" size={26} />
            </span>
            <h2>
              Let’s make
              <br />a plan, together.
            </h2>
            <p>Tell us a little about yourself and what you have in mind.</p>
            <ul>
              <li>
                <Icon name="check" />
                Personal, student-first guidance
              </li>
              <li>
                <Icon name="check" />
                Help choosing your course
              </li>
              <li>
                <Icon name="check" />A clearer application journey
              </li>
            </ul>
          </div>
          <div className="contact-quote">
            “Every great journey starts
            <br />
            with a single conversation.”<span>THE SHIELD EDUCATION</span>
          </div>
        </aside>
        <section className="contact-form">
          <h2>Book a free consultation</h2>
          <p>Let’s get to know you and your study plans.</p>
          <div className="form-notice">
            <Icon name="shield" size={18} />
            <span>
              Demo form: submissions are not sent. Prepare and download your
              enquiry below.
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFinished(true);
            }}
          >
            <div className="form-grid">
              <label>
                Full name <span>*</span>
                <input
                  {...field("name")}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  maxLength={100}
                />
              </label>
              <label>
                Email address <span>*</span>
                <input
                  {...field("email")}
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone number
                <input
                  {...field("phone")}
                  type="tel"
                  autoComplete="tel"
                  placeholder="Include your country code"
                />
              </label>
              <label>
                Preferred destination
                <select {...field("destination")}>
                  {[
                    "United Kingdom",
                    "Australia",
                    "Canada",
                    "Malaysia",
                    "Not sure yet",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              University or course of interest
              <input
                {...field("interest")}
                placeholder="What would you like to study?"
              />
            </label>
            <label>
              How can we help?
              <textarea
                {...field("message")}
                rows={4}
                placeholder="Tell us about your goals, questions or plans…"
                maxLength={3000}
              />
            </label>
            <label className="consent">
              <input type="checkbox" required />I understand this creates a
              local draft and does not send my details.
            </label>
            <button className="button" type="submit">
              Prepare my enquiry <Icon size={17} />
            </button>
            {finished && (
              <div className="form-result" role="status">
                <Icon name="check" />
                <div>
                  <strong>Your enquiry draft is ready.</strong>
                  <p>
                    It has not been sent. Download it to keep a copy. A contact
                    service needs to be connected before online submissions are
                    available.
                  </p>
                  <button
                    type="button"
                    className="text-button"
                    onClick={download}
                  >
                    Download my enquiry ↓
                  </button>
                </div>
              </div>
            )}
          </form>
        </section>
      </main>
      <FAQ />
    </>
  );
}
function NotFound() {
  return (
    <main className="container not-found">
      <span className="eyebrow">A LITTLE OFF THE MAP</span>
      <h1>Let’s find your way.</h1>
      <p>
        We couldn’t find this page. There are plenty of possibilities to
        explore.
      </p>
      <Button to="/">Back to home</Button>
    </main>
  );
}
export default function App() {
  const [route, setRoute] = useState(() => ({
    path: location.pathname,
    search: location.search,
  }));
  useEffect(() => {
    const update = () =>
      setRoute({ path: location.pathname, search: location.search });
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  const path = route.path.replace(/\/$/, "") || "/";
  const uni = universities.find((u) => path === "/universities/" + u.id);
  const course = courses.find((c) => path === "/courses/" + c.id);
  const title =
    path === "/"
      ? "Study abroad, with confidence"
      : uni?.name ||
        course?.name ||
        {
          "/about": "About us",
          "/contact": "Contact us",
          "/courses": "Explore courses",
          "/universities": "Explore universities",
        }[path] ||
        "Page not found";
  useEffect(() => {
    document.title = title + " | The Shield Education";
    if (location.hash) {
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    }
  }, [title, route]);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header path={path} />
      <div id="main-content" tabIndex={-1}>
        {path === "/" ? (
          <main>
            <Home />
          </main>
        ) : path === "/universities" ? (
          <Listing
            key={path + route.search}
            kind="universities"
            search={route.search}
          />
        ) : path === "/courses" ? (
          <Listing
            key={path + route.search}
            kind="courses"
            search={route.search}
          />
        ) : uni ? (
          <UniversityDetail key={uni.id} uni={uni} />
        ) : course ? (
          <CourseDetail key={course.id} course={course} />
        ) : path === "/about" ? (
          <main>
            <About />
          </main>
        ) : path === "/contact" ? (
          <Contact key={route.search} search={route.search} />
        ) : (
          <NotFound />
        )}
      </div>
      <Footer />
    </>
  );
}

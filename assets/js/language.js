// Petr Vurm 2026
// Simple data-driven i18n for the CV page.
// Only strings that actually differ between languages are listed here;
// technology names (C#, PHP, Docker, ...) and proper nouns (school/company
// names) are identical in both languages and stay static in index.html.

(function () {
  "use strict";

  const STORAGE_KEY = "cvLanguage";
  const defaultLanguage = "cs";
  const supportedLanguages = ["cs", "en"];

  const languageStrings = {
    cs: {
      meta: {
        title: "Životopis | Petr Vurm",
        description:
          "Software developer se zkušenostmi s webovým a full-stack vývojem, desktopovými aplikacemi, infrastrukturou, toolingem a herními technologiemi.",
        keywords:
          "Petr Vurm, software developer, full-stack developer, C#, PHP, JavaScript, TypeScript, Python, Laravel, React, .NET, Linux, Docker, životopis, CV",
      },
      toolbar: {
        printButton: "Vytisknout",
      },
      contact: {
        location: "Nechanice, Královéhradecký kraj, Česká republika",
      },
      profile: {
        title: "Profil",
        desc:
          "Software developer se zkušenostmi s vývojem webových, full-stack a desktopových aplikací, serverovou infrastrukturou a technickými nástroji. Od roku 2024 působím také jako OSVČ. Ve vlastních projektech se věnuji mimo jiné C#, PHP, JavaScriptu, TypeScriptu, Pythonu, Linuxu, databázím, vývojářskému toolingu, herním technologiím a reverse engineeringu. Jsem zvyklý pracovat samostatně, analyzovat existující systémy a dotahovat řešení od návrhu přes implementaci až po nasazení a ladění.",
      },
      education: {
        title: "Vzdělání",
        entry1: {
          program: "Informační technologie – vývoj aplikací",
          period: "září 2026 – 2027",
        },
        entry2: {
          program: "Informační technologie – všeobecné studium s maturitou",
          period: "září 2021 – 2026",
        },
      },
      experience: {
        title: "Praxe",
        entry1: {
          role: "Software Developer, IT technik",
          place: "Samostatná vývojářská činnost",
          period: "únor 2024 – dosud",
          desc:
            "Vývoj a údržba webových a desktopových aplikací, backendů, administračních rozhraní a databázových řešení. Samostatná analýza problémů, návrh řešení, implementace, deployment a komunikace se zákazníky. Práce také s Linux servery, hostingovou infrastrukturou a automatizací.",
        },
        entry2: {
          role: "Externí vývojář",
          period: "únor 2024 – květen 2024",
          duration: "4 měsíce",
          desc:
            "Údržba a úpravy existujících softwarových projektů, orientace ve starší kódové bázi a implementace požadovaných změn.",
        },
        entry3: {
          role: "Vedoucí školního programátorského týmu",
          period: "červen 2023 – září 2025",
          duration: "2 roky a 4 měsíce",
          desc:
            "Vedení a mentoring členů týmu, rozdělování úkolů, konzultace technických řešení a spolupráce na programátorských projektech.",
        },
      },
      skills: {
        title: "Technické znalosti",
        cat1: { title: "Programovací jazyky a web" },
        cat2: { title: "Frameworky a vývojářské technologie" },
        cat3: {
          title: "Databáze, systémy a infrastruktura",
          monitoring: "Monitoring a základní správa sítí",
        },
        cat4: {
          title: "Další technické oblasti",
          debugging: "Debugging a profiling",
          gamedev: "Game-development a editor tooling",
          cicd: "CI/CD a deployment",
          photoshop: "Adobe Photoshop a střih videa",
        },
      },
      languages: {
        title: "Jazyky",
        cs: { lang: "čeština", level: "rodilý mluvčí" },
        en: {
          lang: "angličtina",
          level: "mírně pokročilá, práce s technickou dokumentací",
        },
        de: { lang: "němčina", level: "začátečník" },
      },
      strengths: {
        title: "Silné stránky",
        item1: "Analytické a logické řešení problémů",
        item2: "Samostatnost a odpovědnost za svěřenou práci",
        item3: "Rychlé učení nových technologií a orientace v cizím kódu",
        item4: "Vedení týmu, mentoring a technická komunikace",
      },
    },
    en: {
      meta: {
        title: "CV | Petr Vurm",
        description:
          "Software developer with experience in web and full-stack development, desktop applications, infrastructure, tooling, and game technologies.",
        keywords:
          "Petr Vurm, software developer, full-stack developer, C#, PHP, JavaScript, TypeScript, Python, Laravel, React, .NET, Linux, Docker, resume, CV",
      },
      toolbar: {
        printButton: "Print",
      },
      contact: {
        location: "Nechanice, Hradec Králové Region, Czech Republic",
      },
      profile: {
        title: "Profile",
        desc:
          "Software developer experienced in web, full-stack, and desktop application development, server infrastructure, and technical tooling. Self-employed (freelance) since 2024. In my own projects I work with, among others, C#, PHP, JavaScript, TypeScript, Python, Linux, databases, developer tooling, game technologies, and reverse engineering. I'm used to working independently, analyzing existing systems, and carrying solutions through from design and implementation to deployment and debugging.",
      },
      education: {
        title: "Education",
        entry1: {
          program: "Information Technology – Application Development",
          period: "September 2026 – 2027",
        },
        entry2: {
          program:
            "Information Technology – General Studies with School-Leaving Exam (Maturita)",
          period: "September 2021 – 2026",
        },
      },
      experience: {
        title: "Experience",
        entry1: {
          role: "Software Developer, IT Technician",
          place: "Independent Software Development",
          period: "February 2024 – present",
          desc:
            "Development and maintenance of web and desktop applications, backends, admin interfaces, and database solutions. Independent problem analysis, solution design, implementation, deployment, and client communication. Also working with Linux servers, hosting infrastructure, and automation.",
        },
        entry2: {
          role: "External Developer",
          period: "February 2024 – May 2024",
          duration: "4 months",
          desc:
            "Maintenance and modification of existing software projects, navigating a legacy codebase, and implementing requested changes.",
        },
        entry3: {
          role: "Lead of the School Programming Team",
          period: "June 2023 – September 2025",
          duration: "2 years 4 months",
          desc:
            "Leading and mentoring team members, assigning tasks, consulting on technical solutions, and collaborating on programming projects.",
        },
      },
      skills: {
        title: "Technical Skills",
        cat1: { title: "Programming Languages & Web" },
        cat2: { title: "Frameworks & Development Technologies" },
        cat3: {
          title: "Databases, Systems & Infrastructure",
          monitoring: "Monitoring and basic network administration",
        },
        cat4: {
          title: "Other Technical Areas",
          debugging: "Debugging and profiling",
          gamedev: "Game development and editor tooling",
          cicd: "CI/CD and deployment",
          photoshop: "Adobe Photoshop and video editing",
        },
      },
      languages: {
        title: "Languages",
        cs: { lang: "Czech", level: "native speaker" },
        en: {
          lang: "English",
          level: "intermediate, works with technical documentation",
        },
        de: { lang: "German", level: "beginner" },
      },
      strengths: {
        title: "Strengths",
        item1: "Analytical and logical problem-solving",
        item2: "Independence and responsibility for assigned work",
        item3: "Fast learning of new technologies and navigating unfamiliar code",
        item4: "Team leadership, mentoring, and technical communication",
      },
    },
  };

  function getIn(obj, path) {
    return path
      .split(".")
      .reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function applyLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
      lang = defaultLanguage;
    }

    const strings = languageStrings[lang];

    document.documentElement.lang = lang;

    if (strings.meta.title) {
      document.title = strings.meta.title;
    }

    const metaMap = {
      'meta[name="description"]': strings.meta.description,
      'meta[name="keywords"]': strings.meta.keywords,
      'meta[property="og:title"]': strings.meta.title,
      'meta[property="og:description"]': strings.meta.description,
      'meta[name="twitter:title"]': strings.meta.title,
      'meta[name="twitter:description"]': strings.meta.description,
    };

    Object.keys(metaMap).forEach((selector) => {
      const el = document.querySelector(selector);
      if (el && metaMap[selector]) {
        el.setAttribute("content", metaMap[selector]);
      }
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getIn(strings, el.getAttribute("data-i18n"));
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-lang-btn") === lang
      );
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable (private mode, disabled storage, ...) - ignore
    }
  }

  function getInitialLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && supportedLanguages.includes(saved)) {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return defaultLanguage;
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getInitialLanguage());

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang-btn"));
      });
    });
  });
})();

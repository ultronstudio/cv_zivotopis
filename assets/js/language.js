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
          "Software developer zaměřený na webové a full-stack aplikace, backend, databáze, AI-assisted development a technické nástroje.",
        keywords:
          "Petr Vurm, software developer, full-stack developer, PHP, JavaScript, TypeScript, C#, Python, Laravel, React, .NET, OpenAI API, LLM, Linux, Docker, životopis, CV",
      },
      toolbar: {
        printButton: "Vytisknout",
      },
      contact: {
        location: "Nechanice, Královéhradecký kraj, Česká republika",
      },
      profile: {
        title: "Profil",
        desc1:
          "Software developer zaměřený na webové a full-stack aplikace, backend, databáze a technické nástroje. Od roku 2024 pracuji také jako OSVČ na vlastních i klientských projektech.",
        desc2:
          "Jsem zvyklý převzít existující systém, zorientovat se v cizím kódu, najít problém a dotáhnout změnu od návrhu přes implementaci a testování až po nasazení. AI nástroje používám jako součást vývoje, analýzy a automatizace, jejich výstupy ale kontroluji, testuji a upravuji podle konkrétního systému.",
        desc3:
          "Vedle webového vývoje se věnuji také serverům, vývojářskému toolingu, herním technologiím a low-level experimentům.",
      },
      education: {
        title: "Vzdělání",
        entry1: {
          program: "Informační technologie – vývoj aplikací",
          period: "září 2026 – dosud",
          desc: "Předpokládané ukončení: 2027",
        },
        entry2: {
          program: "Informační technologie – všeobecné studium IT",
          period: "září 2021 – srpen 2026",
          desc:
            "Široce zaměřené studium informačních technologií zahrnující software, hardware, elektroniku, automatizaci a robotiku. Studium ukončeno přestupem na SPŠE a VOŠ Pardubice.",
        },
      },
      experience: {
        title: "Praxe",
        entry1: {
          role: "Software Developer / OSVČ",
          place: "Samostatná vývojářská činnost",
          period: "únor 2024 – dosud",
          desc:
            "Vývoj, rozšiřování a správa webových aplikací, e-shopů, backendů, administračních rozhraní a databázových řešení. Pracuji na nových projektech i existujících systémech. Řeším analýzu problémů, návrh a implementaci změn, API a externí integrace, deployment, testování a následnou technickou správu. Součástí práce je také komunikace se zákazníky a práce s Linux servery a hostingovou infrastrukturou.",
        },
        entry2: {
          role: "Externí vývojář",
          period: "únor 2024 – květen 2024",
          duration: "4 měsíce",
          desc:
            "Údržba a rozšiřování existujících softwarových projektů, orientace ve starší kódové bázi, debugging a implementace požadovaných změn.",
        },
        entry3: {
          role: "Vedoucí školního programátorského týmu",
          period: "červen 2023 – září 2025",
          duration: "2 roky a 4 měsíce",
          desc:
            "Vedení a mentoring členů týmu, rozdělování práce, konzultace technických řešení a spolupráce na programátorských projektech.",
        },
      },
      skills: {
        title: "Technické znalosti",
        cat1: { title: "Programovací jazyky a web" },
        cat2: {
          title: "Frameworky a vývojářské technologie",
          openai: "OpenAI API / LLM integrace",
        },
        cat3: {
          title: "Databáze, systémy a infrastruktura",
          cicd: "CI/CD a deployment",
          monitoring: "Monitoring a základní správa sítí",
        },
        cat4: {
          title: "Další technické oblasti",
          aiAssisted: "AI-assisted development a práce s LLM",
          aiIntegration: "Integrace AI do aplikací",
          localAi: "Lokální AI modely a vývojářské workflow",
          debugging: "Debugging a profiling",
          gamedev: "Game development a editor tooling",
          photoshop: "Adobe Photoshop a střih videa",
        },
      },
      languages: {
        title: "Jazyky",
        cs: { lang: "čeština", level: "rodilý mluvčí" },
        en: {
          lang: "angličtina",
          level: "práce s technickou dokumentací a běžná technická komunikace",
        },
        de: { lang: "němčina", level: "základy" },
      },
      strengths: {
        title: "Silné stránky",
        item1: "Analytické a logické řešení problémů",
        item2: "Samostatnost a odpovědnost za svěřenou práci",
        item3: "Rychlá orientace v nových technologiích a cizím kódu",
        item4: "Vedení týmu, mentoring a technická komunikace",
      },
    },
    en: {
      meta: {
        title: "CV | Petr Vurm",
        description:
          "Software developer focused on web and full-stack applications, backend systems, databases, AI-assisted development, and technical tooling.",
        keywords:
          "Petr Vurm, software developer, full-stack developer, PHP, JavaScript, TypeScript, C#, Python, Laravel, React, .NET, OpenAI API, LLM, Linux, Docker, resume, CV",
      },
      toolbar: {
        printButton: "Print",
      },
      contact: {
        location: "Nechanice, Hradec Králové Region, Czech Republic",
      },
      profile: {
        title: "Profile",
        desc1:
          "Software developer focused on web and full-stack applications, backend systems, databases, and technical tooling. Since 2024, I have also worked as a self-employed developer on both client and personal projects.",
        desc2:
          "I am used to taking over existing systems, navigating unfamiliar code, finding the actual problem, and carrying changes from design through implementation and testing to deployment. I use AI tools as part of development, analysis, and automation, while reviewing, testing, and adapting their output to the specific system.",
        desc3:
          "Alongside web development, I also work with servers, developer tooling, game technologies, and low-level experiments.",
      },
      education: {
        title: "Education",
        entry1: {
          program: "Information Technology – Application Development",
          period: "September 2026 – present",
          desc: "Expected graduation: 2027",
        },
        entry2: {
          program: "Information Technology – Broad IT Curriculum",
          period: "September 2021 – August 2026",
          desc:
            "Broadly focused IT studies covering software, hardware, electronics, automation, and robotics. The studies ended when I transferred to SPŠE a VOŠ Pardubice.",
        },
      },
      experience: {
        title: "Experience",
        entry1: {
          role: "Software Developer / Self-employed",
          place: "Independent Software Development",
          period: "February 2024 – present",
          desc:
            "Development, extension, and maintenance of web applications, e-commerce systems, backends, administration interfaces, and database solutions. I work on both new projects and existing systems, covering problem analysis, solution design and implementation, APIs and third-party integrations, deployment, testing, and ongoing technical maintenance. The work also includes client communication and Linux server and hosting infrastructure administration.",
        },
        entry2: {
          role: "External Developer",
          period: "February 2024 – May 2024",
          duration: "4 months",
          desc:
            "Maintenance and extension of existing software projects, navigating a legacy codebase, debugging, and implementing requested changes.",
        },
        entry3: {
          role: "Lead of the School Programming Team",
          period: "June 2023 – September 2025",
          duration: "2 years 4 months",
          desc:
            "Leading and mentoring team members, assigning work, consulting on technical solutions, and collaborating on programming projects.",
        },
      },
      skills: {
        title: "Technical Skills",
        cat1: { title: "Programming Languages & Web" },
        cat2: {
          title: "Frameworks & Development Technologies",
          openai: "OpenAI API / LLM integrations",
        },
        cat3: {
          title: "Databases, Systems & Infrastructure",
          cicd: "CI/CD and deployment",
          monitoring: "Monitoring and basic network administration",
        },
        cat4: {
          title: "Other Technical Areas",
          aiAssisted: "AI-assisted development and working with LLMs",
          aiIntegration: "AI integration in applications",
          localAi: "Local AI models and developer workflows",
          debugging: "Debugging and profiling",
          gamedev: "Game development and editor tooling",
          photoshop: "Adobe Photoshop and video editing",
        },
      },
      languages: {
        title: "Languages",
        cs: { lang: "Czech", level: "native speaker" },
        en: {
          lang: "English",
          level: "technical documentation and everyday technical communication",
        },
        de: { lang: "German", level: "basic" },
      },
      strengths: {
        title: "Strengths",
        item1: "Analytical and logical problem-solving",
        item2: "Independence and responsibility for assigned work",
        item3: "Quick orientation in new technologies and unfamiliar code",
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

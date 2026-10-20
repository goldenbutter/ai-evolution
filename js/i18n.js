const translations = {
  en: {
    // Page meta (document title and description)
    "meta.title": "How AI Changed My Work | Bithun",
    "meta.description": "I started out using AI as a smarter search engine. These days I run a team of AI agents, and between us we handle what used to take five specialists.",

    // Topbar
    "topbar.cta": "Let's Connect",

    // Side navigation
    "nav.s0": "Intro",
    "nav.s0.aria": "Go to Intro",
    "nav.s1": "Before and After AI",
    "nav.s1.aria": "Go to Before and After AI",
    "nav.s2": "Six Phases",
    "nav.s2.aria": "Go to Six Phases",
    "nav.s3": "Business Impact",
    "nav.s3.aria": "Go to Business Impact",
    "nav.s4": "Token Costs",
    "nav.s4.aria": "Go to Token Costs",
    "nav.s5": "Bottom Line",
    "nav.s5.aria": "Go to Bottom Line",
    "nav.s6": "Connect",
    "nav.s6.aria": "Go to Connect",

    // Hero
    "hero.tag": "A Working Engineer's View",
    "hero.h1": "AI Won't Take Your Job.",
    "hero.h1.em": "Someone Who Knows AI Will.",
    "hero.sub": "I started out using AI as a smarter search engine. These days I run a team of AI agents, and between us we handle what used to take five specialists.",
    "hero.stat1.num": "10\u00D7",
    "hero.stat1.label": "Productivity Gain",
    "hero.stat2.num": "15-\u206030d \u2192 1-\u20602d",
    "hero.stat2.label": "Project Timeline",
    "hero.stat3.num": "5 \u2192 1",
    "hero.stat3.label": "Headcount Needed",
    "hero.scroll": "scroll",
    "hero.img.alt": "Portrait of Bithun",

    // Two Eras
    "eras.label": "The Shift",
    "eras.title": "Before and After AI",
    "eras.body": "I've built software both ways. For me, most of the difference comes down to how the team is put together.",
    "eras.before.tag": "Pre-AI Era",
    "eras.before.h3": "The Old Workflow",
    "eras.before.1": "Five specialists needed: backend, frontend, DevOps, QA, and technical writer",
    "eras.before.2": "Full salary, pension contributions, and benefits for each of five people",
    "eras.before.3": "Annual leave and sick days push project dates back, often at short notice",
    "eras.before.4": "Knowledge transfer takes time whenever someone joins, leaves, or changes role",
    "eras.before.5": "The frontend waits for the backend, and QA waits for both",
    "eras.before.6": "Timezone gaps and calendar clashes keep people waiting on each other every day",
    "eras.before.7": "Finding an answer means a slow hunt through Google, Stack Overflow, and the docs",
    "eras.before.8": "Manual code reviews lose days to comment threads and rework",
    "eras.before.9": "Knowledge lives in people's heads and goes when they do",
    "eras.after.tag": "Post-AI Era",
    "eras.after.h3": "The New Workflow",
    "eras.after.1": "One AI-fluent engineer leads a team of AI agents that cover all five roles",
    "eras.after.2": "Agents cost LLM tokens instead of five salaries, pensions, and benefits",
    "eras.after.3": "Leave and sick days don't apply to agents, so they're available 24/7",
    "eras.after.4": "Each agent session starts from persistent memory, which replaces knowledge transfer",
    "eras.after.5": "Backend, frontend, and QA tasks run at the same time",
    "eras.after.6": "Work starts as soon as the project needs it, whatever the timezone",
    "eras.after.7": "Getting answers from the codebase itself is faster and more accurate than a web search",
    "eras.after.8": "An agent reviews every commit straight away and refactors where needed",
    "eras.after.9": "Project knowledge stays in agent memory and skills",

    // Six Phases
    "phases.label": "Personal Evolution",
    "phases.title": "Six Phases of Using AI",
    "phases.body": "I went through these phases in order. Each one changed the way I worked and what I could take on.",
    "phase1.num": "Phase One",
    "phase1.title": "AI as a Smarter Search Engine",
    "phase1.desc": "Google used to be my default. Then I started asking AI to explain concepts and documentation, and to show me where my understanding was off. Instead of scanning ten Stack Overflow threads, I got answers faster by asking follow-up questions about my exact problem.",
    "phase1.impact": "\u26A1 2\u00D7 faster information retrieval",
    "phase2.num": "Phase Two",
    "phase2.title": "AI-Assisted Code Review & Generation",
    "phase2.desc": "AI began writing code snippets and reviewing my PRs. The implementation was still manual. I'd copy the code, adapt it, test it, and commit it myself. But the quality bar rose. The AI caught bugs before they shipped and suggested patterns I hadn't considered, even at the end of a long review.",
    "phase2.impact": "\u26A1 Better code quality, faster reviews",
    "phase3.num": "Phase Three",
    "phase3.title": "Context-Driven Code Generation",
    "phase3.desc": "Once I learned to give AI real project context (architecture docs, screenshots, API specs), the code it wrote looked like it belonged in my codebase. It could scaffold entire modules from a project brief, and its solutions took the rest of the system into account.",
    "phase3.impact": "\u26A1 Complete features built from a brief",
    "phase4.num": "Phase Four",
    "phase4.title": "The Autonomous AI Agent",
    "phase4.desc": "This was the biggest jump for me. The agent understands the whole project and can plan, implement, test, and fix things on its own. I describe the result I want and let it work out how to get there. When it changes code or makes an architecture decision, it can explain why.",
    "phase4.impact": "\u26A1 From pair programming to delegating tasks",
    "phase5.num": "Phase Five",
    "phase5.title": "Running a Team of AI Agents",
    "phase5.desc": "Next came a virtual department, with me as the team lead. Agents for backend, frontend, DevOps, QA, and documentation all work on the same project in parallel and carry on through nights and holidays. They coordinate through shared memory and follow the coding standards I wrote into their skills. As they push their work to GitHub, they keep the README files up to date.",
    "phase5.impact": "\u26A1 One person = a full engineering team",
    "phase6.num": "Phase Six",
    "phase6.title": "Automating Everything Repetitive",
    "phase6.desc": "AI does a lot more for me than write code. It sorts my email, summarises and schedules meetings, manages folders, processes spreadsheets, and builds a presentation when I ask for one. I hand off the repetitive work that would otherwise take me hours.",
    "phase6.impact": "\u26A1 Automation across work and everyday life",

    // Business Impact
    "roi.label": "Business Impact",
    "roi.title": "The Numbers That Leadership Asks About",
    "roi.body": "I like a clever demo as much as anyone, but I judge AI by what it does to cost and delivery time.",
    "roi.card1.num": "15\u00D7 faster",
    "roi.card1.label": "Project Delivery",
    "roi.card1.desc": "A project that used to take 15-\u206030 days now takes 1-\u20602 days. The quality hasn't dropped and the results are more consistent. Rework no longer sits in a queue until someone is available.",
    "roi.card2.num": "10+ projects",
    "roi.card2.label": "Per Month vs. 1-\u20602 Before",
    "roi.card2.desc": "Agents work on several projects at once rather than one after another, which is how a team that shipped 1-\u20602 projects a month now ships 10 or more.",
    "roi.card3.num": "5 \u2192 1",
    "roi.card3.label": "Headcount Needed",
    "roi.card3.desc": "One AI-fluent engineer with a team of AI agents covers the work of five specialists. The agents need no salaries, pensions, leave, or onboarding, and what they learn stays in shared memory.",
    "team.old.header": "Traditional Hire (5 people)",
    "team.old.1.name": "Backend Engineer",
    "team.old.1.cost": "salary \u00B7 pension \u00B7 leave",
    "team.old.2.name": "Frontend Engineer",
    "team.old.2.cost": "salary \u00B7 pension \u00B7 leave",
    "team.old.3.name": "DevOps Engineer",
    "team.old.3.cost": "salary \u00B7 pension \u00B7 leave",
    "team.old.4.name": "QA Engineer",
    "team.old.4.cost": "salary \u00B7 pension \u00B7 leave",
    "team.old.5.name": "Technical Writer",
    "team.old.5.cost": "salary \u00B7 pension \u00B7 leave",
    "team.old.total.label": "Total Cost",
    "team.old.total.value": "5\u00D7 salary + overhead",
    "team.new.header": "AI-Fluent Hire (1 person)",
    "team.new.1.name": "AI-Fluent Engineer",
    "team.new.1.cost": "leads the agents",
    "team.new.2.name": "Backend Agent",
    "team.new.2.cost": "no leave \u00B7 24/7",
    "team.new.3.name": "Frontend Agent",
    "team.new.3.cost": "no leave \u00B7 24/7",
    "team.new.4.name": "DevOps + QA Agent",
    "team.new.4.cost": "no leave \u00B7 24/7",
    "team.new.5.name": "Docs + Review Agent",
    "team.new.5.cost": "no leave \u00B7 24/7",
    "team.new.total.label": "Total Cost",
    "team.new.total.value": "1 salary + LLM tokens",

    // Token Efficiency
    "token.label": "Cost Control",
    "token.title": "How I Cut Token Costs",
    "token.body": "AI is part of the job now. Using it without wasting tokens is harder, and I think it matters more, because the bill climbs quickly if nobody is watching.",
    "tip1.title": "Build Reusable Agent Skills",
    "tip1.desc": "I put the project's architecture and coding standards into skills and memory that every agent inherits. That way I don't have to repeat myself.",
    "tip2.title": "Keep the Context Small",
    "tip2.desc": "The agent only gets what the current task needs. Loading the whole codebase just burns tokens when a short excerpt would do.",
    "tip3.title": "Persistent Memory Across Sessions",
    "tip3.desc": "Agents that remember past decisions and the project structure don't spend tokens on a fresh tour of the codebase each session. As their memory grows, they get to know the project better.",
    "tip4.title": "Precision Prompting",
    "tip4.desc": "A vague prompt sends the agent off exploring, and the detours add up. When I spell out the task and what a good result looks like, the first attempt is right more often.",
    "tip5.title": "Task Scoping & Batching",
    "tip5.desc": "I group related changes into one agent session. Every new session costs tokens to set up before the agent does any real work, and I'd rather pay that once per batch.",
    "tip6.title": "Monitor & Audit Token Usage",
    "tip6.desc": "Before a long autonomous run, I set a token budget for it. I also track usage per project and per agent, which shows me early on whether spending is heading towards the monthly limit.",

    // Bottom Line
    "cta.tag": "The Bottom Line",
    "cta.h2.1": "Most teams still ask",
    "cta.h2.highlight": "\"Can we afford AI?\"",
    "cta.h2.2": "I'd want to know what it costs to wait.",
    "cta.body": "The numbers on this page took me a lot of practice. I had to learn how much context an agent needs and when to check its work. Your team can learn this too, with tools that are already on the market.",
    "cta.before.label": "Before",
    "cta.before.num": "1-\u20602 projects / month",
    "cta.before.desc": "5 specialists\u00A0\u00B7 15-\u206030\u00A0day cycles\u00A0\u00B7 sequential handoffs",
    "cta.after.label": "After",
    "cta.after.num": "10+ projects / month",
    "cta.after.desc": "1 AI-fluent engineer\u00A0\u00B7 1-\u20602\u00A0day cycles\u00A0\u00B7 parallel agents",

    // Connect
    "connect.title.em": "LET'S",
    "connect.title.rest": "CONNECT.",
    "connect.desc": "I build and run <strong>multi-agent AI systems</strong> that turn weeks of work into days. Most of my background is in databases, ETL, cloud migration, and automation, where a lot of the work is making slow systems fast.",
    "connect.sub": "Looking for someone who can design a workflow around AI agents? Tell me what you're working on.",
    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.submit": "Send Signal",
    "form.sending": "Sending...",
    "form.toast": "Signal sent! I'll get back to you soon.",
    "form.error": "Something went wrong. Please try again.",
    "form.placeholder.name": "John Doe",
    "form.placeholder.email": "john@email.com",
    "form.placeholder.subject": "Project Discussion",
    "form.placeholder.message": "How can I help you?",

    // Copyright
    "copyright.line1": "\u00A9 2026 <span>Bithun</span> \u00B7 All rights reserved",
    "copyright.line2": "I made this site with AI.",

    // Lang toggle
    "lang.aria": "Bytt til norsk",
    "lang.title": "Bytt til norsk"
  },

  nb: {
    // Page meta (document title and description)
    "meta.title": "Slik har AI endret m\u00E5ten jeg jobber p\u00E5 | Bithun",
    "meta.description": "Jeg begynte med \u00E5 bruke AI som en smartere s\u00F8kemotor. I dag leder jeg et team av AI-agenter, og sammen tar vi oss av det som f\u00F8r krevde fem spesialister.",

    // Topbar
    "topbar.cta": "Ta kontakt",

    // Side navigation
    "nav.s0": "Intro",
    "nav.s0.aria": "G\u00E5 til intro",
    "nav.s1": "F\u00F8r og etter AI",
    "nav.s1.aria": "G\u00E5 til f\u00F8r og etter AI",
    "nav.s2": "Seks faser",
    "nav.s2.aria": "G\u00E5 til seks faser",
    "nav.s3": "Effekt for virksomheten",
    "nav.s3.aria": "G\u00E5 til effekt for virksomheten",
    "nav.s4": "Tokenkostnader",
    "nav.s4.aria": "G\u00E5 til tokenkostnader",
    "nav.s5": "Regnestykket",
    "nav.s5.aria": "G\u00E5 til regnestykket",
    "nav.s6": "Kontakt",
    "nav.s6.aria": "G\u00E5 til kontakt",

    // Hero
    "hero.tag": "Sett fra en ingeni\u00F8rs hverdag",
    "hero.h1": "AI tar ikke jobben din.",
    "hero.h1.em": "Det gj\u00F8r noen som kan AI.",
    "hero.sub": "Jeg begynte med \u00E5 bruke AI som en smartere s\u00F8kemotor. I\u00A0dag leder jeg et team av AI-agenter, og sammen tar vi oss av det som f\u00F8r krevde fem spesialister.",
    "hero.stat1.num": "10\u00D7",
    "hero.stat1.label": "Produktivitets\u00F8kning",
    "hero.stat2.num": "15-\u206030d \u2192 1-\u20602d",
    "hero.stat2.label": "Tid per prosjekt",
    "hero.stat3.num": "5 \u2192 1",
    "hero.stat3.label": "Ansatte som trengs",
    "hero.scroll": "bla ned",
    "hero.img.alt": "Portrett av Bithun",

    // Two Eras
    "eras.label": "Omslaget",
    "eras.title": "F\u00F8r og etter AI",
    "eras.body": "Jeg har utviklet programvare b\u00E5de med og uten AI. For meg ligger forskjellen f\u00F8rst og fremst i hvordan teamet er satt sammen.",
    "eras.before.tag": "F\u00F8r AI",
    "eras.before.h3": "Den gamle arbeidsflyten",
    "eras.before.1": "Det trengs fem spesialister: backend, frontend, DevOps, QA og teknisk skribent",
    "eras.before.2": "Alle fem skal ha full l\u00F8nn, pensjon og personalgoder",
    "eras.before.3": "Ferie og sykedager gj\u00F8r at prosjektdatoer m\u00E5 utsettes, ofte p\u00E5 kort varsel",
    "eras.before.4": "Kunnskapsoverf\u00F8ring tar tid hver gang noen begynner, slutter eller bytter rolle",
    "eras.before.5": "Frontend venter p\u00E5 backend, og QA venter p\u00E5 begge",
    "eras.before.6": "Med ulike tidssoner og kalendere som ikke g\u00E5r opp, venter folk p\u00E5 hverandre hver dag",
    "eras.before.7": "Hvert svar krever lang leting p\u00E5 Google, Stack Overflow og i dokumentasjonen",
    "eras.before.8": "Manuelle kodegjennomganger trekker ut i dagevis med kommentartr\u00E5der og nye endringsrunder",
    "eras.before.9": "Kunnskapen sitter i hodet p\u00E5 folk og forsvinner n\u00E5r de slutter",
    "eras.after.tag": "Etter AI",
    "eras.after.h3": "Den nye arbeidsflyten",
    "eras.after.1": "\u00C9n AI-kompetent ingeni\u00F8r leder et team av AI-agenter som dekker alle fem rollene",
    "eras.after.2": "Agentene koster LLM-tokens i stedet for fem l\u00F8nninger med pensjon og personalgoder",
    "eras.after.3": "Ferie og sykedager er ikke noe tema for agentene, s\u00E5 de er tilgjengelige 24/7",
    "eras.after.4": "Hver agent\u00F8kt bygger p\u00E5 et varig minne, og det erstatter kunnskapsoverf\u00F8ring",
    "eras.after.5": "Backend, frontend og QA jobber samtidig",
    "eras.after.6": "Arbeidet kommer i gang s\u00E5 snart prosjektet trenger det, uansett tidssone",
    "eras.after.7": "Det er raskere og mer treffsikkert \u00E5 hente svar fra selve kodebasen enn \u00E5 s\u00F8ke p\u00E5 nettet",
    "eras.after.8": "En agent g\u00E5r gjennom hver commit med en gang og refaktorerer der det er behov",
    "eras.after.9": "Prosjektkunnskapen blir igjen i agentenes minne og ferdigheter",

    // Six Phases
    "phases.label": "Min egen utvikling",
    "phases.title": "Seks faser med AI",
    "phases.body": "Jeg har v\u00E6rt gjennom disse fasene i tur og orden. Hver av dem endret hvordan jeg jobbet og hvilke oppgaver jeg kunne ta p\u00E5 meg.",
    "phase1.num": "Fase \u00E9n",
    "phase1.title": "AI som smartere s\u00F8kemotor",
    "phase1.desc": "Google var lenge f\u00F8rstevalget mitt. Etter hvert gikk jeg over til \u00E5 sp\u00F8rre AI. Den forklarte begreper og dokumentasjon for meg og viste hvor jeg hadde misforst\u00E5tt. Svarene kom raskere fordi jeg kunne stille oppf\u00F8lgingssp\u00F8rsm\u00E5l om akkurat det problemet jeg satt med, i stedet for \u00E5 skumlese ti tr\u00E5der p\u00E5 Stack Overflow.",
    "phase1.impact": "\u26A1 2\u00D7 raskere informasjonsinnhenting",
    "phase2.num": "Fase to",
    "phase2.title": "Kodegjennomgang og kodegenerering med AI",
    "phase2.desc": "AI begynte \u00E5 skrive kodebiter og g\u00E5 gjennom PR-ene mine. Implementeringen var fortsatt manuell. Jeg kopierte, tilpasset, testet og committet koden selv. Likevel ble kvaliteten bedre. AI-en fant feil f\u00F8r de havnet i produksjon, og den foreslo m\u00F8nstre jeg ikke hadde tenkt p\u00E5, selv p\u00E5 slutten av en lang gjennomgang.",
    "phase2.impact": "\u26A1 Bedre kodekvalitet, raskere gjennomganger",
    "phase3.num": "Fase tre",
    "phase3.title": "Kontekstdrevet kodegenerering",
    "phase3.desc": "Da jeg l\u00E6rte meg \u00E5 gi AI skikkelig kontekst fra prosjektet (arkitekturdokumenter, skjermbilder og API-spesifikasjoner), fikk jeg kode som passet rett inn i kodebasen min. AI kunne sette opp hele moduler ut fra en prosjektbeskrivelse, og l\u00F8sningene tok hensyn til resten av systemet.",
    "phase3.impact": "\u26A1 Ferdig funksjonalitet fra en kort beskrivelse",
    "phase4.num": "Fase fire",
    "phase4.title": "Den autonome AI-agenten",
    "phase4.desc": "Dette var det st\u00F8rste spranget for meg. Agenten forst\u00E5r hele prosjektet og kan planlegge, implementere, teste og rette feil p\u00E5 egen h\u00E5nd. Jeg beskriver resultatet jeg vil ha, og lar den finne veien dit selv. N\u00E5r den endrer kode eller tar et arkitekturvalg, kan den forklare hvorfor.",
    "phase4.impact": "\u26A1 Fra parprogrammering til \u00E5 delegere oppgaver",
    "phase5.num": "Fase fem",
    "phase5.title": "\u00C5 lede et team av AI-agenter",
    "phase5.desc": "Neste steg var en virtuell avdeling med meg som leder. Agenter for backend, frontend, DevOps, QA og dokumentasjon jobber parallelt i samme prosjekt og holder det g\u00E5ende om natten og i feriene. De samkj\u00F8rer arbeidet via et felles minne og f\u00F8lger kodestandardene jeg har lagt inn i ferdighetene deres. N\u00E5r de pusher endringene til GitHub, oppdaterer de samtidig README-filene.",
    "phase5.impact": "\u26A1 \u00C9n person = et\u00A0helt\u00A0ingeni\u00F8rteam",
    "phase6.num": "Fase seks",
    "phase6.title": "\u00C5 automatisere alt rutinearbeid",
    "phase6.desc": "Jeg bruker AI til mye mer enn \u00E5 skrive kode. Den sorterer e-posten min, setter opp m\u00F8ter og skriver referat etterp\u00E5, holder orden p\u00E5 mappene, behandler regneark og lager en presentasjon n\u00E5r jeg ber om det. Rutinearbeidet som ellers ville tatt meg timer, gir jeg fra meg.",
    "phase6.impact": "\u26A1 Automatisering b\u00E5de p\u00E5 jobb og i hverdagen",

    // Business Impact
    "roi.label": "Effekt for virksomheten",
    "roi.title": "Tallene ledelsen sp\u00F8r om",
    "roi.body": "Jeg liker en god demo like godt som alle andre, men jeg vurderer AI ut fra hva den gj\u00F8r med kostnader og leveringstid.",
    "roi.card1.num": "15\u00D7 raskere",
    "roi.card1.label": "Prosjektlevering",
    "roi.card1.desc": "Et prosjekt som f\u00F8r tok 15-\u206030 dager, er n\u00E5 ferdig p\u00E5 1-\u20602 dager, uten at kvaliteten har g\u00E5tt ned. Resultatene er ogs\u00E5 jevnere. N\u00E5r noe m\u00E5 gj\u00F8res om, blir det ikke lenger liggende i k\u00F8 til noen har tid.",
    "roi.card2.num": "10+ prosjekter",
    "roi.card2.label": "Per m\u00E5ned, mot 1-\u20602 f\u00F8r",
    "roi.card2.desc": "AI-agentene jobber med flere prosjekter samtidig i stedet for ett etter ett. Derfor leverer et team som f\u00F8r klarte 1-\u20602 prosjekter i m\u00E5neden, n\u00E5 10 eller flere.",
    "roi.card3.num": "5 \u2192 1",
    "roi.card3.label": "Ansatte som trengs",
    "roi.card3.desc": "\u00C9n AI-kompetent ingeni\u00F8r med et team av AI-agenter gj\u00F8r jobben til fem spesialister. Agentene trenger verken l\u00F8nn, pensjon, ferie eller oppl\u00E6ring, og det de l\u00E6rer, blir v\u00E6rende i et felles minne.",
    "team.old.header": "Tradisjonelt team (5 personer)",
    "team.old.1.name": "Backend-ingeni\u00F8r",
    "team.old.1.cost": "l\u00F8nn \u00B7 pensjon \u00B7 ferie",
    "team.old.2.name": "Frontend-ingeni\u00F8r",
    "team.old.2.cost": "l\u00F8nn \u00B7 pensjon \u00B7 ferie",
    "team.old.3.name": "DevOps-ingeni\u00F8r",
    "team.old.3.cost": "l\u00F8nn \u00B7 pensjon \u00B7 ferie",
    "team.old.4.name": "QA-ingeni\u00F8r",
    "team.old.4.cost": "l\u00F8nn \u00B7 pensjon \u00B7 ferie",
    "team.old.5.name": "Teknisk skribent",
    "team.old.5.cost": "l\u00F8nn \u00B7 pensjon \u00B7 ferie",
    "team.old.total.label": "Totalkostnad",
    "team.old.total.value": "5\u00D7 l\u00F8nn + overhead",
    "team.new.header": "Team med AI-agenter (1 person)",
    "team.new.1.name": "AI-kompetent ingeni\u00F8r",
    "team.new.1.cost": "leder agentene",
    "team.new.2.name": "Backend-agent",
    "team.new.2.cost": "ingen ferie \u00B7 24/7",
    "team.new.3.name": "Frontend-agent",
    "team.new.3.cost": "ingen ferie \u00B7 24/7",
    "team.new.4.name": "DevOps- og QA-agent",
    "team.new.4.cost": "ingen ferie \u00B7 24/7",
    "team.new.5.name": "Dokumentasjons- og review-agent",
    "team.new.5.cost": "ingen ferie \u00B7 24/7",
    "team.new.total.label": "Totalkostnad",
    "team.new.total.value": "1 l\u00F8nn + LLM-tokens",

    // Token Efficiency
    "token.label": "Kostnadskontroll",
    "token.title": "Slik kutter\u00A0jeg tokenkostnadene",
    "token.body": "AI har blitt en del av jobben. Det er vanskeligere, og etter min mening viktigere, \u00E5 bruke AI uten \u00E5 sl\u00F8se med tokens. Regningen stiger nemlig fort hvis ingen f\u00F8lger med.",
    "tip1.title": "Bygg gjenbrukbare agentferdigheter",
    "tip1.desc": "Arkitekturen og kodestandardene i prosjektet legger jeg inn i ferdigheter og minne som alle agentene arver. Da slipper jeg \u00E5 gjenta meg selv.",
    "tip2.title": "Hold konteksten liten",
    "tip2.desc": "Jeg gir agenten bare det den trenger til oppgaven den jobber med. Laster jeg inn hele kodebasen n\u00E5r det holder med et kort utdrag, brenner jeg tokens un\u00F8dvendig.",
    "tip3.title": "Varig minne fra \u00F8kt til \u00F8kt",
    "tip3.desc": "Agenter som husker tidligere beslutninger og prosjektstrukturen, bruker ikke tokens p\u00E5 \u00E5 sette seg inn i kodebasen p\u00E5 nytt i hver \u00F8kt. De blir bedre kjent med prosjektet etter hvert som minnet vokser.",
    "tip4.title": "Presise prompter",
    "tip4.desc": "En vag prompt f\u00E5r agenten til \u00E5 lete rundt p\u00E5 egen h\u00E5nd, og avstikkerne blir dyre i lengden. N\u00E5r jeg skriver n\u00F8yaktig hva oppgaven g\u00E5r ut p\u00E5 og hvordan et godt resultat ser ut, treffer agenten oftere p\u00E5 f\u00F8rste fors\u00F8k.",
    "tip5.title": "Oppgaver i passe store bolker",
    "tip5.desc": "Endringer som h\u00F8rer sammen, samler jeg i \u00E9n og samme \u00F8kt. Bare det \u00E5 starte en ny \u00F8kt koster tokens f\u00F8r agenten har gjort noe nyttig. Den prisen betaler jeg heller \u00E9n gang per bolk.",
    "tip6.title": "Ha kontroll p\u00E5 tokenforbruket",
    "tip6.desc": "F\u00F8r jeg lar en agent jobbe selvstendig over lengre tid, setter jeg et tokenbudsjett. Jeg holder ogs\u00E5 oversikt over forbruket per prosjekt og per agent, s\u00E5 jeg ser tidlig om det er p\u00E5 vei mot m\u00E5nedsgrensen.",

    // Bottom Line
    "cta.tag": "Regnestykket",
    "cta.h2.1": "De fleste team sp\u00F8r fortsatt:",
    "cta.h2.highlight": "\u00ABHar vi r\u00E5d til AI?\u00BB",
    "cta.h2.2": "Jeg vil heller vite hva det koster \u00E5 vente.",
    "cta.body": "Det ligger mye pr\u00F8ving og feiling bak tallene p\u00E5 denne siden. Jeg m\u00E5tte l\u00E6re hvor mye kontekst en agent trenger og n\u00E5r jeg b\u00F8r sjekke det den har gjort. Teamet ditt kan l\u00E6re det samme med verkt\u00F8y som allerede finnes p\u00E5 markedet.",
    "cta.before.label": "F\u00F8r",
    "cta.before.num": "1-\u20602 prosjekter i mnd.",
    "cta.before.desc": "5 spesialister\u00A0\u00B7 15-\u206030\u00A0dagers sykluser\u00A0\u00B7 overlevering etter\u00A0overlevering",
    "cta.after.label": "Etter",
    "cta.after.num": "10+ prosjekter i mnd.",
    "cta.after.desc": "1 AI-kompetent ingeni\u00F8r\u00A0\u00B7 1-\u20602\u00A0dagers sykluser\u00A0\u00B7 parallelle agenter",

    // Connect
    "connect.title.em": "TA",
    "connect.title.rest": "KONTAKT.",
    "connect.desc": "Jeg bygger og drifter <strong>AI-systemer med flere agenter</strong> som gj\u00F8r unna ukers arbeid p\u00E5 noen dager. Tyngst erfaring har jeg med databaser, ETL, skymigrering og automatisering, og med \u00E5 gj\u00F8re trege systemer raske.",
    "connect.sub": "Ser du etter noen som kan designe en arbeidsflyt rundt <span class=\"nowrap\">AI-agenter</span>? Fortell meg hva du holder p\u00E5 med.",
    "form.name": "Navn",
    "form.email": "E-post",
    "form.subject": "Emne",
    "form.message": "Melding",
    "form.submit": "Send melding",
    "form.sending": "Sender ...",
    "form.toast": "Meldingen er sendt! Jeg svarer deg snart.",
    "form.error": "Noe gikk galt. Pr\u00F8v igjen.",
    "form.placeholder.name": "Ola Nordmann",
    "form.placeholder.email": "ola@epost.no",
    "form.placeholder.subject": "Prosjektforesp\u00F8rsel",
    "form.placeholder.message": "Hvordan kan jeg hjelpe deg?",

    // Copyright
    "copyright.line1": "\u00A9 2026 <span>Bithun</span> \u00B7 Alle rettigheter forbeholdt",
    "copyright.line2": "Jeg har laget denne siden med AI.",

    // Lang toggle
    "lang.aria": "Switch to English",
    "lang.title": "Switch to English"
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML content (for strings with <strong>, <em>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Aria labels
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-title');
    if (translations[lang][key] !== undefined) {
      el.title = translations[lang][key];
    }
  });

  // Image alt text
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-alt');
    if (translations[lang][key] !== undefined) {
      el.alt = translations[lang][key];
    }
  });

  // Page title and meta description
  if (translations[lang]['meta.title'] !== undefined) {
    document.title = translations[lang]['meta.title'];
  }
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang]['meta.description'] !== undefined) {
    metaDesc.setAttribute('content', translations[lang]['meta.description']);
  }

  // Update toggle button
  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'en' ? 'NO' : 'EN';
    btn.setAttribute('aria-label', translations[lang]['lang.aria']);
    btn.title = translations[lang]['lang.title'];
  }

  localStorage.setItem('lang', lang);
}

// Init
(function () {
  var saved = localStorage.getItem('lang') || 'en';
  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var current = localStorage.getItem('lang') || 'en';
      applyLanguage(current === 'en' ? 'nb' : 'en');
    });
  }
  applyLanguage(saved);
})();

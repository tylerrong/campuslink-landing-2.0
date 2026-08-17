/* ═══════════════════════════════════════════
   oncampus landing interactions
   Audience switcher, steps engine, counters,
   reveals, FAQ, form
   ═══════════════════════════════════════════ */
(() => {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ═══════════ AUDIENCE CONTENT ═══════════ */
  const AUDIENCES = {
    brands: {
      campaigns: {
        title: "What you can actually <em>run on campus.</em>",
        body: "Six formats that cover almost every brief we see. Run one on a single campus, or stack them across a conference.",
        items: [
          {
            viz: "events",
            title: "Greek life event sponsorships",
            body: "Put your brand inside the tailgate, formal, or philanthropy week a chapter is already running. You buy the moment, not the media.",
            spec: ["From $1,500", "Chapters", "On-site + content"],
          },
          {
            viz: "sampling",
            title: "Product sampling",
            body: "Get product into hands at the events students already show up to. The chapter handles distribution and sends back the count.",
            spec: ["From $2,000", "Orgs &amp; events", "500–5,000 units"],
          },
          {
            viz: "ambassadors",
            title: "Ambassador programs",
            body: "Recruit a cohort that represents you all semester, with deliverables, check-ins, and reporting built into the contract.",
            spec: ["From $400/mo", "Students", "Semester cohort"],
          },
          {
            viz: "creators",
            title: "Student influencers",
            body: "Campus-native creators posting to their own audience. Content rights are included in the deal, with no agency markup on top.",
            spec: ["From $150", "Creators", "UGC + paid rights"],
          },
          {
            viz: "retail",
            title: "Retail programs",
            body: "Drive students to the stores near campus that already stock you, using trackable offers and in-store meetups.",
            spec: ["From $1,200", "Orgs + creators", "Foot traffic"],
          },
          {
            viz: "takeover",
            title: "Campus takeovers",
            body: "Own a moment: game day, bid day, move-in week. Multiple orgs on one campus, coordinated into a single push.",
            spec: ["From $10,000", "Multi-org", "Full campus"],
          },
        ],
      },
      platform: {
        title: "Everything between <em>hello</em> and <em>paid.</em>",
        body: "oncampus isn’t an agency. It’s the tooling that lets your team run campus in-house, instead of handing your brand to someone who doesn’t know it.",
        features: [
          {
            title: "Verified network",
            body: "Every org confirms .edu identity, roster size, and leadership. Reputation is earned on-platform, deal by deal.",
            chip: ".edu verified",
            image: "assets/platform/01-network.jpg",
            alt: "Students walking across a college campus",
          },
          {
            title: "One-click contracts",
            body: "Auto-generated agreements with deliverables, content rights, and timelines baked in. Signed in-platform.",
            chip: "Signed in-platform",
            image: "assets/platform/02-contracts.jpg",
            alt: "Hands drafting an agreement on paper",
          },
          {
            title: "Escrowed payments",
            body: "Funds are held until delivery is verified. Orgs know they’ll be paid; you know you’ll get proof.",
            chip: "Held until proof",
            image: "assets/platform/03-escrow.jpg",
            alt: "Hands holding a card over a laptop to complete a payment",
          },
          {
            title: "Direct messaging",
            body: "Negotiate with actual decision-makers like the social chair or the club president, not an agency middle layer.",
            chip: "Social chair, not intern",
            image: "assets/platform/04-messaging.jpg",
            alt: "College students standing together looking at their phones",
          },
          {
            title: "Campaign analytics",
            body: "Attendance, samples distributed, content delivered, impressions: proof of execution in one recap.",
            chip: "Attendance · posts · samples",
            image: "assets/platform/05-analytics.jpg",
            alt: "Young adults gathered at a live campus-style event",
          },
          {
            title: "Proven playbooks",
            body: "Launch from templates built on hundreds of real campus campaigns: tailgates, ambassador cohorts, sampling drops.",
            chip: "12 campus templates",
            image: "assets/platform/06-playbooks.jpg",
            alt: "Crowd at a nighttime campus-scale event",
          },
        ],
        deck: true,
      },
      network: {
        eyebrow: "The network",
        title: "Distribution you <em>can’t buy on Meta.</em>",
        body: "One fraternity runs forty events a year. One club president reaches three hundred members in a group chat. This is owned attention, and it compounds with every campus you add.",
        list: [
          ["Greek life", "Fraternities and sororities with built-in event engines: tailgates, formals, philanthropy weeks."],
          ["Clubs &amp; teams", "Club sports, business fraternities, and cultural orgs: niche communities with weekly meetups and real loyalty."],
          ["Student creators", "Campus-native content that lands like a recommendation from a friend, not a sponsored post."],
          ["Campus events", "A live calendar of verified student events, from hundred-person mixers to thousand-person tournaments."],
        ],
      },
      faq: [
        ["Is oncampus an agency?", "No. It’s a self-serve marketplace, so you work directly with student orgs at marketplace prices. For white-glove, fully managed programs, our partners at FLAIR handle that."],
        ["How are orgs and students verified?", "Every org confirms .edu identity, roster size, and leadership. Brands leave reviews after each completed deal, so reputation is earned on-platform over time."],
        ["What does it cost?", "Free for student orgs, always. Brands pay a platform fee on completed deals, with no retainers and no minimums."],
        ["What if a campaign doesn’t happen?", "Payments sit in escrow until deliverables are verified. If the work doesn’t happen, the funds come back."],
        ["Which brands is this built for?", "CPG, RTD beverages, food, apparel, consumer apps, wellness, and fintech. Any brand where winning 18–24 year-olds early compounds for a decade."],
      ],
      video: "assets/hero-brands.mp4",
      poster: "assets/hero-brands.jpg",
      pageTitle: "oncampus | The campus marketing platform",
      navCta: "Book a demo",
      heroTitle: "Campus is your next <em>growth channel.</em>",
      heroSub:
        "oncampus connects brands with verified student organizations, events, and creators: matching, contracts, and escrowed payments in one platform. Launch in days, not semesters.",
      heroPrimary: ["Book a demo", "#cta"],
      heroSecondary: ["See how it works", "#how"],
      heroFine: "Built for teams in CPG · RTD · consumer apps · apparel · wellness · fintech",
      howEyebrow: "How it works",
      howTitle: "From brief to on-campus <em>in three steps.</em>",
      steps: [
        {
          title: "Post your brief",
          body: "Describe the activation (sampling, tailgate, UGC, ambassador program), set the budget, and pick your campuses. About five minutes.",
          panel: {
            title: "New brief",
            rows: [
              ["Campaign", "Fall sampling tour"],
              ["Budget", "$2,500 per campus"],
              ["Campuses", "Ole Miss, LSU, Auburn +4"],
            ],
            cta: "Publish brief →",
          },
        },
        {
          title: "Match with verified orgs",
          body: "Qualified fraternities, sororities, clubs, and creators apply to you. Compare reach, reviews, and past performance, then message directly.",
          panel: {
            title: "Applicants",
            count: "12",
            cards: [
              { logo: "ole-miss", name: "Sigma Chi", meta: "Ole Miss · .edu", metric: "312 members" },
              { logo: "lsu", name: "Kappa Delta", meta: "LSU · .edu", metric: "280 members" },
              { logo: "auburn", name: "Club Rugby", meta: "Auburn · .edu", metric: "95 members" },
            ],
            cta: "Review shortlist →",
          },
        },
        {
          title: "Launch with guardrails",
          body: "One click generates the contract. Funds sit in escrow and release when deliverables are verified. Recaps land in your dashboard.",
          panel: {
            title: "Campaign",
            live: true,
            kicker: "Fall sampling tour",
            rows: [
              ["Events run", "7 of 7"],
              ["Content delivered", "38 posts"],
              ["Escrow", "$17,500 secured"],
            ],
            cta: "Download recap →",
          },
        },
      ],
      cta: {
        eyebrow: "Get started",
        title: "Make campus a <em>repeatable</em> growth channel.",
        sub: "Book a 20-minute walkthrough. Launch your first campaign this month.",
        placeholder: "you@brand.com",
        button: "Book a demo",
        fine: "Free to explore the network · No retainers · Escrow-protected",
      },
    },

    orgs: {
      platform: {
        title: "Everything between <em>listed</em> and <em>sponsored.</em>",
        body: "oncampus isn’t a sponsorship agency taking a cut of your event. It’s the tooling that brings brand budgets to your chapter without a single cold email.",
        features: [
          {
            title: "Free to list",
            body: "Your org, your events, and your roster cost nothing to list. Money only ever moves toward you.",
            chip: "Always $0",
            image: "assets/platform/orgs/01-list.jpg",
            alt: "Student org members gathered around a laptop",
          },
          {
            title: "Real budgets, not exposure",
            body: "Offers come from verified brands with funds already committed, not from someone asking you to post for free.",
            chip: "Funds committed",
            image: "assets/platform/orgs/02-budgets.jpg",
            alt: "Students shaking hands across a table to close a deal",
          },
          {
            title: "Paid before you commit",
            body: "The money is locked in escrow before you agree. Run the event, submit proof, get paid.",
            chip: "Escrow first",
            image: "assets/platform/orgs/03-escrow.jpg",
            alt: "Hands exchanging payment at a table",
          },
          {
            title: "You set the terms",
            body: "Accept, counter, or decline every offer. Nothing happens at your house that your exec board didn’t approve.",
            chip: "Exec board approves",
            image: "assets/platform/orgs/04-terms.jpg",
            alt: "A student org meeting around a conference table",
          },
          {
            title: "Ten minutes a semester",
            body: "Add your events and roster once. Offers keep arriving without more work from you.",
            chip: "Set it once",
            image: "assets/platform/orgs/05-minutes.jpg",
            alt: "A student updating a listing on a laptop",
          },
          {
            title: "Reputation that compounds",
            body: "Every completed deal builds your rating, and better offers follow next semester.",
            chip: "Ratings carry over",
            image: "assets/platform/orgs/06-reputation.jpg",
            alt: "A student organization standing together as a chapter",
          },
        ],
        deck: true,
      },
      network: {
        eyebrow: "What brands buy",
        title: "The sponsors are <em>already looking.</em>",
        body: "Five hundred brands search this network for campus partners every week. The tailgate you were going to run anyway is exactly what they are trying to buy.",
        list: [
          ["Upcoming parties", "Mixers, date parties, and Thursday nights. Brands pay to be in the house when the chapter actually shows up."],
          ["Game days &amp; tailgates", "Your biggest crowd of the semester. Brands pay for sampling, signage, and on-site activation."],
          ["Philanthropy &amp; formals", "Sponsors cover the costs your chapter would otherwise have to raise itself."],
          ["Content from members", "Your members post from the event. Brands pay for the rights and the chapter keeps the fee."],
        ],
      },
      faq: [
        ["Does it cost our org anything?", "No. Listing your org, your events, and your roster is free forever. Brands pay the platform fee, never you."],
        ["Who decides what happens at our events?", "You do. Every offer can be accepted, countered, or declined, and nothing runs at your house without your exec board approving it."],
        ["How do we actually get paid?", "Funds sit in escrow before you commit. Once the event happens and proof is approved, payment releases, usually within 24 hours."],
        ["How much work is this?", "About ten minutes a semester. Add your events and roster size once, then review offers as they arrive."],
        ["What if a brand isn’t a fit for our chapter?", "Decline it. There’s no penalty and no obligation, and you keep receiving offers."],
      ],
      video: "assets/hero-orgs.mp4",
      poster: "assets/hero-orgs.jpg",
      pageTitle: "oncampus | Your events are sponsorship inventory",
      navCta: "List your org for free",
      heroTitle: "Your events are <em>sponsorship inventory.</em>",
      heroSub:
        "You already run the tailgate, the philanthropy week, the pop-up. oncampus brings brand budgets to them: offers come to you, contracts write themselves, and escrow means you’re always paid. Free for orgs.",
      heroPrimary: ["List your org for free", "#cta"],
      heroSecondary: ["See how it works", "#how"],
      heroFine: "Free for orgs, forever · Greek chapters · clubs · teams · student groups",
      howEyebrow: "How it works",
      howTitle: "From calendar to <em>funded</em> in three steps.",
      steps: [
        {
          title: "List your events",
          body: "The tailgate, the 5K, the social. Add your roster size, audience, and sponsorship formats. Ten minutes, once a semester.",
          panel: {
            title: "Upcoming event",
            count: "Draft",
            event: {
              image: "assets/platform/06-playbooks.jpg",
              alt: "Crowd at a campus-scale tailgate",
              name: "Grove Tailgate",
              when: "Sat, Sep 12 · 3:00 PM",
              where: "The Grove",
              logo: "ole-miss",
              going: "680 going",
              tags: ["Sampling", "Banners", "UGC"],
            },
            cta: "Go live →",
          },
        },
        {
          title: "Review offers",
          body: "Verified brands come to you with real budgets. Accept, counter, or decline. You control what happens at your events.",
          panel: {
            title: "Open offers",
            count: "3",
            cards: [
              { name: "Sparkling water", meta: "Grove Tailgate · Ole Miss", metric: "$2,400" },
              { name: "Fintech app", meta: "Philanthropy 5K · LSU", metric: "$1,800" },
              { name: "Snack brand", meta: "Pop-up + UGC · Auburn", metric: "$950" },
            ],
            cta: "Review offers →",
          },
        },
        {
          title: "Get paid on delivery",
          body: "Contracts are auto-generated and funds lock in escrow before you commit. Event happens, proof is approved, payment releases.",
          panel: {
            title: "Semester earnings",
            kicker: "Fall 2026",
            rows: [
              ["Completed deals", "4"],
              ["In escrow", "$2,400"],
              ["Paid out", "$5,150"],
            ],
            cta: "View payouts →",
          },
        },
      ],
      cta: {
        eyebrow: "For student orgs",
        title: "The brands are <em>already here.</em>",
        sub: "Brands are searching for orgs like yours right now. Listing takes ten minutes and costs nothing.",
        placeholder: "social-chair@yourschool.edu",
        button: "List your org for free",
        fine: "Free for orgs forever · Escrow-backed · Your house, your rules",
      },
    },

    students: {
      platform: {
        title: "Everything between <em>profile</em> and <em>paid.</em>",
        body: "oncampus isn’t a talent agency taking a cut. It’s the tooling that puts funded brand briefs in front of you without a single cold DM.",
        features: [
          {
            title: "No follower minimum",
            body: "Campus relevance beats reach. Brands filter by school, niche, and past work, not by follower count.",
            chip: "No follower cutoff",
            image: "assets/platform/students/01-followers.jpg",
            alt: "Students studying together on a campus lawn",
          },
          {
            title: "Briefs come to you",
            body: "Open campaigns from brands already spending at your school. No pitching, no cold outreach.",
            chip: "No cold DMs",
            image: "assets/platform/students/02-briefs.jpg",
            alt: "A student checking campaign briefs on a phone",
          },
          {
            title: "Funded before you shoot",
            body: "The fee sits in escrow before you start. Deliver the content, get paid.",
            chip: "Escrow first",
            image: "assets/platform/students/03-shoot.jpg",
            alt: "A content setup with a microphone and laptop ready to record",
          },
          {
            title: "Rates up front",
            body: "Every brief shows the deliverables and the fee before you apply. No negotiating in the dark.",
            chip: "Fee on the brief",
            image: "assets/platform/students/04-rates.jpg",
            alt: "A student reviewing a brief on a laptop outdoors",
          },
          {
            title: "Paid in days",
            body: "Proof approved, escrow releases, usually within 24 hours.",
            chip: "Usually 24 hours",
            image: "assets/platform/students/05-paid.jpg",
            alt: "Hands completing a payment on a laptop with a card",
          },
          {
            title: "A track record that travels",
            body: "Every completed campaign builds your profile and unlocks better-paying briefs.",
            chip: "Each deal counts",
            image: "assets/platform/students/06-track.jpg",
            alt: "A student on a video call getting a thumbs-up after delivering work",
          },
        ],
        deck: true,
      },
      network: {
        eyebrow: "Ways to get paid",
        title: "The budgets are <em>already on your campus.</em>",
        body: "Brands are funding student content at your school right now. The only thing between you and that budget is a profile.",
        list: [
          ["Ambassador roles", "Semester-long retainers paid monthly, not one-off posts you have to keep chasing."],
          ["UGC campaigns", "Shoot content brands run on their own channels. Paid per deliverable."],
          ["Game-day content", "Your highest-reach posts of the year are the ones brands most want to fund."],
          ["Event coverage", "Get paid to show up, post, and bring friends to a brand’s campus activation."],
        ],
      },
      faq: [
        ["Do I need a certain number of followers?", "No. Brands filter by campus, niche, and past work. Plenty of paid campaigns go to students with under a thousand followers."],
        ["How much can I make?", "Content bundles average around $450, and ambassador roles pay monthly across a semester. Every brief shows the fee before you apply."],
        ["When do I get paid?", "The fee sits in escrow before you start. Once your content is approved, escrow releases, usually within 24 hours."],
        ["Does it cost anything to join?", "No. Joining and applying are free. Brands pay the platform fee."],
        ["What if I’ve never done a brand deal?", "Most students here haven’t. Each brief lists exactly what to deliver, and your first completed campaign starts your track record."],
      ],
      video: "assets/hero-students.mp4",
      poster: "assets/hero-students.jpg",
      pageTitle: "oncampus | Turn campus influence into income",
      navCta: "Join free",
      heroTitle: "Turn campus influence <em>into income.</em>",
      heroSub:
        "Ambassador roles, UGC campaigns, game-day content: brand deals come to you, contracts are automatic, and escrow means you never chase a payment. No follower minimum.",
      heroPrimary: ["Join free", "#cta"],
      heroSecondary: ["See how it works", "#how"],
      heroFine: "Creators · athletes · ambassadors · social chairs · no follower minimum",
      howEyebrow: "How it works",
      howTitle: "From profile to <em>paid</em> in four steps.",
      steps: [
        {
          title: "Create your profile",
          body: "Showcase your skills, interests, and social presence so the right opportunities find you. Verify with your .edu email so brands know you’re the real thing.",
          panel: {
            title: "Your profile",
            count: "Verified",
            rows: [
              ["Campus", "USC · .edu"],
              ["Niche", "Game day · lifestyle"],
              ["Status", "Open to campaigns"],
            ],
            cta: "Publish profile →",
          },
        },
        {
          title: "Browse & apply",
          body: "Explore open campaigns that match your schedule, interests, and goals. Every brief shows the deliverables and the fee before you apply.",
          panel: {
            title: "Open campaigns",
            cards: [
              { name: "App launch", meta: "3 TikToks · USC", metric: "$300" },
              { name: "Game-day stories", meta: "Story pack · Michigan", metric: "$150" },
              { name: "Semester ambassador", meta: "Monthly retainer", metric: "$400/mo" },
            ],
            cta: "Apply →",
          },
        },
        {
          title: "Get matched",
          body: "Brands review your profile and connect with the students who fit best. No pitching, no cold DMs, no chasing anyone down.",
          panel: {
            title: "Matched",
            count: "2",
            cards: [
              { name: "Ridge Energy", meta: "3 TikToks · USC", metric: "$300" },
              { name: "Sparkling water", meta: "Story pack · Michigan", metric: "$150" },
            ],
            cta: "Review offers →",
          },
        },
        {
          title: "Start earning",
          body: "Work with brands, get paid in cash or product, and build a track record that unlocks better-paying briefs.",
          panel: {
            title: "Earnings",
            kicker: "This month",
            rows: [
              ["Paid out", "$750"],
              ["Pending release", "$300"],
              ["Completed deals", "6"],
            ],
            cta: "Cash out →",
          },
        },
      ],
      cta: {
        eyebrow: "For students",
        title: "Stop promoting <em>for free.</em>",
        sub: "Brands are funding student content on your campus right now. Joining takes two minutes.",
        placeholder: "you@yourschool.edu",
        button: "Join free",
        fine: "Free to join · Escrow-protected · Paid in days, not semesters",
      },
    },
  };

  const FEED_ICON = `<svg class="feed-metric-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16.5 7.5A4.5 4.5 0 1 1 7.5 7.5a4.5 4.5 0 0 1 9 0Z" stroke="currentColor" stroke-width="1.75"/><path d="M19.25 20.5c-.45-2.9-3.4-5-7.25-5s-6.8 2.1-7.25 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>`;

  const EVENT_FEED = [
    ["ole-miss", "Grove Tailgate", "Ole Miss", "680 going"],
    ["lsu", "Death Valley Gameday", "LSU", "1,120 going"],
    ["auburn", "Greek Week", "Auburn", "280 going"],
    ["alabama", "Bid Day", "Alabama", "1,460 going"],
    ["georgia", "Homecoming Week", "Georgia", "960 going"],
    ["texas", "Round Up", "Texas", "1,940 going"],
    ["michigan", "Welcome Week", "Michigan", "1,620 going"],
    ["usc", "Springfest", "USC", "740 going"],
    ["florida", "Gator Growl", "Florida", "1,840 going"],
    ["tennessee", "Rocky Top Kickoff", "Tennessee", "1,280 going"],
    ["clemson", "Tiger Rally", "Clemson", "410 going"],
    ["wisconsin", "Badger Bash", "Wisconsin", "890 going"],
  ];

  const STUDENT_FEED = [
    ["usc", "Maya Chen", "USC", "2,140 followers"],
    ["michigan", "Jordan Hale", "Michigan", "860 followers"],
    ["georgia", "Priya Nair", "Georgia", "1,320 followers"],
    ["texas", "Caleb Brooks", "Texas", "4,180 followers"],
    ["florida", "Aisha Rahman", "Florida", "640 followers"],
    ["lsu", "Mateo Alvarez", "LSU", "1,890 followers"],
    ["wisconsin", "Harper Quinn", "Wisconsin", "510 followers"],
    ["auburn", "Devin Cole", "Auburn", "3,240 followers"],
    ["ole-miss", "Naomi Park", "Ole Miss", "720 followers"],
    ["alabama", "Eli Washington", "Alabama", "1,560 followers"],
    ["tennessee", "Sofia Grant", "Tennessee", "980 followers"],
    ["clemson", "Riley Nguyen", "Clemson", "1,110 followers"],
  ];

  const renderFeed = (key) => {
    const track = $("feedTrack");
    if (!track) return;
    const source = key === "students" ? STUDENT_FEED : EVENT_FEED;
    const rows = source.map(([slug, name, school, metric]) => {
      const label = key === "orgs" ? "Sponsor" : metric;
      const icon = key === "orgs" ? "" : FEED_ICON;
      return `
        <div class="feed-row">
          <img class="feed-logo" src="assets/schools/${slug}.svg" alt="" width="38" height="38" loading="lazy" />
          <span class="feed-name">${name}</span>
          <span class="feed-meta">${school}</span>
          <span class="feed-metric">${icon}${label}</span>
        </div>`;
    });
    track.innerHTML = rows.join("") + rows.join("");
  };

  /* ═══════════ HELPERS ═══════════ */
  const $ = (id) => document.getElementById(id);
  const swapTargets = [".hero-copy", ".how", ".cta-inner"];

  /* ── Steps engine ── */
  let stepTimer = null;
  let currentStep = 0;

  const setStep = (i) => {
    currentStep = i;
    document.querySelectorAll(".how-step").forEach((s, idx) => s.classList.toggle("is-active", idx === i));
    document.querySelectorAll(".screen-panel").forEach((p, idx) => p.classList.toggle("is-active", idx === i));
  };
  const startStepTimer = () => {
    stopStepTimer();
    if (prefersReduced) return;
    stepTimer = setInterval(() => {
      const count = document.querySelectorAll(".how-step").length;
      if (!count) return;
      setStep((currentStep + 1) % count);
    }, 6000);
  };
  const stopStepTimer = () => stepTimer && clearInterval(stepTimer);

  const renderPanelHead = (panel) => {
    const status = panel.live
      ? `<span class="panel-badge">Live</span>`
      : panel.count != null
        ? `<span class="panel-count">${panel.count}</span>`
        : "";
    const kicker = panel.kicker ? `<p class="panel-kicker">${panel.kicker}</p>` : "";
    return `<h4>${panel.title}${status}</h4>${kicker}`;
  };

  const renderPanelBody = (panel) => {
    if (panel.event) {
      const e = panel.event;
      const logo = e.logo
        ? `<img class="event-post-logo" src="assets/schools/${e.logo}.svg" alt="" width="28" height="28" />`
        : "";
      const tags = (e.tags || []).map((t) => `<span>${t}</span>`).join("");
      const place = [e.when, e.where].filter(Boolean).join(" · ");
      return `
        <article class="event-post">
          <div class="event-post-media">
            <img src="${e.image}" alt="${e.alt || ""}" />
            <div class="event-post-overlay">
              ${logo}
              <p class="event-post-name">${e.name}</p>
              <p class="event-post-place">${place}</p>
            </div>
          </div>
          <div class="event-post-meta">
            <div class="event-post-tags">${tags}</div>
            <span class="event-post-going">${e.going}</span>
          </div>
        </article>`;
    }
    const inner = panel.cards
      ? panel.cards
          .map((c) => {
            const mark = c.logo
              ? `<img class="feed-logo" src="assets/schools/${c.logo}.svg" alt="" width="38" height="38" />`
              : `<span class="panel-mark" aria-hidden="true">${c.name.charAt(0)}</span>`;
            return `
          <div class="panel-card">
            ${mark}
            <span class="feed-name">${c.name}</span>
            <span class="feed-meta">${c.meta}</span>
            <span class="feed-metric">${c.metric}</span>
          </div>`;
          })
          .join("")
      : panel.rows
          .map(([k, v]) => `<div class="panel-row"><span>${k}</span><strong>${v}</strong></div>`)
          .join("");
    return `<div class="panel-stack">${inner}</div>`;
  };

  const renderSteps = (steps) => {
    $("stepsList").innerHTML = steps
      .map(
        (s, i) => `
        <button class="how-step${i === 0 ? " is-active" : ""}" type="button" data-step="${i}">
          <span class="num">0${i + 1}</span>
          <div>
            <h3>${s.title}</h3>
            <p>${s.body}</p>
          </div>
          <span class="bar"><i></i></span>
        </button>`
      )
      .join("");
    $("stepPanels").innerHTML = steps
      .map(
        (s, i) => `
        <div class="screen-panel${i === 0 ? " is-active" : ""}" data-panel="${i}">
          ${renderPanelHead(s.panel)}
          ${renderPanelBody(s.panel)}
          <div class="panel-cta">${s.panel.cta}</div>
        </div>`
      )
      .join("");
    currentStep = 0;
    document.querySelectorAll(".how-step").forEach((btn) =>
      btn.addEventListener("click", () => {
        setStep(Number(btn.dataset.step));
        startStepTimer();
      })
    );
    startStepTimer();
  };

  /* ── Platform / Network / FAQ ── */
  const DECK_MS = 6000;
  let deckTimer = null;
  let deckIndex = 0;
  let deckBusy = false;
  let deckObserver = null;
  let deckPaused = false;
  let deckItems = [];
  let deckDrag = null;

  let deckPointer = null;

  const stopFeatureDeck = () => {
    if (deckTimer) {
      clearTimeout(deckTimer);
      deckTimer = null;
    }
    if (deckObserver) {
      deckObserver.disconnect();
      deckObserver = null;
    }
    if (deckPointer) {
      deckPointer.abort();
      deckPointer = null;
    }
    deckBusy = false;
    deckDrag = null;
    deckPaused = false;
  };

  const deckSlot = (i, n) => {
    const d = (i - deckIndex + n) % n;
    if (d === 0) return "current";
    if (d === 1) return "next";
    if (d === n - 1) return "prev";
    return "n";
  };

  const applyDeckSlots = () => {
    const cards = document.querySelectorAll(".feature-card");
    const n = cards.length;
    cards.forEach((card, i) => {
      card.dataset.slot = deckSlot(i, n);
      card.setAttribute("aria-hidden", i === deckIndex ? "false" : "true");
    });
    document.querySelectorAll(".feature-deck-dots button").forEach((btn, i) => {
      btn.setAttribute("aria-current", i === deckIndex ? "true" : "false");
    });
    const live = $("featureDeckLive");
    const item = deckItems[deckIndex];
    if (live && item) live.textContent = `${item.title}. ${item.body}`;
  };

  const startDeckTimer = () => {
    if (deckTimer) clearTimeout(deckTimer);
    deckTimer = null;
    if (!prefersReduced && !deckPaused && deckItems.length) {
      deckTimer = setTimeout(() => goDeck(1, "auto"), DECK_MS);
    }
  };

  const goDeck = (dir) => {
    if (deckBusy || !deckItems.length) return;
    const n = deckItems.length;
    deckBusy = true;
    deckIndex = (deckIndex + dir + n) % n;
    applyDeckSlots();
    startDeckTimer();
    window.setTimeout(() => {
      deckBusy = false;
    }, 480);
  };

  const bindDeckPointer = (stage) => {
    deckPointer = new AbortController();
    const { signal } = deckPointer;
    const onDown = (e) => {
      if (deckBusy || e.button) return;
      const card = e.target.closest(".feature-card");
      if (!card || card.dataset.slot !== "current") return;
      deckDrag = {
        card,
        x: e.clientX,
        y: e.clientY,
        dx: 0,
        t: performance.now(),
        tracking: false,
      };
      card.classList.add("is-dragging");
    };
    const onMove = (e) => {
      if (!deckDrag) return;
      const dx = e.clientX - deckDrag.x;
      const dy = e.clientY - deckDrag.y;
      if (!deckDrag.tracking) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        if (Math.abs(dy) > Math.abs(dx)) {
          deckDrag.card.classList.remove("is-dragging");
          deckDrag = null;
          return;
        }
        deckDrag.tracking = true;
        deckPaused = true;
        if (deckTimer) {
          clearTimeout(deckTimer);
          deckTimer = null;
        }
      }
      e.preventDefault();
      deckDrag.dx = dx;
      deckDrag.card.style.transform = `translateX(${dx}px) scale(1)`;
    };
    const onUp = () => {
      if (!deckDrag) return;
      const { card, dx, t, tracking } = deckDrag;
      card.classList.remove("is-dragging");
      card.style.transform = "";
      deckDrag = null;
      deckPaused = false;
      if (!tracking) {
        startDeckTimer();
        return;
      }
      const dt = Math.max(performance.now() - t, 1);
      const v = dx / dt;
      if (dx < -72 || v < -0.55) goDeck(1, "swipe");
      else if (dx > 72 || v > 0.55) goDeck(-1, "swipe");
      else startDeckTimer();
    };
    stage.addEventListener("pointerdown", onDown, { signal });
    window.addEventListener("pointermove", onMove, { signal, passive: false });
    window.addEventListener("pointerup", onUp, { signal });
    window.addEventListener("pointercancel", onUp, { signal });
  };

  const initFeatureDeck = (items) => {
    stopFeatureDeck();
    deckItems = items;
    deckIndex = 0;
    const stage = $("featureDeckStage");
    const dots = $("featureDeckDots");
    const n = items.length;
    stage.innerHTML = items
      .map(
        (f, i) => `
        <article class="feature-card" data-slot="${deckSlot(i, n)}" aria-hidden="${i === 0 ? "false" : "true"}">
          <div class="feature-card-media">
            <img src="${f.image}" alt="${f.alt}" width="1600" height="1000" draggable="false" ${i < 3 ? "" : "loading='lazy'"} />
          </div>
          <div class="feature-card-copy">
            <span class="feature-card-chip">${f.chip}</span>
            <h3>${f.title}</h3>
            <p>${f.body}</p>
          </div>
        </article>`
      )
      .join("");
    dots.innerHTML = items
      .map(
        (f, i) =>
          `<button type="button" aria-label="${f.title}" aria-current="${i === 0 ? "true" : "false"}"></button>`
      )
      .join("");
    dots.querySelectorAll("button").forEach((btn, i) =>
      btn.addEventListener("click", () => {
        if (i === deckIndex || deckBusy) return;
        deckIndex = i;
        applyDeckSlots();
        startDeckTimer();
      })
    );
    $("featureDeckPrev").onclick = () => goDeck(-1, "btn");
    $("featureDeckNext").onclick = () => goDeck(1, "btn");
    bindDeckPointer(stage);

    const root = $("featureDeck");
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) {
      root.onmouseenter = () => {
        deckPaused = true;
        if (deckTimer) {
          clearTimeout(deckTimer);
          deckTimer = null;
        }
      };
      root.onmouseleave = () => {
        if (deckDrag) return;
        deckPaused = false;
        startDeckTimer();
      };
    }

    deckObserver = new IntersectionObserver(
      ([entry]) => {
        deckPaused = !entry.isIntersecting;
        if (entry.isIntersecting) startDeckTimer();
        else if (deckTimer) {
          clearTimeout(deckTimer);
          deckTimer = null;
        }
      },
      { threshold: 0.35 }
    );
    deckObserver.observe(root);
    applyDeckSlots();
    startDeckTimer();
  };

  const renderPlatform = (d) => {
    const section = $("platform");
    const grid = $("featureGrid");
    const deck = $("featureDeck");
    $("platformTitle").innerHTML = d.title;
    $("platformBody").textContent = d.body;
    stopFeatureDeck();
    if (d.deck) {
      section.classList.add("is-deck");
      grid.hidden = true;
      deck.hidden = false;
      initFeatureDeck(d.features);
      return;
    }
    section.classList.remove("is-deck");
    grid.hidden = false;
    deck.hidden = true;
    grid.innerHTML = d.features
      .map(
        ([title, body], i) => `
        <article class="feature reveal">
          <span class="feature-index">0${i + 1}</span>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>`
      )
      .join("");
  };

  /* ── Campaign types ──
     Each visual is drawn from the card's own data rather than an icon set,
     so the picture says something the label doesn't. */
  const CAMP_VIZ = {
    events: () =>
      [["58%", ""], ["100%", " is-on"], ["42%", ""]]
        .map(([w, on]) => `<span class="vz-bar${on}" style="--w:${w}"></span>`)
        .join(""),
    sampling: () =>
      Array.from({ length: 54 }, (_, i) => `<span class="vz-dot${i < 37 ? " is-on" : ""}"></span>`).join(""),
    ambassadors: () =>
      ["AR", "JM", "TK", "LP", "DS"].map((m, i) => `<span class="vz-face" style="--i:${i}">${m}</span>`).join("") +
      `<span class="vz-more">+8</span>`,
    creators: () =>
      [-7, 0, 7].map((r, i) => `<span class="vz-tile" style="--r:${r}deg;--i:${i}"></span>`).join(""),
    retail: () =>
      `<span class="vz-ring" style="--s:1"></span><span class="vz-ring" style="--s:0.66"></span>
       <span class="vz-ring" style="--s:0.33"></span><span class="vz-pin" style="--x:-34px;--y:-16px"></span>
       <span class="vz-pin" style="--x:26px;--y:8px"></span><span class="vz-pin is-hub" style="--x:0;--y:0"></span>`,
    takeover: () =>
      [34, 55, 78, 48, 88, 40, 64].map((h, i) => `<span class="vz-col" style="--h:${h}px;--i:${i}"></span>`).join(""),
  };

  const renderCampaigns = (d) => {
    const section = $("campaigns");
    if (!section) return;
    if (!d) {
      section.hidden = true;
      $("campGrid").innerHTML = "";
      return;
    }
    section.hidden = false;
    $("campaignsTitle").innerHTML = d.title;
    $("campaignsBody").textContent = d.body;
    $("campGrid").innerHTML = d.items
      .map(
        (c) => `
        <article class="camp reveal">
          <div class="camp-viz vz-${c.viz}" aria-hidden="true">${(CAMP_VIZ[c.viz] || (() => ""))()}</div>
          <h3>${c.title}</h3>
          <p>${c.body}</p>
          <div class="camp-spec">${c.spec.map((x) => `<span>${x}</span>`).join("")}</div>
        </article>`
      )
      .join("");
  };

  const renderNetwork = (d) => {
    $("networkEyebrow").textContent = d.eyebrow;
    $("networkTitle").innerHTML = d.title;
    $("networkBody").textContent = d.body;
    $("netList").innerHTML = d.list
      .map(([term, desc]) => `<li><strong>${term}</strong><span>${desc}</span></li>`)
      .join("");
  };

  const renderFaq = (items) => {
    $("faqList").innerHTML = items
      .map(([q, a]) => `
        <details class="faq-item reveal">
          <summary>${q}<span class="faq-x"></span></summary>
          <p>${a}</p>
        </details>`)
      .join("");
    /* rebind single-open after every re-render */
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) =>
      item.addEventListener("toggle", () => {
        if (item.open) faqItems.forEach((o) => o !== item && (o.open = false));
      })
    );
  };

  /* ── Hero footage ──
     Decorative only. Cross-fades on audience change; falls back to the
     poster (and then to the CSS gradient) if the file is unavailable. */
  const video = $("heroVideo");
  const videoSrc = $("heroVideoSrc");
  let currentVideo = null;

  if (video) {
    video.addEventListener("loadeddata", () => video.classList.add("is-ready"));
    video.addEventListener("error", () => video.classList.remove("is-ready"));
    /* loadeddata may already have fired before this script ran */
    if (video.readyState >= 2) video.classList.add("is-ready");
    if (prefersReduced) {
      video.removeAttribute("autoplay");
      video.pause();
    }
  }

  const setVideo = (src, poster) => {
    if (!video || !videoSrc || src === currentVideo) return;
    currentVideo = src;

    /* only re-fetch when the file actually differs from what the markup
       already requested, so first paint doesn't download twice */
    if (videoSrc.getAttribute("src") !== src) {
      video.setAttribute("poster", poster);
      video.classList.remove("is-ready");
      videoSrc.setAttribute("src", src);
      video.load();
    }

    if (prefersReduced) {
      video.pause();
      return;
    }
    /* belt and braces: some browsers ignore the autoplay attribute */
    const play = video.play();
    if (play && typeof play.catch === "function") play.catch(() => {});
  };

  /* ═══════════ RENDER ═══════════ */
  const renderAudience = (key, animate) => {
    const a = AUDIENCES[key];
    if (!a) return;

    document.body.dataset.audience = key;
    document.title = a.pageTitle;
    setVideo(a.video, a.poster);
    renderPlatform(a.platform);
    renderCampaigns(a.campaigns);
    renderNetwork(a.network);
    renderFeed(key);
    renderFaq(a.faq);

    $("navCta").textContent = a.navCta;

    $("heroTitle").innerHTML = a.heroTitle;
    $("heroSub").textContent = a.heroSub;
    $("heroPrimary").innerHTML = `${a.heroPrimary[0]}<span class="arrow">→</span>`;
    $("heroPrimary").setAttribute("href", a.heroPrimary[1]);
    $("heroSecondary").textContent = a.heroSecondary[0];
    $("heroSecondary").setAttribute("href", a.heroSecondary[1]);
    $("heroFine").textContent = a.heroFine;

    $("howEyebrow").textContent = a.howEyebrow;
    $("howTitle").innerHTML = a.howTitle;
    renderSteps(a.steps);

    $("ctaEyebrow").textContent = a.cta.eyebrow;
    $("ctaTitle").innerHTML = a.cta.title;
    $("ctaSub").textContent = a.cta.sub;
    $("ctaEmail").setAttribute("placeholder", a.cta.placeholder);
    $("ctaButton").textContent = a.cta.button;
    $("ctaFine").textContent = a.cta.fine;

    if (prefersReduced) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    } else {
      revealCheck();
    }

    if (animate && !prefersReduced) {
      swapTargets.forEach((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.classList.remove("swap-fade");
        void el.offsetWidth;
        el.classList.add("swap-fade");
      });
    }
  };

  /* ── Audience switcher ── */
  const bar = $("audienceBar");
  const syncSegThumb = () => {
    const active = bar.querySelector("button.is-active") || bar.querySelector("button");
    if (!active) return;
    bar.style.setProperty("--seg-x", `${active.offsetLeft}px`);
    bar.style.setProperty("--seg-w", `${active.offsetWidth}px`);
  };
  const setActiveTab = (key) => {
    bar.querySelectorAll("button").forEach((b) => {
      const on = b.dataset.audience === key;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", String(on));
    });
    syncSegThumb();
  };
  const persistAudience = (key) => {
    try {
      localStorage.setItem("oc-audience", key);
    } catch (e) { /* private mode */ }
    const url = new URL(window.location.href);
    if (key === "brands") url.searchParams.delete("for");
    else url.searchParams.set("for", key);
    history.replaceState(null, "", url);
  };
  bar.querySelectorAll("button").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.classList.contains("is-active")) return;
      const key = btn.dataset.audience;
      setActiveTab(key);
      persistAudience(key);
      renderAudience(key, true);
    })
  );

  /* ═══════════ NAV ═══════════ */
  const nav = $("siteNav");
  const stage = document.querySelector(".hero-stage");

  /* The nav sits on the footage until the stage has scrolled past it, then
     returns to the normal light treatment. */
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
    if (!stage) return;
    const handover = stage.offsetTop + stage.offsetHeight - nav.offsetHeight;
    nav.classList.toggle("is-over-hero", window.scrollY < handover);
  };
  onScroll();

  /* ═══════════ REVEAL (scroll-position check) ═══════════ */
  const revealCheck = () => {
    const limit = window.innerHeight * 0.94;
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      if (el.getBoundingClientRect().top < limit) el.classList.add("is-visible");
    });
  };
  if (prefersReduced) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }
  window.addEventListener(
    "scroll",
    () => {
      onScroll();
      revealCheck();
    },
    { passive: true }
  );
  window.addEventListener("resize", revealCheck, { passive: true });

  /* ═══════════ FORM ═══════════ */
  $("ctaForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("ctaEmail").value.trim();
    if (!email) return;
    const btn = $("ctaButton");
    const original = btn.textContent;
    btn.textContent = "✓ Request sent";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      $("ctaEmail").value = "";
    }, 2600);
  });

  /* ═══════════ LOGO MARQUEE ═══════════ */
  const initLogoMarquee = () => {
    const track = document.querySelector(".hero-logos-track");
    const seed = track?.querySelector(".hero-logos-set");
    if (!track || !seed || prefersReduced) return;

    const measure = () => {
      const width = seed.getBoundingClientRect().width;
      if (width) track.style.setProperty("--marquee-shift", `-${width}px`);
    };
    measure();

    const copiesNeeded = 4;
    while (track.querySelectorAll(".hero-logos-set").length < copiesNeeded) {
      track.appendChild(seed.cloneNode(true));
    }

    track.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure, { once: true });
    });
    window.addEventListener("resize", measure, { passive: true });
  };

  /* ═══════════ INIT ═══════════ */
  const initialAudience = (() => {
    const param = new URLSearchParams(window.location.search).get("for");
    if (param && AUDIENCES[param]) return param;
    try {
      const saved = localStorage.getItem("oc-audience");
      if (saved && AUDIENCES[saved]) return saved;
    } catch (e) { /* private mode */ }
    return "brands";
  })();
  setActiveTab(initialAudience);
  renderAudience(initialAudience, false);
  revealCheck();
  initLogoMarquee();
  requestAnimationFrame(() => {
    syncSegThumb();
    bar.classList.add("is-ready");
  });
  if (document.fonts?.ready) document.fonts.ready.then(syncSegThumb);
  new ResizeObserver(syncSegThumb).observe(bar);
})();

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
        body: "These are the formats brands run most, and room for whatever else your brief needs. Start on one campus, or stack them across a conference.",
        items: [
          {
            viz: "gifts",
            title: "Greek life event sponsorships",
            body: "Put your brand inside the tailgate, formal, or philanthropy week a chapter is already running. You buy the moment, not the media.",
            spec: ["Chapters", "On-site + content"],
          },
          {
            viz: "sampling",
            title: "Product sampling",
            body: "Get product into hands at the events students already show up to. The chapter handles distribution and sends back the count.",
            spec: ["Orgs &amp; events", "500-5,000 units"],
          },
          {
            viz: "ambassadors",
            title: "Ambassador programs",
            body: "Recruit a cohort that represents you all semester, with deliverables, check-ins, and reporting built into the contract.",
            spec: ["Students", "Semester cohort"],
          },
          {
            viz: "creators",
            title: "Student influencers",
            body: "Campus-native creators posting to their own audience. Content rights are included in the deal, with no agency markup on top.",
            spec: ["Creators", "UGC + paid rights"],
          },
          {
            viz: "retail",
            title: "Retail programs",
            body: "Drive students to the stores near campus that already stock you, using trackable offers and in-store meetups.",
            spec: ["Orgs + creators", "Foot traffic"],
          },
          {
            viz: "open",
            title: "Whatever your brand needs",
            body: "A house pop-up, a sponsored rush video, a week-long takeover. If college students are the audience, we can structure the deal.",
            spec: ["Open brief", "Built to fit"],
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
            image: "assets/platform/collage/brands-network.webp",
            alt: "Student leaders with campus IDs, a verification seal, and connected campus photographs.",
          },
          {
            title: "One-click contracts",
            body: "Auto-generated agreements with deliverables, content rights, and timelines baked in. Signed in-platform.",
            chip: "Signed in-platform",
            image: "assets/platform/collage/brands-contracts.webp",
            alt: "Student organizers reviewing an agreement together with a pen.",
          },
          {
            title: "Escrowed payments",
            body: "Funds are held until delivery is verified. Orgs know they’ll be paid; you know you’ll get proof.",
            chip: "Held until proof",
            image: "assets/platform/collage/brands-escrow.webp",
            alt: "A payment envelope secured by a red lock, linked to verified event delivery.",
          },
          {
            title: "Direct messaging",
            body: "Negotiate with actual decision-makers like the social chair or the club president, not an agency middle layer.",
            chip: "Social chair, not intern",
            image: "assets/platform/collage/brands-messaging.webp",
            alt: "Two student leaders using phones, joined by red speech bubbles and a connecting line.",
          },
          {
            title: "Campaign analytics",
            body: "Attendance, samples distributed, content delivered, impressions: proof of execution in one recap.",
            chip: "Attendance · posts · samples",
            image: "assets/platform/collage/brands-analytics.webp",
            alt: "Organizers reviewing results beside an event photo and ascending red chart bars.",
          },
          {
            title: "Proven playbooks",
            body: "Launch from templates built on hundreds of real campus campaigns: tailgates, ambassador cohorts, sampling drops.",
            chip: "12 campus templates",
            image: "assets/platform/collage/brands-playbooks.webp",
            alt: "Student organizers arranging planning cards beside a campus activation photo.",
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
        ["What is oncampus?", "oncampus is a platform that helps brands ACCESS the college market."],
        ["Why should my brand use oncampus?", "We’re the fastest way to authentically reach Gen Z on campus. oncampus is the only platform that connects you with student orgs and events where your brand can show up in real life."],
        ["What features does oncampus offer?", "oncampus provides a comprehensive suite of tools including an interactive event calendar to discover verified campus events, direct messaging for seamless communication with students and organizations, automated contract generation for streamlined partnerships, targeted offer posting, advanced search filters to find the right student ambassadors and organizations, and curated playbooks featuring proven campus marketing strategies from successful campaigns."],
        ["What types of brands are a good fit?", "CPG, RTD beverages, food, apparel, tech apps, wellness, financial services, and more. If college students are your target audience, you’ll find traction here."],
        ["What types of sponsorships can I do?", "Whether you want to sponsor an event, do a pop-up at a house, or do a sponsored rush video, oncampus can help you run any sponsorship or campaign you would like."],
        ["What does oncampus provide that a traditional student rep program doesn’t?", "Access to hundreds of Greek Life chapters, clubs, and other student groups across the U.S. Access to thousands of students across the U.S. Streamlined sponsorship logistics (contracts, payments, activations)."],
        ["Is oncampus an agency?", "No. oncampus is not an agency; we are a platform that helps you access the college market. If you are interested in a more hands-on campaign, please visit <a href=\"https://theflaircollective.com\" target=\"_blank\" rel=\"noopener noreferrer\">theflaircollective.com</a>."],
        ["Is there a free trial?", "We do not offer free trials. If you want to check out the platform before subscribing, <a href=\"#cta\">book a demo</a>."],
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
      howTitle: "From search to <em>live on campus</em> in five steps.",
      steps: [
        {
          title: "Find opportunities",
          body: "Discover verified events, organizations, and student influencers that align with your brand goals. Filter by campus, chapter size, and audience.",
          panel: {
            title: "Event calendar",
            count: "Verified",
            event: {
              image: "assets/platform/01-network.jpg",
              alt: "Students packed into a campus tailgate",
              name: "Grove Tailgate",
              logo: "ole-miss",
              when: "Oct 12",
              where: "Ole Miss",
              tags: ["Sampling", "Banners", "UGC"],
              going: "680 going",
            },
            cta: "Save to shortlist →",
          },
        },
        {
          title: "Contact students directly",
          body: "Connect with key students and organizations through built-in messaging. No agency in the middle, no cold outreach, no chasing anyone down.",
          panel: {
            title: "Sigma Chi",
            kicker: "Ole Miss · 312 members",
            thread: [
              { from: "you", text: "We’re running a fall sampling tour and Ole Miss is the first stop." },
              { from: "them", text: "We host the Grove Tailgate every home game. Around 700 people come through." },
              { from: "you", text: "We’d sample the new RTD line and cover your banner printing. Budget is $2,500." },
              { from: "them", text: "That works. Send the offer and we’ll take it to exec board tonight." },
            ],
            cta: "Send offer →",
          },
        },
        {
          title: "Generate contract",
          body: "Contracts and payment escrow are generated automatically, so partnerships are secure without a legal review for every chapter.",
          panel: {
            title: "Contract",
            count: "Auto-drafted",
            contract: {
              parties: ["Your brand", "Sigma Chi · Ole Miss"],
              event: "Grove Tailgate",
              terms: [
                ["Deliverables", "Sampling + 6 UGC posts"],
                ["Window", "Oct 12 to Nov 2"],
                ["Fee", "$2,500"],
                ["Funds", "Held in escrow until verified"],
              ],
              sign: ["Brand signature", "Org signature"],
            },
            cta: "Sign and fund →",
          },
        },
        {
          title: "Launch your campaign",
          body: "Run campaigns that reach thousands of students across multiple campuses at once, with every activation tracked in one dashboard.",
          panel: {
            title: "Campaign",
            live: true,
            kicker: "Fall sampling tour",
            cards: [
              { logo: "ole-miss", name: "Grove Tailgate", meta: "Oct 12 · sampling", metric: "680 going" },
              { logo: "lsu", name: "Philanthropy 5K", meta: "Oct 19 · banners", metric: "420 going" },
              { logo: "auburn", name: "Rush pop-up", meta: "Oct 24 · UGC", metric: "310 going" },
              { logo: "alabama", name: "Game-day sampling", meta: "Nov 2 · sampling", metric: "540 going" },
            ],
            cta: "View live campaigns →",
          },
        },
        {
          title: "Measure what it drove",
          body: "Escrow releases as deliverables are verified, and every event, post, and dollar lands in one recap you can send upstairs.",
          panel: {
            title: "Recap",
            kicker: "Fall sampling tour",
            recap: {
              label: "Students reached",
              hero: "12,400",
              note: "7 campuses · complete",
              stats: [
                ["Events run", "7 of 7"],
                ["Content delivered", "38 posts"],
                ["Escrow released", "$17,500"],
                ["Avg. cost / student", "$1.41"],
              ],
            },
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
            image: "assets/platform/collage/orgs-list.webp",
            alt: "A student creating an organization profile beside a group photo and red plus sign.",
          },
          {
            title: "Real budgets, not exposure",
            body: "Offers come from verified brands with funds already committed, not from someone asking you to post for free.",
            chip: "Funds committed",
            image: "assets/platform/collage/orgs-budgets.webp",
            alt: "A sponsorship offer folder with payment vouchers, an event photo, and a red approval seal.",
          },
          {
            title: "Paid before you commit",
            body: "The money is locked in escrow before you agree. Run the event, submit proof, get paid.",
            chip: "Escrow first",
            image: "assets/platform/collage/orgs-escrow.webp",
            alt: "An organizer and event plan beside a locked funding envelope and campus event photo.",
          },
          {
            title: "You set the terms",
            body: "Accept, counter, or decline every offer. Nothing happens at your house that your exec board didn’t approve.",
            chip: "Exec board approves",
            image: "assets/platform/collage/orgs-terms.webp",
            alt: "Student board members reviewing and marking up an event proposal together.",
          },
          {
            title: "Ten minutes a semester",
            body: "Add your events and roster once. Offers keep arriving without more work from you.",
            chip: "Set it once",
            image: "assets/platform/collage/orgs-minutes.webp",
            alt: "A student completing setup beside a stopwatch and checked semester calendar.",
          },
          {
            title: "Reputation that compounds",
            body: "Every completed deal builds your rating, and better offers follow next semester.",
            chip: "Ratings carry over",
            image: "assets/platform/collage/orgs-reputation.webp",
            alt: "A student organization with completed event photos, red checks, and a row of rating stars.",
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
        ["What is oncampus?", "oncampus is a free platform that connects fraternities, sororities, clubs, and any college-affiliated organizations with brands that want to sponsor their events and initiatives."],
        ["What features does oncampus offer?", "Orgs can create and manage event listings with detailed sponsorship needs, post custom opportunities and services they offer, browse and apply to brand opportunities that match the chapter, chat with potential brand partners in real time, build a profile showcasing campus involvement, and access networking with industry professionals."],
        ["Is oncampus available at my school?", "Yes. We work with organizations nationwide. If your campus isn’t active yet, you can still sign up. Brands are always looking for new schools to activate."],
        ["How much does it cost to use oncampus?", "It is completely free to join and post events as an organization. We take 20% of any successful monetary sponsorships. Product seeding, gifting, donations, and similar non-cash deals do not fall into this category."],
        ["What kinds of events can get sponsored?", "Everything from philanthropy events and formals to study sessions, daygers, rush week, intramural teams, and club meetings. If it brings students together, there’s a brand interested in sponsoring."],
        ["How do I get my event sponsored?", "<ol><li>Create a free oncampus account</li><li>Post your upcoming event or opportunity</li><li>Wait for brands on the platform to reach out</li><li>Run the sponsorship</li></ol>"],
        ["Do I need to be in Greek life to use oncampus?", "Nope. oncampus works with all types of student organizations: Greek Life, athletic, cultural, professional, and independent."],
        ["How fast can I get a sponsor?", "Many events are matched in under a week, depending on the brand, timing, and type of event. We do not guarantee sponsorships."],
        ["Do brands only sponsor events?", "No. Many brands are interested in internal sponsorships: house pop-ups, paid social content, app downloads, and more. Once you create a profile for your organization, brands can reach out to you directly."],
        ["Who should make an account?", "We generally recommend the social chair, president, or PR chair create an account with your organization’s official email address, not a personal one. As an organization, you can add multiple contacts to an account to get notifications."],
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
              { brand: "coca-cola", name: "Coca-Cola", meta: "Grove Tailgate · Ole Miss", metric: "$2,400" },
              { brand: "red-bull", name: "Red Bull", meta: "Philanthropy 5K · LSU", metric: "$1,800" },
              { brand: "feastables", name: "Feastables", meta: "Pop-up + UGC · Auburn", metric: "$950", brandDark: true },
            ],
            cta: "Review offers →",
          },
        },
        {
          title: "Get paid on delivery",
          body: "Contracts are auto-generated and funds lock in escrow before you commit. Event happens, proof is approved, payment releases.",
          panel: {
            title: "Semester earnings",
            payout: {
              label: "Paid out",
              amount: "$5,150",
              note: "4 deals · Fall 2026",
              pending: { label: "Still in escrow", amount: "$2,400" },
              progress: 68,
            },
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
            image: "assets/platform/collage/students-followers.webp",
            alt: "A student creator making campus content with another student.",
          },
          {
            title: "Briefs come to you",
            body: "Open campaigns from brands already spending at your school. No pitching, no cold outreach.",
            chip: "No cold DMs",
            image: "assets/platform/collage/students-briefs.webp",
            alt: "Campaign briefs and an envelope flowing toward a student’s phone.",
          },
          {
            title: "Funded before you shoot",
            body: "The fee sits in escrow before you start. Deliver the content, get paid.",
            chip: "Escrow first",
            image: "assets/platform/collage/students-shoot.webp",
            alt: "A creator’s camera setup beside a funding envelope secured with a red lock.",
          },
          {
            title: "Rates up front",
            body: "Every brief shows the deliverables and the fee before you apply. No negotiating in the dark.",
            chip: "Fee on the brief",
            image: "assets/platform/collage/students-rates.webp",
            alt: "An open campaign brief showing a deliverables checklist alongside a red dollar symbol.",
          },
          {
            title: "Paid in days",
            body: "Proof approved, escrow releases, usually within 24 hours.",
            chip: "Usually 24 hours",
            image: "assets/platform/collage/students-paid.webp",
            alt: "A student smiling at a phone beside a completed event photo and red checkmark.",
          },
          {
            title: "A track record that travels",
            body: "Every completed campaign builds your profile and unlocks better-paying briefs.",
            chip: "Each deal counts",
            image: "assets/platform/collage/students-track.webp",
            alt: "A student creator with a portfolio of three checked campaign photographs.",
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
        ["What is oncampus?", "oncampus is a free platform that connects brands with the college market. As a student, you can join as an ambassador, influencer, or athlete for different opportunities to work with brands."],
        ["Is oncampus available at my school?", "Yes. We work with students nationwide. If your campus isn’t active yet, you can still sign up. Brands are always looking for new schools to activate."],
        ["How much does it cost to use oncampus?", "It is completely free to join oncampus as a student."],
        ["What types of opportunities can I expect?", "As a student ambassador, you can expect jobs like representing a brand on campus, tabling, helping execute a marketing campaign, recruitment help, and more. As a student influencer, you can expect paid UGC videos, branded social content, and similar work. You can also receive product gifting and donations from brands."],
        ["Can I reach out to brands?", "You cannot reach out to brands directly, but you can apply to the opportunities they post."],
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
            profile: {
              name: "Maya Chen",
              school: "USC",
              logo: "usc",
              handle: "@maya.gameday",
              chips: ["Game day", "Lifestyle", "Athlete"],
              rows: [
                ["Campus", "USC · .edu"],
                ["Reach", "18.4k · TikTok"],
                ["Status", "Open to campaigns"],
              ],
            },
            cta: "Publish profile →",
          },
        },
        {
          title: "Browse & apply",
          body: "Explore open campaigns that match your schedule, interests, and goals. Every brief shows the deliverables and the fee before you apply.",
          panel: {
            title: "Open campaigns",
            cards: [
              { brand: "lyft", name: "Lyft", meta: "3 TikToks · USC", metric: "$300" },
              { brand: "monster-energy", name: "Monster Energy", meta: "Story pack · Michigan", metric: "$150", brandDark: true },
              { brand: "amazon", name: "Amazon", meta: "Semester ambassador", metric: "$400/mo" },
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
              { brand: "red-bull", name: "Red Bull", meta: "3 TikToks · USC", metric: "$300" },
              { brand: "coca-cola", name: "Coca-Cola", meta: "Story pack · Michigan", metric: "$150" },
            ],
            cta: "Review offers →",
          },
        },
        {
          title: "Start earning",
          body: "Work with brands, get paid in cash or product, and build a track record that unlocks better-paying briefs.",
          panel: {
            title: "Earnings",
            payout: {
              label: "Paid out",
              amount: "$750",
              note: "6 deals this month",
              pending: { label: "Pending release", amount: "$300" },
              progress: 71,
            },
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
    if (panel.profile) {
      const pr = panel.profile;
      const logo = pr.logo
        ? `<img class="profile-logo" src="assets/schools/${pr.logo}.svg" alt="" width="44" height="44" />`
        : `<span class="profile-avatar" aria-hidden="true">${pr.name.charAt(0)}</span>`;
      const chips = (pr.chips || []).map((c) => `<span>${c}</span>`).join("");
      const rows = (pr.rows || [])
        .map(([k, v]) => `<div class="profile-row"><span>${k}</span><strong>${v}</strong></div>`)
        .join("");
      return `
        <article class="profile">
          <div class="profile-hero">
            ${logo}
            <div>
              <p class="profile-name">${pr.name}</p>
              <p class="profile-handle">${pr.handle}</p>
            </div>
          </div>
          <div class="profile-chips">${chips}</div>
          <div class="profile-rows">${rows}</div>
        </article>`;
    }
    if (panel.recap) {
      const r = panel.recap;
      const stats = (r.stats || [])
        .map(([k, v]) => `<div class="recap-stat"><span>${k}</span><strong>${v}</strong></div>`)
        .join("");
      return `
        <article class="recap">
          <div class="recap-hero">
            <p class="recap-label">${r.label}</p>
            <p class="recap-amount">${r.hero}</p>
            <p class="recap-note">${r.note}</p>
          </div>
          <div class="recap-stats">${stats}</div>
        </article>`;
    }
    if (panel.contract) {
      const c = panel.contract;
      const parties = (c.parties || [])
        .map((p, i) => `${i > 0 ? `<span class="contract-x" aria-hidden="true">×</span>` : ""}<span class="contract-party">${p}</span>`)
        .join("");
      const terms = (c.terms || [])
        .map(([k, v]) => `<div class="contract-term"><span>${k}</span><strong>${v}</strong></div>`)
        .join("");
      const signs = (c.sign || [])
        .map((label) => `<div class="contract-sign"><i></i><span>${label}</span></div>`)
        .join("");
      return `
        <article class="contract">
          <div class="contract-parties">${parties}</div>
          <p class="contract-event">${c.event}</p>
          <div class="contract-terms">${terms}</div>
          <div class="contract-signs">${signs}</div>
        </article>`;
    }
    if (panel.payout) {
      const p = panel.payout;
      const meter =
        p.progress != null
          ? `<div class="payout-meter" aria-hidden="true"><i style="width: ${p.progress}%"></i></div>`
          : "";
      const pending = p.pending
        ? `<div class="payout-pending">
            <div class="payout-pending-row"><span>${p.pending.label}</span><strong>${p.pending.amount}</strong></div>
            ${meter}
          </div>`
        : "";
      return `
        <article class="payout">
          <div class="payout-hero">
            <p class="payout-label">${p.label}</p>
            <p class="payout-amount">${p.amount}</p>
            <p class="payout-note">${p.note}</p>
          </div>
          ${pending}
        </article>`;
    }
    if (panel.thread) {
      const bubbles = panel.thread
        .map((m) => `<p class="thread-bubble is-${m.from}">${m.text}</p>`)
        .join("");
      return `<div class="thread">${bubbles}</div>`;
    }
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
            /* Brand wordmarks are wide, so they get a rounded rectangle well
               instead of the circular one school crests use. Marks drawn in
               white need the dark well to stay visible. */
            const mark = c.brand
              ? `<img class="brand-logo${c.brandDark ? " is-dark" : ""}" src="assets/brands/${c.brand}.svg" alt="" width="56" height="36" />`
              : c.logo
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
            <img src="${f.image}" alt="${f.alt}" width="1536" height="1024" draggable="false" ${i < 3 ? "" : "loading='lazy'"} />
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
    gifts: () =>
      ["", " is-on", ""]
        .map((on) => `<span class="vz-gift${on}"><span class="vz-gift-lid"></span><span class="vz-gift-box"></span></span>`)
        .join(""),
    sampling: () =>
      Array.from({ length: 54 }, (_, i) => `<span class="vz-dot${i < 37 ? " is-on" : ""}"></span>`).join(""),
    ambassadors: () =>
      ["AR", "JM", "TK", "LP", "DS"].map((m, i) => `<span class="vz-face" style="--i:${i}">${m}</span>`).join("") +
      `<span class="vz-more">+8</span>`,
    creators: () =>
      [-7, 0, 7].map((r, i) => `<span class="vz-tile" style="--r:${r}deg;--i:${i}"></span>`).join(""),
    retail: () =>
      ["", " is-on", ""]
        .map((on) => `<span class="vz-shop${on}"><span class="vz-shop-awning"></span><span class="vz-shop-face"></span></span>`)
        .join(""),
    open: () =>
      `<span class="vz-mix-dot"></span><span class="vz-mix-plus"></span><span class="vz-mix-tile"></span>`,
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
        (c) => {
          const media = c.image
            ? `<div class="camp-media" aria-hidden="true"><img src="${c.image}" alt="${c.alt || ""}" loading="lazy" /></div>`
            : `<div class="camp-viz vz-${c.viz}" aria-hidden="true">${(CAMP_VIZ[c.viz] || (() => ""))()}</div>`;
          return `
        <article class="camp reveal">
          ${media}
          <h3>${c.title}</h3>
          <p>${c.body}</p>
          <div class="camp-spec">${c.spec.map((x) => `<span>${x}</span>`).join("")}</div>
        </article>`;
        }
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
          <div class="faq-a">${a}</div>
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
    const campuses = $("campuses");
    if (campuses) campuses.hidden = key !== "brands";
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

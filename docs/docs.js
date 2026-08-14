// Help Somebody — internal docs
// Everything here was gathered from Andrew + Iqram in the Genie thread, or verified
// from public sources. Anything unverified is marked UNCONFIRMED.
// Last updated: 2026-08-14 (added Why now + Idea inbox from Andrew's jelly)

window.DOCS = [
  {
    slug: "overview",
    nav: "Overview",
    title: "What Help Somebody is",
    kicker: "Start here",
    blocks: [
      { type: "p", text: "Help Somebody backs founders the way we wish someone had backed us: a check, and then real operator time on demand. Growth, product, engineering, fundraising. Any time." },
      { type: "rows", rows: [
        ["Vehicle", "Fund, raising $10M from LPs"],
        ["Check size", "$500K first checks"],
        ["Then", "Ongoing support sessions — \u201cwe jelly all day\u201d"],
        ["Focus areas", "Growth · Product · Engineering · Fundraising"],
        ["People", "Iqram Magdon-Ismail, Andrew Staub"]
      ]},
      { type: "note", text: "The through-line of every artifact: we invest in people, not companies. Whenever a slide or page leads with a logo, that's a bug." }
    ]
  },
  {
    slug: "positioning",
    nav: "Positioning",
    title: "Why we're different",
    kicker: "The one thing an LP should remember",
    blocks: [
      { type: "quote", text: "Other funds give you a quarterly board meeting. We give you a call whenever you're stuck." },
      { type: "list", items: [
        "Venmo operators on demand, not advisors on a cap table.",
        "Sessions are pull, not push: the founder calls when they're blocked, not when the calendar says so.",
        "Four lanes only, so the offer is legible: growth, product, engineering, fundraising.",
        "Our first checks go to the people who built Venmo with us. That's the proof, not a thesis paragraph."
      ]},
      { type: "p", text: "Do not describe this as \u201cvalue-add\u201d or \u201cplatform support.\u201d Those words make it sound like every other seed fund. Use the plain version: we jelly all day." }
    ]
  },
  {
    slug: "insight",
    nav: "The insight",
    title: "The insight and the market",
    kicker: "Why now",
    blocks: [
      { type: "list", items: [
        "It is dramatically cheaper to build a company than it was five years ago.",
        "That produces many more medium-sized outcomes, not just more unicorns.",
        "Unicorn-or-bust fund math cannot underwrite medium hits, so most funds structurally ignore them.",
        "A small fund writing $500K checks into great operators can."
      ]},
      { type: "p", text: "Market framing we use instead of a TAM triangle: 20,000+ companies apply to YC in a single batch and roughly 99% get rejected. The supply of fundable, capable founders massively exceeds the number of people willing to actually help them." },
      { type: "note", text: "UNCONFIRMED: the 20,000+ per batch figure should get a citation before it goes in front of an institutional LP." }
    ]
  },
  {
    slug: "why-now",
    nav: "Why now",
    title: "Why now, in Andrew's words",
    kicker: "Captured Aug 14 \u00b7 not yet applied to the deck",
    blocks: [
      { type: "quote", text: "It's way easier to build prototypes, way easier to build a real MVP, and way easier to get your first users than ever before. That unlocks a whole generation of people we can invest in." },
      { type: "p", text: "The reason this is a legitimate \u201cwhy now\u201d and not a platitude: the change isn't that building got cheaper in the abstract, it's that it opened the door for specific people who were previously locked out of starting anything." },
      { type: "list", items: [
        "Non-engineers can now build and ship a working product themselves.",
        "Engineers with demanding jobs and families can do it on the side, without quitting first.",
        "Getting to a prototype, an MVP, and first users are all dramatically cheaper and faster than five years ago.",
        "Net effect: the pool of fundable founders just expanded to include people traditional VC never saw."
      ]},
      { type: "p", text: "This is the supply-side argument, and it pairs with the demand-side one on the previous page: many more medium outcomes, which unicorn-or-bust fund math structurally can't underwrite. Together they say the opportunity is both bigger and unaddressed." },
      { type: "note", text: "Proposed deck change, pending Andrew's go: rewrite slide 4 (\u201cWhy now\u201d) around this. Lead with the two unlocked archetypes \u2014 the non-engineer and the moonlighting engineer with a family \u2014 rather than a generic \u201ccosts are falling\u201d line. Deck is untouched until approved." }
    ]
  },
  {
    slug: "backed",
    nav: "People we backed",
    title: "People we backed",
    kicker: "Traction · person first, company as a tag",
    blocks: [
      { type: "p", text: "Iqram has invested individually and alongside other funds. Modal is the biggest win. Descriptions are written as what the company does for a person, 5\u20137 words, because the reader should not have to decode a category." },
      { type: "people", items: [
        { name: "Matt Mirman", company: "Modal", desc: "Instant supercomputers for anyone building AI", tag: "Biggest win" },
        { name: "Kiaan Pillay", company: "Stitch", desc: "Connects African apps to bank accounts", tag: "Publicly citable" },
        { name: "Jacques Marco", company: "Axis", desc: "Free, instant money transfers across Egypt" },
        { name: "Phoebe Gates & Sophia Kianni", company: "Phia", desc: "Finds shoppers a better price instantly" }
      ]},
      { type: "p", text: "Also backed, founder attribution still open. Descriptions drafted, not approved:" },
      { type: "people", items: [
        { name: "Founder TBD", company: "Flutterwave", desc: "Lets African businesses accept payments anywhere", tag: "UNCONFIRMED" },
        { name: "Founder TBD", company: "Zo", desc: "Turns homes into hacker houses for founders", tag: "UNCONFIRMED" },
        { name: "Founder TBD", company: "chat.dev", desc: "Turns a conversation into working software", tag: "UNCONFIRMED" },
        { name: "Founder TBD", company: "Light Shift", desc: "Description needed \u2014 what does it do?", tag: "UNCONFIRMED" }
      ]},
      { type: "note", text: "Tye Wang and Rob Cheung appeared on an earlier list of people backed, company unknown. Stitch has a public receipt: TechCrunch's funding story names Iqram in the angel round." }
    ]
  },
  {
    slug: "first-checks",
    nav: "First checks",
    title: "First checks — who we want to back",
    kicker: "Pipeline · resumes only, no current company",
    blocks: [
      { type: "p", text: "House rule Andrew set: on the artifacts, show only the resume. Do not state what these three are working on now." },
      { type: "people", items: [
        { name: "Dasmer Singh", company: "", desc: "Early iOS engineer at Venmo · Uber · Petal · Head of Product, Cash App Families (grew the most popular teen debit card in the US)" },
        { name: "Chris Stanchak", company: "", desc: "Founded TicketLeap on a $50K SBA loan · raised $8.5M · $100M+/yr in ticket sales · sold to PE · founding advisor to Venmo" },
        { name: "Shreyans Bhansali", company: "", desc: "Employee #1 at Venmo · co-founder & CTO of Socratic, acquired by Google, scaled to 5B queries/yr" }
      ]},
      { type: "note", text: "Every one of the three is Venmo DNA. That's the slide's real argument: our pipeline is our alumni network." }
    ]
  },
  {
    slug: "deck",
    nav: "The deck",
    title: "Deck structure",
    kicker: "11 slides, YC order",
    blocks: [
      { type: "p", text: "YC skeleton kept on purpose. What makes a deck cookie-cutter isn't the order, it's answering each beat with an abstraction. Every beat here is answered with a person or a number." },
      { type: "ol", items: [
        "Title",
        "99% of YC applicants get rejected",
        "Why VC misses them",
        "Why now: cheaper to build, more medium outcomes",
        "$500K, and then we jelly all day",
        "Why us: Venmo, twice over",
        "Traction: people we backed (Modal / Matt Mirman leads)",
        "First checks: three named operators",
        "Where they come from: the Venmo network",
        "Fund math",
        "The ask: $10M"
      ]},
      { type: "rows", rows: [
        ["Delivery", "A link, not a 40MB attachment"],
        ["Navigation", "Arrow keys or swipe, one idea per slide"],
        ["Print", "Cmd-P gives one slide per landscape page"],
        ["Look", "Zine / Noir / Press still switchable \u2014 unpicked"]
      ]}
    ]
  },
  {
    slug: "artifacts",
    nav: "Artifacts",
    title: "Live artifacts",
    kicker: "Three things, three URLs",
    blocks: [
      { type: "links", items: [
        { label: "Website", url: "https://help-somebody-68551.genie.jellyjelly.com", note: "Currently v4 \u2014 black and white minimal, grayscale photos" },
        { label: "Deck", url: "https://help-somebody-deck-68551.genie.jellyjelly.com", note: "11 slides, theme switcher still on" },
        { label: "Version archive", url: "https://help-somebody-68551.genie.jellyjelly.com/versions/", note: "v1\u2013v5 of the website, clickable" }
      ]},
      { type: "note", text: "These are separate directories. Editing one cannot touch the others. That separation is load-bearing \u2014 it's what stopped the deck content from overwriting the site." }
    ]
  },
  {
    slug: "decisions",
    nav: "Decisions",
    title: "Decisions log",
    kicker: "Settled, don't relitigate",
    blocks: [
      { type: "log", items: [
        { date: "Aug 13", text: "Deck follows the YC structure. Not negotiable, but each beat gets a human answer." },
        { date: "Aug 13", text: "Traction leads with the person; the company becomes a small secondary tag." },
        { date: "Aug 13", text: "Company descriptions are 5\u20137 words, written as help for a person." },
        { date: "Aug 13", text: "On first checks, show resumes only. Never say what they're building now." },
        { date: "Aug 13", text: "Website and deck are two separate things at two separate URLs." },
        { date: "Aug 14", text: "Website locked to v4, black and white minimal." },
        { date: "Aug 14", text: "Docs live as a third directory in the same project and same chat, not a separate room." }
      ]}
    ]
  },
  {
    slug: "open",
    nav: "Open questions",
    title: "Open questions",
    kicker: "Blocking edits until answered",
    blocks: [
      { type: "list", items: [
        "Chris Stanchak: name StanForce Labs, or leave it as stealth? (Resume-only rule may make this moot.)",
        "Shreyans Bhansali: is the check into Maven, or something new?",
        "Founders for Flutterwave, Zo, chat.dev, Light Shift.",
        "What does Light Shift actually do?",
        "Which companies go with Tye Wang and Rob Cheung?",
        "Dasmer is on both the already-backed line and the first-checks slide. Which is correct?",
        "Deck look: Zine, Noir, or Press. Genie's vote is Noir.",
        "Citation for the 20,000+ YC applicants per batch figure."
      ]}
    ]
  },
  {
    slug: "inbox",
    nav: "Idea inbox",
    title: "Idea inbox",
    kicker: "Raw dumps, captured as sent, nothing acted on",
    blocks: [
      { type: "p", text: "Andrew sends ideas freeform. They land here verbatim-ish, dated, and stay here until he says which ones become edits. Nothing in this section has been applied to the website or the deck." },
      { type: "log", items: [
        { date: "Aug 14", text: "Why now has a real answer: prototypes, MVPs and first users are all far easier than ever. Non-engineers can do it. Engineers with busy jobs and families can do it on the side. That unlocks a generation of people to invest in. \u2192 written up on the Why now page; deck slide 4 rewrite proposed, not made." }
      ]},
      { type: "note", text: "Keep dumping. Each one gets logged here, plus a written-up page if it's substantial, plus a one-line proposed change so you can approve or kill it." }
    ]
  },
  {
    slug: "working",
    nav: "Working with Genie",
    title: "How we work with Genie",
    kicker: "Rules of engagement",
    blocks: [
      { type: "list", items: [
        "Collect mode: Andrew may send many jellies in a row. Transcribe, stack the context, change nothing until he says go.",
        "Live artifacts (website, deck) are handled cautiously. Confirm exactly which one is meant before editing.",
        "Docs are the opposite: be aggressive, add freely, this is a scratchpad with a URL.",
        "Genie hears jellies as audio-to-text only. It cannot see video. Narrate, or send screenshots.",
        "Genie cannot carry work across chat rooms. Files live in the room they were built in, which is why all three projects stay here.",
        "Plans before builds on the live artifacts: short plan, Andrew strikes lines, then build."
      ]}
    ]
  }
];

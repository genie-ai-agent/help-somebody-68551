// Help Somebody — internal docs
// Everything here was gathered from Andrew + Iqram in the Genie thread, or verified
// from public sources. Anything unverified is marked UNCONFIRMED.
// Last updated: 2026-08-14 (Added the Spas page: Good Hot, Alchemy Springs, Archimedes Banya)

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
    slug: "ai-native",
    nav: "AI-native",
    title: "The first actually AI-native accelerator",
    kicker: "Captured Aug 14 \u00b7 not yet applied to the deck",
    blocks: [
      { type: "quote", text: "We're not going to use AI to optimize our operations. We're going to reinvent what an accelerator is in the world of AI. It's a completely different thing." },
      { type: "p", text: "Another way to describe Help Somebody: the first accelerator that is actually AI-native. The distinction Andrew is drawing is the whole idea, so keep it sharp. Every existing accelerator is AI-assisted at best: same batch, same demo day, same office hours, now with AI somewhere in the back office. AI-native means the shape of the thing itself changes." },
      { type: "rows", rows: [
        ["AI-assisted (everyone else)", "AI makes the existing accelerator cheaper to run"],
        ["AI-native (us)", "AI changes what an accelerator even is"],
        ["Their unit of help", "Scheduled advice, one founder at a time"],
        ["Our unit of help", "Tools and operator time, built once, used by everyone"]
      ]},
      { type: "p", text: "Andrew's example, and it's the clearest one: \u201cI can be every company's growth engineer.\u201d Not advise on growth, be the growth engineer. Build the tooling once and every company in the portfolio gets it, which is something a human-hours accelerator structurally cannot do." },
      { type: "list", items: [
        "Leverage compounds across the portfolio: a tool built for company #1 is live for #12 on day one.",
        "Support stops being a calendar and becomes a product founders can use at 2am.",
        "It pairs with jellying rather than replacing it: tools for the repeatable work, humans for the judgment calls.",
        "It is also the reason a two-person fund can credibly serve more founders than its headcount implies."
      ]},
      { type: "note", text: "Proposed deck change, pending Andrew's go: this is either a rewrite of the positioning slide or a new slide of its own. Needs one decision from Andrew, since \u201cfirst AI-native accelerator\u201d and \u201cwe jelly all day\u201d are competing for the same headline slot. Deck untouched until approved." },
      { type: "note", text: "Open: are we calling ourselves an accelerator now, or a fund? The docs currently say fund throughout. Also unresolved: which tools get built first, and whether they're portfolio-only or public." }
    ]
  },
  {
    slug: "mental-health",
    nav: "Mental health",
    title: "Founder mental health, and the cofounder relationship",
    kicker: "Captured Aug 14 \u00b7 not yet applied to the deck",
    blocks: [
      { type: "quote", text: "I've gone through a lot starting a few startups. I've learned a lot about founders and about myself. I think mental health is actually one of the biggest levers to making more of these founders successful." },
      { type: "p", text: "Andrew's third pillar of help, alongside the four operating lanes. The claim is not soft: he's arguing that the binding constraint on a founder's outcome is often psychological and relational, not technical or commercial, and that nobody in the funding stack treats it as a real workstream. It is also the pillar he has the most first-hand authority on." },
      { type: "list", items: [
        "For teams: actively foster the cofounder relationship rather than hoping it holds. Surface misalignment on vision, pace, equity and effort early, while it's still cheap to fix.",
        "For solo founders: the failure mode is isolation, not conflict. Jellying is the intervention \u2014 someone who has been there, available when it's bad.",
        "For every founder, team or solo: individual support on state of mind. Not therapy, not coaching-speak. A person who has been through it and will say the true thing.",
        "This is the least fakeable part of the offer. It cannot be added to a fund's website; it only exists if the GPs have lived it and will actually pick up."
      ]},
      { type: "p", text: "Why it fits the thesis rather than sitting beside it: if cheap building means many more medium outcomes, then the marginal win comes from founders not quitting and teams not fracturing. Mental health work is alpha, not benevolence." },
      { type: "rows", rows: [
        ["Everyone else", "Founder wellbeing as a perk: a wellness stipend, a therapist list in the portfolio handbook"],
        ["Us", "A named lever we work on deliberately, with the GPs personally"],
        ["Teams", "Cofounder relationship maintenance, on purpose and early"],
        ["Solo founders", "Someone in the boat with them"]
      ]},
      { type: "note", text: "On the stat: the widely cited figure is 65% of high-potential startups failing due to cofounder conflict, from Noam Wasserman's The Founder's Dilemmas. Worth knowing before it goes in front of an LP \u2014 it traces back in part to a 1989 Gorman & Sahlman survey of 49 VCs on 96 at-risk companies, where 61 of 96 (63.5%) ranked team issues in their top three reasons for failure, rounded to 65%. It is defensible as \u201cthe most cited number in the field,\u201d not as fresh data. Recommend Andrew says it as \u201cthe research most people cite says 65%\u201d and then goes straight to his own experience, which is stronger anyway." },
      { type: "note", text: "Proposed deck change, pending Andrew's go: add mental health / cofounder relationships as a third bullet on the \u201cwhat you get after the check\u201d slide, and consider one dedicated slide since it's the most differentiated and least copyable thing here. Deck untouched until approved." },
      { type: "note", text: "Open: how much of Andrew's own story goes in the LP deck? It's the credibility, but LP decks are not usually confessional. Needs Andrew's line on how personal to get." }
    ]
  },
  {
    slug: "failure-edge",
    nav: "Failure as edge",
    title: "No money, plenty of scars",
    kicker: "Captured Aug 14 \u00b7 not yet applied to the deck",
    blocks: [
      { type: "quote", text: "The fact that we don't have lots of money, and the fact that we've failed lots of times, is a huge advantage. Most founders fail. We're failing. VCs who have not been through a startup failure have no idea what founders are going through." },
      { type: "p", text: "This is the \u201cwhy us\u201d beat, inverted. The standard version of that slide is a list of wins. Andrew's version is that the wins are table stakes and the losses are the moat: the median founder experience is failure, and a GP who has only ever won cannot meet a founder inside it." },
      { type: "list", items: [
        "Not rich is a feature: no money means we're in it, not above it. We're closer to the founder's position than to an institution's.",
        "Failure is repeated and recent, not a founding myth. Present tense: we're failing, still building.",
        "The asymmetry: most VCs have watched failure from a board seat. Some have felt a near-death \u2014 Venmo nearly died \u2014 but that is not the same as being the one who has to keep going after it dies.",
        "So the check is not the product. Someone who has been there, when it's going badly, is the product. That's the same claim as \u201cwe jelly all day\u201d and \u201cmental health,\u201d arriving from a third direction."
      ]},
      { type: "p", text: "Second pass, same jelly re-recorded: the argument is really about persistence, not pain. Venmo was not the first thing Iqram and Kortina built together, it was roughly the fifth or sixth. The failures are the reps that produced the win, which is exactly the pattern we're underwriting in other people." },
      { type: "list", items: [
        "Iqram + Kortina, before Venmo (public record): My College Post, a college classifieds site built senior year. Swooge, website analytics. Philafunk, a music site. iminlikewithyou, a dating site. Plus a real estate startup whose revenue paid for Venmo's first Philadelphia office.",
        "Then they split up for jobs — Kortina to Bit.ly, Iqram to TicketLeap — and came back together anyway. That's the persistence beat, and it makes the pipeline slide rhyme: TicketLeap is Chris Stanchak's company, and Stanchak was a founding advisor to Venmo.",
        "Venmo itself started as a mobile music company (text a band, get an mp3) and pivoted only after Iqram forgot his wallet in New York. So even the win contains a failed first idea.",
        "LP-facing version of the claim: we are not backing people who have never lost. We are backing people on attempt number five, because we were people on attempt number five."
      ]},
      { type: "rows", rows: [
        ["Standard why-us", "Track record, logos, exits, a fund number"],
        ["Ours", "Venmo is the credential; the failures are the qualification"],
        ["Emotional register", "Peer in the trench, not investor at the table"],
        ["What it buys", "Founders tell us the truth earlier, which is when help still works"]
      ]},
      { type: "note", text: "Handle with care in an LP room. \u201cWe don't have lots of money\u201d reads as honesty to a founder and as a GP-commit question to an LP. Recommendation: keep the failure story loud and let the money part be implicit \u2014 \u201cwe are operators, not an institution\u201d \u2014 unless Andrew wants to say it straight, which is also a defensible move with the right LP." },
      { type: "rows", rows: [
        ["Ense", "CONFIRMED public: Iqram's post-Venmo company, a social voice platform founded 2016. Almost certainly the name that came through the transcript as \u201cEnts.\u201d"],
        ["Fin", "LIKELY the \u201cFinn\u201d in the transcript, but it's Kortina's company (with Sam Lessin), not Iqram's. Don't attribute it to Iqram on an artifact."],
        ["Smalltalk", "UNCONFIRMED. Said twice across two jellies, so it's real, but nothing public ties it to Iqram. Need one line from him."],
        ["\u201cMaeve\u201d / \u201cBoz\u201d", "UNCONFIRMED. Andrew's own two companies, spelled two different ways across two takes (Mave/Vaz, then Maeve/Boz). Need correct spellings plus one line each on what happened."]
      ]},
      { type: "note", text: "Four company names still need Andrew's confirmation before any of this reaches the deck. Two are now resolved from public sources (Ense, Fin); two are not (Smalltalk, and both of Andrew's)." },
      { type: "note", text: "Proposed deck change, pending Andrew's go: rewrite the why-us slide to lead with failures alongside Venmo, rather than Venmo alone. Deck untouched until approved." }
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
      { type: "note", text: "Every one of the three is Venmo DNA. That's the slide's real argument: our pipeline is our alumni network." },
      { type: "p", text: "Second list, added Aug 14: people in the pipeline who are not from the Venmo tree. Kept separate on purpose, because the three above make an argument about our network and these make an argument about our range." },
      { type: "people", items: [
        { name: "Jasmine", company: "Solar power technology", desc: "Teenager in Berkeley. First named person for the Teenagers vehicle, and the youngest name in the pipeline.", tag: "Want to invest \u00b7 last name needed" }
      ]},
      { type: "note", text: "Jasmine is the proof that the Teenagers vehicle is a real pipeline and not a category on a list. She's also the sharpest possible illustration of the why-now argument: a teenager building hardware-adjacent technology that used to require a lab and a payroll." },
      { type: "note", text: "Rule conflict to resolve before she goes on any artifact: the house rule for first checks is resume only, never say what they're working on. Jasmine is the inverse \u2014 what she's building is the interesting part, and she has no resume yet by design. Either she's an exception, or she lives on a different slide from the three Venmo operators." }
    ]
  },
  {
    slug: "vehicles",
    nav: "Vehicles",
    title: "Vehicles we want to start",
    kicker: "Running list \u00b7 add anything, nothing here is committed",
    blocks: [
      { type: "p", text: "One place for every fund, syndicate, or SPV we might launch, so we stop re-deciding structure in conversation. Only the first entry is real. Everything else is a candidate until Andrew and Iqram say otherwise." },
      { type: "people", items: [
        { name: "Help Somebody Fund I", company: "Fund \u00b7 primary vehicle", desc: "$10M target, $500K first checks. Roughly 18\u201320 positions with no reserves, 15\u201316 if we hold back for follow-ons.", tag: "Raising" },
        { name: "Help Somebody Syndicate", company: "Syndicate \u00b7 companion", desc: "Deal-by-deal SPVs so the community, and Venmo alumni, can invest alongside the fund.", tag: "Agreed in principle, not started" },
        { name: "Rolling fund", company: "Alternative structure", desc: "Quarterly subscription instead of one closed $10M vehicle. Faster to start, smaller first close.", tag: "Exploring" }
      ]},
      { type: "p", text: "Second list, added Aug 14: audience-scoped vehicles. These aren't different structures, they're different pools of people. Each one is a syndicate or small fund defined by who it backs, and each could carry its own LP base drawn from that same community. Andrew's raw list, in his order, all still ideas:" },
      { type: "people", items: [
        { name: "1 \u00b7 Venmo alums", company: "Audience-scoped", desc: "The founding pool. People who built Venmo with us, backing each other. This is the one that already has a live pipeline: Dasmer, Chris, Shreyans.", tag: "Idea \u00b7 closest to real" },
        { name: "2 \u00b7 Jelly", company: "Audience-scoped", desc: "Founders from the JellyJelly community. The sessions are the sourcing mechanism, so deal flow and community are the same motion.", tag: "Idea" },
        { name: "3 \u00b7 Teenagers", company: "Audience-scoped", desc: "Youngest builders, first checks. The why-now argument at its extreme: a 16-year-old can ship an MVP and get users now. First named person: Jasmine, Berkeley, solar power technology.", tag: "Idea \u00b7 has a live name" },
        { name: "4 · Spas", company: "Vertical, not audience", desc: "Confirmed Aug 14: literally spas. Physical bathhouses in the Bay Area. Three named targets so far: Good Hot (Richmond), Alchemy Springs (SF), Archimedes Banya (SF). Full detail on the Spas page.", tag: "Confirmed · 3 named targets" },
        { name: "5 \u00b7 General", company: "Audience-scoped", desc: "No community filter. Anyone who applies, which is the widest possible version and probably the highest-volume, lowest-signal one.", tag: "Idea" },
        { name: "6 \u00b7 Wefunder alums", company: "Audience-scoped", desc: "Founders and operators out of Wefunder. Andrew's current network, and a crowd already fluent in raising from their own community.", tag: "Idea" },
        { name: "7 \u00b7 Fin alums", company: "Audience-scoped", desc: "People out of Fin, Kortina's company with Sam Lessin. Adjacent to the Venmo tree through Kortina rather than through Iqram directly.", tag: "Idea" }
      ]},
      { type: "note", text: "Pattern worth naming: six of the seven are 'alumni of a thing we belong to.' That's a repeatable machine, not seven one-offs. Pick one community, run the vehicle, template it, run it again. 'General' is the odd one out because it has no community to draw LPs from." },
      { type: "p", text: "Fields I keep for each one, so a new entry is never half-specified:" },
      { type: "rows", rows: [
        ["Name", "Working name is fine"],
        ["Type", "Fund, rolling fund, syndicate, one-off SPV"],
        ["Who leads", "Andrew, Iqram, both, or someone outside"],
        ["Thesis", "One line. Who it backs and why it exists separately from Fund I"],
        ["Target size", "And minimum viable first close"],
        ["Check size", "And whether it holds reserves"],
        ["Status", "Idea \u2192 exploring \u2192 committed \u2192 raising \u2192 closed"],
        ["Next step", "The single next action, with an owner"]
      ]},
      { type: "list", items: [
        "Open: does the syndicate launch before Fund I closes, as proof of demand, or after, so it doesn't compete for the same dollars?",
        "Open: is the syndicate open to anyone in the JellyJelly community, or invite-only to Venmo alumni?",
        "Open: if the rolling fund wins, does Fund I stop existing or become the anchor vehicle?",
        "Open: are the seven audience lists separate vehicles, or one fund with seven sourcing channels? Seven vehicles is seven LP bases and seven sets of paperwork.",
        "Open: which of the seven goes second, after Venmo alums? Jelly is the obvious one since the sessions already exist.",
        "Open: Spas is the odd one out now. The other six are pools of people, Spas is a vertical of physical businesses. Does it belong in this list at all, or is it its own vehicle with its own LP pitch?"
      ]},
      { type: "note", text: "Names are placeholders, not decisions. Dump vehicles at me in any form and I'll file them here with whatever fields you gave me and mark the rest unknown." }
    ]
  },
  {
    slug: "spas",
    nav: "Spas",
    title: "Spas we want to invest in",
    kicker: "Three named · Bay Area bathhouses · researched Aug 14",
    blocks: [
      { type: "p", text: "'Spas' on the vehicles list turned out to be literal. Not SPVs, not a metaphor for anything. Andrew and Iqram want to put money into physical bathhouses, and there are three named so far. Everything below is from public sources, so correct anything that's out of date." },
      { type: "people", items: [
        { name: "Good Hot", company: "Richmond, CA", desc: "Beachfront saunas on Point San Pablo, open since 2021. Co-founded by A 'Lou' Louie and Cooper Rogers. Private trailer-mounted cedar saunas with bay views, cold plunge straight into the bay, wheelchair accessible, 90-minute rentals at $130 to $150. Built explicitly for queer, BIPOC and bathers of different abilities: 50% no-questions-asked coupons for low-income LGBTQ/BIPOC bathers, and up to $40 reimbursed for the ride, since the site isn't reachable by transit. 1950 Stenmark Dr.", tag: "Open · want to invest" },
        { name: "Alchemy Springs", company: "San Francisco, CA", desc: "939 Post St, Lower Nob Hill. CEO Anne Cannady, with a co-founder, Jon, out of Summit Series and Abundance360. The Sauna Garden opened June 2024 with what press calls the largest freestanding sauna in the country, and it has been profitable from the start while running at roughly 30% of planned capacity and only about 20 hours a week, 90% of growth by word of mouth. A 6,000 sq ft full thermal bathhouse is slated for 2026: high-heat meditation sauna, steam room, infrared recovery greenhouse, communal hot soak, communal cold plunge. Community-funded before (a Small Change equity round, $750K previously raised, 30-year lease signed) and there's a live invest page on their site.", tag: "Raising · want to invest" },
        { name: "Archimedes Banya", company: "San Francisco, CA", desc: "748 Innes Ave, Bayview-Hunters Point, on the bay. Russian banya blended with Greek laconica, Turkish hammam and German thermen: Finnish sauna, two Russian steam rooms, Japanese soaking tub, cold plunge, sun deck, cafe. 18+ with ID. The only place in California offering venik platza every day of the week. The established operator of the three, and the one with no publicly known raise.", tag: "Established · no known raise" }
      ]},
      { type: "note", text: "Why this isn't a detour: all three are third places built to fight isolation, which is the same argument the Mental health page makes about founders. A bathhouse is the physical version of jellying. Alchemy Springs' own investor page even cites the Global Wellness Institute calling social saunas a remedy for loneliness. If we back these, that's the thread, not 'wellness is hot right now.'" },
      { type: "note", text: "The structural problem to solve before any money moves: $500K into a bathhouse is a different asset than $500K into software. No power law, no 100x, but real cash flow, a real lease, and real capex. If these come out of Fund I, an LP will fairly ask why a founder-support fund owns real estate. Cleanest answer is one SPV per property, which is exactly what the Spas vehicle should be." },
      { type: "p", text: "Fit with the rest of the thesis, honestly assessed:" },
      { type: "rows", rows: [
        ["Fits", "People-first. Louie and Rogers built Good Hot from nothing; Cannady has been raising from her own community for years. Both are underserved-operator stories."],
        ["Fits", "Andrew's day job is community raises for exactly this kind of business. This is the Wefunder muscle applied to our own book."],
        ["Tension", "Returns profile. Bathhouses don't 10x a $10M fund. They pay."],
        ["Tension", "Support offer. Growth, product, engineering, fundraising is a software menu. Fundraising transfers; the other three mostly don't."]
      ]},
      { type: "list", items: [
        "Open: equity, revenue share, or real estate? Different answer per property, probably.",
        "Open: does this come out of Fund I, or is it a separate SPV per spa so the fund story stays clean?",
        "Open: has anyone actually talked to Archimedes Banya, and does it even want capital?",
        "Open: do spa investments get the jelly support, or is this capital-only with no session commitment?",
        "Open: is there a JellyJelly angle here, sessions hosted at these places? That would make the vertical make sense in a way a spreadsheet won't.",
        "Open: is three the list, or is it a running one? I'll keep adding as you name them."
      ]},
      { type: "note", text: "Nothing about spas has gone near the website or the deck, and I wouldn't put it there yet. An LP reading a founder-support deck that mentions bathhouses needs the connective sentence first." }
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
        "Citation for the 20,000+ YC applicants per batch figure.",
        "Accelerator or fund? \u201cFirst AI-native accelerator\u201d and \u201c$10M fund writing $500K checks\u201d imply different structures. Pick the word.",
        "If accelerator: does the headline slot go to AI-native, or to we-jelly-all-day? They can't both be the one line an LP remembers.",
        "Which portfolio tool gets built first, and is it portfolio-only or public?",
        "Mental health: is it a third bullet on the support slide, or its own slide?",
        "How much of Andrew's personal story goes into the LP deck vs stays for founder conversations?",
        "Is mental health part of a jelly session, or a separate kind of session with a different name?",
        "Andrew's own companies: transcript sounded like \u201cMave\u201d and \u201cVaz.\u201d Correct names, and one line each on what happened?",
        "Iqram's post-Venmo projects: transcript sounded like \u201cSmall Talk\u201d and \u201cHints.\u201d Correct names?",
        "Jasmine's last name, and what specifically she's building in solar? (Panels, storage, software, install?)",
        "How did Jasmine come to us, and is she the anchor for the Teenagers vehicle or a Fund I check?",
        "Does the resume-only rule apply to Jasmine? She has no resume yet, and the build is the story.",
        "Does \u201cwe don't have lots of money\u201d get said out loud to LPs, or stay implicit as \u201coperators, not an institution\u201d?",
        "Spas: does the money come out of Fund I, or one SPV per property so the software fund story stays clean?",
        "Spas: equity, revenue share, or real estate, and is it the same instrument for all three?",
        "Spas: has Archimedes Banya been approached, and does it want capital at all?",
        "Spas: is there a JellyJelly angle (sessions hosted at these places), or is this purely an investment?"
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
        { date: "Aug 14", text: "Why now has a real answer: prototypes, MVPs and first users are all far easier than ever. Non-engineers can do it. Engineers with busy jobs and families can do it on the side. That unlocks a generation of people to invest in. \u2192 written up on the Why now page; deck slide 4 rewrite proposed, not made." },
        { date: "Aug 14", text: "Help Somebody as the first actually AI-native accelerator. Not AI to optimize our operations \u2014 reinventing what an accelerator is. Example: I can be every company's growth engineer long term; we build tools for all our companies that help them all. \u2192 written up on the AI-native page; needs one call on accelerator vs fund, and where it goes in the deck." },
        { date: "Aug 14", text: "Mental health as a thing we help with. Andrew has been through a lot across a few startups, learned a lot about founders and himself, thinks it's one of the biggest levers on founder success. Top reason startups fail is cofounder issues. Wants to foster the cofounder relationship where there are multiple people, and support solo founders and individual cofounders on their state of mind. \u2192 written up on the Mental health page; proposed as a bullet or a slide on the deck, not made." },
        { date: "Aug 14", text: "Having no money and having failed a lot is a huge advantage. Most founders fail; we're failing. VCs who haven't been through a startup failure have no idea what founders are going through \u2014 some have seen a near-failure like Venmo, but that's different. Andrew's own experience at [Mave? Vaz?] and Iqram's with [Small Talk? Hints?] really helps. \u2192 written up on the Failure as edge page; why-us slide rewrite proposed, not made. Company names need confirming." },
        { date: "Aug 14", text: "Recap of two jellies lost in transit (five lost so far). Same failure-as-edge argument, plus a new beat: it was an advantage at Venmo too, since that was Iqram and Kortina's fifth or sixth project together. Most startups fail, we know how that feels, we've seen so many situations \u2014 [Maeve?] and [Boz?] and [Fin?], [Ense?] and [Smalltalk?] \u2014 and we get these founders. \u2192 folded into the Failure as edge page as the persistence argument, with the prior attempts named from public record." },
        { date: "Aug 14", text: "Jasmine, a teenager in Berkeley working on solar power technology, is someone we want to invest in. \u2192 filed on the First checks page as a non-Venmo pipeline entry, and linked to the Teenagers vehicle. Needs a last name; deck and website untouched." },
        { date: "Aug 14", text: "Seven vehicles we want to start, Andrew's list in order: 1 Venmo alums, 2 Jelly, 3 Teenagers, 4 Spas, 5 General, 6 Wefunder alums, 7 Fin alums. → filed on the Vehicles page as audience-scoped vehicles. 'Spas' unconfirmed. Nothing on the website or deck touched." },
        { date: "Aug 14", text: "'Spas' means actual spas. Three we want to invest in so far: Good Hot in Richmond, Alchemy Springs in San Francisco, Archimedes Banya. → new Spas page with all three researched from public sources; Vehicles entry #4 updated from 'needs clarification' to confirmed. Website and deck untouched." }
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

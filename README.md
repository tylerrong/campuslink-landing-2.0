# CampusLink 2.0 Brand Refresh Prototype

A front-end only concept refresh for `joincampuslink.com` focused on visual polish, hierarchy, and UX clarity.

## Run

Open [`index.html`](./index.html) in a browser.

## What's Included

- New visual system using CSS tokens for color, spacing, shadows, and radii
- Refreshed app shell with responsive sidebar + topbar
- Redesigned core screens: Dashboard, Events, Offers, Profiles, Messages
- Lightweight interactions: section switching, segmented controls, event modal, mobile nav toggle

## Landing Page (`landing/`)

The public marketing page, served separately from the app shell.

Design direction: light editorial, high-contrast. Structure is carried by
hairline rules and negative space rather than cards. Brand red is unchanged;
the neutrals are pure greys (white / light grey), with no warm cast.

- **Type**: Inter Tight (display) · Inter (UI/body). **No italics anywhere** —
  emphasis inside a heading (`<em>`) is carried by weight (400 against 600),
  not by a slant or a second family.
- **Nav**: logo, `Sign in`, and the primary CTA only. There are no section links
  and therefore no mobile menu — section navigation lives in the footer.
- **Hero footage**: each audience has its own background video, declared as
  `video` / `poster` in the `AUDIENCES` map in `landing/app.js` and loaded from
  `landing/assets/hero-<audience>.mp4` + `.jpg`.
  `hero-brands.mp4` (UCLA x Coca-Cola activation, 9s) and `hero-orgs.mp4`
  (FLAIR x USC recap, 18s) are real footage, trimmed with audio stripped and
  graded down so the white hero copy clears 4.5:1 against the brightest frame.
  `hero-students.mp4` is still a **generated placeholder** — drop a replacement in
  at the same filename and nothing else needs to change.
  Real footage should be dark or colour-graded down: the `.hero-scrim` gradient in
  `styles.css` is what keeps the white hero type legible, and bright daytime clips
  will need that scrim strengthened. Video is decorative (`aria-hidden`), muted,
  looping, and does not autoplay under `prefers-reduced-motion`.
- **School marks**: `landing/assets/schools/*.svg` are the official athletic marks,
  tiled to 64×64 so they read in the 38px `.feed-logo` well. University logos are
  trademarked and need permission before going live.
- **Brand marks**: the hero marquee in `.hero-logos` uses official vector
  wordmarks (Coca-Cola, Amazon, TIME, Lyft, TikTok, Red Bull, Monster Energy,
  Feastables, CPK in `landing/assets/brands/`), forced white with
  `filter: brightness(0) invert(1)`. Brand logos are trademarked and need
  permission before going live. The track must stay duplicated exactly twice;
  spacing is `margin-inline-end` (not flex `gap`) so the `-50%` translate loops
  cleanly.
- **Event feed loop**: `.feed-row` uses `margin-bottom`, not grid `gap`, so the set
  height is an exact multiple of the row pitch and the `-50%` translate lands
  seamlessly. The row list must stay duplicated exactly twice, and one set must be
  taller than the card, or the loop shows empty space.
- **Section marks**: every section is introduced by the same pill (`.eyebrow`);
  dark sections get the inverted variant via `.section-head.light`. Consecutive
  blocks alternate orientation — How it works paints visual-left, Platform
  copy-left — while DOM order always stays heading-first.
- **Tokens**: type scale, spacing, radius, and elevation live in `:root` in `landing/styles.css`
- **Audience switcher**: `For brands` / `For student orgs` / `For students` swaps hero,
  steps, and CTA copy from the `AUDIENCES` map in `landing/app.js`. State persists
  via `localStorage` and the `?for=` query param.
- **Breakpoints** come from the content: 980px (two-up grids),
  860px (mobile nav), 680px (single column).

Run it with the `landing` config in `.claude/launch.json`, or serve the folder statically.

## Notes For Engineering Handoff

- Replace static values with real API-backed data and state
- Convert major UI blocks into reusable components in your production stack
- Keep the token names from `:root` in `styles.css` as the first pass of a design system

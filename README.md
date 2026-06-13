# rdor.net

A hand-coded personal website built to evoke the early-2000s community web —
old gaming clans, fansites, BBS-descendant communities, mod scenes, indie game
studios, and tech-project homepages. No frameworks, no build step, no external
assets. View-source and steal it.

## The Prompt

> Make me a personal website that is characteristic of the 2000s web.
>
> Think old gaming clans, fansites, BBS-descendant communities — `.net` carried
> a homebrew, community-run vibe: forums, fan sites, mod communities, indie game
> studios, tech projects.

The existing repo contained a bare-bones `index.html` with the real content to
preserve: the handle **rdor**, a **Summer '26** edition, a manifesto
(AI/ML · DevOps · Neurotech · Product Management), and two projects —
**ScheduleBob** (6 users) and **Metis** (HackDavis, MLH Best Use of Vultr).

## The Response

Built a five-page static site that leans into the period aesthetic while keeping
all of the original content intact.

### Pages

| File              | Purpose                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `index.html`      | HQ — marquee ticker, hit counter, site-updates news log, now-playing widget, quick stats |
| `about.html`      | Long-form manifesto, ASCII art, FAQ, tech-stack panel                                    |
| `projects.html`   | Project cards (ScheduleBob, Metis) with status bars, trophy case, and the roadmap        |
| `links.html`      | Webring, "link to me" 88×31 buttons + embed snippet, bookmarks, self-awarded badges      |
| `guestbook.html`  | Working guestbook — seeded entries plus a form that saves new submissions                |

### Shared assets

| File         | Purpose                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `style.css`  | The entire look — CSS starfield, beveled panels, neon-on-black, gradient nav, hazard banners   |
| `script.js`  | The only site-wide script — a per-view hit counter and the live status-panel clock             |

### Period-correct touches

- Layout `<table>`s and `<marquee>`s
- Visitor hit counter (starts at 13370, not zero)
- "Best viewed @ 1024×768", "made in Notepad" / HTML badges
- Blinking `NEW` tags and an under-construction banner
- Hand-rolled 88×31 buttons and a webring
- `webmaster@rdor.net` mailto and "view-source and steal it" comments

## Design notes

- **No external assets.** Every icon, texture, and badge is CSS or Unicode, so
  nothing 404s.
- **No frameworks, no build step.** Plain HTML/CSS/JS.

## Known limitation

The hit counter and guestbook are backed by `localStorage`, so they are
**per-browser, not global** — a fully static site cannot run a server-side
counter or shared guestbook. Making either genuinely shared would require a
small backend (or a serverless function / hosted service).

## Running it

Just open `index.html` in a browser:

```powershell
start index.html
```

No server required.

# Xavier Rao — Portfolio

Personal portfolio website for Xavier Rao, a Software Engineering student at RIT seeking a Spring/Summer 2027 co-op.

## Live Site

[xavierrao.com](https://xavierrao.com)

## Structure

```
portfolio/
├── index.html          # Main page
├── styles.css          # All styles + responsive breakpoints
├── portfolio.js        # Nav tracking, scroll effects, back-to-top
└── img/                # Project screenshots, resume image, background
    ├── home_background.jpg
    ├── resume.png
    ├── XavierRao_Resume.pdf
    ├── guesstherank.png
    ├── mostlikelyto.png
    ├── typespeed.png
    ├── infinitetictactoe.png
    └── catrescue.png
```

## Features

- **Smooth scroll navigation** — pill-shaped fixed nav bar with active link tracking
- **Nav fade on scroll** — navbar fades out while scrolling and reappears once the user stops
- **AOS animations** — fade-up/zoom-in entry animations powered by [AOS](https://michalsnik.github.io/aos/)
- **Responsive layout** — project cards stack vertically on tablet/mobile; nav collapses to icons-only on small screens
- **Project showcase** — each project includes a description, tech stack icons, and links to GitHub/live demo
- **Resume section** — preview image with a one-click PDF download
- **Contact section** — cards linking to email, GitHub, and LinkedIn
- **Back to top button** — appears after scrolling 300px

## Tech Stack

- HTML5 / CSS3 / Vanilla JS
- [jQuery 3.5](https://jquery.com/) — scroll utilities
- [AOS 2.3](https://michalsnik.github.io/aos/) — scroll animations
- [Devicon](https://devicon.dev/) — tech stack icons
- [Font Awesome](https://fontawesome.com/) — UI icons

## Projects Featured

| Project | Stack | Links |
|---|---|---|
| Guess The Rank | React, Node.js, Socket.io | [GitHub](https://github.com/xavierrao/guessTheRank) · [Live](https://guesstherank.xavierrao.com) |
| Most Likely To | React, Node.js, Socket.io | [GitHub](https://github.com/xavierrao/mostLikelyTo) · [Live](https://mostlikelyto.xavierrao.com) |
| TypeSpeedrun | HTML / CSS / JS | [GitHub](https://github.com/xavierrao/typespeed) · [Live](https://typespeedrun.xavierrao.com) |
| Infinite Tic Tac Toe | Java | [GitHub](https://github.com/xavierrao/infiniteTicTacToe) |
| Cat Rescue | Angular, Java, TypeScript | [GitHub](https://github.com/xavierrao/cat_rescue) |

## Running Locally

No build step required — just open `index.html` in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```
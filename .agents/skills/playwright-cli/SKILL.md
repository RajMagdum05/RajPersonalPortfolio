---
name: playwright-cli
description: End-to-end browser automation, visual testing, UI audits, and element inspection using playwright-cli. Use when asked to test web pages, inspect UI in a real browser, capture screenshots, take DOM snapshots, verify responsive layouts, or debug frontend interactions.
---

# Playwright CLI Skill

Use `playwright-cli` for high-performance, token-efficient browser automation and UI verification.

## Core Commands

### Browser Lifecycle & Navigation
```bash
playwright-cli open [url]                  # open browser, optionally navigate to url
playwright-cli open [url] --headed         # open in headed mode to see live browser
playwright-cli goto <url>                  # navigate to url
playwright-cli resize <width> <height>     # resize viewport (e.g. 1440 900, 390 844)
playwright-cli close                       # close browser session
playwright-cli list                        # list all active sessions
playwright-cli close-all                   # close all sessions
```

### Snapshot & Inspection
```bash
playwright-cli snapshot                    # capture page snapshot to obtain element refs
playwright-cli snapshot --boxes            # include element bounding boxes [box=x,y,w,h]
playwright-cli snapshot <target>           # snapshot a specific element or container
playwright-cli find <text>                 # search snapshot for text
playwright-cli find --regex <pattern>      # search snapshot using regex
playwright-cli eval <expr> [target]        # evaluate JS expression on page or element
```

### Visual Verification & Capture
```bash
playwright-cli screenshot                  # screenshot of current page
playwright-cli screenshot --filename=f.png # save screenshot with specific filename
playwright-cli screenshot --hires          # capture at full device pixel ratio
playwright-cli pdf --filename=page.pdf     # export page as PDF
```

### Interaction & Emulation
```bash
playwright-cli click <target>              # click element by ref (e.g. e12) or selector
playwright-cli fill <target> <text>        # fill text into input/textarea
playwright-cli press <key>                 # press keyboard key (e.g. Enter, Escape)
playwright-cli hover <target>              # hover over element
playwright-cli set-color-scheme dark       # emulate dark mode
playwright-cli set-color-scheme light      # emulate light mode
playwright-cli set-reduced-motion reduce   # test reduced motion preference
```

## UI Verification Workflow

When reviewing or testing a portfolio or web application:
1. Start local dev server or static file server.
2. Open URL with `playwright-cli open <url>`.
3. Test key viewports:
   - Desktop: `playwright-cli resize 1440 900` followed by `playwright-cli screenshot --filename=desktop.png`
   - Tablet: `playwright-cli resize 768 1024` followed by `playwright-cli screenshot --filename=tablet.png`
   - Mobile: `playwright-cli resize 390 844` followed by `playwright-cli screenshot --filename=mobile.png`
4. Inspect elements with `playwright-cli snapshot` and test interactive states (navigation links, project cards, theme toggles, modal dialogs).
5. Clean up with `playwright-cli close`.

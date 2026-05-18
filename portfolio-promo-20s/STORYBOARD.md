# Storyboard

**Format:** 1920x1080  
**Audio:** Japanese TTS voiceover. Optional low electronic underscore if added later.  
**VO direction:** Calm, confident, mid-tempo Japanese narration. Businesslike, not flashy; leave small pauses after the hook and proof lines.  
**Style basis:** DESIGN.md, captured portfolio assets, navy/gold/electric-blue visual language.

## Asset Audit

| Asset | Type | Assign to Beat | Role |
| --- | --- | --- | --- |
| `hero-pc.png` | Hero image | Beat 1, Beat 5 | Full-bleed signature AI mountain opener and brand closer |
| `hero-sp.png` | Hero image | SKIP | Mobile variant, redundant for landscape video |
| `nexcore-banner-updated.png` | Client banner | Beat 2 | Proof of strategy-led production |
| `key-visual-shinpeki.png` | Key visual | Beat 3 | Portfolio card for visual creative |
| `youtube-thumb-ai-prompts.png` | Thumbnail | Beat 3 | Portfolio card for YouTube/AI prompt work |
| `clean-smile-logo.png` | Logo work | Beat 3 | Portfolio card for branding |
| `solar-flyer.png` | Flyer | Beat 3 | Portfolio card for advertising work |
| `svgs/tick.svg` | Icon | Beat 4 | Checklist proof accent |
| `svgs/step-icon.svg` | Icon | Beat 4 | Workflow process accent |
| `svgs/inline-icon.svg` | Icon | Beat 2 | Small technical accent |
| `svgs/scroll-btn.svg` | Icon | SKIP | Site navigation only |

## BEAT 1 — HOOK: AI導入の光 (0.0-4.0)

**VO cue:** "AI導入は、作って終わりじゃない。"

**Concept:** The video opens inside the site's signature world: a dark field, electric blue AI beams, and gold interface lines. It should feel like the portfolio hero has awakened and started moving forward.

**Visual description:** `hero-pc.png` fills the frame with a slow push-in. A dark navy overlay keeps text readable while blue light pulses from the mountain peak. The hook appears in large Noto Serif JP, with "作って終わりじゃない" highlighted in gold. Thin gold scan lines draw around the frame, echoing the website's border details.

**Assets:** `capture/assets/hero-pc.png`

**Animation choreography:** Background DRIFTS forward; blue light PULSES; hook text DRAWS upward line by line; gold frame lines TRACE into place; final phrase GLOWS once.

**Transition:** Cinematic zoom through into Beat 2.

**Depth layers:** BG hero image and glow; MG navy readability veil; FG hook typography and gold frame.

**SFX cue:** Soft rising digital swell, small gold chime on the highlighted phrase.

## BEAT 2 — STORY: 集客まで設計 (4.0-8.5)

**VO cue:** "KOHYAMAデジタル総研は、個人事業主と中小企業のために、Web、画像、資料、集客導線までまとめて設計します。"

**Concept:** This beat shows the promise behind the service: not just design output, but a practical system from message to customer path. The NexCore banner acts as a real-world proof point while service keywords orbit around it.

**Visual description:** The NexCore client banner slides into a framed stage on the right. On the left, four service chips appear in sequence: Web, 画像, 資料, 集客導線. A thin gold route line connects the chips to the banner, making the "funnel design" idea visible.

**Assets:** `capture/assets/nexcore-banner-updated.png`, `capture/assets/svgs/inline-icon.svg`

**Animation choreography:** Banner SLIDES in with perspective; chips CASCADE; route line DRAWS left-to-right; small inline icon SPINS once; supporting text FLOATS subtly.

**Transition:** Velocity-matched upward blur into portfolio cards.

**Depth layers:** BG dark surface grid; MG service chips and gold route; FG tilted client banner.

**SFX cue:** Four soft interface ticks as the service chips land.

## BEAT 3 — PROOF: 制作物の幅 (8.5-13.2)

**VO cue:** Continue the story line visually, no new major text beyond short labels.

**Concept:** A fast but premium portfolio carousel. The viewer sees that the service covers visual concepts, thumbnails, branding, and flyers, all grounded in actual captured work.

**Visual description:** Four captured works form a 3D angled gallery. `key-visual-shinpeki.png` and `youtube-thumb-ai-prompts.png` stack on the left; `clean-smile-logo.png` sits center as a bright brand panel; `solar-flyer.png` rises on the right as a tall ad board. Gold labels appear underneath each cluster.

**Assets:** `capture/assets/key-visual-shinpeki.png`, `capture/assets/youtube-thumb-ai-prompts.png`, `capture/assets/clean-smile-logo.png`, `capture/assets/solar-flyer.png`

**Animation choreography:** Cards FAN in from depth; images KEN-BURNS slowly; labels TYPE on; a gold shimmer SWEEPS across the gallery; small particles RISE from the blue works.

**Transition:** Hard cut on proof line.

**Depth layers:** BG navy glow; MG image cards; FG labels and shimmer.

**SFX cue:** Clean camera shutter stack as the cards land.

## BEAT 4 — PROOF: 速さと安心 (13.2-17.0)

**VO cue:** "最短翌日納品。原則24時間以内に返信。"

**Concept:** This is the trust beat. It should feel decisive and operational, like a clean dashboard of promises that matter to small businesses.

**Visual description:** Two large proof tiles occupy the center: "最短翌日納品" and "24時間以内に返信". Smaller supporting chips below read "集客導線まで設計" and "専門用語をかみ砕いて説明". Gold tick icons animate into each tile.

**Assets:** `capture/assets/svgs/tick.svg`, `capture/assets/svgs/step-icon.svg`

**Animation choreography:** Tiles STAMP in; numbers COUNT/FLIP into place; tick icons DRAW and POP; supporting chips SLIDE up; background grid SCANS downward.

**Transition:** Blur-through into final brand closer.

**Depth layers:** BG dark policy panel; MG proof tiles; FG ticks, numbers, gold dividers.

**SFX cue:** Two warm confirmation clicks.

## BEAT 5 — CTA: 選ばれる形へ (17.0-20.0)

**VO cue:** "あなたの事業を、選ばれる形へ。KOHYAMAデジタル総研。"

**Concept:** Return to the hero world and resolve with a clear brand promise. The ending should feel like the AI beam has become a practical path for the viewer's business.

**Visual description:** The hero image returns, cropped to the glowing mountain and logo area. The line "あなたの事業を、選ばれる形へ。" appears centered, then the brand name locks in below with a gold underline. Two CTA pills appear near the bottom: "料金表を見る" and "お問い合わせはこちら".

**Assets:** `capture/assets/hero-pc.png`

**Animation choreography:** Hero LIGHT SWELLS; CTA line RISES; brand name LOCKS; underline DRAWS; CTA pills SLIDE in and breathe once.

**Transition:** End on held frame.

**Depth layers:** BG hero beam; MG closing line and brand; FG CTA pills and gold underline.

**SFX cue:** Final resolved chime, short tail.

## Production Architecture

```
portfolio-promo-20s/
├── index.html
├── DESIGN.md
├── SCRIPT.md
├── STORYBOARD.md
├── transcript.json
├── narration.wav
├── capture/
└── compositions/
    ├── beat-1-hook.html
    ├── beat-2-story.html
    ├── beat-3-proof.html
    ├── beat-4-speed.html
    └── beat-5-cta.html
```

# In the Brambles — sandykahrod.co.uk

Static site for Sandy Kahrod, Brownfield Basketmaker. Plain HTML and one
stylesheet. No build step, no Jekyll, no dependencies — GitHub Pages serves
the files exactly as they are.

## What to do first

1. **Replace the placeholder photos** in `assets/images/`. Keep the filenames.
   `work-01.jpg` and `work-02.jpg` are square and used on the homepage grid;
   `work-01-b.jpg` and `work-02-b.jpg` are landscape and used as the hero at
   the top of each piece page. `work-03*` are gone: the Carnival and Lent
   page has no photograph yet, and says so rather than pretending.
2. **Write the two made pieces** in `work/`. Each has its body copy marked in
   bold square brackets, plus four facts (materials, size, year, status).
   `innovative-module.html` needs a real title and a real filename too.
3. **Swap the email** when `inthebrambles.co.uk` is bought. It appears in
   `contact.html`; find and replace `inthebrambles@gmail.com` with
   `sandy@inthebrambles.co.uk`.

## A piece with no photograph

`work/carnival-and-lent.html` is a project in development, so it has no hero
image and its homepage tile is a bone square between two gingham bands
(`.shot--soon`) rather than a placeholder photo. When there is something to
show, drop the `shot--soon` div for a normal `.tile__shot` holding an `<img>`,
and add a `.piece__hero` back at the top of the page.

Search the repo for `[` to find every remaining placeholder.

## Adding a new piece

1. Copy any file in `work/` and rename it, e.g. `work/canal-basket.html`.
2. Change the `<title>`, the `<h1 class="piece__title">`, the description,
   and the four facts.
3. Add two photos to `assets/images/` and point the two `<img src>` at them.
4. Add a tile to the `<ul class="grid">` in `index.html`, copying an
   existing `<li class="tile">`.
5. Fix the prev/next links at the bottom of the neighbouring piece pages.

## The opening poster

The homepage opens on a full-screen gingham poster — the Direction C design at
browser scale — and the work grid sits below it. Everything in it lives in
`<section class="poster">` at the top of `index.html`; delete that section and
the homepage reverts to the grid alone.

The header floats over the poster showing only the burger, then turns solid
with a small wordmark once you scroll past. Without JavaScript it simply stays
solid the whole way down, which is still perfectly usable.

## Navigation

The menu is a burger at every width. The links sit in the page markup, so
without JavaScript they render as a plain visible row — `assets/js/nav.js`
collapses them and wires up the button. To add a link, add an `<a>` inside
`<nav id="menu">` on every page.

## Instagram

One link, in the footer, rather than a handle repeated on every page. It is
Instagram's official glyph, inlined from their brand assets, on no background:
black at rest and Deep Thorn on hover, the same colour change the menu links
make. The source file is kept at `assets/images/instagram-glyph.svg`.

Three things to keep if you edit it. The `fill="currentColor"` on the `<svg>`,
which is what lets the glyph change colour at all. The `aria-label` on the
link, the only thing telling a screen reader where it goes now the handle is
gone. And the invisible 44px box around the 24px glyph — that is the tap
target, and the `-10px` right margin that goes with it is what lines the glyph
up with the gutter instead of its box.

## Domain

`CNAME` currently holds `sandykahrod.co.uk`. When you move to the new domain,
change that one line and point the DNS at GitHub Pages. Anything already
linked to the old address keeps working if you leave the old domain
redirecting.

## The brand

Colours, type, the gingham construction and the placement rules all come from
the Direction C brand spec. The one rule worth repeating here: **gingham is
the frame, never the ground.** It runs as a band at the very top and bottom of
every page, and nowhere else. Pages stay bone so that photographs of the work
are not competing with a check.

| | |
| --- | --- |
| Ember Orange | `#FF6B1A` |
| Bramble Coral | `#FF4C44` |
| Thorn Pink | `#FF2D6F` |
| Bone | `#F5EFE3` |
| Bramble Black | `#0B0B0C` |
| Acid Yellow | `#FFE44D` |
| Deep Thorn | `#C0185A` |

Fonts are Anton and Space Grotesk, loaded from Google Fonts. Both are Open
Font Licence, so commercial use needs no further licence.

## Local preview

Open `index.html` in a browser. The 404 page uses absolute paths, so it only
resolves correctly once the site is deployed — that is deliberate and correct
for GitHub Pages.

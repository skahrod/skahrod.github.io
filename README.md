# In the Brambles — inthebrambles.co.uk

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

## The Carnival and Lent poster

That piece has no object to photograph yet, so it uses the project's poster
instead, in two crops:

- `carnival-tile.webp` &mdash; square, for the homepage grid. The poster is
  4:5, so it is **padded** to square in the poster's own background colour
  (`#FE5E56`) rather than cropped: a centre crop would cut off the Oriel
  Myrddin line at the top and the funder logos at the bottom.
- `carnival-poster.webp` and `carnival-poster-mint.webp` &mdash; the two
  colourways, shown side by side on the piece page through `.poster-pair`,
  capped at 760px so someone else&rsquo;s design does not swamp the page. The
  coral one is used alone for the tile: it is the higher resolution of the two
  (1000px against 750px) and its ground is within a few points of Bramble
  Coral, so it sits inside the site&rsquo;s own palette.

The `.shot--soon` class is still in the stylesheet, unused, for the next piece
that needs a tile before it has a photograph.

Search the repo for `[` to find every remaining placeholder.

## Adding an image to a piece

Each piece page ends in one `<div class="gallery">`. To add an image, add a
`<figure>` to it &mdash; that is the whole job; the grid takes any number.

```html
<figure><img src="../assets/images/errand-basket-04.webp" alt="..." loading="lazy"></figure>
```

Three rules worth keeping:

- **`class="wide"` on the figure** makes it span both columns. Use it for a
  landscape shot, or anything that needs the room.
- **Captions are optional and should stay rare.** Caption an image only when
  the caption says something the image cannot &mdash; that a technique is
  standing in for another, say, or whose basket the other one is. An image
  that only needs describing does not need a caption.
- **No `width`/`height` attributes.** Images keep their own proportions here,
  so a wrong pair of numbers would squash them.

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

`CNAME` holds `inthebrambles.co.uk`, and that file is what tells GitHub Pages
which domain to answer on. Deleting or emptying it drops the site back to
`skahrod.github.io`, so leave it alone unless the domain changes.

At GoDaddy the apex has four A records and four AAAA records pointing at
GitHub, plus `www` as a CNAME to `skahrod.github.io`. `sandykahrod.co.uk` is a
separate domain set to forward here permanently; it holds no records of its
own.

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

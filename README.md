# In the Brambles — sandykahrod.co.uk

Static site for Sandy Kahrod, Brownfield Basketmaker. Plain HTML and one
stylesheet. No build step, no Jekyll, no dependencies — GitHub Pages serves
the files exactly as they are.

## What to do first

1. **Replace the six placeholder photos** in `assets/images/`. Keep the
   filenames. `work-01.jpg` … `work-06.jpg` are square and used on the
   homepage grid; `work-01-b.jpg` … `work-06-b.jpg` are landscape and used
   as the hero at the top of each piece page.
2. **Write the piece pages.** Each file in `work/` has a paragraph marked
   `[Replace this paragraph.]` and a set of facts (materials, size, year,
   status). The titles are placeholders too.
3. **Finish the Contact page.** Two paragraphs are marked in bold square
   brackets — the one about your weaving heritage, and the one about markets.
4. **Swap the email** when `inthebrambles.co.uk` is bought. It appears in
   `contact.html` and in the footer of every page; find and replace
   `sandykahrod@gmail.com` with `sandy@inthebrambles.co.uk`.

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

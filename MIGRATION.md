# Rebuilding this mockup on Squarespace

This static site is a pitch mockup only. The live site should be rebuilt on Squarespace (Basic is the planned plan) so Herman owns the account and Jaret is a collaborator, not the only host or admin. Wix is the fallback if Squarespace does not work out.

Every layout on these pages is meant to map to a built-in Squarespace section or block. Do not rebuild the custom HTML or JavaScript. Recreate the pages with the blocks below, then paste in the confirmed copy and photos.

Until the real site is ready to go live, keep search engines from indexing it (Squarespace has a site-wide hide/noindex setting).

## Shared on every page

- **Header:** Squarespace site header. Site title "Herman Overstreet" and a tagline such as "Roofer & Handyman · Concord & Charlotte, NC". Navigation: Home, Services, Projects, Gallery, About, Reviews, Book. Add a header button for "Get a Free Quote".
- **Phone bar:** Squarespace announcement bar, or a phone link in the header, with Herman's real number once he confirms it.
- **Footer:** Footer with business name, service area, hours, email, license, a phone link, and buttons or links for "Get a Free Quote" and "Book a visit".
- **Mobile menu:** Use the built-in Squarespace header menu. Do not port the mockup's Menu button script.

## Page by page

### Home (`index.html`) → Squarespace Home

1. **Hero:** A section with a background or poster image (the living-room after photo), a short eyebrow, the headline, the intro paragraph, and two buttons ("Get a Free Quote", "See a featured project"). This is a standard Squarespace fluid-engine or banner section: image + text + buttons.
2. **Rental Rescue:** A section heading and short intro, then two side-by-side image blocks for the kitchen before/after, another two-column pair for the bathroom, then a text block plus one image for the back porch. Use captions, not a before/after slider.
3. **What the job involved:** A text or list block. Leave the items as placeholders until Jaret confirms the scope.
4. **Fair, honest pricing:** A simple list or three text cards. Each promise still needs Herman's okay before it goes live.
5. **Testimonial:** A Quote block. Wait for Jaret's own words. Do not invent a review.
6. **The bigger jobs I take on:** A card or summary section with five items (Roofing, Exterior work, Interior work, Full home renovations, Smaller jobs & repairs). Link the heading to the Services page.
7. **Bottom call to action:** A colored section with a heading, a short note, and two buttons (quote and call). Mention that booking will use Square Appointments.

### Services (`services.html`) → a Services page

1. Page title and a short intro.
2. **Roofing first:** A featured section (heading, short text, "Free estimate" note). Add Herman's roof photo here when he supplies one. Until then, leave a clearly labeled placeholder; do not use a stock roof photo.
3. **Exterior work, Interior work, Full home renovations:** Three stacked list or card items, each with a "Free estimate" note.
4. **Smaller jobs & repairs:** One combined list item (TV mounting, drywall, doors and locks, fixtures and fans, furniture assembly, minor plumbing and electrical, deck and fence fixes). Do not split these back into separate cards.
5. Buttons for "Get a Free Quote" and "Book a visit".

### Projects (`project.html`) → a Projects or Rental Rescue page

Same content as the home-page project, in more detail: page title, intro, kitchen and bathroom before/after as two images side by side, back porch photo, and the scope list. A Portfolio or regular page both work. This page is an example of larger renovation work, not a roofing gallery.

### Gallery (`gallery.html`) → a Gallery page

A Gallery block in grid view, using the rental-overhaul photos already in `images/`. Add a short intro note that roofing photos will be added when Herman supplies them. When those photos arrive, add them to the same gallery. Do not fill the gap with stock photos.

### About (`about.html`) → an About page

An Image block (Herman's work photo, when supplied) plus text for the short bio. A list or text block for the facts: business name, experience, service area, phone, email, hours, license and insurance. Two buttons for quote and booking.

Do not invent a number of years, a license number, or manufacturer credentials. Use confirmed wording only ("decades of experience" is confirmed). Leave `[## years - confirm with Herman]` and `[license # - confirm with Herman]` blank until he provides them.

### Reviews (`reviews.html`) → a Reviews page

When real Google reviews exist, use Quote blocks or a Google reviews embed/link. Keep the "Leave a review" control as a button or link that opens Herman's Google review form. Do not write or display made-up reviews.

### Quote (`quote.html`) → a Quote page with a Form block

Rebuild the form with a Squarespace Form block (or an embedded Square form, if you prefer). Fields to include:

- Name (text, required)
- Phone (phone, required)
- Email (email, required)
- Address or area (text)
- Project type (dropdown): Roofing; Windows; Flooring; Exterior painting; Interior painting; Full renovation; Small repair / other
- Rough budget, optional (dropdown): Not sure / prefer not to say; Under $1,000; $1,000 to $5,000; $5,000 to $15,000; $15,000 to $30,000; $30,000 or more
- Describe the job (textarea, required)
- Photo, optional (file upload, if the plan allows it)
- Preferred contact (radio or dropdown): Phone, Email, Either is fine

Route submissions to Herman's business email once that address exists. The mockup form does not send messages.

### Book (`book.html`) → a Booking page

Embed **Square Appointments** (planned) or Squarespace Scheduling. Do not rebuild a custom calendar, week picker, or time-slot script. A short note and buttons for "Get a Free Quote" and "Call now" can sit beside the embed, since larger jobs often start with a quote. Later, the same booking tool can also be linked from Herman's Google Business Profile.

## What will not port 1:1

- The mockup's HTML, CSS, and JavaScript are throwaway. Recreate the look with Squarespace sections, fonts, and colors rather than pasting code.
- The mobile Menu button in `script.js` is only for this static mockup. Squarespace supplies its own navigation.
- The quote form's "demo only" script (it shows a note and does not submit) is replaced by a real Form block.
- The "Leave a review" demo note is replaced by a real Google review link.
- A custom booking calendar used to live on the Book page. It was removed from this mockup on purpose. Use Square Appointments or Squarespace Scheduling instead.
- Bracketed placeholder text, the "Mockup - placeholder content" badge, and the fake phone number `(704) 555-0100` should not appear on the live site.
- Search-engine hiding (`noindex`, `robots.txt`) should stay until Herman is ready to publish, then be turned off in Squarespace.
- This Cloudflare Pages link is a temporary preview. The real domain and Google Business Profile come later, registered to Herman's business email, with Jaret as collaborator.
- There are no roofing photos yet. Do not add stock photos. Wait for Herman.

## Wix fallback

If the site is built on Wix instead, the same page list still applies. Use a Wix banner or strip for the hero, repeated image elements for before/after pairs, a Wix Gallery, a Wix Form, a Testimonials element, and Wix Bookings in place of Square Appointments. Keep the same copy, photo rules, and ownership plan.

## Ownership reminder

Create the Squarespace (or Wix) account with Herman's business email. Add Jaret as a collaborator. Do not publish, transfer ownership, or spend money until Jaret and Herman have agreed.

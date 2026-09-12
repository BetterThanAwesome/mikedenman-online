MIKE DENMAN ONLINE
Static Cloudflare Pages site connected to GitHub

DEPLOY THROUGH THE EXISTING GITHUB REPOSITORY
1. Open BetterThanAwesome/mikedenman-online on GitHub.
2. Choose Add file, then Upload files.
3. Upload the CONTENTS of this folder, not the zip itself.
4. Existing files such as index.html, styles.css, and site-config.js will be replaced by the updated versions.
5. New folders such as book-marketing and assets/books will be added.
6. Commit directly to main.
7. Cloudflare Pages should automatically create a new production deployment from that commit.

WHAT CHANGED
* Homepage Books & Audio now features the STR advertising book, AI Art Genesis, MAD Audiobooks, and Book Marketing & Advertising.
* Both Amazon book cards use the supplied Amazon links.
* Book Marketing & Advertising opens a dedicated landing page at /book-marketing/.
* The landing page includes the $555 30 day launch, continued management, creative add ons, platform expansion, qualification, process, FAQs, and email inquiry calls to action.
* Contact buttons open an email to Hello@MADvertising.agency with identifiable subject lines.
* The book inquiry email is prefilled with qualifying questions.
* Linktree, LinkedIn, @mikedevius, @skin_a_maxx, and @dv8airt are linked from the homepage.

EDIT LINKS OR EMAIL TEXT
Open site-config.js. Main URLs and mailto actions are centralized there.

NO BUILD STEP
Plain HTML, CSS, and JavaScript. No npm or framework is required.

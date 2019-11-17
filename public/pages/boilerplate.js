export function Wrap(state, title, contentIntro, contentBody) {
  return `
    <!DOCTYPE html>
      <meta charset=utf-8>
      <meta name=viewport content=width=device-width,initial-scale=1,user-scalable=no>
      <meta name=supported-color-schemes content="light dark">
      <meta name=color-schemes content="light dark">
      <meta name=description
        content="BrowserGap puts you first with the most familiar and secure browser isolation serivce, while our remote and fully isolated cloud browsers protect your network.">
      <meta name=author content="BrowserGap">
      <meta name=copright content="The Dosyago Corporation, Newark, DE">
      <meta name=robots content="index,follow">
			<!-- aux meta -->
				<!-- Twitter -->
					<meta property="twitter:card" content="summary_large_image">
					<meta property="twitter:url" content="https://browsergap.xyz/">
					<meta property="twitter:title" content="BrowserGap. Remote browser isolation.">
					<meta property="twitter:description" content="BrowserGap puts you first with the most familiar and secure browser isolation serivce, while our remote and fully isolated cloud browsers protect your network.">
					<meta property="twitter:image" content="https://browsergap.xyz/images/3rd-party/undraw/security.svg"> 
				<!-- Open Graph / Facebook -->
					<meta property="og:type" content="website">
					<meta property="og:url" content="https://browsergap.xyz">
					<meta property="og:title" content="BrowserGap. Remote browser isolation.">
					<meta property="og:description" content="BrowserGap puts you first with the most familiar and secure browser isolation serivce, while our remote and fully isolated cloud browsers protect your network.">
					<meta property="og:image" content="https://browsergap.xyz/images/3rd-party/undraw/security.svg">
      <title>
        BrowserGap &mdash; ${title}
      </title>
      <link rel=stylesheet href=/styles/main.css>
      <link rel=stylesheet href=/styles/logo.css>
      <header role=banner aria-label="Page header when page is scrolled to the top">
        <nav>
          <a class=drawer href=#main-menu-open>&#x2630;</a>
          <a class=logo-link href=/>
            <aside class=logo>
              <h1>
                <span class=browser>
                  <span class=inner>
                    Browser
                  </span>
                </span>
                <span class=gap>
                  <span class=inner>
                    Gap
                  </span>
                </span>
              </h1>
            </aside>
          </a>
          <ul id=main-menu-open>
            <li>
              <a href=#top class=drawer>Close</a>
            </li>
            <li>
              <a href=/pages/remote-cloud-browser-service.html#cloud-browsers>
                Cloud browsers
              </a>
            </li>
            <li>
              <a href=/pages/per-seat-subscription-pricing.html#pricing>
                Pricing
              </a>
            </li>
            <li>
              <a href=/pages/five-elements-technology-reading-room.html#five-elements>
                Five Elements     
              </a>
            </li>
            <li>
              <a href=/pages/tutorials-and-support-reading-room.html#reading-room>
                Reading Room
              </a>
            </li>
            <li class=for-button>
              <a href=#membership-application class="register toggle-opener">
                <span class=verbose-name>
                  Membership&nbsp;Application
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <form method=POST
          action=https://formspree.io/cris@dosyago.com
          id=membership-application class=registration>
          <input type=hidden name=subject value="Membership Application for BrowserGap">
          <fieldset role=dialog>
            <legend>Membership Application</legend>
            <p>
              <label>
                Salutation
                <input autofocus required type=text autocomplete=honorific-prefix 
                  list=honorifics
                  maxlength=50
                  name=salutation placeholder="Major">
                </input>
              </label>
              <label>
                Your given name
                <input type=text autocomplete=given-name 
                  maxlength=100
                  name=given-name placeholder="Motoko">
              </label>
              <label>
                Your family name
                <input required type=text autocomplete=family-name 
                  maxlength=100
                  name=family-name placeholder="Kusanagi">
              </label>
            <p>
              <label>
                Your organization
                <input type=text autocomplete=organization 
                  maxlength=100
                  name=organization placeholder="Public Security Section 9">
              </label>
              <label>
                Your work email
                <input required type=email autocomplete=email 
                  maxlength=128
                  name=email placeholder="major@sec9.neotokyo.go.jp">
              </label>
            <p>
              <label>
                Your timezone
                <input required type=text autocomplete=on 
                  maxlength=64
                  name=timezone placeholder="GMT+9">
              </label>
            <p>
              <label>
                How many employees need browser isolation?
                <input name=scale type=number min=1 placeholder=300>
              </label>
            <p class=legal-agree>
              <label>
                <input required type=checkbox name=agree>
                I agree to the terms and conditions, privacy policy, data protection statement and consent to be contacted about this service.
              </label>
            <p>
              <button>Submit request</button>
              <br>
              <a class=cancel href=#top>I'm happy with my current solution.</a>
          </fieldset>
        </form>
        <form  id=account-login method=GET action=#login class=authentication>
          <fieldset role=dialog>
            <p>
              <label>
                Login email
                <input autofocus required type=email 
                  maxlength=128
                  name=email placeholder="major@sec9.neotokyo.go.jp">
              </label>
            <p>
              <label>
                Login password
                <input required type=password 
                  maxlength=128 
                  name=password placeholder="**********************">
              </label>
            <p>
              <button>Login</button>
              <a class=cancel href=#top>Not now</a>
          </fieldset>
        </form>
      </header>
      <main>
        <div class=header-background>
          <header role=banner aria-label="Page header after scrolling page down past the top">
            <nav>
              <a class=drawer href=#main-menu-open>&#x2630;</a>
              <a class=logo-link href=/>
                <aside class=logo>
                  <h1>
                    <span class=browser>
                      <span class=inner>
                        Browser
                      </span>
                    </span>
                    <span class=gap>
                      <span class=inner>
                        Gap
                      </span>
                    </span>
                  </h1>
                </aside>
              </a>
              <ul>
                <li>
                  <a href=#top class=drawer>Close</a>
                </li>
                <li>
                  <a href=/pages/remote-cloud-browser-service.html#cloud-browsers>
                    Cloud browsers
                  </a>
                </li>
                <li>
                  <a href=/pages/per-seat-subscription-pricing.html#pricing>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href=/pages/five-elements-technology-reading-room.html#five-elements>
                    Five Elements     
                  </a>
                </li>
                <li>
                  <a href=/pages/tutorials-and-support-reading-room.html#reading-room>
                    Reading Room
                  </a>
                </li>
                <li>
                  <a href=#membership-application class="register toggle-opener">
                    <span class=verbose-name>
                      Membership&nbsp;Application
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div class=diagonal-background></div>
        ${contentIntro}
        <div class=wrapper>
          ${contentBody}
          <footer>
            <author> 
              <aside class=logo>
                <h1>
                  <span class=browser>
                    <span class=inner>
                      Browser
                    </span>
                  </span>
                  <span class=gap>
                    <span class=inner>
                      Gap
                    </span>
                  </span>
                </h1>
              </aside>
              <p>
                The simplest and best browser isolation 
                platform. We provide completely isolated, fully managed,
                fully hosted, remote cloud browsers, via our fault-tolerant
                browser-as-a-service infrastructure.
              </p>
              <p>
                <cite>
                  Copyright &copy; 2012 - 2019
                  The Dosyago Corporation, 
                  All rights reserved.
                </cite>
              </p>
            </author>
            <nav>
              <ul>
                <h1>Need help?</h1>
                <li>
                  <a href=mailto:support@browsergap.xyz>
                    Get support
                  </a>
                </li>
                <li>
                  <a href=/pages/training-and-tutorials.html>
                    Training & Tutorials
                  </a>
                </li>
              </ul>
              <ul>
                <h1>Company</h1>
                <li>
                  <a href=/pages/about-browsergap.html>
                    About us
                  </a>
                </li>
                <li>
                  <a href=mailto:resume@browsergap.xyz>
                    Careers
                  </a>
                </li>
                <li>
                  <a href=mailto:contact@browsergap.xyz>
                    Contact
                  </a>
                </li>
              </ul>
              <ul>
                <h1>Legal Room</h1>
                <li>
                  <a href=/pages/legal-room/terms.html>
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href=/pages/legal-room/privacy.html>
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href=/pages/legal-room/security-responsible-vulnerability-disclosure-policy.html>
                    Security
                  </a>
                </li>
              </ul>
            </nav>
            <a id=authentication href=#account-login class="authenticate toggle-opener">
                    Member&nbsp;Login
                  </a>
          </footer>
        </div>
      </main>
      <datalist id=honorifics>
        <option value="Mr">
        <option value="Mrs">
        <option value="Ms">
      </datalist>
      <script defer async src=/scripts/currentPageAnchor.js></script>
      <script defer async src=/scripts/populateHonorifics.js></script>
  `
}

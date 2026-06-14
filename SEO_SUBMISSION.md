# SEO Submission — Step by Step

Your site is technically ready for Google. To actually start appearing in searches you need to **verify ownership** and **submit the sitemap**. This is a 10-minute job, done once.

---

## 1. Get the site live first

Google can't verify a site that isn't online. Make sure `https://www.uboraservices.co.ke/` (or whatever your final URL is) actually loads in a browser before going further.

> ⚠️  If the final domain is different from `www.uboraservices.co.ke`, tell me — I need to update `sitemap.xml`, `robots.txt`, the `<link rel="canonical">` tags and the JSON-LD structured data. Otherwise Google will index the wrong URLs.

---

## 2. Add the property in Google Search Console

1. Go to <https://search.google.com/search-console>
2. Click **Add property** (top-left dropdown)
3. Choose **URL prefix** and enter: `https://www.uboraservices.co.ke/`
   *(or pick "Domain" if you can edit DNS — it covers www + non-www + http + https in one go, but needs a DNS TXT record at your registrar)*

---

## 3. Verify ownership (pick ONE)

### Option A — Meta tag (easiest, what I recommend)

Google shows you a snippet like:

```html
<meta name="google-site-verification" content="ABC123xyz..." />
```

**Send me the line.** I'll paste it into the `<head>` of all 5 HTML pages and push. Then click **Verify** in Search Console.

### Option B — HTML file

Google gives you a file like `google1234567890abcdef.html`.

**Send me the file** (or just the filename + contents). I'll drop it at the repo root and push. Then click **Verify**.

### Option C — DNS TXT record (best for the long term)

Google gives you a TXT record like `google-site-verification=ABC123xyz`. Add it at your domain registrar (the company you bought `uboraservices.co.ke` from). No code change needed. Then click **Verify**.

---

## 4. Submit the sitemap

Once verified, in Search Console:

1. Go to **Sitemaps** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **Submit**

Google will read it within hours and start indexing your 5 pages.

---

## 5. Do the same for Bing (5 more minutes, optional but worth it)

- <https://www.bing.com/webmasters>
- "Import from Google Search Console" works — you don't even repeat the work

---

## 6. The single biggest move: Google Business Profile

For a local Kenyan services company, **this matters more than the website itself** for ranking on terms like *"cleaning services Nairobi"* or *"fumigation Kisumu"*.

- <https://business.google.com>
- Add Ubora Services Limited
- Add both addresses (Nairobi + Kisumu)
- Add phone, hours, services, photos (you already have great ones — reuse `images/photos/team.webp`, `waste.webp`, etc.)
- Verify by postcard (Google mails a code to the address)

Once live, **ask your clients to leave a Google review.** Reviews are the #1 ranking factor for local search.

---

## Anything I should add to the code?

When you have the verification code, paste it here and I'll wire it into the site. Until then there's nothing more I can do from the code side.

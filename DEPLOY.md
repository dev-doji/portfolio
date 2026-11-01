# Deploy — emmanueldoji.xyz on Vercel

## 1. Create the GitHub repo

```bash
cd /home/emmanuel/Documents/work_projects/portfolio
git init
git add .
git commit -m "chore: scaffold portfolio (Next.js 16 + Tailwind v4 + MDX case studies)"

gh repo create emmanueldoji-portfolio --public --source=. --remote=origin --push
# or manually:
#   gh repo create dev-doji/emmanueldoji-portfolio --public
#   git remote add origin git@github.com:dev-doji/emmanueldoji-portfolio.git
#   git push -u origin main
```

## 2. Connect to Vercel

```bash
npm i -g vercel
vercel login
vercel link      # interactive: pick your account, "new project", name "emmanueldoji-portfolio"
vercel --prod    # first deploy
```

Or via dashboard: vercel.com → New Project → import the GitHub repo → Framework: Next.js
(auto-detected) → Deploy.

## 3. Environment variables (Vercel dashboard → Settings → Environment Variables)

| Name | Value | Scope |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://emmanueldoji.xyz` | Production, Preview |
| `NEXT_PUBLIC_GA4_ID` | (optional) `G-XXXX` | Production |
| `RESEND_API_KEY` | (optional, if you wire a contact form later) | Production |
| `CONTACT_TO_EMAIL` | `info@officialapps.com` | Production |

## 4. Custom domain — emmanueldoji.xyz

In Vercel: **Project → Settings → Domains → Add → `emmanueldoji.xyz`**.

Vercel will give you DNS records to set at your registrar. Two paths:

### A) Apex (`emmanueldoji.xyz`) on the same registrar

Set these at your domain registrar's DNS panel:

```
Type   Name   Value
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

(Vercel will display the exact IP/CNAME values when you add the domain — use those if
they differ from above.)

### B) Use Vercel nameservers (cleaner — Vercel manages all DNS)

In your registrar: replace nameservers with the two Vercel gives you
(e.g. `ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Propagation: minutes to ~24h.

### Redirect www → apex (or vice versa)

In Domains, set one as primary; Vercel auto-redirects the other.

### TLS

Vercel issues a Let's Encrypt cert automatically once DNS resolves. Wait until the green
checkmark in the dashboard before announcing the URL.

## 5. Verify

```bash
# DNS resolution
dig +short emmanueldoji.xyz
dig +short www.emmanueldoji.xyz

# HTTPS + redirects
curl -I https://emmanueldoji.xyz
curl -I https://www.emmanueldoji.xyz
```

Once live:

- `/` → portfolio
- `/case-studies` → MDX index
- `/case-studies/foniolabs-sanity-migration` → first case study
- `/sitemap.xml` → all routes
- `/api/og` → OG image (200 OK, image/png)
- `/api/og?title=Hello&subtitle=Test` → custom OG

## 6. Going forward

- Every push to `main` → production deploy
- Every PR → preview deploy with its own URL
- Add a new case study → MDX file in `content/case-studies/` → commit → live in ~30s
- Update a project → edit `lib/data/projects.ts` → commit

## 7. Rollback

In Vercel: **Deployments → previous successful deploy → Promote to Production**. Reverts in
~10s without redeploying.

## Blog CMS (Keystatic)

Locally, run `npm run dev` and open http://localhost:3000/keystatic. Posts save to `content/blog`.

To edit from the live site:

1. Run `npm run dev` with `NEXT_PUBLIC_KEYSTATIC_GITHUB=true` and open /keystatic. Follow the prompts to create the GitHub App for dev-doji/portfolio.
2. Add `NEXT_PUBLIC_KEYSTATIC_GITHUB=true` and the `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` and `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` values it creates to Vercel.
3. Publishing a post then commits it to GitHub, and Vercel rebuilds the site.

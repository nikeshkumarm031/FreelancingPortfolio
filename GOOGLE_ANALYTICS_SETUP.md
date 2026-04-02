<!-- Google Analytics Setup for SvelteKit Project -->

## How to Add Google Analytics

### Step 1: Get Your Measurement ID
1. Go to: https://analytics.google.com
2. Create new property or use existing
3. Copy your **Measurement ID** (looks like: G-XXXXXXXXXX)

### Step 2: Add to Your SvelteKit Project

#### Option A: Add to app.html (Recommended for SvelteKit)

Edit `src/app.html` and add this before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

---

#### Option B: Add as SvelteKit Hook (More Advanced)

Create `src/hooks.client.ts`:

```javascript
export const handleBeforeNavigate = ({ to, from, willUnload, delta }) => {
    if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', {
            page_path: to?.url?.pathname || '/',
            page_title: document.title
        });
    }
};
```

This tracks page navigation in SPA mode.

---

### Step 3: Verify It's Working

1. Add script to your site
2. Deploy to Vercel
3. Visit your site
4. Go to Analytics Dashboard → Realtime
5. You should see yourself visiting the page
6. **Test:** Try different pages, scroll, click forms

---

### Step 4: Set Up Goals/Conversions

In Google Analytics, track:
1. **Form Submission** (Lead Capture Form)
2. **WhatsApp Click** (Phone CTA)
3. **CTA Button Clicks** 
4. **Scroll Depth** (Did they see important sections?)

#### How to track form submission:

In `src/components/sections/LeadCaptureForm.svelte`, after successful form submission add:

```javascript
if (window.gtag) {
    gtag('event', 'lead_generated', {
        event_category: 'engagement',
        event_label: 'website_audit_form'
    });
}
```

---

### Step 5: Create Custom reports

Once data is flowing (wait 24-48 hours):

1. **Top Landing Pages** → See which pages convert best
2. **User Flow** → How do visitors navigate?
3. **Conversion Rate** → % of visitors who contact you
4. **Traffic Source** → Where do visitors come from?

---

## What Metrics to Monitor

| Metric | Goal | Why |
|--------|------|-----|
| **Sessions** | Growing each month | More visitors = more leads |
| **Bounce Rate** | < 60% | People staying on your site |
| **Avg. Session Duration** | > 2 minutes | Engaging content |
| **Conversion Rate** | > 2% | People filling forms |
| **Organic Traffic %** | > 60% over time | SEO is working |
| **Top Pages** | Case studies & Services | Most valuable content |

---

## Dashboard to Create

1. **SEO Overview**
   - Organic traffic trend
   - Top landing pages
   - Top keywords (from Search Console)
   - Bounce rate by page

2. **Conversion Dashboard**
   - Form submissions
   - WhatsApp clicks
   - Phone calls
   - Email inquiries

3. **User Behavior**
   - Most visited pages
   - User flow
   - Time on page
   - Exit pages

---

## Connecting Analytics to Search Console

After 30 days in Search Console, you can see:
- What keywords bring traffic
- Click-through rate (CTR)
- Search position
- Impressions

This is GOLD for SEO! Track which keywords are:
- Getting impressions but low CTR → improve title/description
- Ranking but not clicked → update content
- Getting less traffic → need to improve ranking

---

## Security Note

⚠️ Don't share your Measurement ID publicly (it's okay, it's public anyway)
✅ Never share your Google Analytics view ID
✅ Use proper access control in Analytics

<script>
    import HeroSection from "../components/sections/HeroSection.svelte";
    import ServicesSection from "../components/sections/ServicesSection.svelte";
    import CaseStudiesSection from "../components/sections/CaseStudiesSection.svelte";
    import WhyChooseMeSection from "../components/sections/WhyChooseMeSection.svelte";
    import LeadCaptureForm from "../components/sections/LeadCaptureForm.svelte";
    import WhatsAppButton from "../components/WhatsAppButton.svelte";
</script>

<svelte:head>
    <!-- Essential Meta Tags -->
    <title>Website Developer & SEO Specialist | Grow Your Local Business Online</title>
    <meta name="description" content="Professional website development and SEO services for local businesses. Convert visitors into customers. Fast, optimized websites that rank on Google." />
    <meta name="keywords" content="website developer for local businesses, SEO services for small businesses, local business website developer, freelance web developer" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Open Graph Tags (Social Media) -->
    <meta property="og:title" content="Website Developer & SEO Specialist | Grow Your Local Business Online" />
    <meta property="og:description" content="I help local businesses build converting websites, rank on Google, and automate operations. Free website audit included." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourwebsite.com" />
    <meta property="og:image" content="%sveltekit.assets%/images/profile.png" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Website Developer & SEO Specialist" />
    <meta name="twitter:description" content="Professional websites that convert visitors into customers for local businesses." />
    <meta name="twitter:image" content="%sveltekit.assets%/images/profile.png" />

    <!-- Canonical URL -->
    <link rel="canonical" href="https://yourwebsite.com" />

    <!-- Schema Markup for Service Business -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nikesh Kumar - Web Developer & SEO Specialist",
            "description": "Professional website development and SEO services for local businesses",
            "url": "https://yourwebsite.com",
            "email": "nikeshkumarm031@gmail.com",
            "image": "%sveltekit.assets%/images/profile.png",
            "priceRange": "$$",
            "areaServed": {
                "@type": "GeoShape",
                "addressCountry": ["US", "UK", "CA"]
            },
            "knowsAbout": ["Website Development", "SEO Optimization", "Business Automation", "Web Design"],
            "serviceType": ["Website Development", "SEO Services", "Web Performance Optimization", "Business Automation"]
        }
    </script>

    <!-- Schema Markup for Professional Service -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Nikesh Kumar",
            "description": "Website developer and SEO specialist for local businesses",
            "url": "https://yourwebsite.com",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "nikeshkumarm031@gmail.com",
                "availableLanguage": ["en"]
            }
        }
    </script>

    <!-- Additional SEO Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="author" content="Nikesh Kumar" />
    <meta name="theme-color" content="#1e1b4b" />
</svelte:head>

<main class="flex flex-col flex-1 p-4">
    <HeroSection />
    <ServicesSection />
    <CaseStudiesSection />
    <WhyChooseMeSection />
    <LeadCaptureForm />
    <WhatsAppButton />
</main>


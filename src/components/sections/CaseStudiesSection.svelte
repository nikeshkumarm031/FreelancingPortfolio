<script>
    import CaseStudyCard from './CaseStudyCard.svelte';

    function scrollToSection(sectionId) {
        // Remove the # from the ID
        const baseId = sectionId.replace('#', '');
        
        // Get all elements with this ID (there should be 2: mobile and desktop)
        const allElements = document.querySelectorAll(`[id="${baseId}"]`);
        
        let targetElement = null;
        
        // Find the element that is actually visible (display not none)
        for (let element of allElements) {
            const computedStyle = window.getComputedStyle(element);
            if (computedStyle.display !== 'none') {
                targetElement = element;
                break;
            }
        }
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleAuditClick(event) {
        event.preventDefault();
        scrollToSection('#contact');
    }

    let caseStudies = [
        {
            name: "Cleaning Service",
            icon: "fa-solid fa-broom",
            badge: "⭐ Featured",
            problem: "Local cleaning business had no online presence. Customers couldn't find them, and they lost an estimated $10K/month in potential revenue.",
            solution: "Built a modern, mobile-optimized website with service portfolio, pricing, and integrated WhatsApp booking system. Optimized for local Google searches.",
            results: [
                "Ranked #1 for 'cleaning services near me' in 3 months",
                "30+ leads per month from website",
                "50% increase in bookings",
                "Website loads in 1.2 seconds (mobile)"
            ],
            link: "#"
        },
        {
            name: "Portfolio Building",
            icon: "fa-solid fa-briefcase",
            problem: "Freelancers and creative professionals struggled to showcase their work effectively. No central hub to display projects, get discovered, or convert visitors into clients.",
            solution: "Designed and built stunning portfolio websites with project galleries, case studies, testimonials, and lead capture forms. Optimized for search engines and mobile devices.",
            results: [
                "Average 150% increase in inquiries from portfolio visitors",
                "Improved Google rankings for personal brand keywords",
                "Higher quality leads with pre-qualified portfolio viewers",
                "Conversion rates increased by 40% with strategic CTAs"
            ],
            link: "#"
        },
        {
            name: "Salon & Spa Beauty",
            icon: "fa-solid fa-spa",
            problem: "Beauty salon couldn't handle booking inquiries. Most customers called, emails were missed, and they lost customers to competitors with online booking.",
            solution: "Created website with online booking system, appointment calendar, staff profiles, and WhatsApp integration for instant customer communication.",
            results: [
                "60% of bookings now online (vs 0%)",
                "Saved 8 hours/week on admin work",
                "25% reduction in no-shows with reminders",
                "Doubled monthly revenue in 6 months"
            ],
            link: "#"
        }
    ];
</script>

<!-- MOBILE VERSION (new) -->
<section id="case-studies" class="block md:hidden py-20 lg:py-32 flex flex-col gap-6">
    <div class="flex flex-col gap-1 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl text-violet-400 poppins font-semibold">
            Proven Results
        </h6>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
            How I've Helped Businesses <span class="text-violet-400">Grow</span>
        </h2>
        <p class="text-7lg text-gray-300 max-w-2xl mx-auto pt-4">
            Real businesses. Real results. See how website development and SEO transformed their growth.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {#each caseStudies as caseStudy}
            <CaseStudyCard {caseStudy} />
        {/each}
    </div>

    <div class="text-center pt-1">
        <p class="text-gray-300 mb-4">Ready to see similar results for your business?</p>
        <a
            href="#contact"
            on:click={handleAuditClick}
            class="blueShadow inline-block px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-500 transition duration-200 poppins"
        >
            Get Your Free Website Audit
        </a>
    </div>
</section>

<!-- DESKTOP VERSION (old) -->
<section id="case-studies" class="hidden md:flex py-20 lg:py-32 flex-col gap-16">
    <div class="flex flex-col gap-4 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl text-violet-400 poppins font-semibold">
            Proven Results
        </h6>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
            How I've Helped Businesses <span class="text-violet-400">Grow</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto pt-4">
            Real businesses. Real results. See how website development and SEO transformed their growth.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {#each caseStudies as caseStudy}
            <CaseStudyCard {caseStudy} />
        {/each}
    </div>

    <div class="text-center pt-8">
        <p class="text-gray-300 mb-4">Ready to see similar results for your business?</p>
        <a
            href="#contact"
            on:click={handleAuditClick}
            class="blueShadow inline-block px-8 py-4 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-500 transition duration-200 poppins"
        >
            Get Your Free Website Audit
        </a>
    </div>
</section>

<style>
    :global(.poppins) {
        font-family: 'Poppins', sans-serif;
    }

    :global(.blueShadow) {
        box-shadow: 0px 14px 55px rgba(109, 40, 217, 0.45);
    }
</style>
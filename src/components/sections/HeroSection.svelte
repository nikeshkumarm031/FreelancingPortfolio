<script>
    import { goto } from '$app/navigation';
    
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
</script>

<!-- MOBILE VERSION (new) -->
<section
    id="hero"
    class="block md:hidden flex flex-col gap-10 py-4 sm:py-8 md:py-14"
>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start lg:items-center">
        <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-3xl sm:text-6xl md:text-7xl leading-tight">
                Grow Your Business With
                <span class="poppins text-violet-400"> Professional Websites</span>
            </h1>
            <p class="text-10xl sm:text-xl md:text-2xl text-gray-300">
                I help local businesses build converting websites, rank on Google, and automate their operations.
            </p>
        </div>

        <div class="relative shadow-2xl grid items-start lg:place-items-center">
            <div class="relative w-full max-w-[500px]">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur-3xl opacity-30"></div>
                <img
                    src="/images/profile.png"
                    alt="Professional Portfolio"
                    class="relative object-cover object-top rounded-lg shadow-2xl w-full -mt-4 sm:-mt-6 lg:-mt-10"
                    loading="lazy"
                />
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2 md:gap-8 lg:gap-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-bolt text-violet-400 text-xl"></i>
                <span class="text-sm">Lightning Fast Websites</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-search text-violet-400 text-xl"></i>
                <span class="text-sm">SEO Optimized</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-robot text-violet-400 text-xl"></i>
                <span class="text-sm">Automation Ready</span>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button
                on:click={() => scrollToSection('#contact')}
                class="blueShadow text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-8 py-4 group rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition duration-300 font-semibold"
            >
                Get Free Website Audit
            </button>

            <a
                href="https://wa.me/917538886311?text=Hello%2C%20I%20want%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-8 py-4 group rounded-lg border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transition duration-300 font-semibold text-center"
            >
                <i class="fa-brands fa-whatsapp mr-2"></i>
                Contact on WhatsApp
            </a>
        </div>

        <div class="pt-4 text-sm text-gray-400">
            <p class="font-semibold mb-2">Trusted by businesses across</p>
            <p>🇺🇸 United States  •  🇬🇧 United Kingdom  •  🌍 Global Clients</p>
        </div>
    </div>
</section>

<!-- DESKTOP VERSION (old) -->
<section
    id="hero"
    class="hidden md:flex flex-col gap-10 py-4 sm:py-8 md:py-14"
>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
        <div class="flex flex-col gap-4">
            <h1 class="font-semibold text-5xl sm:text-6xl md:text-7xl leading-tight">
                Grow Your Business With
                <span class="poppins text-violet-400"> Professional Websites</span>
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-gray-300">
                I help local businesses build converting websites, rank on Google, and automate their operations.
            </p>
        </div>

        <div class="relative shadow-2xl grid items-start lg:place-items-center">
            <div class="relative w-full max-w-[500px]">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur-3xl opacity-30"></div>
                <img
                    src="/images/profile.png"
                    alt="Professional Portfolio"
                    class="relative object-cover object-top rounded-lg shadow-2xl w-full -mt-4 sm:-mt-6 lg:-mt-10"
                    loading="lazy"
                />
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-6 md:gap-8 lg:gap-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-bolt text-violet-400 text-xl"></i>
                <span class="text-sm">Lightning Fast Websites</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-search text-violet-400 text-xl"></i>
                <span class="text-sm">SEO Optimized</span>
            </div>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-robot text-violet-400 text-xl"></i>
                <span class="text-sm">Automation Ready</span>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button
                on:click={() => scrollToSection('#contact')}
                class="blueShadow text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-8 py-4 group rounded-lg bg-violet-600 text-white hover:bg-violet-500 transition duration-300 font-semibold"
            >
                Get Free Website Audit
            </button>

            <a
                href="https://wa.me/917538886311?text=Hello%2C%20I%20want%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-8 py-4 group rounded-lg border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transition duration-300 font-semibold text-center"
            >
                <i class="fa-brands fa-whatsapp mr-2"></i>
                Contact on WhatsApp
            </a>
        </div>

        <div class="pt-4 text-sm text-gray-400">
            <p class="font-semibold mb-2">Trusted by businesses across</p>
            <p>🇺🇸 United States  •  🇬🇧 United Kingdom  •  🌍 Global Clients</p>
        </div>
    </div>
</section>

<style>
    :global(.poppins) {
        font-family: 'Poppins', sans-serif;
    }
</style>
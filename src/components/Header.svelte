<script>
    export let y;
    
    let isMobileMenuOpen = false;

    export let tabs = [
        { name: "Services", link: "#services" },
        { name: "Case Studies", link: "#case-studies" },
        { name: "Why Choose Me", link: "#why-choose-me" },
        { name: "Contact", link: "#contact" },
    ];
    
    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }

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
            closeMobileMenu();
        }
    }

    function handleNavigation(event) {
        const href = event.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            scrollToSection(href);
        }
    }
</script>

<svelte:window on:click={closeMobileMenu} />

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">NICK</b>
    </h1>
    
    <!-- Desktop Navigation -->
    <nav class="hidden sm:flex items-center gap-8">
        {#each tabs as tab}
            <a
                href={tab.link}
                on:click={handleNavigation}
                class="text-white font-medium duration-200 hover:text-violet-400 transition-colors"
            >
                {tab.name}
            </a>
        {/each}
    </nav>
    
    <!-- Mobile Hamburger Menu -->
    <div class="sm:hidden relative">
        <button
            type="button"
            on:click|stopPropagation={() => isMobileMenuOpen = !isMobileMenuOpen}
            class="p-2 hover:bg-slate-800 rounded-lg transition"
            aria-label="Toggle navigation menu"
        >
            <i class="fa-solid fa-bars text-violet-400 text-xl"></i>
        </button>
        
        <!-- Mobile Menu Dropdown -->
        {#if isMobileMenuOpen}
            <div 
                role="menu"
                tabindex="0"
                on:click|stopPropagation
                on:keydown={(e) => {
                    if (e.key === 'Escape') isMobileMenuOpen = false;
                }}
                class="absolute top-full right-0 mt-2 bg-slate-900 border border-violet-700 rounded-lg shadow-2xl p-4 w-48 z-50"
            >
                <div class="flex flex-col gap-3">
                    {#each tabs as tab}
                        <a
                            href={tab.link}
                            on:click={handleNavigation}
                            class="px-4 py-2 text-violet-400 hover:bg-slate-800 rounded-lg transition duration-200 font-medium text-left block"
                        >
                            {tab.name}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</header>

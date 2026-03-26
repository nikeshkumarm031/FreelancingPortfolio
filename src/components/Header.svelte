<script>
    export let y;
    
    let isMobileMenuOpen = false;

    export let tabs = [
        { name: "Services", link: "#services" },
        { name: "Case Studies", link: "#case-studies" },
        { name: "Why Choose Me", link: "#why-choose-me" },
        { name: "Contact", link: "#ready-to-grow" },
    ];
    
    function closeMobileMenu() {
        isMobileMenuOpen = false;
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
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
            >
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    
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
                on:click|stopPropagation
                class="absolute top-full right-0 mt-2 bg-slate-900 border border-violet-700 rounded-lg shadow-2xl p-4 w-48 z-50"
            >
                <div class="flex flex-col gap-3">
                    {#each tabs as tab}
                        <a
                            href={tab.link}
                            on:click={closeMobileMenu}
                            class="px-4 py-2 text-violet-400 hover:bg-slate-800 rounded-lg transition duration-200 font-medium"
                        >
                            {tab.name}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</header>

<script>
    let services = [
        {
            icon: "fa-solid fa-globe",
            title: "Website Development",
            description: "Custom websites built for conversions",
            benefits: ["Mobile responsive", "Fast loading", "Easy to manage"],
            outcome: "More client inquiries and sales"
        },
        {
            icon: "fa-solid fa-magnifying-glass",
            title: "SEO Optimization",
            description: "Rank on Google for profitable searches",
            benefits: ["Local SEO", "On-page optimization", "Technical SEO"],
            outcome: "Consistent organic leads"
        },
        {
            icon: "fa-solid fa-zap",
            title: "Performance Optimization",
            description: "Lightning-fast website speed",
            benefits: ["Page speed boost", "Better rankings", "Lower bounce rate"],
            outcome: "Higher conversion rates"
        },
        {
            icon: "fa-solid fa-robot",
            title: "Business Automation",
            description: "Automate repetitive business tasks",
            benefits: ["WhatsApp integration", "Lead capture forms", "Email automation"],
            outcome: "Save time and money"
        }
    ];
</script>

<section id="services" class="block md:hidden py-20 lg:py-32 flex flex-col gap-8">
    <div class="flex flex-col gap-1 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl text-violet-400 poppins font-semibold">
            Services I Offer
        </h6>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl gap">
            Everything Your Business Needs to <span class="text-violet-400">Grow Online</span>
        </h2>
        <p class="text-7lg text-gray-300 max-w-2xl mx-auto pt-4">
            From building beautiful websites to ranking on Google — I handle it all so you can focus on running your business.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each services as service}
            <div class="group p-8 rounded-xl border border-violet-700 hover:border-violet-400 transition duration-200 hover:bg-slate-900/50">
                
                <div class="bg-slate-950 grid place-items-center w-4 h-4 rounded-lg mb-6 text-3xl text-violet-400 group-hover:text-violet-300 transition">
                    <i class={service.icon}></i>
                </div>

                <h3 class="text-2xl sm:text-3xl font-semibold mb-2">
                    {service.title}
                </h3>

                <p class="text-gray-300 mb-6">
                    {service.description}
                </p>

                <div class="space-y-2 mb-6">
                    {#each service.benefits as benefit}
                        <div class="flex items-center gap-2 text-sm">
                            <i class="fa-solid fa-check text-violet-400 text-xs"></i>
                            <span>{benefit}</span>
                        </div>
                    {/each}
                </div>

                <div class="pt-4 border-t border-violet-700/30">
                    <p class="text-violet-300 font-semibold text-sm">
                        <i class="fa-solid fa-arrow-right mr-2"></i>
                        {service.outcome}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>

<section id="services" class="hidden md:flex py-20 lg:py-32 flex-col gap-16">
    <div class="flex flex-col gap-4 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl text-violet-400 poppins font-semibold">
            Services I Offer
        </h6>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Everything Your Business Needs to <span class="text-violet-400">Grow Online</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto pt-4">
            From building beautiful websites to ranking on Google — I handle it all so you can focus on running your business.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each services as service}
            <div class="group p-8 rounded-xl border border-violet-700 hover:border-violet-400 transition duration-200 hover:bg-slate-900/50">
                
                <div class="bg-slate-950 grid place-items-center w-16 h-16 rounded-lg mb-6 text-3xl text-violet-400 group-hover:text-violet-300 transition">
                    <i class={service.icon}></i>
                </div>

                <h3 class="text-2xl sm:text-3xl font-semibold mb-2">
                    {service.title}
                </h3>

                <p class="text-gray-300 mb-6">
                    {service.description}
                </p>

                <div class="space-y-2 mb-6">
                    {#each service.benefits as benefit}
                        <div class="flex items-center gap-2 text-sm">
                            <i class="fa-solid fa-check text-violet-400 text-xs"></i>
                            <span>{benefit}</span>
                        </div>
                    {/each}
                </div>

                <div class="pt-4 border-t border-violet-700/30">
                    <p class="text-violet-300 font-semibold text-sm">
                        <i class="fa-solid fa-arrow-right mr-2"></i>
                        {service.outcome}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    :global(.poppins) {
        font-family: 'Poppins', sans-serif;
    }
</style>

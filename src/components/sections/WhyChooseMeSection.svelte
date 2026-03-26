<script>
    let benefits = [
        {
            title: "Conversion-Focused Development",
            description: "Every website I build is designed to convert visitors into customers. I focus on user experience, clear CTAs, and proven conversion tactics."
        },
        {
            title: "SEO-Friendly From Day One",
            description: "Built with proper semantic HTML, structured data, and SEO best practices. Your website will be optimized for search engines from launch."
        },
        {
            title: "Lightning-Fast Performance",
            description: "Slow websites lose customers. I build fast, optimized websites that load in under 2 seconds and rank higher on Google."
        },
        {
            title: "Business Automation",
            description: "Integrate WhatsApp, automate lead capture, and set up email workflows. Let technology work for you while you sleep."
        },
        {
            title: "Scalable & Future-Proof",
            description: "Your website grows with your business. Built on modern technologies that are maintainable, secure, and ready for the future."
        },
        {
            title: "Dedicated Support",
            description: "I'm not just a developer — I'm your technology partner. Get ongoing support, updates, and advice to keep your business competitive."
        }
    ];
</script>

<section id="why-choose-me" class="py-20 lg:py-32 flex flex-col gap-16">
    <!-- Header -->
    <div class="flex flex-col gap-4 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl text-violet-400 poppins font-semibold">
            Why Businesses Choose Me
        </h6>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
            More Than Just a Web <span class="text-violet-400">Developer</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto pt-4">
            I combine technical expertise with business strategy to help you achieve real results.
        </p>
    </div>

    <!-- Benefits Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each benefits as benefit, index}
            <div class="flex flex-col gap-4 p-8 rounded-xl border border-violet-700/50 hover:border-violet-400 transition duration-200 group hover:bg-slate-900/30">
                <!-- Number Badge -->
                <div class="w-12 h-12 rounded-lg bg-violet-600/20 border border-violet-600 flex items-center justify-center">
                    <span class="text-violet-400 font-bold poppins text-lg">0{index + 1}</span>
                </div>

                <!-- Title & Description -->
                <h3 class="text-xl font-semibold group-hover:text-violet-400 transition">
                    {benefit.title}
                </h3>
                <p class="text-gray-300 flex-1">
                    {benefit.description}
                </p>
            </div>
        {/each}
    </div>
</section>

<style>
    :global(.poppins) {
        font-family: 'Poppins', sans-serif;
    }
</style>

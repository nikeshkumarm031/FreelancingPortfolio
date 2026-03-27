<script>
    export let caseStudy;
</script>

<!-- MOBILE VERSION (new) -->
<div class="block md:hidden group relative p-4 rounded-xl border border-violet-700 hover:border-violet-400 transition duration-200 flex flex-col gap-2 hover:bg-slate-900/30">

    {#if caseStudy.badge}
        <div class="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {caseStudy.badge}
        </div>
    {/if}

    <div class="bg-slate-950 grid place-items-center w-14 h-14 rounded-lg text-2xl text-violet-400">
        <i class={caseStudy.icon}></i>
    </div>

    <h3 class="text-2xl sm:text-3xl font-semibold">
        {caseStudy.name}
    </h3>

    <div class="space-y-5 flex-1">
        <div>
            <p class="text-violet-400 font-semibold text-sm mb-2">Problem</p>
            <p class="text-gray-300">{caseStudy.problem}</p>
        </div>

        <div>
            <p class="text-violet-400 font-semibold text-sm mb-2">Solution</p>
            <p class="text-gray-300">{caseStudy.solution}</p>
        </div>

        <div class="bg-violet-900/20 p-4 rounded-lg border border-violet-700/50">
            <p class="text-violet-400 font-semibold text-sm mb-2">Results</p>
            <div class="space-y-2">
                {#each caseStudy.results as result}
                    <p class="text-gray-300 text-sm">
                        <i class="fa-solid fa-arrow-right text-violet-400 mr-2 text-xs"></i>
                        {result}
                    </p>
                {/each}
            </div>
        </div>
    </div>
</div>

<!-- DESKTOP VERSION (old) -->
<div class="hidden md:flex group relative p-8 rounded-xl border border-violet-700 hover:border-violet-400 transition duration-200 flex-col gap-6 hover:bg-slate-900/30">

    {#if caseStudy.badge}
        <div class="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {caseStudy.badge}
        </div>
    {/if}

    <div class="bg-slate-950 grid place-items-center w-14 h-14 rounded-lg text-2xl text-violet-400">
        <i class={caseStudy.icon}></i>
    </div>

    <h3 class="text-2xl sm:text-3xl font-semibold">
        {caseStudy.name}
    </h3>

    <div class="space-y-5 flex-1">
        <div>
            <p class="text-violet-400 font-semibold text-sm mb-2">Problem</p>
            <p class="text-gray-300">{caseStudy.problem}</p>
        </div>

        <div>
            <p class="text-violet-400 font-semibold text-sm mb-2">Solution</p>
            <p class="text-gray-300">{caseStudy.solution}</p>
        </div>

        <div class="bg-violet-900/20 p-4 rounded-lg border border-violet-700/50">
            <p class="text-violet-400 font-semibold text-sm mb-2">Results</p>
            <div class="space-y-2">
                {#each caseStudy.results as result}
                    <p class="text-gray-300 text-sm">
                        <i class="fa-solid fa-arrow-right text-violet-400 mr-2 text-xs"></i>
                        {result}
                    </p>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    :global(.poppins) {
        font-family: 'Poppins', sans-serif;
    }
</style>
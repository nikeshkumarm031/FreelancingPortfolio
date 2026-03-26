<script>
    let showMenu = false;

    const whatsappNumber = '917538886311'; // Replace with actual number
    const messages = [
        {
            text: "I want a website for my business",
            emoji: "🌍"
        },
        {
            text: "I need help with SEO",
            emoji: "📈"
        },
        {
            text: "I'd like a free website audit",
            emoji: "🔍"
        },
        {
            text: "Custom question/Website automation",
            emoji: "💬"
        }
    ];

    function getWhatsAppUrl(message) {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    }

    function handleClick() {
        showMenu = !showMenu;
    }

    function handleOutsideClick(event) {
        if (event.target.closest('button') === null) {
            showMenu = false;
        }
    }
</script>

<svelte:body on:click={handleOutsideClick} />

<div class="fixed bottom-8 right-8 z-40 font-sans">
    <!-- Message Menu (shows when button is clicked) -->
    {#if showMenu}
        <div class="absolute bottom-20 right-0 bg-white text-slate-950 rounded-xl shadow-2xl p-2 w-72 mb-4 animate-in fade-in slide-in-from-bottom-4">
            <p class="px-4 py-3 font-semibold text-center border-b border-gray-200 mb-2">
                How can we help?
            </p>
            <div class="space-y-2">
                {#each messages as msg}
                    <a
                        href={getWhatsAppUrl(msg.text)}
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={() => (showMenu = false)}
                        class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer group text-sm"
                    >
                        <span class="text-xl">{msg.emoji}</span>
                        <span class="font-medium group-hover:text-violet-600">{msg.text}</span>
                    </a>
                {/each}
            </div>
            <p class="text-xs text-gray-500 text-center mt-3 pt-3 border-t border-gray-200">
                Available 24/7 · Response typically within 2 hours
            </p>
        </div>
    {/if}

    <!-- Main WhatsApp Button -->
    <button
        on:click={handleClick}
        class="blueShadow group relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white text-3xl shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-center animate-bounce"
        aria-label="Contact on WhatsApp"
        title="Contact on WhatsApp"
    >
        <i class="fa-brands fa-whatsapp"></i>
        
        <!-- Pulse ring effect -->
        <span class="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-25"></span>
    </button>

    <!-- Tooltip -->
    <div class="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
        Chat with us on WhatsApp
    </div>
</div>

<style>
    :global(.blueShadow) {
        box-shadow: 0px 14px 55px rgba(34, 197, 94, 0.4);
    }

    :global(.group:hover .opacity-25) {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.1;
        }
    }
</style>

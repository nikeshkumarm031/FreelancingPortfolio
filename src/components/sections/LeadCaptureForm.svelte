<script>
    let formData = {
        name: '',
        email: '',
        countryCode: '',
        phone: '',
        businessType: '',
        message: ''
    };
    
    let isLoading = false;
    let submitSuccess = false;
    let submitError = '';
    let isCountryDropdownOpen = false;

    const businessTypes = [
        'Local Service (Plumbing, HVAC, etc)',
        'Cleaning & Maintenance',
        'Salon & Beauty',
        'Restaurant & Food',
        'Real Estate',
        'Professional Services (Lawyer, Doctor, etc)',
        'E-commerce',
        'Other'
    ];

    const countryCodes = [
        { code: '+1', country: 'United States', flag: '🇺🇸', abbr: 'US' },
        { code: '+44', country: 'United Kingdom', flag: '🇬🇧', abbr: 'UK' },
        { code: '+91', country: 'India', flag: '🇮🇳', abbr: 'IN' },
        { code: '+61', country: 'Australia', flag: '🇦🇺', abbr: 'AU' },
        { code: '+1', country: 'Canada', flag: '🇨🇦', abbr: 'CA' },
        { code: '+33', country: 'France', flag: '🇫🇷', abbr: 'FR' },
        { code: '+49', country: 'Germany', flag: '🇩🇪', abbr: 'DE' },
        { code: '+39', country: 'Italy', flag: '🇮🇹', abbr: 'IT' },
        { code: '+34', country: 'Spain', flag: '🇪🇸', abbr: 'ES' },
        { code: '+31', country: 'Netherlands', flag: '🇳🇱', abbr: 'NL' },
        { code: '+46', country: 'Sweden', flag: '🇸🇪', abbr: 'SE' },
        { code: '+47', country: 'Norway', flag: '🇳🇴', abbr: 'NO' },
        { code: '+45', country: 'Denmark', flag: '🇩🇰', abbr: 'DK' },
        { code: '+41', country: 'Switzerland', flag: '🇨🇭', abbr: 'CH' },
        { code: '+43', country: 'Austria', flag: '🇦🇹', abbr: 'AT' },
        { code: '+32', country: 'Belgium', flag: '🇧🇪', abbr: 'BE' },
        { code: '+358', country: 'Finland', flag: '🇫🇮', abbr: 'FI' },
        { code: '+353', country: 'Ireland', flag: '🇮🇪', abbr: 'IE' },
        { code: '+64', country: 'New Zealand', flag: '🇳🇿', abbr: 'NZ' },
        { code: '+65', country: 'Singapore', flag: '🇸🇬', abbr: 'SG' },
        { code: '+60', country: 'Malaysia', flag: '🇲🇾', abbr: 'MY' },
        { code: '+66', country: 'Thailand', flag: '🇹🇭', abbr: 'TH' },
        { code: '+62', country: 'Indonesia', flag: '🇮🇩', abbr: 'ID' },
        { code: '+81', country: 'Japan', flag: '🇯🇵', abbr: 'JP' },
        { code: '+86', country: 'China', flag: '🇨🇳', abbr: 'CN' },
        { code: '+82', country: 'South Korea', flag: '🇰🇷', abbr: 'KR' }
    ];

    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validate country code is selected
        if (!formData.countryCode) {
            submitError = 'Please select a country code';
            return;
        }
        
        isLoading = true;
        submitError = '';
        submitSuccess = false;
        isCountryDropdownOpen = false;

        try {
            // Submit to Google Forms
            const formDataObj = new FormData();
            formDataObj.append('entry.1037434155', formData.name); 
            formDataObj.append('entry.1505312032', formData.email); 
            formDataObj.append('entry.105356985', formData.countryCode + formData.phone); 
            formDataObj.append('entry.408154178', formData.countryCode); 
            formDataObj.append('entry.1470481426', formData.businessType); 
            formDataObj.append('entry.1786187082', formData.message); 

            await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdwABrBE9WBGAabv6oNAZMJqWrj69hANhecNGpKU8SIW0imzA/formResponse', {
                method: 'POST',
                body: formDataObj,
                mode: 'no-cors',
            });
            
            console.log('Form submitted:', formData);
            
            // Reset form
            formData = { name: '', email: '', countryCode: '', phone: '', businessType: '', message: '' };
            submitSuccess = true;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                submitSuccess = false;
            }, 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            submitError = 'Something went wrong. Please try again.';
        } finally {
            isLoading = false;
        }
    }


    function selectCountry(code, abbr) {
        formData.countryCode = code;
        isCountryDropdownOpen = false;
    }

    $: selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
</script>

<svelte:window on:click={() => { isCountryDropdownOpen = false; }} />

<section id="contact" class="py-20 lg:py-32 flex flex-col gap-12">
    <div class="flex flex-col gap-4 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl text-violet-400 poppins font-semibold">
            Get Started
        </h6>
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Let's Build Your Online <span class="text-violet-400">Presence</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto pt-4">
            Share your details below, and I'll analyze your current online presence and suggest improvements.
        </p>
    </div>

    <!-- Form Container -->
    <div class="max-w-2xl mx-auto w-full">
        <div class="p-8 sm:p-12 rounded-xl border border-violet-700 bg-slate-900/50 backdrop-blur">
            {#if submitSuccess}
                <div class="p-4 bg-green-900/20 border border-green-600 rounded-lg text-green-300 mb-6">
                    <i class="fa-solid fa-check mr-2"></i>
                    Thank you! I'll review your business and reach out within 24 hours.
                </div>
            {/if}

            {#if submitError}
                <div class="p-4 bg-red-900/20 border border-red-600 rounded-lg text-red-300 mb-6">
                    <i class="fa-solid fa-exclamation-circle mr-2"></i>
                    {submitError}
                </div>
            {/if}

            <form on:submit={handleSubmit} class="flex flex-col gap-6">
                <!-- Name -->
                <div class="flex flex-col gap-2">
                    <label for="name" class="font-semibold">Your Name *</label>
                    <input
                        type="text"
                        id="name"
                        bind:value={formData.name}
                        required
                        class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-violet-700 text-white placeholder-gray-500 focus:border-violet-400 focus:outline-none transition"
                        placeholder="John Doe"
                    />
                </div>

                <!-- Email -->
                <div class="flex flex-col gap-2">
                    <label for="email" class="font-semibold">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        bind:value={formData.email}
                        required
                        class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-violet-700 text-white placeholder-gray-500 focus:border-violet-400 focus:outline-none transition"
                        placeholder="john@example.com"
                    />
                </div>

                <!-- Mobile Number with Country Code -->
                <div class="flex flex-col gap-2">
                    <label for="phone" class="font-semibold">Phone number *</label>
                    
                    <!-- Country Code Dropdown + Phone Input -->
                    <div class="flex gap-2 items-center">
                        <!-- Country Dropdown Button -->
                        <div class="relative">
                            <button
                                type="button"
                                on:click|stopPropagation={() => isCountryDropdownOpen = !isCountryDropdownOpen}
                                on:blur={() => setTimeout(() => isCountryDropdownOpen = false, 200)}
                                class="px-4 py-3 bg-slate-800 border border-violet-700 text-white rounded-lg hover:border-violet-400 transition whitespace-nowrap flex items-center gap-2"
                            >
                                {#if selectedCountry}
                                    <span>{selectedCountry.country.split(' ').slice(0, 3).join(' ')}</span>
                                    <span class="font-semibold text-violet-300">({selectedCountry.code})</span>
                                {:else}
                                    <span class="text-gray-400">Select country</span>
                                {/if}
                                <i class="fa-solid fa-chevron-down text-xs ml-2"></i>
                            </button>
                            
                            <!-- Autocomplete Dropdown -->
                            {#if isCountryDropdownOpen}
                                <div 
                                    role="listbox"
                                    tabindex="-1"
                                    on:click|stopPropagation
                                    on:keydown|stopPropagation
                                    class="absolute top-full left-0 mt-1 bg-slate-800 border border-violet-700 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto w-full"
                                >
                                    {#each countryCodes as country (country.code + country.abbr)}
                                        <button
                                            type="button"
                                            role="option"
                                            aria-selected={formData.countryCode === country.code}
                                            on:click={() => {
                                                selectCountry(country.code, country.abbr);
                                                isCountryDropdownOpen = false;
                                            }}
                                            class="w-full px-4 py-3 text-left hover:bg-slate-700 transition flex items-center gap-3 border-b border-slate-700 last:border-b-0 {formData.countryCode === country.code ? 'bg-violet-900/40 border-l-2 border-l-violet-400' : ''}"
                                        >
                                            <span class="text-lg" aria-hidden="true">{country.flag}</span>
                                            <div class="flex-1">
                                                <div class="text-white text-sm">{country.country}</div>
                                                <div class="text-gray-400 text-xs">{country.code}</div>
                                            </div>
                                        </button>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                        
                        <!-- Phone Input -->
                        <input
                            type="tel"
                            id="phone"
                            bind:value={formData.phone}
                            required
                            disabled={!selectedCountry}
                            pattern="[0-9\-\s()]*"
                            title="Please enter a valid mobile number"
                            class="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-violet-700 text-white placeholder-gray-500 focus:border-violet-400 focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Add your phone number"
                        />
                    </div>
                    
                    {#if !selectedCountry && formData.phone}
                        <div class="text-red-400 text-xs">
                            Please select a country code first
                        </div>
                    {/if}
                </div>

                <!-- Business Type -->
                <div class="flex flex-col gap-2">
                    <label for="businessType" class="font-semibold">Business Type *</label>
                    <select
                        id="businessType"
                        bind:value={formData.businessType}
                        required
                        class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-violet-700 text-white focus:border-violet-400 focus:outline-none transition"
                    >
                        <option value="">Select your business type...</option>
                        {#each businessTypes as type}
                            <option value={type}>{type}</option>
                        {/each}
                    </select>
                </div>

                <!-- Message -->
                <div class="flex flex-col gap-2">
                    <label for="message" class="font-semibold">Tell Me About Your Business</label>
                    <textarea
                        id="message"
                        bind:value={formData.message}
                        rows="5"
                        class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-violet-700 text-white placeholder-gray-500 focus:border-violet-400 focus:outline-none transition resize-none"
                        placeholder="What are your main business goals? Are you currently online? What challenges are you facing?"
                    ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    disabled={isLoading}
                    class="w-full blueShadow py-4 rounded-lg bg-violet-600 text-white font-semibold text-lg hover:bg-violet-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed poppins"
                >
                    {#if isLoading}
                        <i class="fa-solid fa-spinner animate-spin mr-2"></i>
                        Sending...
                    {:else}
                        <i class="fa-solid fa-paper-plane mr-2"></i>
                        Get Your Free Website Audit
                    {/if}
                </button>

                <p class="text-center text-sm text-gray-400 pt-2">
                    I typically respond within 24 hours on business days.
                </p>
            </form>
        </div>
    </div>

    <!-- Alternative CTA -->
    <div class="text-center pt-8">
        <p class="text-gray-400 mb-4">Prefer to chat directly?</p>
        <a
            href="https://wa.me/917538886311?text=Hello%2C%20I%20want%20to%20discuss%20my%20business%20website"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transition duration-200 font-semibold"
        >
            <i class="fa-brands fa-whatsapp text-xl"></i>
            Message on WhatsApp
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

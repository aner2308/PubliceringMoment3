<script>
export default {
    name: 'NavMenu',
};
</script>

<!-- Header och navigeringsmeny -->
<template>
    <header class="bg-gray-800 text-white p-4">
        <nav class="mt-4">
            <ul
                class="flex justify-center flex-col flex-wrap  gap-3 text-center mb-6 sm:flex-row w-full gap-y-5 lg:w-1/2 mx-auto">
                <li>
                    <!-- Navigeringsknapp med väg till startsidan -->
                    <RouterLink to="/" class="block mx-auto sm:w-28 py-2 text-white bg-gray-700 hover:underline rounded-xl">
                        Startsidan
                    </RouterLink>
                </li>
                <li>
                    <!-- Navigeringsknapp med väg till bergssidan -->
                    <RouterLink to="/data" class="block mx-auto sm:w-28 py-2 text-white bg-gray-700 hover:underline rounded-xl">
                        Bergslistan
                    </RouterLink>
                </li>
                <li>
                    <!-- Navigeringsknapp med väg till Vue.js sidan -->
                    <RouterLink to="/about" class="block mx-auto sm:w-28 py-2 text-white bg-gray-700 hover:underline rounded-xl">
                        Vue.js
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
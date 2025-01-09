<script>
export default {
    props: {
        mountain: Object
    }
}
</script>

<template>
    <!-- Hela articlen repeteras för varje element i APIet -->
    <article class="w-3/4 md:w-1/2">
        <div class="overflow-x-auto">
            <table class="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
                <thead>
                    <tr>
                        <th class="border border-gray-300 px-4 py-2 bg-gray-200 text-center" colspan="2">{{
                            mountain.name }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2 w-1/2">Land</td>
                        <td class="border border-gray-300 px-4 py-2 w-1/2">{{ mountain.country }}</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Höjdmeter</td>
                        <td class="border border-gray-300 px-4 py-2">{{ mountain.height }}</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Avklarat</td>
                        <td class="border border-gray-300 px-4 py-2">{{ mountain.climbed ? "Ja" : "Nej" }}</td>
                    </tr>
                    <tr>
                        <!-- Radera-knapp som emitar start av raderingsfunktion till parent-komponenten -->
                        <td class="border border-gray-300 px-4 py-2 text-center" colspan="2"><button
                                @click="$emit('deleteMountain')" 
                                class="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-700 active:bg-red-300">Radera</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>
</template>

<!-- Klassisk CSS-styling för bara detta elementet -->
<style scoped>
article {
    border: 1px solid gray;
    background-color: white;
    min-height: 100px;
    margin: auto;
    margin-bottom: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
}

table {
    margin: 0 auto;
    text-align: left;
}

th {
    text-align: center;
}
</style>

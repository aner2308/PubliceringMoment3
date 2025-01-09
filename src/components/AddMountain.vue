<script>
export default {
    //Data som matchar API
    data() {
        return {
            name: "",
            country: "",
            height: "",
            climbed: "false"
        };
    },
    emits: ["mountainAdded"],
    methods: {
        //metod för att lägga till nytt berg
        async addMountain() {


            // Kontrollerar att inga fält är tomma
            if (!this.name.trim() || !this.country.trim() || !this.height.trim()) {
                alert("Alla fält måste fyllas i."); // Visar ett meddelande om valideringen misslyckas
                return;
            }

            // Kontrollerar att höjden är ett giltigt positivt nummer
            if (isNaN(this.height) || this.height <= 0) {
                alert("Höjden måste vara ett giltigt positivt nummer.");
                return;
            }

            // Kontrollerar att höjden inte är högre än everest. Då ljuger man!
            if (this.height >8848) {
                alert("Det finns inte så höga berg. Försök inte styla!");
                return;
            }

            // Kontrollerar att climbed är true eller false
            if (!["true", "false"].includes(this.climbed)) {
                alert("Välj ett giltigt alternativ för om berget har bestigits.");
                return;
            }

            //Anger värden till elementet mountainBody
            let mountainBody = {
                name: this.name,
                country: this.country,
                height: parseInt(this.height),      //Konverterar till nummer
                climbed: this.climbed === "true"    //Konverterar till boolean
            }

            //POST-anrop 
            const resp = await fetch("https://moment-2-backend-ramverk-aner2308.onrender.com/mountains", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                //Tar värdena från mountainBody och konverterar till JSON
                body: JSON.stringify(mountainBody)
            });

            //Om allt ser bra ut rensas formuläret och en emit startar ny inladdning av data i parent-elementet.
            if (resp.ok) {
                this.name = "";
                this.country = "";
                this.height = "";
                this.climbed = "false";
                this.$emit("mountainAdded");
            } else {
                //Felmeddelande vid misslyckat anrop
                console.error("Tillägg av berg misslyckades: ", await resp.text());
            }

        }
    }
}
</script>

<template>
    <section class="mb-8 w-5/6 md:w-1/2 mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Lägg till nytt berg</h2>

        <!-- Kör funktionen addMountain() vid klick på submit-knappen -->
        <form @submit.prevent="addMountain()" class="bg-white p-4 border border-gray-300 rounded shadow">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium mb-1">Namn:</label>
                <!-- Alla inputs har two-way-binding med hjälp av v-model -->
                <input v-model="name" type="text" id="name" name="name"
                    class="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div class="mb-4">
                <label for="country" class="block text-sm font-medium mb-1">Land:</label>
                <input v-model="country" type="text" id="country" name="country"
                    class="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div class="mb-4">
                <label for="height" class="block text-sm font-medium mb-1">Höjd i meter:</label>
                <input v-model="height" type="text" id="height" name="height"
                    class="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div class="mb-4">
                <label for="climbed" class="block text-sm font-medium mb-1">Har du bestigit berget?</label>
                <select v-model="climbed" name="climbed" id="climbed"
                    class="w-full px-3 py-2 border border-gray-300 rounded">
                    <option value="true">Ja</option>
                    <option value="false">Nej</option>
                </select>
            </div>
            <div class="mb-4">
                <input type="submit" name="submit" value="Lägg till"
                    class="bg-green-500 text-white px-4 mr-4 mb-4 py-2 rounded hover:bg-green-700 text-sm md:text-base">
                <input type="reset" name="reset" value="Rensa formulär"
                    class="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm md:text-base">
            </div>
        </form>
    </section>
</template>
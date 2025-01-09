<script>
//importerar från komponenterna Mountain och AddMountain
import AddMountain from "@/components/AddMountain.vue";
import Mountain from "../components/Mountain.vue";

export default {
  data() {
    return {
      mountains: []
    }
  },
  components: {
    AddMountain,
    Mountain
  },
  methods: {
    //metod som hämtar data från API och skriver ut dom enligt Mountain.vues mall
    async getMountains() {
      const resp = await fetch("https://moment-2-backend-ramverk-aner2308.onrender.com/mountains");

      const data = await resp.json();

      this.mountains = data;
    },
    //Metod som tar bort berg från API
    //Vid klick på knapp skickas ID för det berget med i funktionen.
    async deleteMountain(id) {
      await fetch("https://moment-2-backend-ramverk-aner2308.onrender.com/mountains/" + id, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      });

      //Laddar in alla berg på nytt
      this.getMountains();
    }
  },
  //Kör automatiskt getMountains() när DOM-strukturen blir synlig.
  mounted() {
    this.getMountains();
  }
}
</script>

<template>
  <div class="pb-20">
    <h1 class="text-3xl font-100 text-center p-6 text-gray-800">Bergslistan</h1>
    <!-- Hämtar in min component AddMountain (Formulär för att lägga till nya berg) -->
    <AddMountain @mountainAdded="getMountains()" />
    <h2 class="py-4 w-3/4 md:w-1/2 mx-auto text-2xl font-semibold">Sparade berg</h2>
    <!-- Hämtar in min component Mountain (Alla berg från API utskrivna i tabellform) -->
    <Mountain @deleteMountain="deleteMountain(mountain._id)" v-for="mountain in mountains" :mountain="mountain"
      key="mountain.id" />
  </div>
</template>
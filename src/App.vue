<script setup>
//Importerar RouterView så innehållet i RouterView-elementet kan ändras beroende på vald rout.
import { RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- Styling som gör att footern kommer att hamna längst ner på sidan -->
  <div class="flex flex-col min-h-screen">

    <!-- Importerar komponenten NavMenu -->
    <NavMenu />
    <main class="flex-grow">

      <!-- RouterView byter ut innehållet beroende på vald rout (undersida i menyn) -->
      <RouterView />
    </main>

    <!-- Importerar komponenten Footer och lägger den underst av innehållet -->
  <Footer />
  </div>
</template>
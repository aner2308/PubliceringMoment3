<!-- Standard html-sida med Tailwind och CSS styling -->
<template>
  <!-- Banner -->
  <div class="banner">
    <h1 class="text-xl font-bold text-white text-center bg-gray-300 bg-opacity-70 p-2 rounded-xl">UT PÅ TUR, ALDRIG SUR
    </h1>
  </div>

  <article class="text max-w-full">
    <h2 class="text-xl font-100 text-center p-6 text-gray-800">EN BERGSSÄKER HOBBY</h2>
    <p class="px-6 md:text-xl pb-10">Ett av mina fritidsintressen är att klättra i bergen. Det började med bouldering
      inomhus, och nyfikenheten tog
      mig ut i de alpina miljöerna. Jag har inget utsatt mål med min hobby utan det är endast för välmåendet. <br><br>
      När det i uppgiften stod att man skulle skapa en databas som länkade till ett av ens fritidsintressen kände jag
      att berg var et bra tema. Det finns variabler som skulle passa bra till API-parametrarna. Med namn, land,
      höjdmetrar
      och en boolean som berättar om man bestigit berget eller inte har alla specifierade krav på API-et uppfyllts.
      <br><br>
      Det är också ett API som kan vara kul att jobba vidare med i framtiden. Då kan man lägga in berg som man vill
      göra, och checka av dom när dom är gjorda. Man kan då också lägga till ett timestamp för att se datum för
      toppdagen.
    </p>
  </article>

  <!-- Responsivt grid med bilder -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
    <img src="../assets/images/bild1.jpg" alt="Bild på person som spejar ut över berg"
      class="w-full h-80 object-cover shadow-md">
    <img src="../assets/images/bild2.jpg" alt="Anton klättrar mont blanc i mörkret."
      class="w-full h-80 object-cover shadow-md">
  </div>

</template>

<!-- Styling av banner och textruta -->
<style scoped>
.banner {
  background-image: url("../assets/images/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  width: 80vw;
  background-color: white;
  min-height: 500px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}
</style>

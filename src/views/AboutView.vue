<!-- Vanlig html-sida med lite styling i Tailwind och css -->
<template>
  <div>
    <img src="../assets/images/logo.svg" alt="Vue.js Logotyp"
      class="w-1/2 sm:w-1/3 md:1/4 my-20 mx-auto">
    <article class="text max-w-full">
      <h1 class="text-3xl font-100 text-center p-6 text-gray-800">Vue.js</h1>
      <p class="px-6 md:text-xl pb-10">Vue.js var helt nytt för mig innan dennna uppgiften. Förväntningarna var att det
        skulle vara ganska likt
        Angulars
        modulära struktur, men jag hade egentligen ingen aning. Jag tittade på föreläsningarna, läste igenom alla
        läshänvisningar och tittade också på alla inspelade förevisningar som låg där. <br><br>
        Efter att ha suttit mig in lite mer i Vue.js så var det dags att testa på det praktiskt. Steg et var att
        installera det och försöka publicera ett test på Netlify. Det fungerade på första försöket vilket i stort sett
        aldrig har hänt! Jag hade några problem med att cache-minnet inte rensades och jag fick felmeddelanden. Som tur
        var gick det snabbt att lösa. <br><br>
        Själva kodningen var rolig. Det påminde om Angular och jag kunde förstå strukturen ganska snabbt. Det känns som
        att man enkelt kan hitta den koden som man letar efter, vilket är ett stort plus. Ett annat stort plus är att
        man
        kodar HTML, CSS och JS i samma dokument. Jag tycker att det blir mycket lättare att förstå vad som hör till vad.
        <br><br>
        Mitt slutbetyg på Vue.js blir ganska högt. Jag tror att genom mängdträning så kan det vara ett verktyg som
        underlättar arbetet med kod och kodstruktur.
      </p>
    </article>
  </div>
</template>

<style>
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

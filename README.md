# Moment 3 - Frontend-ramverk
*Anton Eriksson, aner2308*

Detta är ett Github repo skapat för moment 3 i kursen *DT193G - Fullstacksutveckling med ramverk*. Projektet är utformat för att uppfylla alla uppgiftens krav och samtidigt vara en snygg och välfungerande webbapplikation.

Repositoriet innehåller ett projekt skapat med Vue och som använder Vite som byggverktyg. Projektet är en frontend-applikation som hämtar data från ett API som skapades i kursens förra moment. På webbapplikationen kan en användare med hjälp av ett formulär lägga till nya poster till APIet. Det finns också funktionalitet på webbapplikationen för att radera poster från APIet.

## Installation
1. Klona repositoriet: 
<git clone *repositoriets-url*>

2. Navigera till rätt katalog:
<cd vue-project>

3. Installera dependencies:
<npm install>

## Dependencies
- vue
- vue-router
- vite
- @vitejs/plugin-vue
- vite-plugin-vue-devtools

## Struktur
Projektet följer den typiska strukturen för Vue. Det är uppdelat i **Assets**, **Components** och **Views**. I mappen **Assets** finns också en undermapp (*Images*) för bilder.

Jag valde att skapa **Components** för min header (med navigation), mina tabeller som visar data från API, min footer och mitt formulär som skickar ny data till API.

App.vue används för att visa allt innehåll på SPA. Den innehåller min header- component högst upp, följt av en **routerLink** som kan byta ut innehåll, och en footer längst ned. Det finns tre olika **Views** med innehåll som byts ut i min **routerLink** representerar undersidorna i min SPA. Förstasidan *HomeView.vue* innehåller en banner och lite text om min hobby - bergsbestigning. Undersidan *DataView.vue* innehåller mina components för att läsa in, radera och lägga till ny data till API. Den sista sidan heter *AboutView* och innehåller en kort text om mina tankar kring Vue.js.

## Styling
Styling av webbapplikationen har gjorts med en kombination av vanlig CSS, scopad CSS och Tailwind. Jag valde att försöka mig på Tailwind igen för att se fördelar och nackdelar i ett större projekt än de jag tidigare gjort.

Tailwind inkluderades som CDN i filen **index.html**.  
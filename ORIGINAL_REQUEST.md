# Original User Request

## Initial Request — 2026-06-08T15:20:51Z

# Teamwork Project Prompt

> Status: Launched
> Goal: Eseguire un audit completo e implementare le correzioni necessarie per rendere il progetto Next.js "Wang" perfettamente "mobile-first" e responsive, garantendo un'esperienza utente eccellente su smartphone senza intaccare il design desktop.

Working directory: `c:\Users\mario\Progetti Antigravity\Wang`
Integrity mode: development

## Requirements

### R1. Ottimizzazione Layout Mobile
Assicurarsi che la Home page, la pagina Materiali e le Schede Prodotto (`ProductConfigurator`) siano perfettamente fruibili su schermi piccoli (es. smartphone). Le griglie devono collassare in singole colonne, i testi devono avere dimensioni leggibili su mobile e i margini/padding devono essere ottimizzati per evitare contenuti fuori schermo.

### R2. Navigazione e Componenti Interattivi
Verificare e correggere la barra di navigazione (`Navigation`) e il `Footer` in modo che siano compatti e facilmente utilizzabili con il tocco (tappable) su mobile. **Requisito specifico: quando l'utente clicca su un link all'interno del menu mobile (hamburger menu), il menu deve chiudersi automaticamente con una fluida animazione a scorrimento verso l'alto (slide-up).** I pulsanti del configuratore prodotto e i menu a tendina devono essere "touch-friendly" (es. larghezza intera su mobile).

### R3. Preservare l'Estetica Desktop
Qualsiasi modifica per il mobile deve essere applicata rigorosamente tramite i breakpoint di Tailwind (es. `md:`, `lg:`) per garantire che l'elegante "luxury dark theme" e le proporzioni attuali del layout desktop rimangano assolutamente invariate.

## Acceptance Criteria

### UI / UX Verification
- [ ] Il progetto Next.js si compila correttamente senza errori (`npm run build`).
- [ ] Tutte le griglie in `page.tsx`, `materiali/page.tsx` e `dispositivi/[slug]/page.tsx` collassano correttamente in una singola colonna sugli schermi mobili (utilizzo corretto delle classi responsive di Tailwind).
- [ ] Cliccando su un link di navigazione nel menu mobile, il menu scompare immediatamente animandosi verso l'alto (slide-up).
- [ ] Il componente `ProductConfigurator` mostra pulsanti e menu a tendina a larghezza intera (full-width) sui dispositivi mobili per facilitare il tocco.
- [ ] Nessuna regressione visiva sul layout desktop (le classi modificate per il mobile non sovrascrivono il comportamento sui monitor grandi).

## Follow-up - 2026-06-08T18:59:49Z

# Teamwork Project Prompt

> Status: Launched
> Goal: Sostituire gli attuali disegni 2D (tratti da pagine di libro) dei 4 dispositivi con foto realistiche di prodotti simili trovate sul web, da usare come placeholder per il cliente.

Working directory: `c:\Users\mario\Progetti Antigravity\Wang`
Integrity mode: development

## Requirements

### R1. Ricerca Immagini (Web Research)
Utilizzare gli strumenti di ricerca (es. invoke_subagent con typeName "browser") per trovare e scaricare dal web foto realistiche, di buona qualità e in armonia con lo stile del sito (sfondo scuro/oro), per i seguenti 4 dispositivi di geometria sacra in metallo o legno:
- Genesa Crystal
- Pentasfera
- IperGenesa
- Unisfera
ATTENZIONE: Non generare le immagini con l'AI. Usa il browser per scaricare foto reali (con curl, wget o script python/js) prese dal web di oggetti simili.

### R2. Sostituzione Asset
Scaricare le immagini selezionate e inserirle nella cartella `public` del progetto, sovrascrivendo gli asset attuali (`Genesa.png`, `Pentasfera.png`, ecc.) oppure creando nuovi file.

### R3. Aggiornamento Codice
Assicurarsi che il file `src/data/products.json` e le pagine puntino correttamente alle nuove immagini. Se le immagini sono JPG, aggiornare i riferimenti di conseguenza nel codice.

## Acceptance Criteria

### Verification
- [ ] Sono presenti 4 nuove immagini realistiche (foto dal web) nella cartella `public` per i 4 dispositivi.
- [ ] I percorsi delle immagini nel codice (es. `products.json`) sono stati aggiornati.
- [ ] Il server `npm run build` o `npm run dev` visualizza correttamente le nuove foto al posto dei disegni 2D nelle pagine dei prodotti.

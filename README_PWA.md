
# PWA survey

Questa versione rende il survey installabile come PWA.

File aggiunti:
- `manifest.webmanifest`
- `sw.js`
- `assets/icon-192.png`
- `assets/icon-512.png`

Il manifest ha:

```json
"start_url": "survey.html",
"display": "standalone"
```

Nota importante:
- la pagina può essere installata come app;
- la shell dell'app viene tenuta in cache;
- l'inserimento dei punti su Supabase richiede connessione;
- non è ancora presente una vera coda offline per salvare e reinviare i punti quando torna internet.

Per installare:
- da Chrome/Edge desktop: icona installa nella barra indirizzi;
- da Android Chrome: menu ⋮ → Aggiungi a schermata Home / Installa app;
- da iPhone Safari: Condividi → Aggiungi alla schermata Home.


## Coda offline

Il survey ora include una coda locale basata su `localStorage`.

Funzionamento:
- se sei offline, il punto viene salvato in coda;
- se Supabase non risponde, il punto viene salvato in coda;
- quando torna la connessione, l'app prova a inviare automaticamente;
- puoi usare il pulsante `Forza invio coda`;
- la coda contiene solo dati testuali/coordinate/percorso GLB, non file allegati.

Limite:
- `localStorage` non è adatto a grandi allegati o file 3D;
- per immagini/file serve Supabase Storage o una gestione separata.

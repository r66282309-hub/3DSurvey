# WebGIS punti 3D - configurato

Questa versione ha già inseriti:

- Supabase URL: `https://uvkboeiognxsmkufmzgs.supabase.co`
- Tabella prevista: `punti_3d`
- Chiave: anon public key

## Uso immediato

Apri `index.html` oppure pubblica tutto su GitHub Pages.

La mappa:
- usa Leaflet;
- usa base Esri;
- legge i punti da Supabase;
- mostra punti circolari arancioni;
- apre popup con informazioni;
- include il tasto `Visualizza punto AR` se il campo `modello_glb` è compilato.

## Campi tabella richiesti

La mappa si aspetta questi campi:

```sql
id
nome
descrizione
lat
lon
modello_glb
foto_url
data_rilievo
note
created_at
```

## Percorso modelli GLB

Se carichi un file nel repository:

```text
models/aula_grande.glb
```

nella tabella Supabase, campo `modello_glb`, devi scrivere:

```text
models/aula_grande.glb
```

## Pubblicazione su GitHub Pages

1. Carica questi file nel repository.
2. Vai su Settings → Pages.
3. Source: Deploy from branch.
4. Branch: main, cartella root.
5. Apri l'indirizzo GitHub Pages.

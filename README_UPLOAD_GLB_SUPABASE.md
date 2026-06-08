# Upload GLB su Supabase Storage

Questa versione del survey permette di caricare direttamente file `.glb` su Supabase Storage.

## Passaggi in Supabase

1. Vai su `Storage`.
2. Crea un nuovo bucket:
   - nome: `modelli-3d`
   - `Public bucket`: ON
3. Vai in `SQL Editor`.
4. Esegui il file `supabase_storage_setup.sql`.

## Funzionamento

Se selezioni un file `.glb`, il survey:

1. carica il file nel bucket `modelli-3d`;
2. ottiene l'URL pubblico;
3. salva quell'URL nel campo `modello_glb` della tabella `punti_3d`.

Il WebGIS usa direttamente quell'URL nel pulsante `Visualizza punto AR`.

## Offline

La coda offline salva solo dati testuali e coordinate.

I file GLB non vengono messi in coda, perché sono troppo grandi per `localStorage`.
Per caricare il GLB serve connessione attiva.

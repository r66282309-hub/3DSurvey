Versione con due foto.

Non serve un altro bucket: usa lo stesso bucket pubblico modelli-3d, con cartelle interne:
- modelli/
- foto/

Prima di usare il survey, esegui in Supabase SQL Editor:
update_foto_columns.sql

File principali da sostituire:
- index.html
- survey.html
- viewer.html
- config.js
- sw.js
- assets/style.css
- manifest.webmanifest

Le foto vengono ridimensionate lato browser:
- orizzontale massimo 1600x1200
- verticale massimo 1200x1600
e salvate come JPG.

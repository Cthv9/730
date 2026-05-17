# 730 Congiunto – Raccolta Documenti

App web PWA per raccogliere e organizzare i documenti necessari alla compilazione del **Modello 730 (ultimo update per redditi 2025)**, basata sull'elenco ufficiale CAF ACLI.

By DF

---

## Funzionalità

- **10 sezioni** che coprono tutti i documenti richiesti dal PDF CAF ACLI 730/2026:
  1. Dati personali
  2. Dati generali
  3. Terreni e fabbricati
  4. Redditi (CU 2026)
  5. Altri redditi
  6. Oneri e spese detraibili (mutui, assicurazioni, bonus edilizi, superbonus, erogazioni liberali, ecc.)
  7. Oneri e spese deducibili (contributi INPS, colf, pensione complementare, ecc.)
  8. Acconti versati (F24)
  9. Redditi soggetti a tassazione speciale (plusvalenze, criptovalute, investimenti esteri)
  10. Categorie speciali (Quadro K – amministratori di condominio)
- Barra di avanzamento e contatore file caricati
- Generazione e download di archivi ZIP per sezione (split automatico oltre 5 MB)
- Installabile come PWA (Progressive Web App) con supporto offline

## Privacy e sicurezza

- **Tutti i file restano nel browser**: nessun dato viene mai inviato a server esterni.
- **Zero dipendenze esterne a runtime**: JSZip, FileSaver.js e il font Poppins sono inclusi nel repository (`libs/`, `fonts/`). L'app non effettua alcuna richiesta di rete dopo il caricamento iniziale.
- **Content Security Policy** attiva: `connect-src 'none'` blocca a livello browser qualsiasi tentativo di trasmissione dati verso l'esterno.
- **Validazione file** lato client: estensioni consentite, nome file ≤ 100 caratteri, dimensione singolo file ≤ 5 MB.

## Struttura

```
730/
├── index.html          # App principale
├── manifest.json       # PWA manifest
├── service-worker.js   # Cache offline (v2)
├── libs/
│   ├── jszip.min.js    # JSZip 3.10.0 (self-hosted)
│   └── FileSaver.min.js # FileSaver.js 2.0.5 (self-hosted)
├── fonts/
│   └── poppins-latin-*.woff2/woff  # Font Poppins 400/600 (self-hosted)
└── icons/
    ├── 730_icon.ico
    ├── icon-192x192.png
    └── icon-512x512.png
```

## Utilizzo

Aprire `index.html` in un browser moderno oppure deployare la cartella su qualsiasi hosting statico. Non richiede backend.

Per aggiornare le librerie self-hosted:

```bash
npm install jszip@3.10.0 file-saver@2.0.5 @fontsource/poppins
cp node_modules/jszip/dist/jszip.min.js libs/
cp node_modules/file-saver/dist/FileSaver.min.js libs/
cp node_modules/@fontsource/poppins/files/poppins-latin-{400,600}-normal.woff* fonts/
```

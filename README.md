# Stateless web prototype (HTML/JS only)

Doel: documenten aanmaken zonder backend/DB. Vul velden in, download JSON om later opnieuw te gebruiken. Alles werkt op GitHub Pages (pure HTML/CSS/JS).

Bestanden:
- `index.html` - gecombineerde variant (alle types).
- `s627.html`, `s460.html`, `s505.html`, `verdeler.html` - losse pagina's per documenttype.
- `styles.css` - lichte styling.
- `script.js` - logica: payload opbouwen, dagen clampen, JSON export/import.

Wat het kan:
- Documenttype kiezen (index) of vaste pagina per type (s627/i427/s460/s505/verdeler).
- Algemene velden: documentNaam, opgemaaktDoor, hoeveelDagen, overdracht, datums (start/eind/aanvang).
- Dynamische inputlijst (name/value/align) voor s627/s505; key/value voor verdeler/s460; s627-specifieke velden aanwezig op s627-pagina.
- JSON export (download) en import (bestand uploaden) om het formulier te vullen.

## Korte how-to
1) Open `index.html` in je browser (of de live link). Kies daar het documenttype (S627, S460 of Verdeler) of ga rechtstreeks naar de aparte pagina.
2) Vul de velden in. Waar “Voeg meer toe” staat kun je extra regels maken (S627/S505: dynamische inputs; S460: meldingsregels; Verdeler: key/value lijsten).
3) Klik op `Gegevens downloaden` om een JSON-bestand te bewaren. Dat bestand kun je later via `Gegevens laden` opnieuw inlezen; het vult dan alle velden automatisch.
4) Klik op `Download PDF` / `Genereer PDF`. Je krijgt een klein venster om het aantal dagen, variant (bv. S627 of Verdeler/Overdracht) en eventuele opties (overdracht, wissel verzender-ontvanger) te kiezen. Na bevestigen wordt de PDF gedownload.
5) Optioneel: gebruik de licht/donker schakelaar rechtsboven of in de mobiele balk om de weergave aan te passen.

Uit te breiden:
- PDF-generatie in de browser (bv. pdf-lib of jsPDF) door `buildPayload()` te hergebruiken.
- Validatie/schemas strikter maken.

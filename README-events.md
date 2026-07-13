# Gérer les événements (page « Events ») via Google Sheets

La page **Events** (`festivals.html`) peut afficher les événements **directement depuis un tableur Google Sheets**.
Le client ajoute une ligne → l'événement apparaît sur le site (trié par date, les passés se replient tout seuls).
**Aucune modification du code n'est nécessaire au quotidien.**

> Tant que l'URL du tableur n'est pas renseignée (voir étape 3), la page affiche les événements
> écrits « en dur » dans `festivals.html` (repli automatique). Pareil si le tableur est momentanément indisponible.

---

## 1) Créer le tableur

Dans Google Sheets, crée une feuille avec **cette première ligne d'en-têtes** (l'ordre des colonnes est libre) :

| Date | Titre | Ville |
|------|-------|-------|
| 24-26.07.2026 | Privates Event in Peine | Peine |
| 12.09.2026 | Lecker Sommerfest, Wolfenbüttel | Wolfenbüttel |
| 02.10.2026 | Hochzeit in Braunschweig | Braunschweig |
| 12.12.2026 | Hochzeit in Wolfsburg | Wolfsburg |
| 23.07.2027 | Hochzeit in Dänemark | Dänemark |

**Règles :**
- **Date** : format `Jour.Mois.Année`, ex. `12.09.2026`.
  Pour une plage, écris le jour ainsi : `24-26.07.2026` (affichera « 24-26 », triera à partir du 24).
- **Titre** : le nom de l'événement (les virgules sont autorisées).
- **Ville** : facultatif (s'affiche en petit sous le titre).
- Une ligne = un événement. Pas besoin de trier : le site s'en charge.

> Les colonnes sont reconnues par leur nom : `Date`/`Datum`, `Titre`/`Titel`/`Title`, `Ville`/`Stadt`/`City`.

## 2) Publier le tableur en CSV

Dans Google Sheets :
1. **Fichier → Partager → Publier sur le web**
2. Onglet **Lien**, choisis la feuille, format **Valeurs séparées par des virgules (.csv)**
3. Clique **Publier**, puis **copie l'URL** (elle ressemble à
   `https://docs.google.com/spreadsheets/d/e/2PACX-xxxxx/pub?output=csv`).

## 3) Brancher l'URL dans le site (une seule fois)

Ouvre `festivals.html`, cherche la ligne :

```js
var SHEET_CSV_URL = "";
```

et colle l'URL entre les guillemets :

```js
var SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-xxxxx/pub?output=csv";
```

Enregistre et re-téléverse `festivals.html` sur Hostinger. **C'est tout** — ensuite, seul le tableur bouge.

---

## Bon à savoir
- Dès que l'URL est branchée, **seuls les événements du tableur** s'affichent (ceux « en dur » dans la page sont remplacés). Mets donc dans le tableur tout ce que tu veux garder.
- Un changement dans le tableur est visible **au rechargement de la page** (Google met le CSV en cache quelques minutes).
- **Langues** : le titre s'affiche tel qu'écrit dans le tableur (une seule langue). Le mois (Septembre / September…) s'adapte automatiquement à la langue du visiteur.
- Le tableur doit rester **« publié sur le web »** (lecture publique). Ne mets pas d'infos sensibles dedans.

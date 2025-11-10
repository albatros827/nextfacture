# NextFacture

**NextFacture** est une application web open source (Next.js) pour **visualiser, comprendre et tester** la facturation électronique en France.

Le projet s’appuie sur :
- le **modèle sémantique EN 16931** et ses déclinaisons françaises,
- conforme à la norme AFNOR [XP-Z12-012](https://www.boutique.afnor.org/fr-fr/norme/xp-z12012/formats-et-profils-des-messages-factures-et-statuts-de-cycle-de-vie-constit/fa213344/448043),

et permet de générer des factures de test dans les **syntaxes** reconnues par l’écosystème français :
**UBL**, **CII**, **Factur-X**.

Objectif : offrir un **bac à sable pédagogique** pour les équipes métiers, techniques et éditeurs, sans remplacer un outil de facturation ou une PDP.

> NextFacture n’est pas une PDP, ni un validateur officiel.  
> C’est un outil d’aide à la compréhension, au prototypage et à la démonstration.


---

## Ce que fait NextFacture

- Afficher une facture selon le **profil EN 16931 (France)**.
- Expliquer champ par champ :
    - libellé métier,
    - identifiant EN 16931 (BT/BG),
    - caractère obligatoire / optionnel,
    - Règles métiers et techniques
    - correspondance UBL et UN/CEFACT.
- Générer des **factures de test** dans les syntaxes acceptées par la réforme :
    - UBL 2.1  
    - UN/CEFACT CII D22B,
    - Et le format Factur-X

---

## Roadmap

### Socle obligatoire (MVP)

- [ ] Formulaire facture **profil EN 16931 (champs obligatoires)**.
- [ ] Fiche d’info par champ (description, règles principales, mapping).
- [ ] Export facture de test en **UBL**.
- [ ] Export facture de test en **CII**.
- [ ] Export facture de test en **Factur-X**.

### Socle facultatif

- [ ] Ajout des champs optionnels EN 16931.
- [ ] Affichage visuel des différences "minimum" / "complet".

### Lecture de factures

- [ ] Importer une facture UBL et l’afficher dans le formulaire.
- [ ] Importer une facture CII.
- [ ] Importer une facture Factur-X.

### Socle étendu (plus tard)

- [ ] Support du profil **Extended / CTC-FR**.
- [ ] Cas avancés (acomptes, auto-facturation, etc.).

---

## Public visé

- Éditeurs et intégrateurs.
- Équipes finance / produit.
- Toute personne qui veut **voir** la réforme plutôt que seulement la lire.

## Licence
- Le code de NextFacture est publié sous licence **Apache 2.0**.
---
## Contact

E-mail: next-facture@outlook.com
# Famille Franssu

Appli web mobile de généalogie de la famille Douville de Franssu (Fransu, Somme) et de la lignée Touchet / Mac Mahon.

- **Arbre** : arbre interactif, branches dépliables, zoom, ta lignée surlignée.
- **Fiche** : une personne à la fois, avec parents, conjoint, enfants, frères et sœurs.
- **Chercher** : recherche par prénom, nom ou année, avec filtres.
- **Famille** : tes chiffres (cousins germains…) et tes deux lignées.
- **Histoire** : le château, les grands récits, les armoiries.

Au premier lancement, l'appli demande « Qui es-tu ? » et affiche ensuite pour chaque personne le lien de parenté avec toi.

## Lancer

Aucune dépendance. Ouvre `index.html` dans un navigateur.

## Modifier

Ne modifie pas `index.html` à la main : il est généré.

```
src/app.html     interface (HTML, CSS, onglets, arbre, fiches)
src/core.js      ancêtres et côté Mac Mahon (tableaux H, HM, UPD), calcul des liens de parenté
src/fiche.js     texte automatique des fiches
data/famille.json  descendance de Michel et Agnès (tableau familial)
build.py         assemble le tout dans index.html
```

Puis : `python3 build.py`

## Publier

GitHub Pages : Settings > Pages > Deploy from branch `main`, dossier `/`.
Attention : la page serait alors publique (voir plus bas).

## Données personnelles

Le dépôt contient les noms et dates de naissance de personnes vivantes, dont des enfants. Garde le dépôt **privé**. Aucune adresse, aucun téléphone ni aucun e-mail n'est repris des fichiers sources.

## Sources

Blog Remus80 (« Fransu »), tableau familial Généalogie Franssu, liste de filiations Douville de Franssu, Inventaire général Hauts-de-France (château de Fransu), « Fransu, de l'usoir à l'église », Rapport d'ensemble Mauritanie 1906 (Gallica), Wikipédia (Famille de Mac Mahon, Emmanuel de Mac Mahon), Maitron des fusillés (Antoine de Touchet), Geneanet, musée de la Résistance en ligne.

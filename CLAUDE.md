# Contexte pour Claude Code

Projet d'Augustin Douville de Franssu : appli web de généalogie familiale, en français, mobile d'abord.

## Règles
- Interface et textes en français, ton jeune et simple, tutoiement.
- Jamais de tiret cadratin (—) dans les textes.
- Ne jamais ajouter d'adresse, de téléphone ou d'e-mail (le tableau source en contient : ne pas les reprendre).
- Un lien de parenté non confirmé par une source se marque `u:1` (trait pointillé, badge « Lien à vérifier »).
- Une génération inconnue se marque `ph:1` (case vide en pointillés).
- Ne pas modifier `index.html` à la main : éditer `src/` ou `data/` puis lancer `python3 build.py`.

## Modèle de données (src/core.js)
Chaque personne : `{id, first, sur, sex:'m'|'f'|'u', b, d, par, par2?, sp:[{name,b,d,m,role,bio,pid?}], role, bio, u, ph, nk}`.
- `par` : parent par lequel la personne est rangée dans l'arbre. `par2` : second parent présent dans l'arbre (seuls les enfants de Xavier et Chantal en ont un).
- `kidsWith` : nom de l'autre parent quand il n'est plus conjoint (fiche : « 3 enfants avec X »).
- `sp[].cp:1` : en couple, non mariés (affiche « compagne / compagnon » au lieu de « épouse / mari »).
- `sp[].pid` : le conjoint existe aussi comme personne (Chantal de Touchet, id `cdt`).
- `H` : ancêtres Wignier et Douville jusqu'à Armand (1856-1904). `HM` : lignée Mac Mahon et Touchet. `data/famille.json` : descendance de Michel (id `p1`, 1891-1958) et Agnès.
- `UPD` : biographies enrichies par recherche web, appliquées après construction.
- Deux arbres : racine `jaw` (Jacques-Adrien Wignier) et racine `jbm` (Jean-Baptiste de Mac Mahon). Ils se rejoignent par Chantal (`cdt`), épouse de Xavier (`p197`).

## Points ouverts
- Nicolas Alire Douville : fils d'Adrienne Blondin de Bazonville ? Sa femme s'appelle aussi Adrienne Blondin. À confirmer.
- Trois des six enfants d'Antoine de Touchet et Brigitte de Mac Mahon sont inconnus.
- Maurice, 5e duc de Magenta, placé comme fils de Philippe : à vérifier.
- Baudouin (fils de Philippe) : décès 1991 ou 1992 selon les sources.
- Marie (1977) et Olivier (1981-2000) : parents inconnus, non placés.
- Idées : photos dans les fiches, bouton « Proposer une correction », partage d'une fiche.

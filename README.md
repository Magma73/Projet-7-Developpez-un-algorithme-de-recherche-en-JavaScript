# Développer un algorithme de recherche en JavaScript
## Contexte du projet
Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g.
Pour faire la différence avec d'autres sites, l'entreprise veut miser sur la fluidité du moteur de recherche.

## Mission du projet
La mission était d'implémenter la fonctionnalité de recherche :
* HTML et CSS : implémenter la maquette (avec ou sans bootstrap)
* Javascript : réaliser 2 implémentations différentes pour comparer les performances et choisir la meilleure
* Documentation : documenter le travail pour que l'équipe Back-end prenne le relai

## Technologies utilisées
* VS Code : HTML5, CSS3, et Javascript et préprocesseur SASS
* Framework : Bootstrap
* Github et github pages : versionner le code et avoir une version en ligne
* Prettier : mettre en forme le code
* ESLint : garantir que le code est robuste
* [Regex101.com](https://regex101.com/) : générer des regex
* [JSBench.me](https://jsbench.me/) : comparer la performance des algorithmes

## Maquettes à respecter
La base des maquettes a été créée via [Figma](https://www.figma.com/file/xqeE1ZKlHUWi2Efo8r73NK/UI-Design-Les-Petits-Plats-FR?node-id=0%3A1&t=OasLVy1jb9GReDDU-0).

### Page avec recherche simple
![Maquette Les Petits Plats - Recherche simple](/public/assets/maquettes/Les-petits-plats-Recherche-simple.png)

### Page avec recherche avancée
![Maquette Les Petits Plats - Recherche avancée](/public/assets/maquettes/Les-petits-plats-Recherche-avancee.png)

### Page avec recherche simple et recherche avancée
![Maquette Les Petits Plats - Recherche simple et recherche avancée](/public/assets/maquettes/Les-petits-plats-Recherche-simple-Recherche-avancee.png)

### Page avec recherche par tag
![Maquette Les Petits Plats - Recherche par tag](/public/assets/maquettes/Les-petits-plats-Recherche-tag.png)


## Notes et contraintes du projet

**Polices et icône :**

* Polices :
    * Pour le logo : [DM Sans ](https://fonts.google.com/specimen/DM+Sans?query=dm+sans)
    * Pour la recherche, les filtres, le titre, les ingrédients et le temps : [Lato](https://fonts.google.com/specimen/Lato)
    * Pour la description des recettes : [Roboto](https://fonts.google.com/specimen/Roboto)

* Icône : [FontAwesome](https://fontawesome.com/)

**Couleurs :**

* Rouge : #ED6454
* Bleu : #3282F7
* Vert : #68D9A4


**Contraintes :**

* Techniques/langages
    * Implémenter 2 versions de la fonctionnalité
    * Utiliser 2 branches différentes sur git
    * Documenter le travail pour faciliter le travail de l’équipe back-end
    * Choisir la meilleure version entre les 2 algorithmes
    * Frameworks autorisés : oui pour le css

* Approche et maquettes
    * Approche : desktop first
    * Maquette desktop : oui
    * Maquette tablette : à improviser
    * Maquette mobile : à improviser

* Validateurs
    * Validation W3C HTML et CSS : à passer
    * Pas d'erreur dans la console

## Fiche d'investigation
La fiche d'investigation de la fonctionnalité de recherche simple a permis de planifier 2 versions de la fonctionnalité :
* Un algorithme 1 : une version en programmation fonctionnelle avec les méthodes de l'objet array (foreach, filter, map, reduce)
* Un algorithme 2 : une version utilisant les boucles natives (while, for...)

Les résultats des tests réalisés via JSBench.me donnent l'algorithme 2 comme le plus performant.

![Fiche d'investigation](/Magnin_Marine_1_fiche_investigation_022023.pdf)


## Tester le projet

Pour tester simplement et rapidement le projet, vous pouvez visiter la démo en ligne : https://magma73.github.io/Projet-7-Developpez-un-algorithme-de-recherche-en-JavaScript/public/

Sinon, vous pouvez également cloner le projet :

``https://github.com/Magma73/Projet-7-Developpez-un-algorithme-de-recherche-en-JavaScript.git``


# quiprendquoi

## Installation 

````
npm install
npm run start
````

## Améliorations apportées

* Ajout d'un item sur la page événement
* Suppression de l'item sur la page événement
* Amélioration scss


## API Utilisée

J'ai implémenté Notification API à ma PWA pour informer l'utilisateur de ses actions sur le site. C'est une API qui permet aux pages Web de contrôler l’affichage des notifications. Ces dernières apparaîssent en dehors de la page web sur laquelle l'utilisateur peut se trouver, ainsi elles peuvent être affichés même lorsqu'on change d'onglet ou que nous soyons sur une application différente. De plus l’API est conçue pour être compatible avec les systèmes de notification existants et sur différentes plateformes.

# Son utilisation

Son utilisation est très simple et ressemble fortement aux API déjà utilisé dans ce TP (Clipboard, Share). 

* Ajout d'un data-attribute sur le bouton ( ici "Ajouter" ) pour le relier au JS. 
* Ajout d'un event sur le bouton permettant de demander la permission à l'utilisateur si il peut reçevoir des notif de ce site
* Si oui, on notifie l'utilisateur de son action ( ici, qu'un item a été supprimé )
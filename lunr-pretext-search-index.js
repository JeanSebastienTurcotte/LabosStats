var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-Prelab_Introduction",
  "level": "1",
  "url": "sec-Prelab_Introduction.html",
  "type": "Section",
  "number": "1.1",
  "title": "Prélab",
  "body": " Prélab  Les trois premiers laboratoires sont consacrés à l'étude de la maladie du diabète, en mettant l'accent sur les femmes d'origine pima. Les Pimas sont un peuple autochtone de la région du Sonora, au Mexique, et de l'État de l'Arizona, aux États-Unis. Les données utilisées proviennent du National Institute of Diabetes and Digestive and Kidney Diseases (l'Institut National du Diabète et des Maladies Digestives et Rénales des États-Unis). Les femmes ont été suivies sur une longue période de temps, soit de 1965 à 1995. Ce type de recherche, appelé étude longitudinale, vise à suivre l'évolution d'une variable dans le temps. L'année exacte de la collecte de données pour ce laboratoire n'est toutefois pas connue.  Selon Santé Canada, le diabète est défini comme « une maladie chronique qui se développe lorsque le corps ne produit pas l'insuline dont il a besoin pour transformer le sucre en énergie ou qu'il ne l'utilise pas efficacement ». Cette maladie se divise en trois catégories : le diabète de type 1, le diabète de type 2 et le diabète gestationnel. Le diabète de type 1 se caractérise par une production insuffisante d'insuline par le corps. Le diabète de type 2 est lié à une résistance du corps à l'insuline. Le diabète gestationnel, quant à lui, se manifeste par une élévation récente du taux de glucose dans le sang d'une femme enceinte.  Dans l'étude présentée, on se concentre sur le diabète de type 2, une forme de diabète fréquemment associée à l'inactivité physique, à l'obésité, à l'âge avancé d'un individu, ainsi qu'à des antécédents familiaux de diabète de type 2. Plusieurs facteurs expliquent cette prévalence chez les communautés autochtones. Notamment, ces dernières rencontrent des obstacles pour accéder à des soins de santé adéquats en raison de ressources limitées, de faibles revenus et de conditions économiques précaires.  Le fichier Excel à télécharger, ouvrir et enregistrer est Données_Diabète.xlsx disponible à l'adresse .  La base de données de l'enquête comprend les mesures diagnostiques d'un échantillon de 768 femmes d'origine pima de l'Arizona. Les variables à l'étude sont :    l' identifiant des participantes. L'éthique en matière de recherche exige l'anonymat des personnes participantes. Ainsi, un numéro est attribué à chaque individu afin d'éviter de divulguer leur identité;  l' âge des participantes en année;  le nombre de grossesses ;  la concentration de glucose plasmatique après deux heures lors d'un test de tolérance au glucose par voie orale en milligramme de glucose par décilitre de sang (mg\/dL). Un taux élevé de glucose est un signe précoce du diabète de type 2. Après ce test, une valeur considérée saine est inférieure à 140 mg\/dL. Une valeur comprise entre 140 et 199 mg\/dL est considérée comme un prédiabète. Une valeur de 200 mg\/dL ou plus indique un diabète;   la pression artérielle diastolique en millimètre de mercure (mmHg). La pression diastolique indique la pression dans les artères lorsque le coeur se repose entre deux battements. Une valeur comprise entre 60 et 80 est considérée normale. Une valeur entre 80 et 90 est qualifiée de préhyperetension. Une valeursupérieure à 90 est classifiée comme hypertension;   l' épaisseur du pli cutané du triceps en mm;   l' insuline dans le sang en micro unité internationale par millilitre ( U\/mL). L'insuline est une hormone produite par le pancréas. Elle joue un rôle crucial dans le maintien de l'équilibre énergétique du corps et la régulation du taux de glucose sanguin. Après un repas riche en glucides, le taux de glucose peut augmenter rapidement; l'insuline intervient alors pour l'abaisser. En cas de production insuffisante d'insuline ou si le corps devient résistant à son action, le glucose reste en excès dans le sang, ce qui peut entraîner des maladies comme le diabète de type 1 ou le diabète de type 2. Dans l'étude des femmes d'origine pima, l'accent est mis sur le risque de développement du diabète de type 2;   l' indice de masse corporelle (IMC) en kilogramme par mètre carré (kg\/m ). Comme l'indiquent ses unités, l'IMC est la valeur obtenue en divisant la masse d'un individu par sa taille au carré. Il s'agit d'un indicateur permettant d'estimer le surpoids d'une personne. Selon Statistique Canada, l'IMC fournit « un moyen de classer le poids corporel en fonction de risque pour la santé » , page consultée le 20 août 2024 . Cependant, l'IMC n'est pas sans faille. Il ne fournit aucune information concernant la distribution de la matière grasse dans le corps;   les stades d' obésité selon Santé Canada (catégorie de l'IMC) :   Poids insuffisant ( )  Poids normal ( )  Excès de poids ( )  Obésité Classe I ( )  Obésité Classe II ( )  Obésité Classe III ( )     la fonction pedigree du diabète . C'est un score mesurant le risque familial du diabète. Cette valeur mesure entre 0,08 et 2,42;    l' atteinte au diabète (avoir ou non le diabète).    Non   Oui      "
},
{
  "id": "sec-Prelab_Introduction-7",
  "level": "2",
  "url": "sec-Prelab_Introduction.html#sec-Prelab_Introduction-7",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "identifiant âge nombre de grossesses glucose pression artérielle diastolique épaisseur du pli cutané du triceps insuline indice de masse corporelle obésité fonction pedigree du diabète atteinte "
},
{
  "id": "sec-Laboratoire_Introduction",
  "level": "1",
  "url": "sec-Laboratoire_Introduction.html",
  "type": "Section",
  "number": "1.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Ce laboratoire a pour objectif d'introduire le logiciel Excel.     Interface d'Excel   Avant de commencer à utiliser un nouveau logiciel, il est essentiel de se familiariser avec son interface et ses outils. Les fichiers d'Excel sont appelés des classeurs et chaque classeur contient des feuilles de calcul . La figure présente les noms des différents éléments d'une feuille d'Excel.     Interface d'une fenêtre Excel   Interface d'une fenêtre Excel      La barre d'outil Accès rapide est une barre personnalisable qui affiche les icônes des commandes les plus courantes. Par défaut, elle comprend les commandes suivantes : l'enregistrement de fichier, l'annulation d'une action effectuée et le rétablissement d'une action annulée.  Le nom du classeur est écrit dans la barre d'Accès rapide. Par défaut, Excel nomme le fichier Classeur 1. Les versions plus récentes d'Excel permettent de sauvegarder automatiquement le travail fait.  Le ruban est composé d'une barre de menus (Fichier, Accueil, Insertion, Mise en page, Formules, Données, Affichage entre autres) et d'un groupe de commandes courantes dans chaque menu (outils courants regroupés par nature dans chaque onglet).  Une feuille de calcul est un quadrillage comportant des cases, appelées cellules, dans lesquelles on peut écrire du texte ou effectuer des calculs à l'aide de formules et de fonctions.   La cellule de référence C5  est la cellule située à l'intersection de la colonne C et de la ligne 5 . C5 est l'adresse de la cellule . Une cellule est dite active lorsqu'elle est sélectionnée. Dans ce cas, sa bordure est verte et épaisse. Les en-têtes de sa colonne et de sa ligne sont alors grisés.   La plage de données  F13:H18 correspond à l'ensemble des cellules contiguës comprises entre les colonnes F et H et entre les lignes 13 et 18 .   La zone nom permet d'afficher la référence d'une cellule (la lettre de sa colonne et le numéro de sa ligne) ou le nom qui lui a été attribuée. Cette zone permet également d'afficher le nom d'une plage de données.   La barre de formule permet d'afficher, d'entrer ou de modifier le contenu d'une cellule active. Le contenu peut être du texte, des nombres, des formules ou des fonctions.   Les onglets de feuilles représentent l'ensemble des feuilles de calcul qui composent le classeur . En cliquant droit sur l'onglet d'une feuille, un menu contextuel apparaît. Il est possible, entre autres, de renommer la feuille, de la déplacer, de la copier, de la masquer ou de la supprimer.   En cliquant l'icône se situant à droite des onglets des feuilles, on peut ajouter une nouvelle feuille au classeur.    Les barres de défilement permettent se déplacer horizontalement et verticalement la feuille de calcul.       Exploration de l'élève   L'élève est invité à explorer les onglets du ruban et les groupes de commandes. Pour ce faire, il faut ouvrir le fichier Données_Diabète.xlsx .   Sélection d'une ligne ou d'une colonne    Dans une feuille de calcul, il est possible de sélectionner une ligne entière ou une colonne entière.       Placer le curseur sur le numéro de la ligne à sélectionner jusqu'à ce qu'une flèche noire apparaisse au-dessus du numéro de la ligne (voir la ).   Une fois que la flèche apparaît, cliquer. La ligne entière sera sélectionnée. Elle sera grisée et entourée d'un cadre vert.     Sélection d'une ligne   Selection d'une ligne         Pour la sélection d'une colonne entière, la procédure est similaire. Il faut placer le curseur sur la lettre de la colonne à sélectionner, attendre l'apparition de la flèche noire et cliquer.  Il ne faut pas oublier de sauvegarder régulièrement son travail en appuyant sur les touches CTRL-S ou en activant la sauvegarde automatique.    Modifier la largeur des colonnes ou des lignes    Dans une feuille de calcul, il est possible d'élargir ou de rétrécir la largeur d'une colonne ou d'une ligne.       Placer le curseur entre deux colonnes jusqu'à ce qu'une flèche bidirectionnelle apparaisse (voir la ).     Modifier la largeur d'une colonne   Modifier la largeur d'une colonne        Cliquer et déplacer la flèche vers la gauche pour rétrécir la largeur de la colonne de gauche et vers la droite pour élargir la largeur de la colonne de gauche. Pour modifier la largeur d'une ligne, il faut placer le curseur entre deux lignes et déplacer la flèche vers le haut ou le bas selon l'effet désiré.    Il est possible d'ajuster la largeur d'une colonne ou d'une ligne au contenu de celle-ci. Il suffit de double-cliquer lorsque la flèche bidirectionnelle apparaît.       Attribuer des noms  Dans cette section, les étapes pour nommer des cellules sont présentées. Attribuer un nom à une cellule signifie lui donner un identifiant autre que son adresse, afin de pouvoir y faire référence dans toutes les feuilles de calcul d'un classeur Excel.   Attribuer un nom à une cellule ou à une plage de cellules    La sélection de données est une opération courante dans Excel. Que ce soit pour l'utilisation de formules ou la création de graphiques, il est souvent nécessaire de sélectionner des cellules. Cette tâche peut être laborieuse lorsque la base de données est volumineuse. On risque de glisser trop loin avec la souris et devoir revenir en arrière, ou ne pas sélectionner suffisamment de cellules et omettre des données. Pour éviter ces problèmes, il est pratique d'attribuer un nom à une cellule ou à une plage de cellules. Cela permet de faire référence à ce nom dans une formule, peu importe la feuille de calcul dans laquelle on travaille.  Dans la feuille de calcul Données du fichier Excel, on attribue un nom au tableau principal, soit le nom « Échantillon ». Il existe deux façons d'effectuer cette opération.  Première méthode : zone nom     Sélectionner l'entièreté du tableau, soit la plage A5:K773 . Il est possible de faire ceci en sélectionnant la cellule A5 et en tapant la combinaison Ctrl + A .   Dans la zone nom (voir la figure ), taper le mot Échantillon (voir la ) et appuyer sur la touche Enter . Les noms ne doivent pas contenir d'espace ni de caractères spéciaux.     Attribuer un nom à une plage de cellules à partir de la zone nom   Attribuer un nom à une plage de cellules à partir de la zone nom.     La plage de données est désormais nommée Échantillon .      Nommer une plage de cellules  Lorsque l'on attribue un nom à une plage de cellules avec la première méthode, il ne faut pas oublier d'appuyer sur la touche Enter pour s'assurer de l'enregistrement du nom.    Deuxième méthode: ruban     Sélectionner l'entièreté du tableau, soit la plage A5:K773 . Il est possible de faire ceci en sélectionnant la cellule A5 et en tapant la combinaison Ctrl + A .   Cliquer sur l'onglet Formules du ruban (voir la ).   Dans le groupe Noms définis , cliquer sur l'icône Définir un nom (voir la ). Une boîte de dialogue apparaît à l'écran.     L'onglet Formules et le groupe Noms définis   L'onglet Formules du ruban et le groupe Noms définis.        Dans l'encadré vide de l'option Nom , taper le mot Échantillon , le nom attribué au tableau (voir la ). Les noms ne doivent pas contenir d'espace ni de caractères spéciaux.     Attribuer un nom à une plage de cellules à partir de l'onglet Formules   Attribuer un nom à une plage de cellules à partir de l'onglet Formules.     S'assurer que dans l'encadré de l'option Zone il soit écrit Classeur . Ceci garantit que le nom attribué à une plage de cellules est défini dans toutes les feuilles du classeur, permettant à l'utilisateur d'y faire référence quelle que soit la feuille de travail.  Cliquer sur OK .        Vérification de l'attribution d'un nom    Il est important de vérifier que l'on a bien attribué un nom à une plage de cellules.     Dans la zone nom , cliquer sur la flèche du menu déroulant (voir la ).     Vérification de l'attribution d'un nom à une plage de cellules Formules   Vérification de l'attribution d'un nom à une plage de cellules à partir de la zone nom      Le nom Échantillon devrait apparaître (voir la ). S'il n'apparaît pas, l'attribution de nom n'a pas été bien saisie.     Vérification de l'attribution d'un nom Échantillon au tableau principal   Vérification du nom du tableau principal         Attribuer un nom aux colonnes d'un tableau    Il est pratique d'attribuer un nom aux colonnes d'un tableau puisqu'il est possible d'y faire référence dans des formules Excel, et ce, peu importe la feuille de calcul dans laquelle on travaille.     Dans la zone nom , sélectionner Échantillon (voir la ).     Sélection du tableau Échantillon   Sélection du tableau Échantillon      Cliquer sur l'onglet Formules du ruban.   Dans le groupe Noms définis , cliquer sur Depuis sélection (voir la ). Une boîte de dialogue s'ouvre.     L'onglet Formules et le groupe Noms définis   L'onglet Formules et le groupe Noms définis      Cliquer sur l'option Ligne du haut (voir la ). Ceci permettra à Excel d'attribuer l'en-tête de la première ligne comme nom à la colonne.     Sélection de l'option Lignes du haut dans le groupe Noms définis    Sélection de l'option Lignes du haut dans le groupe Noms définis      Dans la zone nom , cliquer sur la flèche du menu déroulant pour vérifier que chaque colonne a été attribuée un nom (voir la figure ).     Vérification de l'attribution du nom de chaque colonne   Vérification de l'attribution du nom de chaque colonne     Sauvegarder le travail.       Figer et libérer les volets  Lorsqu'on souhaite parcourir un tableau de grande tailler (beaucoup de lignes et\/ou de colonnes), il est pratique de maintenir les titres des colonnes et\/ou des lignes visibles pendant le défilement de la feuille de calcul.    Figer la ligne de titres d'un tableau     Sélectionner la deuxième ligne du tableau, soit la ligne 6 (voir la ). Il faut placer son curseur à la ligne 6 et cliquer.     Sélection de la deuxième ligne du tableau Échantillon   Sélection de la deuxième ligne du tableau Échantillon      Sélectionner l'onglet Affichage . Dans le groupe Fenêtre , cliquer sur la flèche du menu déroulant de l'icône Figer les volets (voir la )     Sélection de l'onglet Affichage et de l'icône Figer les volets   Sélection de l'onglet Affichage et de l'icône Figer les volets       Cliquer sur Figer les volets (voir ).     Sélection de l'option Figer les volets   Sélection de l'option Figer les volets       Maintenant, lorsque l'on fait défiler le tableau, les titres des colonnes restent visibles. Il est possible de verrouiller à la fois des lignes et des colonnes, ainsi que libérer les volets si nécessaire.    Libérer les volets    Si l'on veut libérer les volets, on peut les supprimer.     Sélectionner l'onglet Affichage (voir la figure ).   Dans le groupe Fenêtre , cliquer sur la flèche du menu déroulant de l'icône Figer les volets (voir la ). Cliquer sur l'option Libérer les volets .     Sélection de l'option Libérer les volets   Sélection de l'option Libérer les volets          Filtrer et trier des données  Dans Excel, il est possible d'ajouter des filtres qui permettent de dépister des valeurs aberrantes ou manquantes, ainsi que de choisir ou masquer certaines modalités. Il est également possible de trier des séries statistiques dans un certain ordre voulu.   Ajouter des filtres    Les étapes qui mènent au filtrage de données sont présentées.     Sélectionner le tableau Échantillon .   Sélectionner l'onglet Données (voir la ). Cliquer sur l'icône Filtrer du groupe Trier et filtrer .     Sélection de l'icône Filtrer   Sélection de l'icône Filtrer     Chaque variable affiche désormais un petit triangle dans une boîte grise à droite de son nom (voir la ).     Triangle affichant toutes les modalités d'une variable qualitative et toutes les valeurs d'une variable quantitative   Triangle affichant toutes les modalités d'une variable qualitative et toutes les valeurs d'une variable quantitative     En cliquant sur ce triangle, toutes les modalités d'une variable qualitative et toutes les valeurs d'une variable quantitative sont affichées (voir la ). Il est possible de décocher certaines catégories pour les masquer et n'afficher que celles souhaitées.     Toutes les valeurs de la variable Âge   Toutes les valeurs de la variable Âge         Trier à partir des filtres    Il existe deux façons de trier les données d'un tableau. La première est à partir des filtres.     En cliquant sur le petit triangle de filtre de la variable Âge , une boîte de dialogue s'ouvre. La première option permet de trier les valeurs par ordre croissant (plus petit au plus grand, A à Z pour les variables qualitatives), tandis que la deuxième option permet de trier les valeurs par ordre décroissant (du plus grand au plus petit, Z à A pour les variables qualitatives) (voir la ).     Options de tris   Options de tris.         Trier à partir de l'onglet Données    La deuxième façon de trier des données est à partir de l'onglet Données .     Cliquer sur l'onglet Données . Cliquer l'icône Trier (voir la ).     Options de tris   Options de tris.       Une boîte de dialogue s'ouvre.  Il est possible de sélectionner la variable à trier et d'appliquer un tri croissant, un tri décroissant ou un tri personnalisé (voir la ).   Boîte de dialogue pour le tri et options de variables à trier   Boîte de dialogue pour le tri et options de variables à trier      Sauvegarder.       Ajouter et nommer une feuille de calcul    Lorsqu'on réalise plusieurs études à partir d'une même base de données, il est préférable de travailler dans un seul classeur et d'effectuer chaque étude dans sa propre feuille de calcul distincte afin de faciliter la consultation.     Cliquer sur le symbole (voir la ).     Ajouter une nouvelle feuille de calcul   Ajouter une nouvelle feuille de calcul.      Une feuille intitulée Feuil1 s'ouvrira.     Une nouvelle feuille de calcul intitulée Feuil1   Une nouvelle feuille de calcul intitulée Feuil1.      Il est possible de déplacer l'emplacement des feuilles. Il faut cliquer sur le nom de la feuille, la glisser et la déposer à l'emplacement voulu parmi les onglets des feuilles.   Déplacer la feuille en dernière place, après les feuilles Questions et Données , si Excel ne le fait pas par défaut.   Cliquer droit sur le nom de la feuille.   Sélectionner l'icône Renommer et taper les mots Étude Atteint .     Sélection de l'icône Renommer   Sélection de l'icône Renommer         Remplissage automatique   Remplissage automatique d'une valeur  Il est possible de remplir une colonne avec la même valeur en utilisant la fonction de recopiage automatique d'Excel. Par exemple, dans un problème de physique ou de chimie, il se peut l'incertitude soit la même pour toutes les mesures et on aimerait la recopier sans taper manuellement la valeur plusieurs fois. Les étapes pour faire un remplissage automatique sont présentées ci-dessous.    Dans le classeur de travail, ajouter une feuille de travail ( ).  Dans la cellule C5 de cette nouvelle feuille, taper la valeur ( ).     Remplissage automatique d'une valeur à recopier   Remplissage automatique d'une valeur à recopier     Sélectionner la cellule jusqu'à ce qu'elle soit encadrée d'une bordure verte ( ).  Cliquer et maintenir enfoncer le bouton gauche de la souris sur le coin inférieur droit de la cellule (un petit carré vert). Glisser le pointeur vers le bas jusqu'à la cellule voulue, la cellule C17 dans ce cas ( ).  Relâcher le bouton gauche de la souris. La valeur apparaît dans toutes les cases sélectionnées, soit la plage C5:C17 ( ). Le remplissage peut également être fait le long d'une ligne.      Remplissage automatique d'une suite de nombre  Il est possible de remplir une colonne avec une suite de nombres en utilisant la fonction de recopiage automatique d'Excel. Les étapes sont présentées ci-dessous.    Dans les cellules E5:E7 de la même feuille de calcul, taper les valeurs , et respectivement ( ).     Remplissage automatique d'une suite de nombres   Remplissage automatique d'une suite de nombres     Sélectionner les cellules E5:E7 jusqu'à ce qu'elles soient encadrées d'une bordure verte ( ).  Cliquer et maintenir enfoncer le bouton gauche de la souris sur le coin inférieur droit de la plage de cellules (un petit carré vert). Glisser le pointeur vers le bas jusqu'à la cellule voulue, la cellule E17 dans ce cas ( ). Relâcher le bouton gauche de la souris une fois la cellule voulue atteinte.  En sélectionnant trois cellules qui ont trois nombres consécutifs, Excel comprend qu'en effectuant un remplissage automatique, on veut poursuivre la séquence et non recopier ces trois valeurs. Ainsi, il remplit les cellules avec les nombres à ( ).       Remplissage automatique d'une valeur en double-cliquant  Il est possible de remplir une colonne adjacente à une autre en utilisant le double-clique. Les étapes sont présentées ci-dessous.    Dans les cellules F5:F6 de la même feuille de calcul, taper la valeur ( ). On place ces valeurs dans la colonne adjacente à celles déjà remplies avec les valeurs à .     Remplissage automatique d'une valeur ou d'une formule avec le double-clique   Remplissage automatique d'une valeur ou d'une formule avec le double-clique     Sélectionner les cellules F5:F6 jusqu'à ce qu'elles soient encadrées d'une bordure verte ( ).  Double-cliquer le bouton gauche de la souris sur le coin inférieur droit de la plage de cellules (un petit carré vert) (voir la ). La plage F5:F17 se remplit automatiquement. Le remplissage arrête à la ligne , car Excel remplit jusqu'à la même ligne que la colonne adjacente à la colonne F .        Tableau croisé dynamique  Lorsque l'on dispose d'une vaste base de données, il peut être difficile de mettre en évidence les faits saillants. Excel permet de faire des tableaux croisés dynamiques pour organiser, présenter, synthétiser et analyser des données. Le mot « croisé » fait référence à la possibilité de regrouper et de comparer plusieurs variables, tandis que le mot « dynamique » souligne la capacité du tableau à évoluer. En effet, si une valeur est modifiée dans la base de données, le tableau croisé dynamique peut être mis à jour. À partir d'un tableau croisé dynamique, il est possible de générer un tableau de fréquences pour visualiser la répartition des unités statistiques en fonction d'une variable.  La première enquête du laboratoire 2 porte sur la répartition des femmes d'origine pima de l'Arizona selon la présence de diabète. Ainsi, on génère un tableau croisé dynamique de cette distribution. Il existe deux méthodes pour le générer.   Générer un tableau croisé dynamique (variables qualitatives)    Première méthode        Dans la feuille Étude Atteint , sélectionner la cellule B3 , la cellule dans laquelle le tableau croisé dynamique sera inséré.   Cliquer sur l'onglet Insertion du ruban (voir la ).     Sélection de l'onglet Insertion   Sélection de l'option Renommer      Cliquer le premier icône, soit Tableau croisé dynamique (voir la ).   Une boîte de dialogue apparaît à l'écran.  Dans la zone de saisie Tableau\/Plage , écrire le nom donné au tableau principal, soit Échantillon (voir la )     Boîte de dialogue pour l'insertion d'un tableau croisé dynamique et saisie du nom donné au tableau principal, soit Échantillon   Boîte de dialogue pour l'insertion d'un tableau croisé dynamique et saisie du nom donné au tableau principal, soit Échantillon       Cliquer sur OK .   Un tableau croisé dynamique vide sera déposé dans la feuille Étude Atteint (voir ).     Tableau croisé dynamique généré   Tableau croisé dynamique généré         Deuxième méthode      Dans la feuille Données , sélectionner l'entièreté du tableau, soit la plage A5:K773 . Il est possible de faire ceci en sélectionnant une cellule non vide du tableau Échantillon et en tapant la combinaison Ctrl + A .   Cliquer sur l'onglet Insertion du ruban (voir la ).     Sélection de l'onglet Insertion   Sélection de l'option Insertion      Cliquer sur le premier icône, soit Tableau croisé dynamique (voir la ).   Une boîte de dialogue s'ouvre. La plage de données à partir de laquelle on veut créer un tableau croisé dynamique est bien sélectionnée.  Cliquer sur l'option Feuille de calcul existante pour déterminer l'emplacement du tableau croisé dynamique (voir la )     Sélection de la plage de données à partir de laquelle un tableau croisé dynamique sera généré et sélection de l'option Feuille de calcul existante et de la flèche pour l'emplacement du tableau croisé dynamique   Sélection de la plage de données à partir de laquelle un tableau croisé dynamique sera généré et sélection de l'option Feuille de calcul existante et de la flèche pour l'emplacement du tableau croisé dynamique        Cliquer sur l'onglet de la feuille de calcul Étude Atteint .   Une fois dans la feuille Étude Atteint , cliquer sur la cellule B3 de la feuille.   Cliquer l'onglet OK (voir la ).     Confirmation de l'emplacement du tableau croisé dynamique   Confirmation de l'emplacement du tableau croisé dynamique      Un tableau croisé dynamique vide sera déposé dans la feuille Étude Atteint (voir ).     Tableau croisé dynamique généré   Tableau croisé dynamique généré         Une fois le tableau croisé dynamique généré, il faut le configurer. À la droite de la feuille de calcul, les champs du tableau croisé dynamique s'affichent. Les champs correspondent aux en-têtes des colonnes du tableau source. On trouve cinq encadrés : le premier contient les champs. Les encadrés Colonnes , Lignes et Valeurs représentent des zones où l'on peut ajouter des champs. L'encadré Valeurs permet d'effectuer des calculs au sein du tableau croisé dynamique, tandis que l'encadré Filtres sert à appliquer des filtres aux données lors de la création du tableau.    Remplir un tableau croisé dynamique    Avec 768 femmes étudiées, il est évident qu'un décompte manuel des femmes diabétiques est à la fois long, laborieux et sujet à de nombreuses erreurs. Les étapes pour créer le tableau croisé dynamique de la répartition des femmes Pima selon la présence de diabète sont présentées ci-dessous.      Glisser et déposer la variable Atteint dans la zone de saisie Lignes (voir la ). Pour ce faire, il faut cliquer sur la variable Atteint avec le bouton de gauche de la souris, garder son doigt enfoncé et glisser la variable dans la zone Lignes .     Glissement de la variable Atteint dans la zone de saisie Lignes   Glissement de la variable Atteint dans la zone de saisie Lignes    Les modalités de la variable Atteint s'affichent dans le première colonne du tableau croisé dynamique (voir la ).     Première colonne du tableau croisé dynamique   Première colonne du tableau croisé dynamique      Glisser et déposer la variable Atteint dans la zone de saisie Valeurs cette fois-ci (voir la ).   Par défaut, Excel effectue la somme des valeurs comme opération. Cependant, on veut compter le nombre de femmes dans chaque catégorie. Dans la zone de saisie Valeurs , cliquer sur la flèche du menu déroulant, puis sélectionner l'option Paramètres des champs de valeurs (voir la ) pour modifier le calcul.   Glissement de la variable Atteint dans la zone de saisie Valeurs   Glissement de la variable Atteint dans la zone de saisie Valeurs    Une nouvelle boîte de dialoge apparaît.     À l'onglet Synthèse des valeurs par , sélectionner l'option Nombre (voir la ).     Sélection de l'option Nombre dans l'onglet Synthèse des valeurs par   Sélection de l'option Nombre dans l'onglet Synthèse des valeurs par      Cliquer sur OK .   Cette action ajoute une deuxième colonne au tableau croisé dynamique, une colonne qui compte le nombre de femmes d'origine pima dans chaque catégorie de la variable Atteint (voir la ).     Deuxième colonne du tableau croisé dynamique   Deuxième colonne du tableau croisé dynamique      Refaire les étapes 2 à 4 pour ajouter une troisième colonne au tableau croisé dynamique. On veut ajouter une colonne pour le pourcentage de femmes d'origine pima atteinte ou non du diabète.   À l'onglet Synthèse des valeurs par , sélectionner l'option Nombre (voir la ). Attention, il ne faut pas cliquer sur OK tout de suite!   Cliquer sur l'onglet Afficher les valeurs , l'onglet à droite de Synthèse des valeurs par .   Cliquer sur la flèche du menu déroulant et sélectionner l'option % du total général (voir la figure )   Sélection de l'onglet Afficher les valeurs et de l'option % du total général   Sélection de l'onglet Afficher les valeurs et de l'option Pourcentage du total général       Cliquer sur OK . La troisième colonne présente le pourcentage de femmes d'origine pima atteintes ou non du diabète.     Les trois colonnes du tableau croisé dynamique final   Les trois colonnes du tableau croisé dynamique      Sauvegarder le travail.       Actualiser un tableau croisé dynamique   Si une valeur du tableau principal est modifiée, il est possible d'actualiser le tableau croisé dynamique pour refléter les changements effectués.     Cliquer avec le bouton de droite de la souris sur une des colonnes du tableau croisé dynamique. Un menu déroulant s'affiche. Cliquer l'option Actualiser .     Sélection de l'option Actualiser d'un tableau croisé dynamique   Sélection de l'option Actualiser d'un tableau croisé dynamique      Sauvegarder le travail.    Dans le prochain laboratoire, les étapes pour améliorer la présentation de ce tableau afin qu'il soit conforme aux normes statistiques seront abordées.    "
},
{
  "id": "ssec-Interface-2-1",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#ssec-Interface-2-1",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "feuilles de calcul "
},
{
  "id": "Fig_Interface3",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Interface3",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Interface d'une fenêtre Excel   Interface d'une fenêtre Excel   "
},
{
  "id": "ssec-Interface-5",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#ssec-Interface-5",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "barre d'outil Accès rapide nom du classeur ruban feuille de calcul cellule de référence C5  l'adresse de la cellule active plage de données zone nom barre de formule onglets de feuilles classeur ajouter une nouvelle feuille "
},
{
  "id": "Fig_Selection_Ligne",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Selection_Ligne",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Sélection d'une ligne   Selection d'une ligne   "
},
{
  "id": "Fig_Elargir",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Elargir",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Modifier la largeur d'une colonne   Modifier la largeur d'une colonne   "
},
{
  "id": "Fig_Nom_Echantillon_1",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Nom_Echantillon_1",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Attribuer un nom à une plage de cellules à partir de la zone nom   Attribuer un nom à une plage de cellules à partir de la zone nom.   "
},
{
  "id": "rem-nommercellules",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#rem-nommercellules",
  "type": "Remarque",
  "number": "1.2.5",
  "title": "Nommer une plage de cellules.",
  "body": " Nommer une plage de cellules  Lorsque l'on attribue un nom à une plage de cellules avec la première méthode, il ne faut pas oublier d'appuyer sur la touche Enter pour s'assurer de l'enregistrement du nom.  "
},
{
  "id": "sssec-NomTableau-6-2",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-NomTableau-6-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Noms définis Définir un nom "
},
{
  "id": "Fig_Verification_Noms_1",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Verification_Noms_1",
  "type": "Figure",
  "number": "1.2.8",
  "title": "",
  "body": " Vérification de l'attribution d'un nom à une plage de cellules Formules   Vérification de l'attribution d'un nom à une plage de cellules à partir de la zone nom   "
},
{
  "id": "Fig_Verification_Noms_1bis",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Verification_Noms_1bis",
  "type": "Figure",
  "number": "1.2.9",
  "title": "",
  "body": " Vérification de l'attribution d'un nom Échantillon au tableau principal   Vérification du nom du tableau principal   "
},
{
  "id": "sssec-NomColonnes-4",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-NomColonnes-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Formules Noms définis "
},
{
  "id": "sssec-FigerLigneTitres-2",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-FigerLigneTitres-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fenêtre Figer les volets "
},
{
  "id": "sssec-LibererVolets-4",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-LibererVolets-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Libérer les volets "
},
{
  "id": "sssec_Filtrer-4",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec_Filtrer-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Filtrer "
},
{
  "id": "Fig_Trier_2",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Trier_2",
  "type": "Figure",
  "number": "1.2.21",
  "title": "",
  "body": " Options de tris   Options de tris.   "
},
{
  "id": "sssec-TrierDonnees-4",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-TrierDonnees-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trier "
},
{
  "id": "Fig_Ajout_Feuille",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Ajout_Feuille",
  "type": "Figure",
  "number": "1.2.24",
  "title": "",
  "body": " Ajouter une nouvelle feuille de calcul   Ajouter une nouvelle feuille de calcul.   "
},
{
  "id": "Fig_Ajout_Feuille_2",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Ajout_Feuille_2",
  "type": "Figure",
  "number": "1.2.25",
  "title": "",
  "body": " Une nouvelle feuille de calcul intitulée Feuil1   Une nouvelle feuille de calcul intitulée Feuil1.   "
},
{
  "id": "ssec_AjoutFeuilles-4-1-3",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#ssec_AjoutFeuilles-4-1-3",
  "type": "Remarque",
  "number": "1.2.26",
  "title": "",
  "body": " Il est possible de déplacer l'emplacement des feuilles. Il faut cliquer sur le nom de la feuille, la glisser et la déposer à l'emplacement voulu parmi les onglets des feuilles. "
},
{
  "id": "Fig_Ajout_Feuille_3",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Ajout_Feuille_3",
  "type": "Figure",
  "number": "1.2.27",
  "title": "",
  "body": " Sélection de l'icône Renommer   Sélection de l'icône Renommer   "
},
{
  "id": "Fig_Remplissage_gif1",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Remplissage_gif1",
  "type": "Figure",
  "number": "1.2.28",
  "title": "",
  "body": " Remplissage automatique d'une valeur à recopier   Remplissage automatique d'une valeur à recopier   "
},
{
  "id": "Fig_Remplissage_gif2",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Remplissage_gif2",
  "type": "Figure",
  "number": "1.2.29",
  "title": "",
  "body": " Remplissage automatique d'une suite de nombres   Remplissage automatique d'une suite de nombres   "
},
{
  "id": "Fig_Remplissage_gif3",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#Fig_Remplissage_gif3",
  "type": "Figure",
  "number": "1.2.30",
  "title": "",
  "body": " Remplissage automatique d'une valeur ou d'une formule avec le double-clique   Remplissage automatique d'une valeur ou d'une formule avec le double-clique   "
},
{
  "id": "sssec-CreerTCD-5",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-CreerTCD-5",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Insertion Tableau croisé dynamique "
},
{
  "id": "sssec-CreerTCD-8",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-CreerTCD-8",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Insertion Tableau croisé dynamique "
},
{
  "id": "sssec-CreerTCD-10",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-CreerTCD-10",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Colonnes Lignes Valeurs Valeurs Filtres "
},
{
  "id": "sssec-RemplirTCD-4",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-RemplirTCD-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Paramètres des champs de valeurs Synthèse des valeurs par Afficher les valeurs "
},
{
  "id": "sssec-ActualiserTCD-4",
  "level": "2",
  "url": "sec-Laboratoire_Introduction.html#sssec-ActualiserTCD-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Actualiser "
},
{
  "id": "sec-Postlab_Introduction",
  "level": "1",
  "url": "sec-Postlab_Introduction.html",
  "type": "Section",
  "number": "1.3",
  "title": "Réflexions",
  "body": " Réflexions  Avant d'entamer une collecte de données, toute personne chercheuse doit suivre un processus de recherche rigoureux, essentiel pour porter un jugement critique sur le sujet étudié. La première étape consiste à définir les objectifs de la recherche. En général, des hypothèses de recherche sont formulées avant de procéder à la collecte de données. Ce postlab vise à développer une compréhension intuitive des informations que révèlent les données avant d'entreprendre une étude quantitative plus approfondie. On rappelle que l'objectif de cette étude est de prédire, à partir de ses indicateurs de santé, si une femme d'origine pima est atteinte ou non du diabète.   Travail à faire après le laboratoire    Examiner les séries statistiques.  Effectuer une revue de la littérature.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.     Effectuer les tris suivants dans le tableau Échantillon :  Trier en ordre décroissant selon la colonne Nombre de grossesses ;  Trier en ordre croissant selon la colonne Épaisseur peau .   Dans la feuille Étude atteint , cliquer avec le bouton de droit sur le tableau croisé dynamique et cliquer sur Afficher la liste de champs . Glisser le champ Nombre de grossesses dans la zone filtre. Un nouvel élément apparait au-dessus du tableau croisé dynamique. Explorer cet ajout et son effet sur le tableau. S'assurer de remettre la valeur du filtre sur (Tous) une fois l'exploration terminée.   En se basant sur les manipulations de l'exercice précédent, quelle(s) observation(s) peuvent être formulées à propos des différentes variables de l'étude?     Une hypothèse de recherche est un énoncé « provisoire à une ou plusieurs questions de recherche » MORNEAU, S. (2024). Probabilités et statistique en sciences de la nature. Les Éditions CEC. p.4 . Suite aux observations faites à l'exercice , formuler des hypothèses de recherche qui paraissent plausibles, sont appuyées du contexte théorique et pourraient répondre aux objectifs formulés à l'exercice précédent.   Il peut être pertinent de comparer la santé physique d'un groupe à celle d'un autre. Identifier quelques groupes avec lesquels les femmes d'origine pima de l'Arizona pourraient être comparées, en précisant la pertinence de ces comparaisons.     "
},
{
  "id": "ws-Reflexion_Introduction-2",
  "level": "2",
  "url": "sec-Postlab_Introduction.html#ws-Reflexion_Introduction-2",
  "type": "Objectifs",
  "number": "1.3",
  "title": "",
  "body": "  Examiner les séries statistiques.  Effectuer une revue de la littérature.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.   "
},
{
  "id": "ws-Reflexion_Introduction-3-1",
  "level": "2",
  "url": "sec-Postlab_Introduction.html#ws-Reflexion_Introduction-3-1",
  "type": "Activité",
  "number": "1.3.1",
  "title": "",
  "body": "Effectuer les tris suivants dans le tableau Échantillon :  Trier en ordre décroissant selon la colonne Nombre de grossesses ;  Trier en ordre croissant selon la colonne Épaisseur peau .   Dans la feuille Étude atteint , cliquer avec le bouton de droit sur le tableau croisé dynamique et cliquer sur Afficher la liste de champs . Glisser le champ Nombre de grossesses dans la zone filtre. Un nouvel élément apparait au-dessus du tableau croisé dynamique. Explorer cet ajout et son effet sur le tableau. S'assurer de remettre la valeur du filtre sur (Tous) une fois l'exploration terminée.  "
},
{
  "id": "Postlab_1",
  "level": "2",
  "url": "sec-Postlab_Introduction.html#Postlab_1",
  "type": "Activité",
  "number": "1.3.2",
  "title": "",
  "body": "En se basant sur les manipulations de l'exercice précédent, quelle(s) observation(s) peuvent être formulées à propos des différentes variables de l'étude? "
},
{
  "id": "ws-Reflexion_Introduction-4-1",
  "level": "2",
  "url": "sec-Postlab_Introduction.html#ws-Reflexion_Introduction-4-1",
  "type": "Activité",
  "number": "1.3.3",
  "title": "",
  "body": "Une hypothèse de recherche est un énoncé « provisoire à une ou plusieurs questions de recherche » MORNEAU, S. (2024). Probabilités et statistique en sciences de la nature. Les Éditions CEC. p.4 . Suite aux observations faites à l'exercice , formuler des hypothèses de recherche qui paraissent plausibles, sont appuyées du contexte théorique et pourraient répondre aux objectifs formulés à l'exercice précédent.  "
},
{
  "id": "ws-Reflexion_Introduction-4-2",
  "level": "2",
  "url": "sec-Postlab_Introduction.html#ws-Reflexion_Introduction-4-2",
  "type": "Activité",
  "number": "1.3.4",
  "title": "",
  "body": "Il peut être pertinent de comparer la santé physique d'un groupe à celle d'un autre. Identifier quelques groupes avec lesquels les femmes d'origine pima de l'Arizona pourraient être comparées, en précisant la pertinence de ces comparaisons.  "
},
{
  "id": "sec-Prelab_Varqual",
  "level": "1",
  "url": "sec-Prelab_Varqual.html",
  "type": "Section",
  "number": "2.1",
  "title": "Prélab",
  "body": " Prélab  Les variables qualitatives sont un type de variables pour lesquelles les modalités ne sont pas des nombres, mais plutôt des catégories. On retrouvera souvent parmi ces variables le sexe, la couleur, le niveau de satisfaction, etc. Elles se déclinent en deux catégories, soit les variables qualitatives nominales et ordinales. Pour synthétiser visuellement l'information d'une variable qualitative, on utilise principalement un tableau de fréquences ainsi qu'un diagramme circulaire ou un diagramme à bandes.   Travail à faire avant le cours    Créer les tableaux croisés dynamiques nécessaire pour le laboratoire  Quelque chose d'autre     On continue de travailler à l'aide de la base de données du laboratoire d' introduction . Le but de ce prélab est d'utiliser les connaissances et outils acquis dans le premier laboratoire afin de préparer une feuille de calcul qui servira lors du prochain laboratoire.    Dans le fichier Excel du laboratoire, créer une nouvelle feuille de calcul. Dans celle-ci, générer le tableau croisé dynamique de la répartition des femmes pour la variable Obésité .  Considérer les situations suivantes. Quelle(s) critique(s) peut on poser à leur égard?  Cette marque de dentifrice est recommandée par des dentistes qui l'utilisent.   Il y a utilisateurs d'un produit qui ont acheté à nouveau contre pour un produit compétitif . Le produit est donc supérieur au produit .      Considérer les graphiques suivants. Expliquer en quoi l'information est trompeuse.   Diagramme à bandes des résultats de l'élection fédérale de 2021   Une capture d'écran du reportage de CBC sur le résultat de l'élection fédérale de 2021     Diagramme circulaire à propos de la consommation de cannabis des américains   Une capture d'écran du réseau CBSN sur la consommation de cannabis des américains.        Lequel des graphiques suivants semble le plus adéquat pour illustrer l'information? Dire pourquoi.   Répartition en pourcentage des élèves d'une classe de statistiques selon leur mois de naissance   Un graphique circulaire montrant la répartition des élèves d'une classe selon leur mois de naissance.     Répartition en pourcentage des élèves d'une classe de statistiques selon leur mois de naissance   Un diagramme à bandes montrant la répartition des élèves d'une classe selon leur mois de naissance.       "
},
{
  "id": "ws-Prelab_Varqual-2",
  "level": "2",
  "url": "sec-Prelab_Varqual.html#ws-Prelab_Varqual-2",
  "type": "Objectifs",
  "number": "2.1",
  "title": "",
  "body": "  Créer les tableaux croisés dynamiques nécessaire pour le laboratoire  Quelque chose d'autre   "
},
{
  "id": "ws-Prelab_Varqual-4-1",
  "level": "2",
  "url": "sec-Prelab_Varqual.html#ws-Prelab_Varqual-4-1",
  "type": "Activité",
  "number": "2.1.1",
  "title": "",
  "body": "Dans le fichier Excel du laboratoire, créer une nouvelle feuille de calcul. Dans celle-ci, générer le tableau croisé dynamique de la répartition des femmes pour la variable Obésité . "
},
{
  "id": "ws-Prelab_Varqual-4-2",
  "level": "2",
  "url": "sec-Prelab_Varqual.html#ws-Prelab_Varqual-4-2",
  "type": "Activité",
  "number": "2.1.2",
  "title": "",
  "body": "Considérer les situations suivantes. Quelle(s) critique(s) peut on poser à leur égard?  Cette marque de dentifrice est recommandée par des dentistes qui l'utilisent.   Il y a utilisateurs d'un produit qui ont acheté à nouveau contre pour un produit compétitif . Le produit est donc supérieur au produit .  "
},
{
  "id": "ws-Prelab_Varqual-5-1",
  "level": "2",
  "url": "sec-Prelab_Varqual.html#ws-Prelab_Varqual-5-1",
  "type": "Activité",
  "number": "2.1.3",
  "title": "",
  "body": " Considérer les graphiques suivants. Expliquer en quoi l'information est trompeuse.   Diagramme à bandes des résultats de l'élection fédérale de 2021   Une capture d'écran du reportage de CBC sur le résultat de l'élection fédérale de 2021     Diagramme circulaire à propos de la consommation de cannabis des américains   Une capture d'écran du réseau CBSN sur la consommation de cannabis des américains.    "
},
{
  "id": "ws-Prelab_Varqual-6-1",
  "level": "2",
  "url": "sec-Prelab_Varqual.html#ws-Prelab_Varqual-6-1",
  "type": "Activité",
  "number": "2.1.4",
  "title": "",
  "body": " Lequel des graphiques suivants semble le plus adéquat pour illustrer l'information? Dire pourquoi.   Répartition en pourcentage des élèves d'une classe de statistiques selon leur mois de naissance   Un graphique circulaire montrant la répartition des élèves d'une classe selon leur mois de naissance.     Répartition en pourcentage des élèves d'une classe de statistiques selon leur mois de naissance   Un diagramme à bandes montrant la répartition des élèves d'une classe selon leur mois de naissance.    "
},
{
  "id": "sec-Laboratoire_Varqual",
  "level": "1",
  "url": "sec-Laboratoire_Varqual.html",
  "type": "Section",
  "number": "2.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Dans ce laboratoire, on cherche à représenter la répartition du nombre de femmes d'origine pima vivant en Arizona qui sont atteintes du diabète, ainsi que leur répartition selon leur niveau d'obésité, tel que qualifié par Santé Canada en fonction de l'indice de masse corporelle.  Pour cela, on utilise les variables Atteint et Obésité , dont les tableaux croisés dynamiques ont été construits respectivement au Laboratoire 1 et au pré laboratoire précédent. On rappelle que pour la variable Atteint , le code signifie absence de diabète et le code signifie que la femme est atteinte du diabète. Pour la variable Obésité , l'échelle de à se traduit par:  Poids insuffisant;  Poids normal;  Excès de poids;  Obésité Classe I;  Obésité Classe II;  Obésité Classe III.   Dans ce laboratoire, on introduit la notion de mise en forme d'un tableau à des fins de publication, la création d'un diagramme circulaire et d'un diagramme à bandes, ainsi que la mise en forme appropriée pour ces deux éléments graphiques.    Le tableau croisé dynamique et le tableau pour publication  Le tableau croisé dynamique construit par Excel n'est pas adéquat pour publier comme source d'information. Il est nécessaire de préciser les étiquettes des lignes et des colonnes, d'ajouter un titre significatif ainsi que quelques éléments.  La première étape est de sélectionner une cellule pour débuter le tableau. On appuie ensuite sur = et on sélectionne la plage du tableau croisé dynamique correspondant aux données. Il est également possible de faire la combinaison Ctrl + C sur la plage des données du tableau croisé dynamique et de faire un collage spéciale à l'endroit souhaité. Pour cela, on peut faire la combinaison Ctrl + V , cliquer sur l'icone de collage dans le coin inférieur bas et sélectionner Coller le lien (N) . On peut aussi relâcher la touche Ctrl et appuyer sur la combinaison Ctrl + N pour utiliser le raccourci clavier correspondant. La figure illustre ce menu.  Dans tous les cas, il est possible qu'il faille changer le format de la cellule pour Pourcentage (voir ). On s'assure de garder deux chiffres significatifs après la virgule. L'animation ci-dessous permet de voir en trois étapes à quoi ressemble la progression de ces étapes.   Création du tableau pour présentation - première méthode   Animation de la copie des données du tableau croisé dynamique vers un tableau pour présentation - première méthode     Création du tableau pour présentation - deuxième méthode   Animation de la copie des données du tableau croisé dynamique vers un tableau pour présentation - deuxième méthode      Mise en forme tableau  Une fois les données extraites du tableau croisé dynamique, on ajoute les étiquettes de colonnes et de lignes, le titre du tableau et la source des données. Pour le moment, on ne se soucie pas de la mise en forme de ces éléments. Dans un premier temps, pour le tableau concernant la variable Atteint du diabète, les étapes qui suivent devraient mener à un tableau de quatre lignes et trois colonnes.  Mise en forme du tableau pour publication   On ajoute une colonne appelée Atteinte du diabète à gauche dont les lignes sont, du haut vers le bas : Non , Oui , Total .  On ajoute le titre des autres colonnes, de gauche à droite : Nombre de femmes , Pourcentage de femmes . Élargir les colonnes de manière à ce que le tout soit lisible.  Dans la dernière ligne, on a le total du nombre de femmes sous chaque colonne. Sous la colonne Pourcentage de femmes à la ligne Total , on s'assure qu'il est toujours écrit , même si les nombres dans la colonne pourraient ne pas additionner à en raison d'erreur d'arrondi. Dans de tel cas, on l'indiquera sous le tableau à l'aide de la note : En raison de l'arrondissement des pourcentage, le total pourrait ne pas être exactement de .  Sous le tableau, on inscrit la source des données. Dans le cas de cette étude, la source est donnée dans . La mention Source : National Institute of Diabetes and Digestive and Kidney Diseases (USA) doit apparaitre sous chacun des tableaux et graphiques créés pour publication.  On titre le tableau. Le titre aura généralement la forme ToDo    La figure ci-dessous illustre le tableau pour publication une fois toutes les étapes effectuées.   Le tableau pour publication - avant la mise en forme   Caputre d'écran du tableau une fois les étapes précédentes effectuées.    Répéter les étapes ci-dessus avec le tableau croisé dynamique généré lors du pré laboratoire pour la variable Obésité .  Ces tableaux sont appelés tableau de fréquences de la variable étudiée. S'il n'y a que la colonne des effectifs, on parle alors de tableau de fréquences absolues et s'il n'y a que la colonne des pourcentage, on dit tableau de fréquences relatives .  Todo Parler du gras, italique ou autre    Graphiques  Un tableau est une excellente manière de rassembler l'information d'une variable qualitative, mais il est souvent autant sinon davantage utile d'illustrer la répartition des unités statistiques de manière graphique. Pour une variable qualitative, il existe deux types de graphiques principaux: le diagramme circulaire et le diagramme à bandes. Dans le second cas, les bandes peuvent être horizontales ou verticales, mais si la variable est ordinale, on préfère le diagramme à bandes verticales.  On construit le diagramme circulaire associé à la variable Atteint . On choisit de faire la répartition en pourcentage des effectifs.  Dans le tableau de fréquence, sélectionner les modalités de la variable et, en maintenant la touche Ctrl enfoncée, les effectifs relatifs.  Sous l'ongle Insertion , cliquer sur le bouton correspondant au diagramme circulaire dans le ruban. Voir la figure ci-dessous.  Sous Secteur 2D , cliquer sur le premier type de graphique à gauche, appellé Secteur . Déplacer le graphique au besoin.  La figure illustre les étapes précédentes sous forme d'animation.  On peut sélectionner un style prédéfini sous l'onglet création de graphique (apparaissant lorsque le graphique est sélectionné, voir la figure ) ou encore paufiner les éléments graphiques selon ce qui est attendu. Toutefois, en sciences, l'allure esthétique du graphique ne devrait pas prendre le dessus sur l'information transmise. On préférera un style relativement neutre sans trop de fioritures. Le graphique circulaire doit néanmoins contenir les éléments suivants:  Un titre représentatif, typiquement de la forme Répartition d'un échantillon (ou d'une population) de [unités statistiques] selon [la variable], [le lieu], [période ou date] ;  Une légende, pour distinguer les différents secteurs;  Les étiquettes correspondant aux pourcentages ou au nombre d'effectifs sur le graphique, pour une information précise;  La source, lorsque pertinent, dans le bas du graphique.  Si l'un ou plusieurs de ces éléments est manquant, on peut, lorsque le graphique est sélectionné, cliquer sur l'onglet Création de graphique et cliquer sur le bouton Ajouter un élément graphique . Il est aussi possible de cliquer sur le petit symbole de croix en haut à droite du graphique. La figure illustre ces deux options.     L'insertion d'un diagramme circulaire   Animation des étapes menant à l'insertion d'un diagrame circulaire.     Les styles prédéfinis d'Excel   Capture d'écran de l'endroit où l'on retrouve les styles prédéfinis dans le ruban     Ajout d'un élément graphique: deux options    Capture d'écran de l'endroit dans le ruban où l'on peut ajouter une élément graphique.    Capture d'écran de l'endroit dans près du graphique où l'on peut ajouter une élément graphique.     On construit maintenant le diagramme à bandes pour la variable Obésité . Comme la variable est quantitative à échelle ordinale, on choisit les bandes verticales. Cette fois, on choisit d'utiliser les effectifs absolues.  Dans le tableau de fréquence, sélectionner les modalités de la variable et, en maintenant la touche Ctrl enfoncée, les effectifs absolus.  Sous l'ongle Insertion , cliquer sur le bouton correspondant à l'histogramme. Voir la figure ci-dessous.  Sous Histogramme 2D , cliquer sur le premier type de graphique à gauche, appellé Histogramme groupé , pour un diagramme à bandes verticales.  Sous Barres 2D , cliquer sur le premier type de graphique à gauche, appellé Barres groupées , pour un diagramme à bandes horizontales.   On peut sélectionner un style prédéfini ou encore paufiner les éléments graphiques selon ce qui est attendu. Toutefois, en sciences, l'allure esthétique du graphique ne devrait pas prendre le dessus sur l'information transmise. On préférera un style relativement neutre sans trop de fioritures. Le diagramme à bandes doit néanmoins contenir les éléments suivants:  Un titre représentatif, typiquement de la forme Répartition d'un échantillon (ou d'une population) de [unités statistiques] selon [la variable], [le lieu], [période ou date] ;  Des titres significatifs pour les axes;  Le nom des modalités identifié clairement, sous l'axe (pour un graphique à bandes verticales), à la gauche (pour un graphique à bandes horizontales) ou encore dans une légende (pour les deux types de graphiques).  ToDo L'axe des effectifs comprend une graduation bien faite, avec la coupure indiquée clairement le cas échéant.  Les étiquettes correspondant aux pourcentages ou au nombre d'effectifs sur le graphique, pour une information précise.  La source, lorsque pertinent, dans le bas du graphique.  Si l'un ou plusieurs de ces éléments est manquant, on peut, lorsque le graphique est sélectionné, cliquer sur l'onglet Création de graphique et cliquer sur le bouton Ajouter un élément graphique . Il est aussi possible de cliquer sur le petit symbole de croix en haut à droite du graphique. La figure illustre ces deux options.     Insertion d'un diagramme à bandes   Capture d'écran de l'emplacement pour ajouter un diagramme à bandes     ToDo quand ce qui précède sera terminé   Le résultat attendu du diagramme à bandes vertical    "
},
{
  "id": "sec-Laboratoire_Varqual-3-5",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#sec-Laboratoire_Varqual-3-5",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Création du tableau pour présentation - première méthode   Animation de la copie des données du tableau croisé dynamique vers un tableau pour présentation - première méthode   "
},
{
  "id": "fig-TCDaformat_anim2",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#fig-TCDaformat_anim2",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Création du tableau pour présentation - deuxième méthode   Animation de la copie des données du tableau croisé dynamique vers un tableau pour présentation - deuxième méthode   "
},
{
  "id": "li-tableau",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#li-tableau",
  "type": "Liste",
  "number": "2.2.3",
  "title": "Mise en forme du tableau pour publication",
  "body": " Mise en forme du tableau pour publication   On ajoute une colonne appelée Atteinte du diabète à gauche dont les lignes sont, du haut vers le bas : Non , Oui , Total .  On ajoute le titre des autres colonnes, de gauche à droite : Nombre de femmes , Pourcentage de femmes . Élargir les colonnes de manière à ce que le tout soit lisible.  Dans la dernière ligne, on a le total du nombre de femmes sous chaque colonne. Sous la colonne Pourcentage de femmes à la ligne Total , on s'assure qu'il est toujours écrit , même si les nombres dans la colonne pourraient ne pas additionner à en raison d'erreur d'arrondi. Dans de tel cas, on l'indiquera sous le tableau à l'aide de la note : En raison de l'arrondissement des pourcentage, le total pourrait ne pas être exactement de .  Sous le tableau, on inscrit la source des données. Dans le cas de cette étude, la source est donnée dans . La mention Source : National Institute of Diabetes and Digestive and Kidney Diseases (USA) doit apparaitre sous chacun des tableaux et graphiques créés pour publication.  On titre le tableau. Le titre aura généralement la forme ToDo  "
},
{
  "id": "ssec-MiseEnFormeTableau-4",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#ssec-MiseEnFormeTableau-4",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " Le tableau pour publication - avant la mise en forme   Caputre d'écran du tableau une fois les étapes précédentes effectuées.   "
},
{
  "id": "ssec-MiseEnFormeTableau-6",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#ssec-MiseEnFormeTableau-6",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "tableau de fréquences tableau de fréquences absolues tableau de fréquences relatives "
},
{
  "id": "fig-graphqualsansinfos",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#fig-graphqualsansinfos",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " L'insertion d'un diagramme circulaire   Animation des étapes menant à l'insertion d'un diagrame circulaire.   "
},
{
  "id": "fig-stylespredefinis",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#fig-stylespredefinis",
  "type": "Figure",
  "number": "2.2.6",
  "title": "",
  "body": " Les styles prédéfinis d'Excel   Capture d'écran de l'endroit où l'on retrouve les styles prédéfinis dans le ruban   "
},
{
  "id": "fig-elementgraphique",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#fig-elementgraphique",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": " Ajout d'un élément graphique: deux options    Capture d'écran de l'endroit dans le ruban où l'on peut ajouter une élément graphique.    Capture d'écran de l'endroit dans près du graphique où l'on peut ajouter une élément graphique.    "
},
{
  "id": "fig-graphqualbandes",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#fig-graphqualbandes",
  "type": "Figure",
  "number": "2.2.8",
  "title": "",
  "body": " Insertion d'un diagramme à bandes   Capture d'écran de l'emplacement pour ajouter un diagramme à bandes   "
},
{
  "id": "sec-Laboratoire_Varqual-5-9",
  "level": "2",
  "url": "sec-Laboratoire_Varqual.html#sec-Laboratoire_Varqual-5-9",
  "type": "Figure",
  "number": "2.2.9",
  "title": "",
  "body": " ToDo quand ce qui précède sera terminé   Le résultat attendu du diagramme à bandes vertical  "
},
{
  "id": "sec-Postlab-Varqual",
  "level": "1",
  "url": "sec-Postlab-Varqual.html",
  "type": "Section",
  "number": "2.3",
  "title": "Réflexions",
  "body": " Réflexions  L'information transmise par les tableaux de fréquences et les graphiques n'est que la première partie d'une série de renseignements qui permettront de bien caractériser la population étudiée et éventuellement de faire des inférences et valider ou infirmer les hypothèses de recherche. Les questions qui suivent servent à regarder les problèmes à tirer des conclusions à partir d'une analyse sommaire des données comme la lecture de tableaux et de graphiques. Les prochains laboratoires viendront soutirer une multitude de détails statistiques à partir des données et permettront de combler certaines lacunes soulevées ci-dessous.   Travail à faire après le laboratoire    Examiner les variable Atteint et Obésité .  Formuler des conclusions  Poser un regard critique sur les données.  ToDo Formuler des hypothèses de recherche.    En deux courtes phrases, résumer la situation du diabète et du niveau d'obésité chez la population de femmes Pimas  Selon la National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) https:\/\/www.niddk.nih.gov\/health-information\/health-statistics\/diabetes-statistics#factsstats , il y a 8.8% des femmes américaines qui sont atteintes du diabètes (données de 2017-2020). Selon l'American Diabetes Association https:\/\/ictnews.org\/archive\/mexico-vs-arizona-pima-indians , il y a 6.9% des femmes mexicaines aussi d'origine pima qui le sont (données de 2006). En supposant que toutes ces valeurs et celles de la population étudiée sont restées les mêmes au fil du temps, quels constats faire au sujet des femmes pima vivant en Arizona à la lumière de ces informations?    Construire le diagramme circulaire pour aller avec la variable Obésité . Que dire du résultat?    Est-il correct de dire que les femmes pimas vivant en Arizona ont un niveau d'obésité moyen d'environ ? Expliquer.   Après avoir étudié les variables qualitatives, formuler deux hypothèses en lien avec ces variables et les autres.   "
},
{
  "id": "ws-Reflexion_Varqual-2",
  "level": "2",
  "url": "sec-Postlab-Varqual.html#ws-Reflexion_Varqual-2",
  "type": "Objectifs",
  "number": "2.3",
  "title": "",
  "body": "  Examiner les variable Atteint et Obésité .  Formuler des conclusions  Poser un regard critique sur les données.  ToDo Formuler des hypothèses de recherche.   "
},
{
  "id": "ws-Reflexion_Varqual-3",
  "level": "2",
  "url": "sec-Postlab-Varqual.html#ws-Reflexion_Varqual-3",
  "type": "Activité",
  "number": "2.3.1",
  "title": "",
  "body": "En deux courtes phrases, résumer la situation du diabète et du niveau d'obésité chez la population de femmes Pimas "
},
{
  "id": "ws-Reflexion_Varqual-4",
  "level": "2",
  "url": "sec-Postlab-Varqual.html#ws-Reflexion_Varqual-4",
  "type": "Activité",
  "number": "2.3.2",
  "title": "",
  "body": "Selon la National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) https:\/\/www.niddk.nih.gov\/health-information\/health-statistics\/diabetes-statistics#factsstats , il y a 8.8% des femmes américaines qui sont atteintes du diabètes (données de 2017-2020). Selon l'American Diabetes Association https:\/\/ictnews.org\/archive\/mexico-vs-arizona-pima-indians , il y a 6.9% des femmes mexicaines aussi d'origine pima qui le sont (données de 2006). En supposant que toutes ces valeurs et celles de la population étudiée sont restées les mêmes au fil du temps, quels constats faire au sujet des femmes pima vivant en Arizona à la lumière de ces informations?  "
},
{
  "id": "ws-Reflexion_Varqual-5",
  "level": "2",
  "url": "sec-Postlab-Varqual.html#ws-Reflexion_Varqual-5",
  "type": "Activité",
  "number": "2.3.3",
  "title": "",
  "body": " Construire le diagramme circulaire pour aller avec la variable Obésité . Que dire du résultat?  "
},
{
  "id": "ws-Reflexion_Varqual-6",
  "level": "2",
  "url": "sec-Postlab-Varqual.html#ws-Reflexion_Varqual-6",
  "type": "Activité",
  "number": "2.3.4",
  "title": "",
  "body": " Est-il correct de dire que les femmes pimas vivant en Arizona ont un niveau d'obésité moyen d'environ ? Expliquer.  "
},
{
  "id": "ws-Reflexion_Varqual-7",
  "level": "2",
  "url": "sec-Postlab-Varqual.html#ws-Reflexion_Varqual-7",
  "type": "Activité",
  "number": "2.3.5",
  "title": "",
  "body": "Après avoir étudié les variables qualitatives, formuler deux hypothèses en lien avec ces variables et les autres. "
},
{
  "id": "sec-Prelab_Varquant",
  "level": "1",
  "url": "sec-Prelab_Varquant.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prélab",
  "body": " Prélab  Les variables quantitatives sont un type de variables pour lesquelles les modalités sont des nombres. On retrouvera souvent parmi ces variables le temps, la distance, le salaire, le nombre d'enfants, etc. Elles se déclinent en deux catégories, soit les variables quantitatives discrètes et continues. Pour synthétiser visuellement l'information d'une variable quantitative, on utilise principalement un tableau de fréquences ainsi qu'un diagramme à bâtons, un histogramme ou un polygone de fréquences.   Travail à faire avant le cours    Créer le tableau croisé dynamique d'une variable quantitative discrète  Construire un diagramme à bâtons     On continue de travailler à l'aide de la base de données du laboratoire d' introduction . Le but de ce prélab est d'utiliser les connaissances et outils acquis dans les deux premiers laboratoires afin de poursuivre l'étude des mesures diagnostiques des femmes d'origine pima.    Dans le fichier Excel du laboratoire, créer le tableau croisé dynamique des femmes d'origine pima selon le Nombre de grossesses en suivant les étapes ci-dessous.   Ajouter une nouvelle feuille de calcul intitulée Étude Nombre de grossesses . Déplacer cette feuille en dernière position si Excel ne le fait pas automatiquement.  Dans cette feuille, créer le tableau croisé dynamique de la répartition des 768 femmes d'origine pima selon le nombre de grossesses.  Couper le lien avec le tableau croisé dynamique et faire la mise en forme du tableau de fréquences en respectant toutes les normes de présentation abordées lors des deux laboratoires précédents.     Puisque la variable Nombre de grossesses est quantitative discrète, créer un diagramme à bâtons des femmes d'origine pima selon le Nombre de grossesses en suivant les étapes ci-dessous.   Dans la feuille de calcul Étude Nombre de grossesses , créer le diagramme à bâtons en sélectionnant l'icône Insérer un histogramme ou un graphique à barres à partir de l'onglet Insertion . Sélectionner la première option de graphique proposée par Excel.  Faire la mise en forme du diagramme en respectant toutes les normes de présentation abordées lors des deux laboratoires précédents. Noter que dans la zone de saisie de Largeur des intervalles , taper 500% pour avoir la largeur maximale entre les bâtons et pour les amincir le plus possible.     Détailler les faits saillants du diagramme à bâtons fait à l'exercice .  À la lumière du graphique fait à l'exercice , quelles sont les limites d'un diagramme à bâtons?     Considérer le graphique suivant. Déceler tous les problèmes avec ce graphique.    Histogramme de la répartition des hommes québécois de 20 ans et plus en fonction de leur taille en 2005   Histogramme de la répartition des hommes québécois de 20 ans et plus en fonction de leur taille en 2005       "
},
{
  "id": "ws-Prelab_Varquant-2",
  "level": "2",
  "url": "sec-Prelab_Varquant.html#ws-Prelab_Varquant-2",
  "type": "Objectifs",
  "number": "3.1",
  "title": "",
  "body": "  Créer le tableau croisé dynamique d'une variable quantitative discrète  Construire un diagramme à bâtons   "
},
{
  "id": "ws-Prelab_Varquant-4-1",
  "level": "2",
  "url": "sec-Prelab_Varquant.html#ws-Prelab_Varquant-4-1",
  "type": "Activité",
  "number": "3.1.1",
  "title": "",
  "body": "Dans le fichier Excel du laboratoire, créer le tableau croisé dynamique des femmes d'origine pima selon le Nombre de grossesses en suivant les étapes ci-dessous.   Ajouter une nouvelle feuille de calcul intitulée Étude Nombre de grossesses . Déplacer cette feuille en dernière position si Excel ne le fait pas automatiquement.  Dans cette feuille, créer le tableau croisé dynamique de la répartition des 768 femmes d'origine pima selon le nombre de grossesses.  Couper le lien avec le tableau croisé dynamique et faire la mise en forme du tableau de fréquences en respectant toutes les normes de présentation abordées lors des deux laboratoires précédents.    "
},
{
  "id": "PrelabVarquant_2",
  "level": "2",
  "url": "sec-Prelab_Varquant.html#PrelabVarquant_2",
  "type": "Activité",
  "number": "3.1.2",
  "title": "",
  "body": "Puisque la variable Nombre de grossesses est quantitative discrète, créer un diagramme à bâtons des femmes d'origine pima selon le Nombre de grossesses en suivant les étapes ci-dessous.   Dans la feuille de calcul Étude Nombre de grossesses , créer le diagramme à bâtons en sélectionnant l'icône Insérer un histogramme ou un graphique à barres à partir de l'onglet Insertion . Sélectionner la première option de graphique proposée par Excel.  Faire la mise en forme du diagramme en respectant toutes les normes de présentation abordées lors des deux laboratoires précédents. Noter que dans la zone de saisie de Largeur des intervalles , taper 500% pour avoir la largeur maximale entre les bâtons et pour les amincir le plus possible.    "
},
{
  "id": "ws-Prelab_Varquant-4-3",
  "level": "2",
  "url": "sec-Prelab_Varquant.html#ws-Prelab_Varquant-4-3",
  "type": "Activité",
  "number": "3.1.3",
  "title": "",
  "body": "Détailler les faits saillants du diagramme à bâtons fait à l'exercice . "
},
{
  "id": "ws-Prelab_Varquant-4-4",
  "level": "2",
  "url": "sec-Prelab_Varquant.html#ws-Prelab_Varquant-4-4",
  "type": "Activité",
  "number": "3.1.4",
  "title": "",
  "body": "À la lumière du graphique fait à l'exercice , quelles sont les limites d'un diagramme à bâtons? "
},
{
  "id": "ws-Prelab_Varquant-5-1",
  "level": "2",
  "url": "sec-Prelab_Varquant.html#ws-Prelab_Varquant-5-1",
  "type": "Activité",
  "number": "3.1.5",
  "title": "",
  "body": " Considérer le graphique suivant. Déceler tous les problèmes avec ce graphique.    Histogramme de la répartition des hommes québécois de 20 ans et plus en fonction de leur taille en 2005   Histogramme de la répartition des hommes québécois de 20 ans et plus en fonction de leur taille en 2005    "
},
{
  "id": "sec-Laboratoire_Varquant",
  "level": "1",
  "url": "sec-Laboratoire_Varquant.html",
  "type": "Section",
  "number": "3.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Dans ce laboratoire, l'objectif est de représenter la répartition de femmes d’origine pima vivant en Arizona selon leur indice de masse corporelle, ainsi que la répartition de femmes d'origine pima vivant en Arizona par présence de diabète, en fonction de l'indice de masse corporelle. Il s'agit donc de présenter les étapes de l'étude d'une variable quantitative continue, ainsi que celles de l'étude simultanée d'une variable quantitative continue avec une variable qualitative.  On introduit la notion de filtrage de données aberrantes, la création de classes pour des variables quantitatives continues, la création d'un histogramme et d'un polygone de fréquences, la mise en forme appropriée pour ces deux graphiques, ainsi que le calcul de mesures descriptives pour des variables quantitatives.  Pour cela, on utilise les variables IMC et Atteint .    L'étude d'une variable quantitative continue  Les étapes de l'analyse d'une variable quantitative continue sont les suivantes : filtrage de données aberrantes, création de classes pour les valeurs de la variable, groupement des données lors de la création du tableau croisé dynamique, mise en forme de ce tableau croisé dynamique, création d'un graphique approprié, tel qu'un histogramme ou un polygone de fréquences, calcul de mesures descriptives, et enfin, interprétation des résultats. Les étapes qui suivent mènent à l'analyse de l'indice de masse corporelle.   Filtrer les valeurs aberrantes du tableau principal   Avant de générer un tableau croisé dynamique impliquant une variable quantitative, il est important d'effectuer une enquête préliminaire des données dans le but de filtrer des données aberrantes si nécessaire.  En appliquant un filtre à la variable IMC , on constate que certaines femmes ont enregistré un indice de masse corporelle de 0. Cette valeur étant impossible, il s'agit donc d'une valeur aberrante. On choisit de filtrer ces valeurs et de les exclure lors de la création du tableau de fréquences, de l'histogramme, ainsi que des calculs des mesures statistiques, car ces dernières pourraient fausser les interprétations. Les étapes suivantes mènent au filtrage du tableau principal Échantillon .     Ouvrir le classeur Données_Diabète.xlsx sauvegardé avec le travail fait aux laboratoires 1 et 2.  Dans le feuille Données , cliquer sur l'icône du filtre à droite du titre de la colonne IMC (voir la ).    Icone de filtre à droite du titre de la colonne IMC   Icône de filtre à droite du titre de la colonne IMC    Un menu déroulant s'affiche (voir la ).   Décocher le crochet à gauche de la valeur (voir la ). Cliquer sur OK .     Filtrage des valeurs nulles de l'IMC   Filtrage des valeurs nulles de l'IMC        Filtrer des données  Ce filtrage ne s'applique que sur les données du tableau principal Échantillon et non sur les tableaux croisés dynamiques.     Tableau croisé dynamique d'une variable quantitative continue   Pour réaliser l'étude d'une variable quantitative continue, il est nécessaire de construire un tableau de fréquences en regroupant les valeurs en classes, car il y a trop de valeurs différentes pour permettre une synthèse efficace. Le tableau croisé dynamique généré par Excel n’est pas adéquat, car il ne regroupe pas les valeurs des variables par défaut. On commence par rappeler les étapes de création d'un tableau croisé dynamique, soit celui de la répartition d'un échantillon de femmes d'origine pima vivant en Arizona selon l'indice de masse corporelle.      Dans le classeur Excel, ajouter une nouvelle feuille de calcul intitulé Étude IMC . Déplacer cette feuille en dernière position si Excel ne le fait pas automatiquement.   Sélectionner la cellule B3 dans cette feuille de calcul.  Insérer un tableau croisé dynamique vide tel que vu à la .  Glisser et déposer la variable IMC dans la zone de saisie Lignes , ainsi que deux fois dans la zone de saisie Valeurs (voir la ).     Glissement de la variable IMC dans les zones de saisie Lignes et Valeurs   Glissement de la variable IMC dans les zones de saisie Lignes et Valeurs    Dans la zone de saisie Valeurs , cliquer sur la flèche du menu déroulant du premier onglet ( Nombre de IMC ), puis sélectionner l'option Paramètres des champs de valeurs pour modifier le calcul. On veut le nombre de femmes pour la deuxième colonne (et non la somme comme Excel fait par défaut). Pour Nombre de IMC 2 , on veut le pourcentage de femmes (voir la pour référence).    Au final, le tableau croisé dynamique généré doit ressembler à la .     Les trois colonnes du tableau croisé dynamique final de la répartition des femmes selon l'indice de masse corporelle   Les trois colonnes du tableau croisé dynamique final de la répartition des femmes selon l'indice de masse corporelle       La première ligne du tableau croisé dynamique révèle que onze femmes ont enregistré un indice de masse corporelle de 0. Il est possible de constater que le tableau croisé dynamique n'a pas filtré les données contenant une valeur nulle comme le tableau principal Échantillon l'a fait. Cette valeur étant impossible, il s'agit donc d'une valeur aberrante. On choisit d'exclure ces données lors de la création du tableau de fréquences, de l'histogramme, ainsi que des calculs des mesures statistiques, car ces dernières pourraient fausser les interprétations.    Filtrer les valeurs aberrantes d'un tableau croisé dynamique   Même si l'on a filtré les valeurs aberrantes nulles du tableau principal, ces dernières apparaissent tout de même dans le tableau croisé dynamique. Il existe plusieurs façons de les exclure. On choisit de le faire avant de regrouper les valeurs en classes.      Dans une cellule de la première colonne du tableau croisé dynamique généré à la , cliquer avec le bouton droit de la souris. Un menu contextuel s'affiche (voir la ).     Affichage du menu contextuel de la première colonne du tableau croisé dynamique   Affichage du menu contextuel de la première colonne du tableau croisé dynamique     On veut exclure les valeurs de des étiquettes de valeurs. Il faut donc appliquer un filtre sur les étiquettes.  Sélectionner l'option Filtres s'appliquant aux étiquettes suivi de l'option Est différent de (voir la ).     Filtrage s'appliquant aux étiquettes   Filtrage s'appliquant aux étiquettes     Une boîte de dialogue s'affiche. Il faut choisir d'afficher les éléments pour lesquels l'étiquette est différent de . Ainsi, dans la zone de saisie à droite de l'option est différent de , il faut taper la valeur 0 (voir la ) et cliquer sur OK .     Afficher les éléments pour lesquels l'étiquette est différent de   Afficher les éléments pour lesquels l'étiquette est différent de 0       Le tableau croisé dynamique résultat exclut désormais les valeurs pour lesquelles l'IMC vaut 0.    Créer des classes    Comme présenté, le tableau croisé dynamique de la n'est pas optimal pour l'analyse de la répartition des femmes selon l'indice de masse corporelle. Un regroupement des données en classes est nécessaire. Avant de procéder, il est important de déterminer le nombre optimal de classes et leur amplitude. Les choix par défaut d'Excel ne sont pas toujours adéquats. Il est donc recommandé de documenter clairement les décisions prises dans la feuille Excel afin d'en conserver une trace. Les étapes suivantes mènent au groupement des données de la variable IMC .   Choix d'amplitude     Dans la cellule G3 de la feuille de calcul Étude IMC , taper le titre Calcul de l'amplitude (voir la ).  Taper Nombre de classes dans la cellule G5 , Étendue de l'IMC dans la cellule G6 , Valeur minimale de l'IMC en G7 , Amplitude théorique en G8 , et finalement, Amplitude choisie dans la cellule G9 (voir la ).     Section pour documenter le calcul de l'amplitude   Section pour documenter le calcul de l'amplitude      On souhaite calculer le nombre théorique de classes à l'aide de la formule de Sturges, soit , où est le nombre de données.   Dans Excel, on peut insérer des fonctions en saisissant directement le symbole = dans une cellule, puis en tapant manuellement la fonction. ATTENTION : il ne faut jamais oublier le symboler = avant d'insérer une fonction.    Il est également possible d'insérer une fonction à partir de l'onglet Formules (voir la ), puis en cliquant sur l'icône Insérer une fonction .   Insérer une fonction à partir de l'onglet Formules   Insérer une fonction à partir de l'onglet Formules    En cliquant sur l'icône Insérer une fonction , il est d'explorer les différentes fonctions disponibles comme les fonctions statistiques (voir la ).     Exploration des fonctions statistiques d'Excel   Exploration des fonctions statistiques d'Excel      Puisque l'on a filtré certaines valeurs, on ne peut pas utiliser les fonctions de base d'Excel comme MIN (renvoie la valeur minimale), MAX (renvoie la valeur maximale), NB (renvoie le nombre de données), etc. Il faut utiliser la fonction SOUS.TOTAL .  La fonction SOUS.TOTAL d'Excel permet de calculer certaines mesures statistiques (pas toutes) sur un sous-ensemble de données lorsqu'un filtre a été appliqué sur une variable (comme fait à la ). Cela signifie qu'Excel peut faire certains calculs sur les données filtrées.  Dans la cellule H5 , taper la formule =1+10\/3*LOG(SOUS.TOTAL(2;IMC)) (voir la ).  La formule Excel LOG renvoie le logarithme de l'argument qui se trouve dans les parenthèses. Dans des formules Excel, on peut faire référence à des adresses de cellules ou au nom d'une plage de données. Il ne faut pas oublier le symbole * pour le produit.  Dans la fonction SOUS.TOTAL , le chiffre fait référence au calcul du nombre de données. Les nombres à spécifie la fonction à utiliser pour calculer le sous-total. Le deuxième paramètre, soit IMC , fait référence au nom de la plage de données dont on souhaite calculer le sous-total. La fonction Excel NB renvoie le nombre de données de la plage de cellules sélectionnées. Si l'on mettait tout simplement =NB(IMC) , ceci renverrait la valeur 768, soit le nombre total de cellules non vides de la variable IMC . Cependant, on veut exclure les femmes qui ont eu une valeur erronée de 0 comme indice de masse corporelle. La fonction SOUS.TOTAL permet d'exclure ces valeurs.     Formule pour déterminer le nombre théorique de classes   Formule pour déterminer le nombre théorique de classes        Une fois la formule rentrée, taper Enter . On obtient environ .     Nombre théorique de classes selon la formule de Sturges   Nombre théorique de classes selon la formule de Sturges       Dans la cellule H6 , on souhaite déterminer l'étendue de l'indice de masse corporelle (valeur maximale moins la valeur minimale). Taper la formule =SOUS.TOTAL(4;IMC)-SOUS.TOTAL(5;IMC) (voir la ).  La formule Excel SOUS.TOTAL(4;IMC) renvoie la plus grande valeur parmi la liste de valeurs (le maximum). La fonction Excel SOUS.TOTAL(5;IMC) renvoie la plus petite valeur parmi une liste de valeurs (le minimum).  Si l'on met la formule =MIN(IMC) , ceci nous renvoie la valeur 0, le minimum de la série statistique non filtrée de l'indice de masse corporelle. Cependant, on veut exclure les femmes qui ont eu une valeur erronée de 0 comme indice de masse corporelle. On recherche plutôt la deuxième plus petite valeur.  Si l'on met la formule =MAX(IMC) , on obtient la même valeur que =SOUS.TOTAL(4;IMC) puisqu'aucune valeur dans l'extrémité supérieure n'a été exclue.     Formule pour déterminer l'étendue de l'IMC   Formule pour déterminer l'étendue de l'IMC     L'étendue vaut 48,9.     Dans la cellule H7 , taper la formule =SOUS.TOTAL(5;IMC) (voir la ) pour déterminer la valeur minimale des données filtrées de l'indice de masse corporelle. Il est essentiel de connaître la valeur minimale pour s'assurer de l'inclure lorsque l'on regroupe les valeurs.     Formule pour déterminer la valeur minimale de l'IMC (différente de 0)   Formule pour déterminer la valeur minimale de l'IMC (différente de 0)     La deuxième valeur la plus petite est 18,2.    On veut déterminer l'amplitude théorique de chaque classe, soit l'étendue divisée par le nombre théorique de classes. Dans la cellule H8 , taper la formule =H6\/H5 (voir la ). Dans des formules Excel, on peut faire référence à des cellules. La cellule H6 correspond à l'étendue et la cellule H5 correspond au nombre théorique de classes.     Formule pour déterminer l'amplitude théorique des classes   Formule pour déterminer l'amplitude théorique des classes      On obtient une amplitude théorique d'environ 4,6. Ceci n'est pas un nombre entier. On choisit 5. (voir la ).     Détermination de l'amplitude choisie   Détermination de l'amplitude choisie       Étapes pour déterminer l'amplitude des classes   Étapes pour déterminer l'amplitude des classes            Grouper les valeurs en classes   Une fois l'amplitude des classes et la valeur de début déterminées, il est possible de forcer le regroupement des données selon les besoins.    Afficher les élèments sans données  Lorsque l'on groupe les valeurs d'un tableau croisé dynamique, il est bien de s'assurer d'afficher les éléments sans données, car sinon, il se peut qu'un intervalle vide soit manquant sans qu'on s'en aperçoive.   Les étapes suivantes mènent à l'affichage des classes sans données.     Dans une cellule de la première colonne du tableau croisé dynamique de l'indice de masse corporelle, cliquer sur le bouton droit de la souris (voir la ). Un menu déroulant s'affiche.     Menu déroulant de la première colonne d'un tableau croisé dynamique   Menu déroulant de la première colonne d'un tableau croisé dynamique     Cliquer sur l'option Paramètres de champ... (voir la ).   Une boîte de dialogue s'affiche (voir la ). Cliquer sur l'onglet Disposition et impression . Cocher ensuite l'option Afficher les éléments sans données .     La boîte de dialogue pour afficher les éléments sans données   La boîte de dialogue pour afficher les éléments sans données    En cochant cette option, on s'assure que lorsque l'on va grouper les valeurs de l'indice de masse corporelle en classes, Excel va afficher les classes qui ne contiennent aucun élément.   Cliquer sur OK .   Dans une cellule de la première colonne du tableau croisé dynamique, cliquer à nouveau sur le bouton droit de la souris (voir la ). Un menu déroulant s'affiche.     Menu déroulant de la première colonne d'un tableau croisé dynamique   Menu déroulant de la première colonne d'un tableau croisé dynamique     Cliquer sur l'option Grouper .   Une boîte de dialogue s'affiche permettant à l'utilisateur de choisir un groupement approprié pour les données (voir la ). Excel propose une borne inférieure (soit , la valeur minimale de la variable IMC , une borne supérieure (soit , la valeur maximale de l'IMC) et une amplitude pour les classes (soit ).  Taper comme valeur de début au lieu du choix suggéré d'Excel de et taper comme amplitude au lieu de 10 (voir la )     La boîte de dialogue pour grouper les données d'un tableau croisé dynamique, ainsi que le choix de 15 comme valeur minimale et 5 comme amplitude des classes   La boîte de dialogue pour grouper les données d'un tableau croisé dynamique, ainsi que le choix de 15 comme valeur minimale et 5 comme amplitude des classes    En choisissant 15 comme valeur minimale de la première classe, on s'assure d'inclure la valeur minimale de 18,2.   Cliquer sur OK . Le tableau croisé dynamique résultant groupe les valeurs de la variable IMC en classe d'amplitude valant (voir la ). Puisque l'on a appliqué un filtre excluant les femmes enregistrant une valeur erronée de , le tableau commence à 15.     Tableau croisé dynamique commençant à 15 avec des classes d'amplitude 5   Tableau croisé dynamique commençant à 15 avec des classes d'amplitude 5    On peut remarquer que les trois dernières classes (excluant celle de ), celles de à , à et à , contiennent un très faible pourcentage de données. Dans ce cas, il est conseiller de créer une classe ouverte lorsque les premières ou les dernières classes ont peu de données (moins de chacune) afin de faciliter l'interprétation des données.    Dans une cellule de la première colonne du tableau croisé dynamique, cliquer sur le bouton droit de la souris. Sélectionner l'option Grouper à nouveau. Taper comme valeur de fin, soit la limite supérieure de la première classe ouverte (voir la ).     Choix de 50 comme fin pour créer une classe ouverte   Choix de 50 comme fin pour créer une classe ouverte    Lorsque vient le temps de construire l'histogramme correspondant à ce tableau, on ne peut pas avoir une classe ouverte. Ainsi, on ferme la dernière classe en lui donnant la même amplitude que les autres classes. Ceci évite d'avoir beaucoup de bandes avec peu de données. Il ne faut cependant pas oublier d'écrire une note pour informer le lecteur de ce choix.  Cliquer sur OK . Le tableau croisé dynamique résultant est présenté à la .     Tableau croisé dynamique finale pour la variable IMC   Tableau croisé dynamique finale pour la variable IMC     Faire la mise en forme du tableau de fréquences correspondant à la répartition de femmes selon l'indice de masse corporelle. La version finale du tableau de fréquences est présentée à la (référence aux sections de JS).   Version définitive du tableau de fréquences de la variable IMC   Version définitive du tableau de fréquences de la variable IMC            Créer un histogramme   Pour représenter la répartition d'un échantillon de femmes en fonction de l'indice de masse corporelle, soit une variable quantitative continue, l'histogramme est un choix pertinent de graphique lorsque le nombre d'unités statistiques est important.  Dans le tableau de fréquences de la , la dernière classe est désormais fermée de 50 à 55. Cependant, trois données se situent entre 55 et 60, et une autre entre 65 et 70. Cela réduit légèrement le nombre de classes par rapport aux prévisions faites à la . Afin d'éviter un histogramme avec plusieurs bandes aux extrémités contenant peu de données, le graphique à construire devrait respecter les choix effectués du tableau de fréquences correspondant.  Les étapes qui suivent mènent à la construction de l'histogramme représentant la répartition de l'échantillon de femmes d'origine pima selon leur indice de masse corporelle.     Sélectionner la plage de données représentant les fréquences relatives de l'indice de masse corporelle, soit la plage de cellules D5:D12 (voir la ). Ne pas sélectionner les classes de l'indice de masse corporelle, ni les titres des colonnes, ni les données de la ligne Total .    Sélection des fréquences relatives de l'IMC   Sélection des fréquences relatives de l'IMC        Copier la plage sélectionnée et coller ces valeurs dans la cellule H19 (voir la ).     Ajouter une classe fictive nulle avant la première valeur et après la dernière valeur ( dans les cellules H18 et H27 ) (voir la ). Cette étape vise à faciliter la mise en forme de l'histogramme et à améliorer son esthétique.     Il faut écrire les bornes inférieures des classes une à la suite de l'autre, commençant par la borne inférieure de la première classe et finissant par la borne supérieure de la dernière. Dans la cellule G19 , écrire la borne inférieure de la première classe, soit . Dans la cellule G20 , écrire la borne inférieure de la deuxième classe, soit . Dans la cellule G21 , écrire (voir la ).     Sélectionner la plage de cellules G19:G21 (voir la ). La plage est encadré d'une bordure verte et un petit carré vert apparaît dans le coin inférieur droit. Approcher le curseur au-dessus du carré vert. Dès qu'une croix noire apparaît, double-cliquer (voir la ).    Séquence de collage des fréquences relatives de l'IMC et inscription des bornes inférieures des classes   Séquences de collage des fréquences relatives de l'IMC et inscription des bornes inférieures des classes      Sélectionner les valeurs des fréquences relatives de la colonne de droite incluant les avant et après, soit la plage de cellules G18:H27 (voir la ).    Sélection des fréquences relatives   Sélection des fréquences relatives       Cliquer sur l'onglet Insertion . Dans le groupe Graphiques , cliquer sur l'icône Insérer un histogramme ou un graphique à barres (voir la ).    Sélection de l'icône Insérer un histogramme ou un graphique à barres   Sélection de l'icône Insérer un histogramme ou un graphique à barres     Dans la section Histogramme 2D , sélectionner la première option (voir la ). Le graphique ci-dessous s'affiche dans la feuille de calcul (voir la )     Graphique créé après la sélection d'insérer un histogramme 2D   Graphique créé après la sélection d'insérer un histogramme 2D     Il est évident que l'allure de ce graphique ne correspond pas à celle d'un histogramme. Il faut effectuer sa mise en forme.   Ajouter un titre au graphique et un titre à chaque axe (voir la et la ).    Ajout de titres   Ajout de titres      Les bandes d'un histogramme doivent être collées. Sur une des bandes, cliquer avec le bouton de droite de la souris et sélectionner l'option Mettre en forme une série de données (voir la ).    Sélection de l'option Mettre en forme une série de données   Sélection de l'option Mettre en forme une série de données      Une boîte de dialogue grise avec des options de séries s'affiche à la droite de la feuille de calcul (voir la ).  À l'option Largeur des intervalles , Excel met par défaut. Pour un histogramme, on veut que la largeur entre les bandes soient de . Effacer et taper (voir la ).    Mettre comme largeur des intervalles entre les bandes au lieu de   Mettre 0% comme largeur des intervalles entre les bandes au lieu de 219%     L'allure des bandes est désormais la suivante (voir la ).     Histogramme avec comme largeur des intervalles   Histogramme avec 0% comme largeur des intervalles       Cliquer avec le bouton de droite sur une des bandes et sélectionner à nouveau l'option Mettre en forme une série de données . Sélectionner le premier icône Remplissage et couleur qui ressemble à un pot de peinture (voir la ). Dans le menu Bordure , il est possible de modifier la couleur des bordures des bandes de l'histogramme. Choisir la couleur noire en trait plein (voir la pour le résultat).     Sélection d'une bordure noire pour les bandes de l'histogramme   Sélection d'une bordure noire pour les bandes de l'histogramme       Bandes de l'histogramme avec une bordure noire   Bandes de l'hitogramme avec une bordure noire      Il faut ajuster les valeurs de l'axe horizontal pour les faire correspondre aux bornes des classes de l'indice de masse corporelle. Cliquer sur une des bandes de l'histogramme avec le bouton de droite de la souris et sélectionner l'option Sélectionner des données... (voir la ).    Sélection de l'option Sélectionner des données...   Sélection de l'option Sélectionner des données      Une boîte de dialogue s'affiche. Sous l'option Étiquettes de l'axe horizontal (abscisse) (menu droit de la boîte), cliquer l'icône Modifier (voir la ).    Sélection de l'icône Modifier   Sélection de l'icône Modifier      Une autre boîte de dialogue s'affiche et permet la sélection d'une plage de données (voir la ).    Boîte de dialogue pour la sélection des étiquettes de l'axe horizontal   Boîte de dialogue pour la sélection des étiquettes de l'axe horizontal      Sélectionner la plage de cellules G19:G27 (voir la ).    Sélection de la plage de cellules G19:G27   Sélection de la plage de cellules G19:G27      Cliquer sur OK deux fois. L'histogramme résultant ressemble à la .    Histogramme avec les bonnes valeurs sur l'axe des abscisses   Histogramme avec les bonnes valeurs sur l'axe des abscisses      Les valeurs des étiquettes des abscisses ne sont pas bien alignées. Il faut les aligner à droite. Cliquer sur une des valeurs de l'abscisse jusqu'à ce que l'entièreté des valeurs soit comprise dans un encadré. Cliquer sur l'onglet Accueil . Dans le groupe Alignement , cliquer sur l'icône Aligner à droite (voir la ).    Sélection de l'option Aligner à droite   Sélection de l'option Aligner à droite     L'histogramme résultant ressemble à la .     Alignement à droite des valeurs de l'axe des abscisses   Alignement à droite des valeurs de l'axe des abscisses      Il est possible d'ajouter les étiquettes des fréquences relatives au-dessus des bandes. Cliquer avec le bouton de droite sur une des bandes de l'histogramme et sélectionner l'option Ajouter des étiquettes de données  .    Sélection de l'option Ajouter des étiquettes de données    Sélection de l'option Ajouter des étiquettes de données     L'histogramme résultant ressemble à la .     Ajout des étiquettes de données   Ajout des étiquettes de données      L'étape finale consiste à mettre la source des données en dessous de l'histogramme (voir la ).    Version définitive de l'histogramme avec la source des données   Version définitive de l'histogramme avec la source des données         Mesures descriptives   Avec Excel, il est possible de calculer les mesures descriptives d'une variable comme les mesures de tendance centrale (moyenne, médiane et mode), les mesures de dispersion (écart type et coefficient de variation) et les mesures de position (quantiles). Pour approfondir l'étude de l'indice de masse corporelle de l'échantillon de femmes d'origine pima, on va calculer et interpréter plusieurs mesures. De plus, on a juger bon de comparer les valeurs des mesures descriptives avec et sans le filtrage des valeurs nulles de l'indice de masse corporelle.   Mesures descriptives sans filtre   On commence par créer un tableau pour reporter toutes les mesures statistiques que l'on va calculer.    Dans la cellule K2 de la feuille de calcul Étude IMC , taper le titre Mesures descriptives de l'indice de masse corporelle d'un échantillon de femmes d'origine pima, Arizona (voir la ).    Titre du tableau de mesures descriptives   Titre du tableau de mesures descriptives     Puisque le titre est long, on va fusionner quelques cellules et le centrer.   Sélection la plage de cellules K2:L3 (voir la ).    Sélection des cellules K2:L3   Sélection des cellules K2:L3      Cliquer sur l'onglet Accueil . Cliquer sur l'icône Alignement et sélectionner l'option Fusionner et centrer ainsi que l'option Renvoyer à la ligne automatiquement (voir la ).    Sélection des options Fusionner et centrer et Renvoyer à la ligne automatiquement   Sélection des options Fusionner et centrer et Renvoyer à la ligne automatiquement      Ajuster la taille des colonnes K et L ainsi que celle des lignes 2 et 3 pour que le titre soit bien visible en entier.  Dans les cellules K4:K12 , taper le nom des mesures descriptives à calculer (voir la ).    Mesures descriptives à calculer   Mesures descriptives à calculer      Mettre une bordure à ce tableau (voir la ).    Bordure au tableau de mesures descriptives   Bordure au tableau de mesures descriptives      Si on ne connaît pas la formule pour la fonction que l'on veut, on peut faire une recherche (voir la et la ).  Pour les fonctions statistiques, les titres des formules sont assez intuitives. Pour le nombre de données, la formule est NB . Dans la cellule L4 , taper =NB(IMC) (voir la ).  On voit maintenant l'avantage d'avoir nommé la variable IMC . Il n'est pas nécessaire de retourner à la feuille de calcul Données et d'aller sélectionner la plage de données avec les valeurs de l'IMC.    Dans la cellule L5 , taper =MIN(IMC) (voir la ).  Sans filtre, on rappelle que le minimum de l'IMC est .    Dans la cellule L6 , taper =MAX(IMC) (voir la ).    Dans la cellule L7 , taper =MOYENNE(IMC) (voir la ).    Dans la cellule L8 , taper =MEDIANE(IMC) (voir la ).    Dans la cellule L9 , taper =MODE.SIMPLE(IMC) (voir la ).    Dans la cellule L10 , taper =ECARTYPE.STANDARD(IMC) (voir la ). La formule ECARTYPE.PEARSON calcule l'écart type de données issues d'une population. La formule ECARTYPE.STANDARD renvoie l'écart type corrigé de données provenant d'un échantillon.    Pour le calcul du coefficient de variation, Excel ne dispose pas de formule intégrée dans son logiciel. Cependant, comme le calcul repose sur la moyenne et l'écart type, il peut être facilement effectuer manuellement. Dans la cellule L11 , taper =L10\/L7 . Il est possible de sélectionner les cellules L10 et L7 au lieu de les taper (voir la ).    Formules pour calculer les différentes mesures descriptives de l'IMC   Formule pour calculer les différentes mesures descriptives de l'IMC        Afficher le coefficient de variation en pourcentage. Sélectionner la cellule L11 . Cliquer sur l'onglet Accueil . Dans le menu de l'icône Nombre , cliquer sur l'option Style de pourcentage (%) (voir la ).    Afficher le coefficient de variation en pourcentage   Afficher le coefficient de variation en pourcentage      Dans la cellule L12 , taper =CENTILE.INCLURE(IMC;0,25) (voir la ). Le centile recherché est le . Le deuxième paramètre à inscrire dans la formule Excel est le centile recherché en notation décimale. Pour les quartiles, Excel a une formule lui étant dédiée, soit QUARTILE.INCLURE .    Formule pour calculer le premier quartile de l'IMC   Formule pour calculer le premier quartile de l'IMC     Les valeurs des mesures sans filtrage se retrouvent à la   Mesures descriptives de l'IMC sans filtrage   Mesures descriptives de l'IMC sans filtrage      Centrer chaque mesure descriptive dans sa cellule et l'afficher avec une décimale (sauf pour le nombre de données) à l'aide des fonctionnalités disponibles dans l'onglet Accueil (voir la ).    Formatage des mesures descriptives de l'IMC   Formatage des mesures descriptives de l'IMC         Mesures descriptives avec filtre   Puisque la variable IMC du tableau Échantillon a été filtrée, on est en mesure d'effectuer des calculs avec les données filtrées.     Dans la feuille de calcul Étude IMC , copier la plage de cellules K2:L12 .   Coller cette plage de cellules dans les cellules N2:O12 . Supprimer les valeurs des mesures statistiques des cellules O4:O12 en sélectionnant la plage et en cliquant sur la touche suppr du clavier. Modifier le titre pour qu'il lise Mesures descriptives de l'indice de masse corporelle d'un échantillon filtré de femmes d'origine pima, Arizona   Ajuster la taille des colonnes N et O ainsi que les lignes et au besoin.    Dans la cellule O4 , taper =SOUS.TOTAL(2;IMC) (voir la ).  Le chiffre fait référence au calcul du nombre de données. Les nombres à spécifie la fonction à utiliser pour calculer le sous-total. Le deuxième paramètre, soit IMC , fait référence à la plage de données dont on souhaite calculer le sous-total.     Formule pour calculer le nombre de données du sous-total de la variable IMC filtrée   Formule pour calculer le nombre de données du sous-total de la variable IMC filtrée       Dans la cellule O5 , taper =SOUS.TOTAL(5;IMC) (voir la ).     Dans la cellule O6 , taper =SOUS.TOTAL(4;IMC) (voir la ).    Dans la cellule O7 , taper =SOUS.TOTAL(1;IMC) (voir la ).    Malheureusement, Excel n'est pas en mesure de calculer la médiane du sous-total d'une plage de données. Il est donc nécessaire d'utiliser la fonction Excel SI , fonction qui permet d'appliquer des conditions lors de l'emploi d'une formule. Dans la cellule O8 , taper =MEDIANE(SI(IMC < > 0 ;IMC)) (voir la ).  SI(IMC < > 0 ;IMC) renvoie les valeurs de l'IMC différentes de . Excel fait ensuite le calcul de la médiane de ces valeurs.    Malheureusement, Excel n'est pas en mesure de calculer le mode du sous-total d'une plage de données. Il faut donc utiliser la fonction Excel SI encore une fois. Dans la cellule O9 , taper =MODE.SIMPLE(SI(IMC < > 0 ;IMC)) (voir la ).    Dans la cellule O10 , taper =SOUS.TOTAL(7;IMC) (voir la ).    Dans la cellule O11 , taper =O10\/O7 (voir la ).    La fonction SOUS.TOTAL ne permet pas de calculer des centiles. Il faut utiliser la fonction SI . Dans la cellule O12 , taper =CENTILE.INCLURE(SI(IMC< > 0);0,25) (voir la ).   Les valeurs des mesures descriptives de la variable IMC filtrée se retrouvent à la   Mesures descriptives de l'IMC filtrée   Mesures descriptives de l'IMC filtrée       Pour une étude préliminaire d'un échantillon, le troisième quartile est une mesure pertinente pour examiner l'allure globale d'une distribution et l'étalement des données. Combiné avec le premier quartile, il permet de détecter une éventuelle asymétrie dans la distribution des données. Un tableau final des mesures descriptives d'une étude préliminaire de la variable IMC filtrée se retrouvent à la .    Mesures descriptives d'une étude préliminaire de l'IMC filtrée   Mesures descriptives d'une étude préliminaire de l'IMC filtrée     Le diagramme à quartiles, communément appelé la boîte à moustaches si le diagramme est placé horizontalement, illustre le premier quartile, la médiane, le troisième quartile, une valeur minimale qui est située à une distance d'une fois et demi l'écart interquartile en dessous du premier quartile, ainsi qu'une valeur maximale située à une distance d'une fois et demi l'écart interquartile au-dessus du troisième quartile. Ce graphique permet également de détecter d'un coup d'oeil les asymétries possibles à l'aide de la longueur des moustaches, les deux lignes qui s'étendent des quartiles aux valeurs minimale et maximale.  Avec Excel, les détails pour tracer un diagramme à quartiles de la variable IMC sont présentées ci-dessous.    Dans la feuille Données , sélectionner la plage de données de la variable dont on souhaite tracer le diagramme à quartiles. Ici, c'est la variable IMC . S'assurer que les données de cette variable sont filtrées pour enlever les valeurs nulles. La sélection devrait être H6:H773 , ou H17:H773 (quand les valeurs sont ordonnées en ordre croissant et n'incluent pas les valeurs nulles).  Cliquer sur l'onglet Insertion et sélectionner l'option Boîte à moustaches (voir la ).    Insertion d'une boîte à moustaches   Insertion d'une boîte à moustaches      Déplacer le graphique à la feuille Étude IMC , dans un endroit vide de la feuille.  Faire la mise en forme du graphique. Il devrait ressembler au graphique de la .    Boîte à moustaches de la variable IMC   Boîte à moustaches de la variable IMC         Interprétation des mesures descriptives   Le calcul d'une mesure descriptive n'est pas complet sans son interprétation.    Cliquer sur l'onglet Insertion .  Cliquer sur l'icône Texte suivi de l'option Zone de texte (voir la ).    Insertion d'une zone de texte   Insertion d'une zone de texte      Cliquer un endroit sous le tableau des mesures statistiques de l'IMC filtrée. Maintenir enfoncé le bouton gauche de la souris, glisser le curseur vers la droite pour créer la zone de texte de taille désirée.  Interpréter chaque mesure statistique de l'indice de masse corporelle filtrée.         L'étude de deux variables dont l'une quantitative continue (traitement simultané?)  Pour réaliser l'étude d'une variable quantitative continue et d'une variable qualitative, il est nécessaire de construire un tableau de fréquences à double entrée. Dans cette section, on va approfondir l'étude de l'indice de masse corporelle de l'échantillon de femmes d'origine pima, cette fois-ci par atteinte du diabète ou non.   Tableau croisé dynamique à double entrée      Dans le classeur Excel, ajouter une nouvelle feuille de calcul intitulé Étude IMC-Atteinte . Déplacer cette feuille en dernière position si Excel ne le fait pas automatiquement.   Sélectionner la cellule B3 dans cette feuille de calcul.  Insérer un tableau croisé dynamique vide tel que vu à la .  Pour créer un tableau à double entrée, il faut placer une variable en ligne et une variable en colonne. Glisser et déposer la variable IMC dans la zone de saisie Lignes . Glisser et déposer la variable Atteinte dans la zone de saisie Colonnes (voir la ).     Glissement de la variable IMC dans la zone de saisie Lignes et de la variable Atteinte dans la zone Colonnes   Glissement de la variable IMC dans la zone de saisie Lignes et de la variable Atteinte dans la zone Colonnes    Les classes de la variable IMC sont désormais en lignes, et les deux modalités de la variable Atteinte sont en colonnes. Il est possible de constater que l'indice de masse corporelle, variable quantitative continue, a été regroupé en classes avec le même groupement que fait à la (voir la ).     Tableau croisé dynamique vide de la variable IMC en lignes et la variable Atteinte en colonnes   Tableau croisé dynamique vide de la variable IMC en lignes et la variable Atteinte en colonnes       Glisser et déposer la variable IMC dans la zone de saisie Valeurs (voir la ).     Variable IMC dans la zone de saisie Valeurs   Variable IMC dans la zone de saisie Valeurs       Dans la zone de saisie Valeurs , cliquer sur la flèche du menu déroulant de la variable, puis sélectionner l'option Paramètres des champs de valeurs pour modifier le calcul.  Dans l'onglet Synthèse des valeurs par , s'assurer que le type de calcul sélectionné est Nombre . Ensuite, cliquer sur l'onglet Afficher les valeurs , suivi de la flèche du menu déroulant et sélectionner l'option % du total de la colonne (voir la ).     Sélection du pourcentage du total de la colonne   Sélection du pourcentage du total de la colonne    Le choix d'afficher les valeurs en pourcentage du total de la colonne est déterminé en fonction de l'analyse souhaitée. L'objectif est de mettre en évidence la répartition des femmes d'origine pima, par présence de diabète, selon l'indice de masse corporelle. On obtient le tableau croisé dynamique de la     Les trois colonnes du tableau croisé dynamique final de la répartition des femmes selon l'indice de masse corporelle par présence de diabète   Les trois colonnes du tableau croisé dynamique final de la répartition des femmes selon l'indice de masse corporelle par présence de diabète       Il faut filtrer les valeurs nulles encore une fois et créer une classe ouverte regroupant les trois dernières classe puisque ces classes contiennent peu de données (revoir les étapes de la et de la ). L'allure du tableau croisé dynamique final est présentée à la .     Choix de 50 comme valeur de fin dans le groupement et filtrage des valeurs nulles   Choix de 50 comme valeur de fin dans le groupement et filtrage des valeurs nulles       La version finale du tableau de fréquences... (référence aux sections de JS)   Version définitive du tableau de fréquences de la variable IMC avec la variable Atteinte   Version définitive du tableau de fréquences de la variable IMC avec la variable Atteinte            Polygone de fréquences   Pour analyser simultanément deux variables, l'une quantitative quantitative et l'autre qualitative, le polygone de fréquences est l'option à privilégier. Sur l'axe des abscisses, on place la variable quantitative continue, et chaque courbe représente ensuite les différentes modalités de la variable qualitative.  Les étapes qui suivent mènent à la construction du polygone de fréquences de la répartition de l'échantillon de femmes d'origine pima, par présence de diabète, selon l'indice de masse corporelle.     Sélectionner la plage de données représentant les fréquences relatives de l'indice de masse corporelle par présence de diabète, soit la plage de cellules C5:D12 (). Ne pas sélectionner les classes de l'indice de masse corporelle, ni les titres des colonnes, ni les données de la ligne et de la colonne Total général .    Sélection des fréquences relatives de l'IMC par présence de diabète   Sélection des fréquences relatives de l'IMC par présence de diabète      Copier la plage sélectionnée et coller ces valeurs dans la cellule H22 (voir la ).     Ajouter une classe fictive nulle avant et après les fréquences relatives ( avant les premiers pourcentages dans les cellules H21 et I21 et après les derniers pourcentages dans les cellules H30 et I30 ) (voir la ). Cette étape est pour faciliter la mise en forme du polygone de fréquences et améliorer son esthétique.     Dans les cellules H20 et I20 , ajouter des titres aux colonnes pour chaque modalité, soit Non pour la colonne H et Oui pour la colonne I (voir la ).     Dans un polygone de fréquences, chaque fréquence relative est associée au point milieu de sa classe. Il faut ainsi trouver les points milieux. Dans la cellule G22 , écrire la valeur du point milieu de la première classe, soit . Dans la cellule G23 , écrire la valeur du point milieu de la deuxième classe, soit (voir la ).     Sélectionner la plage de cellules G22:G23 (voir la ). La plage est encadré d'une bordure verte et un petit carré vert apparaît dans le coin inférieur droit. Approcher le curseur au-dessus du carré vert. Dès qu'une croix noire apparaît, double-cliquer (voir la ).   Dans la cellule G21 , taper la valeur milieu de la première classe fictive, soit (voir la ).    Séquence de collage des fréquences relatives de l'IMC par présence de diabète et insertion des points milieux des classes   Séquence de collage des fréquences relatives de l'IMC par présence de diabète et insertion des points milieux des classes       Sélectionner la plage de cellules G29:I30 (voir la ).    Sélection des cellules pour créer le polygone de fréquences   Sélection des cellules pour créer le polygone de fréquences       Cliquer sur l'onglet Insertion . Dans le groupe Graphiques , cliquer sur l'icône Insérer un graphique en courbes ou en aires (voir la ).    Sélection de l'icône Insérer un graphique en courbes ou en aires   Sélection de l'icône Insérer un graphique en courbes ou en aires      Dans la section Courbe 2D , sélectionner la quatrième option, soit Courbes avec marques (voir la ). Le graphique ci-dessous s'affiche (voir la )     Graphique créé après la sélection d'insérer une courbe 2D   Graphique créé après la sélection d'insérer une courbe 2D     Il faut effectuer la mise en forme de ce graphique.    Il est possible de déplacer la légende des modalités de la variable qualitative. Cliquer avec le bouton de droit de la souris sur une des modalités et sélectionner le dernier onglet Format de la légende (voir la )     Sélection de l'onglet Format de la légende pour déplacer la légende   Sélection de l'onglet Format de la légende      Une boîte de dialogue s'affiche à droite de la feuille de calcul. Changer l'emplacement de bas à droite pour que la légende s'affiche à droite du polygone de fréquence (voir la ).     Changer l'emplacement de la légende de bas à droite   Changer l'emplacement de la légende de bas à droite     La légende est déplacée à droite (voir la ).     Légende de bas à droite   Légende de bas à droite      Ajouter un titre au graphique, un titre aux axes et la source (voir la ).    Ajout du titre du graphique, des titres des axes et de la source   Ajout du titre du graphique, des titres des axes et de la source      Il est possible d'enlever les lignes horizontales grisées pour avoir un fond purement blanc (voir la ). Cliquer sur une des lignes horizontales. L'ensemble des lignes est désormais sélectionné. Appuyer sur la touche Suppr .    Enlever les lignes horizontales du quadrillage   Enlever les lignes horizontales du quadrillage      Il est possible de lisser le polygone, c'est-à-dire ne pas avoir une courbe avec marques. Cliquer avec le bouton de droite de la souris sur le fond blanc du graphique. Sélection l'option Modifier le type de graphique (voir la ).    Sélection de l'option Modifier le type de graphique   Sélection de l'option Modifier le type de graphique      Une boîte de dialogue s'affiche (voir la ). Sélectionner la première option parmi les sept options de courbes 2D, soit Courbe , et cliquer sur OK .    Sélection de la courbe sans marque   Sélection de la courbe sans marque      La courbe sans marque s'affiche (voir la ).    Polygone de fréquences sans marque   Polygone de fréquences sans marque         Mesures descriptives pour deux variables   Malheureusement, le logiciel Excel n'a pas de formule qui calcule les mesures descriptives du croisement de deux variables. Cependant, les tableaux croisés dynamiques permettent de faire certains calculs comme la moyenne et l'écart type.     Dans la feuille Étude IMC_Atteinte , sélectionner la cellule I3 .   Insérer un tableau croisé dynamique vide tel que vu à la .  Glisser et déposer la variable Atteint dans la zone de saisie Lignes .  Glisser et déposer la variable IMC dans la zone de saisie Valeurs (voir la ).      Glissement de la variable Atteinte dans la zone de saisie Lignes et de la variable IMC dans la zone Valeurs   Glissement de la variable Atteint dans la zone de saisie Lignes et de la variable IMC dans la zone Valeurs       Dans la zone de saisie Valeurs , cliquer sur la flèche du menu déroulant de la variable IMC , puis sélectionner l'option Paramètres des champs de valeurs pour modifier le calcul (voir la ).  Dans l'onglet Synthèse des valeurs par , sélectionner l'option de calcul Moyenne et cliquer sur OK (voir la ).     Sélection de l'option de calcul Moyenne   Sélection de l'option de calcul Moyenne    Ce choix de calcul permet de calculer la moyenne de l'indice de masse corporelle des femmes qui ont le diabète et la moyenne de celles qui ne l'ont pas.     Tableau croisé dynamique de la moyenne de l'indice de masse corporelle selon la présence de diabète   Tableau croisé dynamique de la moyenne de l'indice de masse corporelle selon la présence de diabète       Glisser et déposer la variable IMC à nouveau dans la zone de saisie Valeurs .      Dans la zone de saisie Valeurs , cliquer sur la flèche du menu déroulant de la variable IMC , puis sélectionner l’option Paramètres des champs de valeurs pour modifier le calcul. Dans l’onglet Synthèse des valeurs par , sélectionner l'option de calcul Ecartype.  Le tableau croisé dynamique résultant est présenté à la .     Tableau croisé dynamique de la moyenne et de l'écart type corrigé de l'indice de masse corporelle selon la présence de diabète   Tableau croisé dynamique de la moyenne et de l'écart type corrigé de l'indice de masse corporelle selon la présence de diabète      Mesures descriptives de l'IMC par présence de diabète  Il faut rappeler que dans un tableau croisé dynamique, les calculs effectués sont sur des données non filtrées. Un filtrage est nécessaire si l'on veut les moyennes et les écarts types corrigés sans tenir compte des valeurs nulles de l'indice de masse corporelle.      Cliquer sur l'onglet Insertion .  Cliquer sur l'option Filtres et l'option Segments (voir la ). Un segment est un outil de filtrage qui permet de filtrer les données d'entre autres un tableau croisé dynamique.    Introduction d'un segment pour filtrer les données du tableau croisé dynamique   Introduction d'un segment pour filtrer les données du tableau croisé dynamique       Une boîte de dialogue s'affiche permettant de choisir la variable que l'on veut filtrer (voir la ).  Sélectionner la variable IMC et cliquer sur OK .    Sélection de l'option IMC   Sélection de l'option IMC      Une autre boîte de dialogue s'affiche permettant de filtrer des valeurs de la variable IMC (voir la ).    Boîte de dialogue permettant de filtrer la variable IMC   Boîte de dialogue permettant de filtrer la variable IMC       Cliquer sur l'icône avec les trois crochets du coin supérieur droit de la boîte de dialogue (voir la ).  Toutes les classes sont en bleues. Cela signifie que toutes les valeurs sont incluses dans les calculs du tableau croisé dynamique. Puisque l'on veut exclure les valeurs inférieures à 15 (soit les valeurs nulles), décliquer l'option < 15 (voir la ).    Filtrer les valeurs de la variable IMC pour le calcul des mesures descriptives   Filtrer les valeurs de la variable IMC pour le calcul des mesures descriptives     Le tableau croisé dynamique résultant est présenté à la .     Tableau croisé dynamique de la moyenne et de l'écart type corrigé de l'indice de masse corporelle filtré selon la présence de diabète   Tableau croisé dynamique de la moyenne et de l'écart type corrigé de l'indice de masse corporelle filtré selon la présence de diabète       Copier et coller le tableau croisé dynamique dans les cellules I10:K13 (voir la section...).  Ajouter une colonne à droite de l'écart type corrigé pour le calcul du coefficient de variation. Dans la cellule L10 , taper =K11\/J11 (voir la ).    Calcul du coefficient de variation de l'indice de masse corporelle selon la présence de diabète   Calcul du coefficient de variation de l'indice de masse corporelle selon la présence de diabète       Copier la formule de la cellule L11 dans les celulles L12 et L13 (voir la ).    Coefficient de variation de l'indice de masse corporelle selon la présence de diabète   Coefficient de variation de l'indice de masse corporelle selon la présence de diabète       Formatter le tableau pour fin de présentation (voir la ).    Formatage du tableau de présentation des mesures descriptives de l'indice de masse corporelle selon la présence de diabète   Formatage du tableau de présentation des mesures descriptives de l'indice de masse corporelle selon la présence de diabète    Le tableau définitif est présenté à la   Tableau définitif des mesures descriptives de l'indice de masse corporelle selon la présence de diabète   Tableau définitif des mesures descriptives de l'indice de masse corporelle selon la présence de diabète         "
},
{
  "id": "Fig_Filtre_0",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Filtre_0",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Icone de filtre à droite du titre de la colonne IMC   Icône de filtre à droite du titre de la colonne IMC   "
},
{
  "id": "Filtre_gif_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Filtre_gif_1",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Filtrage des valeurs nulles de l'IMC   Filtrage des valeurs nulles de l'IMC   "
},
{
  "id": "rem-filtrer",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#rem-filtrer",
  "type": "Remarque",
  "number": "3.2.3",
  "title": "Filtrer des données.",
  "body": " Filtrer des données  Ce filtrage ne s'applique que sur les données du tableau principal Échantillon et non sur les tableaux croisés dynamiques.  "
},
{
  "id": "sssec_TCD_VarQuant-5",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#sssec_TCD_VarQuant-5",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Paramètres des champs de valeurs "
},
{
  "id": "Fig_IMC_Filtre_1bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Filtre_1bis",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " Affichage du menu contextuel de la première colonne du tableau croisé dynamique   Affichage du menu contextuel de la première colonne du tableau croisé dynamique   "
},
{
  "id": "Fig_IMC_Filtre_2bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Filtre_2bis",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " Filtrage s'appliquant aux étiquettes   Filtrage s'appliquant aux étiquettes   "
},
{
  "id": "Fig_IMC_Filtre_3bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Filtre_3bis",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " Afficher les éléments pour lesquels l'étiquette est différent de   Afficher les éléments pour lesquels l'étiquette est différent de 0   "
},
{
  "id": "par_Choix_Amp-2",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#par_Choix_Amp-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Insérer une fonction MIN MAX NB SOUS.TOTAL NB SOUS.TOTAL(5;IMC) "
},
{
  "id": "rem-TCD-Grouper",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#rem-TCD-Grouper",
  "type": "Remarque",
  "number": "3.2.19",
  "title": "Afficher les élèments sans données.",
  "body": " Afficher les élèments sans données  Lorsque l'on groupe les valeurs d'un tableau croisé dynamique, il est bien de s'assurer d'afficher les éléments sans données, car sinon, il se peut qu'un intervalle vide soit manquant sans qu'on s'en aperçoive.  "
},
{
  "id": "Fig_Grouper_0",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_0",
  "type": "Figure",
  "number": "3.2.20",
  "title": "",
  "body": " Menu déroulant de la première colonne d'un tableau croisé dynamique   Menu déroulant de la première colonne d'un tableau croisé dynamique   "
},
{
  "id": "Fig_Grouper_0bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_0bis",
  "type": "Figure",
  "number": "3.2.21",
  "title": "",
  "body": " La boîte de dialogue pour afficher les éléments sans données   La boîte de dialogue pour afficher les éléments sans données   "
},
{
  "id": "Fig_Grouper_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_1",
  "type": "Figure",
  "number": "3.2.22",
  "title": "",
  "body": " Menu déroulant de la première colonne d'un tableau croisé dynamique   Menu déroulant de la première colonne d'un tableau croisé dynamique   "
},
{
  "id": "Fig_Grouper_gif_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_gif_1",
  "type": "Figure",
  "number": "3.2.23",
  "title": "",
  "body": " La boîte de dialogue pour grouper les données d'un tableau croisé dynamique, ainsi que le choix de 15 comme valeur minimale et 5 comme amplitude des classes   La boîte de dialogue pour grouper les données d'un tableau croisé dynamique, ainsi que le choix de 15 comme valeur minimale et 5 comme amplitude des classes   "
},
{
  "id": "Fig_Grouper_7",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_7",
  "type": "Figure",
  "number": "3.2.24",
  "title": "",
  "body": " Tableau croisé dynamique commençant à 15 avec des classes d'amplitude 5   Tableau croisé dynamique commençant à 15 avec des classes d'amplitude 5   "
},
{
  "id": "Fig_Grouper_6tris",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_6tris",
  "type": "Figure",
  "number": "3.2.25",
  "title": "",
  "body": " Choix de 50 comme fin pour créer une classe ouverte   Choix de 50 comme fin pour créer une classe ouverte   "
},
{
  "id": "Fig_Grouper_7tris",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Grouper_7tris",
  "type": "Figure",
  "number": "3.2.26",
  "title": "",
  "body": " Tableau croisé dynamique finale pour la variable IMC   Tableau croisé dynamique finale pour la variable IMC   "
},
{
  "id": "Fig_IMC_Tableau_2",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Tableau_2",
  "type": "Figure",
  "number": "3.2.27",
  "title": "",
  "body": " Version définitive du tableau de fréquences de la variable IMC   Version définitive du tableau de fréquences de la variable IMC   "
},
{
  "id": "Fig_IMC_Histo_0",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Histo_0",
  "type": "Figure",
  "number": "3.2.28",
  "title": "",
  "body": " Sélection des fréquences relatives de l'IMC   Sélection des fréquences relatives de l'IMC   "
},
{
  "id": "Fig_IMC_HistoF_gif_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_gif_1",
  "type": "Figure",
  "number": "3.2.29",
  "title": "",
  "body": " Séquence de collage des fréquences relatives de l'IMC et inscription des bornes inférieures des classes   Séquences de collage des fréquences relatives de l'IMC et inscription des bornes inférieures des classes   "
},
{
  "id": "Fig_IMC_HistoF_6",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_6",
  "type": "Figure",
  "number": "3.2.30",
  "title": "",
  "body": " Sélection des fréquences relatives   Sélection des fréquences relatives   "
},
{
  "id": "Fig_IMC_HistoF_7",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_7",
  "type": "Figure",
  "number": "3.2.31",
  "title": "",
  "body": " Sélection de l'icône Insérer un histogramme ou un graphique à barres   Sélection de l'icône Insérer un histogramme ou un graphique à barres   "
},
{
  "id": "Fig_IMC_HistoF_8",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_8",
  "type": "Figure",
  "number": "3.2.32",
  "title": "",
  "body": " Graphique créé après la sélection d'insérer un histogramme 2D   Graphique créé après la sélection d'insérer un histogramme 2D   "
},
{
  "id": "Fig_IMC_HistoF_9",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_9",
  "type": "Figure",
  "number": "3.2.33",
  "title": "",
  "body": " Ajout de titres   Ajout de titres   "
},
{
  "id": "Fig_IMC_HistoF_10",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_10",
  "type": "Figure",
  "number": "3.2.34",
  "title": "",
  "body": " Sélection de l'option Mettre en forme une série de données   Sélection de l'option Mettre en forme une série de données   "
},
{
  "id": "Fig_IMC_HistoF_gif_2",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_gif_2",
  "type": "Figure",
  "number": "3.2.35",
  "title": "",
  "body": " Mettre comme largeur des intervalles entre les bandes au lieu de   Mettre 0% comme largeur des intervalles entre les bandes au lieu de 219%   "
},
{
  "id": "Fig_IMC_HistoF_13",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_13",
  "type": "Figure",
  "number": "3.2.36",
  "title": "",
  "body": " Histogramme avec comme largeur des intervalles   Histogramme avec 0% comme largeur des intervalles   "
},
{
  "id": "Fig_IMC_Histo_13tris",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Histo_13tris",
  "type": "Figure",
  "number": "3.2.37",
  "title": "",
  "body": " Sélection d'une bordure noire pour les bandes de l'histogramme   Sélection d'une bordure noire pour les bandes de l'histogramme   "
},
{
  "id": "Fig_IMC_HistoF_13bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_13bis",
  "type": "Figure",
  "number": "3.2.38",
  "title": "",
  "body": " Bandes de l'histogramme avec une bordure noire   Bandes de l'hitogramme avec une bordure noire   "
},
{
  "id": "Fig_IMC_HistoF_14",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_14",
  "type": "Figure",
  "number": "3.2.39",
  "title": "",
  "body": " Sélection de l'option Sélectionner des données...   Sélection de l'option Sélectionner des données   "
},
{
  "id": "Fig_IMC_HistoF_16",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_16",
  "type": "Figure",
  "number": "3.2.40",
  "title": "",
  "body": " Sélection de l'icône Modifier   Sélection de l'icône Modifier   "
},
{
  "id": "Fig_IMC_HistoF_17",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_17",
  "type": "Figure",
  "number": "3.2.41",
  "title": "",
  "body": " Boîte de dialogue pour la sélection des étiquettes de l'axe horizontal   Boîte de dialogue pour la sélection des étiquettes de l'axe horizontal   "
},
{
  "id": "Fig_IMC_HistoF_18",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_18",
  "type": "Figure",
  "number": "3.2.42",
  "title": "",
  "body": " Sélection de la plage de cellules G19:G27   Sélection de la plage de cellules G19:G27   "
},
{
  "id": "Fig_IMC_HistoF_19",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_19",
  "type": "Figure",
  "number": "3.2.43",
  "title": "",
  "body": " Histogramme avec les bonnes valeurs sur l'axe des abscisses   Histogramme avec les bonnes valeurs sur l'axe des abscisses   "
},
{
  "id": "Fig_IMC_HistoF_21",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_21",
  "type": "Figure",
  "number": "3.2.44",
  "title": "",
  "body": " Sélection de l'option Aligner à droite   Sélection de l'option Aligner à droite   "
},
{
  "id": "Fig_IMC_HistoF_22",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_22",
  "type": "Figure",
  "number": "3.2.45",
  "title": "",
  "body": " Alignement à droite des valeurs de l'axe des abscisses   Alignement à droite des valeurs de l'axe des abscisses   "
},
{
  "id": "Fig_IMC_HistoF_23",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_23",
  "type": "Figure",
  "number": "3.2.46",
  "title": "",
  "body": " Sélection de l'option Ajouter des étiquettes de données    Sélection de l'option Ajouter des étiquettes de données   "
},
{
  "id": "Fig_IMC_HistoF_24",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_24",
  "type": "Figure",
  "number": "3.2.47",
  "title": "",
  "body": " Ajout des étiquettes de données   Ajout des étiquettes de données   "
},
{
  "id": "Fig_IMC_HistoF_26",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_HistoF_26",
  "type": "Figure",
  "number": "3.2.48",
  "title": "",
  "body": " Version définitive de l'histogramme avec la source des données   Version définitive de l'histogramme avec la source des données   "
},
{
  "id": "Fig_Mesures_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_1",
  "type": "Figure",
  "number": "3.2.49",
  "title": "",
  "body": " Titre du tableau de mesures descriptives   Titre du tableau de mesures descriptives   "
},
{
  "id": "Fig_Mesures_2",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_2",
  "type": "Figure",
  "number": "3.2.50",
  "title": "",
  "body": " Sélection des cellules K2:L3   Sélection des cellules K2:L3   "
},
{
  "id": "Fig_Mesures_3",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_3",
  "type": "Figure",
  "number": "3.2.51",
  "title": "",
  "body": " Sélection des options Fusionner et centrer et Renvoyer à la ligne automatiquement   Sélection des options Fusionner et centrer et Renvoyer à la ligne automatiquement   "
},
{
  "id": "Fig_Mesures_4",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_4",
  "type": "Figure",
  "number": "3.2.52",
  "title": "",
  "body": " Mesures descriptives à calculer   Mesures descriptives à calculer   "
},
{
  "id": "Fig_Mesures_5",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_5",
  "type": "Figure",
  "number": "3.2.53",
  "title": "",
  "body": " Bordure au tableau de mesures descriptives   Bordure au tableau de mesures descriptives   "
},
{
  "id": "Mesures_gif_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Mesures_gif_1",
  "type": "Figure",
  "number": "3.2.54",
  "title": "",
  "body": " Formules pour calculer les différentes mesures descriptives de l'IMC   Formule pour calculer les différentes mesures descriptives de l'IMC   "
},
{
  "id": "Fig_Mesures_13",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_13",
  "type": "Figure",
  "number": "3.2.55",
  "title": "",
  "body": " Afficher le coefficient de variation en pourcentage   Afficher le coefficient de variation en pourcentage   "
},
{
  "id": "Fig_Mesures_14",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_14",
  "type": "Figure",
  "number": "3.2.56",
  "title": "",
  "body": " Formule pour calculer le premier quartile de l'IMC   Formule pour calculer le premier quartile de l'IMC   "
},
{
  "id": "Fig_Mesures_15",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_15",
  "type": "Figure",
  "number": "3.2.57",
  "title": "",
  "body": " Mesures descriptives de l'IMC sans filtrage   Mesures descriptives de l'IMC sans filtrage   "
},
{
  "id": "Fig_Mesures_16",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_16",
  "type": "Figure",
  "number": "3.2.58",
  "title": "",
  "body": " Formatage des mesures descriptives de l'IMC   Formatage des mesures descriptives de l'IMC   "
},
{
  "id": "Fig_Mesures_Filtre_0",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Mesures_Filtre_0",
  "type": "Figure",
  "number": "3.2.59",
  "title": "",
  "body": " Formule pour calculer le nombre de données du sous-total de la variable IMC filtrée   Formule pour calculer le nombre de données du sous-total de la variable IMC filtrée   "
},
{
  "id": "MesuresF_gif",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#MesuresF_gif",
  "type": "Figure",
  "number": "3.2.60",
  "title": "",
  "body": " Mesures descriptives de l'IMC filtrée   Mesures descriptives de l'IMC filtrée   "
},
{
  "id": "Fig_IMC_Mesures_Finales",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_IMC_Mesures_Finales",
  "type": "Figure",
  "number": "3.2.61",
  "title": "",
  "body": " Mesures descriptives d'une étude préliminaire de l'IMC filtrée   Mesures descriptives d'une étude préliminaire de l'IMC filtrée   "
},
{
  "id": "Fig_Moustaches_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Moustaches_1",
  "type": "Figure",
  "number": "3.2.62",
  "title": "",
  "body": " Insertion d'une boîte à moustaches   Insertion d'une boîte à moustaches   "
},
{
  "id": "Fig_Moustaches",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Moustaches",
  "type": "Figure",
  "number": "3.2.63",
  "title": "",
  "body": " Boîte à moustaches de la variable IMC   Boîte à moustaches de la variable IMC   "
},
{
  "id": "Fig_ZoneTexte_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_ZoneTexte_1",
  "type": "Figure",
  "number": "3.2.64",
  "title": "",
  "body": " Insertion d'une zone de texte   Insertion d'une zone de texte   "
},
{
  "id": "ssec_TCD_Pol-3",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#ssec_TCD_Pol-3",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Paramètres des champs de valeurs Afficher les valeurs "
},
{
  "id": "Fig_Pol_0",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_0",
  "type": "Figure",
  "number": "3.2.72",
  "title": "",
  "body": " Sélection des fréquences relatives de l'IMC par présence de diabète   Sélection des fréquences relatives de l'IMC par présence de diabète   "
},
{
  "id": "Fig_Pol_gif_1",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_gif_1",
  "type": "Figure",
  "number": "3.2.73",
  "title": "",
  "body": " Séquence de collage des fréquences relatives de l'IMC par présence de diabète et insertion des points milieux des classes   Séquence de collage des fréquences relatives de l'IMC par présence de diabète et insertion des points milieux des classes   "
},
{
  "id": "Fig_Pol_9",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_9",
  "type": "Figure",
  "number": "3.2.74",
  "title": "",
  "body": " Sélection des cellules pour créer le polygone de fréquences   Sélection des cellules pour créer le polygone de fréquences   "
},
{
  "id": "Fig_Pol_10bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_10bis",
  "type": "Figure",
  "number": "3.2.75",
  "title": "",
  "body": " Sélection de l'icône Insérer un graphique en courbes ou en aires   Sélection de l'icône Insérer un graphique en courbes ou en aires   "
},
{
  "id": "Fig_Pol_11bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_11bis",
  "type": "Figure",
  "number": "3.2.76",
  "title": "",
  "body": " Graphique créé après la sélection d'insérer une courbe 2D   Graphique créé après la sélection d'insérer une courbe 2D   "
},
{
  "id": "Fig_Pol_11",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_11",
  "type": "Figure",
  "number": "3.2.77",
  "title": "",
  "body": " Sélection de l'onglet Format de la légende pour déplacer la légende   Sélection de l'onglet Format de la légende   "
},
{
  "id": "Fig_Pol_gif_2",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_gif_2",
  "type": "Figure",
  "number": "3.2.78",
  "title": "",
  "body": " Changer l'emplacement de la légende de bas à droite   Changer l'emplacement de la légende de bas à droite   "
},
{
  "id": "Fig_Pol_14",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_14",
  "type": "Figure",
  "number": "3.2.79",
  "title": "",
  "body": " Légende de bas à droite   Légende de bas à droite   "
},
{
  "id": "Fig_Pol_15bis",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_15bis",
  "type": "Figure",
  "number": "3.2.80",
  "title": "",
  "body": " Ajout du titre du graphique, des titres des axes et de la source   Ajout du titre du graphique, des titres des axes et de la source   "
},
{
  "id": "Fig_Pol_gif_3",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_gif_3",
  "type": "Figure",
  "number": "3.2.81",
  "title": "",
  "body": " Enlever les lignes horizontales du quadrillage   Enlever les lignes horizontales du quadrillage   "
},
{
  "id": "Fig_Pol_18",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_18",
  "type": "Figure",
  "number": "3.2.82",
  "title": "",
  "body": " Sélection de l'option Modifier le type de graphique   Sélection de l'option Modifier le type de graphique   "
},
{
  "id": "Fig_Pol_19",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_19",
  "type": "Figure",
  "number": "3.2.83",
  "title": "",
  "body": " Sélection de la courbe sans marque   Sélection de la courbe sans marque   "
},
{
  "id": "Fig_Pol_20",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#Fig_Pol_20",
  "type": "Figure",
  "number": "3.2.84",
  "title": "",
  "body": " Polygone de fréquences sans marque   Polygone de fréquences sans marque   "
},
{
  "id": "sssec_Mesures_DoubleEntree-4",
  "level": "2",
  "url": "sec-Laboratoire_Varquant.html#sssec_Mesures_DoubleEntree-4",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "Paramètres des champs de valeurs Segments "
},
{
  "id": "sec-Postlab_Varquant",
  "level": "1",
  "url": "sec-Postlab_Varquant.html",
  "type": "Section",
  "number": "3.3",
  "title": "Réflexions",
  "body": " Réflexions  Compte tenu du nombre de variables quantitatives, le travail réalisé lors du laboratoire 3 n'est qu'un point de départ de l'analyse. Il est essentiel de poursuivre l'étude afin d'extraire un maximum d'informations et d'approfondir la compréhension de la situation.   Travail à faire après le laboratoire    Approfondir l'étude de la variable IMC .  Examiner les autres variables quantitatives continues ( Glucose , Pression artérielle diastolique , Épaisseur de la peau , Insuline , Fonction pedigree du diabète ).  Examiner une variable quantitative continue et une variable qualitative.  Formuler des conclusions.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.    En deux courtes phrases, résumer la situation du diabète et de l'indice de masse corporelle chez la population de femmes pimas.  Quelles sont les limites des deux études réalisées dans le laboratoire 3? Quelles variables sont reliées entre elles? Dépendance et indépendance.  À la , on a calculé des mesures descriptives avec et sans filtrage des valeurs nulles de l'indice de masse corporelle. Expliquer les effets de ne pas exclure les valeurs nulles lors des calculs. Quel impact cela a-t-il sur les mesures descriptives? Cet impact serait-il le même si la base de données contenait 20 données au lieu de 768?  Calculer la moyenne de l'indice de masse corporelle à partir du tableau de fréquences des données groupées en classe (voir la ). La valeur obtenue avec filtrage est-elle la même que celle obtenue avec la formule Excel? Sinon, expliquer la différence. Quelle valeur doit être privilégiée?  Une donnée aberrante est une donnée située loin des autres observations. Une donnée est considérée comme aberrante si elle se situe à 1,5 fois l'écart interquartile en dessous du premier quartile ou à 1,5 fois l'écart interquartile au-dessus du troisième quartile. Dans la feuille de calcul Étude IMC , déterminer toutes les valeurs aberrantes de l'indice de masse corporelle en effectuant les calculs nécessaires. À la , quelles valeurs auraient dû être exclues en plus des valeurs nulles? Quel graphique permet de visualiser (d'identifier d'un coup d'oeil) les données aberrantes d'une variable?  Devrait-on toujours exclure les valeurs aberrantes lors du traitement des données (graphiques et calculs de mesures)? Donner des exemples où l'exclusion est justifiée et des exemples où elle pourrait masquer la réalité d'un phénomène.  Le choix de l'amplitude et du nombre de classes d'un histogramme peut influencer l'interprétation du graphique. Reproduire l'histogramme de la répartition de l'échantillon des femmes d'origine pima selon l'indice de masse corporelle en regroupant les données en cinq classes. Interpréter l'allure du graphique. Comparer l'histogramme reproduit à l'histogramme fait à la .   À la , la moyenne et l'écart type corrigé de l'indice de masse corporelle par présence de diabète ont été calculés pour chaque échantillon (femmes atteintes et femmes non atteintes). Il manque une mesure statistique importante à calculer lorsque l'on compare deux distributions. Laquelle? Faire son calcul en ajoutant une colonne au tableau croisé dynamique de la . Pourquoi cette mesure est-elle importante dans un contexte de comparaison?   Choisir une variable quantitative continue à étudier. Construire le tableau de fréquences ainsi que l'histogramme de la répartition de l'échantillon de femmes d'origine pima selon la variable choisie. Ne pas oublier de filtrer les données aberrantes et d'indiquer le choix de l'amplitude des classes. Interpréter le résultat.    Calculer les mesures de tendance centrales, les mesures de dispersion et le troisième quintile de la variable choisie à la question précédente.    Choisir une variable quantitative continue à étudier simultanément avec la variable qualitative Atteint . Construire le tableau de fréquences à double entrée ainsi que le polygone de fréquences de la répartition de l'échantillon de femmes d'origine pima, par variable qualitative (?), selon la variable quantitative choisie. Ne pas oublier de filtrer les données aberrantes et d'indiquer le choix de l'amplitude des classes. Interpréter le résultat.    Calculer et interpréter la moyenne, l'écart type corrigé et le coefficient de variation de la variable quantitative continue choisie à la question précédente par présence de diabète.    Choisir une deuxième variable quantitative continue à étudier simultanément avec la variable qualitative Atteint . Construire le tableau de fréquences à double entrée ainsi que le polygone de fréquences de la répartition de l'échantillon de femmes d'origine pima, par présence de diabète, selon la variable quantitative choisie. Ne pas oublier de filtrer les données aberrantes et d'indiquer le choix de l'amplitude des classes. Interpréter le résultat.    Calculer et interpréter la moyenne, l'écart type corrigé et le coefficient de variation de la variable quantitative continue choisie à la question précédente par présence de diabète.   Après avoir étudié certaines variables quantitatives, formuler quelques hypothèses de recherche en lien avec ces variables et les autres de la base de données.    "
},
{
  "id": "ws-Reflexion_Varquant-2",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-2",
  "type": "Objectifs",
  "number": "3.3",
  "title": "",
  "body": "  Approfondir l'étude de la variable IMC .  Examiner les autres variables quantitatives continues ( Glucose , Pression artérielle diastolique , Épaisseur de la peau , Insuline , Fonction pedigree du diabète ).  Examiner une variable quantitative continue et une variable qualitative.  Formuler des conclusions.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.   "
},
{
  "id": "ws-Reflexion_Varquant-3",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-3",
  "type": "Activité",
  "number": "3.3.1",
  "title": "",
  "body": "En deux courtes phrases, résumer la situation du diabète et de l'indice de masse corporelle chez la population de femmes pimas. "
},
{
  "id": "ws-Reflexion_Varquant-4",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-4",
  "type": "Activité",
  "number": "3.3.2",
  "title": "",
  "body": "Quelles sont les limites des deux études réalisées dans le laboratoire 3? Quelles variables sont reliées entre elles? Dépendance et indépendance. "
},
{
  "id": "ws-Reflexion_Varquant-5",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-5",
  "type": "Activité",
  "number": "3.3.3",
  "title": "",
  "body": "À la , on a calculé des mesures descriptives avec et sans filtrage des valeurs nulles de l'indice de masse corporelle. Expliquer les effets de ne pas exclure les valeurs nulles lors des calculs. Quel impact cela a-t-il sur les mesures descriptives? Cet impact serait-il le même si la base de données contenait 20 données au lieu de 768? "
},
{
  "id": "ws-Reflexion_Varquant-6",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-6",
  "type": "Activité",
  "number": "3.3.4",
  "title": "",
  "body": "Calculer la moyenne de l'indice de masse corporelle à partir du tableau de fréquences des données groupées en classe (voir la ). La valeur obtenue avec filtrage est-elle la même que celle obtenue avec la formule Excel? Sinon, expliquer la différence. Quelle valeur doit être privilégiée? "
},
{
  "id": "ws-Reflexion_Varquant-7",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-7",
  "type": "Activité",
  "number": "3.3.5",
  "title": "",
  "body": "Une donnée aberrante est une donnée située loin des autres observations. Une donnée est considérée comme aberrante si elle se situe à 1,5 fois l'écart interquartile en dessous du premier quartile ou à 1,5 fois l'écart interquartile au-dessus du troisième quartile. Dans la feuille de calcul Étude IMC , déterminer toutes les valeurs aberrantes de l'indice de masse corporelle en effectuant les calculs nécessaires. À la , quelles valeurs auraient dû être exclues en plus des valeurs nulles? Quel graphique permet de visualiser (d'identifier d'un coup d'oeil) les données aberrantes d'une variable? "
},
{
  "id": "ws-Reflexion_Varquant-8",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-8",
  "type": "Activité",
  "number": "3.3.6",
  "title": "",
  "body": "Devrait-on toujours exclure les valeurs aberrantes lors du traitement des données (graphiques et calculs de mesures)? Donner des exemples où l'exclusion est justifiée et des exemples où elle pourrait masquer la réalité d'un phénomène. "
},
{
  "id": "ws-Reflexion_Varquant-9",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-9",
  "type": "Activité",
  "number": "3.3.7",
  "title": "",
  "body": "Le choix de l'amplitude et du nombre de classes d'un histogramme peut influencer l'interprétation du graphique. Reproduire l'histogramme de la répartition de l'échantillon des femmes d'origine pima selon l'indice de masse corporelle en regroupant les données en cinq classes. Interpréter l'allure du graphique. Comparer l'histogramme reproduit à l'histogramme fait à la .  "
},
{
  "id": "ws-Reflexion_Varquant-10",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-10",
  "type": "Activité",
  "number": "3.3.8",
  "title": "",
  "body": "À la , la moyenne et l'écart type corrigé de l'indice de masse corporelle par présence de diabète ont été calculés pour chaque échantillon (femmes atteintes et femmes non atteintes). Il manque une mesure statistique importante à calculer lorsque l'on compare deux distributions. Laquelle? Faire son calcul en ajoutant une colonne au tableau croisé dynamique de la . Pourquoi cette mesure est-elle importante dans un contexte de comparaison? "
},
{
  "id": "ws-Reflexion_Varquant-11",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-11",
  "type": "Activité",
  "number": "3.3.9",
  "title": "",
  "body": " Choisir une variable quantitative continue à étudier. Construire le tableau de fréquences ainsi que l'histogramme de la répartition de l'échantillon de femmes d'origine pima selon la variable choisie. Ne pas oublier de filtrer les données aberrantes et d'indiquer le choix de l'amplitude des classes. Interpréter le résultat.  "
},
{
  "id": "ws-Reflexion_Varquant-12",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-12",
  "type": "Activité",
  "number": "3.3.10",
  "title": "",
  "body": " Calculer les mesures de tendance centrales, les mesures de dispersion et le troisième quintile de la variable choisie à la question précédente.  "
},
{
  "id": "ws-Reflexion_Varquant-13",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-13",
  "type": "Activité",
  "number": "3.3.11",
  "title": "",
  "body": " Choisir une variable quantitative continue à étudier simultanément avec la variable qualitative Atteint . Construire le tableau de fréquences à double entrée ainsi que le polygone de fréquences de la répartition de l'échantillon de femmes d'origine pima, par variable qualitative (?), selon la variable quantitative choisie. Ne pas oublier de filtrer les données aberrantes et d'indiquer le choix de l'amplitude des classes. Interpréter le résultat.  "
},
{
  "id": "ws-Reflexion_Varquant-14",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-14",
  "type": "Activité",
  "number": "3.3.12",
  "title": "",
  "body": " Calculer et interpréter la moyenne, l'écart type corrigé et le coefficient de variation de la variable quantitative continue choisie à la question précédente par présence de diabète.  "
},
{
  "id": "ws-Reflexion_Varquant-15",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-15",
  "type": "Activité",
  "number": "3.3.13",
  "title": "",
  "body": " Choisir une deuxième variable quantitative continue à étudier simultanément avec la variable qualitative Atteint . Construire le tableau de fréquences à double entrée ainsi que le polygone de fréquences de la répartition de l'échantillon de femmes d'origine pima, par présence de diabète, selon la variable quantitative choisie. Ne pas oublier de filtrer les données aberrantes et d'indiquer le choix de l'amplitude des classes. Interpréter le résultat.  "
},
{
  "id": "ws-Reflexion_Varquant-16",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#ws-Reflexion_Varquant-16",
  "type": "Activité",
  "number": "3.3.14",
  "title": "",
  "body": " Calculer et interpréter la moyenne, l'écart type corrigé et le coefficient de variation de la variable quantitative continue choisie à la question précédente par présence de diabète.  "
},
{
  "id": "Varquant-12",
  "level": "2",
  "url": "sec-Postlab_Varquant.html#Varquant-12",
  "type": "Activité",
  "number": "3.3.15",
  "title": "",
  "body": "Après avoir étudié certaines variables quantitatives, formuler quelques hypothèses de recherche en lien avec ces variables et les autres de la base de données. "
},
{
  "id": "sec-Prelab_Distribution",
  "level": "1",
  "url": "sec-Prelab_Distribution.html",
  "type": "Section",
  "number": "4.1",
  "title": "Prélab",
  "body": " Prélab  BIXI Montréal est un organisme à but non lucratif créé en 2014 par la Ville de Montréal pour gérer le système de vélopartage à Montréal. Le réseau comprend plus de 11 000 vélos (dont 2 600 BIXI électriques) et plus de 900 stations sur le territoire montréalais, ainsi qu'à Laval, Longueuil, Boucherville, Terrebonne, Sainte-Julie, Westmount, Ville de Mont-Royal et Montréal-Est. Beaucoup plus qu'un simple mode de transport, BIXI est aujourd'hui un fabuleux raccourci qui permet de circuler librement dans la ville où et quand on le désire pour aller où l'inspiration et\/ou le devoir nous mène. Texte tiré de , page consultée le 16 octobre 2024.   L'organisme BIXI Montréal compile les données des trajets effectués par les utilisateurs depuis le tout début. Ces données sont disponibles pour le grand public.   Travail à faire avant le cours    Explorer le comportement de la moyenne échantillonnale pour une petite population.  Faire l'étude descriptive de la population des trajets en BIXI.     Dans ce laboratoire, on explore le comportement de la moyenne d'un échantillon. Pour cela, on considère le temps de tous les trajets effectués en BIXI sur l'ile de Montréal lors du mois d'août 2016, qui fait office de population. Les données proviennent du site web de Bixi et ont été nettoyées un peu afin de les structurer et d'éliminer des variables non pertinentes pour l'objet de ce laboratoire. L'organisme a répertorié près de trajets lors de cet unique mois. Le but de ce laboratoire est de voir comment la moyenne estimée par un échantillon varie selon l'échantillon qui est sondé.  En passant Bien que convivial et pratique, le logiciel Excel possède des limites bien réelles. Par exemple il limite l'utilisateur à un peu plus d'un million de lignes et un peu plus de seize mille colonnes. Cela peut être suffisant pour bien des études, mais quand on considère qu'en 2023 il y a plus de dix millions de trajets effectués en Bixi, on comprend que pour les analyser, il faudrait une meilleure solution. Des logiciels statistiques plus avancés ainsi que des langages de programmation spécifiques n'ont souvent pas ces limitations et permettent d'évaluer des jeux de données de grandes taille. Des fonctions complémentaires à Excel sont aussi disponibles, mais ne seront pas discutées dans cet ouvrage.    L'un des objectifs du laboratoire est d'observer le comportement de la moyenne d'un échantillon par rapport à la véritable moyenne de la population en fonction de l'échantillon choisi. Afin de bien cerner ce contexte théorique, on propose un exemple simple illustrant certains des concepts qui seront par la suite approfondis.  On considère une population de individus dont la hauteur (en cm) est donnée dans la table suivante:   Grandeur en cm d'une population de 5 individus    Individu  Grandeur (cm)       185       175       155       165       195     Calculer la moyenne et l'écart type de cette population. Il existe échantillons différents de cette population. Par exemple, il y a échantillons de taille . Chacun de ces échantillons produit une moyenne et un écart type qui diffère possiblement des valeurs calculées dans la question précédente. On s'intèresse au comportement de la moyenne échantillonnale en ce qui a trait à la taille de l'échantillon choisi. Compléter les données manquantes dans la table suivante. Les deux dernières lignes représentent la moyennes et l'écart type des moyennes des échantillons pour une taille donnée.  Faire les calculs à l'aide d'un logiciel ou d'une calculatrice.      Moyennes échantillonnales de tous les échantillons possibles               Échantillons     Échantillons     Échantillons                                                                                                                                                                                        Moyenne      Moyenne     Moyenne       Écart type      Écart type     Écart type         Moyennes échantillonnales de tous les échantillons possibles            Échantillons     Échantillons                                                                  Moyenne     Moyenne       Écart type     Écart type        Formuler des observations sur le comportement de par rapport à la taille de l'échantillon.  On regarde les notes finales de tous les élèves qui suivent un cours de probabilités et statistique. On considère aussi la moyenne finale de tous les groupes de ce même cours. Laquelle de ces deux variables aléatoires devrait posséder la plus grande variabilité? Comparer la réponse à cette question avec les observations de la question .    Télécharger et ouvrir le fichier Bixi_août_2016.xlsx disponible à l'adresse ToDo. Ce fichier contient une feuille de calcul appelée «Trajets en BIXI août 2016», laquelle contient quatre variables et données, représentant l'ensemble de tous les trajets effectués en Bixi à Montréal durant le mois d'août 2016. On considère ces trajets comme la population à l'étude.  Dans la feuille de calcul Trajets en BIXI août 2016 , nommer le tableau des données ainsi que ses colonnes, tel que montré à la . Créer ensuite une deuxième feuille de calculs intitulée «Échantillonnage_canevas». Déplacer cette feuille de calcul à la gauche de la première. Cela évitera plus tard de la sélectionner par erreur.  Faire l'étude descriptive de la population telle que décrite dans la . À la vue de ces mesures, est-ce qu'on peut qualifier la distribution d'à peu près normale? Expliquer.  Faire une lecture sommaire des sections , et de l'annexe.    "
},
{
  "id": "ws-Prelab_Distribution-2",
  "level": "2",
  "url": "sec-Prelab_Distribution.html#ws-Prelab_Distribution-2",
  "type": "Objectifs",
  "number": "4.1",
  "title": "",
  "body": "  Explorer le comportement de la moyenne échantillonnale pour une petite population.  Faire l'étude descriptive de la population des trajets en BIXI.   "
},
{
  "id": "exo-echantillons",
  "level": "2",
  "url": "sec-Prelab_Distribution.html#exo-echantillons",
  "type": "Activité",
  "number": "4.1.1",
  "title": "",
  "body": "L'un des objectifs du laboratoire est d'observer le comportement de la moyenne d'un échantillon par rapport à la véritable moyenne de la population en fonction de l'échantillon choisi. Afin de bien cerner ce contexte théorique, on propose un exemple simple illustrant certains des concepts qui seront par la suite approfondis.  On considère une population de individus dont la hauteur (en cm) est donnée dans la table suivante:   Grandeur en cm d'une population de 5 individus    Individu  Grandeur (cm)       185       175       155       165       195     Calculer la moyenne et l'écart type de cette population. Il existe échantillons différents de cette population. Par exemple, il y a échantillons de taille . Chacun de ces échantillons produit une moyenne et un écart type qui diffère possiblement des valeurs calculées dans la question précédente. On s'intèresse au comportement de la moyenne échantillonnale en ce qui a trait à la taille de l'échantillon choisi. Compléter les données manquantes dans la table suivante. Les deux dernières lignes représentent la moyennes et l'écart type des moyennes des échantillons pour une taille donnée.  Faire les calculs à l'aide d'un logiciel ou d'une calculatrice.      Moyennes échantillonnales de tous les échantillons possibles               Échantillons     Échantillons     Échantillons                                                                                                                                                                                        Moyenne      Moyenne     Moyenne       Écart type      Écart type     Écart type         Moyennes échantillonnales de tous les échantillons possibles            Échantillons     Échantillons                                                                  Moyenne     Moyenne       Écart type     Écart type        Formuler des observations sur le comportement de par rapport à la taille de l'échantillon. "
},
{
  "id": "ws-Prelab_Distribution-4-2",
  "level": "2",
  "url": "sec-Prelab_Distribution.html#ws-Prelab_Distribution-4-2",
  "type": "Activité",
  "number": "4.1.2",
  "title": "",
  "body": "On regarde les notes finales de tous les élèves qui suivent un cours de probabilités et statistique. On considère aussi la moyenne finale de tous les groupes de ce même cours. Laquelle de ces deux variables aléatoires devrait posséder la plus grande variabilité? Comparer la réponse à cette question avec les observations de la question . "
},
{
  "id": "ws-Prelab_Distribution-5-1",
  "level": "2",
  "url": "sec-Prelab_Distribution.html#ws-Prelab_Distribution-5-1",
  "type": "Activité",
  "number": "4.1.3",
  "title": "",
  "body": "Télécharger et ouvrir le fichier Bixi_août_2016.xlsx disponible à l'adresse ToDo. Ce fichier contient une feuille de calcul appelée «Trajets en BIXI août 2016», laquelle contient quatre variables et données, représentant l'ensemble de tous les trajets effectués en Bixi à Montréal durant le mois d'août 2016. On considère ces trajets comme la population à l'étude.  Dans la feuille de calcul Trajets en BIXI août 2016 , nommer le tableau des données ainsi que ses colonnes, tel que montré à la . Créer ensuite une deuxième feuille de calculs intitulée «Échantillonnage_canevas». Déplacer cette feuille de calcul à la gauche de la première. Cela évitera plus tard de la sélectionner par erreur.  Faire l'étude descriptive de la population telle que décrite dans la . À la vue de ces mesures, est-ce qu'on peut qualifier la distribution d'à peu près normale? Expliquer. "
},
{
  "id": "ws-Prelab_Distribution-5-2",
  "level": "2",
  "url": "sec-Prelab_Distribution.html#ws-Prelab_Distribution-5-2",
  "type": "Activité",
  "number": "4.1.4",
  "title": "",
  "body": "Faire une lecture sommaire des sections , et de l'annexe. "
},
{
  "id": "sec-Laboratoire_Distribution",
  "level": "1",
  "url": "sec-Laboratoire_Distribution.html",
  "type": "Section",
  "number": "4.2",
  "title": "Laboratoire",
  "body": " Laboratoire  Il est rare que l'on ait accès à la population. Lorsque l'on calcule des mesures statistiques comme la moyenne, la médiane ou l'écart type à partir d'un échantillon, il est essentiel de comprendre que ces valeurs seraient fort probablement différentes si l'échantillon était lui-même différent. En fait, chacune des ces mesures statistiques est une variable aléatoire dont la distribution dépend de celle de la population et de ses paramètres.  Puisque l'on a accès aux données de la population, il est possible d'observer les variations de la moyenne échantillonnale, notée , selon l'échantillon choisi et de comparer ces variations à la véritable moyenne, que l'on peut calculer. Dans la pratique, ces données ne seraient probablement pas disponibles. Il faudrait donc estimer les paramètres de la distribution, comme la moyenne, à l'aide d'un échantillon. Toutefois, il faut être conscient des limites de ces estimations et comprendre comment se comporte la variable aléatoire pour en tirer de bonnes conclusions.    Préparation du fichier  L'échantillonnage est le procédé par lequel on sélectionne les unités statistiques d'une population afin qu'ils fassent partie d'un échantillon. Il existe plusieurs techniques d'échantillonnage, séparées en deux catégories: aléatoires et non aléatoire. Dans un monde idéal, il faudrait toujours que l'échantillonnage soit fait de manière aléatoire, mais, pour des raisons parfois d'impractibilité, ce n'est pas toujours possible. Comme l'étude des techniques d'échantillonnage n'est pas l'objectif de ce laboratoire, on procédera par l'une des méthodes les plus simples, soit l'échantillonnage aléatoire simple, avec remise. Cela signifie que chaque individu de la population a la même chance d'être choisi pour faire partie de l'échantillon et ce, pour chaque membre de l'échantillon (c'est ce que le «avec remise« signifie). Comme la taille de la population est grande comparativement à la taille des échantillons qui seront considérés, cette technique n'a pas tendance à donner des résultats trop différents de celle où l'on aurait pris les échantillons sans remise.  Pour comprendre le comportement de , on s'intéresse à deux paramètres, soit la taille des échantillons, noté et le nombre d'échantillons tirés, noté , permettant d'observer l'allure de la distribution.  On voudra étudier comment varie la distribution de en la regardant sous ces deux angles. Dans le premier cas, on fixe une taille d'échantillon et l'on regarde la distribution de en considérant plusieurs ensembles d'échantillons de taille variée ( ). Ensuite, on étudie l'effet de l'augmentation de la taille des échantillons sur la distribution lorsque le nombre d'échantillons tirés est fixé à .  Dans le coin supérieur gauche de la feuille de calculs Échantillonnage_canevas , reproduire la table ci-dessous.   Table de construction de l'échantillonnage   Une capture d'écran montrant une table dans Excel  La table est de taille trois par quatre. La cellule A1 est vide, de même que les cellules de la plage C2 à D3. Les cellules A2 et A3 contiennent respectivement les phrases « nombre d'échantillons» et« taille d'un échantillon». Les cellules B1,C1 et D1 contiennent respectivement «n», «début» et «fin». La cellule B2 contient le nombre 5 et la cellule B3 contient le nombre 10.     Sous la table, par exemple dans la cellule A5 , inscrire «Taille de la population» À droite de cette case, entrer la formule =NB(Durée__s) . Cette formule devrait retourner , soit la taille de la population.  Quelque part à la droite de la table, insérer un nouveau tableau en cliquant sur le bouton approprié du ruban sous l'onglet insertion . Le tableau doit contenir une colonne et moins de dix lignes. Renommer le nom de la colonne «Échantillonage1». Sous l'onglet Formules , cliquer sur le bouton Gestionnaire de noms et renommer le tableau créé «Échantillonnages».  Dans la première ligne du tableau, entrer la formule =ALEA.ENTRE.BORNES(2;$B$5+1) . Si B5 n'est pas la cellule qui contient la taille de la population, remplacer par la cellule appropriée. Cette commande devrait remplir le tableau de nombres aléatoires. Ces nombres correspondent à des numéros de lignes du tableau Données . Ils indiquent quels trajets feront partie dee échantillons.  Le tableau Échantillonnages va contenir autant de colonnes que le nombre d'échantillons que l'on souhaite avoir et autant de ligne que la taille de ces échantillons. Chaque colonne de ce tableau représentera ainsi un échantillon de la population. Puisque l'on veut étudier la variation de selon le nombre d'échantillons et la taille, il faut que les dimensions de ce tableau puissent s'ajuster. C'est ici que la table construite dans la plage A1:D3 va être utile. À l'aide de fonctions Excel, dont le fonctionnement est expliqué dans l' , on pourra calculer la plage que devra occuper le tableau.  Dans la cellule C2 , on veut inscrire la première colonne du tableau. Entrer la formule =@COLONNE(Échantillonnages) . Ceci devrait donner sous la forme d'un nombre la première colonne du tableau. Dans la cellule D2 , on veut connaitre la dernière colonne du tableau, en fonction du nombre qui est inscrit dans la cellule B2 (par défaut, 5, mais ce sera modifié plus tard). On veut aussi connaitre cette colonne non pas sous sa forme numérique, mais sous son nom lettré. Entrer la formule =SUBSTITUE(ADRESSE(1;C2+B2-1;4);\"1\";\"\") . Cela devrait donner la lettre correspondant à la cinquième colonne d'un tableau qui en contiendrait s'il commençait la où se trouve le tableau Échantillonnages .   La feuille Échantillonnage   Une capture d'écran montrant une table et un tableau dans Excel  La table est de taille trois par quatre. La cellule A1 est vide. Les cellules A2 et A3 contiennent respectivement les phrases « nombre d'échantillons» et« taille d'un échantillon». Les cellules B1,C1 et D1 contiennent respectivement «n», «début» et «fin». La cellule B2 contient le nombre 5 et la cellule B3 contient le nombre 10. La plage C2 à D3 contient des nombres selon les formules de la partie précédente.     On répète la procédure pour déterminer la dernière ligne du tableau. Dans la cellule C3 , entrer la formule =@LIGNE(Échantillonnages) . Dans la cellule D3 , entrer la formule =C3+B3-1 . À ce stade-ci, la feuille de calculs devrait ressembler à celle de l'image ci-dessous, avec des valeurs différentes dans le tableau Échantillonnages .  Avant de construire le premier ensemble d'échantillon, on va sauvegarder le travail effectué jusqu'à maintenant sous la forme d'un canevas que l'on pourra réutiliser pour les différentes études ci-dessous et dans le post laboratoire. Effectuer un clic-droit sur le nom de la feuille de calcul et cliquer sur «Protéger la feuille ». Une fenêtre devrait apparaitre. N'entrer pas de mot de passe et cliquer simplement sur « OK ». Ceci empêche maintenant toute modification sur cette feuille de calculs.  Toujours à l'aide d'un clic droit sur le nom de la feuille, cliquer sur « Déplacer ou copier ». Dans la fenêtre qui apparait, cocher la case «Créer une copie », sélectionner le positionnement « (en dernier) » et appuyer sur « OK ». Excel crée ainsi une copie du canevas qui constituera la feuille de calculs de la première étude. On renomme cette feuille de calcul «Échantillonnage1». Cette nouvelle feuille de calculs est aussi verrouillée. Il est possible de la déverrouiller en effectuant un clic droit sur son nom et en cliquant sur «Ôter la protection de la feuille . permettant ainsi sa modification. Également, le tableau de cette copie s'est vu attribuer un nom par Excel afin de le distinguer du tableau de la feuille originale. Ce n'est pas un problème en soi, mais il faudra être conscient du nom de ce tableau pour la suite ou encore le renommer. Par simplicité, on continue d'y faire référence sous le nom Échantillonnages dans ce qui suit.    Création du premier échantillon  Le premier cas de figure étudié est lorsque la taille de l'échantillon est égale à . On commence par tirer cinq échantillons au hasard dans la population. Comme ce sont ces paramètres qui avaient été placés dans la table de construction, on n'a pas à modifier ces valeurs cette fois. Voici la procédure pour sélectionner les échantillons.  Cliquer sur l'une des cellules du tableau Échantillonnages .  Sous l'onglet «Création de tableau», cliquer sur le bouton du ruban appelé «Redimensionner le tableau ».  Dans la fenêtre apparaissant, modifier la fin de la plage afin qu'elle corresponde avec ce qui est inscrit aux cellules D2 et D3 . Appuyer sur «OK». Le nouveau tableau devrait apparaitre, sans valeurs dans les colonnes à droites.  Cliquer sur une cellule de nouveau tableau et effectuer la combinaison Ctrl + A afin de sélectionner toutes les cellules du tableau, puis effectuer la combinaison Ctrl + D afin de propager les formules vers la droite.  La figure ci-dessous illustre ces étapes.   Sélection des unités statistiques des échantillons   Animation de la séquence d'instructions qui précèdent la figure.    Les nombres dans la tableau représentent les lignes du tableau Données qui ont été sélectionnées pour faire partie des échantillons. Il faut maintenant aller lire dans les données la valeur de la variable à l'étude. Créer une copie de la feuille Échantillonnage1 et nommer cette feuille «Échantillons1».  Dans cette nouvelle copie, inscrire sous la table de construction dans la colonne A le texte «Colonne de la variable étudiée ».  Entrer =@COLONNE(Durée__s) dans la cellule de adjacente.  Dans le gestionnaire de noms, vérifier et changer le nom du tableau de cette nouvelle feuille pour «Échantillons1».  Renommer le titre de la première colonne de ce tableau «Échantillon».  Toujours avec le titre de la première colonne sélectionné, effectuer la combinaison Ctrl + Shift + afin de sélectionner tous les titres de colonnes.  Effectuer la combinaison Ctrl + D pour propager à droite le titre Échantillon .  Ajouter un «1» au titre de la première colonne.  Dans n'importe quelle cellule de la première colonne du tableau Échantillonnages , remplacer la formule en place par =@INDIRECT(ADRESSE(@Échantillonnages1;$B$7;;;\"Trajets en BIXI août 2016\")) , en prenant le soin de remplacer le nom «Échantillonnages1» par le nom qu'Excel a donné au tableau de la feuille Échantillonnage1 .  Sélectionner tout le tableau Échantillons1 et propager à droite la nouvelle formule. Le tableau contient maintenant la durée en secondes des échantillons. La illustre à quoi devrait ressembler la feuille de calculs Échantillons1 jusqu'à présent.  On veut maintenant ajouter les moyennes sous le tableau. Pour cela:   Sélectionner le tableau Échantillons1 ;  Sous l'onglet Création de tableau , cocher la case Ligne Total . Il est aussi possible de cliquer sur l'icone dans le coin inférieur droit qui apparait une fois le tableau sélectionné;  Dans les deux cas, cliquer sur cet icône, puis sous Totaux , cliquer sur Moyenne . La figure ci-dessous illustre ces étapes.   Ajout de la ligne des moyennes    Capture d'écran montrant la case à cliquer appelée ligne total.    Capture d'écran montrant le bouton à cliquer pour avoir la ligne des moyennes.      Il est aussi possible d'utiliser la formule Moyenne sous la première colonne et de propage vers la droite par la suite. En fait, ceci est préférable s'il y a beaucoup de valeurs dans le tableau, car l'utilitaire ci-dessus nécessite davantage de ressources de la part de l'ordinateur.       Les échantillons avec la durée en secondes  Capture d'écran montrant le résultat après avoir modifié les formules pour obtenir la durée en secondes.   La figure ci-dessous montre le résultat final du tableau des échantillons, avec la ligne des moyennes ajoutée.   La feuille Échantillons1  Capture d'écran montrant le résultat après avoir ajouté la ligne des moyennes.     Analyse de l'échantillon  Il est maintenant temps de procéder à l'analyse des données. Le lecteur aura sans doute remarqué qu'Excel recalcule les échantillons chaque fois qu'une nouvelle information est entrée dans une cellule, que celle-ci soit reliée au tableau des échantillons ou non. Toutefois, lorsque vient le temps d'analyser les échantillons, il est préférable que les données ne changent plus. Bien qu'il soit possible d'automatiser plusieurs étapes, certaines décisions doivent être prises en regard avec les données spécifiques à un ensemble d'échantillons. Par exemple, on peut penser à l'amplitude des classes dans l'histogramme, qui pourrait varier d'un tirage à un autre.  Copier les moyennes du tableau à un autre endroit dans la feuille Échantillons1 , en s'assurant de faire un collage spécial (ToDo référence annexe?) avec les valeurs seulement. Inscrire à gauche de cette ligne de moyennes le titre « Moyennes pour analyse ». Sous cette cellule, entrer la commande =TRANSPOSE(plage) , où plage est la plage de cellules où se retrouvent les moyennes pour analyse. Ceci va convertir le format horizontal en format vertical, nécessaire pour introduire un tableau croisé dynamique. Nommer cette plage verticale dans le gestionnaire de noms.   Le résultat de la transposition   Le résultat après tranposition des données    Créer une nouvelle feuille de calculs appelée «Analyse1». Dans cette nouvelle feuile, insérer un tableau croisé dynamique à partir de la plage verticale contenant les moyennes, dans le but de construire une histogramme.  En suivant la procédure décrite dans la , faire le groupement dans tableau croisé dynamique. Ensuite, produire l'histogramme pour représenter les données.    L'influence du nombre d'échantillons  On répète maintenant les étapes des sous-sections et afin de regarder le comportement lorsque le nombre d'échantillons tirés est de , , et trajets. On note que pour aller avec un plus grand nombre d'échantillons, par exemple , il faudrait changer la manière de procéder puisqu'Excel est limité à un peu plus de colonnes.  Une fois les histogrammes pour les autres cas créés, on les combine dans un seul graphique afin d'observer l'impact du nombre d'échantillons sur le comportement de la moyenne . On pourrait utiliser le polygone de fréquences d'Excel pour afficher simultanément les courbes sur un même graphique, mais ce type de graphique ne permet pas de tracer des séries de données qui possèdent des abscisses différents, ce qui est fort probablement le cas ici.  On utilise plutôt le graphique « Nuages de points ». De plus, on utilise l'option « avec lissage » dans le but de voir le comportement limite s'approchant de la loi normale.  Créer une nouvelle feuille de calculs appelée « Polygones de fréquences ».  Recopier les valeurs ayant servi à construire les histogrammes, en prenant soin de changer les valeurs des abscisses pour le point milieu de chacune des classe. Le résultat devrait ressembler à ce qui est illustré à la .  Sélectionner la première plage de données, incluant le titre .  Sous l'onglet Insertion , cliquer sur le bouton «Insérer un nuage de point (X,Y) ou un graphique en bulles » et choisir l'option « Nuage de points avec courbes lissées ».  Déplacer ce graphique afin qu'il ne couvre pas les séries de données.  Sélectionner le graphique. Sous l'onglet Création de graphique , cliquer sur Sélectionner des données . Il est également possible de faire un clic droit sur le graphique et de cliquer sur Sélectionner des données .  Dans la fenêtre qui s'ouvre, cliquer sur Ajouter sous « Entrées de légende (Séries).  Sélectionner les plages correspondant au titre, aux abscisses et aux ordonnées (les pourcentages). Appuyer sur OK .  Répéter afin d'ajouter toutes les séries de données.  Effectuer la mise en forme, selon la procédure décrite à la . La illustre ces étapes.     Les données pour les courbes de distribution   Capture d'écran Excel montrant les données recopiées.     Création des polygones de fréquences lissés.   Capture d'écran Excel montrant la progression des étapes menant à la création du graphique contenant toutes les courbes.    On termine cette l'analyse de l'impact du nombre d'échantillons pour une taille fixé en regardant le comportement de la moyenne des moyennes et de l'écart type des moyennes. Pour cela, on commence par calculer la moyenne et l'écart type de la population, chose qu'il n'est normalement pas possible de faire.   Créer une feuille de calcul appelée « Analyse quantitative taille 10 ».  Reproduire le résultat de la . Évidemment, les valeurs seront différentes. S'assurer de calculer les moyennes à partir des données qui ont été gelées et de prendre la formule pour un échantillon pour les écarts types, sauf pour celui de la population.    Table de comparaison pour les moyennes et les écarts types   Capture d'écran de la table à produire  La capture d'écran montre une table contenant sept lignes et trois colonnes. La première ligne s'intitule Échantillons et contient les valeurs Nb_E=5,Nb_E=10,Nb_E=100,Nb_E=1000,Nb_E=10000 ainsi que Population. La deuxième colonne est titrée Moyenne et contient les moyennes des échantillons et de la population. La dernière colonne est appelée Écart type et contient les écarts types des échantillons et celui de la population.    On observe que la moyenne des moyennes semble se rapprocher de la véritable moyenne, mais pas l'écart type. Ce dernier semble tout de même se rapprocher d'une valeur.    L'influence de la taille des échantillons  On regarde maintenant comment se comporte la moyenne échantillonnale lorsque le nombre d'échantillons reste fixe, mais que la taille de chacun des échantillons augmente. En répétant les étapes des sous-sections précédentes, faire l'analyse complète pour des tailles des échantillons de taille et . Fixer le nombre d'échantillons pour chaque cas à . À noter que le cas pour la taille a déjà été effectué et devrait se trouver dans les feuilles de calculs Échantillonnage3 , Échantillons3 et Analyse3 .  Encore une fois, on peut observer que la moyenne des moyennes se rapproche de la véritable moyenne, mais pas l'écart type. Toutefois, l'écart type semble devenir de plus en plus petit, en accord avec le théorème central limite, ce qui transpire aussi dans l'allure des courbes, qui s'écrasent de plus en plus vers la valeur centrale à mesure que augmente.    "
},
{
  "id": "sec-Laboratoire_Distribution-3-6",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#sec-Laboratoire_Distribution-3-6",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " Table de construction de l'échantillonnage   Une capture d'écran montrant une table dans Excel  La table est de taille trois par quatre. La cellule A1 est vide, de même que les cellules de la plage C2 à D3. Les cellules A2 et A3 contiennent respectivement les phrases « nombre d'échantillons» et« taille d'un échantillon». Les cellules B1,C1 et D1 contiennent respectivement «n», «début» et «fin». La cellule B2 contient le nombre 5 et la cellule B3 contient le nombre 10.    "
},
{
  "id": "sec-Laboratoire_Distribution-3-12",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#sec-Laboratoire_Distribution-3-12",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " La feuille Échantillonnage   Une capture d'écran montrant une table et un tableau dans Excel  La table est de taille trois par quatre. La cellule A1 est vide. Les cellules A2 et A3 contiennent respectivement les phrases « nombre d'échantillons» et« taille d'un échantillon». Les cellules B1,C1 et D1 contiennent respectivement «n», «début» et «fin». La cellule B2 contient le nombre 5 et la cellule B3 contient le nombre 10. La plage C2 à D3 contient des nombres selon les formules de la partie précédente.    "
},
{
  "id": "fig-elargirtableau",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-elargirtableau",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " Sélection des unités statistiques des échantillons   Animation de la séquence d'instructions qui précèdent la figure.   "
},
{
  "id": "ssec-echantillon-4-3-10-2-3-2",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#ssec-echantillon-4-3-10-2-3-2",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": " Ajout de la ligne des moyennes    Capture d'écran montrant la case à cliquer appelée ligne total.    Capture d'écran montrant le bouton à cliquer pour avoir la ligne des moyennes.    "
},
{
  "id": "fig-echantillons0",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-echantillons0",
  "type": "Figure",
  "number": "4.2.5",
  "title": "",
  "body": " Les échantillons avec la durée en secondes  Capture d'écran montrant le résultat après avoir modifié les formules pour obtenir la durée en secondes.  "
},
{
  "id": "fig-echantillons1",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-echantillons1",
  "type": "Figure",
  "number": "4.2.6",
  "title": "",
  "body": " La feuille Échantillons1  Capture d'écran montrant le résultat après avoir ajouté la ligne des moyennes.  "
},
{
  "id": "fig-transposee",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-transposee",
  "type": "Figure",
  "number": "4.2.7",
  "title": "",
  "body": " Le résultat de la transposition   Le résultat après tranposition des données   "
},
{
  "id": "fig-polygonesdonnees",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-polygonesdonnees",
  "type": "Figure",
  "number": "4.2.8",
  "title": "",
  "body": " Les données pour les courbes de distribution   Capture d'écran Excel montrant les données recopiées.   "
},
{
  "id": "fig-polygonesXbarre",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-polygonesXbarre",
  "type": "Figure",
  "number": "4.2.9",
  "title": "",
  "body": " Création des polygones de fréquences lissés.   Capture d'écran Excel montrant la progression des étapes menant à la création du graphique contenant toutes les courbes.   "
},
{
  "id": "fig-analysetaille10",
  "level": "2",
  "url": "sec-Laboratoire_Distribution.html#fig-analysetaille10",
  "type": "Figure",
  "number": "4.2.10",
  "title": "",
  "body": " Table de comparaison pour les moyennes et les écarts types   Capture d'écran de la table à produire  La capture d'écran montre une table contenant sept lignes et trois colonnes. La première ligne s'intitule Échantillons et contient les valeurs Nb_E=5,Nb_E=10,Nb_E=100,Nb_E=1000,Nb_E=10000 ainsi que Population. La deuxième colonne est titrée Moyenne et contient les moyennes des échantillons et de la population. La dernière colonne est appelée Écart type et contient les écarts types des échantillons et celui de la population.   "
},
{
  "id": "sec-Postlab_Distribution",
  "level": "1",
  "url": "sec-Postlab_Distribution.html",
  "type": "Section",
  "number": "4.3",
  "title": "Réflexions",
  "body": " Réflexions  Le travail accompli dans ce laboratoire théorique aura permis de voir que, même avec un échantillon de grande taille, une statistique comme la moyenne n'est qu'une approximation de la valeur réelle dans la population.   Travail à faire après le laboratoire    Comparer certains résultats obtenus avec la théorie.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.     Dans l'analyse de la moyenne échantillonnale en fonction de la taille de l'échantillon, pourquoi est-ce que l'écart-type varie en fonction de ? Est-ce ce qui est attendu de la théorie?  Utiliser les écarts types calculés dans la sous-section afin de tracer le graphique de l'écart type en fonction de la taille de l'échantillon. Ajouter une courbe de tendance de type « puissance » et comparer l'équation donnée par Excel avec celle établie par le théorème central limite. Commenter les différences.   Insertion d'une courbe de tendance de type « puissance »    Capture d'écran Excel montrant comment aller ajouter une courbe de tendance.    Capture d'écran Excel montrant comment choisir la courbe de tendance de type puissance et comment afficher son équation sur le graphique.     Commenter l'allure des courbes à mesure que la valeur de ou augmente. Est-ce le comportement attendu? Justifier brièvement.  La théorie de la loi normale stipule que des données provenant d'une loi normale se situe entre et . Vérifier ce fait à l'aide des échantillons de taille . Utiliser la véritable moyenne et .  Regarder la valeur minimale et la valeur maximale de la durée des trajets. Est-ce que ces valeurs apparaissent suspectent? Expliquer pourquoi (au besoin, convertir en heures). En tant qu'analyste, quelle démarche serait-il possible d'entreprendre afin de vérifier la validité des données?  Le graphique ci-dessous illustre la distribution du maximum échantillonnale pour échantillons de trajets en BIXI. On peut voir que la forme de la distribution n'est pas la même que la cloche de la loi normale, contrairement à celle pour la distribution des moyennes. Commenter cette remarque.    Un histogramme est illustré, avec la proportion des données augmentant au fur et à mesure que les valeurs en abscisses augmentent.     Générer échantillons de taille et considérer la proportion des trajets qui proviennent de membres de BIXI. Tracer l'histogramme des proportions échantillonnales.  Formulez quelques hypothèses utilisant certaines les variables de cette base de données.   "
},
{
  "id": "sec-Postlab_Distribution-3-2",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-2",
  "type": "Objectifs",
  "number": "4.3",
  "title": "",
  "body": "  Comparer certains résultats obtenus avec la théorie.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.   "
},
{
  "id": "sec-Postlab_Distribution-3-3",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-3",
  "type": "Activité",
  "number": "4.3.1",
  "title": "",
  "body": "Dans l'analyse de la moyenne échantillonnale en fonction de la taille de l'échantillon, pourquoi est-ce que l'écart-type varie en fonction de ? Est-ce ce qui est attendu de la théorie? "
},
{
  "id": "sec-Postlab_Distribution-3-4",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-4",
  "type": "Activité",
  "number": "4.3.2",
  "title": "",
  "body": "Utiliser les écarts types calculés dans la sous-section afin de tracer le graphique de l'écart type en fonction de la taille de l'échantillon. Ajouter une courbe de tendance de type « puissance » et comparer l'équation donnée par Excel avec celle établie par le théorème central limite. Commenter les différences.   Insertion d'une courbe de tendance de type « puissance »    Capture d'écran Excel montrant comment aller ajouter une courbe de tendance.    Capture d'écran Excel montrant comment choisir la courbe de tendance de type puissance et comment afficher son équation sur le graphique.    "
},
{
  "id": "sec-Postlab_Distribution-3-5",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-5",
  "type": "Activité",
  "number": "4.3.3",
  "title": "",
  "body": "Commenter l'allure des courbes à mesure que la valeur de ou augmente. Est-ce le comportement attendu? Justifier brièvement. "
},
{
  "id": "sec-Postlab_Distribution-3-6",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-6",
  "type": "Activité",
  "number": "4.3.4",
  "title": "",
  "body": "La théorie de la loi normale stipule que des données provenant d'une loi normale se situe entre et . Vérifier ce fait à l'aide des échantillons de taille . Utiliser la véritable moyenne et . "
},
{
  "id": "sec-Postlab_Distribution-3-7",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-7",
  "type": "Activité",
  "number": "4.3.5",
  "title": "",
  "body": "Regarder la valeur minimale et la valeur maximale de la durée des trajets. Est-ce que ces valeurs apparaissent suspectent? Expliquer pourquoi (au besoin, convertir en heures). En tant qu'analyste, quelle démarche serait-il possible d'entreprendre afin de vérifier la validité des données? "
},
{
  "id": "sec-Postlab_Distribution-3-8",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-8",
  "type": "Activité",
  "number": "4.3.6",
  "title": "",
  "body": "Le graphique ci-dessous illustre la distribution du maximum échantillonnale pour échantillons de trajets en BIXI. On peut voir que la forme de la distribution n'est pas la même que la cloche de la loi normale, contrairement à celle pour la distribution des moyennes. Commenter cette remarque.    Un histogramme est illustré, avec la proportion des données augmentant au fur et à mesure que les valeurs en abscisses augmentent.    "
},
{
  "id": "exo-estimationproportion",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#exo-estimationproportion",
  "type": "Activité",
  "number": "4.3.7",
  "title": "",
  "body": "Générer échantillons de taille et considérer la proportion des trajets qui proviennent de membres de BIXI. Tracer l'histogramme des proportions échantillonnales. "
},
{
  "id": "sec-Postlab_Distribution-3-10",
  "level": "2",
  "url": "sec-Postlab_Distribution.html#sec-Postlab_Distribution-3-10",
  "type": "Activité",
  "number": "4.3.8",
  "title": "",
  "body": "Formulez quelques hypothèses utilisant certaines les variables de cette base de données. "
},
{
  "id": "sec-Prelab_Intervalle",
  "level": "1",
  "url": "sec-Prelab_Intervalle.html",
  "type": "Section",
  "number": "5.1",
  "title": "Prélab",
  "body": " Prélab  La moyenne ou la proportion échantillonnale constituent une première estimation du paramètre de la population. Toutefois, cette estimation, dite ponctuelle, n'offre pas beaucoup de détails quant à sa précision. Il est possible de définir un intervalle autour de la mesure échantillonnale selon une précision souhaitée. On peut alors quantifier le risque d'erreur, c'est-à-dire la proportion des intervalles ainsi construits qui ne contiendraient pas le véritable paramètre de la population.   Travail à faire avant le cours    Explorer le concept de marge d'erreur.  Introduire les notions de risque d'erreur et de niveau de confiance.     Dans le prélab, on poursuit l'analyse de la base de données BIXI en cherchant à définir un ensemble de valeurs possibles pour estimer la durée moyennes des trajets ainsi que la proportion de trajets effectués par des membres. Il convient encore une fois ici de rappeler qu'en temps normal, les données de la population ne seraient pas disponibles et que cette absences est la raison d'être de faire ces estimations. Le but ici est de faire ces estimations par intervalle de confiance afin de valider la théorie en comparant avec les valeurs réelles dans la population.     Selon le théorème central limite, la distribution de se rapproche d'une loi normale à mesure que la taille de l'échantillon augmente. Concrètement, on peut dire que suit une loi approximativement équivalente à . Dans cet exercice, on considère des échantillons de taille avec et .  Calculer la probabilité que . Dans le classeur associé à la base de données Bixi, générer à nouveau échantillons de taille comme ceux se trouvant dans la feuille Échantillons6 . Il est nécessaire de regénérer puisqu'Excel a sans doute changer les valeurs de l'échantillon depuis que les moyennes ont été fixées. Calculer les moyennes échantillonnales (si ce n'est pas déjà fait), de même que l'écart type des échantillons.  Déterminer quelle proportion de ces moyennes échantillonnales se trouvent dans l'intervalle . Comparer avec la valeur obtenue à l'exercice ( ). Utiliser les  NB.SI ou NB au besoin.     Dans la question précédente, l'intervalle a été choisi afin que la probabilité demandée à la question soit celle obtenue. On explore la construction de cet intervalle.   Quelle est la valeur de pour que la probabilité qu'une variable normale centrée réduite se retrouve dans l'intervalle soit égale à .  Vérifier que . Le terme est appelé la marge d'erreur . Si on fixe , que devrait-être pour avoir une marge d'erreur de secondes? Si cette fois on fixe , déterminer la taille d'échantillon minimale nécessaire afin d'avoir une marge d'erreur de secondes. Discuter de la différence entre ces deux intervalles de confiance.     "
},
{
  "id": "ws-Prelab_Intervalle-2",
  "level": "2",
  "url": "sec-Prelab_Intervalle.html#ws-Prelab_Intervalle-2",
  "type": "Objectifs",
  "number": "5.1",
  "title": "",
  "body": "  Explorer le concept de marge d'erreur.  Introduire les notions de risque d'erreur et de niveau de confiance.   "
},
{
  "id": "ws-Prelab_Intervalle-4-1",
  "level": "2",
  "url": "sec-Prelab_Intervalle.html#ws-Prelab_Intervalle-4-1",
  "type": "Activité",
  "number": "5.1.1",
  "title": "",
  "body": " Selon le théorème central limite, la distribution de se rapproche d'une loi normale à mesure que la taille de l'échantillon augmente. Concrètement, on peut dire que suit une loi approximativement équivalente à . Dans cet exercice, on considère des échantillons de taille avec et .  Calculer la probabilité que . Dans le classeur associé à la base de données Bixi, générer à nouveau échantillons de taille comme ceux se trouvant dans la feuille Échantillons6 . Il est nécessaire de regénérer puisqu'Excel a sans doute changer les valeurs de l'échantillon depuis que les moyennes ont été fixées. Calculer les moyennes échantillonnales (si ce n'est pas déjà fait), de même que l'écart type des échantillons.  Déterminer quelle proportion de ces moyennes échantillonnales se trouvent dans l'intervalle . Comparer avec la valeur obtenue à l'exercice ( ). Utiliser les  NB.SI ou NB au besoin.  "
},
{
  "id": "ws-Prelab_Intervalle-5-1",
  "level": "2",
  "url": "sec-Prelab_Intervalle.html#ws-Prelab_Intervalle-5-1",
  "type": "Activité",
  "number": "5.1.2",
  "title": "",
  "body": "Dans la question précédente, l'intervalle a été choisi afin que la probabilité demandée à la question soit celle obtenue. On explore la construction de cet intervalle.   Quelle est la valeur de pour que la probabilité qu'une variable normale centrée réduite se retrouve dans l'intervalle soit égale à .  Vérifier que . Le terme est appelé la marge d'erreur . Si on fixe , que devrait-être pour avoir une marge d'erreur de secondes? Si cette fois on fixe , déterminer la taille d'échantillon minimale nécessaire afin d'avoir une marge d'erreur de secondes. Discuter de la différence entre ces deux intervalles de confiance. "
},
{
  "id": "sec-Laboratoire_Intervalle",
  "level": "1",
  "url": "sec-Laboratoire_Intervalle.html",
  "type": "Section",
  "number": "5.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Comme mentionné dans l'introduction, on n'a normalement pas accès aux valeurs de la population. On va alors tenter de reproduire le calcul d'un intervalle équivalent à celui de l'exercice ( ), mais qui sera centré autour de et qui utilisera plutôt que . Les intervalles auront la forme , où . On reproduit ainsi un intervalle dont le risque d'erreur est de . Ci-dessous, on analyse l'impact de prendre comme approximation de .    Intervalles pour une moyenne  Créer une nouvelle feuille de calculs nommée « Intervalle1 » dans le fichier Bixi . Dans la plage A1:B4 , inscrire dans la colonne A les étiquettes , et et entrer et dans B1 et B2 respectivement pour et alpha. Calculer à l'aide des formules de la loi normale la valeur de .  On commence par construire un tableau qui contiendra les moyennes échantillonnales, les écart types échantillonnaux, ainsi que les bornes inférieures et supérieures de l'intervalle de l'équation des échantillons créés à l'exercice . Pour cela,  Reporter les moyennes pour analyse et les écarts types calculés à l'exercice ;  Ensuite, calculer les bornes inférieures et supérieures de chaque intervalle selon la formule ;  Ajouter une ligne (ou une colonne, selon la construction précédente) qui déterminera si se retrouver dans l'intervalle pour chaque valeurs . Pour cela, on utilise ensemble les commandes SI et ET . La commande SI retournera si sa condition est remplie et sinon. La condition en tant que telle sera donnée par la fonction ET , qui vérifiera si la véritable moyenne est dans l'intervalle. La formule ressemblera à SI(ET($B$4>=H2;$B$4<=I2);1;0) . Dans cet exemple, la cellule B4 contient la vraie moyenne de la population et les cellules H2 et I2 sont respectivement les bornes inférieures et supérieures de l'intervalle de confiance;  Calculer la proportion des intervalles qui contiennent . Pour cela, il suffit de compter combien de ont été retournés par les fonctions SI et de diviser par le nombre d'échantillons totaux, soit dans ce cas. Comparer avec le résultat « attendu » de . Au besoin, recalculer la feuille avec Shift + F9 si le calcul automatique est désactivé.   ToDo Postlab Pense pas car question dans postlab réfère? À présent, on s'intéresse au résultat des questions et du pré-laboratoire.  Créer une copie de la feuille Intervalle1 et modifier la valeur de afin qu'elle corresponde à la valeur de l'exercice . Vérifier que la proportion des intervalles contenant la moyenne est près du niveau de confiance attendu et vérifier également que la marge d'erreur est d'environ secondes. en ajoutant une colonne ou une ligne «marge d'erreur».  Créer ensuite une série de nouvelles feuilles afin de tirer échantillons de la taille appropriée, soit celle calculée à la question . Vérifier que la proportion des intervalles contenant la moyenne est près du niveau de confiance et vérifier également que la marge d'erreur est d'environ secondes, comme il est attendu.  En vertu de ces constructions, est-ce que la réponse à l'exercice est toujours la bonne?    Intervalles pour une proportion  À l' , on a considéré la proportion de trajets effectués en BIXI qui proviennent des membres de la plateforme. On va construire un intervalle de confiance pour ce paramètre. On note la proportion théorique de la population. On cherche à étudier le comportement d'un intervalle de confiance construit autour d'une estimation ponctuelle . Si l'on considère qu'être membre de BIXI est un succès, alors la variable représentant le nombre de membres dans un échantillon aléatoire pris avec remise suit une loi binomiale de paramètres . Sous les conditions et , alors on peut montrer que la proportion se comporte approximativement comme une loi normale. On dit alors que sous les conditions nommées plus haut.  Si est l'estimation ponctuelle provenant d'un échantillon, on a alors à un niveau de confiance de .  Puisque le but est d'estimer la proportion inconnue, on remplace sa valeur dans l'intervalle par l'estimation , ce qui constitue l'intervalle de confiance pour la proportion .   Créer une nouvelle feuille de calculs appelée «Intervalle proportion1 ».  Comme on l'a fait à l'exercice , on commence par regarder la proportion des valeurs estimées se retrouve dans l'intervalle théorique . Le résultat devrait ressembler à celui de la figure .  Pour chacun des échantillons générés à l'exercice , construire l'intervalle de confiance selon la formule et vérifier dans combien de ces intervalles se trouve la véritable proportion .    Proportion des estimations dans l'intervalle de confiance   Une capture d'écran d'un tableau de sept lignes et deux colonnes est montré. La première colonne contient les étiquettes des éléments nécessaire au calcul d'un intervalle de confiance théorique pour la proportion et la seconde leur valeur. On a donc la véritable proportion , la taille de l'échantillon , le niveau de risque , le facteur . De plus, on y retrouve la borne inférieure et la borne supérieure de l'intervalle de confiance ainsi que le pourcentage des estimations qui sont dans l'intervalle.     "
},
{
  "id": "sec-Laboratoire_Intervalle-2-1",
  "level": "2",
  "url": "sec-Laboratoire_Intervalle.html#sec-Laboratoire_Intervalle-2-1",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "risque d'erreur "
},
{
  "id": "fig-Proportiontheorique1",
  "level": "2",
  "url": "sec-Laboratoire_Intervalle.html#fig-Proportiontheorique1",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Proportion des estimations dans l'intervalle de confiance   Une capture d'écran d'un tableau de sept lignes et deux colonnes est montré. La première colonne contient les étiquettes des éléments nécessaire au calcul d'un intervalle de confiance théorique pour la proportion et la seconde leur valeur. On a donc la véritable proportion , la taille de l'échantillon , le niveau de risque , le facteur . De plus, on y retrouve la borne inférieure et la borne supérieure de l'intervalle de confiance ainsi que le pourcentage des estimations qui sont dans l'intervalle.   "
},
{
  "id": "sec-Postlab_Intervalle",
  "level": "1",
  "url": "sec-Postlab_Intervalle.html",
  "type": "Section",
  "number": "5.3",
  "title": "Réflexions",
  "body": " Réflexions    Travail à faire après le laboratoire         Dans la , on a voulu construire des intervalles de confiance avec une marge d'erreur de secondes. Expliquer pourquoi les intervalles calculés n'ont pas exactement comme marge d'erreur.  Commenter la différence entre la proportion des échantillons pour lesquels est dans l'intervalle de confiance théorique autour de (calculée à ) et entre la proportion des intervalles de confiance autour des différentes valeurs de qui contiennent (calculée dans le ).   "
},
{
  "id": "sec-Postlab_Intervalle-3-2",
  "level": "2",
  "url": "sec-Postlab_Intervalle.html#sec-Postlab_Intervalle-3-2",
  "type": "Objectifs",
  "number": "5.3",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Postlab_Intervalle-3-3",
  "level": "2",
  "url": "sec-Postlab_Intervalle.html#sec-Postlab_Intervalle-3-3",
  "type": "Activité",
  "number": "5.3.1",
  "title": "",
  "body": "Dans la , on a voulu construire des intervalles de confiance avec une marge d'erreur de secondes. Expliquer pourquoi les intervalles calculés n'ont pas exactement comme marge d'erreur. "
},
{
  "id": "sec-Postlab_Intervalle-3-4",
  "level": "2",
  "url": "sec-Postlab_Intervalle.html#sec-Postlab_Intervalle-3-4",
  "type": "Activité",
  "number": "5.3.2",
  "title": "",
  "body": "Commenter la différence entre la proportion des échantillons pour lesquels est dans l'intervalle de confiance théorique autour de (calculée à ) et entre la proportion des intervalles de confiance autour des différentes valeurs de qui contiennent (calculée dans le ). "
},
{
  "id": "sec-Prelab_TestHyp",
  "level": "1",
  "url": "sec-Prelab_TestHyp.html",
  "type": "Section",
  "number": "6.1",
  "title": "Prélab",
  "body": " Prélab  Dans une recherche scientifique, la première étape consiste à planifier l'étude. Cela inclut la revue du contexte théorique, la formulation des questions et des hypothèses de recherche, la définition des unités statistiques ainsi que des variables à étudier, le choix de la méthode d'échantillonnage et de l'outil de collecte de données.  Ensuite, la collecte de données est effectuée à l'aide de l'outil de collecte approprié. Une fois les données récoltées, il convient de les organiser et de les traiter.  Le but ultime d'une étude scientifique est de répondre aux questions de recherche en généralisant les résultats d'un échantillon à la population. Les résultats observés dans l'échantillon révèlent-ils un changement dans le comportement de la population, ou sont-ils simplement dus au hasard de l'échantillonnage? La prochaine étape de la recherche consiste donc à réaliser des tests d'hypothèse paramétriques, notamment des tests d'hypothèse sur une moyenne, des tests sur une proportion, des tests de comparaison entre deux moyennes et des tests de comparaison entre deux proportions. Ce sera l'occasion de se familiariser avec les canevas créés et de comprendre les subtilités des tests d'hypothèse paramétriques.    Travail à faire avant le cours    Examiner les séries statistiques.  Effectuer une revue de la littérature.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Se questionner sur la généralisation des mesures échantillonnales à la population.    Dans ce prochain laboratoire, quatre bases de données seront exploitées, chacune correspondant à un test d'hypothèse spécifique. Pour le test d'hypothèse sur une moyenne, on analysera les données des précipitations totales reçues au mois de mars 2024, présentées à la .Le test d'hypothèse sur une proportion s'appuiera sur les données démographiques des soldats de l'armée américaine disponibles à la . Pour le test sur deux moyennes indépendantes, les données diagnostiques des femmes d'origine pima d'Arizona (voirla ) seront utilisées. Enfin, concernant le test sur deux moyennes dépendantes, une étude sur la qualité de l'air à Montréal sera réalisée avec les données présentées à la .   Une personne enseignante veut effectuer une expérience en classe avec ses élèves. Dans sa main se trouve un petit sac noir. Elle indique aux élèves que le sac contient six billes, quatre billes bleues et deux billes vertes. Ensemble, ils vont réaliser une expérience aléatoire qui consiste à piger avec remise six billes du sac. On s'intéresse au nombre de billes bleues pigées. À tour de rôle, la personne enseignante fait piger une bille par un élève. À la fin du tirage, six billes vertes ont été pigées. Ce résultat peut être vu comme le résultat du prélèvement d'un échantillon aléatoire. Piger six billes vertes, est-ce un résultat attendu? Sur quoi faut-il se baser pour répondre à cette question? La valeur échantillonnale est comparée à quoi?  Justifier la réponse de l'exercice avec les calculs appropriés (cote z ou probabilité d'obtenir un tel résultat).  À la lumière des réflexions des exercices et , quelles sont les deux conclusions possibles? Laquelle des deux vous semblent la plus probable?   Dans un test d'hypothèse, est-ce le paramètre de la population ou la statistique de l'échantillon qui est testé? Expliquer.  Une personne enseignante veut effectuer une expérience en classe avec ses élèves. Elle donne à chaque élève un dé à six faces. Elle souhaite savoir quels dés sont truqués (pipés). Pour le déterminer, les élèves doivent les lancer plusieurs fois et noter la distribution des résultats obtenus. Lors de l'élaboration d'un test d'hypothèse, il faut formuler une hypothèse de base et une hypothèse alternative. L'hypothèse de base, soit , communément appelée l'hypothèse nulle, est un énoncé à tester partant de l'idée qu'il n'y a pas de différence significative dans le paramètre mesuré. L'hypothèse alternative est l'énoncé contraire à l'hypothèse nulle, soit qu'il y a une différence dans le paramètre mesuré. Dans ce scénario, pourquoi est-ce que l'hypothèse nulle serait que le dé n'est pas pipé. Pourquoi est-ce que l'hypothèse alternative serait que le dé est pipé? Expliquer.    La quantité moyenne quotidienne de précipitations totales reçues au courant du mois de mars à Montréal entre 1991 et 2020 est de mm par jour. Cependant, ces dernières années, de nombreux Montréalais ont l'impression que les précipitations mensuelles sont en baisse ( , page consultée le 23 novembre 2024  , page consultée le 23 novembre 2024  , page consultée le 23 novembre 2024 ). Pour vérifier cette hypothèse, on souhaite réaliser un test d'hypothèse sur une moyenne en se basant sur les données échantillonnales d'Environnement Canada pour le mois de mars 2024 (voir la ) comme échantillon pour vérifier si la quantité moyenne de précipitations a diminué. On a obtenu une valeur de mm par jour. Il se peut que l'échantillon prélevé a donné une moyenne un peu plus basse que le paramètre de la population. C'est ce qu'on appelle la variabilité échantillonnale. Chaque échantillon donne une moyenne différente. Il se peut que la différence n'est pas simplement due au hasard de l'échantillonnage. Sans faire de calculs, est-ce que la différence entre mm et mm paraît grande à première vue, et donc significative?  À l'exercice , si l'on effectuait un test d'hypothèse sur une moyenne, avec pour hypothèse nulle que la quantité moyenne de précipitations totales reçues par jour en mars est la même que la valeur historique de mm, et pour hypothèse alternative de recherche que la moyenne a changé et est inférieure à mm par jour, s'attend-on à rejeter ou non l'hypothèse nulle selon la valeur échantillonnale obtenue? Quelles sont les attentes intuitives? Dans le cas présent, le test est-il nécessaire? En d'autres mots, la conclusion semble-t-elle évidente?  Outre la moyenne échantillonnale, quels facteurs peuvent influencer la conclusion d'un test d'hypothèse sur une moyenne?  Selon un rapport démographique de la communauté militaire américaine , page 29 consultée le 30 novembre 2024 , en 2010, l'armée américaine comptait de membres issus de minorités ethniques. En 2011, un échantillon aléatoire de membres de l'armée américaine a été prélevé dans lequel des soldats étaient de minorités ethniques. On pourrait supposer que la proportion de membres issus de minorité ethnique augmente à chaque année. Cependant, il se peut que l'échantillon prélevé a donné une proportion un peu plus élevée que le paramètre de la population par hasard de l'échantillonnage. Sans faire de calculs, est-ce que la différence entre et paraît grande à première vue, et donc significative?    Dans le , on a comparé l'indice de masse corporelle moyen des femmes pimas atteintes de diabète, qui s'élève à , à celui des femmes non diabétiques, qui est de . Sans effectué de calculs, la différence paraît-elle significative? Si l'hypothèse nulle stipule que les femmes pimas atteintes de diabète ont le même indice de masse corporelle que celles qui n'en souffrent pas, doit-on s'attendre à rejeter cette hypothèse? Justifier. Un test d'hypothèse sur la comparaison de deux moyennes indépendantes est-il nécessaire?  On souhaite comparer la qualité de l'air le jour précédant et le jour suivant le grand déluge qu'a connu la ville de Montréal le 9 août 2024, en s'appuyant sur les mesures des particules fines (les ). Les mesures proviennent des mêmes onze stations actives dans la région montréalaise. L'hypothèse nulle du test sur deux moyennes dépendantes est qu'il n'y a aucune différence entre la quantité de particules fines le jour précédant et suivant le grand déluge. Si la moyenne échantillonnale des différences est d'environ avec un écart type corrigé de , doit-on s'attendre à rejeter cette hypothèse? Justifier. Un test d'hypothèse de deux moyennes dépendantes est-il nécessaire?    "
},
{
  "id": "ws-Prelab_TestHyp-2",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#ws-Prelab_TestHyp-2",
  "type": "Objectifs",
  "number": "6.1",
  "title": "",
  "body": "  Examiner les séries statistiques.  Effectuer une revue de la littérature.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Se questionner sur la généralisation des mesures échantillonnales à la population.   "
},
{
  "id": "TestHyp_1",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_1",
  "type": "Activité",
  "number": "6.1.1",
  "title": "",
  "body": "Une personne enseignante veut effectuer une expérience en classe avec ses élèves. Dans sa main se trouve un petit sac noir. Elle indique aux élèves que le sac contient six billes, quatre billes bleues et deux billes vertes. Ensemble, ils vont réaliser une expérience aléatoire qui consiste à piger avec remise six billes du sac. On s'intéresse au nombre de billes bleues pigées. À tour de rôle, la personne enseignante fait piger une bille par un élève. À la fin du tirage, six billes vertes ont été pigées. Ce résultat peut être vu comme le résultat du prélèvement d'un échantillon aléatoire. Piger six billes vertes, est-ce un résultat attendu? Sur quoi faut-il se baser pour répondre à cette question? La valeur échantillonnale est comparée à quoi? "
},
{
  "id": "TestHyp_2",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_2",
  "type": "Activité",
  "number": "6.1.2",
  "title": "",
  "body": "Justifier la réponse de l'exercice avec les calculs appropriés (cote z ou probabilité d'obtenir un tel résultat). "
},
{
  "id": "TestHyp_3",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_3",
  "type": "Activité",
  "number": "6.1.3",
  "title": "",
  "body": "À la lumière des réflexions des exercices et , quelles sont les deux conclusions possibles? Laquelle des deux vous semblent la plus probable? "
},
{
  "id": "TestHyp_4",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_4",
  "type": "Activité",
  "number": "6.1.4",
  "title": "",
  "body": "Dans un test d'hypothèse, est-ce le paramètre de la population ou la statistique de l'échantillon qui est testé? Expliquer. "
},
{
  "id": "TestHyp_5",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_5",
  "type": "Activité",
  "number": "6.1.5",
  "title": "",
  "body": "Une personne enseignante veut effectuer une expérience en classe avec ses élèves. Elle donne à chaque élève un dé à six faces. Elle souhaite savoir quels dés sont truqués (pipés). Pour le déterminer, les élèves doivent les lancer plusieurs fois et noter la distribution des résultats obtenus. Lors de l'élaboration d'un test d'hypothèse, il faut formuler une hypothèse de base et une hypothèse alternative. L'hypothèse de base, soit , communément appelée l'hypothèse nulle, est un énoncé à tester partant de l'idée qu'il n'y a pas de différence significative dans le paramètre mesuré. L'hypothèse alternative est l'énoncé contraire à l'hypothèse nulle, soit qu'il y a une différence dans le paramètre mesuré. Dans ce scénario, pourquoi est-ce que l'hypothèse nulle serait que le dé n'est pas pipé. Pourquoi est-ce que l'hypothèse alternative serait que le dé est pipé? Expliquer. "
},
{
  "id": "TestHyp_7",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_7",
  "type": "Activité",
  "number": "6.1.6",
  "title": "",
  "body": "La quantité moyenne quotidienne de précipitations totales reçues au courant du mois de mars à Montréal entre 1991 et 2020 est de mm par jour. Cependant, ces dernières années, de nombreux Montréalais ont l'impression que les précipitations mensuelles sont en baisse ( , page consultée le 23 novembre 2024  , page consultée le 23 novembre 2024  , page consultée le 23 novembre 2024 ). Pour vérifier cette hypothèse, on souhaite réaliser un test d'hypothèse sur une moyenne en se basant sur les données échantillonnales d'Environnement Canada pour le mois de mars 2024 (voir la ) comme échantillon pour vérifier si la quantité moyenne de précipitations a diminué. On a obtenu une valeur de mm par jour. Il se peut que l'échantillon prélevé a donné une moyenne un peu plus basse que le paramètre de la population. C'est ce qu'on appelle la variabilité échantillonnale. Chaque échantillon donne une moyenne différente. Il se peut que la différence n'est pas simplement due au hasard de l'échantillonnage. Sans faire de calculs, est-ce que la différence entre mm et mm paraît grande à première vue, et donc significative? "
},
{
  "id": "TestHyp_8",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_8",
  "type": "Activité",
  "number": "6.1.7",
  "title": "",
  "body": "À l'exercice , si l'on effectuait un test d'hypothèse sur une moyenne, avec pour hypothèse nulle que la quantité moyenne de précipitations totales reçues par jour en mars est la même que la valeur historique de mm, et pour hypothèse alternative de recherche que la moyenne a changé et est inférieure à mm par jour, s'attend-on à rejeter ou non l'hypothèse nulle selon la valeur échantillonnale obtenue? Quelles sont les attentes intuitives? Dans le cas présent, le test est-il nécessaire? En d'autres mots, la conclusion semble-t-elle évidente? "
},
{
  "id": "TestHyp_9",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_9",
  "type": "Activité",
  "number": "6.1.8",
  "title": "",
  "body": "Outre la moyenne échantillonnale, quels facteurs peuvent influencer la conclusion d'un test d'hypothèse sur une moyenne? "
},
{
  "id": "TestHyp_10",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_10",
  "type": "Activité",
  "number": "6.1.9",
  "title": "",
  "body": "Selon un rapport démographique de la communauté militaire américaine , page 29 consultée le 30 novembre 2024 , en 2010, l'armée américaine comptait de membres issus de minorités ethniques. En 2011, un échantillon aléatoire de membres de l'armée américaine a été prélevé dans lequel des soldats étaient de minorités ethniques. On pourrait supposer que la proportion de membres issus de minorité ethnique augmente à chaque année. Cependant, il se peut que l'échantillon prélevé a donné une proportion un peu plus élevée que le paramètre de la population par hasard de l'échantillonnage. Sans faire de calculs, est-ce que la différence entre et paraît grande à première vue, et donc significative? "
},
{
  "id": "TestHyp_11",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_11",
  "type": "Activité",
  "number": "6.1.10",
  "title": "",
  "body": "Dans le , on a comparé l'indice de masse corporelle moyen des femmes pimas atteintes de diabète, qui s'élève à , à celui des femmes non diabétiques, qui est de . Sans effectué de calculs, la différence paraît-elle significative? Si l'hypothèse nulle stipule que les femmes pimas atteintes de diabète ont le même indice de masse corporelle que celles qui n'en souffrent pas, doit-on s'attendre à rejeter cette hypothèse? Justifier. Un test d'hypothèse sur la comparaison de deux moyennes indépendantes est-il nécessaire? "
},
{
  "id": "TestHyp_12",
  "level": "2",
  "url": "sec-Prelab_TestHyp.html#TestHyp_12",
  "type": "Activité",
  "number": "6.1.11",
  "title": "",
  "body": "On souhaite comparer la qualité de l'air le jour précédant et le jour suivant le grand déluge qu'a connu la ville de Montréal le 9 août 2024, en s'appuyant sur les mesures des particules fines (les ). Les mesures proviennent des mêmes onze stations actives dans la région montréalaise. L'hypothèse nulle du test sur deux moyennes dépendantes est qu'il n'y a aucune différence entre la quantité de particules fines le jour précédant et suivant le grand déluge. Si la moyenne échantillonnale des différences est d'environ avec un écart type corrigé de , doit-on s'attendre à rejeter cette hypothèse? Justifier. Un test d'hypothèse de deux moyennes dépendantes est-il nécessaire? "
},
{
  "id": "sec-Laboratoire_TestHyp",
  "level": "1",
  "url": "sec-Laboratoire_TestHyp.html",
  "type": "Section",
  "number": "6.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Dans ce laboratoire, l'objectif est de poursuivre l'analyse d'une base de données, soit l'étape d'inférence statistique. On souhaite répondre aux questions de recherche et valider les hypothèse de recherche à l'aide de tests paramétriques.  Pour les tests d'hypothèse sur une moyenne, sur une proportion et sur deux moyennes indépendantes, on utilise les données diagnostiques provenant de l'échantillon de femmes d'origine pima traitées dans les trois premiers laboratoires.  Pour le test d'hypothèse sur deux moyennes dépendantes, on utilise les données sur la qualité de l'air de la ville de Montréal. On désire savoir s'il y a une différence significative dans les polluants avant et après d'intenses précipitations.      Présentation des canevas  Les tests d'hypothèse paramétriques comportent plusieurs étapes : formuler les hypothèses nulle et alternative, préciser les informations du problème et fixer le seuil de signification, vérifier les conditions d'application du test, calculer l'écart type , définir la règle de décision, calculer la statistique du test, calculer la cote ou observée de la statistique ou la valeur p, puis prendre une décision et conclure.  Le logiciel Excel réalise certaines de ces étapes, mais ne décompose pas toutes les phases d'un test. Ainsi, un canevas a été créé pour bien visualiser l'ensemble des étapes d'un test de manière plus détaillée. Dans cette sous-section, on explique les particularités des canevas.  La figure présente la configuration du canevas pour un test d'hypothèse sur une moyenne.    Configuration générale d'un canevas (quatre premières étapes d'un test)   Configuration générale d'un canevas (quatre premières étapes d'un test)     Configuration générale d'un canevas (étapes 5 et 6 d'un test)   Configuration générale d'un canevas (étapes 5 et 6 d'un test)     Configuration générale d'un canevas (dernière étape d'un test)   Configuration générale d'un canevas (dernière étape d'un test)     Configuration générale d'un canevas   Configuration générale d'un canevas      Les cellules ayant un fond bleu contiennent les titres de chaque étape du test d'hypothèse.  Les cellules ayant un fond rose ne peuvent pas être modifiées. À cet effet, elles sont protégées pour empêcher l'utilisateur d'y apporter des changements. Certaines de ces cellules contiennent des formules; par exemple, la cellule C22 contient la formule permettant de calculer . Cette cellule reste vide jusqu'à ce que tous les paramètres nécessaires à son calcul ont été attribués une valeur numérique dans leurs cellules respectives. Il arrive parfois que du contenu soit effacé par erreur lors de la saisie. La protection des cellules prévient ce type d'erreur.  Les cellules ayant un fond gris et une bordure noire doivent être remplies. Certaines de ces cellules ont des menus déroulants permettant l'utilisateur de choisir une option. Par exemple, la cellule D6 contient un menu déroulant forçant l'utilisateur de choisir le symbole approprié ( ou ) pour le type de test que ce dernier souhaite réaliser (voir la ).    Menu déroulant de certaines cellules   Menu déroulant de certaines cellules    Lorsqu'une cellule grisée contient un menu déroulant, l'utilisateur doit choisir une des options.  D'autres cellules grisées sont vides et doivent être remplies par l'utilisateur. Parfois, il faut y inscrire des valeurs numériques; d'autres fois, il faut y inscrire du texte. Tel est le cas pour la cellule E5 . L'utilisateur doit taper la valeur numérique de qu'il souhaite tester.  Certaines des cellules grisées sont accompagnées d'une boîte offrant des instructions lorsque la cellule est sélectionnée. La figure présente un tel exemple pour la cellule C10 .    Exemple d'un message accompagnant la sélection d'une cellule grisée   Exemple d'un message accompagnant la sélection d'une cellule grisée         Test d'hypothèse sur une moyenne  Les tests d'hypothèse sur une moyenne permettent de décider si la moyenne d'une population a changé en se basant sur une moyenne échantillonnale, c'est-à-dire de déterminer si la différence entre les deux moyennes est statistiquement significative ou si elle n'est due qu'au hasard de l'échantillonnage.  D'après les données récoltées entre 1991 à 2020 par Environnement Canada à la station météorologique de l'Aéroport international Pierre-Elliott-Trudeau de Montréal Données tirées de , page consultée le 21 novembre 2024 , la ville de Montréal reçoit en moyenne mm de précipitations totales au mois de mars, soit environ mm par jour. Les précipitations totales sont la somme de la pluie totale et de l'équivalent en eau de la neige totale en millimètres. Cependant, ces dernières années, de nombreux Montréalais ont l'impression que les précipitations mensuelles sont en baisse. Pour vérifier cette hypothèse, on va la tester avec les données d'Environnement Canada pour le mois de mars 2024 Données tirées de , page consultée le 21 novembre 2024 .    Calculer les mesures statistiques échantillonnales  Pour réaliser un test d'hypothèse sur une moyenne, il faut préalablement avoir calculé les mesures statistiques de l'échantillon, c'est-à-dire la moyenne et l'écart type corrigé.  Ceci peut se faire en en utilisant les fonctions Excel MOYENNE et ÉCARTYPE.STANDARD .    Télécharger et ouvrir le classeur Données_Précipitations.xlsm .  Dans la feuille intitulée Données_Précipitations , sélectionner le tableau dans son entièreté, soit la plage de cellules F5:G36 .  En suivant les étapes présentées à la , attribuer au tableau le nom « Échantillon ».  En suivant les étapes présentées à la , attribuer des noms aux deux colonnes du tableau Échantillon .       Copier le cavenas Une moyenne  Pour effectuer un test d'hypothèse, il faut copier (importer) le canevas dans le fichier de travail.    Ouvrir les fichiers Excel Données_Précipitations.xlsm et Labo 6_Canevas.xlsm .  Effectuer la procédure présentée à la ... (voir labo 4 JS) pour copier la feuille Une moyenne du fichier Labo 6_Canevas au classeur Données_Précipitations .      Étapes d'un test sur une moyenne  Les étapes pour réaliser un test d'hypothèse sur une moyenne sont présentées. On veut tester si la quantité moyenne de précipitations reçues par jour en mars à Montréal a diminué. La valeur historique de 1991 à 2020 est de mm par jour. On va se baser sur un échantillon du mois de mars 2024. On choisit un seuil de signification de .    Dans le classeur Données_Précipitations , sélectionner la feuille Une moyenne .  La première étape d'un test consiste à écrire la moyenne de référence de la population, ainsi qu'à définir le type de test que l'on souhaite réaliste, à savoir un test unilatéral à gauche, à droite ou bilatéral. Dans la cellule E5 , taper =77,2\/31 , soit la quantité moyenne de précipitations reçues en mars de 1991 à 2020 divisée par le nombre de jours en mars. La cellule E6 se remplit automatiquement avec la même valeur (voir la ).  Puisque notre hypothèse de recherche est que la quantité moyenne de précipitations quotidiennes a diminué, on privilégie un test unilatéral à gauche. Dans la cellule D6 de la feuille Une moyenne , il faut donc choisir le symbole (voir la ).    Détermination de la moyenne de référence et choix de l'hypothèse alternative   Détermination de la moyenne de référence mu et choix de l'hypothèse alternative      Dans la deuxième étape du test, il faut remplir les cases grisées avec les informations demandées.    Choisir un seuil de . Dans la cellule C9 , taper (voir la ).   Puisque la taille de la population est le nombre de jours du mois de mars ( ) multipliée par le nombre d'années ( ), taper =30*31 dans la cellule C10 (voir la ).   L'écart type de la population est inconnu. Ainsi, dans la cellule C11 , taper inconnu (voir la ).   Il faut trouver la moyenne échantillonnale, soit . Dans la cellule F9 , taper =MOYENNE(Précipitations) (voir la ).  Dans la cellule F10 , taper =NB(Précipitations) pour indiquer la taille de l'échantillon (voir la ).  Dans la cellule F11 , taper =ECARTYPE.STANDARD(Précipitations) pour indiquer l'écart type corrigé, , de l'échantillon (voir la ).  Une fois les plages F9:F11 remplies, il est possible de constater que les cellules C20 , E20 et C22 se remplissent automatiquement, les cellules étant pré-remplies avec les formules appropriées (voir la ).    Remplissage des informations de l'étape 2   Remplissage des informations de l'étape 2         À la troisième étape, il faut vérifier les conditions d'application du test. Puisque la taille de l'échantillon est supérieure à 30, on utilise la loi normale. Dans la cellule C14 , sélectionner Normale . Écrire un texte dans la cellule fusionnée C16 expliquant ce choix (voir la ).    Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test      L'écart type de la distribution , soit , est calculé à l'aide des informations se trouvant dans les cellules C10 , C11 , F10 , F11 , C20 et C21 .  À la cinquième étape, il faut écrire la règle de décision, soit avec le calcul de la statistique du test ou avec la valeur p. Dans la cellule B29 , sélectionner la statistique appropriée du test unilatéral à gauche utilisant la loi normale, soit (voir la ). Remarquer que la valeur de (environ ) dans la cellule D29 et F31 est pré-remplie et correspond bien à la cote pour un seuil de signification de .  Dans la cellule E31 , sélectionner les mots appropriés parmi les trois choix du menu déroulant. Puisque l'on effectue un test unilatéral à gauche, il faut choisir les mots « plus petite que » (voir la ).  La cellule F34 est pré-remplie avec la valeur du seuil de signification pour indiquer que l'on rejette l'hypothèse nulle si la valeur p trouvée est inférieure à .    Remplissage des cellules pour l'étape 5   Remplissage des cellules pour l'étape 5      À la sixième étape, toutes les cases roses se remplissent automatiquement selon les informations fournies précédemment. On observe que la cote a une valeur d'environ . La valeur p calculée par Excel est d'environ (voir la ).    Remplissage automatique des cellules pour l'étape 6   Remplissage automatique des cellules pour l'étape 6      Dans la cellule A47 , écrire la décision et la conclusion du test en fonction de la règle de décision.    Décision et conclusion du test   Décision et conclusion du test           Test d'hypothèse sur une proportion  Les tests d'hypothèse sur une proportion permettent de décider si la proportion d'une population a changé en se basant sur une proportion échantillonnale, c'est-à-dire de déterminer si la différence entre les deux pourcentages est statistiquement significative ou si elle n'est due qu'au hasard de l'échantillonnage.  Selon un rapport démographique de la communauté militaire américaine  , page consultée le 24 novembre 2024 , en 2010, l'armée américaine comptait de membres issus de minorités ethniques. Dans cette sous-section, on introduit les données d'un échantillon de membres de l'armée américaine, prélevé en 2011. On pourrait supposer que la proportion de membres issus de minorité ethnique augmente à chaque année. C'est ce que l'on va vérifier. La base de données, modifiée pour répondre aux objectifs de ce laboratoire, a été obtenue du site , page consultée le 24 novembre 2024 . Dans le fichier, les ethnies des membres ont un code nominal. Le code 1 signifie une personne blanche, les codes 2 à 7 correspondent aux personnes issues de minorités ethniques.    Calculer la proportion échantillonnale  Pour réaliser un test d'hypothèse sur une proportion, il faut préalablement avoir calculé la proportion échantillonnale.  Ceci peut se faire en générant un tableau croisé dynamique.    Ouvrir le classeur Données_Armée.xlsm .  Dans la feuille intitulée Données_Armée , sélectionner le tableau dans son entièreté, soit la plage de cellules A5:I6073 .  En suivant les étapes présentées à la , attribuer au tableau le nom « Échantillon ».  En suivant les étapes présentées à la , attribuer des noms à toutes les colonnes du tableau Échantillon .  En suivant les étapes présentées à la , générer, dans une nouvelle feuille de calcul intitulé TCD_Ethnie , un tableau croisé dynamique vide à partir du tableau Échantillon . Placer ce tableau dans la cellule A3 .  Glisser et déposer la variable Ethnie dans la zone de saisie Lignes (voir la ).    Tableau croisé dynamique de la répartition de l'échantillon de 6068 membres de l'armée américaine selon leur ethnie en 2011   Tableau croisé dynamique de la répartition de l'échantillon de 6068 membres de l'armée américaine selon leur ethnie en 2011       Glisser et déposer la variable Ethnie dans la zone de saisie Valeurs (voir la ).  En suivant les étapes de présentées à la , afficher le nombre de personnes en pourcentage (voir la ).   On s'intéresse au pourcentage total des codes 2 à 8. Il est possible de regrouper ces modalités pour trouver la proportion échantillonnale. Sélectionner les cellules A5:B10 (voir la ).    Tableau croisé dynamique final   Tableau croisé dynamique final      Cliquer sur le bouton de droite de la souris et sélectionner l'onglet Grouper (voir la ). Le groupe 1 dans le tableau croisé dynamique regroupe tous les membres issus de minorités ethniques. La proportion échantillonnale est de .       Copier le cavenas Une proportion (normale)  Pour effectuer un test d'hypothèse, il faut copier le canevas dans le fichier de travail.    Ouvrir les fichiers Excel Données_Armée.xlsm et Labo 6_Canevas.xlsm .  Effectuer la procédure présentée à la ... (voir labo 4 JS) pour copier la feuille Une proportion du fichier Labo 6_Canevas au classeur Données_Armée . Placer cette feuille en dernière position.      Étapes d'un test sur une proportion  Les étapes pour réaliser un test d'hypothèse sur une proportion sont présentées. On veut tester si la proportion de membres de l'armée américaine issus de minorités ethniques a augmenté en 2011 versus 2010. On choisit un seuil de .    Sélectionner la feuille Une proportion (normale) .  La première étape d'un test consiste à écrire la proportion de référence de la population, ainsi qu'à définir le type de test que l'on souhaite réaliste, à savoir un test unilatéral à gauche, à droite ou bilatéral. Dans la cellule E5 , taper la valeur . On a choisi d'écrire les mesures en décimales. La cellule E6 se remplit automatiquement avec la même valeur (voir la ).  Puisque notre hypothèse de recherche est que la proportion de membres de l'armée américaine issus de minorités ethniques a augmenté, on privilégie un test unilatéral à droite. Dans la cellule D6 de la feuille Une proportion (normale) , il faut donc choisir le symbole (voir la ).    Détermination de la proportion de référence et choix de l'hypothèse alternative   Détermination de la proportion de référence pi et choix de l'hypothèse alternative     Dans la deuxième étape du test, il faut remplir les cases grisées avec les informations demandées.    Choisir un seuil de . Dans la cellule C9 , taper (voir la ).   Puisqu'on ne connaît pas la taille de la population de l'armée américaine, on suppose qu'elle est grande. Selon le rapport démographique de 2020, il y avait au moins membres en 2010. Ainsi, le test ne requière pas de facteur de correction. Dans la cellule C10 , taper « grande » (voir la ).   Il faut indiquer la proportion échantillonnale de . On peut la copier de la feuille TCD_Ethnie ou simplement recopier la valeur manuellement. Dans la cellule F9 de feuille Une proportion , taper =0,3751 (voir la ).   Dans la cellule F10 , taper =6068 pour indiquer la taille de l'échantillon (voir la ).   Une fois les plages F9:F10 remplies, il est possible de constater que les cellules C20 , E20 et C22 se remplissent automatiquement, les cellules étant pré-remplies avec les formules appropriées (voir la ).    Remplissage des informations de l'étape 2   Remplissage des informations de l'étape 2         À la troisième étape, il faut vérifier les conditions d'application du test. Puisque la taille de l'échantillon est supérieure à 30 et que les produits et sont supérieurs à 5, on utilise la loi normale. Écrire un texte dans la cellule fusionnée C16 expliquant ce choix (voir la ).    Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test      L'écart type de la distribution , soit dans la cellule C22 , est calculé à l'aide des informations se trouvant dans les cellules E5 , F10 , C20 , C21 .  À la cinquième étape, il faut écrire la règle de décision, soit avec le calcul de la statistique du test ou avec la valeur p. Dans la cellule B29 , sélectionner la statistique appropriée du test unilatéral à droite utilisant la loi normale, soit . Remarquer que la valeur de (environ ) dans la cellule D29 et G31 est pré-remplie et correspond bien à la cote pour un seuil de signification de (voir la ).  Dans la cellule E31 , sélectionner les mots appropriés parmi les trois choix du menu déroulant. Puisque l'on effectue un test unilatéral à droite, il faut choisir les mots « plus grande que » (voir la ).    Remplissage des cellules pour l'étape 5   Remplissage des cellules pour l'étape 5      À la sixième étape, toutes les cases roses se remplissent automatiquement selon les informations fournies précédemment (voir la ).  Dans la cellule A47 , écrire la décision et la conclusion du test en fonction de la règle de décision (voir la ).    Décision et conclusion du test   Décision et conclusion du test           Test d'hypothèse sur deux moyennes indépendantes  Les tests d'hypothèse sur deux moyennes indépendantes, aussi appelés des tests sur la comparaison ou la différence de deux moyennes, permettent de comparer les moyennes de deux populations, c'est-à-dire de déterminer si la différence entre les deux est statistiquement significative ou si elle n'est due qu'au hasard de l'échantillonnage.  Pour réaliser un test sur deux moyennes indépendantes, il faut s'assurer que les deux échantillons sont sélectionnés indépendamment l'un de l'autre.  Dans cette sous-section, on revient sur l'une des questions de recherche du laboratoire 3, à savoir si les femmes d'origine pima d'Arizona atteintes de diabète ont un indice de masse corporelle moyen plus élevé que celui des femmes non atteintes de cette maladie. Les deux échantillons (femmes avec diabète et femmes sans diabète) sont bien indépendants.   Calculer les mesures statistiques échantillonnales  Pour réaliser un test d'hypothèse sur deux moyennes, il faut préalablement avoir calculé les mesures statistiques de chaque échantillon, c'est-à-dire leur moyenne et leur écart type corrigé respectif.  Heureusement, à la dans la , les indices de masse corporelle moyens pour les femmes atteintes et non de diabète ont déjà été calculés, ainsi que les écarts types corrigés respectifs. On est en mesure d'effectuer le test.   Filtrage de données aberrantes  Lors d'un test d'hypothèse paramétriques, il est important de filtrer les valeurs aberrantes avant de calculer les mesures descriptives. Dans le cas des données diagnostiques des femmes d'origina pima, un filtrage est nécessaire si l'on veut les moyennes et les écarts types corrigés sans tenir compte des valeurs nulles de l'indice de masse corporelle.      Copier le cavenas 2 moyennes indépendantes     Ouvrir les fichiers Excel Données_Diabète.xlsm , le fichier complété du laboratoire 3, et Labo 6_Canevas.xlsm .  Effectuer la procédure présentée à la ... (voir labo 4 JS) pour copier la feuille 2 moyennes indépendantes du fichier Labo 6_Canevas au classeur Données_Diabètes .  Placer la feuille 2 moyennes indépendantes en dernière position si Excel ne le fait pas pas défaut.      Étapes d'un test sur deux moyennes indépendantes  Les étapes pour réaliser un test d'hypothèse sur deux moyennes indépendantes sont présentées.    Il faut définir et . Soit , les femmes d'origine pima d'Arizona atteintes de diabète, et soit , les femmes d'origine pima d'Arizona sans diabète. Pour aider le l'utilisateur, il est pertinent de taper dans la cellule C4 « Atteint », et « Non Atteint » dans la cellule E4 (voir la ).  La première étape d'un test consiste à choisir le type de test que l'on souhaite réaliste, à savoir un test unilatéral à gauche, à droite ou bilatéral. Puisque notre hypothèse de recherche est que les femmes d'origine pima atteintes de diabètes ont un indice de masse corporelle moyen supérieur à celui des femmes non atteintes, on privilégie un test unilatéral à droite. Dans la cellule D6 du canevas, il faut donc choisir le symbole (voir la ).    Remplissage des cellules pour la première étape d'un test sur deux moyennes indépendates   Remplissage des cellules pour la première étape d'un test sur deux moyennes indépendates      Dans la deuxième étape du test, il faut remplir les cases grisées avec les informations demandées.    Choisir un seuil de . Dans la cellule C9 , taper (voir la ). (EXPLIQUER choix?)  Puisqu'on ne connaît pas la taille de la population des femmes d'origine pima vivant en Arizona, on suppose qu'elle est grande. Taper « grande » (voir la ).    Remplissage du seuil de signification et de la taille de la population   Remplissage du seuil de signification et de la taille de la population N      Pour les mesures descriptives échantillonnales de et , on utilise les valeurs calculées qui se trouvent dans la feuille Étude IMC-Atteinte (voir la ). Dans la cellule F9 de feuille 2 moyennes indépendantes , taper le symbole = . Ensuite, sélectionner la feuille de calcul Étude IMC-Atteinte et sélectionner la cellule J5 et appuyer sur la touche Enter (voir la ).    Insertion de la valeur de la moyenne échantillonnale des femmes atteintes de diabète    Insertion de la moyenne de la moyenne échantillonnale des femmes atteintes de diabète      Dans la cellule I9 de feuille 2 moyennes indépendantes , taper le symbole = . Ensuite, sélectionner la feuille de calcul Étude IMC-Atteinte et sélectionner la cellule J4 et appuyer sur la touche Enter (voir la ).  Pour la taille de chaque échantillon, si cela n'a pas été fait dans la , ajouter une quatrième colonne au tableau croisé dynamique de la feuille Étude IMC-Atteinte calculant le nombre de femmes dans chaque catégorie. Suivre les étapes de la (voir la ).  Dans la cellule F10 de feuille 2 moyennes indépendantes , taper le symbole = . Ensuite, sélectionner la feuille de calcul Étude IMC-Atteinte et sélectionner la cellule L5 et appuyer sur la touche Enter (voir la ).  Dans la cellule I10 de feuille 2 moyennes indépendantes , taper le symbole = . Ensuite, sélectionner la feuille de calcul Étude IMC-Atteinte et sélectionner la cellule L4 et appuyer sur la touche Enter (voir la ).  Répéter les étapes précédentes pour recopier les valeurs de et dans les cellules F11 et I11 respectivement (voir la ).   Une fois les plages F9:F11 et I9:I11 remplies, il est possible de constater que les cellules C20 et C21 se remplissent automatiquement, les cellules étant pré-remplies avec les formules appropriées. Dans la cellule C20 se trouve la formule pour s , paramètre nécessaire pour le calcul de l'écart type quand la taille d'un des échantillons est inférieur à 30. Dans ce test, puisque les deux échantillons sont supérieurs à 30, on n'a pas besoin de s (voir la ).    Remplissage des mesures descriptives de chaque échantillon   Remplissage des mesures descriptives de chaque échantillon         À la troisième étape, il faut vérifier les conditions d'application du test. Puisque les tailles d'échantillon et sont supérieures à 30, on utilise la loi normale. Dans la cellule C14 , sélectionner Normale . Écrire un texte dans la cellule fusionnée C16 expliquant ce choix (voir la ).    Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test      L'écart type de la distribution , soit , est calculé à l'aide de formule se trouvant dans les cellules C20 et C21 .  À la cinquième étape, il faut écrire la règle de décision, soit avec le calcul de la statistique du test ou avec la valeur p. Dans la cellule B27 , sélectionner la statistique appropriée du test unilatéral à droite, soit . Remarquer que la valeur de (environ ) dans la cellule D27 et G29 est pré-remplie et correspond bien à la cote pour un seuil de signification de (voir la ).  Dans la cellule E29 , sélectionner les mots appropriés parmi les trois choix du menu déroulant. Puisque l'on effectue un test unilatéral à droite, il faut choisir les mots « plus grande que » (voir la ).    Remplissage des cellules pour l'étape 5   Remplissage des cellules pour l'étape 5      À la sixième étape, toutes les cases roses se remplissent automatiquement selon les informations fournies précédemment (voir la ). On observe que la cote est énorme avec une valeur d'environ . Le rejet de l'hypothèse nulle est presqu'assuré. De plus, pour renchérir sur ce point, la valeur p calculée par Excel est quasiment (même en augmentant le nombre de décimales affichées).  Dans la cellule A45 , écrire la décision et la conclusion du test en fonction de la règle de décision (voir la ).    Décision et conclusion du test   Décision et conclusion du test          Utilitaire d'analyse   Avec Excel, il est possible de réaliser des tests sur deux moyennes à l'aide de l'outil Utilitaire d'analyse . Ce dernier permet de calculer la cote critique d'un test bilatéral ( ) et celle d'un test unilatéral ( ), ainsi que la statistique du test ( ) et la valeur p du test (bilatéral et unilatéral).  Cet outil possède néanmoins un inconvénient qui rend son utilisation moins pertinente dans certains cas. Il faut préalablement filtrer les données par échantillon. Dans le cas de l'indice de masse corporelle des femmes atteintes et non du diabète, il incombe de séparer les valeurs par présence de diabète avant d'utiliser l'utilitaire d'analyse. Excel ne permet pas d'inscrire les valeurs des moyennes de chaque échantillon.  Les étapes menant aux calculs des statistiques pertinentes avec l'utilitaire d'analyse sont présentées ci-dessous pour effectuer le test sur deux moyennes indépendantes présenté à la .     Dans la feuille Données du classeur Données_Diabètes , filtrer les données de la variable Atteint pour ne faire ressortir que les valeurs des femmes atteintes de diabète (voir la ).  Copier les valeurs de la colonne IMC et les coller dans la cellule D2 d'une nouvelle feuille. Taper le titre Atteint dans la cellule D1 .  Dans la feuille Données , filtrer les données de la variable Atteint pour ne faire ressortir que les valeurs des femmes non atteintes de diabète (voir la ).  Copier les valeurs de la colonne IMC et les coller dans la cellule E2 d'une nouvelle feuille ajoutée. Taper le titre Atteint dans la cellule E1 (voir la ).    Données brutes de l'IMC par présence de diabète   Données brutes de l'IMC par présence de diabète     Cliquer sur l'onglet Données . Dans le groupe Analyse , cliquer sur l'onglet Utilitaire d'analyse (voir la ). Il faut s'assurer que l'outil Utilitaire d'analyse soit visible (METTRE RÉFÉRENCE ANNEXE).    Sélection de l'onglet Utilitaire d'analyse   Sélection de l'onglet Utilitaire d'analyse      Sélectionner l'option Test d'égalité des espérances: deux observations de variances différentes (voir la ).  Une boîte de dialogue s'affiche. Il faut entrer la plage de données brutes des deux variables. Pour la variable 1, soit l'indice de masse corporelle des femmes atteintes de diabète, sélectionner la plage de cellules D2:D267 . Pour la variable 2, soit l'indice de masse corporelle des femmes non atteintes de diabète, sélectionner la plage de cellules E2:E492 (voir la .    Utilisation de l'outil Utilitaire d'analyse   Utilisation de l'utilitaire d'analyse      Il y a une zone pour écrire le seuil de signification voulu. Taper (voir la .   Il y a une zone pour indiquer la plage de sortie. Sélectionner la cellule ou taper (voir la .   Cliquer sur OK .   Le rapport généré s'affiche. Excel utilise la loi de Student pour tout test sur deux moyennes indépendantes, et ce, même si la loi normale peut être appliquée. Le rapport indique la statistique du test ( ), la cote critique du test unilatéral et bilatéral, ainsi que la valeur p du test unilatéral et bilatéral (voir la .    Rapport généré par l' Utilitaire d'analyse   Rapport généré par l'utilitaire d'analyse        En comparant la conclusion du test réalisé avec le canevas, on constate que la statistique du test ( ) est bien identique en utilisant le canevas et l'utilitaire d'analyse, comme il est attendu. Les valeurs p sont sensiblement les mêmes, proches de .     Test d'hypothèse sur deux moyennes dépendantes  Les tests d'hypothèse sur deux moyennes dépendantes, aussi appelés des tests sur des données appariées, permettent de comparer les moyennes de deux séries de mesures sur un même échantillon. C'est le cas lorsque l'on mesure en paires des observations sur les mêmes unités statistiques. Un tel exemple est l'impact d'intenses précipitations sur la qualité de l'air mesurée avant et après l'événement aux mêmes stations.  Pour réaliser un test sur deux moyennes dépendantes, il faut s'assurer que les mesures sont bien liées.  Dans cette section, on compare la qualité de l'air le jour précédant et le jour suivant le grand déluge qu'à connu la ville de Montréal le 9 août 2024, en s'appuyant sur les mesures des particules fines (les ). Les mesures proviennent des mêmes onze stations actives dans la région montréalaise. Ces deux séries de données sont bien dépendantes, puisque chaque station constitue une paire de mesures correspondantes. On contrôle les variables qui ne sont pas mesurées dans l'étude en les maintenant constantes. Dans l'étude de la qualité de l'air, l'endroit de la prise des mesures est maintenu fixe avec les mesures prises aux mêmes onze stations.   Tableau croisé dynamique de la quantité de polluant par station    Le tableau des mesures de la qualité d'air contient observations distinctes. Pour effectuer le test d'hypothèse comparant les mesures des particules fines (les ) des onze stations le jour précédant et suivant le 9 août à 13h, il est nécessaire de créer un tableau croisé dynamique afin d'extraire les paires de mesures requises. Les étapes sont présentées.     Dans la feuille Données_Qualité_Air , sélectionner le tableau dans son entièreté, soit la plage de cellules A1:E933881 .  En suivant les étapes présentées à la , attribuer au tableau le nom « Échantillon ».  En suivant les étapes présentées à la , attribuer des noms à toutes les colonnes du tableau Échantillon .  En suivant les étapes présentées à la , générer, dans une nouvelle feuille de calcul qu'on renomme TCD_Polluant , un tableau croisé dynamique vide à partir du tableau Échantillon . Placer ce tableau dans la cellule A3 .  Glisser et déposer la variable Station dans la zone de saisie Lignes (voir la ).    Tableau croisé dynamique avec la variable Station en lignes et la variable Jour en colonnes   Tableau croisé dynamique avec la variable Station en lignes et la variable Jour en colonnes        Glisser et déposer la variable Jour dans la zone de saisie Colonnes (voir la ).  On ne veut afficher que les valeurs du mois d'août 2024. Cliquer sur la flèche du menu déroulant de l' Étiquettes de colonnes . Sélectionner seulement l'année 2024. Cliquer sur OK (voir la ).    Filtrage de la variable Jour pour afficher l'année 2024   Filtrage de la variable Jour pour afficher l'année 2024      Cliquer sur le symbole + à côté de l'étiquette de la cellule B4 pour développer le champ (voir la ).    Développer la variable   Développer la variable 2024      Sélectionner la cellule B5 , soit la cellule où l'étiquette apparaît (voir la ).    Filtrage de la variable Jour pour n'afficher que le mois d'août 2024   Filtrage de la variable Jour pour n'afficher que le mois d'août 2024      Cliquer à nouveau sur la flèche du menu déroulant de l' Étiquettes de colonnes (voir la ).  Ne cocher que la case pour Trimestre 3 (voir la ).  Cliquer sur le symbole + à côté de l'étiquette de la cellule B5 (voir la ).  Sélectionner la cellule B6 , soit la cellule où l'étiquette apparaît (voir la ).  Cliquer à nouveau sur la flèche du menu déroulant de l' Étiquettes de colonnes (voir la ).  Ne cocher que la case pour Août (voir la ).  Cliquer sur le symbole + à côté de l'étiquette Août de la cellule B7 (voir la ).    Développer la variable août   Développer la variable août      On ne veut que le polluant PM25 . Il faut donc imposer un filtre. Glisser et déposer la variable Polluant dans la zone de saisie Filtres . Un filtre apparaît dans les cellules A1:B1 (voir la ).    Ajout de filtres pour le type de polluant et l'heure de la journée et insertion des valeurs de   Ajout de filtres pour le type de polluant et l'heure de la journée et insertion des valeurs de PM25      Cliquer sur la flèche du menu déroulant de la cellule B1 . Sélectionner PM (voir la ).  On souhaite choisir une prise de mesure à une heure précise, soit 13h. Glisser et déposer la variable Heure dans la zone de saisie Filtres . Un filtre apparaît dans les cellules A2:B2 (voir la ).  Cliquer sur la flèche du menu déroulant de la cellule B2 . Sélectionner 13 pour 13h (voir la ).  Glisser et déposer la variable Valeur dans la zone de saisie Valeurs . Puisqu'il n'y a qu'une mesure de par heure par station, on conserve le calcul de Somme de Valeurs (voir la ). On ne veut pas le compte.  Au final, on ne veut que les valeurs du 8 août et du 10 août (voir la ).    Sélection des colonnes du 8 août et du 10 août 2024   Sélection des colonnes du 8 août et du 10 août 2024      Copier et coller les deux colonnes en dessous du tableau croisé dynamique. Créer un tableau respectant toute la mise en forme vue à la (voir la ).    Tableau final des mesures pairées des particules fines avant et après le 9 août   Tableau final des mesures pairées des particules fines avant et après le 9 août      Donner au tableau créé à la le nom DonnéesTest (voir la ).  Sélectionner le tableau DonnéesTest et générer des noms pour les quatre colonnes qui le composent (voir la ).       Copier le cavenas 2 moyennes dépendantes  Avant d'effectuer le test sur deux moyenne dépendantes, il faut copier le canevas 2 moyennes dépendantes dans le classeur Données_Polluant .    Ouvrir les fichiers Excel Données_Polluant.xlsm et Labo 6_Canevas.xlsm .  Effectuer la procédure présentée à la ... (voir labo 4 JS) pour copier la feuille 2 moyennes dépendantes du fichier Labo 6_Canevas au classeur Données_Polluant .       Étapes d'un test sur deux moyennes dépendantes  Les étapes pour réaliser un test d'hypothèse sur deux moyennes dépendantes sont présentées.    La variable est définie comme les mesures de particules fines du 8 août 2024 et , les mesures du 10 août 2024. Soit , la différence. La quatrième colonne de la présente le calcul de la variable aléatoire .  La première étape d'un test consiste à choisir le type de test que l'on souhaite réaliste, à savoir un test unilatéral à gauche, à droite ou bilatéral. Puisque l'impact d'intenses précipitations n'est pas clair (voir la ), il est prudent d'être conservateur et de choisir un test bilatéral. Dans la cellule D6 de la feuille 2 moyennes dépendantes , il faut donc choisir le symbole (voir la ).    Remplissage des cellules pour la première étape d'un test sur deux moyennes dépendates   Remplissage des cellules pour la première étape d'un test sur deux moyennes dépendates      Dans la deuxième étape du test, il faut remplir les cases grisées avec les informations demandées.   Choisir un seuil de . Dans la cellule C9 , taper (voir la ).  Au moment de l'enregistrement du fichier, le nombre total de données était de observations. Prendre cela comme la taille de la population. Taper « 933881 » (voir la ).    Remplissage du seuil de signification et des mesures descriptives   Remplissage du seuil de signification et des mesures descriptives      Dans la cellule F9 , taper =MOYENNE(Différence) , Différence étant le nom de la quatrième colonne de la . Cliquer sur Enter (voir la ).  Dans la cellule F10 , taper =NB(Différence) pour calculer automatiquement le nombre de mesures pairées. Cliquer sur Enter (voir la ).  Dans la cellule F111 , taper =ECARTYPE.STANDARD(Différence) pour calculer l'écart type des mesures. Cliquer sur Enter (voir la ).  Une fois les plages F9:F11 remplies, il est possible de constater que les cellules C20 , D27 , G29 et F32 se remplissent automatiquement, les cellules étant pré-remplies avec les formules appropriées.     À la troisième étape, il faut vérifier les conditions d'application du test. Puisque l'on effectue le test avec un petit échantillon (inférieur à 30), il faut supposer que les différences sont normalement distribuées pour poursuivre le test. On utilise la loi de Student. Écrire un texte dans la cellule fusionnée C16 expliquant ce choix (voir la ).    Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test      L'écart type de la distribution , soit , est calculé à l'aide de formule se trouvant dans la cellule C20 (voir la ).    Remplissage des cellules pour les étapes 4 et 5   Remplissage des cellules pour les étapes 4 et 5      À la cinquième étape, il faut écrire la règle de décision, soit avec le calcul de la statistique du test ou avec la valeur p. Dans la cellule B27 , sélectionner la statistique appropriée du test bilatéral, soit . Remarquer que la valeur de (environ ) dans la cellule D27 et G29 est pré-remplie et correspond bien à la cote pour un seuil de signification de et un degré de liberté de 10 (voir la ).  Dans la cellule E29 , sélectionner les mots appropriés parmi les trois choix du menu déroulant. Puisque l'on effectue un test bilatéral, il faut choisir les mots « est différente de » (voir la ).   À la sixième étape, toutes les cases roses se remplissent automatiquement selon les informations fournies précédemment (voir la ). On observe que la cote est grande avec une valeur d'environ . Le rejet de l'hypothèse nulle est presqu'assuré. De plus, pour renchérir sur ce point, la valeur p calculée par Excel est d'environ .  Dans la cellule A45 , écrire la décision et la conclusion du test en fonction de la règle de décision (voir la ).    Décision et conclusion du test   Décision et conclusion du test     Il serait intéressant de vérifier si cette conclusion s'applique à tous les types de polluants.     Il est possible d'utiliser l'utilitaire d'analyse, comme présenté à la . Il suffit de sélectionner l'option Test d'égalité des espérances: observations pairées , l'option pour les tests d'hypothèse sur deux moyennes dépendantes.    "
},
{
  "id": "Fig_Canevas_1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Canevas_1",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " Configuration générale d'un canevas (quatre premières étapes d'un test)   Configuration générale d'un canevas (quatre premières étapes d'un test)   "
},
{
  "id": "Fig_Canevas_3",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Canevas_3",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": " Configuration générale d'un canevas (étapes 5 et 6 d'un test)   Configuration générale d'un canevas (étapes 5 et 6 d'un test)   "
},
{
  "id": "Fig_Canevas_4",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Canevas_4",
  "type": "Figure",
  "number": "6.2.3",
  "title": "",
  "body": " Configuration générale d'un canevas (dernière étape d'un test)   Configuration générale d'un canevas (dernière étape d'un test)   "
},
{
  "id": "Fig_Canevas_gif",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Canevas_gif",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " Configuration générale d'un canevas   Configuration générale d'un canevas   "
},
{
  "id": "Fig_Canevas_7",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Canevas_7",
  "type": "Figure",
  "number": "6.2.5",
  "title": "",
  "body": " Menu déroulant de certaines cellules   Menu déroulant de certaines cellules   "
},
{
  "id": "Fig_Canevas_8",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Canevas_8",
  "type": "Figure",
  "number": "6.2.6",
  "title": "",
  "body": " Exemple d'un message accompagnant la sélection d'une cellule grisée   Exemple d'un message accompagnant la sélection d'une cellule grisée   "
},
{
  "id": "Fig_Moy_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Moy_gif1",
  "type": "Figure",
  "number": "6.2.7",
  "title": "",
  "body": " Détermination de la moyenne de référence et choix de l'hypothèse alternative   Détermination de la moyenne de référence mu et choix de l'hypothèse alternative   "
},
{
  "id": "Fig_Moy_gif2",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Moy_gif2",
  "type": "Figure",
  "number": "6.2.8",
  "title": "",
  "body": " Remplissage des informations de l'étape 2   Remplissage des informations de l'étape 2   "
},
{
  "id": "Fig_Moy_gif3",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Moy_gif3",
  "type": "Figure",
  "number": "6.2.9",
  "title": "",
  "body": " Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test   "
},
{
  "id": "Fig_Moy_gif4",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Moy_gif4",
  "type": "Figure",
  "number": "6.2.10",
  "title": "",
  "body": " Remplissage des cellules pour l'étape 5   Remplissage des cellules pour l'étape 5   "
},
{
  "id": "Fig_Moy_24",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Moy_24",
  "type": "Figure",
  "number": "6.2.11",
  "title": "",
  "body": " Remplissage automatique des cellules pour l'étape 6   Remplissage automatique des cellules pour l'étape 6   "
},
{
  "id": "Fig_Moy_25",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Moy_25",
  "type": "Figure",
  "number": "6.2.12",
  "title": "",
  "body": " Décision et conclusion du test   Décision et conclusion du test   "
},
{
  "id": "Fig_TCD_Ethnie_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Ethnie_gif1",
  "type": "Figure",
  "number": "6.2.13",
  "title": "",
  "body": " Tableau croisé dynamique de la répartition de l'échantillon de 6068 membres de l'armée américaine selon leur ethnie en 2011   Tableau croisé dynamique de la répartition de l'échantillon de 6068 membres de l'armée américaine selon leur ethnie en 2011   "
},
{
  "id": "Fig_TCD_Ethnie_gif2",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Ethnie_gif2",
  "type": "Figure",
  "number": "6.2.14",
  "title": "",
  "body": " Tableau croisé dynamique final   Tableau croisé dynamique final   "
},
{
  "id": "Fig_Prop_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Prop_gif1",
  "type": "Figure",
  "number": "6.2.15",
  "title": "",
  "body": " Détermination de la proportion de référence et choix de l'hypothèse alternative   Détermination de la proportion de référence pi et choix de l'hypothèse alternative   "
},
{
  "id": "Fig_Prop_gif2",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Prop_gif2",
  "type": "Figure",
  "number": "6.2.16",
  "title": "",
  "body": " Remplissage des informations de l'étape 2   Remplissage des informations de l'étape 2   "
},
{
  "id": "Fig_Prop_12",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Prop_12",
  "type": "Figure",
  "number": "6.2.17",
  "title": "",
  "body": " Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test   "
},
{
  "id": "Fig_Prop_gif3",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Prop_gif3",
  "type": "Figure",
  "number": "6.2.18",
  "title": "",
  "body": " Remplissage des cellules pour l'étape 5   Remplissage des cellules pour l'étape 5   "
},
{
  "id": "Fig_Prop_18",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Prop_18",
  "type": "Figure",
  "number": "6.2.19",
  "title": "",
  "body": " Décision et conclusion du test   Décision et conclusion du test   "
},
{
  "id": "rem-Soustotal",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#rem-Soustotal",
  "type": "Remarque",
  "number": "6.2.20",
  "title": "Filtrage de données aberrantes.",
  "body": " Filtrage de données aberrantes  Lors d'un test d'hypothèse paramétriques, il est important de filtrer les valeurs aberrantes avant de calculer les mesures descriptives. Dans le cas des données diagnostiques des femmes d'origina pima, un filtrage est nécessaire si l'on veut les moyennes et les écarts types corrigés sans tenir compte des valeurs nulles de l'indice de masse corporelle.  "
},
{
  "id": "Fig_2Moy_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif1",
  "type": "Figure",
  "number": "6.2.21",
  "title": "",
  "body": " Remplissage des cellules pour la première étape d'un test sur deux moyennes indépendates   Remplissage des cellules pour la première étape d'un test sur deux moyennes indépendates   "
},
{
  "id": "Fig_2Moy_gif2",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif2",
  "type": "Figure",
  "number": "6.2.22",
  "title": "",
  "body": " Remplissage du seuil de signification et de la taille de la population   Remplissage du seuil de signification et de la taille de la population N   "
},
{
  "id": "Fig_2Moy_gif3",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif3",
  "type": "Figure",
  "number": "6.2.23",
  "title": "",
  "body": " Insertion de la valeur de la moyenne échantillonnale des femmes atteintes de diabète    Insertion de la moyenne de la moyenne échantillonnale des femmes atteintes de diabète   "
},
{
  "id": "Fig_2Moy_gif4",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif4",
  "type": "Figure",
  "number": "6.2.24",
  "title": "",
  "body": " Remplissage des mesures descriptives de chaque échantillon   Remplissage des mesures descriptives de chaque échantillon   "
},
{
  "id": "Fig_2Moy_gif5",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif5",
  "type": "Figure",
  "number": "6.2.25",
  "title": "",
  "body": " Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test   "
},
{
  "id": "Fig_2Moy_gif6",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif6",
  "type": "Figure",
  "number": "6.2.26",
  "title": "",
  "body": " Remplissage des cellules pour l'étape 5   Remplissage des cellules pour l'étape 5   "
},
{
  "id": "Fig_2Moy_gif7",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2Moy_gif7",
  "type": "Figure",
  "number": "6.2.27",
  "title": "",
  "body": " Décision et conclusion du test   Décision et conclusion du test   "
},
{
  "id": "Fig_Utilitaire_1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Utilitaire_1",
  "type": "Figure",
  "number": "6.2.28",
  "title": "",
  "body": " Données brutes de l'IMC par présence de diabète   Données brutes de l'IMC par présence de diabète   "
},
{
  "id": "Fig_Utilitaire_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Utilitaire_gif1",
  "type": "Figure",
  "number": "6.2.29",
  "title": "",
  "body": " Sélection de l'onglet Utilitaire d'analyse   Sélection de l'onglet Utilitaire d'analyse   "
},
{
  "id": "Fig_Utilitaire_gif2",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Utilitaire_gif2",
  "type": "Figure",
  "number": "6.2.30",
  "title": "",
  "body": " Utilisation de l'outil Utilitaire d'analyse   Utilisation de l'utilitaire d'analyse   "
},
{
  "id": "Fig_Utilitaire_10",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_Utilitaire_10",
  "type": "Figure",
  "number": "6.2.31",
  "title": "",
  "body": " Rapport généré par l' Utilitaire d'analyse   Rapport généré par l'utilitaire d'analyse   "
},
{
  "id": "Fig_TCD_Polluant_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_gif1",
  "type": "Figure",
  "number": "6.2.32",
  "title": "",
  "body": " Tableau croisé dynamique avec la variable Station en lignes et la variable Jour en colonnes   Tableau croisé dynamique avec la variable Station en lignes et la variable Jour en colonnes   "
},
{
  "id": "Fig_TCD_Polluant_gif3",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_gif3",
  "type": "Figure",
  "number": "6.2.33",
  "title": "",
  "body": " Filtrage de la variable Jour pour afficher l'année 2024   Filtrage de la variable Jour pour afficher l'année 2024   "
},
{
  "id": "Fig_TCD_Polluant_10bis",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_10bis",
  "type": "Figure",
  "number": "6.2.34",
  "title": "",
  "body": " Développer la variable   Développer la variable 2024   "
},
{
  "id": "Fig_TCD_Polluant_gif4",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_gif4",
  "type": "Figure",
  "number": "6.2.35",
  "title": "",
  "body": " Filtrage de la variable Jour pour n'afficher que le mois d'août 2024   Filtrage de la variable Jour pour n'afficher que le mois d'août 2024   "
},
{
  "id": "Fig_TCD_Polluant_18",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_18",
  "type": "Figure",
  "number": "6.2.36",
  "title": "",
  "body": " Développer la variable août   Développer la variable août   "
},
{
  "id": "Fig_TCD_Polluant_gif5",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_gif5",
  "type": "Figure",
  "number": "6.2.37",
  "title": "",
  "body": " Ajout de filtres pour le type de polluant et l'heure de la journée et insertion des valeurs de   Ajout de filtres pour le type de polluant et l'heure de la journée et insertion des valeurs de PM25   "
},
{
  "id": "Fig_TCD_Polluant_24",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant_24",
  "type": "Figure",
  "number": "6.2.38",
  "title": "",
  "body": " Sélection des colonnes du 8 août et du 10 août 2024   Sélection des colonnes du 8 août et du 10 août 2024   "
},
{
  "id": "Fig_TCD_Polluant",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_TCD_Polluant",
  "type": "Figure",
  "number": "6.2.39",
  "title": "",
  "body": " Tableau final des mesures pairées des particules fines avant et après le 9 août   Tableau final des mesures pairées des particules fines avant et après le 9 août   "
},
{
  "id": "Fig_2MoyDep_gif1",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2MoyDep_gif1",
  "type": "Figure",
  "number": "6.2.40",
  "title": "",
  "body": " Remplissage des cellules pour la première étape d'un test sur deux moyennes dépendates   Remplissage des cellules pour la première étape d'un test sur deux moyennes dépendates   "
},
{
  "id": "Fig_2MoyDep_gif2",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2MoyDep_gif2",
  "type": "Figure",
  "number": "6.2.41",
  "title": "",
  "body": " Remplissage du seuil de signification et des mesures descriptives   Remplissage du seuil de signification et des mesures descriptives   "
},
{
  "id": "Fig_2MoyDep_11bis",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2MoyDep_11bis",
  "type": "Figure",
  "number": "6.2.42",
  "title": "",
  "body": " Choix de la loi à utiliser pour le test   Choix de la loi à utiliser pour le test   "
},
{
  "id": "Fig_2MoyDep_gif3",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2MoyDep_gif3",
  "type": "Figure",
  "number": "6.2.43",
  "title": "",
  "body": " Remplissage des cellules pour les étapes 4 et 5   Remplissage des cellules pour les étapes 4 et 5   "
},
{
  "id": "Fig_2MoyDep_16",
  "level": "2",
  "url": "sec-Laboratoire_TestHyp.html#Fig_2MoyDep_16",
  "type": "Figure",
  "number": "6.2.44",
  "title": "",
  "body": " Décision et conclusion du test   Décision et conclusion du test   "
},
{
  "id": "sec-Postlab_TestHyp",
  "level": "1",
  "url": "sec-Postlab_TestHyp.html",
  "type": "Section",
  "number": "6.3",
  "title": "Réflexions",
  "body": " Réflexions  Mise en contexte   Travail à faire après le laboratoire    Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Choisir le type de tests adéquatement et comprendre les distinctions entre chaque type de tests.  Effectuer un test d'hypothèse paramétriques pour vérifier une hypothèse.  Interpréter adéquatement la conclusion d'un test.  Comprendre les effets d'un changement de seuil de signification.  Explorer les caractéristiques des erreurs de type I et de type II.    Donner quelques exemples où les tests bilatéraux et unilatéraux d'une même situation peuvent entraîner des conclusions différentes.  Les tests bilatéraux sont souvent qualifiés de conservateurs, voire prudents. Donner quelques exemples pour illustrer les raisons de cette appellation.  On dit souvent des tests unilatéraux qu'ils sont plus puissants que les tests bilatéraux si on a une idée de la direction du changement. Donner quelques exemples pour illustrer ce point.  Donner quelques exemples dans lesquels un test bilatéral est privilégié.  Donner quelques exemples où il serait désavantageux de poser une hypothèse de recherche unilatérale avant d'effectuer la collecte de données.  Avant de faire une collecte de données, un chercheur pose ses hypothèses de recherche. Ce dernier effectue une étude sur l'efficacité de certains désinfectants sur la croissance de bactéries. Ce dernier croit que le désinfectant commercial Lysol sera plus efficace que le vinaigre à contrer la croissance bactérienne. Une fois les données récoltées, le chercheur constate que la moyenne du diamètre d'inhibition des bactéries avec Lysol est plus petite que la moyenne avec le vinaigre. Il décide de manipuler ses données pour fitter son hypothèse de recherche de départ. Discuter des impacts de ce choix dans ce contexte et dans d'autres contextes. Que devrait faire le chercheur avant de réaliser son test d'hypothèse?  Dans le test sur deux moyennes dépendantes de la , si on change le seuil de signification, est-ce que la conclusion du test change? Expliquer en considérant les valeur des statistiques et de la valeur p.  Un chercheur peut commettre deux types d'erreurs lorsque vient le temps de conclure: une erreur de type I (un faux positif), c'est-à-dire rejeter alors que est vraie, ou une erreur de type II (un faux négatif), soit ne pas rejeter alors que est faux. Supposer qu'un professionnel de la santé veut tester si un patient a une maladie. Dans quel contexte est-ce que l'erreur de type I (faux positif) est plus grave? Dans quel contexte est-ce que l'erreur de type II (faux négatif) est plus grave? Donner des exemples concrets.  Parmi toutes les bases de données disponibles (baseball, vin, armée, nutrition, voitures, etc.), effectuer une recherche statistique en suivant toutes les étapes présentées dans les laboratoires 1, 2, 3 et 6 sauf la collecte de données. Cela signifie une recherche préliminaire de la littérature scientifique, la formulation de quelques hypothèses de recherche et la réalisation des tests d'hypothèse paramétriques. Faire trois tests d'hypothèse paramétriques différents en utilisant les canevas.  La puissance d'un test est la probabilité de rejeter alors que est faux, c'est-à-dire de bien identifier une différence significative quand l'une existe réellement. Discuter des liens entre la puissance d'un test et la probabilité d'un faux négatif (l'erreur de type II, soit ).  Pour trois des quatre tests effectués dans le laboratoire 6, les cotes ou observées sont loin des valeurs critiques et les valeurs p sont très petites. Donner quelques raisons qui pourraient expliquer la puissance de ces rejets de l'hypothèse nulle.  Un problème avec les tests d'hypothèse est qu'un effet réel peut ne pas être détecté. Ce problème est le plus susceptible de se produire dans quelles circonstances?  Lors d'un test d'hypothèse, pourquoi ne pas toujours prendre un seuil de signification de ? Expliquer le raisonnemment derrière le choix d'un seuil en faisant référence à quelques contextes en sciences.   "
},
{
  "id": "ws-Reflexion_TestHyp-2",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-2",
  "type": "Objectifs",
  "number": "6.3",
  "title": "",
  "body": "  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Choisir le type de tests adéquatement et comprendre les distinctions entre chaque type de tests.  Effectuer un test d'hypothèse paramétriques pour vérifier une hypothèse.  Interpréter adéquatement la conclusion d'un test.  Comprendre les effets d'un changement de seuil de signification.  Explorer les caractéristiques des erreurs de type I et de type II.   "
},
{
  "id": "ws-Reflexion_TestHyp-3",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-3",
  "type": "Activité",
  "number": "6.3.1",
  "title": "",
  "body": "Donner quelques exemples où les tests bilatéraux et unilatéraux d'une même situation peuvent entraîner des conclusions différentes. "
},
{
  "id": "ws-Reflexion_TestHyp-4",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-4",
  "type": "Activité",
  "number": "6.3.2",
  "title": "",
  "body": "Les tests bilatéraux sont souvent qualifiés de conservateurs, voire prudents. Donner quelques exemples pour illustrer les raisons de cette appellation. "
},
{
  "id": "ws-Reflexion_TestHyp-5",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-5",
  "type": "Activité",
  "number": "6.3.3",
  "title": "",
  "body": "On dit souvent des tests unilatéraux qu'ils sont plus puissants que les tests bilatéraux si on a une idée de la direction du changement. Donner quelques exemples pour illustrer ce point. "
},
{
  "id": "ws-Reflexion_TestHyp-6",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-6",
  "type": "Activité",
  "number": "6.3.4",
  "title": "",
  "body": "Donner quelques exemples dans lesquels un test bilatéral est privilégié. "
},
{
  "id": "ws-Reflexion_TestHyp-7",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-7",
  "type": "Activité",
  "number": "6.3.5",
  "title": "",
  "body": "Donner quelques exemples où il serait désavantageux de poser une hypothèse de recherche unilatérale avant d'effectuer la collecte de données. "
},
{
  "id": "ws-Reflexion_TestHyp-8",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-8",
  "type": "Activité",
  "number": "6.3.6",
  "title": "",
  "body": "Avant de faire une collecte de données, un chercheur pose ses hypothèses de recherche. Ce dernier effectue une étude sur l'efficacité de certains désinfectants sur la croissance de bactéries. Ce dernier croit que le désinfectant commercial Lysol sera plus efficace que le vinaigre à contrer la croissance bactérienne. Une fois les données récoltées, le chercheur constate que la moyenne du diamètre d'inhibition des bactéries avec Lysol est plus petite que la moyenne avec le vinaigre. Il décide de manipuler ses données pour fitter son hypothèse de recherche de départ. Discuter des impacts de ce choix dans ce contexte et dans d'autres contextes. Que devrait faire le chercheur avant de réaliser son test d'hypothèse? "
},
{
  "id": "ws-Reflexion_TestHyp-9",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-9",
  "type": "Activité",
  "number": "6.3.7",
  "title": "",
  "body": "Dans le test sur deux moyennes dépendantes de la , si on change le seuil de signification, est-ce que la conclusion du test change? Expliquer en considérant les valeur des statistiques et de la valeur p. "
},
{
  "id": "ws-Reflexion_TestHyp-10",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-10",
  "type": "Activité",
  "number": "6.3.8",
  "title": "",
  "body": "Un chercheur peut commettre deux types d'erreurs lorsque vient le temps de conclure: une erreur de type I (un faux positif), c'est-à-dire rejeter alors que est vraie, ou une erreur de type II (un faux négatif), soit ne pas rejeter alors que est faux. Supposer qu'un professionnel de la santé veut tester si un patient a une maladie. Dans quel contexte est-ce que l'erreur de type I (faux positif) est plus grave? Dans quel contexte est-ce que l'erreur de type II (faux négatif) est plus grave? Donner des exemples concrets. "
},
{
  "id": "ws-Reflexion_TestHyp-11",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-11",
  "type": "Activité",
  "number": "6.3.9",
  "title": "",
  "body": "Parmi toutes les bases de données disponibles (baseball, vin, armée, nutrition, voitures, etc.), effectuer une recherche statistique en suivant toutes les étapes présentées dans les laboratoires 1, 2, 3 et 6 sauf la collecte de données. Cela signifie une recherche préliminaire de la littérature scientifique, la formulation de quelques hypothèses de recherche et la réalisation des tests d'hypothèse paramétriques. Faire trois tests d'hypothèse paramétriques différents en utilisant les canevas. "
},
{
  "id": "ws-Reflexion_TestHyp-12",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-12",
  "type": "Activité",
  "number": "6.3.10",
  "title": "",
  "body": "La puissance d'un test est la probabilité de rejeter alors que est faux, c'est-à-dire de bien identifier une différence significative quand l'une existe réellement. Discuter des liens entre la puissance d'un test et la probabilité d'un faux négatif (l'erreur de type II, soit ). "
},
{
  "id": "ws-Reflexion_TestHyp-13",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-13",
  "type": "Activité",
  "number": "6.3.11",
  "title": "",
  "body": "Pour trois des quatre tests effectués dans le laboratoire 6, les cotes ou observées sont loin des valeurs critiques et les valeurs p sont très petites. Donner quelques raisons qui pourraient expliquer la puissance de ces rejets de l'hypothèse nulle. "
},
{
  "id": "ws-Reflexion_TestHyp-14",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-14",
  "type": "Activité",
  "number": "6.3.12",
  "title": "",
  "body": "Un problème avec les tests d'hypothèse est qu'un effet réel peut ne pas être détecté. Ce problème est le plus susceptible de se produire dans quelles circonstances? "
},
{
  "id": "ws-Reflexion_TestHyp-15",
  "level": "2",
  "url": "sec-Postlab_TestHyp.html#ws-Reflexion_TestHyp-15",
  "type": "Activité",
  "number": "6.3.13",
  "title": "",
  "body": "Lors d'un test d'hypothèse, pourquoi ne pas toujours prendre un seuil de signification de ? Expliquer le raisonnemment derrière le choix d'un seuil en faisant référence à quelques contextes en sciences. "
},
{
  "id": "sec-Prelab_KhiDeux",
  "level": "1",
  "url": "sec-Prelab_KhiDeux.html",
  "type": "Section",
  "number": "7.1",
  "title": "Prélab",
  "body": " Prélab  Les tests d'ajustement du khi-deux permettent de déterminer si une variable se répartit selon une certaine distribution théorique.  Les tests d'indépendance du khi-deux permettent de déterminer l'existence ou l'absence d'un lien entre deux variables. Ces dernières doivent être à échelle nominale ou ordinale pour pouvoir effectuer le test.   Travail à faire avant le cours    Examiner les séries statistiques.  Effectuer une revue de la littérature.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Explorer le lien entre deux variables.    Dans ce prochain laboratoire, la base nationale des collisions automobiles de la sera analysée.   Le ministère de la Santé et des Services Sociaux du Québec veut dresser un portrait de la situation des urgences. Il s'intéresse à la répartition des personnes en attente d'un médecin à l'urgence en fonction des jours de la semaine. Il croit qu'il y a proportionnellement moins de personnes qui se présentent aux urgences en début de semaine (du lundi au jeudi) qu'en fin de semaine (du vendredi au dimanche). Quelles seraient l'hypothèse nulle et l'hypothèse alternative de ce test d'ajustement du khi-deux? Expliquer les choix.  Dans un test d'indépendance, l'hypothèse nulle postule l'indépendance entre deux variables, alors que l'hypothèse alternative affirme une dépendance. Expliquer pourquoi ça ne peut pas être l'inverse. Utiliser les concepts de probabilité pour le faire.  Ouvrir la base de données présentée à la . En suivant les étapes présentées à la , attribuer au tableau le nom « Échantillon ». En suivant les étapes présentées à la , attribuer des noms aux deux colonnes du tableau Échantillon .  Dans la base de données présentée à la , explorer les variables. Déterminer quelques paires de variables pourraient fort probablement avoir un lien entre elles. Déterminer quelques paires de variables dont un dépendance est moins claire.    "
},
{
  "id": "ws-Prelab_TestKhiDeux-2",
  "level": "2",
  "url": "sec-Prelab_KhiDeux.html#ws-Prelab_TestKhiDeux-2",
  "type": "Objectifs",
  "number": "7.1",
  "title": "",
  "body": "  Examiner les séries statistiques.  Effectuer une revue de la littérature.  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Explorer le lien entre deux variables.   "
},
{
  "id": "ws-Prelab_TestKhiDeux-4-1",
  "level": "2",
  "url": "sec-Prelab_KhiDeux.html#ws-Prelab_TestKhiDeux-4-1",
  "type": "Activité",
  "number": "7.1.1",
  "title": "",
  "body": "Le ministère de la Santé et des Services Sociaux du Québec veut dresser un portrait de la situation des urgences. Il s'intéresse à la répartition des personnes en attente d'un médecin à l'urgence en fonction des jours de la semaine. Il croit qu'il y a proportionnellement moins de personnes qui se présentent aux urgences en début de semaine (du lundi au jeudi) qu'en fin de semaine (du vendredi au dimanche). Quelles seraient l'hypothèse nulle et l'hypothèse alternative de ce test d'ajustement du khi-deux? Expliquer les choix. "
},
{
  "id": "ws-Prelab_TestKhiDeux-4-2",
  "level": "2",
  "url": "sec-Prelab_KhiDeux.html#ws-Prelab_TestKhiDeux-4-2",
  "type": "Activité",
  "number": "7.1.2",
  "title": "",
  "body": "Dans un test d'indépendance, l'hypothèse nulle postule l'indépendance entre deux variables, alors que l'hypothèse alternative affirme une dépendance. Expliquer pourquoi ça ne peut pas être l'inverse. Utiliser les concepts de probabilité pour le faire. "
},
{
  "id": "ws-Prelab_TestKhiDeux-4-3",
  "level": "2",
  "url": "sec-Prelab_KhiDeux.html#ws-Prelab_TestKhiDeux-4-3",
  "type": "Activité",
  "number": "7.1.3",
  "title": "",
  "body": "Ouvrir la base de données présentée à la . En suivant les étapes présentées à la , attribuer au tableau le nom « Échantillon ». En suivant les étapes présentées à la , attribuer des noms aux deux colonnes du tableau Échantillon . "
},
{
  "id": "ws-Prelab_TestKhiDeux-4-4",
  "level": "2",
  "url": "sec-Prelab_KhiDeux.html#ws-Prelab_TestKhiDeux-4-4",
  "type": "Activité",
  "number": "7.1.4",
  "title": "",
  "body": "Dans la base de données présentée à la , explorer les variables. Déterminer quelques paires de variables pourraient fort probablement avoir un lien entre elles. Déterminer quelques paires de variables dont un dépendance est moins claire. "
},
{
  "id": "sec-Laboratoire_KhiDeux",
  "level": "1",
  "url": "sec-Laboratoire_KhiDeux.html",
  "type": "Section",
  "number": "7.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Dans ce laboratoire, l'objectif est de poursuivre l'analyse d'une base de données en vérifiant s'il existe des liens entre deux variables à échelle nominale ou ordinale. Est-ce que des différences observées au niveau d'un échantillon sont assez significatives pour être généralisées à la population? Ceci se fait à l'aide d'un test d'indépendance du khi-deux. Les étapes d'un tel test sont présentées dans ce laboratoire.  On souhaite étudier la base nationale des collisions automobiles de . Plus spécifiquement, on s'intéresse aux liens possibles entre les variables présentées à la . Comme dans le laboratoire 6 sur les tests d'hypothèse paramétriques, un canevas sera utilisé pour les tests d'indépendance du khi-deux.  Deux tests d'indépendance sont présentés. Un premier vérifiant le lien ou non entre la gravité d'une collision et l'âge d'une personne conductrice dans la collision; et un second vérifiant s'il existe un lien entre la gravité d'une collision et le type de mesures de sécurité dans la collision. La gravité d'une collision est une variable qualitative nominale avec quatre modalités : une collision provoquant au moins une perte de vie (code dans le fichier Excel), une collision provoquant une blessure non mortelle mais pas de perte de vie (code ), gravité inconnue (code U) et la juridiction ne fournit pas cet élément d'information (code X). Le type de dispositifs de sécurité est uen variable qualitative nominale avec plusieurs modalités dont aucun dispositif de sécurité (codes 1, 12 ou 13 selon le type de véhicule), des ceintures (code 2), des sièges de bébé (codes 5 ou 6), des ports de casque (code 9), etc.  Puisque la base de données représente l'ensemble de toutes les collisions de l'année 2019, on sélectionne un échantillon aléatoire, soit les données du mois de décembre.    Lien entre la gravité d'un accident et le type de véhicule  Les étapes pour réaliser un test d'indépendance du khi-deux entre une variable qualitative et une variable quantitative sont présentées. On souhaite vérifier s'il existe un lien entre la gravité d'un accident et l'âge d'un conducteur. On choisit un seuil de signification de .    Lien entre la gravité d'un accident et l'âge d'un conducteur  Les étapes pour réaliser un test d'indépendance du khi-deux entre une variable qualitative et une variable quantitative sont présentées. On souhaite vérifier s'il existe un lien entre la gravité d'un accident et l'âge d'une personne conductrice. On choisit un seuil de signification de .     Copier le cavenas Test d'indépendance  Pour effectuer un test d'indépendance, il faut copier le canevas dans le fichier de travail.    Ouvrir les fichiers Excel Données_Collisions.xlsx et Labo 7_Canevas.xlsx .  Effectuer la procédure présentée à la ... (voir labo 4 JS) pour copier la feuille Test d'indépendance du fichier Labo 7_Canevas au classeur Données_Collisions .      Étapes d'un test d'indépendance avec au moins une variable quantitative  Lorsque l'on fait un test d'indépendance avec une variable quantitative continue, l'étape de la construction du tableau des effectifs observés peut être laborieuse. Il faut grouper les valeurs dans des classes dans le tableau croisé dynamique généré. De plus, il faut s'assurer que les effectifs théoriques sont assez grands.    Dans le classeur Données_Collisions , sélectionner la feuille Test d'indépendance . Renommer la feuille « Test Khi-Deux Age»  La première étape d'un test d'indépendance consiste à définir ses variables et écrire les hypothèses nulle et alternative. Dans la cellule C4 , taper « La gravité d'une collision ». Dans La cellule C5 , taper « L'âge d'une personne conductrice » (voir la ).  Pour ce test d'indépendance, l'hypothèse nulle est que les deux variables sont indépendantes. L'hypothèse alternative est son contraire, soit que les deux variables sont dépendantes.  Dans l'encadré gris de la cellule D8 , vis-à-vis , taper « La gravité d'une collision et l'âge d'une personne conductrice sont indépendants» (voir la ). Dans l'encadré gris de la cellule D11 , vis-à-vis , taper « La gravité d'une collision et l'âge d'une personne conductrice sont dépendants» (voir la )    Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et l'âge d'une personne conductrice   Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et l'âge d'une personne conductrice      La deuxième étape consiste à construire le tableau des effectifs observés et le tableau des effectifs théoriques.    Il faut commencer par générer un tableau croisé dynamique des effectifs observés. Dans la feuille Données_Collisions , sélectionner le tableau « Échantillon ».  En suivant les étapes présentées à la , générer, dans une nouvelle feuille de calcul qu'on renomme TCD_GraviteAge , un tableau croisé dynamique vide à partir du tableau Échantillon . Placer ce tableau dans la cellule A3 (voir la ).    Générer un tableau croisé dynamique vide   Générer un tableau croisé dynamique vide      Glisser et déposer la variable Âge dans la zone de saisie Lignes (voir la ).    Tableau croisé dynamique avec la variable Âge en lignes et la variable Gravité en colonnes   Tableau croisé dynamique avec la variable Âge en lignes et la variable Gravité en colonnes      Glisser et déposer la variable Gravité dans la zone de saisie Colonnes (voir la ).  On veut maintenant grouper les valeurs de la variable Âge de à ans avec une amplitude de ans. Il est important de se fier à la table de Sturges lorsque l'on fixe une amplitude. Cependant, on ne veut pas non plus avoir trop de classes avec peu d'effectifs observés pouvant mener au non-respect de la condition d'application du test d'indépendance de khi-deux.  Dans la colonne des étiquettes de lignes de la variable Âge , cliquer avec le bouton de droite de la souris une des valeurs de l'âge. Cliquer l'option Grouper (voir la ). Une boîte de dialogue s'affiche    Grouper en classes la variable Âge   Grouper en classes la variable Âge      Taper comme valeur de début et comme amplitude (voir la ). On choisit comme valeur initiale, car on ne veut pas tenir compte des valeurs inférieures à , soit les modalités et qui indiquent des informations inconnues par rapport à l'âge des personnes. Une fois le groupement fait, on peut filtrer les valeurs inférieures à .  Pour filtrer les valeurs inférieures à , cliquer sur le petit triangle du menu déroulant de l'étiquette de lignes (voir la ).  Sélectionner l'option Filtres s'appliquant aux étiquettes suivi de l'option Supérieur ou égal à (voir la ).  Une boîte de dialogue s'affiche. Dans la zone de saisie à droite l'option est supérieur ou égal à , taper (voir la ). Cliquer sur 0K .  À ce stade, le tableau croisé dynamique devrait ressembler à la    Tableau croisé dynamique avec les variables Âge et Gravité   Tableau croisé dynamique avec les variables Âge et Gravité      Glisser et déposer la variable Âge dans la zone de saisie Valeurs (voir la ). S'assurer que le calcul fait est bien le compte ( Nombre ) et non la somme. Si c'est la somme, changer pour Nombre avec les étapes vues à la .    Remplissage du tableau croisé dynamique des effectifs observés par Âge et Gravité d'accident et filtrage pour la période et l'usager voulu   Remplissage du tableau croisé dynamique des effectifs observés par Âge et Gravité d'accident et filtrage pour la période et l'usager voulu      On ne veut inclure que les données du mois de décembre (code 12) et les usagers qui sont des conducteurs (code 1). On appliquer des filtres pour faire cela.  Glisser et déposer la variable Mois dans la zone de saisie Filtres . Le filtre apparaît dans les cellules A1:B1 (voir la ). Cliquer sur la flèche du menu déroulant de la cellule B1 . Sélectionner pour le mois de décembre (voir la ). Cliquer sur Ok .  Glisser et déposer la variable Usager dans la zone de saisie Filtres . Le filtre apparaît dans les cellules A2:B2 (voir la ). Cliquer sur la flèche du menu déroulant de la cellule B2 . Sélectionner pour le conducteur (voir la ). Cliquer sur Ok .  À ce stade, le tableau croisé dynamique devrait ressembler à la .    Tableau croisé dynamique avec les variables Âge et Gravité filtrées   Tableau croisé dynamique avec les variables Âge et Gravité filtrées      Valeurs aberrantes?  Selon le tableau de la , deux conducteurs auraient entre et ans. En creusant la base de données, il est fort probable qu'il y a eu une erreur de saisie. Les données seront tout de même conservées, puisque deux unités statistiques sur ne feront pas une grande différence.    Deux classes avec peu de valeurs  La première et la dernière classes ont peu d'individus. Il est fort probable que si on gardait les regroupements tels quels, les effectifs théoriques de ces classes seraient inférieurs à . Ainsi, on va grouper les deux premières classes et les deux dernières classes pour s'assurer que la condition d'application du test est respectée.    Pour regrouper des classes, le processus est un peu contre-intuitif. Il faut indiquer à Excel les classes qui ne seront pas regroupées. Dans ce cas, ce sont toutes les classes entre ans et ans. De cette façon, Excel regroupera en une classe les données avant la classe débutant à ans et en une autre classe les données après la classe terminant à ans.  Cliquer avec le bouton de droite sur n'importe quelle classe d'âge de la première colonne du tableau croisé dynamique. Sélectionner l'option Grouper (voir la ).    Groupage des deux premières et des deux dernières classes   Groupage des deux premières et des deux dernières classes     Taper comme début et comme fin (voir la ). Le tableau croisé dynamique des effectifs observés est présenté à la .    Tableau croisé dynamique des effectifs observés   Tableau croisé dynamique des effectifs observés     On va maintenant coller une partie de ce tableau dans la feuille Test Khi-Deux Age et faire la mise en forme du tableau des effectifs observés.   Dans la feuille Test Khi-Deux Age , cliquer sur la cellule B20 et taper le symbole = (voir la ).    Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Age   Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Age      Cliquer sur l'onglet de la feuille TCD_GraviteAge et sélectionner la plage A6:D14 (voir la ).  Taper la touche Enter du clavier. Le tableau suivant apparaît dans la feuille Test Khi-Deux Age (voir la ).    Tableau des effectifs observés   Tableau des effectifs observés      Faire une mise en forme élémentaire du tableau. Le tableau final des effectifs théoriques doit ressembler au tableau de la . Les couleurs et bordures importent peu ici. Si ceci était un tableau de présentation pour un rapport final, il faudrait peaufiner la mise en page ainsi que l'écriture des classes d'âge. Par exemple, au lieu de voir « < », il faudrait voir « Moins de 20 ans ».    Tableau final des effectifs observés   Tableau final des effectifs observés      Il faut maintenant créer le tableau des effectifs théoriques. Dans la cellule G17 , taper « Tableau des effectifs théoriques » (voir la ).    Création du tableau des effectifs théoriques   Création du tableau des effectifs théoriques      Copier la plage de cellules A18:D28 , soit le tableau des effectifs observés. Faire un collage spécial en ne collant que les valeurs dans la cellule G18 (voir la ).  Sélectionner la plage de cellules H20:I27 et la supprimer en appuyant sur la touche Supp du clavier (voir la ).  Formatter les titres au besoin. Ce n'est pas nécessaire.  La formule pour calculer un effectif théorique est le total de la colonne multiplié par le total de la ligne divisé par la taille de l'échantillon. Dans la cellule H20 , taper =H$28*$J20\/$J$28 (voir la ).    Calcul des effectifs théoriques   Calcul des effectifs théoriques     Le symbole $ devant le nombre permet de fixer la ligne à lorsque la formule sera recopiée dans les cellules avoisinantes. Ainsi, le total de la ligne sera toujours celui de la ligne . Le symbole $ devant la lettre J fige la valeur du total de la colonne.  Sélectionner la cellule H20 . Placer le curseur dans le coin inférieur droit jusqu'à ce que la croix noire de recopie ( + ) apparaisse. Double-cliquer sur le coin inférieur droit. La formule se recopie jusqu'à la cellule H27 (voir la ). Il est également possible de garder enfoncer le curseur et de glisser la formule vers le bas.  La plage de cellules H20:H27 devrait toujours être sélectionnée. Placer le curseur dans le coin inférieur droit de la cellule H27 jusqu'à ce que la croix noire de recopie ( + ) apparaisse. Cliquer avec le bouton de gauche de la souris en gardant le bouton enfoncé et glisser le curseur vers la droite pour remplir les cellules I20:I27 (voir la ). Il est possible de voir que les effectifs observés et théoriques sont assez similaires.  Finalement, il ne reste qu'à vérifier si la condition d'application d'un test d'indépendance du khi-deux est respectée pour procéder à la prochaine étape. Tous les effectifs théoriques des cellules H20:I27 sont supérieurs à . Ainsi, dans la case C34 , taper taper « Oui, Tij > 5 » (voir la ).    Condition d'application vérifiée   Condition d'application vérifiée         À la troisième étape, on procède de deux façons pour en arriver à trouver une règle de décision. On utilise la valeur p et le khi-deux observé . Il faut remplir les cases grisées, soit la valeur p (l'aire à droite du khi-deux observé), le degré de liberté et le seuil de signification . Les cases roses se rempliront automatiquement, car les formules pour le calcul des khi-deux respectifs sont inscrites. La fonction Excel LOI.KHIDEUX.INVERSE.DROITE est utilisée. Elle nécessite deux paramètres, soit l'aire à droite d'une valeur de khi-deux et le degré de liberté.  La fonction Excel CHISQ.TEST permet de calculer la valeur p. Il faut inscrire la plage des effectifs observés ainsi que la plage des effectifs théoriques.    Dans la cellule B40 , taper =CHISQ.TEST(B20:C27;H20:I27) (voir la ). Il est possible de sélectionner les plages de cellules au lieu de taper la formule.  La valeur p s'approche de , une probabilité assez élevée.    Remplissage des cases pour les étapes 3 et 4   Remplissage des cases pour les étapes 3 et 4      Dans la cellule B41 , taper =(8-1)*(2-1) , soit le calcul du degré de liberté d'un test d'indépendance. On le calcule en multipliant le nombre de modalités de la première variable moins et le nombre de modalités de la deuxième variable moins (voir la ).  La cellule B42 se remplit automatiquement. La valeur du est d'environ .  Dans la cellule B45 , taper =0,05 pour un seuil de (voir la ).  La cellule B46 se remplit automatiquement. La valeur du est d'environ .     Dans la cellule A56 , écrire un texte qui permet de conclure s'il existe un lien entre les variables Gravité et Âge (voir la ).    Décision et conclusion du test d'indépendance entre la gravité et l'âge   Décision et conclusion du test d'indépendance entre la gravité et l'âge           Lien entre la gravité d'un accident et le type de mesures de sécurité utilisées  Les étapes pour réaliser un test d'indépendance du khi-deux entre deux variables qualitatives sont présentées dans cette sous-section. On souhaite vérifier s'il existe un lien entre la gravité d'un accident et le type de mesures de sécurité utilisées. Il est attendu que la gravité d'un accident dépende des mesures de sécurité utilisés. Selon la Sûreté du Québec, le port de la ceinture et plusieurs autres dispositifs de sécurité comme les sièges pour bébé diminuent la gravité des blessures ( , page consultée le 17 décembre 2024 ). On va tester cette hypothèse au seuil de signification de .    Étapes d'un test d'indépendance avec deux variables qualitatives  Les étapes d'un test d'indépendance avec deux variables qualitatives sont présentées ci-dessous.    Ouvrir les fichiers Excel Données_Collisions.xlsx et Labo 7_Canevas.xlsx .  Effectuer la procédure présentée à la ... (voir labo 4 JS) pour copier la feuille Test d'indépendance du fichier Labo 7_Canevas au classeur Données_Collisions . Une fois fait, fermer le fichier Labo 7_Canevas.xlsx .  Dans le classeur Données_Collisions , sélectionner la feuille Test d'indépendance . Renommer la feuille « Test Khi-Deux Sécurité» et la placer en dernière position.  La première étape d'un test d'indépendance consiste à définir ses variables et écrire les hypothèses nulle et alternative. Dans la cellule C4 , taper « La gravité d'une collision ». Dans La cellule C5 , taper « Les mesures de sécurité » (voir la ).  Pour ce test d'indépendance, l'hypothèse nulle est que les deux variables sont indépendantes. L'hypothèse alternative est son contraire, soit que les deux variables sont dépendantes.  Dans l'encadré gris de la cellule D8 , vis-à-vis , taper « La gravité d'une collision et les mesures de sécurité utilisées sont indépendantes » (voir la ). Dans l'encadré gris de la cellule D11 , vis-à-vis , taper « La gravité d'une collision et les mesures de sécurité utilisées sont dépendantes » (voir la )    Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et les mesures de sécurité utilisées   Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et les mesures de sécurité utilisées      La deuxième étape consiste à construire le tableau des effectifs observés et le tableau des effectifs théoriques.    Il faut commencer par générer un tableau croisé dynamique des effectifs observés. Dans la feuille Données_Collisions , sélectionner le tableau « Échantillon ».  En suivant les étapes présentées à la , générer, dans une nouvelle feuille de calcul qu'on renomme TCD_GraviteSécurité , un tableau croisé dynamique vide à partir du tableau Échantillon . Placer ce tableau dans la cellule A3 (voir la ).  Glisser et déposer la variable Mesures de sécurité dans la zone de saisie Lignes (voir la ).  Glisser et déposer la variable Gravité dans la zone de saisie Colonnes (voir la ).  Glisser et déposer la variable Mesures de sécurité dans la zone de saisie Valeurs (voir la ). S'assurer que le calcul fait est bien le compte ( Nombre ) et non la somme. Si c'est la somme, changer pour Nombre avec les étapes vues à la .    Tableau croisé dynamique avec la variable Mesures de sécurité en lignes et la variable Mesures de sécurité en colonnes   Tableau croisé dynamique avec la variable Mesures de sécuritéMesures de sécurité en lignes et la variable Gravité en colonnes      On ne veut inclure que les données du mois de décembre (code 12). On appliquer des filtres pour faire cela.  Glisser et déposer la variable Mois dans la zone de saisie Filtres . Le filtre apparaît dans les cellules A1:B1 (voir la ). Cliquer sur la flèche du menu déroulant de la cellule B1 . Sélectionner pour le mois de décembre (voir la ). Cliquer sur Ok .  À ce stade, le tableau croisé dynamique devrait ressembler à la .    Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité filtrées   Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité filtrées      Ce tableau croisé dynamique présente deux difficultés pour la poursuite d'un test d'indépendance du khi-deux. Premièrement, on ne veut pas inclure les modalités NN, QQ et UU, car elles n'offrent aucune information. On rappelle que ce sont les codes pour « l'élément d'information est sans objet », « autre situation que les précédentes » et « Inconnu ». Deuxièmement, les modalités , et ont peu d'effectifs observés. En soi, ce n'est pas un problème. Cependant, le calcul d'effectifs théoriques impliquant ces modalités vont engendrer des valeurs inférieures à . Ainsi, pour éviter d'avoir des effectifs théoriques inférieurs à , on doit regrouper des modalités à échelle nominale.   Regrouper les valeurs d'une variable à échelle nominale  Pour regrouper les valeurs d'une variable à échelle nominale, il est suggéré d'y aller avec la logique. Dans le cas des dispositifs de sécurité, les modalités , et sont des catégories dans lesquelles aucun dispositif de sécurité n'a été utilisé. Il y a donc un lien logique à regrouper ces catégories. Les modalités , et sont des catégories dans lesquelles une mesure de sécurité a été utilisée (ceinture, port de casque et port de vêtements réfléchissants respectivement). Il est donc logique de regrouper ces trois modalités.    On veut maintenant grouper certaines modalités de la variable Mesures de sécurité . Puisque les valeurs des modalités sont des codes numériques non consécutifs, il sera plus facile de les grouper s'ils sont placés l'un à la suite de l'autre dans l'ordre de groupement. Excel permet de déplacer des modalités.  Dans la colonne des étiquettes de lignes de la variable Mesures de sécurité , cliquer avec le bouton de gauche de la souris sur la valeur telle que cette dernière est encadrée d'une bordure verte. Ensuite, cliquer avec le bouton de droite de la souris sur la valeur . Cliquer l'option Déplacer (voir la ), suivi de l'option Déplacer 12 vers le haut .    Déplacer variable Mesures de sécurité   Déplacer les modalités de la variable Mesures de sécurité      On va faire de même pour les modalités et . Dans la colonne des étiquettes de lignes de la variable Mesures de sécurité , cliquer avec le bouton de droite de la souris sur la valeur . Cliquer l'option Déplacer (voir la ), suivi de l'option Déplacer 10 vers le bas . Au final, les modalités , et sont l'une à la suite de l'autre ainsi que les modalités , et (voir la ).    Séquence de modalités dans l'ordre voulu   Séquence de modalités dans l'ordre voulu      On va grouper les modalités , et ainsi que les modalités , et .  Dans la colonne des étiquettes de lignes de la variable Mesures de sécurité , lorsque la flèche noire pointant vers la droite apparaît, sélectionner les trois lignes des modalités , et (voir la ).    Groupement de modalités   Groupement de modalités       Une fois les lignes grisées, cliquer avec le bouton de droite de la souris et sélectionner l'option Grouper (voir la ). Excel groupe les trois modalités dans un groupe intitulé Groupe 1 (voir la ).    Groupement des modalités et création de Groupe 1   Groupement de modalités et création de Groupe 1       À gauche du nom Groupe 1 , il y a un icône - . Cliquer cette icône pour réduire les modalités de ce groupe, c'est-à-dire pour rendre la lecture moins encombrante (voir la ).   Répéter l'étape précédente pour les modalités , , , , ainsi que (voir la ).  Dans la colonne des étiquettes de lignes de la variable Mesures de sécurité , lorsque la flèche noire pointant vers la droite apparaît, sélectionner les trois lignes des modalités , et (voir la ).  Cliquer avec le bouton de droite de la souris et sélectionner l'option Grouper (voir la ). Le Groupe 2 est créé. Cliquer sur l'icône - à gauche de Groupe 2 pour réduire les modalités de ce groupe.  Le résultat des groupements est présenté à la .    Groupement final des modalités   Groupement final de modalités      Pour filtrer les modalités , et , cliquer sur le petit triangle du menu déroulant de l'étiquette de lignes (voir la ).    Filtrage des modalités , et   Filtrage des modalités NN, QQ et UU      Décliquer les modalités , et . Cliquer sur OK (voir la ).   À ce stade, le tableau croisé dynamique devrait ressembler à la    Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité   Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité      Dans la feuille Test Khi-Deux Sécurité , cliquer sur la cellule B20 et taper le symbole = (voir la ).    Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Sécurité   Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Sécurité      Cliquer sur l'onglet de la feuille TCD_GraviteSécurité et sélectionner la plage A5:D7 (voir la ).  Taper la touche Enter du clavier. Le tableau suivant apparaît dans la feuille Test Khi-Deux Sécurité (voir la ).    Tableau des effectifs observés   Tableau des effectifs observés      Faire une mise en forme élémentaire du tableau. Le tableau final des effectifs théoriques doit ressembler au tableau de la . Les couleurs et bordures importent peu ici. Si ceci était un tableau de présentation pour un rapport final, il faudrait peaufiner la mise en page.    Tableau final des effectifs observés   Tableau final des effectifs observés      Il faut maintenant créer le tableau des effectifs théoriques. Dans la cellule G17 , taper « Tableau des effectifs théoriques » (voir la ).    Création du tableau des effectifs théoriques   Création du tableau des effectifs théoriques      Copier la plage de cellules A18:D22 , soit le tableau des effectifs observés. Faire un collage spécial en ne collant que les valeurs dans la cellule G18 (voir la ).  Sélectionner la plage de cellules H20:I21 et la supprimer en appuyant sur la touche Supp du clavier (voir la ).  Formatter les titres au besoin. Ce n'est pas vraiment nécessaire.  La formule pour calculer un effectif théorique est le total de la colonne multiplié par le total de la ligne divisé par la taille de l'échantillon. Dans la cellule H20 , taper =H$22*J$20\/$J$22 (voir la ).  Sélectionner la cellule H20 . Placer le curseur dans le coin inférieur droit jusqu'à ce que la croix noire de recopie ( + ) apparaisse. Cliquer avec le bouton de gauche de la souris en gardant le bouton enfoncé et glisser le curseur vers le bas jusqu'à la cellule H21 . Relâcher le bouton de gauche de la souris. Avec la plage H20:H21 sélectionné, placer encore une fois le curseur dans le coin inférieur droit et glisser vers la droite pour remplir les cellules I20:I21 (voir la ).  Finalement, il ne reste qu'à vérifier si la condition d'application d'un test d'indépendance du khi-deux est respectée pour procéder à la prochaine étape. Tous les effectifs théoriques des cellules H20:I21 sont supérieurs à . Ainsi, dans la case C34 , taper taper « Oui, Tij > 5 ».      À la troisième étape, on procède de deux façons pour en arriver à trouver une règle de décision. On utilise la valeur p et le khi-deux observé . Il faut remplir les cases grisées, soit la valeur p (l'aire à droite du khi-deux observé), le degré de liberté et le seuil de signification . Les cases roses se rempliront automatiquement, car les formules pour le calcul des khi-deux respectifs sont inscrites. La fonction Excel LOI.KHIDEUX.INVERSE.DROITE est utilisée. Elle nécessite deux paramètres, soit l'aire à droite d'une valeur de khi-deux et le degré de liberté.  La fonction Excel CHISQ.TEST permet de calculer la valeur p. Il faut inscrire la plage des effectifs observés ainsi que la plage des effectifs théoriques.    Dans la cellule B40 , taper =CHISQ.TEST(B20:C21;H20:I21) (voir la ). Il est possible de sélectionner les plages de cellules au lieu de taper la formule.  La valeur p s'approche de , une probabilité très petite.    Remplissage des cases pour les étapes 3 et 4   Remplissage des cases pour les étapes 3 et 4      Dans la cellule B41 , taper =(2-1)*(2-1) , soit le calcul du degré de liberté d'un test d'indépendance. On le calcule en multipliant le nombre de modalités de la première variable moins et le nombre de modalités de la deuxième variable moins (voir la ).  La cellule B42 se remplit automatiquement. La valeur du est d'environ .  Dans la cellule B45 , taper =0,05 pour un seuil de (voir la ).  La cellule B46 se remplit automatiquement. La valeur du est d'environ .     Dans la cellule A56 , écrire un texte qui permet de conclure s'il existe un lien entre les variables Gravité et Mesures de sécurité (voir la ).    Décision et conclusion du test d'indépendance entre la gravité et le type de mesures de sécurité   Décision et conclusion du test d'indépendance entre la gravité et le type de mesures de sécurité     -->     "
},
{
  "id": "Fig_KhiAge_gif1",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif1",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et l'âge d'une personne conductrice   Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et l'âge d'une personne conductrice   "
},
{
  "id": "Fig_KhiAge_5",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_5",
  "type": "Figure",
  "number": "7.2.2",
  "title": "",
  "body": " Générer un tableau croisé dynamique vide   Générer un tableau croisé dynamique vide   "
},
{
  "id": "Fig_KhiAge_gif2",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif2",
  "type": "Figure",
  "number": "7.2.3",
  "title": "",
  "body": " Tableau croisé dynamique avec la variable Âge en lignes et la variable Gravité en colonnes   Tableau croisé dynamique avec la variable Âge en lignes et la variable Gravité en colonnes   "
},
{
  "id": "Fig_KhiAge_gif3",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif3",
  "type": "Figure",
  "number": "7.2.4",
  "title": "",
  "body": " Grouper en classes la variable Âge   Grouper en classes la variable Âge   "
},
{
  "id": "Fig_KhiAge_15",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_15",
  "type": "Figure",
  "number": "7.2.5",
  "title": "",
  "body": " Tableau croisé dynamique avec les variables Âge et Gravité   Tableau croisé dynamique avec les variables Âge et Gravité   "
},
{
  "id": "Fig_KhiAge_gif4",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif4",
  "type": "Figure",
  "number": "7.2.6",
  "title": "",
  "body": " Remplissage du tableau croisé dynamique des effectifs observés par Âge et Gravité d'accident et filtrage pour la période et l'usager voulu   Remplissage du tableau croisé dynamique des effectifs observés par Âge et Gravité d'accident et filtrage pour la période et l'usager voulu   "
},
{
  "id": "Fig_KhiAge_22",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_22",
  "type": "Figure",
  "number": "7.2.7",
  "title": "",
  "body": " Tableau croisé dynamique avec les variables Âge et Gravité filtrées   Tableau croisé dynamique avec les variables Âge et Gravité filtrées   "
},
{
  "id": "rem-ConducteursJeunes",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#rem-ConducteursJeunes",
  "type": "Remarque",
  "number": "7.2.8",
  "title": "Valeurs aberrantes?",
  "body": " Valeurs aberrantes?  Selon le tableau de la , deux conducteurs auraient entre et ans. En creusant la base de données, il est fort probable qu'il y a eu une erreur de saisie. Les données seront tout de même conservées, puisque deux unités statistiques sur ne feront pas une grande différence.  "
},
{
  "id": "rem-Classes",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#rem-Classes",
  "type": "Remarque",
  "number": "7.2.9",
  "title": "Deux classes avec peu de valeurs.",
  "body": " Deux classes avec peu de valeurs  La première et la dernière classes ont peu d'individus. Il est fort probable que si on gardait les regroupements tels quels, les effectifs théoriques de ces classes seraient inférieurs à . Ainsi, on va grouper les deux premières classes et les deux dernières classes pour s'assurer que la condition d'application du test est respectée.  "
},
{
  "id": "Fig_KhiAge_gif5",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif5",
  "type": "Figure",
  "number": "7.2.10",
  "title": "",
  "body": " Groupage des deux premières et des deux dernières classes   Groupage des deux premières et des deux dernières classes   "
},
{
  "id": "Fig_KhiAge_28",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_28",
  "type": "Figure",
  "number": "7.2.11",
  "title": "",
  "body": " Tableau croisé dynamique des effectifs observés   Tableau croisé dynamique des effectifs observés   "
},
{
  "id": "Fig_KhiAge_gif6",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif6",
  "type": "Figure",
  "number": "7.2.12",
  "title": "",
  "body": " Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Age   Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Age   "
},
{
  "id": "Fig_KhiAge_33",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_33",
  "type": "Figure",
  "number": "7.2.13",
  "title": "",
  "body": " Tableau des effectifs observés   Tableau des effectifs observés   "
},
{
  "id": "Fig_KhiAge_35",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_35",
  "type": "Figure",
  "number": "7.2.14",
  "title": "",
  "body": " Tableau final des effectifs observés   Tableau final des effectifs observés   "
},
{
  "id": "Fig_KhiAge_gif7",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif7",
  "type": "Figure",
  "number": "7.2.15",
  "title": "",
  "body": " Création du tableau des effectifs théoriques   Création du tableau des effectifs théoriques   "
},
{
  "id": "Fig_KhiAge_gif8",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif8",
  "type": "Figure",
  "number": "7.2.16",
  "title": "",
  "body": " Calcul des effectifs théoriques   Calcul des effectifs théoriques   "
},
{
  "id": "Fig_KhiAge_47",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_47",
  "type": "Figure",
  "number": "7.2.17",
  "title": "",
  "body": " Condition d'application vérifiée   Condition d'application vérifiée   "
},
{
  "id": "Fig_KhiAge_gif9",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_gif9",
  "type": "Figure",
  "number": "7.2.18",
  "title": "",
  "body": " Remplissage des cases pour les étapes 3 et 4   Remplissage des cases pour les étapes 3 et 4   "
},
{
  "id": "Fig_KhiAge_54",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_KhiAge_54",
  "type": "Figure",
  "number": "7.2.19",
  "title": "",
  "body": " Décision et conclusion du test d'indépendance entre la gravité et l'âge   Décision et conclusion du test d'indépendance entre la gravité et l'âge   "
},
{
  "id": "Fig_TestSecurite_gif1",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_gif1",
  "type": "Figure",
  "number": "7.2.20",
  "title": "",
  "body": " Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et les mesures de sécurité utilisées   Remplissage de la première étape d'un test d'indépendance entre la gravité d'une collision et les mesures de sécurité utilisées   "
},
{
  "id": "Fig_Securite_gif1",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_gif1",
  "type": "Figure",
  "number": "7.2.21",
  "title": "",
  "body": " Tableau croisé dynamique avec la variable Mesures de sécurité en lignes et la variable Mesures de sécurité en colonnes   Tableau croisé dynamique avec la variable Mesures de sécuritéMesures de sécurité en lignes et la variable Gravité en colonnes   "
},
{
  "id": "Fig_Securite_8bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_8bis",
  "type": "Figure",
  "number": "7.2.22",
  "title": "",
  "body": " Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité filtrées   Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité filtrées   "
},
{
  "id": "rem-GrouperNominale",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#rem-GrouperNominale",
  "type": "Remarque",
  "number": "7.2.23",
  "title": "Regrouper les valeurs d’une variable à échelle nominale.",
  "body": " Regrouper les valeurs d'une variable à échelle nominale  Pour regrouper les valeurs d'une variable à échelle nominale, il est suggéré d'y aller avec la logique. Dans le cas des dispositifs de sécurité, les modalités , et sont des catégories dans lesquelles aucun dispositif de sécurité n'a été utilisé. Il y a donc un lien logique à regrouper ces catégories. Les modalités , et sont des catégories dans lesquelles une mesure de sécurité a été utilisée (ceinture, port de casque et port de vêtements réfléchissants respectivement). Il est donc logique de regrouper ces trois modalités.  "
},
{
  "id": "Fig_Securite_gif2",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_gif2",
  "type": "Figure",
  "number": "7.2.24",
  "title": "",
  "body": " Déplacer variable Mesures de sécurité   Déplacer les modalités de la variable Mesures de sécurité   "
},
{
  "id": "Fig_Securite_14bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_14bis",
  "type": "Figure",
  "number": "7.2.25",
  "title": "",
  "body": " Séquence de modalités dans l'ordre voulu   Séquence de modalités dans l'ordre voulu   "
},
{
  "id": "Fig_Securite_gif3",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_gif3",
  "type": "Figure",
  "number": "7.2.26",
  "title": "",
  "body": " Groupement de modalités   Groupement de modalités   "
},
{
  "id": "Fig_Securite_17bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_17bis",
  "type": "Figure",
  "number": "7.2.27",
  "title": "",
  "body": " Groupement des modalités et création de Groupe 1   Groupement de modalités et création de Groupe 1   "
},
{
  "id": "Fig_Securite_26bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_26bis",
  "type": "Figure",
  "number": "7.2.28",
  "title": "",
  "body": " Groupement final des modalités   Groupement final de modalités   "
},
{
  "id": "Fig_Securite_gif5",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_gif5",
  "type": "Figure",
  "number": "7.2.29",
  "title": "",
  "body": " Filtrage des modalités , et   Filtrage des modalités NN, QQ et UU   "
},
{
  "id": "Fig_Securite_36bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_Securite_36bis",
  "type": "Figure",
  "number": "7.2.30",
  "title": "",
  "body": " Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité   Tableau croisé dynamique avec les variables Mesures de sécurité et Gravité   "
},
{
  "id": "Fig_TestSecurite_gif2bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_gif2bis",
  "type": "Figure",
  "number": "7.2.31",
  "title": "",
  "body": " Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Sécurité   Copiage d'une partie du tableau croisé dynamique dans le canevas Test Khi-Deux Sécurité   "
},
{
  "id": "Fig_TestSecurite_9bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_9bis",
  "type": "Figure",
  "number": "7.2.32",
  "title": "",
  "body": " Tableau des effectifs observés   Tableau des effectifs observés   "
},
{
  "id": "Fig_TestSecurite_10bis",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_10bis",
  "type": "Figure",
  "number": "7.2.33",
  "title": "",
  "body": " Tableau final des effectifs observés   Tableau final des effectifs observés   "
},
{
  "id": "Fig_TestSecurite_gif3",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_gif3",
  "type": "Figure",
  "number": "7.2.34",
  "title": "",
  "body": " Création du tableau des effectifs théoriques   Création du tableau des effectifs théoriques   "
},
{
  "id": "Fig_TestSecurite_gif4",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_gif4",
  "type": "Figure",
  "number": "7.2.35",
  "title": "",
  "body": " Remplissage des cases pour les étapes 3 et 4   Remplissage des cases pour les étapes 3 et 4   "
},
{
  "id": "Fig_TestSecurite_28",
  "level": "2",
  "url": "sec-Laboratoire_KhiDeux.html#Fig_TestSecurite_28",
  "type": "Figure",
  "number": "7.2.36",
  "title": "",
  "body": " Décision et conclusion du test d'indépendance entre la gravité et le type de mesures de sécurité   Décision et conclusion du test d'indépendance entre la gravité et le type de mesures de sécurité   "
},
{
  "id": "sec-Postlab_KhiDeux",
  "level": "1",
  "url": "sec-Postlab_KhiDeux.html",
  "type": "Section",
  "number": "7.3",
  "title": "Réflexions",
  "body": " Réflexions  Mise en contexte   Travail à faire après le laboratoire    Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Choisir le type de tests adéquatement et comprendre les distinctions entre chaque type de tests.  Effectuer un test d'indépendance pour vérifier s'il existe un lien ou non entre deux variables.  Interpréter adéquatement la conclusion d'un test.    Les cinq étapes d'un test d'indépendance permettent de vérifier s'il existe ou non un lien entre deux variables et . Pourquoi n'est-il pas possible de simplement vérifier si , où est la probabilité de l'événement ? Pourquoi faut-il calculer des effectifs théoriques et les comparer aux effectifs observés?  La conclusion d'un test d'indépendance peut parfois être obtenue avec un test paramétrique. Lequel? Expliquer.  À la , on a fait un test d'indépendance vérifiant s'il existe un lien entre l'âge d'un conducteur et la gravité d'une collision. La variable âge a été groupée en tranche de 10 ans. Ceci a mené au non-rejet de l'hypothèse nulle, c'est-à-dire qu'on n'a pas pu conclure qu'il existait un lien entre l'âge et la gravité. Choisir un groupement d'âge différent de celui fait à la et montrer que la conclusion peut changer.  Parmi toutes les bases de données disponibles dans la , effectuer une recherche statistique en suivant toutes les étapes présentées dans les laboratoires 1, 2, 3 et 6 sauf la collecte de données. Cela signifie une recherche préliminaire de la littérature scientifique, la formulation de quelques hypothèses de recherche et la réalisation de tests d'indépendance. Faire deux tests d'indépendance en utilisant les canevas fournis. Au moins un des tests doit incorporer une variable quantitative continue.   "
},
{
  "id": "ws-Reflexion_KhiDeux-2",
  "level": "2",
  "url": "sec-Postlab_KhiDeux.html#ws-Reflexion_KhiDeux-2",
  "type": "Objectifs",
  "number": "7.3",
  "title": "",
  "body": "  Poser un regard critique sur les données.  Formuler des hypothèses de recherche.  Choisir le type de tests adéquatement et comprendre les distinctions entre chaque type de tests.  Effectuer un test d'indépendance pour vérifier s'il existe un lien ou non entre deux variables.  Interpréter adéquatement la conclusion d'un test.   "
},
{
  "id": "ws-Reflexion_KhiDeux-3",
  "level": "2",
  "url": "sec-Postlab_KhiDeux.html#ws-Reflexion_KhiDeux-3",
  "type": "Activité",
  "number": "7.3.1",
  "title": "",
  "body": "Les cinq étapes d'un test d'indépendance permettent de vérifier s'il existe ou non un lien entre deux variables et . Pourquoi n'est-il pas possible de simplement vérifier si , où est la probabilité de l'événement ? Pourquoi faut-il calculer des effectifs théoriques et les comparer aux effectifs observés? "
},
{
  "id": "ws-Reflexion_KhiDeux-4",
  "level": "2",
  "url": "sec-Postlab_KhiDeux.html#ws-Reflexion_KhiDeux-4",
  "type": "Activité",
  "number": "7.3.2",
  "title": "",
  "body": "La conclusion d'un test d'indépendance peut parfois être obtenue avec un test paramétrique. Lequel? Expliquer. "
},
{
  "id": "ws-Reflexion_KhiDeux-5",
  "level": "2",
  "url": "sec-Postlab_KhiDeux.html#ws-Reflexion_KhiDeux-5",
  "type": "Activité",
  "number": "7.3.3",
  "title": "",
  "body": "À la , on a fait un test d'indépendance vérifiant s'il existe un lien entre l'âge d'un conducteur et la gravité d'une collision. La variable âge a été groupée en tranche de 10 ans. Ceci a mené au non-rejet de l'hypothèse nulle, c'est-à-dire qu'on n'a pas pu conclure qu'il existait un lien entre l'âge et la gravité. Choisir un groupement d'âge différent de celui fait à la et montrer que la conclusion peut changer. "
},
{
  "id": "ws-Reflexion_KhiDeux-6",
  "level": "2",
  "url": "sec-Postlab_KhiDeux.html#ws-Reflexion_KhiDeux-6",
  "type": "Activité",
  "number": "7.3.4",
  "title": "",
  "body": "Parmi toutes les bases de données disponibles dans la , effectuer une recherche statistique en suivant toutes les étapes présentées dans les laboratoires 1, 2, 3 et 6 sauf la collecte de données. Cela signifie une recherche préliminaire de la littérature scientifique, la formulation de quelques hypothèses de recherche et la réalisation de tests d'indépendance. Faire deux tests d'indépendance en utilisant les canevas fournis. Au moins un des tests doit incorporer une variable quantitative continue. "
},
{
  "id": "sec-Prelab_Correlation",
  "level": "1",
  "url": "sec-Prelab_Correlation.html",
  "type": "Section",
  "number": "8.1",
  "title": "Prélab",
  "body": " Prélab  Dans ce laboratoire, on poursuit le travail des deux laboratoires précédents à propos de la recherche d'une lien entre deux variables. En particulier, lorsque les deux variables sont quantitatives continues, on peut s'intéresser au type de lien qu'il peut y avoir entre deux variables. Ce lien peut être linéaire, polynomiale, exponentielle, logarithmique et ainsi de suite. Par simplicité, on commence par considérer uniquement les variables dont le lien semble être linéaire. Afin de poser les bonnes conclusions, il est primordial que cette linéarité soit présente. La principale manière de constater ce type de lien est en illustrant les variables sur un nuage de points, aussi appelé diagramme de dispersion.   Travail à faire avant le cours    Déterminer visuellement si la nature du lien entre deux variables est linéaire  Introduire le calcul de la droite de régression  Préparer le fichier de base de données pour le laboratoire     Parmi les images suivantes, déterminer celle ou celles qui ont le plus l'allure d'un lien linéaire.    Un premier lien entre deux variables    Un deuxième lien entre deux variables      Un troisième lien entre deux variables    Un quatrième lien entre deux variables     Par deux points il ne peut passer qu'une seule droite. Étant donnés un ensemble de points, il est impossible de penser qu'une relation de la forme pourra passer par tous les points. Il existe plusieurs manières de définir « la meilleure droite » représentant un ensemble de points. La plus commune est celle obtenue en appliquant la méthode des moindres carrées.  Cette méthode consiste à calculer la différence entre chacune des valeurs dépendantes des données et la valeur dépendante de l'équation d'une droite de paramètres et d'additionner le carré de toutes ces différences. On cherche les valeurs de et qui minimise cette somme.  On considère les points et . Écrire les trois termes de la sommes des moindres carrés pour ces trois points. Dans un cours de calcul différentiel à plusieurs variables, on apprend que pour optimiser une fonction multivariée, il faut que les dérivées par rapport à chacune de ses variables soit égales à . Dans le cas des moindres carrés, deux variables sont présentes. En traitant à tour de rôle l'une variable comme étant constante, calculer la dérivée de la somme obtenue à la partie précédente par rapport à l'autre variable pour obtenir deux équations linéaires en . En posant chacune de ces équations égales à 0, montrer que la droite des moindres carrés de ce problème est .    Le fichier 13jeux_de_donnees.xlsx disponible TODO contient 13 ensembles de couples de données ayant été créés artificiellement afin de produire le résultat des exercices ci-dessous. Le but de cet exercice est de comprendre l'importance d'observer les données avant d'en tirer quelconques conclusion. Dans une nouvelle feuille de calculs, créer un tableau croisé dynamique contenant dans le champ «colonne» les entrées Valeurs_X et Valeurs_Y . Ajouter aussi un filtre avec l'entrée Jeu x Positionner le filtre en haut du tableau sur Jeu 1 . À l'aide de fonctions Excel, calculer la moyenne des valeurs X , la moyenne des valeurs Y , l'écart type des valeurs X , l'écart type des valeurs Y ainsi que le coefficient de corrélation entre les valeurs X et Y . Insérer un nuage de points avec les valeurs du tableau croisé dynamique. Observer l'effet qu'a le changement du jeu de données dans le filtre sur les mesures statistiques calculées et sur l'allure du nuage de points. Commenter brièvement.   Télécharger le fichier Cepheides_donnees.xlsx disponible TODO. Ce fichier contient différentes données de étoiles de type « céphéides ». Dans le prochain laboratoire, on cherche à déterminer s'il existe des liens linéaires entre certaines de ces variables. Dans une feuille appelée « RP », tracer le nuage de points représentant le rayon des étoiles en fonction de leur période de pulsation. Effectuer la mise en forme appropriée. Dans une feuille appelée «MappP », tracer le nuage de points représentant la magnitude apparente des étoiles en fonction de leur période de pulsation. Effectuer la mise en forme appropriée. Dans une feuille appelée «MabsP », tracer le nuage de points représentant la magnitude absolue des étoiles en fonction de leur période de pulsation. Effectuer la mise en forme appropriée. Sur chacune des trois feuille, faire l'étude descriptive de la population telle que décrite dans la pour les variables impliquées.   "
},
{
  "id": "ws-Prelab_Correlation-2",
  "level": "2",
  "url": "sec-Prelab_Correlation.html#ws-Prelab_Correlation-2",
  "type": "Objectifs",
  "number": "8.1",
  "title": "",
  "body": "  Déterminer visuellement si la nature du lien entre deux variables est linéaire  Introduire le calcul de la droite de régression  Préparer le fichier de base de données pour le laboratoire   "
},
{
  "id": "ws-Prelab_Correlation-3-1",
  "level": "2",
  "url": "sec-Prelab_Correlation.html#ws-Prelab_Correlation-3-1",
  "type": "Activité",
  "number": "8.1.1",
  "title": "",
  "body": "Parmi les images suivantes, déterminer celle ou celles qui ont le plus l'allure d'un lien linéaire.    Un premier lien entre deux variables    Un deuxième lien entre deux variables      Un troisième lien entre deux variables    Un quatrième lien entre deux variables    "
},
{
  "id": "exo-moindrescarres",
  "level": "2",
  "url": "sec-Prelab_Correlation.html#exo-moindrescarres",
  "type": "Activité",
  "number": "8.1.2",
  "title": "",
  "body": "Par deux points il ne peut passer qu'une seule droite. Étant donnés un ensemble de points, il est impossible de penser qu'une relation de la forme pourra passer par tous les points. Il existe plusieurs manières de définir « la meilleure droite » représentant un ensemble de points. La plus commune est celle obtenue en appliquant la méthode des moindres carrées.  Cette méthode consiste à calculer la différence entre chacune des valeurs dépendantes des données et la valeur dépendante de l'équation d'une droite de paramètres et d'additionner le carré de toutes ces différences. On cherche les valeurs de et qui minimise cette somme.  On considère les points et . Écrire les trois termes de la sommes des moindres carrés pour ces trois points. Dans un cours de calcul différentiel à plusieurs variables, on apprend que pour optimiser une fonction multivariée, il faut que les dérivées par rapport à chacune de ses variables soit égales à . Dans le cas des moindres carrés, deux variables sont présentes. En traitant à tour de rôle l'une variable comme étant constante, calculer la dérivée de la somme obtenue à la partie précédente par rapport à l'autre variable pour obtenir deux équations linéaires en . En posant chacune de ces équations égales à 0, montrer que la droite des moindres carrés de ce problème est . "
},
{
  "id": "ws-Prelab_Correlation-4-1",
  "level": "2",
  "url": "sec-Prelab_Correlation.html#ws-Prelab_Correlation-4-1",
  "type": "Activité",
  "number": "8.1.3",
  "title": "",
  "body": "Le fichier 13jeux_de_donnees.xlsx disponible TODO contient 13 ensembles de couples de données ayant été créés artificiellement afin de produire le résultat des exercices ci-dessous. Le but de cet exercice est de comprendre l'importance d'observer les données avant d'en tirer quelconques conclusion. Dans une nouvelle feuille de calculs, créer un tableau croisé dynamique contenant dans le champ «colonne» les entrées Valeurs_X et Valeurs_Y . Ajouter aussi un filtre avec l'entrée Jeu x Positionner le filtre en haut du tableau sur Jeu 1 . À l'aide de fonctions Excel, calculer la moyenne des valeurs X , la moyenne des valeurs Y , l'écart type des valeurs X , l'écart type des valeurs Y ainsi que le coefficient de corrélation entre les valeurs X et Y . Insérer un nuage de points avec les valeurs du tableau croisé dynamique. Observer l'effet qu'a le changement du jeu de données dans le filtre sur les mesures statistiques calculées et sur l'allure du nuage de points. Commenter brièvement. "
},
{
  "id": "ws-Prelab_Correlation-5",
  "level": "2",
  "url": "sec-Prelab_Correlation.html#ws-Prelab_Correlation-5",
  "type": "Activité",
  "number": "8.1.4",
  "title": "",
  "body": "Télécharger le fichier Cepheides_donnees.xlsx disponible TODO. Ce fichier contient différentes données de étoiles de type « céphéides ». Dans le prochain laboratoire, on cherche à déterminer s'il existe des liens linéaires entre certaines de ces variables. Dans une feuille appelée « RP », tracer le nuage de points représentant le rayon des étoiles en fonction de leur période de pulsation. Effectuer la mise en forme appropriée. Dans une feuille appelée «MappP », tracer le nuage de points représentant la magnitude apparente des étoiles en fonction de leur période de pulsation. Effectuer la mise en forme appropriée. Dans une feuille appelée «MabsP », tracer le nuage de points représentant la magnitude absolue des étoiles en fonction de leur période de pulsation. Effectuer la mise en forme appropriée. Sur chacune des trois feuille, faire l'étude descriptive de la population telle que décrite dans la pour les variables impliquées. "
},
{
  "id": "sec-Laboratoire_TODO",
  "level": "1",
  "url": "sec-Laboratoire_TODO.html",
  "type": "Section",
  "number": "8.2",
  "title": "Laboratoire",
  "body": " Laboratoire   Dans ce laboratoire, on s'intéresse au type de lien qui peut exister entre deux variables quantitatives. Plus spécifiquement, on cherche à déterminer l'existence d'un lien linéaire entre des variables , et donc de l'existence de coefficients pour lesquels . Cette droite est appelée la droite de régression. Cette droite est appelée la droite de régression. Plus la dépendance entre est forte, plus cette approximation sera bonne. La force de ce lien (linéaire) est donnée par le coefficient de corrélation, aussi appelé coefficient de Pearson. Il est noté dans le cas d'un échantillon et (lettre grecque « rho ») pour une population.  La première étape d'une étude sur la nature du lien entre deux variables doit toujours être l'observation des données afin de vérifier qualitativement la plausabilité de l'existence d'un lien linéaire entre les variables. L'équation de la droite de régression ainsi que le coefficient de corrélation peuvent presque toujours être calculés, même si les données ne sont pas reliées linéairement. Il incombe à l'analyste de déterminer la pertinence et l'interprétation adéquate de ces outils.  Pour présenter ces concepts, on utilise une base de données portant sur étoiles de type « céphéide ». Une céphéide est une étoile variable, c'est-à-dire dont la luminosité change dû à un mouvement périodique de dilatation et de contraction. La première à avoir été découverte, par l'astronome amateur John Goodricke en 1784, fait partie de la constellation Céphée, qui a par la suite prêté son nom à cette nouvelle catégorie d'étoile. Les données datent de et proviennent de l'Observatoire-David-Dunlap à Richmond Hill, en Ontario. Cet observatoire a été désigné comme un lieu historique national en 2019. Les variables présentes dans le fichier sont  ID: Numéro de l'échantillon  Étoile: Nom de l'étoile  Période: Période de pulsation (en jours)  Mag App: Magnitude apparente moyenne (sans unités)  Couleur BV: Indice de couleur B-V moyen (sans unités)  Excès: Excès de couleur (sans unités)  Amplitude V: Amplitude de la luminosité observée au travers d'un filtre V (~500nm) (sans unités)  Mag Abs: Magnitude Absolue (sans unités)  Dist: Distance entre l'étoile et le soleil (parsecs)  VR MOY: Vitesse radiale moyenne (km\/s)  RAYON: Rayon solaire ( x 6,957x10^8 m)      Corrélation et régression linéaire  Dans le prélaboratoire, on a demandé de tracer le nuage de points de la période de pulsation en fonction du rayon. À l'observation du graphique, il est plausible de conclure à l'existence d'un lien linéaire entre le rayon d'une céphéide et sa période de pulsation. On peut donc aller de l'avant avec l'analyse de la relation linéaire entre ces variables.   Le nuage de points créé sur Excel. Source: Observatoire-David-Dunlap, Canada, 1997   Le nuage de points créé sur Excel représentant les 120 céphéides de l'échantillons pour lesquelles le rayon est disponible. Le rayon est sur l'axe horizontal et la période sur l'axe verticale. Le graphique est titré « Période de pulsation des céphéides selon le rayon de l'étoile pour 120 céphéides, 1997 ». On peut y voir la grande majorité des points qui sont concentrés le long d'une ligne, avec deux points un peu à l'écart.    Dans un premier temps, on calcule le coefficient de corrélation linéaire. La formule COEFFICIENT.CORRELATION(matrice1;matrice2) permet d'obtenir ce coefficient, où matrice1 et matrice2 sont les plages contenant les données des deux variables. La formule mathématique du coefficient de corrélation est C'est une mesure de la variabilité conjointe des variables, normalisée pour être entre et .  Le signe du coefficient de corrélation donne le sens de la variabilité de la variable lorsque varie: une variation positive de entraine une variation positive de lorsque et une variation positive de entraine une variation négative de lorsque . La magnitude du coefficient de corrélation quant à elle quantifie la force du lien linéaire entre les variables. Traditionnellement, la force est obtenu selon la valeur de dans la table suivante. TODO AJUSTER AVEC MANUEL   Interprétation de la force du lien linéaire       Interprétation du lien       Très fort à parfait       Fort       Modéré       Faible       Aucun à très faible     On calcule le coefficient de corrélation entre la période de pulsation et le rayon des céphéides et on l'ajoute sous les études descriptives. Puisque les écarts types des variables font partie de la formule mathématique du coefficient de variation, ce dernier est sensible aux valeurs extrêmes. Il est donc important de bien analyser les données lors d'une étape préliminaire.  Une fois la nature linéaire du lien confirmée, il est possible de déterminer l'équation de la meilleure droite qui relie les deux variables. L'exercice donne une idée de la procédure mathématique à suivre pour la trouver. Un ouvrage statistique théorique peut montrer que la pente est donnée par et l'ordonnée à l'origine par .Sur Excel, on peut afficher directement sur le graphique la droite et son équation. Pour cela, on sélectionne le graphique et on clique sur la petite croix en haut à droite, puis sur linéaire . La case Courbe de tendance aurait aussi pu faire le travail, puisque son comportement par défaut est la relation linéaire. Pour ajouter l'équation, on clique sur Autres options ou on fait un double-clic sur la droite créée précédemment et on coche la case Afficher l'équation sur le graphique .  La fonction DROITEREG permet aussi d'obtenir directement dans les cellules les valeurs de , mais elle a comme inconvénient qu'il faut que le nombres de valeurs pour chacune des variables soit le même. Dans le cas de la base de données des céphéides, le rayon de plusieurs étoiles est manquant. Il faut alors filtrer dans la formule pour exclure les entrées vides. La formule DROITEREG((FILTRE(PÉRIODE;Rayon<>0));(FILTRE(RAYON;RAYON<>0))) permet d'accomplir cela, où PÉRIODE et RAYON sont les plages nommées correspondant à ces variables dans le tableau des données. Dans les deux cas, si l'on note la période et le rayon, on obtient .  Avec cette droite, on est en mesure d'estimer la période de pulsation d'une céphéide de rayon donné ou à l'inverse, de déterminer le rayon d'une étoile dont la période de pulsation est connue. Par exemple, la céphéide FF_AQL dont l'identifiant est possède une période égale à environ jours. En entrant cette valeur dans l'équation, on estime un rayon de mètres. Selon Wikipédia , la composante numérique du rayon est de 39.  Truc sur R^2 coeff det   "
},
{
  "id": "sec-Laboratoire_TODO-3-3",
  "level": "2",
  "url": "sec-Laboratoire_TODO.html#sec-Laboratoire_TODO-3-3",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": " Le nuage de points créé sur Excel. Source: Observatoire-David-Dunlap, Canada, 1997   Le nuage de points créé sur Excel représentant les 120 céphéides de l'échantillons pour lesquelles le rayon est disponible. Le rayon est sur l'axe horizontal et la période sur l'axe verticale. Le graphique est titré « Période de pulsation des céphéides selon le rayon de l'étoile pour 120 céphéides, 1997 ». On peut y voir la grande majorité des points qui sont concentrés le long d'une ligne, avec deux points un peu à l'écart.   "
},
{
  "id": "sec-Laboratoire_TODO-3-6",
  "level": "2",
  "url": "sec-Laboratoire_TODO.html#sec-Laboratoire_TODO-3-6",
  "type": "Table",
  "number": "8.2.2",
  "title": "Interprétation de la force du lien linéaire",
  "body": " Interprétation de la force du lien linéaire       Interprétation du lien       Très fort à parfait       Fort       Modéré       Faible       Aucun à très faible    "
},
{
  "id": "sec-Postlab_TODO",
  "level": "1",
  "url": "sec-Postlab_TODO.html",
  "type": "Section",
  "number": "8.3",
  "title": "Réflexions",
  "body": " Réflexions  Mise en contexte  "
},
{
  "id": "sec-Armee",
  "level": "1",
  "url": "sec-Armee.html",
  "type": "Section",
  "number": "A.1",
  "title": "Armée américaine",
  "body": " Armée américaine  Selon un rapport démographique de la communauté militaire américaine  , document consulté le 30 novembre 2024 , en 2010, l'armée américaine comptait de membres issus de minorités ethniques. On introduit les données d'un échantillon de membres de l'armée américaine, prélevé en 2011  , page consultée le 30 novembre 2024 . On pourrait supposer que la proportion de membres issus de minorité ethnique augmente à chaque année. C'est ce que l'on va vérifier en effectuant un test d'hypothèse sur une proportion. La base de données, modifiée pour répondre aux objectifs de ce laboratoire, a été obtenue du site https:\/\/www.openlab.psu.edu\/ansur2\/ . Cette base de données comprend les variables suivantes.    l'identifiant du soldat;  le genre du soldat;   Homme;  Femme;    l'installation du soldat;   Camp Atterbury;  Camp Shelby;  Fort Bliss;  For Bragg;  Camp Drum;  Camp Gordon;  Camp Hood;  Camp Huachuca;  Camp Lee;  Camp McCoy;  Camp Rucker;  Camp Stewart;    la branche de service;   l'armée régulière;  garde nationale de l'armée;  réserve de l'armée    l'ethnicité du soldat;   blanc;  noir;  hispanique;  asiatique (Cambodge, Chine, Corée du Sud, Japon, Laos, Myanmar, Taïwan, Vietnam);  autochtone;  îles du Pacifique;  autre (Asie de l'est ou Inde, Moyen-Orient ou îles des Caraïbes);    l'âge du soldat (en années);  la grandeur du soldat (en pouces);  le poids du soldat (en livres);  la main dominante du soldat;   droite;  gauche;  aucune préférence.      "
},
{
  "id": "sec-Collisions",
  "level": "1",
  "url": "sec-Collisions.html",
  "type": "Section",
  "number": "A.2",
  "title": "Base canadienne de données sur les collisions",
  "body": " Base canadienne de données sur les collisions  La base de données nationale sur les collisions s'agit « d'une base de données de toutes les collisions automobiles ayant fait l'objet d'un rapport de police et étant survenues sur les routes publiques du Canada en 2019 » , page consultée le 30 novembre 2024 . Le fichier Excel avec la base de données a été nettoyé pour faciliter le traitement statistique. Les modalités de chaque variable peuvent être consultées sur le site web du gouvernement du Canada , page consultée le 30 novembre 2024 . Cette base de données comprend les variables suivantes.    l'année de la collision;  le mois de la collision;    le jour de la semaine de la collision;    l'heure de la collision;   la sévérité de la collision;    le nombre de véhicules en cause;    le type de collision;  l'endroit routier de la collision;  les conditions météorologiques au moment de la collision;  l'état de la chaussée;  le segment de route où la collision a eu lieu;  la signalisation;  le type de véhicule impliqué dans la collision;  l'année de modèle du véhicule;  le sexe de la personne impliquée dans la collision;  l'âge de la personne impliquée dans la collision;   Pour l'âge, les modalités NN et UU ont été remplacées par et respectivement afin de permettre des groupements dans un tableau croisé dynamique.    le type de blessure;  les mesures de sécurité utilisées;  le type d'usager.    La base de données est en lien avec les individus impliqués dans une collision et non pas le nombre de collisions. Une collision est donc enregistrée plusieurs fois selon le nombre de personnes impliquées. Par exemple, si deux véhicules sont entrées en collision, chacun avec un conducteur et un passager, on retrouvera cette collision quatre fois dans la base de données.  "
},
{
  "id": "sec-Diabete",
  "level": "1",
  "url": "sec-Diabete.html",
  "type": "Section",
  "number": "A.3",
  "title": "Diabète",
  "body": " Diabète  Les trois premiers laboratoires sont consacrés à l'étude de la maladie du diabète, en mettant l'accent sur les femmes d'origine pima. Les Pimas sont un peuple autochtone de la région du Sonora, au Mexique, et de l'État de l'Arizona, aux États-Unis. Les données utilisées proviennent du National Institute of Diabetes and Digestive and Kidney Diseases (l'Institut National du Diabète et des Maladies Digestives et Rénales des États-Unis). Les femmes ont été suivies sur une longue période de temps, soit de 1965 à 1995. Ce type de recherche, appelé étude longitudinale, vise à suivre l'évolution d'une variable dans le temps. L'année exacte de la collecte de données pour ce laboratoire n'est toutefois pas connue.  Selon Santé Canada, le diabète est défini comme « une maladie chronique qui se développe lorsque le corps ne produit pas l'insuline dont il a besoin pour transformer le sucre en énergie ou qu'il ne l'utilise pas efficacement » , page consulté le 26 août 2024 . Cette maladie se divise en trois catégories : le diabète de type 1, le diabète de type 2 et le diabète gestationnel. Le diabète de type 1 se caractérise par une production insuffisante d'insuline par le corps. Le diabète de type 2 est lié à une résistance du corps à l'insuline. Le diabète gestationnel, quant à lui, se manifeste par une élévation récente du taux de glucose dans le sang d'une femme enceinte.  Dans l'étude présentée, on se concentre sur le diabète de type 2, une forme de diabète fréquemment associée à l'inactivité physique, à l'obésité, à l'âge avancé d'un individu, ainsi qu'à des antécédents familiaux de diabète de type 2. Plusieurs communautés autochtones rencontrent des obstacles pour accéder à des soins de santé adéquats en raison de ressources limitées, de faibles revenus et de conditions économiques précaires.  La base de données de l'enquête comprend les mesures diagnostiques d'un échantillon de 768 femmes d'origine pima de l'Arizona. Les variables à l'étude sont :    l' identifiant des participantes. L'éthique en matière de recherche exige l'anonymat des personnes participantes. Ainsi, un numéro est attribué à chaque individu afin d'éviter de divulguer leur identité;  l' âge des participantes en année;  la concentration de glucose plasmatique après deux heures lors d'un test de tolérance au glucose par voie orale en mg\/dL. Un taux élevé de glucose est un signe précoce du diabète de type 2. Après ce test, une valeur considérée saine est inférieure à 140 mg\/dL. Une valeur comprise entre 140 et 199 mg\/dL est considérée comme un prédiabète. Une valeur de 200 mg\/dL ou plus indique un diabète;   la pression artérielle diastolique en mm Hg. La pression diastolique indique la pression dans les artères lorsque le coeur se repose entre deux battements. Une valeur comprise entre 60 et 80 est considérée normale. Une valeur entre 80 et 90 est qualifiée de préhyperetension. Une valeursupérieure à 90 est classifiée comme hypertension;   l' épaisseur du pli cutané du triceps en mm;   l' insuline dans le sang en U\/mL. L'insuline est une hormone produite par le pancréas. Elle joue un rôle crucial dans le maintien de l'équilibre énergétique du corps et la régulation du taux de glucose sanguin. Après un repas riche en glucides, le taux de glucose peut augmenter rapidement; l'insuline intervient alors pour l'abaisser. En cas de production insuffisante d'insuline ou si le corps devient résistant à son action, le glucose reste en excès dans le sang, ce qui peut entraîner des maladies comme le diabète de type 1 ou le diabète de type 2. Dans l'étude des femmes d'origine pima, l'accent est mis sur le risque de développement du diabète de type 2;   l' indice de masse corporelle (IMC) en kg\/m . Comme l'indiquent ses unités, l'IMC est la valeur obtenue en divisant la masse d'un individu par sa taille au carré. Il s'agit d'un indicateur permettant d'estimer le surpoids d'une personne. Selon Statistique Canada, l'IMC fournit « un moyen de classer le poids corporel en fonction de risque pour la santé » https:\/\/www150.statcan.gc.ca\/n1\/pub\/82-229-x\/2009001\/status\/abm-fra.htm . Cependant, l'IMC n'est pas sans faille. Il ne fournit aucune information concernant la distribution de la matière grasse dans le corps;   les stades d' obésité selon Santé Canada (catégorie de l'IMC) :   Poids insuffisant ( )  Poids normal ( )  Excès de poids ( )  Obésité Classe I ( )  Obésité Classe II ( )  Obésité Classe III ( )     la fonction pedigree du diabète . C'est un score mesurant le risque familial du diabète. Cette valeur mesure entre 0,08 et 2,42;    l' atteinte au diabète (avoir ou non le diabète).    Non   Oui      "
},
{
  "id": "sec-Diabete-6",
  "level": "2",
  "url": "sec-Diabete.html#sec-Diabete-6",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "identifiant âge glucose pression artérielle diastolique épaisseur du pli cutané du triceps insuline indice de masse corporelle obésité fonction pedigree du diabète atteinte "
},
{
  "id": "sec-Polluants",
  "level": "1",
  "url": "sec-Polluants.html",
  "type": "Section",
  "number": "A.4",
  "title": "Polluants",
  "body": " Polluants  Le 9 août 2024, la ville de Montréal a reçu une quantité de pluie record entre 158 et 173 mm en raison de la tempête tropicale Debby, entraînant d'importantes inondations et des dommages infrastructurels. Une question intéressante à examiner est la suivante : comment des précipitations intenses influencent-elles la qualité de l'air? Certaines études démontrent que « les précipitations intenses réduisent temporairement la concentration de particules fines ( ) et de dioxyde d'azote ( ) dans l'air en raison du lavage atmosphérique » (SOURCE? Wang, Y., et al. (2014), Eslami, A., et al. (2020),Kim, B. M., Park, J. H. (2001)). Cependant, l'impact d'intenses précipitations sur la qualité de l'air peut varier selon des facteurs locaux tels que différentes sources de polluants et les conditions météorologiques. Dans les zones urbaines à forte circulation ou avec plusieurs secteurs industriels, les améliorations de la qualité de l'air peuvent être temporaires si les polluants s'accumulent rapidement après l'arrêt de la pluie. Afin d'étudier cette question, les données de la qualité de l'air de Montréal pour l'année 2024 ont été recueillies , page consultée le 14 octobre 2024 . Cette base de données comprend les variables suivantes.    la station de laquelle les mesures ont été prélevées;  le nom du polluant mesuré   l'ozone troposphérique, ;  le diazote de carbone, ;  le monoxyde de carbone, ;  le dioxyde de soufre, ;  les particules fines, .    la valeur du polluant, tous en mg\/m ;  la journée du prélèvement;  l'heure du prélèvement.    "
},
{
  "id": "sec-Polluants-2",
  "level": "2",
  "url": "sec-Polluants.html#sec-Polluants-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": ""
},
{
  "id": "sec-Precipitations",
  "level": "1",
  "url": "sec-Precipitations.html",
  "type": "Section",
  "number": "A.5",
  "title": "Précipitations",
  "body": " Précipitations  D'après les données récoltées entre 1991 à 2020 par Environnement Canada à la station météorologique de l'Aéroport international Pierre-Elliott-Trudeau de Montréal Données tirées de , page consultée le 21 novembre 2024 , la ville de Montréal reçoit en moyenne mm de précipitations totales au mois de mars, soit environ mm par jour. Les précipitations totales sont la somme de la pluie totale et de l'équivalent en eau de la neige totale en millimètres.  Les données échantillonnales d'Environnement Canada pour le mois de mars 2024 Données tirées de , page consultée le 21 novembre 2024 . La seule variable à l'étude est la quantité de précipitations totales en mm.   "
},
{
  "id": "ann-importation",
  "level": "1",
  "url": "ann-importation.html",
  "type": "Appendice",
  "number": "B",
  "title": "Importer des données",
  "body": " Importer des données    Il existe plusieurs formats de base de données et plusieurs manières de les importer. On ne considère que l'importation des données provenant d'un fichier csv . Un fichier csv est un fichier texte où chaque ligne du texte correspond à une ligne du tableau et les virgules correspondent aux séparations entre les colonnes. Les portions de texte séparées par une virgule correspondent ainsi aux contenus des cellules du tableau. Une ligne est une suite ordonnée de caractères terminée par un caractère de fin de ligne.  Excel est en mesure d'ouvrir directement un fichier csv , mais il est préférable de ne pas travailler dans le fichier des données brutes, pour ne pas accidellement les modifier ou les corrompre. Les étapes pour importer un fichier csv dans Excel et le convertir en format xlsx sont présentées ci-dessous.     Ouvrir un classeur vide d'Excel.     Cliquer sur l'onglet Données (voir la ).     Sélection de l'onglet Données   Sélection de l'onglet Données      Dans le groupe Récupérer et transformer des données , cliquer sur la flèche du menu déroulant de l'icône Obtenir des données (voir la ).   Sélectionner l'option À partir d'un fichier , suivi de l'option À partir d'un fichier texte\/CSV (voir la ).     Sélection de l'onglet À partir d'un fichier texte\/CSV   Sélection de l'onglet À partir d'un fichier texte\/CSV      Accéder au fichier diabete.csv sauvegardé sur l'ordinateur. Sélectionner-le et cliquer Importer (voir la ).     Importer un fichier de format csv   Importer un fichier de format csv      Une boîte de dialoge s'ouvrira. Il faut s'assurer que le délimiteur est bien Virgule . Une fois fait, cliquer sur l'option Charger (voir la ).     Charger les données en format xlsx   Charger les données en format xlsx      Un tableau adapté pour travailler dans Excel est maintenant importé (voir la ).       Tableau résultant dans Excel   Tableau résultat dans Excel          "
},
{
  "id": "Fig_Donnees_Obtenir",
  "level": "2",
  "url": "ann-importation.html#Fig_Donnees_Obtenir",
  "type": "Figure",
  "number": "B.0.1",
  "title": "",
  "body": " Sélection de l'onglet Données   Sélection de l'onglet Données   "
},
{
  "id": "Fig_Donnees_CSV_1",
  "level": "2",
  "url": "ann-importation.html#Fig_Donnees_CSV_1",
  "type": "Figure",
  "number": "B.0.2",
  "title": "",
  "body": " Sélection de l'onglet À partir d'un fichier texte\/CSV   Sélection de l'onglet À partir d'un fichier texte\/CSV   "
},
{
  "id": "Fig_Donnees_CSV_2",
  "level": "2",
  "url": "ann-importation.html#Fig_Donnees_CSV_2",
  "type": "Figure",
  "number": "B.0.3",
  "title": "",
  "body": " Importer un fichier de format csv   Importer un fichier de format csv   "
},
{
  "id": "Fig_Donnees_CSV_3",
  "level": "2",
  "url": "ann-importation.html#Fig_Donnees_CSV_3",
  "type": "Figure",
  "number": "B.0.4",
  "title": "",
  "body": " Charger les données en format xlsx   Charger les données en format xlsx   "
},
{
  "id": "Fig_Donnees_CSV_4",
  "level": "2",
  "url": "ann-importation.html#Fig_Donnees_CSV_4",
  "type": "Figure",
  "number": "B.0.5",
  "title": "",
  "body": " Tableau résultant dans Excel   Tableau résultat dans Excel   "
},
{
  "id": "ann-manipulation",
  "level": "1",
  "url": "ann-manipulation.html",
  "type": "Appendice",
  "number": "C",
  "title": "Manipuler la feuille de calcul",
  "body": " Manipuler la feuille de calcul  Une feuille de calcul est l'endroit principal où se déroule le travail dans Excel. Bien que l'on puisse tenter de tout prévoir, il est fréquent qu'il devienne nécessaire de déplacer, ajouter ou supprimer des éléments. On distingue trois types d'éléments: la cellule unique, la ligne et la colonne.  Dans un premier temps, pour simplement effacer le contenu d'une cellule, on peut appuyer sur la touche backspace . Toutefois, si plus d'une cellule sont sélectionnées, seule le contenu de la cellule active sera supprimé. Pour effacer le contenu de toutes les cellules de la sélection, il vaut mieux utiliser la touche suppr ( del en anglais).  Pour ajouter une cellule à un endroit, il faut faire un clic droit où l'on veut la nouvelle cellule et ensuite décider de la manière de faire l'insertion. On peut  décaler la cellule active vers la droite,  décaler la cellule active vers le bas,  décaler la ligne entière vers le bas,  décaler la colonne entière vers la droite.    Pour insérer une nouvelle ligne ou une nouvelle colonne, on peut effectuer un clic droit sur l'étiquette de la ligne ou de la colonne et cliquer sur Insérer ou encore utiliser l'option décrite ci-dessus dans l'ajout d'une cellule.  D'une manière semblable, on peut supprimer une cellule. Ceci est une opération différente de supprimer son contenu. La supression d'une cellule requiert de décider ce que l'on doit faire avec l'espace qu'occupait la cellule. Il est possible de  supprimer un cellule et ramener les cellules vers la gauche,  supprimer un cellule et ramener les cellules active vers le haut,  supprimer toute la ligne et ramener les lignes vers le haut,  supprimer toute la colonne et ramener les colonnes vers la gauche.    Parfois, certaines lignes ou certaines colonnes ne sont utiles que pour faire des calculs et on ne souhaite pas les afficher. Il est possible de masquer une ligne ou une colonne. Pour cacher une ligne ou une colonne:  On peut faire un clic droit sur l'étiquette de la ligne ou de la colonne et appuyer sur Masquer ;  Aller sous l'onglet Accueil et cliquer sur Format , puis Masquer & afficher et finalement, Masquer les lignes ou Masquer les colonnes  .   Pour afficher une ligne ou une colonne, on peut sélectionner les lignes ou les colonnes adjacentes et  faire un clic droit et appuyer sur Afficher ;  aller sous l'onglet Accueil et cliquer sur Format , puis Masquer & afficher et finalement, Afficher les lignes ou Afficher les colonnes .   On peut aussi grouper des lignes ou des colonnes voisines afin de les masquer ou de les afficher. Pour cela, on sélectionne les lignes ou les colonnes que l'on souhaite grouper et on effectue la combinaison Alt + Shift + . Pour dissocier les lignes ou les colonnes, on les sélectionne et on effectue la combinaison Alt + Shift + .  "
},
{
  "id": "sec-miseenforme",
  "level": "1",
  "url": "sec-miseenforme.html",
  "type": "Section",
  "number": "D.1",
  "title": "Mise en forme",
  "body": " Mise en forme  Plusieurs aspects de la mise en forme et du format de l'affichage sont disponibles dans le ruban de l'onglet Accueil . En voici une liste non exhaustive.   Éléments de mise en forme   Format de cellule en pourcentage Pour faire en sorte que le contenu d'une cellule s'affiche en pourcentage, on change le menu déroulant à Pourcentage ou encore on clique sur le bouton juste en-dessous. Aussi, voir le raccourci .    "
},
{
  "id": "liste-miseenforme",
  "level": "2",
  "url": "sec-miseenforme.html#liste-miseenforme",
  "type": "Liste",
  "number": "D.1.1",
  "title": "Éléments de mise en forme",
  "body": " Éléments de mise en forme   Format de cellule en pourcentage Pour faire en sorte que le contenu d'une cellule s'affiche en pourcentage, on change le menu déroulant à Pourcentage ou encore on clique sur le bouton juste en-dessous. Aussi, voir le raccourci .   "
},
{
  "id": "sec-adresse",
  "level": "1",
  "url": "sec-adresse.html",
  "type": "Section",
  "number": "E.1",
  "title": "Adresse",
  "body": " Adresse  La première est la fonction ADRESSE , qui permet de retourner sous forme de texte le nom d'une cellule. Par exemple, si l'on tape =ADRESSE(2;1) dans une cellule quelconque, le résultat sera $A$2 , puisque cette cellule est dans la deuxième ligne et dans la première colonne.  La forme générale de la formule et de ses arguments est ADRESSE(no_lig, no_col, [no_abs], [a1], [feuille_texte]) , où les arguments entre crochets sont facultatifs. Ces arguments de la fonction ADRESSE sont:  no_lig Le numéro de la ligne de la cellule visée;  no_col Le numéro de la colonne de la cellule visée;  no_abs Le type de référence absolue souhaitée;  a1 Format de l'adresse;  feuille_texte Si spécifié, le nom de la feuille de travail donnée en argument fera partie de l'adresse.    Pour ce qui est du type de référence, la table suivante présente les options. Pour en savoir davantage sur le fonctionnement des références absolues, voir l'annexe .   Type de référence associé à l'argument no<underscore>abs    no_abs  Type de référence    1 ou omis  Absolue    2  Ligne absolue, colonne relative    3  Ligne relative, colonne absolue    4  Relative     Pour l'argument a1 , il ne sera pas utilisé dans ce manuel, mais permet de passer de la forme par défaut A3 ( a1=VRAI ou omis) à une adresse dont le format est de la forme L1C3 ( a1=FAUX ).  La fonction ADRESSE seule n'est pas très utile. C'est en la combinant avec d'autres fonctions qu'elle peut être exploitée efficacement.  "
},
{
  "id": "sec-adresse-2",
  "level": "2",
  "url": "sec-adresse.html#sec-adresse-2",
  "type": "Paragraphe (with a defined term)",
  "number": "",
  "title": "",
  "body": "ADRESSE "
},
{
  "id": "sec-adresse-5",
  "level": "2",
  "url": "sec-adresse.html#sec-adresse-5",
  "type": "Table",
  "number": "E.1.1",
  "title": "Type de référence associé à l’argument no&lt;underscore&gt;abs",
  "body": " Type de référence associé à l'argument no<underscore>abs    no_abs  Type de référence    1 ou omis  Absolue    2  Ligne absolue, colonne relative    3  Ligne relative, colonne absolue    4  Relative    "
},
{
  "id": "sec-indirect",
  "level": "1",
  "url": "sec-indirect.html",
  "type": "Section",
  "number": "E.2",
  "title": "Indirect",
  "body": " Indirect  L'une de ces fonctions est appelée INDIRECT . Cette fonction renvoie le contenu d'une cellule située à l'adresse donnée. Par exemple, si l'on tape =INDIRECT(\"A2\") dans une cellule quelconque, le résultat sera le contenu de la cellule A2 . La figure suivante illustre cela.   Utilisation simple de la fonction INDIRECT   Utilisation de la fonction indirect en animation    La fonction INDIRECT nécessite deux arguments, dont un facultatif. La syntaxe est INDIRECT(réf_texte, [a1]) . Les arguments sont  ref_texte Une référence à une cellule sous forme de texte;  a1 Paramètre booléen pour spécifier le type de référence ( VRAI ou omis pour A3 ou FAUX pour L1C3 ).    La combinaison des fonctions ADRESSE et INDIRECT est naturelle et permet d'obtenir le contenu d'une cellule à l'aide d'une formule complexe. Ces deux fonctions seront utilisées ensemble dans la prochaine sous-section, mais voici une illustration simple de leur utilisation combinée.  Dans la figure , la plage A1:E5 contient des nombres arbitraires. Dans la cellule I2 , on a écrit le numéro d'une ligne, et dans la cellule I3 , celui d'une colonne. Dans la cellule I4 , on a utilisé la fonction ADRESSE pour obtenir l'adresse de la cellule se trouvant à la ligne quatrième ligne deuxième colonne. Finalement, on obtient le contenu de la cellule B4 en utilisant la fonction INDIRECT dans la cellule I5 .   Utilisation de INDIRECT et ADRESSE   Une animation montrant comment combiner indirecte et adresse    "
},
{
  "id": "sec-indirect-3",
  "level": "2",
  "url": "sec-indirect.html#sec-indirect-3",
  "type": "Figure",
  "number": "E.2.1",
  "title": "",
  "body": " Utilisation simple de la fonction INDIRECT   Utilisation de la fonction indirect en animation   "
},
{
  "id": "fig-indirectadresse",
  "level": "2",
  "url": "sec-indirect.html#fig-indirectadresse",
  "type": "Figure",
  "number": "E.2.2",
  "title": "",
  "body": " Utilisation de INDIRECT et ADRESSE   Une animation montrant comment combiner indirecte et adresse   "
},
{
  "id": "sec-substitue",
  "level": "1",
  "url": "sec-substitue.html",
  "type": "Section",
  "number": "E.3",
  "title": "Substitue",
  "body": " Substitue  Une autre fonction pouvant se combiner avec ADRESSE est la fonction SUBSTITUE . Seule, cette fonction permet de remplacer du texte et est déjà en soi très utile selon le domaine. Excel est bon pour prolonger une suite logique avec l'outil croix lorsque celle-ci est numérique, mais si on veut glisser en modifiant du texte, il a besoin d'aide. Dans la table ci-dessous, on illustre une situation où un gestionnaire a une liste de numéros de téléphone dont il aimerait uniformiser le format. Certains des numéros ont des tirets, d'autres ont des espaces entre l'indicatif régional et à l'intérieur du numéro local. La commande Substitue peut enlever les tirets et les espaces. Elle aurait aussi pu ajouter des tirets ou des espaces, voire même une combinaison des deux, selon la préférence de l'utilisateur.   Liste de numéros de téléphone   Une liste de numéros de téléphone   Par exemple, pour supprimer les tirets du premier numéro, on peut utiliser la commande =SUBSTITUE(A2;\"-\";\"\") . Le premier argument est l'emplacement du texte que l'on souhaite modifier, le deuxième est le texte à modifier (ici le tiret) et le troisième est ce par quoi on veut le remplacer (ici on le remplace par une chaine vide, ce qui a pour effet de supprimer le tiret). Pour supprimer les espaces du numéro de la cellule A3 , on pourrait modifier la formule précédente, mais ce ne serait pas efficace, compte tenu du fait qu'il existe des numéros avec à la fois des tirets et des espaces, comme celui dans la cellule A5 . Il est possible d'imbriquer des formules l'une dans l'autre afin de modifier les deux caractères. En remplaçant la formule dans la cellule B1 par =SUBSTITUE(SUBSTITUE(A2;\"-\";\"\");\" \";\"\") , on pourra utiliser l'outil croix pour descendre le long de la liste et corriger le format des numéros. La figure ci-dessous présente le résultat final.   Liste de numéros de téléphone dans le même format   Une liste de numéros de téléphone dans le même format   On imagine que l'on doive appliquer une formule fois à l'aide de l'outil croix. Si l'on veut glisser verticalement, il peut être facile de compter jusqu'où on doit aller, mais s'il faut glisser horizontalement, le calcul est plus ardu. La commande SUBSTITUE avec la commande ADRESSE permet de déterminer le nom de la colonne. Dans un premier temps, on peut avoir l'adresse de la colonne avec la commande =ADRESSE(1;n;4) (On pourrait remplacer 1 par n'importe quel nombre, cet argument correspond au numéro de ligne). Si l'on souhaite uniquement avoir le nom de la colonne, alors il suffit de remplacer le numéro de la ligne par une chaine de caractères vide. Ainsi, la commande finale sera =SUBSTITUE(ADRESSE(1;n;4);\"1\";\"\") . En mettant les valeurs de dans la colonne A et en appliquant cette formule dans la colonne B , on obtient le résultat de l'image ci-dessous. On remarque entre autre chose que le nombre de colonnes atteint son maximum à .   Nom de la colonne   Une feuille Excel montrant comment obtenir le nom de la colonne.   "
},
{
  "id": "sec-substitue-3",
  "level": "2",
  "url": "sec-substitue.html#sec-substitue-3",
  "type": "Figure",
  "number": "E.3.1",
  "title": "",
  "body": " Liste de numéros de téléphone   Une liste de numéros de téléphone  "
},
{
  "id": "sec-substitue-5",
  "level": "2",
  "url": "sec-substitue.html#sec-substitue-5",
  "type": "Figure",
  "number": "E.3.2",
  "title": "",
  "body": " Liste de numéros de téléphone dans le même format   Une liste de numéros de téléphone dans le même format  "
},
{
  "id": "sec-substitue-7",
  "level": "2",
  "url": "sec-substitue.html#sec-substitue-7",
  "type": "Figure",
  "number": "E.3.3",
  "title": "",
  "body": " Nom de la colonne   Une feuille Excel montrant comment obtenir le nom de la colonne.  "
},
{
  "id": "sec-SauvegarderXLSM",
  "level": "1",
  "url": "sec-SauvegarderXLSM.html",
  "type": "Section",
  "number": "F.1",
  "title": "Sauvegarder un fichier avec l’extension <code class=\"code-inline tex2jax_ignore\">xlsm<\/code>",
  "body": " Sauvegarder un fichier avec l'extension xlsm  Ce laboratoire utilise des canevas à remplir, créés pour effectuer des tests d'hypothèses paramétriques. Ces canevas contiennent des macros, une série d'instructions ou d'actions qu'un utilisateur peut exécuter automatiquement pour automatiser une tâche répétitive comme effacer le contenu d'une plage de cellules. Pour exécuter des macros, il faut sauvegarder les fichiers Excel avec l'extension xlsm au lieu de xlsx .  Les étapes pour sauvegarder un fichier Excel avec l'extension xlsm sont présentées ci-dessous.    Créer une copie du fichier Excel Données_Diabètes.xlsx . Nommer ce fichier Test_Diabètes.xlsx .  Ouvrir le fichier Test_Diabètes.xlsx .  Cliquer sur l'onglet Fichier du ruban.  Sélectionner l'onglet Enregistrer une copie .     Cliquer sur la flèche du menu déroulant et sélectionner le deuxième choix de type de fichier, soit l'extension de fichier xlsm (voir la ). Ceci permet la sauvegarde d'un fichier Excel prenant en charge les macros.    Sélection de l'extension de fichier xlsm   Sélection de l'extension de fichier xlsm     Sauvegarder le fichier dans le répertoire désiré.    Le fichier Test_Diabètes.xlsm est sauvegardé. Répéter les étapes avec le fichier Données_Polluant.xlsx .  "
},
{
  "id": "Fig_Enregistrer_2",
  "level": "2",
  "url": "sec-SauvegarderXLSM.html#Fig_Enregistrer_2",
  "type": "Figure",
  "number": "F.1.1",
  "title": "",
  "body": " Sélection de l'extension de fichier xlsm   Sélection de l'extension de fichier xlsm   "
},
{
  "id": "sec-Developpeur",
  "level": "1",
  "url": "sec-Developpeur.html",
  "type": "Section",
  "number": "F.2",
  "title": "Afficher l’onglet <dfn class=\"terminology\">Développeur<\/dfn>",
  "body": " Afficher l'onglet Développeur   Puisque ce laboratoire utilise des canevas qui contiennent des macros, il faut afficher l'onglet Développeur dans le ruban d'Excel.  Les étapes pour afficher l'onglet sont présentées ci-dessous.    Ouvrir le fichier Test_Diabètes.xlsm .  Cliquer sur l'onglet Fichier du ruban.  Sélectionner l'option Autres (voir la ).    Sélection de l'option Autres   Sélection de l'option Autres     Des options s'affichent. Sélectionner l'onglet Options (voir la ).    Sélection de l'onglet Options   Sélection de l'onglet Options     Une boîte de dialogue s'affiche présentant des onglets dans sa partie gauche. Sélectionner l'onglet Personnaliser le ruban (voir la ).   À droite de la boîte de dialogue, certains onglets principaux sont cochés. Il faut glisser la barre déroulante vers le bas et trouver l'icône Développeur (voir la ).  Cocher l'encadré à gauche de Développeur (voir la ). Ceci fait en sorte que l'onglet Développeur apparaît parmi les onglets principaux d'Excel.    Sélection des onglets Personnaliser le ruban et Développeur   Sélection des onglets Personnaliser le ruban et Développeur     Cliquer sur OK .    "
},
{
  "id": "Fig_Developpeur_1",
  "level": "2",
  "url": "sec-Developpeur.html#Fig_Developpeur_1",
  "type": "Figure",
  "number": "F.2.1",
  "title": "",
  "body": " Sélection de l'option Autres   Sélection de l'option Autres   "
},
{
  "id": "Fig_Developpeur_2",
  "level": "2",
  "url": "sec-Developpeur.html#Fig_Developpeur_2",
  "type": "Figure",
  "number": "F.2.2",
  "title": "",
  "body": " Sélection de l'onglet Options   Sélection de l'onglet Options   "
},
{
  "id": "Fig_Developpeur_gif",
  "level": "2",
  "url": "sec-Developpeur.html#Fig_Developpeur_gif",
  "type": "Figure",
  "number": "F.2.3",
  "title": "",
  "body": " Sélection des onglets Personnaliser le ruban et Développeur   Sélection des onglets Personnaliser le ruban et Développeur   "
},
{
  "id": "sec-utilite_raccourcis",
  "level": "1",
  "url": "sec-utilite_raccourcis.html",
  "type": "Section",
  "number": "G.1",
  "title": "Utilité",
  "body": " Utilité  Si l'on est en mode édition d'une cellule et que l'on veut le quitter, il suffit d'appuyer sur la touche Esc (ou échap ).  Deux des raccourcis claviers les plus utilisés sont sans aucun doute les fameux copier-coller. Dans Excel, la fonction coller est un peu différente, car on peut coller de plusieurs façon. Puisqu'une cellule peut contenir des formules, référençant potentiellement d'autres cellules, il faut déterminer lors du collage si l'on veut copier ces formules ou si l'on souhaite copier uniquement les valeurs des cellules.  Pour comprendre l'importance de la distinction entre ces deux méthodes, on considère l'exemple suivant. Dans la première colonne, on a écrit les entiers de à . Dans la deuxième colonne, on a inscrit la formule qui double l'entrée de la colonne A . Si l'on veut copier le contenu de la colonne B , on peut avoir (minimalement) deux intentions:  Copier la formule, dans le but de continuer la multiplication par ;  Copier les valeurs, dans le but de les retranscrire ailleurs pour réutilisation.    Si l'on copie les valeurs à l'aide de la combinaison CTRL + C , par défaut Excel va aussi copier les formules. Pour coller les valeurs seules, on peut appliquer la combinaison CTRL + Alt + V afin d'ouvrir le menu de collage et appuyer sur V à nouveau pour sélectionner l'option Valeurs .  "
},
{
  "id": "sec-navigation_raccourcis",
  "level": "1",
  "url": "sec-navigation_raccourcis.html",
  "type": "Section",
  "number": "G.2",
  "title": "Navigation",
  "body": " Navigation  Ces premiers raccourcis sont simples, mais très utiles. Lorsqu'une cellule est sélectionnée, on peut naviguer vers les cellules voisines en cliquant sur les flèches du clavier , , , . De manière équivalente, on peut se déplacer vers le bas avec la touche Enter ou vers le haut avec la combinaison Shift + Enter et vers la droite avec la touche Tab ou vers la gauche avec la combinaison Shift + Tab .   Navigation dans un ensemble de cellules sélectionnées  Si un ensemble de cellules avait été préalablement sélectionné, alors la navigation avec Enter et Tab restera dans la sélection, changeant de colonne ou de ligne au besoin.   Un clic sur le bouton Home change la cellule active pour la première cellule de la ligne alors que la combinaison Ctrl + Home ramène à la première cellule de la feuille, soit celle en haut à gauche (normalement identifiée A1).  "
},
{
  "id": "rem-navigationselection",
  "level": "2",
  "url": "sec-navigation_raccourcis.html#rem-navigationselection",
  "type": "Remarque",
  "number": "G.2.1",
  "title": "Navigation dans un ensemble de cellules sélectionnées.",
  "body": " Navigation dans un ensemble de cellules sélectionnées  Si un ensemble de cellules avait été préalablement sélectionné, alors la navigation avec Enter et Tab restera dans la sélection, changeant de colonne ou de ligne au besoin.  "
},
{
  "id": "sec-selection_raccourcis",
  "level": "1",
  "url": "sec-selection_raccourcis.html",
  "type": "Section",
  "number": "G.3",
  "title": "Sélection variée",
  "body": " Sélection variée  Il est souvent utile de sélectionner un ensemble de cellules, parfois rapprochées. Les quatre raccourcies suivants permettent de sélectionner la cellule active ainsi que tous ses voisins non vides dans l'une des quatre directions:  La combinaison Ctrl + Shift + permet de sélectionner la cellule active et tout ce qui est non vide à sa gauche.  La combinaison Ctrl + Shift + permet de sélectionner la cellule active et tout ce qui est non vide à sa droite.  La combinaison Ctrl + Shift + permet de sélectionner la cellule active et tout ce qui ce qui est non vide au-dessus.  La combinaison Ctrl + Shift + permet de sélectionner la cellule active et tout ce qui ce qui est non vide en-dessous.  À noter qu'une utilisation additionnelle de ces combinaisons sélectionnera toutes les cellules vosines de la sélection actuelle, y compris les cellules vides, jusqu'à la prochaine cellule non vide ou jusqu'à la fin de la feuille.  Si l'on souhaite plutôt sélectionner la ligne ou la colonne en totalité, alors en plus de pouvoir cliquer sur l'étiquette de la dite ligne ou colonne, on peut également utiliser les combinaisons Shift + Espace et Ctrl + Espace pour sélectionner respectivement la ligne ou la colonne de la cellule active.   Sélection dans un tableau  Si la cellule active fait partie d'un tableau, alors l'application des raccourcis ci-dessus est d'abord limitée au tableau.    On peut sélectionner toutes les données d'un tableau à l'aide de la combinaison Ctrl + A . À l'extérieur d'un tableau, cette combinaison sélectionne l'entièreté de la feuille de calcul.  "
},
{
  "id": "rem-selectiontableau",
  "level": "2",
  "url": "sec-selection_raccourcis.html#rem-selectiontableau",
  "type": "Remarque",
  "number": "G.3.1",
  "title": "Sélection dans un tableau.",
  "body": " Sélection dans un tableau  Si la cellule active fait partie d'un tableau, alors l'application des raccourcis ci-dessus est d'abord limitée au tableau.   "
},
{
  "id": "sec-miseenforme_raccourcis",
  "level": "1",
  "url": "sec-miseenforme_raccourcis.html",
  "type": "Section",
  "number": "G.4",
  "title": "Mise en forme",
  "body": " Mise en forme  Pour la mise en forme, il existe plusieurs raccourcis qui sont prédéfinis. En voici une liste des principaux qui pourraient être utilisés.    Format de cellule en pourcentage Pour que le format de cellule passe à Pourcentage , on effectue la combinaison Ctrl + Shift + % .    "
},
{
  "id": "liste-miseenforme_raccourcis",
  "level": "2",
  "url": "sec-miseenforme_raccourcis.html#liste-miseenforme_raccourcis",
  "type": "Liste",
  "number": "G.4.1",
  "title": "",
  "body": "  Format de cellule en pourcentage Pour que le format de cellule passe à Pourcentage , on effectue la combinaison Ctrl + Shift + % .   "
},
{
  "id": "backmatter-9",
  "level": "1",
  "url": "backmatter-9.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

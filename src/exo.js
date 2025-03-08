// Notre "base de données" de livres
let livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: true },
    { titre: "1984", auteur: "George Orwell", disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", disponible: true }
];



// Fonctions à implémenter :
// 1. ajouterLivre
const addlivre = ( title ,author) => {
    livres.push( {"titre":title  ,"auteur":author , "disponible": false} )
     }




// 2. emprunterLivre

const emprunterLivre =(title)=>{

   for (let i = 0 ; i < livres.length; i++){
    if (livres[i].titre== title){
        if ( livres[i].disponible== true){
            livres.disponible= false ;
            return 
        }else {

            console.log("not available")
            return 
        }
    }
   }
console.log ("book not avaible in this library")
}


// 3. retournerLivre
const retournerLivre = title => {


for (let i = 0 ; i < livres.length; i++){
    if (livres[i].titre== title){
        if ( livres[i].disponible== true){
            livres.disponible= true ;
            return 
        }else {

            console.log("not available")
            return 
        }
    }
}
}

// 4. afficherLivresDisponibles

function afficherLivresDisponibles(livres) {
   
    const livresDisponibles = livres.filter(livre => livre.disponible);
    
    
    livresDisponibles.forEach(livre => {
        console.log(`Titre: ${livre.titre}, Auteur: ${livre.auteur}`);
    });
}






// 5. rechercherLivre


function rechercherLivre(terme,  livres) {
   
    const livreTrouve = livres.find(livre => 
livre.titre.toUpperCase().includes(terme.toUpperCase()) || livre.auteur.toUpperCase().includes(terme.toUpperCase())
    ); 
    console.log (livreTrouve ) 

}
 



// Fonction pour tester notre système
function testerBibliotheque() {
    // Nous appellerons nos fonctions ici pour tester
    addlivre("hello","nada")

    emprunterLivre("dune")
    //afficherLivresDisponibles(livres)
    rechercherLivre("dune",  livres)
   
}

// Appel de la fonction de test
testerBibliotheque();
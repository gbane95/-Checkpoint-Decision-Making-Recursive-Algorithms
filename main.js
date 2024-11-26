// Prise de Décision
// 1. Vérificateur d'Année Bissextile
function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
const annee = parseInt(prompt("Entrez une année :"));
if (estBissextile(annee)) {
    console.log(`L'année ${annee} est bissextile.`);
} else {
    console.log(`L'année ${annee} n'est pas bissextile.`);
}

//2. Tarification des Billets de Cinéma
function prixBillet(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Exemple d'utilisation
const age = parseInt(prompt("Entrez votre âge :"));
console.log(`Le prix de votre billet est : ${prixBillet(age)} $`);

// Récursion
// 1. Séquence de Fibonacci
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation
const n = parseInt(prompt("Entrez un nombre pour obtenir le nième terme de Fibonacci :"));
console.log(`Le ${n}ème terme de la séquence de Fibonacci est : ${fibonacci(n)}`);

//2. Vérificateur de Palindrome
function estPalindrome(chaine) {
    // Enlever les espaces et mettre en minuscule
    chaine = chaine.replace(/\s+/g, '').toLowerCase();
    
    if (chaine.length <= 1) {
        return true;
    }
    if (chaine[0] !== chaine[chaine.length - 1]) {
        return false;
    }
    return estPalindrome(chaine.slice(1, -1));
}

// Exemple d'utilisation
const chaine = prompt("Entrez une chaîne pour vérifier si c'est un palindrome :");
if (estPalindrome(chaine)) {
    console.log("La chaîne est un palindrome.");
} else {
    console.log("La chaîne n'est pas un palindrome.");
}

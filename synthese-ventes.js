
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let nombreVentes = ventes.length;
let chiffreAffaires = 0;

let maximum = ventes[0];
let minimum = ventes[0];

let nombreExceptionnelles = 0;
let chiffreAffairesExceptionnel = 0;

for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    chiffreAffaires = chiffreAffaires + vente;

    if (vente > maximum) {
        maximum = vente;
    }

    if (vente < minimum) {
        minimum = vente;
    }

    if (vente >= 130) {
        nombreExceptionnelles++;
        chiffreAffairesExceptionnel =
            chiffreAffairesExceptionnel + vente;
    }
}

// 3. Affichage des résultats
console.log("Nombre total de ventes :", nombreVentes);
console.log("Chiffre d'affaires total :", chiffreAffaires);
console.log("Vente maximale :", maximum);
console.log("Vente minimale :", minimum);
console.log("Nombre de ventes exceptionnelles :", nombreExceptionnelles);
console.log("CA des ventes exceptionnelles :", chiffreAffairesExceptionnel);

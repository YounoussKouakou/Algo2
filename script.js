// var saisie = prompt("vueillez enter vos notes"); afficher une zone de saisie.
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    return array;
  }
  
  document.getElementById("btnTrie").addEventListener("click", function () {
    const saisie = document.getElementById("saisie").value.trim();
  
    // if (!/^[0-9]+(,[0-9]+)*$/.test(saisie)) Vérifier si l'entrée contient uniquement des chiffres et des virgules
    // Vérifier si l'entrée contient uniquement des chiffres et des espace
    if (!/^[0-9\s]+$/.test(saisie)) {
      document.getElementById("resultat").innerText =
        "Veuillez entrer uniquement des nombres séparés par des espaces vides.";
      return;
    }
  
    const tableau = saisie
      .split(/\s+/) // Utiliser une expression régulière pour diviser par un ou plusieurs espaces
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));
  
    if (tableau.length > 0) {
      const tableauTrier = insertionSort(tableau);
      document.getElementById("resultat").innerText =
        "Notes triées : " + tableauTrier.join(" ");
    } else {
      document.getElementById("resultat").innerText =
        "veuillez enter des nombres valides";
    }
  });
const app = Vue.createApp({
  data() {
    return {
      valeur: "",
      count: 0,
      monTableau: [],
    };
  },
  mounted() {
    // recuperation des information du localStorage
    this.monTableau = JSON.parse(localStorage.getItem("monTableau"));
    this.count = this.monTableau.length;
  },
  methods: {
    // ajouter un élément au tableau
    ajouter() {
      resultat = this.monTableau.push(this.valeur);
      this.valeur = "";
      this.count++;
      this.saveMonTableau();
    },
    // modifie le contenu du champ input //
    modifier(index) {
      //    modif = this.monTableau[index] = this.valeur;
      if (this.valeur !== "") {
        this.monTableau.splice(index, 1, this.valeur);
        this.valeur = "";
        this.saveMonTableau();
      }
    },
    // supprime le contenu du champ input //
    supprimer(index) {
      this.monTableau.splice(index, 1);
      this.count--;
      this.saveMonTableau();
    },
    // sauvegarde des données dans le localStorage //
    saveMonTableau() {
      let parsedData = JSON.stringify(this.monTableau);
      localStorage.setItem("monTableau", parsedData);
    },
  },
});
app.mount("#app");

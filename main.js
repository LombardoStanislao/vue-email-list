// Tramite l'API https://flynn.boolean.careers/exercises/api/random/mail generare una lista di 10 indirizzi email e stamparle in pagina con vue.
// Dopo aver recuperato correttamente 10 indirizzi email e averli stampati in pagina in modo "grezzo",  date sfogo alla vostra creatività per rendere più accattivante la grafica della pagina



var app = new Vue({
 el: '#root',

   data: {
     mailArray: [],
     getReady: false,
   },

   methods: {

   },

   mounted() {

     for (var i = 0; i < 10; i++) {
       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {

          this.mailArray.push(response.data.response);

          if (i=10) {
            this.getReady = true;

          }
      });
     }



   }
});

new Vue(
    {
    el: '#app',
    data: {
        nome: 'Gabrielle Maciel',
        idade: 26,
        imagem: 'imagem.png'
    },
    methods: {
        Multidade: function() {
            return 26*3;
        },
        NumRandomico: function(){
            return (Math.random());
        }  
    },
}
)
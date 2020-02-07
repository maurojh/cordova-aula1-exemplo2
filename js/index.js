var app = {
    initialize: function() {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var botao = document.getElementById('botao');
        botao.addEventListener('click', clicou);
    },
};

app.initialize();

function clicou() {
 var saida = document.getElementById('saida');
 saida.innerHTML = "O cordova funciona!";
}
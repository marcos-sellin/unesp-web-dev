$(document).ready(function() {

    alert("Carregou o JQuerry");

    $("#demo2").html("<b> Inserido com JQuerry - método html");

    alert($("#userNome").val());
    alert("alterando o nome");
    $("#userNome").val("Novo nome...");

    $("#area").on("mousemove", function(event) {

        $("#coordenadas").text("X: " + event.pageX + " | Y: " + 
        event.pageY);

    });

    let cliques = 0;

    $("#area").on("click", function(event) {

        cliques++;
        $("#clickCount").text("Cliques: " + cliques);

    });

    $("#area").on("dblclick", function(event) {

        alert("Clique duplo");

    });

});
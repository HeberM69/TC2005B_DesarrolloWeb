jQuery(function(){

    $("#button").on("click", function() {

        if($("#container_").is(":visible")){
            $("#container_").hide();
            $("#button").text("Mostrar");
        }else{
            $("#container_").show();
            $("#button").text("Ocultar");
        }
    })
})
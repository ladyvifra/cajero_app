<template>
    <div id="User">
        <h2>Hola <span> {{username}}, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "user",
        data:function(){ //incializa comandos por defectos, es una fucnión
            return {
                username: "none"
            }
        },
        created: function(){
            this.username = this.$route.params.username //el usernamae toma el valor que nos pasan a través de la ruta
        }
    }
</script>

<style>
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #User h2{
        font-size: 50px;
        color: #283747;
    }
    #User span{
        color: crimson;
        font-weight: bold;
    }
</style>
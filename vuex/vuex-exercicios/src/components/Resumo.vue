<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
// mapGetters é um metodo do vuex para acessar p os getter do store
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters('carrinho', {
        // atribui o valor o getter a varial total
        total: 'valorTotal'
    })
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>

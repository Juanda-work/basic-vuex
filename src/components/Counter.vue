<template>
    <!-- Formas de obtener el estado de VUEX -->
    <h1> Counter - Vuex </h1>
    <h2> Direct access: {{ $store.state.counter.count }} </h2>
    <h2> Computed: {{ countComputed || 'nada por aquí' }} </h2>

    <button @click="increment"> +1 </button>
    <button @click="incrementBy"> +5 </button>
    <button @click="randomInt" :disabled="isLoading"> Random </button>

    <h1>Map state</h1>
    <h2> Computed prop 1: {{ count }} </h2>
    <h2> Computed prop 2: {{ leche }} </h2>

    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    methods:{
        increment(){
            // metodo basico de llamar a una mutation.
            this.$store.commit('counter/increment');
        },
        // metodo basico de llamar a una mutation.
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5);
        },
        // incrementRandomInt(){
        //     // metodo basico de llamar a una acción.
        //     this.$store.dispatch('incrementRandomInt')
        // },
        
        // metodo normal de llamar a una acción.
        // ...mapActions('counter', ['incrementRandomInt'])

        // metodo normal de llamar a una acción renombrando a una variable.
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt',
        })
    },
    computed:{
        countComputed(){
            return this.$store.state.counter.count
        },
        // forma de invocar un estado con el mapState.
        // ...mapState('counter', ['count', 'leche', 'isLoading'])
        
        // definiendo nuestra propia propiedad (count):
        ...mapState('counter', {
            count: state => state.count,
            leche : 'leche',
            isLoading : 'isLoading'
        })
    }
}
</script>

<style scoped>
</style>
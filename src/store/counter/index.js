import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {

    // obliga al componente que vaya a usar este store a que se tenga que poner 
    // por obligación el nombre del módulo.
    namespaced: true,

    // STATE: son las variables que me quiero definir y lo que voy a guardar
    // de forma general en la aplicación.
    state,

    // son como metodos, tienen que ser SINCRONOS.
    // son los que cambian el esatdo (state).
    mutations,

    // son como metodos que pueden ser ASINCRONOS.
    // modifican también el estado, pero lo hacen a través
    // de las mutations
    actions,

    // se parecen a las computed.
    // son para hacer cálculos 'al vuelo' sin modificar el state.
    getters
}

export default counterStore
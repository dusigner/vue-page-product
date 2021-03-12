<template>
    <div>
        <h1 class="display-6">{{titulo}}</h1>
        <MDBBadge color="success" v-if="destaque === '1'">Destaque</MDBBadge>
        <br/>
        <MDBBadge color="success" v-if="lancamento === '1'">Lançamento</MDBBadge>
        <br/>
        <p class="pt-5">
            <small>Modelo: {{modelo}}</small>
            <br/>
            <small>Referência: {{modelo}}</small>
        </p>
        <hr/>
        <p class="h6">Por</p>
        <p class="h1">R$ {{preco}}</p>
        <p class="h6">{{precoOpcoes}}</p>
        <Counter />
    </div>
</template>

<script>
import { MDBBadge } from "mdb-vue-ui-kit";
import Counter from './Counter'

export default {
    name: 'ProductInfo',
    components: { 
        MDBBadge,
        Counter
    },
    props: {
        titulo: {
            type: String,
        },
        descricao: {
            type: String
        },
        destaque: {
            type: String
        },
        lancamento: {
            type: String
        },
        modelo: {
            type: String
        },
        referencia: {
            type: String
        },
        preco: {
            type: String
        },
        precoOpcoes: {
            type: String
        }
    }
}
</script>


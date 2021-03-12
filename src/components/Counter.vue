<template>
    <div class="d-flex align-items-center pt-3">
        <button class="btn btn-primary" @click="inc">
            Add no Carrinho
        </button>
        <p>Adicionado: {{ count }}</p>
    </div>
</template>
<style scoped>
button {
    margin-right: 30px;
}
p {
    margin: 0;
}
</style>
<script>
import { ref } from 'vue'

export default {
    props: {
        by: {type : Number, default: 1}
    },
    setup(props) {
        const count = ref(0)
        const inc = () => (count.value += props.by)
        return { count, inc }
    }
}
</script>

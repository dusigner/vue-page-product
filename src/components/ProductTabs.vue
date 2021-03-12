<template>
    <MDBContainer>
        <MDBRow>
            <MDBCol md="12">
                <tabs
                    v-model="selectedTab"
                >
                    <tab
                    class="tab"
                    v-for="(tab, i) in tabs"
                    :key="`t${i}`"
                    :val="tab.label"
                    :label="tab.label"
                    :indicator="true"
                    />
                </tabs>
                <MDBCol md="12">
                <tab-panels
                    v-model="selectedTab"
                    :animate="true"
                >
                    <tab-panel
                    v-for="(tab, i) in tabs"
                    :key="`tp${i}`"
                    :val="tab.label"
                    >
                    <div v-if="i === 0" v-html="product.description"></div>
                    <div v-if="i === 1" v-html="product.payment_option_html"></div>
                    </tab-panel>
                    
                </tab-panels>
                </MDBCol>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, reactive, toRefs } from 'vue';
 import { MDBContainer, MDBRow, MDBCol} from 'mdb-vue-ui-kit';

const tabs = [{
  label: 'Descrição',
  value: 1,
}, {
  label: 'Formas de Pagamento',
  value: 2,
}];

 
export default defineComponent({
  name: 'ProductTabs',
  components: { 
        MDBContainer,
        MDBRow,
        MDBCol
    },
    setup() {

        const state = reactive({
            selectedTab: tabs[1]
        });
        return {
            tabs,
                ...toRefs(state)
        };

    },
    data() {
        return {
            product: [],
            errors: [],
        }
    },
    created() {
        axios.get(`https://themeshoes.commercesuite.com.br/web_api/products/14`)
        .then(response => {
        this.product = response.data.Product
        })
        .catch(e => {
        this.errors.push(e)
        })
    },
});
</script>
 
<style scoped>
.tab {
  padding: 10px 20px;
  cursor: pointer;
}
.tab-panel {
    padding: 40px 60px;
}
</style>
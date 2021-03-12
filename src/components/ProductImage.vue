<template>
    <splide :options="primaryOptions" :slides="product.ProductImage" ref="primary">
        <splide-slide class="img__product" v-for="slide in product.ProductImage" :key="slide.https">
            <img v-bind:src="slide.https"/>
        </splide-slide>
    </splide>
    <splide :options="secondaryOptions" :slides="product.ProductImage" ref="secondary">
        <splide-slide v-for="slide in product.ProductImage" :key="slide.https">
            <img v-bind:src="slide.thumbs[180].https"/>
        </splide-slide>
    </splide>
</template>
<style scoped>
.splide__track {
    border:1px solid #b3b3b3;
}
.splide--fade>.splide__track>.splide__list>.splide__slide{
    transform: translateX(50%) translateX(-100px);
}
div#splide02 {
    max-width: 320px;
    margin: 0 auto;
}
</style>
<script>
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default {
    name: 'ProductImage',
    components: { 
        Splide,
        SplideSlide
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
    data : () => ({
        product: [],
        errors: [],

        primaryOptions: {
            type       : 'fade',
            heightRatio: 1,
            perPage     : 1,
            fixedWidth  : 300,
            height      : 300,
            pagination  : false,
            arrows      : false,
            cover       : true,
            autoplay    : true,
        },

        secondaryOptions: {
            fixedWidth  : 80,
            height      : 80,
            gap         : 10,
            perPage     : 2,
            cover       : true,
            isNavigation: true,
            focus       : 'center',
        }
    }),

    mounted() {
		// Set the sync target.
        this.$refs.primary.sync( this.$refs.secondary.splide );
    },

    
    
  
}
</script>
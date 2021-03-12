<template>
  <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <MDBNavbar expand="lg" light bg="light" container>
          <nav
            aria-label="breadcrumb"
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
          >
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <a href="#">Página Inicial</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>
                <a href="#">{{ product.category_name }}</a>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </nav>
        </MDBNavbar>
        <ProductImage />
      </MDBCol>
      <MDBCol md="6">
        <ProductInfo
          :titulo="product.name"
          :descricao="product.description"
          :destaque="product.hot"
          :lancamento="product.release"
          :modelo="product.model"
          :referencia="product.ean"
          :preco="product.price"
          :precoOpcoes="product.payment_option"
        />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBNavbar
} from "mdb-vue-ui-kit";
import axios from "axios";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";

export default {
  name: "App",
  components: {
    MDBNavbar,
    MDBContainer,
    MDBRow,
    MDBCol,
    ProductImage,
    ProductInfo,
    MDBBreadcrumb,
    MDBBreadcrumbItem
  },

  data() {
    return {
      product: [],
      errors: []
    };
  },

  created() {
    axios
      .get(`https://themeshoes.commercesuite.com.br/web_api/products/14`)
      .then(response => {
        this.product = response.data.Product;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

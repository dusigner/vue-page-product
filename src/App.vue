<template>
  <TopBar />
  <Header />
  <Menu />
  <Product />
  <ProductTabs />
  <Footer />
</template>

<script>
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Product from "@/components/Product";
import ProductTabs from "@/components/ProductTabs";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    TopBar,
    Header,
    Menu,
    Product,
    ProductTabs,
    Footer
  }
};
</script>

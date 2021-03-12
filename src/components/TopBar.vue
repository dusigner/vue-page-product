<template>
  <header class="d-flex align-items-center">
        <MDBContainer dark bg="dark">
            <MDBRow>
                <MDBCol sm="5" md="6">SEJA BEM-VINDO, <a href="#">LOGIN</a> OU <a href="#">CADASTRE-SE</a></MDBCol>
                <MDBCol sm="5" md="6" class="text-end">
                    <nav>
                        <a href="">PEDIDOS</a>
                        |
                        <a href="">ACESSE SUA CONTA</a>
                    </nav>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
  </header>
</template>
<style scoped>
header {
    background: #3d4445;
    color: #888;
    padding: 15px 0;
    font-size: 11px;
}
a {
    color: #888;
    text-decoration: none;
    font-weight: bold;
}
a:hover {
    text-decoration: underline;
}
</style>
<script>
  import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBContainer, 
      MDBRow, 
      MDBCol
    },
  };
</script>
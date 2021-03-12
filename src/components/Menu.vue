<template>
    <nav>
        <MDBContainer>
            <MDBNavbar dark bg="dark" expand="lg" container>
                <MDBNavbarToggler target="navbarNav"></MDBNavbarToggler>
                <MDBNavbarNav collapse="navbarNav">
                <MDBNavbarItem to="#" active> Homens </MDBNavbarItem>
                <MDBNavbarItem to="#"> Mulheres </MDBNavbarItem>
                <MDBNavbarItem to="#"> Calcados </MDBNavbarItem>
                <MDBNavbarItem to="#"> Esportes </MDBNavbarItem>
                <MDBNavbarItem to="#"> Tenis </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBNavbar>
        </MDBContainer>
    </nav>
</template>
<style scoped>
nav {
    margin: 33px 0;
}
</style>
<script>
  import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
  } from 'mdb-vue-ui-kit';

  export default {
    components: {
    MDBContainer,
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarItem,
    },
  };
</script>
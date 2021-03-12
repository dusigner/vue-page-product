<template>
  <header class="d-flex align-items-center">
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="5" md="3">
          <a href="/" class="site-logo" data-tray-tst="logotipo_loja">
            <img
              src="https://images.tcdn.com.br/img/img_prod/465211/1591624508_yart.png"
              alt="themeshoes"
            />
          </a>
        </MDBCol>
        <MDBCol
          sm="5"
          md="6"
          class="offset-sm-2 offset-md-0 d-flex align-items-center"
        >
          <form class="d-flex input-group w-100">
            <input
              type="search"
              class="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn outline="primary">
              Search
            </MDBBtn>
          </form>
        </MDBCol>
        <MDBCol
          sm="5"
          md="3"
          class="offset-sm-2 offset-md-0 d-flex align-items-center"
        >
          <MDBNavbarNav
            class="d-flex flex-row align-items-center justify-content-evenly w-100"
          >
            <MDBNavbarItem to="#" class="me-3 me-lg-0">
              <MDBIcon icon="shopping-cart"></MDBIcon>
            </MDBNavbarItem>
            <MDBNavbarItem href="#" class="me-3 me-lg-0">
              <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
            </MDBNavbarItem>
            <MDBNavbarItem class="me-3 me-lg-0 dropdown">
              <MDBDropdown v-model="dropdown3">
                <MDBDropdownToggle
                  tag="a"
                  class="nav-link"
                  @click="dropdown3 = !dropdown3"
                >
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </header>
</template>
<style scoped>
header {
  padding: 15px 0;
}
</style>
<script>
import { ref } from "vue";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBDropdown,
  MDBDropdownMenu
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBContainer,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBNavbarNav,
    MDBIcon,
    MDBDropdown,
    MDBDropdownMenu
  },
  setup() {
    const dropdown3 = ref(false);

    return {
      dropdown3
    };
  }
};
</script>

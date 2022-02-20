<template>
  <div class="font17">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </router-link>

        <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <Search></Search>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon has-text-link" :title="facebookTooltip">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="icon has-text-danger" :title="instagramTooltip">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" class="icon has-text-info" :title="twitterTooltip">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon has-text-success">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <Menu></Menu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <Menu></Menu>
      </div>
    </nav>
  </div>
</template>

<script>
  import Menu from '../Menu/Menu';
  import Search from '../Search/Search';

  export default {
    name: 'Header',

    data () {
      return {
        facebookTooltip: 'ما رو در فیسبوک دنبال کنید',
        twitterTooltip: 'ما رو در توییتر دنبال کنید',
        instagramTooltip: 'ما رو در اینستاگرام دنبال کنید',
        isCheckoutActive: false,
        isMenuOpen: false
      }
    },

    components: {
     Search,
      Menu
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCheckoutModal () {
        this.$store.commit('showCheckoutModal', true);
      }
    }
  };
</script>

<style scoped>
  body {
    font-size: 18px;
    font-family: Vazir;
  }
  .title {
    background-position: 50% 50%;
    background-size: 165px;
    width: 175px;
    height: 35px;
  }
  .shopping-cart {
    cursor: pointer;
  }
  a {
    color: grey;
  }
</style>

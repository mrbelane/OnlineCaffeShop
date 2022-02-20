<template>
    <div class="font17">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="../assets/coffee_coffee_machine_ice_180729_1280x960.jpg" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content has-text-centered mt-2">
                    <p class="title is-4">{{ product.title }}</p>
                </div>
                <div>
                    <button class="button is-small mt-1 is-danger is-outlined" :title="removeFromFavouriteLabel" v-show="product.isFavourite"
                            @click="removeFromFavourite(product.id)">
            <span class="icon is-small">
              <i class="fa fa-heart"></i>
            </span>
                    </button>
                    <button class="button is-small mt-1" :title="addToFavouriteLabel" v-show="!product.isFavourite"
                            @click="saveToFavorite(product.id)">
            <span class="icon is-small">
              <i class="fa fa-heart-o"></i>
            </span>
                    </button>
                </div>
            </div>
            <div class="content is-clearfix">
                <p class="has-text-centered">{{ product.description }}</p>
                <div class="is-pulled-left star">
                    <i v-if="product.ratings === 1" class="fa fa-star"></i>
                    <i v-if="product.ratings === 2" class="fa fa-star"></i>
                    <i v-if="product.ratings === 2" class="fa fa-star"></i>
                    <i v-if="product.ratings === 3" class="fa fa-star"></i>
                    <i v-if="product.ratings === 3" class="fa fa-star"></i>
                    <i v-if="product.ratings === 3" class="fa fa-star"></i>
                    <i v-if="product.ratings === 4" class="fa fa-star"></i>
                    <i v-if="product.ratings === 4" class="fa fa-star"></i>
                    <i v-if="product.ratings === 4" class="fa fa-star"></i>
                    <i v-if="product.ratings === 4" class="fa fa-star"></i>
                    <i v-if="product.ratings === 5" class="fa fa-star"></i>
                    <i v-if="product.ratings === 5" class="fa fa-star"></i>
                    <i v-if="product.ratings === 5" class="fa fa-star"></i>
                    <i v-if="product.ratings === 5" class="fa fa-star"></i>
                    <i v-if="product.ratings === 5" class="fa fa-star"></i>
                    <p>{{ product.reviews > 0 ? `${product.reviews} بازدید` : 'بدون بازدید' }}</p>
                </div>
                <p class="is-pulled-right">
                    <span class="title is-4"><strong>{{ product.price }} تومان</strong></span>
                </p>
            </div>
            <div class="card-footer btn-actions">
                <div class="card-footer-item field is-grouped">
                    <div class="buttons">
                        <button class="button is-success font17" v-if="!product.isAddedToCart"
                                @click="addToCart(product.id)">
                            {{ addToCartLabel }}
                        </button>
                        <button class="button is-text font17 is-danger is-outlined" style="text-decoration: none" v-if="product.isAddedToCart"
                                @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}
                        </button>
                    </div>
                    <!--  <div class="select is-rounded is-small">
                          <select @change="onSelectQuantity(product.id)" v-model="selected">
  &lt;!&ndash;                            <option v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>&ndash;&gt;
                          </select>
                      </div>-->
                </div>
            </div>
        </div>
        <router-link
                class="details"
                :to="{
        name: 'product_detail-id',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
        >
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'products',
        props: ['product'],

        data() {
            return {
                addToCartLabel: 'افزودن در سبد خرید',
                viewDetailsLabel: 'جزییات',
                removeFromCartLabel: 'حذف از سبد خرید',
                addToFavouriteLabel: 'افزودن به علاقه مندی‌ها',
                removeFromFavouriteLabel: 'حذف از لیست علاقه مندی‌ها',
                selected: 1,
                quantityArray: []
            }
        },

        mounted() {
            for (let i = 1; i <= 20; i++) {
                this.quantityArray.push(i);
            }

            if (this.$props.product.quantity > 1) {
                this.selected = this.$props.product.quantity;
            }
        },

        computed: {
            isUserLogged() {
                return this.$store.getters.isUserLoggedIn;
            }
        },

        methods: {
            addToCart(id) {
                let data = {
                    id: id,
                    status: true
                }
                this.$store.commit('addToCart', id);
                this.$store.commit('setAddedBtn', data);
            },
            removeFromCart(id) {
                let data = {
                    id: id,
                    status: false
                }
                this.$store.commit('removeFromCart', id);
                this.$store.commit('setAddedBtn', data);
            },
            saveToFavorite(id) {
                let isUserLogged = this.$store.state.userInfo.isLoggedIn;

                if (isUserLogged) {
                    this.$store.commit('addToFavourite', id);
                } else {
                    this.$store.commit('showLoginModal', true);
                }
            },
            removeFromFavourite(id) {
                this.$store.commit('removeFromFavourite', id);
            },
            onSelectQuantity(id) {
                let data = {
                    id: id,
                    quantity: this.selected
                }
                this.$store.commit('quantity', data);
            }
        }
    }
</script>

<style scoped>
    .star i {
        color: #ffb837;
    }
    .card {
        margin:12px
    }

    .details {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .details:hover {
        transition: 0.3s;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    }

    .button,
    .select {
        z-index: 2;
    }

    .select {
        /*position: absolute;*/
        /*right: 15px;*/
        /*bottom: 35px;*/
    }

    .card-content {
        padding: 0;
    }

    .buttons {
        margin: 10px auto 0 auto;
    }
</style>



<template>
    <div class="section font17">
        <div class="card is-clearfix columns">
            <figure class="card-image is-480x480 column is-one-thirds hover07">
                <img src="../../../assets/coffee_coffee_machine_ice_180729_1280x960.jpg">
            </figure>
            <div class="card-content column  is-two-thirds" style="direction: rtl">
                <div class="card-content__title">
                    <h2 class="title is-4">{{ product.title }}
                        <button class="button is-small" :title="removeFromFavouriteLabel" v-show="product.isFavourite"
                                @click="removeFromFavourite(product.id)">
                <span class="icon is-small">
                  <i class="fa fa-heart"></i>
                </span>
                        </button>
                        <button class="button is-small" :title="addToFavouriteLabel" v-show="!product.isFavourite"
                                @click="saveToFavorite(product.id)">
                <span class="icon is-small">
                  <i class="fa fa-heart-o"></i>
                </span>
                        </button>
                    </h2>
                </div>
                <div class="card-content__text ">
                    <p>
                      توضیحات:
                    </p>
                </div>
                <div class="card-content__ratings" v-if="product.rating === 1">
                    <i class="fa fa-star"></i>
                </div>
                <div class="card-content__ratings" v-else-if="product.rating === 2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="card-content__ratings" v-else-if="product.rating === 3">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="card-content__ratings" v-else-if="product.rating === 4">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="card-content__ratings" v-else-if="product.rating === 5">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="card-content__reviews">
                    <div class="is-pulled-left">
                        <p><strong>{{ product.reviews > 0 ? `${product.reviews} بازدید` : 'بدون بازدید' }}</strong></p>
                    </div>
                    <!-- <div class="select is-rounded is-small is-pulled-right">
                       <select @change="onSelectQuantity(product.id)" v-model="selected">
                         <option v-for="(quantity, id)  in quantityArray" :key="id" :value="quantity">{{ quantity }}</option>
                       </select>
                     </div>-->
                </div>
                <div class="card-content__price is-pulled-left">
                    <span class="title is-3"><strong>{{ product.price }} تومان</strong></span>
                </div>
                <div class="card-content__btn is-pulled-right">
                    <button class="button is-primary font17 addBtn" v-if="!isAddedBtn" @click="addToCart(product.id)">{{
                        addToCartLabel }}
                    </button>
                    <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(product.id)">{{
                        removeFromCartLabel }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product_detail-id',

        validate({params}) {
            return /^\d+$/.test(params.id)
        },

        data() {
            return {
                addToCartLabel: 'افزودن در سبد خرید',
                removeFromCartLabel: 'حذف از سبد خرید',
                addToFavouriteLabel: 'افزودن به علاقه مندی‌ها',
                removeFromFavouriteLabel: 'حذف از لیست علاقه مندی‌ها',
                product: {},
                selected: 1,
                quantityArray: []
            };
        },

        mounted() {
            this.product = this.$store.getters.getProductById(this.$route.params.id);
            this.selected = this.product.quantity;

            for (let i = 1; i <= 20; i++) {
                this.quantityArray.push(i);
            }
        },

        computed: {
            isAddedBtn() {
                return this.product.isAddedBtn;
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
            onSelectQuantity(id) {
                let data = {
                    id: id,
                    quantity: this.selected
                }
                this.$store.commit('quantity', data);
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
            }
        }
    };
</script>

<style lang="scss" scoped>
    .card {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
    .card-content {
        padding: 15px 10px 15px 0;

        &__text {
            margin: 15px 0;
        }

        &__reviews {
            display: inline-block;
            width: 100%;
            margin-bottom: 10px;
        }
    }

    .hover07 img {
      cursor: pointer;
      -webkit-filter: blur(3px);
      filter: blur(3px);
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
    }
    .hover07:hover img {
      cursor: pointer;
      -webkit-filter: blur(0);
      filter: blur(0);
    }
</style>


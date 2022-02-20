<template>
    <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
        <div class="modal-background"></div>
        <div class="modal-card font17">
            <header class="modal-card-head">
                <p class="modal-card-title font18">{{ modalTitle }}</p>
                <button class="delete" aria-label="close" @click="closeModal(false)"></button>
            </header>
            <section class="modal-card-body">
                <div v-if="!isCheckoutSection">
                    <div class="box" v-for="product in products" :key="product.id">
                        <button class="is-pulled-right button is-info is-inverted font17" @click="removeFromCart(product.id)">
                            {{ removeLabel }}
                        </button>
                        <p class="font17">{{ product.title }} {{ product.quantity > 0 ? ` - مقدار: ${product.quantity}` : ''}}</p>
                        <p>{{ product.price }} تومان</p>
                    </div>
                    <div v-if="products.length === 0">
                        <p class="font17">{{ cartEmptyLabel }}</p>
                    </div>
                </div>
                <div v-if="isCheckoutSection">
                    <p > :-) خرید شما با موفقیت انجام شد </p>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button v-show=" products && products.length > 0 && !isCheckoutSection" class="button is-success buy"
                        @click="onNextBtn">
                    {{ buyLabel }}
                </button>
                <button v-if="isCheckoutSection" class="button is-success font17" @click="closeModal(true)">{{ closeLabel }}
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'checkout',

        data() {
            return {
                modalTitle: 'بررسی',
                removeLabel: 'حذف از سبد خرید',
                cartEmptyLabel: 'سبد خرید شما خالی است',
                closeLabel: 'بستن',
                isCheckoutSection: false
            }
        },

        computed: {
            products() {
                return this.$store.getters.productsAdded;
            },
            openModal() {
                if (this.$store.getters.isCheckoutModalOpen) {
                    return true;
                } else {
                    return false;
                }
            },
            buyLabel() {
                console.log('------------->' + this.products.length);
                let totalProducts = this.products.length,
                    productsAdded = this.$store.getters.productsAdded,
                    pricesArray = [],
                    productLabel = '',
                    finalPrice = '',
                    quantity = 1;

                productsAdded.forEach(product => {

                    if (product.quantity >= 1) {
                        quantity = product.quantity;
                    }

                    pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
                });

                finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices

                if (totalProducts > 1) { // set plural or singular
                    productLabel = 'products';
                } else {
                    productLabel = 'product';
                }
                return `خرید ${totalProducts} ${productLabel} به ${finalPrice}تومان`;
            },
            isUserLoggedIn() {
                return this.$store.getters.isUserLoggedIn;
            }
        },

        methods: {
            closeModal(reloadPage) {
                this.$store.commit('showCheckoutModal', false);

                if (reloadPage) {
                    window.location.reload();
                }
            },
            removeFromCart(id) {
                let data = {
                    id: id,
                    status: false
                }
                this.$store.commit('removeFromCart', id);
                this.$store.commit('setAddedBtn', data);
            },
            onNextBtn() {
                if (this.isUserLoggedIn) {
                    this.isCheckoutSection = true;
                } else {
                    this.$store.commit('showCheckoutModal', false);
                    this.$store.commit('showLoginModal', true);
                }
            },
            onPrevBtn() {
                this.isCheckoutSection = false;
            }
        }
    }
</script>


<style>
    .is-pulled-right, .buy{
        direction: rtl;
    }
</style>


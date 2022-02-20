import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 1,
                title: 'کوپی لاک',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 100000,
                ratings: 5,
                reviews: 2700,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 2,
                title: 'اسپرسو',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 35,
                ratings: 5,
                reviews: 10,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 3,
                title: 'اسپرسو 3',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 110,
                ratings: 2,
                reviews: 3,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 4,
                title: 'اسپرسو 4',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 50,
                ratings: 1,
                reviews: 0,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 5,
                title: 'اسپرسو 5',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 35,
                ratings: 4,
                reviews: 2,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 6,
                title: 'اسپرسو 6',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 110,
                ratings: 5,
                reviews: 1,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 7,
                title: 'اسپرسو 7',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 50,
                ratings: 5,
                reviews: 7,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 8,
                title: 'اسپرسو 8',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 35,
                ratings: 3,
                reviews: 0,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            },
            {
                id: 9,
                title: 'اسپرسو 9',
                description: 'مشهد - احمدآباد - کافی شاپ شطرنج',
                price: 110,
                ratings: 4,
                reviews: 2,
                isAddedToCart: false,
                isAddedBtn: false,
                isFavourite: false,
                quantity: 1
            }
        ],
        userInfo: {
            isLoggedIn: false,
            isSignedUp: false,
            hasSearched: false,
            name: '',
            productTitleSearched: ''
        },
        systemInfo: {
            openLoginModal: false,
            openSignupModal: false,
            openCheckoutModal: false
        }
    },
    getters: {
        productsAdded: state => {
            return state.products.filter(el => {
                return el.isAddedToCart;
            });
        },
        productsAddedToFavourite: state => {
            return state.products.filter(el => {
                return el.isFavourite;
            });
        },
        getProductById: state => id => {
            return state.products.find(product => product.id == id);
        },
        isUserLoggedIn: state => {
            return state.userInfo.isLoggedIn;
        },
        isUserSignedUp: state => {
            return state.userInfo.isSignedUp;
        },
        getUserName: state => {
            return state.userInfo.name;
        },
        isLoginModalOpen: state => {
            return state.systemInfo.openLoginModal;
        },
        isSignupModalOpen: state => {
            return state.systemInfo.openSignupModal;
        },
        isCheckoutModalOpen: state => {
            return state.systemInfo.openCheckoutModal;
        },
        quantity: state => {
            return state.products.quantity;
        }
    },
    mutations: {
        addToCart: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isAddedToCart = true;
                }
            });
        },
        setAddedBtn: (state, data) => {
            state.products.forEach(el => {
                if (data.id === el.id) {
                    el.isAddedBtn = data.status;
                }
            });
        },
        removeFromCart: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isAddedToCart = false;
                }
            });
        },
        removeProductsFromFavourite: state => {
            state.products.filter(el => {
                el.isFavourite = false;
            });
        },
        isUserLoggedIn: (state, isUserLoggedIn) => {
            state.userInfo.isLoggedIn = isUserLoggedIn;
        },
        isUserSignedUp: (state, isSignedUp) => {
            state.userInfo.isSignedUp = isSignedUp;
        },
        setHasUserSearched: (state, hasSearched) => {
            state.userInfo.hasSearched = hasSearched;
        },
        setUserName: (state, name) => {
            state.userInfo.name = name;
        },
        setProductTitleSearched: (state, titleSearched) => {
            state.userInfo.productTitleSearched = titleSearched;
        },
        showLoginModal: (state, show) => {
            state.systemInfo.openLoginModal = show;
        },
        showSignupModal: (state, show) => {
            state.systemInfo.openSignupModal = show;
        },
        showCheckoutModal: (state, show) => {
            state.systemInfo.openCheckoutModal = show;
        },
        addToFavourite: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isFavourite = true;
                }
            });
        },
        removeFromFavourite: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isFavourite = false;
                }
            });
        },
        quantity: (state, data) => {
            state.products.forEach(el => {
                if (data.id === el.id) {
                    el.quantity = data.quantity;
                }
            });
        },
        SET_USER(state, authUser) {
            state.authUser = authUser
        }
    }
})
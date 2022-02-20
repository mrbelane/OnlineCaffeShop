<template>
    <b-carousel-list v-model="test" :data="items" :items-to-show="4"
                     class="mt-1 is-bordered mb-2 has-background-white-ter">
        <template slot="item" slot-scope="list">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-outlined">
                        <a @click="info(list.index)"><img
                                src="../../assets/img/michal-parzuchowski-ItaV89TNkks-unsplash.jpg"></a>
                    </figure>
                    <b-tag type="is-danger" style="position: absolute; top: 0; right: 0"><b>30%</b></b-tag>
                </div>
                <div class="card-content font17">
                    <div class="content">
                        <p class="title is-4 has-text-centered" style="margin-top: -12px">{{ list.title }}</p>
                        <p class="subtitle is-7 level-right font17">کافی شاپ</p>
                        <div class="field is-grouped">
                            <p class="control" v-if="list.rating">
                                <b-rate :value="list.rating" show-score disabled />
                            </p>
                            <p class="control like" style="margin-left: auto">
                                <button class="button is-small is-danger is-outlined">
                                    <b-icon size="is-small" icon="heart"/>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </b-carousel-list>
</template>

<script>
    export default {

        data() {
            return {
                test: 0,
                items: [
                    {
                        title: 'کافی شاپ ',
                        image: '../../assets/img/michal-parzuchowski-ItaV89TNkks-unsplash.jpg',
                        rating: 4.4
                    },
                    {
                        title: 'کافی شاپ 2',
                        image: '../../assets/img/joshua-rodriguez-f7zm5TDOi4g-unsplash.jpg',
                        rating: 3.5
                    },
                    {
                        title: 'کافی شاپ 3',
                        image: '../../assets/img/kris-atomic-3b2tADGAWnU-unsplash.jpg',
                        rating: 5
                    },
                    {
                        title: 'کافی شاپ 4',
                        image: '../../assets/img/lex-sirikiat-QNhVabDaF6M-unsplash.jpg'
                    },
                    {
                        title: 'کافی شاپ 5',
                        image: '../../assets/img/michal-parzuchowski-ItaV89TNkks-unsplash.jpg',
                        rating: 5
                    },
                    {
                        title: 'کافی شاپ 6',
                        image: '../../assets/img/nathan-dumlao-6VhPY27jdps-unsplash.jpg',
                        rating: 4
                    },
                    {
                        title: 'کافی شاپ 7',
                        image: '../../assets/img/ozgu-ozden-7X96RNhpxBc-unsplash.jpg',
                        rating: 2.7
                    },
                    {
                        title: 'کافی شاپ 8',
                        image: '../../assets/img/priscilla-du-preez-jxc2V0ayIfk-unsplash.jpg',
                        rating: 1.5
                    }
                ],
            }
        },
        methods: {
            info(value) {
                this.test = value
            }

        }
    }
</script>

<style>
    body {
        font-size: 18px;
        font-family: Vazir;
    }

</style>
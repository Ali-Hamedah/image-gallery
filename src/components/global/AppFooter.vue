<template>
    <div class="app-footer" style="margin-bottom: -33px;">
        <v-footer color="#f5f5f5">
            <div style="width: 100vw;margin-left: calc(-50vw + 50%);">
                <v-container fluid style="width: 100vw;margin-left: calc(-48vw + 50%)">
                    <div class="subscribe-container pt-2 pb-2">
                        <div class="subscribe-title">
                            <span
                                style="color: #191919; font-size: 24px; font-weight: 900; font-family: 'Rubik', sans-serif;">Subscribe
                                to our newsletter</span>
                            <br>
                            <span
                                style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Get
                                the latest information about new products and upcoming sales</span>
                        </div>
                    </div>
                    <v-container>
                        <v-row class="d-flex align-center">
                            <v-col cols="12" md="8" lg="8" sm="8" xs="12" class="d-flex justify-end">
                                <input placeholder="Enter your email" class="subscribe-input"
                                    style="background-color: #fff; border-radius: 25px; border: 1px solid #e0e0e0; padding: 10px; width: 500px;padding: 12px 15px;"></input>
                            </v-col>
                            <v-col cols="12" md="4" lg="4" sm="4" xs="12" class="d-flex justify-start">
                                <v-btn color="#161880" rounded large
                                    style="width: 200px;height: 50px; ">Subscribe</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-row class="text-left pt-8">
                        <v-row class="d-none d-sm-flex">
                            <v-col cols="12" md="3" lg="3">
                                <v-card flat>
                                    <v-card-title>SHOP</v-card-title>
                                    <v-title v-for="category in Categories" :key="category.title">
                                        <v-card-text>
                                            <router-link style="color: #505050;"
                                                :to="{ name: 'ProductsCategory', params: { category: category.title } }">
                                                <v-list-item-title>{{ category.title }}</v-list-item-title>
                                            </router-link>
                                        </v-card-text>
                                    </v-title>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                                <v-card flat>
                                    <v-card-title>FURTHER INFO</v-card-title>
                                    <v-card-text>GENERAL TERMS AND CONDITIONS (GTC)</v-card-text>
                                    <v-card-text>Refund and Return Policy</v-card-text>
                                    <v-card-text>Delivery Guidelines</v-card-text>
                                    <v-card-text>Payment term</v-card-text>
                                    <v-card-text>Privacy policy</v-card-text>
                                </v-card>
                            </v-col>

                            <v-col cols="12" md="3" lg="3">
                                <v-card flat>
                                    <v-card-title>COSTOMER SERVICE</v-card-title>
                                    <v-card-text>GENERAL TERMS AND CONDITIONS (GTC)</v-card-text>
                                    <v-card-text>Refund and Return Policy</v-card-text>
                                    <v-card-text>Delivery Guidelines</v-card-text>
                                    <v-card-text>Payment term</v-card-text>
                                    <v-card-text>Privacy policy</v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="3" lg="3">
                            <v-card flat>
                                <v-card-title>
                                    <img src="@/assets/images/footer-logo.webp" alt="logo">
                                </v-card-title>
                                <v-card-text>
                                    Ellamart+ represented by SO INVEST SAS and under:
                                </v-card-text>
                                <v-card-text>
                                    SIREN number: 831548706
                                </v-card-text>
                                <v-card-text>
                                    SIRET number: 83154870600025
                                </v-card-text>
                                <v-card-text>
                                    VAT number: FR33831548706
                                </v-card-text>
                                <v-card-text>
                                    33 Allée de la Râperie, 59493, Villeneuve d'Ascq - France
                                </v-card-text>
                                <v-card-text>
                                    Call us +43 68181863821
                                </v-card-text>
                                <v-card-text class="text-center">
                                    aliali735522@gmail.com
                                </v-card-text>
                            </v-card>
                        </v-col>
                        </v-row>

                        <!-- القوائم القابلة للفتح على الهواتف -->
                        <v-expansion-panels class="d-sm-none">
                            <v-expansion-panel>
                                <v-expansion-panel-title expand-icon="mdi-plus"
                                    style="color: #191919; font-size: 16px; font-weight: 900; font-family: 'Rubik', sans-serif;">SHOP</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-list dense>
                                        <v-list-item class="list-item" v-for="category in Categories" :key="category.title"
                                :to="{name:'ProductsCategory', params:{category:category.title}}" link v-ripple>
                                <v-router-link :to="{name:'ProductsCategory', params:{category:category.title}}">
                                    <v-list-item-title>{{ category.title }} </v-list-item-title>
                                </v-router-link>
                                <div class="underline"></div>
                            </v-list-item>
                                    </v-list>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-title expand-icon="mdi-plus"
                                    style="color: #191919; font-size: 16px; font-weight: 900; font-family: 'Rubik', sans-serif;">FURTHER
                                    INFO</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-list dense>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">GENERAL
                                            TERMS AND CONDITIONS (GTC)</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Refund
                                            and Return Policy</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Delivery
                                            Guidelines</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Payment
                                            term</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Privacy
                                            policy</v-list-item>
                                    </v-list>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-title expand-icon="mdi-plus"
                                    style="color: #191919; font-size: 16px; font-weight: 900; font-family: 'Rubik', sans-serif;">COSTOMER
                                    SERVICE</v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-list dense>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">GENERAL
                                            TERMS AND CONDITIONS (GTC)</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Refund
                                            and Return Policy</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Delivery
                                            Guidelines</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Payment
                                            term</v-list-item>
                                        <v-list-item
                                            style="color: #505050; font-size: 16px; font-weight: 500; font-family: 'DMSans', sans-serif;">Privacy
                                            policy</v-list-item>
                                    </v-list>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-col cols="12" md="12" lg="12">
                            <v-card flat>
                                <v-card-title>
                                    <img src="@/assets/images/footer-logo.webp" alt="logo">
                                </v-card-title>
                                <v-card-text>
                                    Ellamart+ represented by SO INVEST SAS and under:
                                </v-card-text>
                                <v-card-text>
                                    SIREN number: 831548706
                                </v-card-text>
                                <v-card-text>
                                    SIRET number: 83154870600025
                                </v-card-text>
                                <v-card-text>
                                    VAT number: FR33831548706
                                </v-card-text>
                                <v-card-text>
                                    33 Allée de la Râperie, 59493, Villeneuve d'Ascq - France
                                </v-card-text>
                                <v-card-text>
                                    Call us +43 68181863821
                                </v-card-text>
                                <v-card-text class="text-center">
                                    aliali735522@gmail.com
                                </v-card-text>
                            </v-card>
                        </v-col>
                        </v-expansion-panels>
                       
                    </v-row>
                    <div
                        style="width: 100vw;margin-left: calc(-51vw + 50%); background-color: white;margin-bottom: -25px;">
                        <v-container fluid>
                            <v-row justify="center" align="center" style="height: 80px;">
                                <v-col cols="12" class="text-center pb-8">
                                    <span>
                                        <strong style="color: #505050;">© {{ new Date().getFullYear() }}
                                            AliSoft</strong>
                                    </span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>


                </v-container>
            </div>
        </v-footer>
    </div>
</template>

<script>
import { ProductsModule } from '@/stores/products';
import { mapState } from 'pinia';

export default {
    inject: ['Emitter'],
    data() {
        return {

        };
    },
    computed: {
        ...mapState(ProductsModule, ['Categories']),
    },

    methods: {
        openCart() {
            this.Emitter.emit('openCart')
        },
    },
}
</script>

<style scoped lang="scss">
.v-card {
    background-color: transparent;
}

.v-card-title {
    font-size: 18px;
    font-weight: 900;
    font-family: 'Rubik', sans-serif;
}

.v-card-text {
    padding: 0px 10px 10px 10px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'DMSans', sans-serif;
    color: #505050;
}
</style>

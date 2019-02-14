<template>
    <div>
            <v-container grid-list-xl>
                <v-layout align-center justify-space-around column wrap>

                    <v-flex >
                        <h5 class="md-display-1">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;BCT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h5>
                        <v-divider color="blue" ></v-divider>
                    </v-flex>

                    <div>

                        <br/>

                        <v-tabs v-model="tabs" fixed-tabs icons-and-text color="transparent">

                            <v-tabs-slider></v-tabs-slider>

                            <v-tab href="#mobile-tabs-5-1">
                                <p class="black--text">Awaiting BCT</p>
                                <v-icon>hourglass_empty</v-icon>
                            </v-tab>

                            <v-tab href="#mobile-tabs-5-2" >
                                <p class="black--text">Completed BCT</p>

                                <v-icon>assignment_turned_in</v-icon>
                            </v-tab>

                            <v-tab href="#mobile-tabs-5-3">
                                <p class="black--text">BCT</p>
                                <v-icon>settings_applications</v-icon>
                            </v-tab>

                        </v-tabs>
                        <br/>
                    </div>

                    <div>
                        <v-tabs-items v-model="tabs" class="white elevation-1">
                            <v-tab-item v-for="i in 3" :id="'mobile-tabs-5-' + i" :key="i">
                                <v-card>
                                    <v-card-text>{{ text }}</v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </div>

                </v-layout>

            </v-container>


    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
}
</script>

<style>
a:hover, a:focus {
    color: #42A5F5 !important;
    text-decoration: none !important;
}
.md-theme-default a:not(.md-button) {
    color: #F5F5F5;
    color: var(--md-theme-default-primary-on-background, #F5F5F5);
}

</style>

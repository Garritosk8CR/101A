<template>
    <v-container fluid fill-height>
        <v-dialog v-model="dialogEdit" width="800px">
            <v-card>
                <v-card-title class="grey lighten-4 py-4 title">
                    Edit Player
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-for="(value, key) in player" v-if="key !== 'id'" :key="key"  v-model="player[key]" :rules="rules[key]" :label="key" :value="value" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="closeDialog">Cancel</v-btn>
                    <v-btn :disabled="!valid" @click="edit">
                            Edit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    props: ['player'],
    data() {
        return {
            dialogEdit: true,
            valid: true,
            name: '',
            rules: {
                name: [
                    v => !!v || 'Name is required'
                ],
                gamertag: [
                    v => !!v || 'Gamertag is required'
                ],
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                platform: [
                    v => !!v || 'platform is required'
                ],
                rank: [
                    v => !!v || 'Rank is required'
                ],
                division: [
                    v => !!v || 'Division is required'
                ],
                timezone: [
                    v => !!v || 'Time zone is required'
                ]
            },

            gamertag: '',

            email: '',

            games: [],
            gamesRules: [],
            platform: '',

            rank: '',

            division: '',

            timezone: '',

        }
    },
    methods: {
        closeDialog() {

            this.$emit('closeDialogEdit', false)
        },
        edit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('updatePlayer', this.player)
                this.closeDialog()
            }

        }
    },
    watch: {
        dialogEdit() {
            if(this.dialogEdit == false) {
                this.closeDialog();
            }
        }
    }
}
</script>

<style scoped>

</style>

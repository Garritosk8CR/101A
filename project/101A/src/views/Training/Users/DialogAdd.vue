<template>
    <v-container fluid fill-height>
        <v-dialog v-model="dialogAdd" width="800px">
            <v-card>
                <v-card-title class="grey lighten-4 py-4 title">
                    Create contact
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field v-model="name" :rules="this['nameRules']" label="Name" required></v-text-field>
                        <v-text-field v-model="email" :rules="this['emailRules']" label="E-mail" required></v-text-field>
                        <v-text-field v-model="gamertag" :rules="gamertagRules" label="Gamer tag" required></v-text-field>
                        <v-text-field v-model="rank" :rules="rankRules" label="Rank" required></v-text-field>
                        <v-text-field v-model="division" :rules="divisionRules" label="Division" required></v-text-field>
                        <v-text-field v-model="platform" :rules="platformRules" label="Platform" required></v-text-field>
                        <v-text-field v-model="timezone" :rules="timezoneRules" label="Time zone" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="closeDialog">Cancel</v-btn>
                    <v-btn :disabled="!valid" @click="add">
                            Add
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialogAdd: true,
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required'
            ],
            gamertag: '',
            gamertagRules: [
                v => !!v || 'Gamertag is required'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            games: [],
            gamesRules: [],
            platform: '',
            platformRules: [
                v => !!v || 'platform is required'
            ],
            rank: '',
            rankRules: [
                v => !!v || 'Rank is required'
            ],
            division: '',
            divisionRules: [
                v => !!v || 'Division is required'
            ],
            timezone: '',
            timezoneRules: [
                v => !!v || 'Time zone is required'
            ]
        }
    },
    methods: {
        closeDialog() {

            this.$emit('closeDialogAdd', false)
        },
        add() {
            if (this.$refs.form.validate()) {
                const formData = {
                    name: this.name,
                    gamertag: this.gamertag,
                    email: this.email,
                    platform: this.platform,
                    rank: this.rank,
                    division: this.division,
                    timezone: this.timezone
                }
                this.$store.dispatch('storePlayer', formData)
                this.closeDialog()
            }

        }
    },
    watch: {
        dialogAdd() {
            if(this.dialogAdd == false) {
                this.closeDialog();
            }
        }
    }
}
</script>

<style scoped>

</style>

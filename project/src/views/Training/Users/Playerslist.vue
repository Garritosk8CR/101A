<template>
    <v-flex xs12 sm6>
        <v-card>
            <v-toolbar color="cyan darken-3" dark>
                <v-toolbar-title>Players</v-toolbar-title>
            </v-toolbar>
            <v-list subheader flat>

                <v-list-tile v-if="players" v-for="player in players" :key="player.gamertag" avatar >
                    <v-chip>{{player.rank}}</v-chip>

                    <v-list-tile-content @click="edit(player)">
                        <v-list-tile-title class="black--text" v-html="player.gamertag"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-icon color="teal" @click="edit(player)">account_circle</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-action>
                        <v-icon color="red darken-1" @click="deletePlayer(player)">delete</v-icon>
                    </v-list-tile-action>

                </v-list-tile>
            </v-list>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        edit(player) {
            this.$emit('editPlayer', player)
        },
        deletePlayer(player) {
            this.$store.dispatch('deletePlayer', player)
        }
    },
    computed: {
        players() {
            return !this.$store.getters.players ? false : this.$store.getters.players
        }
    }
}
</script>

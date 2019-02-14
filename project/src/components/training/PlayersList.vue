<template>
    <v-layout column justify-center>

        <v-expansion-panel popout>
            <v-expansion-panel-content v-for="player in players" :key="player.id" hide-actions>
                <v-layout slot="header" align-center row spacer>
                    <v-flex xs4 sm2 md1>
                        <v-avatar color="teal">
                        <span class="white--text headline">{{player.gamertag.substring(0,1)}}</span>
                        </v-avatar>
                    </v-flex>

                    <v-flex sm5 md3 hidden-xs-only>
                        <strong v-html="player.gamertag"></strong>
                    </v-flex>

                    <v-flex no-wrap xs5 sm3>
                        <v-chip color="blue lighten-4" class="ml-0" label small>
                            {{ player.rank }}
                        </v-chip>
                        <v-chip color="blue lighten-4" class="ml-0" label small>
                            {{ player.division }}
                        </v-chip>
                    </v-flex>
                </v-layout>
                <v-card>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-chip color="blue lighten-4" class="ml-0" label small>
                            {{ player.rank }}
                        </v-chip>
                        <v-chip color="orange lighten-4" class="ml-0" label small>
                            {{ player.division }}
                        </v-chip>
                        <v-chip color="gree lighten-4" class="ml-0" label small>
                            {{ player.platform }}
                        </v-chip>
                        <v-chip v-if="player.mos" color="red lighten-4" class="ml-0" label small>
                            {{ player.mos }}
                        </v-chip>
                        <p>{{player.email}}</p>
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-layout>
</template>

<script>
export default {
    props: ['players'],
    data: () => ({

    })
}
</script>

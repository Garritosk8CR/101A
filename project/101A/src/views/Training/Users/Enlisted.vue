<template>
    <v-container fluid fill-height>
        <dialog-add v-if="isShowDialogAdd"  @closeDialogAdd="closeAdd($event)"></dialog-add>
        <dialog-edit v-if="isShowDialogEdit"  @closeDialogEdit="closeEdit($event)" :player="selectedPlayer"></dialog-edit>
        <v-layout justify-center align-top row fill-height>

            <players-list v-if="!isShowDialogAdd && !isShowDialogEdit" @editPlayer="editPlayer($event)"></players-list>
        </v-layout>
        <v-btn fab bottom right color="pink" dark fixed @click="showAdd">
            <v-icon>add</v-icon>
        </v-btn>

    </v-container>
</template>

<script>
import DialogAdd from './DialogAdd'
import PlayersList from './Playerslist'
import DialogEdit from './DialogEdit'
export default {
    data() {
        return {
            showDialogAdd: false,
            showDialogEdit: false,
            selectedPlayer: null
        }
    },
    components: {
        DialogAdd,
        PlayersList,
        DialogEdit
    },
    methods: {
        closeAdd(event) {
            this.showDialogAdd = false
        },
        showAdd() {

            this.showDialogAdd = true
        },
        editPlayer(event) {
            this.showDialogEdit = true
            this.selectedPlayer = event
        },
        closeEdit(event) {
            this.showDialogEdit = false
        },
        showEdit() {

            this.showDialogEdit = true
        }
    },
    computed: {
        isShowDialogAdd() {
            return this.showDialogAdd ? true : false
        },
        isShowDialogEdit() {
            return this.showDialogEdit ? true : false
        }
    },
    created() {
        this.$store.dispatch('fetchPlayers')
    }
}
</script>

<style scoped>

</style>

import db from '@/db'


const state = {
    playersAwaitingBCT: [],
    playersCompletedBCT:[],
    playersDoingBCT:[],
    currentDrillSargent: null

}

const getters = {
    playersAwaitingBCT(state) {
        return state.playersAwaitingBCT
    },
    playersCompletedBCT(state) {
        return state.playersCompletedBCT
    },
    playersDoingBCT(state) {
        return state.playersDoingBCT
    },
    currentDrillSargent(state) {
        return state.currentDrillSargent
    }
}

const mutations = {
    storePlayersAwaitingBCT(state, playersAwaitingBCT) {
        state.playersAwaitingBCT = playersAwaitingBCT
    },
    storePlayersCompletedBCT(state, playersCompletedBCT) {
        state.playersCompletedBCT = playersCompletedBCT
    },
    storePlayersDoingBCT(state, playersDoingBCT) {
        state.playersDoingBCT = playersDoingBCT
    },
    storeCurrentDrillSargent(state, currentDrillSargent) {
        state.currentDrillSargent = currentDrillSargent
    },
    storePlayerDoingBCT(state, playerDoingBCT) {
        state.playersDoingBCT.push(playerDoingBCT)
    },
    storePlayerCompletedBCT( state, player ) {

    }
}

//!TODO 'implement methods logic'

const actions = {
    storePlayerDoingBCT({ dispatch }, playerData ) {
        const newPlayer = Player(playerData)
        db.collection('Players').add(newPlayer)
        .then(res => {
            newPlayer.id = res.id
            dispatch('setId', newPlayer)
        })
        .catch(error => console.log(error))
    },
    storePlayerCompletedBCT({ dispatch }, playerData ) {
        const newPlayer = Player(playerData)
        db.collection('Players').add(newPlayer)
        .then(res => {
            newPlayer.id = res.id
            dispatch('setId', newPlayer)
        })
        .catch(error => console.log(error))
    },
    storePlayerAwaitingBCT({ dispatch }, playerData ) {
        const newPlayer = Player(playerData)
        db.collection('Players').add(newPlayer)
        .then(res => {
            newPlayer.id = res.id
            dispatch('setId', newPlayer)
        })
        .catch(error => console.log(error))
    },
    storeCurrentDrillSargent({ dispatch }, playerData ) {
        const newPlayer = Player(playerData)
        db.collection('Players').add(newPlayer)
        .then(res => {
            newPlayer.id = res.id
            dispatch('setId', newPlayer)
        })
        .catch(error => console.log(error))
    },

//!TODO 'change methods names and implement logic'

    fetchPlayers({ commit }) {
        var enlistedPlayers = []

        db.collection('Players').get()
        .then( querySnapshot => {

            querySnapshot.forEach(element => {
                console.log('------------------------------------');
                console.log(element);
                console.log('------------------------------------');
                const data = {
                    ...element.data()
                }
                data.id = element.id
                enlistedPlayers.push(data)
            })
            commit('storePlayers', enlistedPlayers)

        })
        .catch(error => console.log(error))
    },
    deletePlayer({commit, dispatch}, player) {

        db.collection('Players').where('id', '==', player.id).get()
        .then( querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete()
                dispatch('fetchPlayers')
            })
        })
    },
    updatePlayer({dispatch}, player) {
        console.log('------------------------------------');
        console.log('before edit ',player);
        console.log('------------------------------------');
        db.collection('Players').where('id', '==', player.id).get()
        .then( querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({...player})
                dispatch('fetchPlayers')
            })
        })
    },
    setId({dispatch}, player) {
        db.collection('Players').where('gamertag', '==', player.gamertag).get()
        .then( querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update(player)
                dispatch('fetchPlayers')
            })
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

import db from '@/db'
import Player from './Models/Player'

const state = {
    players: []
}

const getters = {
    players(state) {
        return state.players
    }
}

const mutations = {
    storePlayer(state, player) {
        state.player = player
    },
    storePlayers(state, players) {
        state.players = players
    }
}

const actions = {
    storePlayer({ dispatch }, playerData ) {
        const newPlayer = Player(playerData)
        db.collection('Players').add(newPlayer)
        .then(res => {
            newPlayer.id = res.id
            dispatch('setId', newPlayer)
        })
        .catch(error => console.log(error))
    },
    fetchPlayers({ commit }) {
        var enlistedPlayers = []
        db.collection('Players').get()
        .then( querySnapshot => {
            querySnapshot.forEach(element => {
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
        .catch(error => console.log(error))
    },
    updatePlayer({dispatch}, player) {
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
        .catch(error => console.log(error))
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

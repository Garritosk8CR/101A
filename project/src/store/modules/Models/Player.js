export default function newPlayer (params) {
    return {
        id: 'sdsdsd',
        name: params.name,
        email: params.email,
        gamertag: params.gamertag,
        //games: params.games,
        platform: params.platform,
        rank: params.rank,
        division: params.division,
        timezone:  params.timezone
    }
}

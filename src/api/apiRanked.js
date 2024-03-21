import {supabase} from '@/supabase'


export const getScoreMatch = async() => {
    const {data, error} = await supabase.from('matchs').select('team1,team2,team1_score,team2_score')

    if(error){
        console.error("error getScoreMacth", error)
    }
    return data
}


export const getTeam = async() => {
    const {data, error} = await supabase.from('team').select('id,name')

    if(error){
        console.error("error getTeam", error)
    }
    return data
}

export const  getResult= async(id) => {

    const {data, error} = await supabase.from('matchs').select('team1,team_score1,team_score2').eq("team1",id || "team2", id)

    if(error){
        console.error("error getResult", error)
    }
    return data
}
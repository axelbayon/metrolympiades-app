import {supabase} from '@/supabase'
import { ref } from 'vue'

export const getScoreMatch = async() => {
    const {data, error} = await supabase.from('matchs').select('team1,team2,team1_score,team2_score')

    if(error){
        console.error("error getScoreMacth", error)
    }
    return data
}


export const getTeam = async() => {
    const {data, error} = await supabase.from('teams').select('id,name')

    if(error){
        console.error("error getTeam", error)
    }
    return data
}

export const  getResult= async() => {
    const {data, error} = await supabase.from('matchs').select('team1, team2,team1_score,team2_score')

    if(error){
        console.error("error getResult", error)
    }
    return data
}

export const myId = ref("")

export const getMyTeam = async (user) => {
  const {error, data} = await supabase.from('teams').select('name, id').eq('leader', user).single()

  if (error){
      console.error('Error fetching team name', error)
  }
  myId.value = data.id
  return data.name
}
import	{ supabase } from "@/supabase"
import { ref } from "vue"

export const matchs = ref([])

export const insertMatch = async (team1,team2,sport,time,team1_score,team2_score) => {
    const {error} = await supabase.from('matchs').insert({
        team1,team2,sport,time,team1_score,team2_score
    })
    if (error) {
        console.error('Error inserting match', error)
    }
}

export const deleteMatch = async (match_id) => {
    const {error} = await supabase.from('matchs').delete().eq("id",match_id)
    if (error) {
        console.error('Error delete match', error)
    }
}

export const fetchMatchs = async () => {
    const {data, error} = await supabase.from('matchs').select('*, team1:teams!public_matchs_team1_fkey(name), team2:teams!public_matchs_team2_fkey(name)')
    if (error) {
        console.error('Error fetch matchs', error)
    }
    matchs.value = data
}
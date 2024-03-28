import {supabase} from '@/supabase';
import { ref } from 'vue';

export const members = ref([])

export const teamName = ref ("")

export const fetchTeamName = async (userId) => {
    const {error, data} = await supabase.from('teams').select('name').eq('leader', userId).single()

    if (error){
        console.error('Error fetching team name', error)
    } else { 
        teamName.value = data.name ?? ""
    }
}

export const fetchMembers = async (userId) => {
    const {error, data} = await supabase.from('teams').select('members').eq('leader', userId).single()

    if (error){
        console.error('Error fetching members', error)
    } else { 
        members.value = data.members ?? []
    }
}

export const updateMembers = async (newMembers,userId) => {
    const {error} = await supabase.from('teams').update({members: newMembers}).eq('leader', userId)
    if (error){
        console.error('Error updating members', error)
    }
}

export const updateTeamName = async (newName,userId) => {
    const {error} = await supabase.from('teams').update({name: newName}).eq('leader', userId)
    if (error){
        console.error('Error updating team name', error)
    }
}
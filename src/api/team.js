import {supabase} from '@/supabase';
import { ref } from 'vue';

export const members = ref([])

export const fetchMembers = async () => {
    const {error, data} = await supabase.from('teams').select('members').eq('leader', 'af15a5b4-3d82-4967-bb2c-e01fffc69aab').single()

    if (error){
        console.error('Error fetching members', error)
    } else { 
        members.value = data.members ?? []
    }
}

export const updateMembers = async (newMembers) => {
    const {error} = await supabase.from('teams').update({members: newMembers}).eq('leader', 'af15a5b4-3d82-4967-bb2c-e01fffc69aab')
    if (error){
        console.error('Error updating members', error)
    }
}
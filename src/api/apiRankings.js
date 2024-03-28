import {supabase} from '@/supabase'

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

export const getMyTeam = async(user) => {
    try {
        const teams = await getTeam(); // Assurez-vous que getTeam() est une méthode définie dans vos données ou dans vos méthodes
  
        const userTeam = teams.find(team => team.id === user.teamId); // Supposons que chaque utilisateur a un attribut teamId correspondant à l'id de l'équipe
  
        if (userTeam) {
          return userTeam;
        } else {
          throw new Error("L'équipe de l'utilisateur n'a pas été trouvée.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'équipe pour l'utilisateur:", error);
      }
}
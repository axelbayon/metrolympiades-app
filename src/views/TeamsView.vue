<template>
    <!-- Conteneur principal pour la liste des équipes -->
    <div class="m-4">
        <!-- Titre de la page -->
        <h2 class="mt-3 text-2xl font-bold title">Liste des équipes</h2>
        <!-- Liste des équipes -->
        <ul class="space-y-4 teams-list">
            <!-- Pour chaque équipe dans la liste des équipes, nous créons un élément de liste -->
            <li v-for="team in teams" :key="team.id" class="p-4 bg-white border border-gray-200 rounded shadow-lg">
                <!-- Nom de l'équipe -->
                <p class="mb-2 text-lg font-semibold">{{ team.name }}</p>
                <!-- ID du leader de l'équipe -->
                <p class="text-gray-600">Leader: {{ team.leader_id }}</p>
            </li>
        </ul>
    </div>
</template>
    
<script>
    // Importation des dépendances nécessaires
    import { ref, onMounted } from 'vue';
    import { supabase } from '@/supabase.js';
    
    export default {
        setup() {
            // Initialisation de la liste des équipes
            const teams = ref([]);

            // Fonction pour récupérer les équipes depuis la base de données
            const fetchTeams = async () => {
                try {
                    // Tentative de récupération des équipes
                    const { data, error } = await supabase.from('teams').select('*');
                    if (error) {
                        // Si une erreur se produit, nous la lançons pour la gérer plus tard
                        throw error;
                    }
                    // Si tout se passe bien, nous mettons à jour la liste des équipes
                    teams.value = data;
                } catch (error) {
                    // En cas d'erreur, nous l'affichons dans la console
                    console.error('Erreur lors de la récupération des équipes:', error.message);
                }
            };
    
            // Nous appelons la fonction fetchTeams lorsque le composant est monté
            onMounted(fetchTeams);
    
            // Nous retournons les variables et fonctions qui seront utilisées dans le template
            return {
                teams,
                fetchTeams,
            };
        },
    };
</script>

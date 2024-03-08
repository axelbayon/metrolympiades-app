<template>
    <!-- Crée une div avec l'ID "app", qui occupe toute la hauteur de l'écran et a un fond bleu. -->
    <div id="app" class="margin-auto">
        <!-- Inclut la vue du routeur, qui affiche le composant correspondant à la route actuelle. -->
        <router-view />
    </div>
</template>

<script>
export default {
    // Définit le nom du composant comme 'App'.
    name: 'App',
};
</script>
/*Menus burgers*/
let accordions = document.querySelectorAll (".accordeon")
accordions.forEach ( function(item){ 
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
})

/*Dark Mode*/ 
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});

/*Tabs*/
function showTab(tabName) {
// Masquer tous les onglets et les réinitialiser
document.querySelectorAll('.tabs').forEach(tab => {
tab.classList.remove('active');
});
document.querySelectorAll('.tabs-container li').forEach(tab => {
tab.classList.remove('active');
});

// Afficher l'onglet actif
 const activeTab = document.querySelector(`.${tabName}`);
const correspondingTab = document.querySelector(`.tabs.${tabName}`);
    if (activeTab && correspondingTab) {
     activeTab.classList.add('active');
    correspondingTab.classList.add('active');
}}
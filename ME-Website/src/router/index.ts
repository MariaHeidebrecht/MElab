import { createRouter, createWebHistory } from 'vue-router'

// Import der einzelnen Seiten der Anwendung
import HomeView from '../views/HomeView.vue'
import StudiesView from '../views/StudiesView.vue'
import BiomarkersView from '../views/BiomarkersView.vue'
import AboutView from '../views/About.vue'

// Konfiguration der Navigation und Zuordnung der URLs zu den Seiten
const router = createRouter({
  // Verwendet normale URLs ohne # 
  history: createWebHistory(),

  routes: [
    {
      // Startseite unter der Hauptadresse
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // Übersicht aller erfassten Forschungsstudien
      path: '/studies',
      name: 'studies',
      component: StudiesView,
    },
    {
      // Übersicht und Informationen zu verschiedenen Biomarkern
      path: '/biomarkers',
      name: 'biomarkers',
      component: BiomarkersView,
    },
    {
      // Informationen zum ME/CFS Open Research Lab
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

// Router für die Verwendung in der Anwendung bereitstellen
export default router
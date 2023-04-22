import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const boot = async () => {
    if (process.env.NODE_ENV === 'development') {
      const { worker } = await import('./mocks/browser')
      await worker.start()
    }
  }
  

  boot().then(() => {
    createApp(App).mount('#app')
})

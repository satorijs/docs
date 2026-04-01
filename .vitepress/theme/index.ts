import { defineTheme } from '@cordisjs/vitepress/client'
import Home from './VPHome.vue'

import './index.scss'

export default defineTheme({
  enhanceApp(ctx) {
    ctx.app.component('Home2', Home)
  },
})

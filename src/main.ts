import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/scss/Base.scss'
import '@/assets/scss/Common.scss'
import 'vxe-table/lib/style.css'
import 'tdesign-vue-next/es/style/index.css'
import type { App } from 'vue'
import APP from './App.vue'
import RefreshPage from '@/components/RefreshPage.vue'
import TableDownload from '@/components/TableDownload.vue'
import CustomColumns from '@/components/CustomColumns.vue'
import router from './router/index'
import 'xe-utils'
import { Column, Table } from 'vxe-table'

// pinia
const pinia = createPinia()

// VXETable
const useTable = (app: App) => {
  app.use(Column).use(Table)
}

// init application
const app: App = createApp(APP)
app.component('RefreshPage', RefreshPage)
app.component('TableDownload', TableDownload)
app.component('CustomColumns', CustomColumns)
app.use(router).use(useTable).use(pinia)
app.mount('#micro-app')

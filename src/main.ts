import './public-path.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/scss/Base.scss'
import '@/assets/scss/Common.scss'
import 'tdesign-vue-next/dist/tdesign.min.css'
import type { App } from 'vue'
import APP from './App.vue'
import RefreshPage from '@/components/RefreshPage.vue'
import TableDownload from '@/components/TableDownload.vue'
import CustomColumns from '@/components/CustomColumns.vue'
import routerFactory from './router/index'
import 'xe-utils'
import { Column, Table } from 'vxe-table'
// pinia
const pinia = createPinia()

// VXETable
const useTable = (app: App) => {
  app.use(Column).use(Table)
}

// vue-router
const useRouter = (app: App) => {
  const router = routerFactory()
  app.use(router)
}

// init application
let app: App = null
function initApp(element: HTMLElement | string) {
  app = createApp(APP)
  app.component('RefreshPage', RefreshPage)
  app.component('TableDownload', TableDownload)
  app.component('CustomColumns', CustomColumns)
  app.use(useRouter).use(useTable).use(pinia)
  app.mount(element)
}

// qiankun
window.__POWERED_BY_QIANKUN__ || initApp('#micro-app')
export let $rootRouter = null
// bootstrap钩子
export async function bootstrap() {
  console.log('micro app bootstrap123')
  return Promise.resolve()
}
// mount钩子
export async function mount(props: { container: HTMLElement }) {
  props.container.style.height = '100%'
  props.container.style.width = '100%'
  const element: HTMLElement = props.container.querySelector('#micro-app')
  initApp(element)
  return Promise.resolve(true)
}
// unmount钩子
export async function unmount() {
  app.unmount()
  app = null
  $rootRouter = null
  return Promise.resolve(true)
}
// update
export async function update(props: Record<string, unknown>) {
  console.log('update', props)
  if (props.$rootRouter) {
    $rootRouter = props.$rootRouter
  }
  if (props.unmount) {
    app.unmount()
    app = null
  }
  if (props.remount) {
    const element: HTMLElement = document.querySelector('#micro-app')
    initApp(element)
  }
  return Promise.resolve(true)
}

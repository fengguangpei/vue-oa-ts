declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    {},
    {},
    {
      refreshHook: () => void
    }
  >
  export default component
}
interface Window {
  __MICRO_APP_BASE_ROUTE__: string
  $parentRouter: Router
}

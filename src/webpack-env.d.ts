/* eslint-disable @typescript-eslint/ban-types */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import type { Router } from 'vue-router'
  const component: DefineComponent<
    {},
    {},
    {
      refreshHook: () => void
      $rootRouter: Router
    }
  >
  export default component
}
interface Window {
  __POWERED_BY_QIANKUN__: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
  $parentRouter: Router
}

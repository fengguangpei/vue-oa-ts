import { useKeepAlive } from '@/stores/keepAlive'
import { useRouter } from 'vue-router'
function useRefresh() {
  const aliveInstance = useKeepAlive()
  const { changeAlive } = aliveInstance
  const $router = useRouter()
  return async () => {
    const $route = $router.currentRoute.value
    const name = $route.name as string
    const path = $route.path
    changeAlive(name, false)
    await $router.replace({
      path: '/RefreshPage'
    })
    setTimeout(() => {
      changeAlive(name, true)
      $router.replace({
        path
      })
    })
  }
}

export default useRefresh

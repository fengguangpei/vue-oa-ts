import { useKeepAlive } from '@/stores/keepAlive'
import { useRouter } from 'vue-router'
import { $rootRouter } from '@/main'
function useRefresh() {
  const aliveInstance = useKeepAlive()
  const { changeAlive } = aliveInstance
  const $router = useRouter()

  return async () => {
    const $route = $router.currentRoute.value
    const name = $route.name as string
    const base = $router.options.history.base
    const path = base + $route.path
    changeAlive(name, false)
    await $rootRouter.replace({ path: '/' })
    await $rootRouter.replace({ path })
    changeAlive(name, true)
  }
}

export default useRefresh

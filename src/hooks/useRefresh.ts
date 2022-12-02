import { useKeepAlive } from '@/stores/keepAlive'
import { useRouter } from 'vue-router'

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
    await window.$parentRouter.replace({ path: '/' })
    await window.$parentRouter.replace({ path })
    changeAlive(name, true)
  }
}

export default useRefresh

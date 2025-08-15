import {useAuthStore} from '@/stores/auth'

export const can = permissions => {
    const authStore = useAuthStore()

    const userPermissions = authStore.user?.permissions || []

    return userPermissions.includes(permissions)
}

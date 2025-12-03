export const adminAuth = {
    setToken: (token: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('admin_token', token);
        }
    },

    getToken: (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('admin_token');
        }
        return null;
    },

    isAuthenticated: (): boolean => {
        return adminAuth.getToken() === 'admin-authenticated';
    },

    logout: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('admin_token');
        }
    },
};

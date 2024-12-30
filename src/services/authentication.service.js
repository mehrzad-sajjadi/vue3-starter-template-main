import ApiService from './api.service';
import TokenService from './token.service';
import PermissionService from './permission.service';

// Enums
import HttpHeader from '@/enums/HttpHeader';

class AuthenticationService {
    /**
     * Login user
     *
     * @param {Object} [data]
     * @param {AxiosRequestConfig} [config]
     * @returns {Promise<AxiosResponse>}
     */
    static login(data, config) {
        return ApiService.post('users', data, config).then((response) => {
            const token = btoa(JSON.stringify(response.data));

            TokenService.set(token);
            PermissionService.set(['dashboard']);
            ApiService.setHeader(HttpHeader.AUTHORIZATION, `Bearer ${TokenService.get()}`);

            return response;
        });
    }

    /**
     * Logout user
     *
     * @returns void
     */
    static logout() {
        TokenService.clear();
        PermissionService.clear();
    }

    /**
     * User is logged in
     *
     * @returns {Boolean}
     */
    static isLoggedIn() {
        return TokenService.isExist();
    }
}

export default AuthenticationService;

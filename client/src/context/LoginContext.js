

const LoginReducer = (state, action) => {
    switch (action.type) {
        case start_login:
            return {
                user: null,
                loading: true,
                error: null
            };
        case login_success:
            return {
                user: action.payload,
                loading: false,
                error: null
            };
        case login_failure:
            return {
                user: null,
                loading: false,
                error: action.payload
            };
        case logout:
            return {
                user: null,
                loading: false,
                error: null
            };
        default:
            return state
    }
}
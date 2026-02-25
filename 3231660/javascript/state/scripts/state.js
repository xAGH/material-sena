let state = {
    loading: false,
    users: [],
    selectedUser: null,
    error: null,
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}

export function clearState() {
    state = {
        loading: false,
        users: [],
        selectedUser: null,
        error: null,
    };
}

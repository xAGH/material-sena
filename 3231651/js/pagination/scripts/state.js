const state = {
    loading: false,
    users: [],
    limit: 30,
    page: 0,
    total: 0,
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}

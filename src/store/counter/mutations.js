export const increment = (state) => {
    state.count++
    state.leche = 'last mutation'
}
export const incrementBy = (state, val) => {
    state.count += val
    state.leche = 'last mutation: '+val
    state.lastRandomInt = val
}
export const setLoading = (state, val) => {
    state.isLoading = val
}
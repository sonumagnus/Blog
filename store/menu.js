export const state = () => ({
  isShow: false
});
export const mutations = {
  updateState(state) {
    state.isShow = !state.isShow;
  }
};

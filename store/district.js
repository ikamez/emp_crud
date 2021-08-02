export const state = () => ({
  district: [],
})

export const actions = {
  async loadDistrict(context) {
    try {
      const response = await this.$axios.$get(
        'http://10.0.10.122:8000/api/v1/districts/'
      )
      console.log(response);
      context.commit('SET_DISTRICT', response)
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {
  SET_DISTRICT(state, data) {
    state.district = data
  },
}

export const getters = {
  GET_DISTRICTS(state) {
    return state.district
  },
}

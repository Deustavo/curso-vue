export default {
	state: {
		quantidade: 10,
		preco: 10.2
	},

	// MUTATIONS E ACTIONS
	// mutations tem como objetivo alterar o estado centralizado (state)
	mutations: {
		// mutations só podem receber um atributo além do state
		setQuantidade(state, payload) {
			state.quantidade = payload
		},
		setPreco(state, payload) {
			state.preco = payload
		}
	}
}
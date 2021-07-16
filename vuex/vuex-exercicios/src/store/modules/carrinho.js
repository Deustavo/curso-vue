export default {
    namespaced: true,
	state: {
		produtos: []
	},
	getters: {
		valorTotal(state) {
			return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
		}
	},

	// MUTATIONS E ACTIONS
	// mutations tem como objetivo alterar o estado centralizado (state)
	mutations: {
		// mutations só podem receber um atributo além do state
		adicionarProduto(state, payload) {
			state.produtos.push(payload)
		}
	},
	// actions é o local onde se colocam as regras (onde tem lógicas e condições)
	actions: {
		// actions só podem receber um atributo além do state
		adicionarProduto(context, payload) {
			setTimeout(() => {
				context.commit('adicionarProduto', payload)
			}, 1000)
		}
	}
}
    
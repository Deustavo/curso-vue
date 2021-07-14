new Vue({
	el: '#desafio',
	data: {
		valor: ''
	},
	methods: {
		alerta() {
			return alert('Clicou no botão')
		},
		setValue(e) {
			return this.valor = e.target.value
		}
	}	
})
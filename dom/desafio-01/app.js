new Vue({
    el: "#desafio",
		data: {
			nome: "Gustavo Andrade",
			idade: 21,
			linkImagem: "https://pbs.twimg.com/media/EiItKK0WoAEnwZD?format=jpg&name=medium"
		},
		methods: {
			randomValue: function() {
				return (Math.random()>=0.5)? 1 : 0;
			}
		}
})
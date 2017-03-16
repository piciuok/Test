Vue.component('tasks', {
	props: ['list'],
	template: '#tasks-template',


	computed: {
		remaining: function() {
			var vm = this;
			return this.list.filter(this.inProgress).length;
		}
	},

	methods: {
		isCompleted : function(task) {
			return task.completed;
		},

		inProgress : function(task) {
			return ! this.isCompleted(task);
		},

		deleteTask: function(task) {
			this.list.splice( this.list.indexOf(task), 1);
		},

		addTask: function(input) {
			this.list.push({body: input, completed: false});
		},

		clearCompleted: function() {
			this.list = this.list.filter(this.inProgress);
		},
	}
});

new Vue({
	el: "#app",
	data: {
		classNames: [],
		tasks: [
			{body: 'Go to store', completed: false} ,
			{body: 'Go to bank', completed: false} ,
			{body: 'Go to honey', completed: true} 
		],
		numbers: [{name: 'Mateusz'}, {name: 'Darek'}],
	},

	computed: {
		filteredNumbers: function() {
			return this.numbers.filter( function(number) {
				return number.name.length > 6;
			});
		}
	},

	methods : {
		completeTask: function(task) {
			task.completed = !task.completed;
		}
	}
});
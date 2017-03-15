var settings = {
  todoInput : '',
  todos : [
    {text: 'Isc odo biedronki'},
    {text: 'Kupic pparyke'},
    {text: 'Przygotowac mieso'},
  ],
};

var vm = new Vue({
  el: '#chapter2',
  data: settings,
  methods: {
    addTask : function() {
      this.todos.push({text: this.todoInput})
      this.todoInput = '';
    },

    removeTask : function(index) {
      this.todos.splice(index,1);
    },
  }
});


Vue.component("counter", {
  template: '#counter-template',
  props : ['heading','type'],
  data : function() {
    return { count: 0 }
  },
  computed : {
    fans: function() {
      if(this.count > 3) return "Fajniej!"; else return "OK";
    }
  }
})


var vm3 = new Vue({
  el: "#chapter3",
  data : {
    like : 0,
    dislike : 0,
  },
  methods:{
    formSubmitted : function() {
      alert('clicked');
    },
    increase : function() {
      this.like += 1;
    },
    descrease : function() {
      this.dislike -=1
    }
  }
})

var vm4 = new Vue({
  el: "#lesson4",
  data: {
    firstName: 'Mateusz',
    lastName: 'Pas',
  }, 


  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
});


function l(msg) {
  console.log(msg);
}
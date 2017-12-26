import Vue from 'vue/dist/vue.js';
import App from './components/app.vue';
import './style';

const app = window.addEventListener('load', ()=>{
	new Vue({
	  el: '#vueApp',
		name: App,
		components: { App },
		template: `<App/>`,
	  data: {
	    todos: [
	      { text: 'Learn JavaScript' },
	      { text: 'Learn Vue' },
	      { text: 'Build something awesome' }
	    ]
	  }
	})
})
export default app;

/*
const app = Vue.createApp({
    template: '<h2>I am the template</h2>'
})
app.mount('#app')
*/

/*
const app = Vue.createApp({
    data() {
        return {
            title: 'This is the title',
            author: 'Adrita Adhikary',
            age: 4,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis culpa, odit sapiente exercitationem quaerat enim libero vel laboriosam cupiditate!'
        }
    }
})
app.mount('#app')
*/

/*
const app = Vue.createApp({
    data() {
        return {
            title: 'This is the title',
            author: 'Adrita Adhikary',
            age: 4,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis culpa, odit sapiente exercitationem quaerat enim libero vel laboriosam cupiditate!'
        }
    },
    methods: {
        changeTitle() {
            this.title = 'This is another title'
        }
    }
})
app.mount('#app')
*/

const app = Vue.createApp({
    data() {
        return {
            show: true,
            title: 'This is the title',
            author: 'Adrita Adhikary',
            age: 4,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis culpa, odit sapiente exercitationem quaerat enim libero vel laboriosam cupiditate!'
        }
    },
    methods: {
        toggleData() {
            this.show = !this.show
        }
    }
})
app.mount('#app')

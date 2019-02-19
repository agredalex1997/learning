const app = new Vue({
    el: '#app',

    data: {
        myLocalProperty: `I'm a local property value.`,
        randomNumber: 0,
    },

    methods: {
        buttonClicked() {
            app.randomNumber = Math.floor(Math.random() * 100);
        }
    },
});
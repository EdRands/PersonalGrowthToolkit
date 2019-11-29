let dateDisplayFormat = 'dddd, MMMM Do, YYYY';

new Vue({
    el: '#app',

    data: {
        date: moment().format(dateDisplayFormat),
        release: localStorage.getItem('release'),
        gratitude: localStorage.getItem('gratitude'),
        focus: localStorage.getItem('focus'),
        editMode: false,
    },

    methods: {
        resetItems() {
            if (confirm('Are you sure you want to reset everything?')) {
                this.date = moment().format(dateDisplayFormat);
                this.release = '____________';
                this.gratitude = '____________';
                this.focus = '____________';
            }
        },

        editRelease() {
            let response = prompt("I will let go of…", this.release);
            if (response != null) {
                this.release = response;
                localStorage.setItem('release', response);
            }
        },

        editGratitude() {
            let response = prompt("I am grateful for…", this.gratitude);
            if (response != null) {
                this.gratitude = response;
                localStorage.setItem('gratitude', response);
            }
        },

        editFocus() {
            let response = prompt("I will focus on…", this.focus);
            if (response != null) {
                this.focus = response;
                localStorage.setItem('focus', response);
            }
        },
    },
})

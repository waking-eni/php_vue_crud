new Vue({
    el: '#app',
    data : {
        contacts : []
    },
    created() {
        this.getContacts()
    },
    methods : {
        getContacts() {
            axios.get('http://localhost/phpprojects/php_vue_crud/get_contacts.php')
                .then(response => this.contacts = response.data)
                .catch(err => console.log(err));
        }
    }
})
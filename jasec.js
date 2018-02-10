var contactRoot = new Vue({
    el: '#contact_form',
    data: {
        name: '',
        email:'',
        message:'',
        maxLength: 140
    },
    methods: {
        isValidName: function () {
            var valid = this.name.length > 0;
            console.log('checking for a valid name: ' + valid);
            return valid;
        },
        isValidEmail: function () {
            var valid = this.email.indexOf('@') > 0;
            console.log('checking for a valid email: ' + valid);
            return valid;
        },
        isValidMessage: function () {
            var valid = (this.message.length > 0) &&
                (this.message.length < this.maxLength);
            console.log('checking for a valid message: ' + valid);
            return valid;
        },
        checkMessage: function () {

        },
        submitForm: function () {

            console.log('submitting message...');
            this.$http({url: '/someUrl',
                method: 'POST', data: {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }}).then(function () {
                alert('khaldounwaleed95@gmail.com');
            }, function () {
                alert('Form submission failed');
            });
        }
    }
});
var vueMessage = new Vue({
    el: '#vue',
    data: {
        url: 'https://facebook.com/MKM.3D.Printer',
    }
})
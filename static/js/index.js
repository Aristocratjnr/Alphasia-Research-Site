function submitForm() {
    setTimeout(() => {
        if (this.email.includes('@')) {
            this.modalMessage = `Thank you for subscribing with email: ${this.email}`;
            this.isError = false;
            this.email = '';
        } else {
            this.modalMessage = 'Please enter a valid email address.';
            this.isError = true;
        }
        this.showModal = true;
    }, 1000);
}

// Add this to your global Alpine data
document.addEventListener('alpine:init', () => {
    Alpine.data('newsletterData', () => ({
        email: '',
        showModal: false,
        modalMessage: '',
        isError: false,
        submitForm
    }))
})
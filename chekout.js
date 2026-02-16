// Payment Form Handler
class PaymentForm {
  constructor() {
    this.form = document.getElementById('checkoutForm');
    this.inputs = {
      cardName: document.getElementById('cardName'),
      cardNumber: document.getElementById('cardNumber'),
      expiry: document.getElementById('expiry'),
      cvv: document.getElementById('cvv'),
      email: document.getElementById('email')
    };
    this.errors = {
      cardName: document.getElementById('cardNameError'),
      cardNumber: document.getElementById('cardNumberError'),
      expiry: document.getElementById('expiryError'),
      cvv: document.getElementById('cvvError'),
      email: document.getElementById('emailError')
    };
    this.paymentMethods = document.querySelectorAll('.pymant_bottom p');
    this.methodStatus = document.querySelector('.pymant_top .method');
    this.payButton = document.querySelector('.btn-pay');
    this.successModal = document.querySelector('.success_modal');
    this.gotItButton = document.querySelector('.gotit');
    
    this.init();
  }

  init() {
    this.setupInputFormatting();
    this.setupValidation();
    this.setupPaymentMethods();
    this.setupSubmit();
    this.setupModalClose();
  }

  // Format inputs as user types
  setupInputFormatting() {
    // Card number formatting (adds spaces every 4 digits)
    this.inputs.cardNumber.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\s/g, '');
      value = value.replace(/\D/g, '');
      value = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = value;
    });

    // Expiry date formatting (MM/YY)
    this.inputs.expiry.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      e.target.value = value;
    });

    // CVV - numbers only
    this.inputs.cvv.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  }

  // Setup real-time validation
  setupValidation() {
    Object.keys(this.inputs).forEach(key => {
      this.inputs[key].addEventListener('blur', () => {
        this.validateField(key);
      });

      this.inputs[key].addEventListener('input', () => {
        if (this.errors[key].classList.contains('active')) {
          this.validateField(key);
        }
      });
    });
  }

  // Validate individual field
  validateField(fieldName) {
    const input = this.inputs[fieldName];
    const error = this.errors[fieldName];
    const wrapper = input.closest('.input-wrapper');
    const successIcon = wrapper.querySelector('.success-icon');
    const errorIcon = wrapper.querySelector('.error-icon');
    
    let isValid = false;

    switch (fieldName) {
      case 'cardName':
        isValid = input.value.trim().length >= 3;
        break;
      
      case 'cardNumber':
        const cardNumber = input.value.replace(/\s/g, '');
        isValid = /^\d{16}$/.test(cardNumber);
        break;
      
      case 'expiry':
        isValid = this.validateExpiry(input.value);
        break;
      
      case 'cvv':
        isValid = /^\d{3}$/.test(input.value);
        break;
      
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
        break;
    }

    // Update UI based on validation
    if (isValid) {
      error.classList.remove('active');
      successIcon.style.display = 'block';
      errorIcon.style.display = 'none';
      wrapper.style.borderColor = '#12C400';
    } else {
      error.classList.add('active');
      successIcon.style.display = 'none';
      errorIcon.style.display = 'block';
      wrapper.style.borderColor = '#ef4444';
    }

    return isValid;
  }

  // Validate expiry date
  validateExpiry(value) {
    if (!/^\d{2}\/\d{2}$/.test(value)) return false;

    const [month, year] = value.split('/').map(Number);
    if (month < 1 || month > 12) return false;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }

    return true;
  }

  // Validate all fields
  validateAllFields() {
    let allValid = true;
    Object.keys(this.inputs).forEach(key => {
      if (!this.validateField(key)) {
        allValid = false;
      }
    });
    return allValid;
  }

  // Setup payment method selection
  setupPaymentMethods() {
    this.paymentMethods.forEach(method => {
      method.addEventListener('click', () => {
        // Remove active class from all methods
        this.paymentMethods.forEach(m => m.classList.remove('active'));
        
        // Add active class to clicked method
        method.classList.add('active');
        
        // Update status
        this.methodStatus.textContent = method.textContent;
        this.methodStatus.classList.add('active');
      });
    });
  }

  // Setup form submission
  setupSubmit() {
    this.payButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Check if payment method is selected
      const selectedMethod = document.querySelector('.pymant_bottom p.active');
      if (!selectedMethod) {
        alert('Please select a payment method');
        return;
      }

      // Validate all fields
      if (this.validateAllFields()) {
        this.showSuccessModal();
      } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message.active');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // Show success modal
  showSuccessModal() {
    this.successModal.style.visibility = 'visible';
    this.successModal.style.opacity = '1';
  }

  // Setup modal close
  setupModalClose() {
    this.gotItButton.addEventListener('click', () => {
      this.successModal.style.visibility = 'hidden';
      this.successModal.style.opacity = '0';
      this.resetForm();
    });
  }

  // Reset form
  resetForm() {
    this.form.reset();
    
    // Reset all validation states
    Object.keys(this.inputs).forEach(key => {
      const wrapper = this.inputs[key].closest('.input-wrapper');
      const successIcon = wrapper.querySelector('.success-icon');
      const errorIcon = wrapper.querySelector('.error-icon');
      
      this.errors[key].classList.remove('active');
      successIcon.style.display = 'none';
      errorIcon.style.display = 'none';
      wrapper.style.borderColor = '#555';
    });

    // Reset payment method
    this.paymentMethods.forEach(m => m.classList.remove('active'));
    this.paymentMethods[0].classList.add('active');
    this.methodStatus.textContent = 'Not selected';
    this.methodStatus.classList.remove('active');
  }
}

// Initialize the payment form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PaymentForm();
});
let cart = JSON.parse(localStorage.getItem('cartArr'))
let totalPriceElemant = document.querySelector('.priceTotal')
let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
totalPriceElemant.textContent = totalPrice.toFixed(2) + '$'
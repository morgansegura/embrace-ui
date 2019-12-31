import './styles/modal.css'
class Modal {
    constructor(overlay) {
      this.overlay = overlay;
      const closeButton = overlay.querySelector('.button-close')
    
      
      closeButton.addEventListener('click', this.close.bind(this));
      overlay.addEventListener('click', e => {
        if (e.srcElement.id === this.overlay.id) {
          this.close();
        }
      });
      this.init();
    }
    init () {
        
      }
    open() {
    this.overlay.classList.remove('is-hidden');
    }

    close() {
    this.overlay.classList.add('is-hidden');
    }
  }
  const modal = new Modal(document.querySelector('.modal-overlay'));
  window.openModal = modal.open.bind(modal);
  window.openModal();

  export { Modal as default };
(() => {
  const toggleModal = (modalId) => {
    const modal = document.querySelector(`[data-modal-${modalId}]`);
    if (modal) {
      modal.classList.toggle(`is-hidden-${modalId}`);
    }
  };

  const closeModal = (modalId) => {
    const modal = document.querySelector(`[data-modal-${modalId}]`);
    if (modal) {
      modal.classList.add(`is-hidden-${modalId}`);
    }
  };

  // Handle modal toggle buttons
  document.querySelectorAll('[data-modal-toggle]').forEach(btn => {
    const target = btn.getAttribute('data-modal-toggle');
    const modalId = target === 'signin' ? '1' : target === 'signup' ? '2' : target;
    btn.addEventListener('click', () => toggleModal(modalId));
  });

  // Handle modal close buttons
  document.querySelectorAll('[data-modal-close-1]').forEach(btn => {
    btn.addEventListener('click', () => closeModal('1'));
  });

  document.querySelectorAll('[data-modal-close-2]').forEach(btn => {
    btn.addEventListener('click', () => closeModal('2'));
  });

  // Handle backdrop clicks
  document.querySelectorAll('[data-modal-1], [data-modal-2]').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        const modalId = modal.hasAttribute('data-modal-1') ? '1' : '2';
        closeModal(modalId);
      }
    });
  });

  // Handle Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('1');
      closeModal('2');
    }
  });
})();

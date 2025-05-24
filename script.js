function showToast(type = 'info', message = '') {
  const toast = document.createElement('div');
  toast.classList.add('toast', type);

  toast.innerHTML = `
    <span>${message}</span>
    <span class="close" onclick="this.parentElement.remove()">×</span>
  `;

  document.getElementById('toast-container').appendChild(toast);

  // Auto remove after 4 seconds
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

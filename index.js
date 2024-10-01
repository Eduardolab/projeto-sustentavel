window.addEventListener('load', () => {
    function updateOnlineStatus() {
      const offlineMessage = document.getElementById('offline-message');
      
      if (navigator.onLine) {
        // Se está online, esconda a mensagem
        offlineMessage.style.display = 'none';
      } else {
        // Se está offline, mostre a mensagem
        offlineMessage.style.display = 'block';
      }
    }
  
    // Checar o status da conexão ao carregar a página
    updateOnlineStatus();
  
    // Adicionar listeners para mudanças de estado
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });
  
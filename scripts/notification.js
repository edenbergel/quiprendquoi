if (Notification) {
  console.log('notification supported')
  document.querySelectorAll('[data-notify]').forEach(button => {
    button.addEventListener('click', function() {
      Notification.requestPermission();
      console.log('request notification permission')
    })
  })

  document.querySelectorAll('[data-notify-item]').forEach(deleteButton => {
    const item = deleteButton.getAttribute('data-notify-item')
    deleteButton.addEventListener('click', () => {
      if (Notification.permission === 'granted') {
        new Notification('Item supprimé !', {
          body: `${item} supprimé`
        });
      }
    })
  })
} else {
  console.log('notification not supported')
}

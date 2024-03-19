const notifications = document.querySelectorAll('.notification')
Array.from(notifications).forEach(notification=>{
    setTimeout(()=>{
        notification.remove();
    }, 3000)
})
setInterval(() =>{
    showNotification({
        top: 150,
        right: 100,
        html: 'HI',
        className: "welcome"
    })
}, 1700)

function showNotification({top = 0, right = 0, className, html}) {
    setTimeout(()=> notification.remove(),1500);

    let notification = document.createElement('div');
    notification.className ='notification ' + className;

    notification.setAttribute('style', `top: ${top}px; right: ${right}px;`);
    notification.innerHTML = html;
    
    document.body.append(notification);

    notification.style.position = "fixed";
    notification.style.backgroundColor = "gray";
    notification.style.fontSize = "25px";
}


 
  
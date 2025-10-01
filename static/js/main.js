document.getElementById('add').addEventListener('click', Add);

function Add(event) {
    event.preventDefault();
    let ip = document.getElementById('ipv4Input');
    let dateFrom = document.getElementById('dateFrom').value;
    let dateTo = document.getElementById('dateTo').value;
    if (!isValid(ip.value)) return ShowInfo("IPv4: "+ip.value+" некорректный");
    let ipList = document.querySelector(".ip-container");
    if (isOneIp(ip.value)) return ShowInfo("IPv4: "+ip.value+" уже добавлен!");
    let newItem = document.createElement('div');
    newItem.classList.add('ip-list');
    newItem.innerHTML = `
         <span> ${ip.value}</span> <button class="delete-button" onclick="removeIP(this)">Удалить</button>
    `;
    ipList.appendChild(newItem);
    ShowInfo("IPv4 добавлен: "+ip.value, 'success');
    ip.value = '';
}
function removeIP(button){
       let rem = button.parentNode;
       rem.remove();
}

function isValid(ip) {
     const regex = /^(\d{1,3}\.){3}\d{1,3}$/;
     return regex.test(ip);
}

function isOneIp(ip) {
      let ipElements = document.querySelectorAll('.ip-list span');
      return Array.from(ipElements).some(span => span.textContent.trim() === ip);
}

function ShowInfo(message, type='error'){
        let toast = document.querySelector(".hidden");
        let toast_div = document.createElement('div');
        if (type == 'error') toast_div.classList.add('btn-error');
        toast_div.classList.add('btn');
        toast_div.innerHTML = `
         <span> ${message}</span> <button class="close-button" onclick="removeIP(this)">×</button>
        `;
        toast.appendChild(toast_div);
        setTimeout(function(){toast_div.remove()}, 5000);
}

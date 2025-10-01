document.getElementById('add').addEventListener('click', Add);
document.getElementById('form').addEventListener('submit', Request);

function Add(event) {
    event.preventDefault();
    let ip = document.getElementById('ipv4Input');
    let dateFrom = document.getElementById('dateFrom').value;
    let dateTo = document.getElementById('dateTo').value;
    if (!isValid(ip.value)) return ShowInfo("IPv4: "+ip.value+" некорректный");
    let ipList = document.querySelector(".ip-container");
    if (isOneIp().includes(ip.value)) return ShowInfo("IPv4: "+ip.value+" уже добавлен!");
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

function isOneIp() {
      let ipElements = document.querySelectorAll('.ip-list span');
      return Array.from(ipElements).map(span => span.textContent.trim());
}

function ShowInfo(message, type='error'){
        let toast = document.querySelector(".hidden");
        let toast_div = document.createElement('div');
        toast_div.classList.add('btn');
        if (type == 'error') toast_div.classList.add('error');
        toast_div.innerHTML = `
         <span> ${message}</span> <button class="close-button" onclick="removeIP(this)">×</button>
        `;
        toast.appendChild(toast_div);
        setTimeout(function(){toast_div.remove()}, 5000);
}

function Request(event){
    event.preventDefault();
    let ip = isOneIp();
    if (ip.length == 0) return ShowInfo("Добавьте IPv4!")
    let dateFrom = document.getElementById('dateFrom').value;
    let dateTo = document.getElementById('dateTo').value;
    fetch("http://localhost:8000/ipv4" ,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {'ip':ip,'dateFrom':new Date(dateFrom), 'dateTo':new Date(dateTo)}
        )
    })
    .then(response => response.json())
    .then(data => ShowInfo(data.detail, 'success'))
    .catch(error => ShowInfo('Ошибка:'+error));

}
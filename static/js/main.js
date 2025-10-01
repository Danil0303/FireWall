document.getElementById('add').addEventListener('click', Add);

function Add(event) {
    event.preventDefault();
    let ip = document.getElementById('ipv4Input');
    let dateFrom = document.getElementById('dateFrom').value;
    let dateTo = document.getElementById('dateTo').value;
    if (!isValid(ip.value)) return console.log(ip);
    let ipList = document.querySelector(".ip-container");
    if (isOneIp(ip.value)) return console.log(ip);
    let newItem = document.createElement('div');
    newItem.classList.add('ip-list');
    newItem.innerHTML = `
         <span> ${ip.value}</span> <button class="delete-button" onclick="removeIP(this)">Удалить</button>
    `;
    ipList.appendChild(newItem);
    ip.value = '';
    return console.log(ip);

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
        let newItem = document.createElement('div');

}

//×
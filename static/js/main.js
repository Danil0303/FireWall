document.getElementById('add').addEventListener('click', Add);

function Add(event) {
    event.preventDefault();
    var ip = document.getElementById('ipv4Input');
    var dateFrom = document.getElementById('dateFrom').value;
    var dateTo = document.getElementById('dateTo').value;
    if (!isValid(ip.value)) return console.log(ip);
    var ipList = document.querySelector(".ip-container");
    isOneIp(ip.value);
    var newItem = document.createElement('div');
    newItem.classList.add('ip-list');
    newItem.innerHTML = `
         <span> ${ip.value}</span> <button class="delete-button" onclick="removeIP(this)">×</button>
    `;
    ipList.appendChild(newItem);
    ip.value = '';
    return console.log(ip);

}
function removeIP(button){
       var rem = button.parentNode;
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


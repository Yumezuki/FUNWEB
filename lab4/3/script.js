const balanceElement = document.getElementById("balance");
const table = document.getElementById("table");

let balance = 0;

function addtable() {
  // รับค่าจากฟอร์ม
  const itemName = document.getElementById("itemName").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  const date = document.getElementById("date").value;

  // ตรวจสอบค่าที่กรอก
  if (!itemName || isNaN(amount) || !date) {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    return;
  }

  // อัพเดตยอดคงเหลือ
  if (type === "income") {
    balance += amount;
  } else if (type === "expense") {
    balance -= amount;
  }
  balanceElement.textContent = balance;

  // เพิ่มข้อมูลลงในตาราง
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${date}</td>
        <td>${itemName}</td>
        <td>${type === "income" ? amount : 0}</td>
        <td>${type === "expense" ? amount : 0}</td>
    `;
  table.appendChild(newRow);

  // ล้างค่าในฟอร์ม
  document.getElementById("form").reset();
}

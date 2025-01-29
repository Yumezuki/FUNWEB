function verifyForm(event) {
  event.preventDefault();

  const form = document.getElementById("userForm");

  form.classList.remove("was-validated");

  let isValid = true;

  // หมายเลขบัตรประชาชน
  let idinput = document.getElementById("id");
  if (idinput.value.length !== 13 || isNaN(parseInt(idinput.value))) {
    idinput.classList.add("is-invalid");
    isValid = false;
  } else {
    idinput.classList.remove("is-invalid");
    idinput.classList.add("is-valid");
  }

  // คำนำหน้า
  let ntitle = document.getElementById("name-title");
  if (ntitle.value === "") {
    ntitle.classList.add("is-invalid");
    isValid = false;
  } else {
    ntitle.classList.remove("is-invalid");
    ntitle.classList.add("is-valid");
  }

  // ชื่อ
  let fname = document.getElementById("firstname");
  if (fname.value.length < 2 || fname.value.length > 21) {
    fname.classList.add("is-invalid");
    isValid = false;
  } else {
    fname.classList.remove("is-invalid");
    fname.classList.add("is-valid");
  }

  // นามสกุล
  let lname = document.getElementById("lastname");
  if (lname.value.length < 2 || lname.value.length > 31) {
    lname.classList.add("is-invalid");
    isValid = false;
  } else {
    lname.classList.remove("is-invalid");
    lname.classList.add("is-valid");
  }

  // ที่อยู่
  let ads = document.getElementById("address");
  if (ads.value.length < 15) {
    ads.classList.add("is-invalid");
    isValid = false;
  } else {
    ads.classList.remove("is-invalid");
    ads.classList.add("is-valid");
  }

  // ตำบล
  let sub_dis = document.getElementById("sub-district");
  if (sub_dis.value.length < 2) {
    sub_dis.classList.add("is-invalid");
    isValid = false;
  } else {
    sub_dis.classList.remove("is-invalid");
    sub_dis.classList.add("is-valid");
  }

  // อำเภอ
  let dis = document.getElementById("district");
  if (dis.value.length < 2) {
    dis.classList.add("is-invalid");
    isValid = false;
  } else {
    dis.classList.remove("is-invalid");
    dis.classList.add("is-valid");
  }

  // จังหวัด
  let pv = document.getElementById("province");
  if (pv.value === "") {
    pv.classList.add("is-invalid");
    isValid = false;
  } else {
    pv.classList.remove("is-invalid");
    pv.classList.add("is-valid");
  }

  // รหัสไปรษณีย์
  let post = document.getElementById("postcode");
  if (post.value.length !== 5) {
    post.classList.add("is-invalid");
    isValid = false;
  } else {
    post.classList.remove("is-invalid");
    post.classList.add("is-valid");
  }

  if (isValid) {
    form.classList.add('was-validated');

    const formData = {
        id: idinput.value,
        title: ntitle.value,
        firstname: fname.value,
        lastname: lname.value,
        address: ads.value,
        subDistrict: sub_dis.value,
        district: dis.value,
        province: pv.value,
        postcode: post.value
    };

    saveToLocalStorage(formData);
    displayDataInModal();

    const modal = new bootstrap.Modal(document.getElementById('dataModal'));
    modal.show();

    form.reset();
    form.classList.remove('was-validated');
  }

}

function saveToLocalStorage(data) {
  let storedData = JSON.parse(localStorage.getItem('formData')) || [];
  storedData.push(data);
  localStorage.setItem('formData', JSON.stringify(storedData));
}

function displayDataInModal() {
    const modalContent = document.getElementById('modalContent');
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];

    if (storedData.length === 0) {
        modalContent.innerHTML = '<p>ยังไม่มีข้อมูลในระบบ</p>';
        return;
    }

    let content = '';
    storedData.forEach((item, index) => {
        content += `
          <div class="mb-3">
              <h5 class="mb-3">ข้อมูลผู้ใช้ #${index + 1}</h5>
              <p><strong>หมายเลขบัตรประชาชน :</strong> ${item.id}</p>
              <p><strong>คำนำหน้า :</strong> ${item.title}</p>
              <p><strong>ชื่อ :</strong> ${item.firstname}</p>
              <p><strong>นามสกุล :</strong> ${item.lastname}</p>
              <p><strong>ที่อยู่ :</strong> ${item.address}</p>
              <p><strong>ตำบล/แขวง :</strong> ${item.subDistrict}</p>
              <p><strong>อำเภอ/เขต :</strong> ${item.district}</p>
              <p><strong>จังหวัด :</strong> ${item.province}</p>
              <p><strong>รหัสไปรษณีย์ :</strong> ${item.postcode}</p>
          </div>
          <hr />`;
    });

    modalContent.innerHTML = content;
}

function resetLocalStorage() {
  localStorage.removeItem('formData');
  alert("ข้อมูลในระบบถูกรีเซ็ตเรียบร้อยแล้ว");
  displayDataInModal();
}


document.addEventListener('DOMContentLoaded', displayData);

function verifyForm(event) {
    event.preventDefault();

    const form = document.getElementById('userForm');
    const submitButton = document.getElementById('submitButton');

    form.classList.remove('was-validated');

    let isValid = true;

    // หมายเลขบัตรประชาชน
    let idinput = document.getElementById("id");
    if (idinput.value.length !== 13 || isNaN(parseInt(idinput.value))) {
      idinput.classList.add('is-invalid');
      isValid = false;
    } else {
      idinput.classList.remove('is-invalid');
    }

    // คำนำหน้า
    let ntitle = document.getElementById("name-title");
    if (ntitle.value === "") {
      ntitle.classList.add('is-invalid');
      isValid = false;
    } else {
      ntitle.classList.remove('is-invalid');
    }

    // ชื่อ
    let fname = document.getElementById("firstname");
    if (fname.value.length < 2 || fname.value.length > 21) {
      fname.classList.add('is-invalid');
      isValid = false;
    } else {
      fname.classList.remove('is-invalid');
    }

    // นามสกุล
    let lname = document.getElementById("lastname");
    if (lname.value.length < 2 || lname.value.length > 31) {
      lname.classList.add('is-invalid');
      isValid = false;
    } else {
      lname.classList.remove('is-invalid');
    }

    // ที่อยู่
    let ads = document.getElementById("address");
    if (ads.value.length < 15) {
      ads.classList.add('is-invalid');
      isValid = false;
    } else {
      ads.classList.remove('is-invalid');
    }

    // ตำบล
    let sub_dis = document.getElementById("sub-district");
    if (sub_dis.value.length < 2) {
      sub_dis.classList.add('is-invalid');
      isValid = false;
    } else {
      sub_dis.classList.remove('is-invalid');
    }

    // อำเภอ
    let dis = document.getElementById("district");
    if (dis.value.length < 2) {
      dis.classList.add('is-invalid');
      isValid = false;
    } else {
      dis.classList.remove('is-invalid');
    }

    // จังหวัด
    let pv = document.getElementById("province");
    if (pv.value === "") {
      pv.classList.add('is-invalid');
      isValid = false;
    } else {
      pv.classList.remove('is-invalid');
    }

    // รหัสไปรษณีย์
    let post = document.getElementById("postcode");
    if (post.value.length !== 5) {
      post.classList.add('is-invalid');
      isValid = false;
    } else {
      post.classList.remove('is-invalid');
    }

    if (isValid) {
      form.classList.add('was-validated');
      alert("Form submitted successfully!");
    }
  }
const container = document.getElementById('container');
const change = document.getElementById('change');

let isThai = true;

function renderForm() {
    container.innerHTML = "";

    if (isThai) {
        // สร้าง tag form
        const form = document.createElement('form');

        // สร้าง div ชื่อ นามสกุล และประเทศใน form
        const firstName = createFormGroup('ชื่อ', 'text');
        const lastName = createFormGroup('นามสกุล', 'text');
        const country = createSelectGroup('ประเทศ', [
            'เลือกประเทศ',
            'ไทย',
            'เวียดนาม',
            'ลาว',
            'มาเลเซีย',
            'สิงคโปร์',
            'ฟิลิปปินส์',
            'เมียนมาร์',
            'กัมพูชา',
            'บรูไน'
        ]);

        // เอา ชื่อ นามสกุล และประเทศ เข้าไปใน tag form
        form.appendChild(firstName);
        form.appendChild(lastName);
        form.appendChild(country);

        // เอา tag form เข้าไปใน div container
        container.appendChild(form);
    } else {
        const form = document.createElement('form');

        const firstName = createFormGroup('First Name', 'text');
        const lastName = createFormGroup('Last Name', 'text');
        const country = createSelectGroup('Country', [
            'Select a country',
            'Thailand',
            'Vietnam',
            'Laos',
            'Malaysia',
            'Singapore',
            'Philippines',
            'Myanmar',
            'Cambodia',
            'Brunei'
        ]);

        form.appendChild(firstName);
        form.appendChild(lastName);
        form.appendChild(country);

        container.appendChild(form);
    }
}

function createFormGroup(txt, mytype) {
    // สร้าง tag div
    const div = document.createElement('div');
    // ใช้ Bootstrap
    div.className = 'mb-3 row';

    const div2 = document.createElement('div');
    div2.className = 'col-9'

    // สร้าง tag label
    const label = document.createElement('label');
    label.className = 'col-3 col-form-label';
    label.textContent = txt;

    // สร้าง tag input
    const input = document.createElement('input');
    input.type = mytype;
    input.className = 'form-control';

    div2.appendChild(input);
    div.appendChild(label);
    div.appendChild(div2);

    return div;
}

function createSelectGroup(txt, options) {
    const div = document.createElement('div');
    div.className = 'mb-4 row';

    const div2 = document.createElement('div');
    div2.className = 'col-9'

    const label = document.createElement('label');
    label.className = 'col-3 col-form-label';
    label.textContent = txt;

    const select = document.createElement("select");
    select.className = "form-select";

    options.forEach(optionText => {
        const option = document.createElement("option");
        option.textContent = optionText;
        select.appendChild(option);
    });

    div2.appendChild(select);
    div.appendChild(label);
    div.appendChild(div2);

    return div;
}

function ChangeLanguage() {
    isThai = !isThai;
    if (isThai) {
        change.textContent = "เปลี่ยนเป็นภาษาอังกฤษ";
    } else {
        change.textContent = "Change to Thai";
    }
    renderForm();
}

renderForm();

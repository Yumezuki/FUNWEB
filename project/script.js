document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cityMenus = {
        Mondstadt: [
            { name: "Cold Cut Platter", img: "Menu/Mondstadt/1.png", desc: "จานที่เต็มไปด้วยเนื้อสัตว์ โดยประกอบด้วยเบคอน, แฮมและไส้กรอกในปริมาณที่เท่ากัน" },
            { name: "Calla Lily Seafood Soup", img: "Menu/Mondstadt/2.png", desc: "อาหารทะเลสด ๆในซุปเข้มข้นที่สมดุลไปด้วยคุณค่าทางอาหาร น้ำซุปสีจางๆอัดแน่นไปด้วยกลิ่นหอมและสดของปู" },
            { name: "Barbatos Ratatouille", img: "Menu/Mondstadt/3.png", desc: "อาหารง่าย ๆ ที่มีประวัติยาวนาน ใช้วัตถุดิบดั้งเดิมและเรียบง่ายความพึงพอใจที่ได้รับจากซุปเข้มข้นร้อน ๆ" },
            { name: "Pile 'Em Up", img: "Menu/Mondstadt/4.png", desc: "อาหารที่เน้นเนื้อแบบสุด ๆแรกเริ่มนั้นมาจากอาหารยอดนิยมที่มักจะทำกินกันตามบ้านใน Mondstadt" },
            { name: "Adventurer's Breakfast Sandwich", img: "Menu/Mondstadt/5.png", desc: "เมนูจากไข่ที่อุดมไปด้วยคุณค่าทางโภชนาการ" },
            { name: "Mondstadt Hash Brown", img: "Menu/Mondstadt/6.png", desc: "มันฝรั่งบดที่ปั้นเป็นก้อนแล้วนำไปทอดผสมด้วยลูกสนเล็กน้อยช่วยให้มันกรอบกำลังดี" },
            { name: "Apple Cider", img: "Menu/Mondstadt/7.png", desc: "เครื่องดื่มไม่มีแอลกอฮอล์ที่สดชื่นและเป็นที่นิยมมากลูกค้านักดื่มชอบสั่งมาเพื่อเป็นสัญลักษณ์ว่างานเลี้ยง" },
            { name: "Berry & Mint Burst", img: "Menu/Mondstadt/8.png", desc: "เครื่องดื่มไม่มีแอลกอฮอล์ที่สดชื่นและเป็นที่นิยมมากเครื่องดื่มมิ้นต์ที่ทำให้กระปรี้กระเปร่า" }
        ],
        Liyue: [
            { name: "Adeptus' Temptation", img: "Menu/Liyue/1.png", desc: "เมนูเลื่องชื่อของ Liyue ที่มีวิธีทำที่ซับซ้อน นำวัตถุดิบที่คัดสรรมาอย่างดีมาต้มในน้ำซุป ใช้ไฟอ่อนเคี่ยวอย่างช้า ๆ" },
            { name: "Salted Pork Soup", img: "Menu/Liyue/2.png", desc: "ซุปที่ผ่านการตุ๋นเป็นเวลานาน หน่อไม้ เนื้อสดและแฮมที่หั่นเป็นชิ้นตุ๋นด้วยไฟอ่อน ๆ จนน้ำซุปกลายเป็นสีขาว" },
            { name: "Black-Back Perch Stew", img: "Menu/Liyue/3.png", desc: "เนื้อปลามีความแน่นและเต็มไปด้วยรสชาติที่อร่อย ความลับของอาหารจานนี้คือมีการใส่ผงของ Violetgrass" },
            { name: "Almond Tofu", img: "Menu/Liyue/4.png", desc: "ของหวานที่มีน้ำราดซึ่งทำจากอัลมอนด์บด มีความนุ่มลื่นหอมหวานที่ไม่เหมือนอาหารชนิดไหน ๆ" },
            { name: "Chicken Tofu Pudding", img: "Menu/Liyue/5.png", desc: "อาหารที่ทำขึ้นอย่างพิถีพิถัน \"กินไก่โดยไม่เห็นไก่แต่มันดีเกินกว่าไก่\" นี่เป็นสุนทรียภาพอย่างหนึ่งในการทำอาหาร" },
            { name: "Braised Meatball", img: "Menu/Liyue/6.png", desc: "อาหารของชาว Liyue อาหารสำเร็จรูปนี้ได้รับความนิยมมาก โดยมักจะนำไปรับประทานที่บ้านหรือในงานเลี้ยง" },
            { name: "Jade Parcel", img: "Menu/Liyue/7.png", desc: "อาหารที่ดูประณีต ผักที่หอมอบอวลไปด้วย กลิ่นสดใหม่ของแฮม ราดด้วยน้ำซุปชั้นดี มีรสเผ็ดติดปลายลิ้นเล็กน้อย" },
            { name: "Chenyu Brew", img: "Menu/Liyue/8.png", desc: "อาหาร Liyue ธรรมดา บางครั้งเราอาจเปรียบเทียบชีวิตกับรสหวานที่ค้างอยู่ในคอเมื่อจิบชา" }
        ],
        Inazuma: [
            { name: "Tonkotsu Ramen", img: "Menu/Inazuma/1.png", desc: "เมนูเส้นร้อน ๆ เนื่อที่ปรุงด้วยอุณหภูมิต่ำวางไว้ด้านบนน้ำซุปรสเค็มและอร่อยแทรกซึมเข้าไปในเส้นบะหมี่" },
            { name: "Crab Roe Kourayaki", img: "Menu/Inazuma/2.png", desc: "เมนูเนื้อปูที่ย่างกับไฟโดยตรง เนื้อปูและไข่ปูที่คลุกเคล้าให้เข้ากันและตกแต่งด้วยเนื้อกรรเชียงปูอันอวบอั๋น" },
            { name: "Butter Crab", img: "Menu/Inazuma/3.png", desc: "เมนูเนื้อปูย่าง ความร้อนที่เหมาะสมช่วยให้เนื้อปูชุ่มและอวบบวกกับเนยที่ซึมเข้าไปในเนื้อปู" },
            { name: "Dry-Braised Salted Fish", img: "Menu/Inazuma/4.png", desc: "ปลาแห้งย่างไฟอ่อน เนื้อปลาแห้งในชั่วข้ามคืนหนังด้านนอกชุ่มไปด้วยทะเล และกลิ่นรสเค็มที่ยั่วยวนออกมา" },
            { name: "Egg Roll", img: "Menu/Inazuma/5.png", desc: "เมนูไข่ม้วน รสไข่ที่เข้ากันเป็นเมนูโอชะที่เรียบง่ายและเป็นที่นิยมในพื้นที่ Inazuma" },
            { name: "Berry Mizu Manjuu", img: "Menu/Inazuma/6.png", desc: "ขนมสีโปร่งใส ผิวชั้นนอกโปร่งใสห่อหุ้มไส้สีเหลืองเอาไว้คนขายบางคนจะนำมันใส่ลงไปในชามขนาดเล็ก" },
            { name: "Katsu Sandwich", img: "Menu/Inazuma/7.png", desc: "ขนมปังประกบกับสเต๊กชิ้นหนาตัดเลี่ยนรสชาติมันเยิ้มด้วยซอสเปรี้ยวหวานเล็กน้อย ผสมผสานกันอย่างลงตัว" },
            { name: "Dango Milk", img: "Menu/Inazuma/8.png", desc: "ของว่างสุดสร้างสรรค์ที่ทำโดยใส่ ดังโงะเหนียว ๆ ลงใน นมมีรสชาติหวานรสสัมผัสนุ่มหนึบ ไม่ว่าใครลองก็ติดใจ" }
        ],
        Sumeru: [
            { name: "Aaru Mixed Rice", img: "Menu/Sumeru/1.png", desc: "อาหารจานหลักที่อิ่มท้องรสชาติอร่อยถูกปากด้วยรสชาติหวานอมเปรี้ยวจากมะเขือเทศ" },
            { name: "Biryani", img: "Menu/Sumeru/2.png", desc: "ข้าวหอมมะลิ เนื้อกรอบนอกนุ่มในอาหารจานนี้มีรสชาติเลิศรสที่พบได้เฉพาะในพระสุเมรุเท่านั้น" },
            { name: "Butter Chicken", img: "Menu/Sumeru/3.png", desc: "เมนูรสชาติจัดจ้าน ผสมเครื่องเทศและมะเขือเทศสับกับเนยอุ่นๆแล้วปรุงด้วยซอสครีม" },
            { name: "Candied Ajilenakh Nut", img: "Menu/Sumeru/4.png", desc: "ขนมหวานรสชาติเข้มข้น ว่ากันว่าดินแดนอันหนาวเหน็บของ Snezhnayaนั้นมีอาหารจานเดียวกัน" },
            { name: "Baklava", img: "Menu/Sumeru/5.png", desc: "ขนมพัฟเพสตรี้แบบดั้งเดิม นักวิจัยบางคนจะสั่งขนม“ป้อมปราการแห่งความหวาน” นี้เพื่อเติมพลังก่อนสอบ" },
            { name: "Charcoal-Baked Ajilenakh Cake", img: "Menu/Sumeru/6.png", desc: "ขนมอบสีเข้มที่ดูไม่น่าประทับใจเลย แต่มีกลิ่นหอมสดชื่นของถั่วAjilenakh" },
            { name: "Curry Shrimp", img: "Menu/Sumeru/7.png", desc: "อาหารพื้นบ้านของชาว Sumeruส่วนผสมที่ลงตัวระหว่างแกงกะหรี่รสเผ็ดและรสชาติจากมหาสมุทร" },
            { name: "Panipuri", img: "Menu/Sumeru/8.png", desc: "อาหารเรียกน้ำย่อยเสิร์ฟพร้อมน้ำจิ้มสีเขียวของว่างขนาดพอดีคำนี้เป็นอาหารข้างทางที่พบเห็นได้ทั่วไปใน Sumeru" }
        ],
        Fontaine: [
            { name: "Barbeque Ribs", img: "Menu/Fontaine/1.png", desc: "ย่างด้วยไฟอ่อนควบคุมอุณหภูมิอย่างพิถีพิถันทำให้เนื้อซี่โครงกรอบนอกนุ่มในส่วนเนื้อซี่โครงยังคงความชุ่มฉ่ำ" },
            { name: "Boudin Noir aux Pommes", img: "Menu/Fontaine/2.png", desc: "อาหารดั้งเดิมของ Fontainian ที่นักท่องเที่ยวมักคิดว่าเป็นของหวานแต่เป็นเพียงไส้กรอกเท่านั้น" },
            { name: "Bulle Sauce Duck Breast", img: "Menu/Fontaine/3.png", desc: "เมนูเนื้อที่หอมกลิ่นผลไม้และซอสรสเปรี้ยวหวานที่เข้ากันได้อย่างลงตัว เป็นอาหารเลิศรสของ Fontainian" },
            { name: "Bulle Souffle", img: "Menu/Fontaine/4.png", desc: "เค้กขนาดเล็กที่ซ่อนตัวอยู่ในเปลือกผลไม้ Bulle Fruitทำให้ลิ้นได้ลิ้มรสกับความนุ่มฟู" },
            { name: "Cassoulet", img: "Menu/Fontaine/5.png", desc: "สตูว์ชนบทแบบง่ายๆ ชื่อที่ยาวเหยียดทำให้หลายคนเรียกเมนูนี้ว่า\"Cassoulet\" ซึ่งก็เข้าใจได้" },
            { name: "Blubber Profiterole", img: "Menu/Fontaine/6.png", desc: "ขนมหวานไส้ครีม เปลือกพายที่นุ่มฟูและครีมเข้มข้นอยู่ภายในกลมและแทบจะแตกออก" },
            { name: "Fruity Trio", img: "Menu/Fontaine/7.png", desc: "ของหวานที่ให้ความรู้สึกโรแมนติก อาหารจานนี้มีกลิ่นผลไม้จึงเป็นตัวเลือกที่ดีสำหรับเป็นของว่างหลังอาหาร" },
            { name: "Pure Water", img: "Menu/Fontaine/8.png", desc: "ว่ากันว่าเป็นมรดกจากนักปรุงยาอัจฉริยะมันสามารถดึงเอาพลังบริสุทธิ์จากภายในร่างกายออกมาได้" }
        ],
        Natlan: [
            { name: "BBQ Beef Heart Skewers", img: "Menu/Natlan/1.png", desc: "บาร์บีคิวตามแผงขายอาหารริมถนนที่พบเห็นได้ทั่วไปกลิ่นหอมชวนรับประทานและเนื้อวาวที่ชวนหลงใหล" },
            { name: "Forest of Color", img: "Menu/Natlan/2.png", desc: "สลัดที่ทำจากผลไม้และผักสด แต่ที่สำคัญกว่านั้นคือดีต่อสุขภาพมากไม่ว่าคุณจะกินมากแค่ไหนก็ไม่เครียด!" },
            { name: "Fried Shrimp Beanballs", img: "Menu/Natlan/3.png", desc: "ขนมทอดกรอบ แป้งถั่วที่ไปทอด ใส่ไส้กุ้งทอด และซอสแม้ว่าจะทำยากสักหน่อย แต่รับรองว่าอร่อยจนต้องบอกต่อ" },
            { name: "Blazed Meat Stew", img: "Menu/Natlan/4.png", desc: "สตูว์เนื้อรสเผ็ด ปรุงรสด้วยเครื่องเทศ กลิ่นหอมฉุยหากไม่รู้จะกินอะไรในเวลาเฉลิมฉลอง ต้องเมนูนี้!" },
            { name: "Cup O' Grainfruit", img: "Menu/Natlan/5.png", desc: "ขนมที่ทำจากเมล็ดเกรนฟรุต เมล็ดเกรนฟรุตแต่ละเมล็ดจะมีรสชาติชุ่มฉ่ำหอมหวาน และหวานจนหยุดไม่ได้" },
            { name: "Chocolate", img: "Menu/Natlan/6.png", desc: "ขนมทรงกลมเล็กๆ ช็อกโกแลตที่รสชาติเป็นเอกลักษณ์เฉพาะตัวไม่มีทางรู้เลยว่าเมื่อกัดคำต่อไปจะได้รสชาติแบบไหน" },
            { name: "Xocoatl", img: "Menu/Natlan/7.png", desc: "เครื่องดื่ม Natlan ที่ทำจาก Cacahuatlและได้รับความนิยมอย่างกว้างขวาง แม้ว่าจะมีชื่อ \"น้ำขม\" ก็ตาม" },
            { name: "Strength Tonic", img: "Menu/Natlan/8.png", desc: "ยาที่มีต้นกำเนิดมาจากปริศนาที่มีสูตรง่ายๆบางคนอาจเรียกว่าเป็นเครื่องดื่มเพื่อสุขภาพก็ได้" }
        ]
    };

    function createMenuCard(menuItem) {
        const col = document.createElement("div");
        col.className = "col pb-3";

        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = menuItem.img;
        img.alt = menuItem.name;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = menuItem.name;

        const desc = document.createElement("p");
        desc.className = "card-text";
        desc.textContent = menuItem.desc;

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        return col;
    }

    function renderCityMenus() {
        for (const city in cityMenus) {
            const section = document.querySelector(`#${city} .row`);
            if (section) {
                section.innerHTML = "";
                cityMenus[city].forEach(menuItem => {
                    section.appendChild(createMenuCard(menuItem));
                });
            }
        }
    }

    renderCityMenus();
});

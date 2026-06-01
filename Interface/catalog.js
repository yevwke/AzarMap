const catalogItems=[{title:"Путеводитель №1",description:"Первое знакомство с миром. Описание ключевых элементов сеттинга.",image:"covers/guide.webp",type:"link",url:"https://drive.google.com/file/d/14PV5jAM0qxoEL2gvIY-pOpGO4Stkgp16/view?usp=drive_link"},{title:"Следы на снегу",description:"Памятка о родах, духах и том, как устроена жизнь на Равнине.",image:"covers/sled.webp",type:"link",url:"https://drive.google.com/file/d/1gUKMC5ZHGOD46RxGGe7HgF2xXPB9Nkrn/view?usp=drive_link"},{title:"Охота на Земляного зверя",description:"Бессистемный модуль в духе старой школы про поиски легендарного чудовища.",image:"covers/hunt b.webp",type:"link",url:"https://drive.google.com/file/d/1rDLm4JA6IwQ5oCmjdPz4rznwPERk5GBz/view?usp=drive_link"},{title:"Круг",description:"Небольшая соло-игра, где вам предстоит взять на себя роль тагировода (оленевода).",image:"covers/crug.webp",type:"link",url:"https://drive.google.com/file/d/19yhKfyLBZEJzyG7Uf2EUp9tn452tnu8j/view?usp=drive_link"},{title:"Голод",description:"Hexcrawl модуль на правилах Пророчества о том, как дух Голода начал пожирать мир живых.",image:"covers/golod.webp",type:"link",url:"https://rpgbook.ru/prophecy_hunger?search=%D0%B3%D0%BE%D0%BB%D0%BE%D0%B4&description=true"},{title:"Стая",description:"небольшая брошюра с набором таблиц, сюжетных крючков и списком опасных и разумных противников.",image:"covers/staya.webp",type:"link",url:"https://drive.google.com/file/d/1x1dTnFJaN1ucA5qRcK8m6Btgmfi8m-em/view"},{title:"Менгир",description:"Хак на НРИ Cairn для игр в сеттинге Азар.",image:"covers/mengir.webp",type:"link",url:"https://drive.google.com/drive/folders/1rwXirDCx0XZWRtx7Kvo9ZqPItLozO-sD"},{title:"Народы равнины",description:"Адаптация Азара под правила Dungeon and Dragons пятой редакции.",image:"covers/dnd.webp",type:"link",url:"https://docs.google.com/document/d/1C9fcOKKnwvAafyTH6HKNaKI6jZWbprCDfBYFEiZRQKY/edit?tab=t.0"},{title:"Все материалы",description:"Google drive со всеми материалами.",image:"covers/drive.webp",type:"link",url:"https://drive.google.com/drive/folders/1eZSdk-_dgoiuZsRI0A1z-4QOhBsmq4z1"}],catalogContainer=document.getElementById("tab-catalog");catalogContainer.innerHTML=`
  <div class="catalog-list">
    ${catalogItems.map(e=>`
      <button class="catalog-item" onclick="openCatalogItem('${e.type}', '${e.file||e.url}')">
        <img src="${e.image}" alt="${e.title}">
        <div class="catalog-info">
          <h4>${e.title}</h4>
          <p>${e.description}</p>
        </div>
      </button>
    `).join("")}
  </div>
`;const communityItems=[{title:"Рассказы Темнейшей ночи",description:"Сборник завязок, подготовленных в рамках Азар-jam 2024.",image:"covers/night.webp",type:"link",url:"https://rpgbook.ru/tales_of_the_darkest_night"},{title:"Святилище",description:"Пять точек интереса, описывающих места поклонения духам.(автор sha_kate).",image:"covers/sanctuary.webp",type:"link",url:"https://drive.google.com/drive/folders/15fBxkrKzFNmEM5XERayoK7MNdMp3FvbC"},{title:"Бот для Круга",description:"Соло-игра Круг в телегам-боте.(автор Кирилл Шматов).",image:"covers/crug.webp",type:"link",url:"https://t.me/azar_circle_bot"},{title:"Окрылье-щит",description:"Предмет для DnD, вдохновленный защитным снаряжением народов Дальнего Востока.(автор Lui).",image:"covers/shield.webp",type:"link",url:"https://docs.google.com/document/d/179KW9c7eN6fwd7jAxqDB_t8rLeD3eJ1h/edit"},{title:"Соначорр",description:"Завязка сюжета, описывающая магический артефакт — искусственное магическое солнце.(автор ArtoLord).",image:"covers/soo.webp",type:"link",url:"https://drive.google.com/file/d/1ivIuO3JG79k-58fY3S1CRo-oB777VGK3/view?usp=drive_link"},{title:"Напитки",description:"Несколько напитков и способов их приготовления для ваших игр на Азаре.(автор Vit-Vit).",image:"covers/alko.webp",type:"link",url:"https://docs.google.com/document/d/1UAaGf5I_U-UXmJlT5-JolEsYR0FFZOis/edit"}],communityContainer=document.getElementById("tab-community");function openCatalogItem(e,t){let i=document.getElementById("sidebar");if(i&&(i.style.right=window.innerWidth<=810?"-105%":"-33%",setTimeout(()=>{i.classList.add("sidebar-hidden")},400)),"pdf"===e){let o=document.getElementById("top-layer");o.classList.remove("sidebar-hidden"),o.innerHTML=`

      <iframe src="${t}" style="width:100%; height:100%; border:none;"
      //sandbox="allow-scripts allow-same-origin"
      ></iframe>
    `,o.classList.add("open")}else"link"===e&&window.open(t,"_blank")}function closeTopLayer(){let e=document.getElementById("top-layer");e.classList.remove("open"),setTimeout(()=>{e.classList.add("sidebar-hidden")},400)}communityContainer.innerHTML=`
 <div class="catalog-list">
   ${communityItems.map(e=>`
     <button class="catalog-item" onclick="openCatalogItem('${e.type}', '${e.file||e.url}')">
       <img src="${e.image}" alt="${e.title}">
       <div class="catalog-info">
         <h4>${e.title}</h4>
         <p>${e.description}</p>
       </div>
     </button>
   `).join("")}
 </div>
`;
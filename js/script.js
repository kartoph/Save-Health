console.log('Script connected!');

const arrayOfFluTips = [
  "Пийте багато теплої рідини для зволоження",  
  "Відпочивайте і надайте організму час на відновлення",  
  "Зволожуйте повітря в кімнаті для полегшення дихання", 
  "Приймайте жарознижувальні засоби при необхідності",  
  "Вживайте вітамін C для підтримки імунітету",  
  "Частіше провітрюйте приміщення",  
  "Мийте руки, щоб уникнути повторного зараження",  
  "Забезпечте собі теплу і зручну обстановку",  
  "Уникайте фізичних навантажень до повного одужання", 
  "Вживайте легку і поживну їжу",  
  "Полощіть горло теплим розчином солі",  
  "Застосовуйте назальні спреї для полегшення нежитю",  
  "Використовуйте інгаляції для зняття закладеності носа", 
  "Слідкуйте за температурою тіла і звертайтесь до лікаря при потребі",  
  "Спіть достатньо для кращого відновлення",  
  "Не займайтесь самолікуванням – консультуйтесь із лікарем",  
  "Уникайте контакту з іншими для запобігання поширенню вірусу",  
  "Використовуйте теплі компреси для зняття головного болю",  
  "Пийте чай із медом та лимоном для полегшення симптомів",  
  "Дотримуйтесь рекомендацій лікаря і не переривайте лікування" 
];

let countOfPills = 5;

function updatePillsButton() {
  let pillsText = '';
  for (let i = 0; i < countOfPills; i++) {
      pillsText += '💊';
  }
  for (let i = countOfPills; i < 5; i++) {
      pillsText += '❌';
  }
  document.getElementById('count-of-pills').textContent = pillsText;
};

document.getElementById("btn-buy-pill").addEventListener("click", function() {
  countOfPills = 5;
  updatePillsButton();   
  document.getElementById("healthMessage").textContent = "Пігулки відновлені. Готові для використання!";
});

document.getElementById("healthMessage").textContent = "";

document.getElementById("Wishes_btn").addEventListener("click", function() {
  if (countOfPills > 0) {
      const randomIndex = Math.floor(Math.random() * arrayOfFluTips.length);
      document.getElementById("p_Wishes").textContent = arrayOfFluTips[randomIndex];
      countOfPills--;  
      updatePillsButton();  
  } else {
      document.getElementById("p_Wishes").textContent = "Пігулки закінчилися! Купіть нові.";
  }
});

updatePillsButton();

let img = 1;

document.getElementById("left-arrow").addEventListener("click", () => {
  console.log('Left arrow clicked!');
  img--;
  console.log(img);
  if (img == 0) {
    img = 3;
  }
  document.getElementById('main-image').setAttribute('src', `img/${img}.jpg`);
});

document.getElementById("right-arrow").addEventListener("click", () => {
  console.log('Right arrow clicked!');
  img++;
  console.log(img);
  if (img == 4) {
    img = 1;
  }
  document.getElementById('main-image').setAttribute('src', `img/${img}.jpg`);
});

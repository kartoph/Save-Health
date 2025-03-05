console.log('Scrip connected!');

const arrayOfFluTips = [
  "Пийте багато теплої рідини для зволоження",  //0
  "Відпочивайте і надайте організму час на відновлення",  //1
  "Зволожуйте повітря в кімнаті для полегшення дихання", //2 
  "Приймайте жарознижувальні засоби при необхідності",  //3
  "Вживайте вітамін C для підтримки імунітету",  //4
  "Частіше провітрюйте приміщення",  //5
  "Мийте руки, щоб уникнути повторного зараження",  //6
  "Забезпечте собі теплу і зручну обстановку",  //7
  "Уникайте фізичних навантажень до повного одужання", //8 
  "Вживайте легку і поживну їжу",  //9
  "Полощіть горло теплим розчином солі",  //10
  "Застосовуйте назальні спреї для полегшення нежитю",  //11
  "Використовуйте інгаляції для зняття закладеності носа", //12 
  "Слідкуйте за температурою тіла і звертайтесь до лікаря при потребі",  //13
  "Спіть достатньо для кращого відновлення",  //14
  "Не займайтесь самолікуванням – консультуйтесь із лікарем",  //15
  "Уникайте контакту з іншими для запобігання поширенню вірусу",  //16
  "Використовуйте теплі компреси для зняття головного болю",  //17
  "Пийте чай із медом та лимоном для полегшення симптомів",  //18
  "Дотримуйтесь рекомендацій лікаря і не переривайте лікування" //19
];
  

document.getElementById('Wishes_btn').addEventListener('click' , () => {

  console.log('Button clicked!');
    
    let index = Math.floor(Math.random() * arrayOfFluTips.length)
    
  console.log('Номер елементу масиву:', index);

    document.getElementById('p_Wishes').innerText = arrayOfFluTips[index];   

})

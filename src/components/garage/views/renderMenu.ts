export const renderMenu = (carsAmount: number) => `
  <div class="menu">
    <div class="menu__create">
      <input type="text" class="menu__create-input_name" placeholder="name car">
      <input type="color" class="menu__create-input_color">
      <button class="menu__create-btn">CREATE</button>
    </div>
    <div class="menu__update">
      <input type="text" class="menu__update-input_name" placeholder="name car">
      <input type="color" class="menu__update-input_color" value="#FBC33B">
      <button class="menu__update-btn">UPDATE</button>
    </div>

    <div class="menu__btns">
      <button class="menu__btn-race">RACE</button>
      <button class="menu__btn-reset">RESET</button>
      <button class="menu__btn-generate">GENERATE CARS</button>
    </div>

    <div class="menu__amount">Cars amount <span>${carsAmount.toString()}</span></div>
  </div>
`;
import { defineStore } from 'pinia';

export const useMenuStore = defineStore('MenuStore', {
  state: () => ({
    Бургеры: [
      {
        id: 1,
        type: "Бургеры",

        name: "Мясная бомба",
        img: "assets/img/png/Burgers/Мясная бомба.png",

        cost: 689,
        weight: 520,
        calorie: 430,

        description: "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
        composition: {
          1: "Пшеничная булочка",
          2: "Котлета из говядины",
          3: "Красный лук",
          4: "Листья салата",
          5: "Соус горчичный"
        },
      },
      {
        id: 2,
        type: "Бургеры",
        name: "Супер Сырный",
        img: "assets/img/png/Burgers/Супер Сырный.png",
        cost: 749,
        weight: 540,
        calorie: 450,
        description: "Максимум сыра в одном бургере! Две котлеты, обильное количество плавленого сыра и соус на основе сметаны создают идеальное сочетание.",
        composition: {
          1: "Пшеничная булочка",
          2: "Две котлеты из говядины",
          3: "Плавленый сыр",
          4: "Красный лук",
          5: "Соус сметанный"
        }
      },
      {
        id: 3,
        type: "Бургеры",
        name: "Итальянский",
        img: "assets/img/png/Burgers/Итальянский.png",
        cost: 699,
        weight: 500,
        calorie: 420,
        description: "Настоящий итальянский вкус! Котлета из говядины, моцарелла, томатный соус и листья базилика.",
        composition: {
          1: "Пшеничная булочка",
          2: "Котлета из говядины",
          3: "Моцарелла",
          4: "Томатный соус",
          5: "Листья базилика"
        }
      },
      {
        id: 4,
        type: "Бургеры",
        name: "Сытный",
        img: "assets/img/png/Burgers/Сытный.png",
        cost: 729,
        weight: 560,
        calorie: 470,
        description: "Бургер для настоящих гурманов! Говяжья котлета, бекон, яйцо и карамелизированный лук.",
        composition: {
          1: "Пшеничная булочка",
          2: "Котлета из говядины",
          3: "Бекон",
          4: "Яйцо",
          5: "Карамелизированный лук"
        }
      },
      {
        id: 5,
        type: "Бургеры",
        name: "Тяжелый удар",
        img: "assets/img/png/Burgers/Тяжелый удар.png",
        cost: 799,
        weight: 580,
        calorie: 500,
        description: "Для тех, кто не боится тяжёлого блюда. Две котлеты, острый перец и хрустящий бекон.",
        composition: {
          1: "Пшеничная булочка",
          2: "Две котлеты из говядины",
          3: "Острый перец",
          4: "Бекон",
          5: "Соус чили"
        }
      },
      {
        id: 6,
        type: "Бургеры",
        name: "Вечная Классика",
        img: "assets/img/png/Burgers/Вечная классика.png",
        cost: 659,
        weight: 480,
        calorie: 400,
        description: "Непревзойдённая классика, которая не выйдет из моды. Говяжья котлета, сыр, помидор и салат.",
        composition: {
          1: "Пшеничная булочка",
          2: "Котлета из говядины",
          3: "Сыр чеддер",
          4: "Помидор",
          5: "Листья салата"
        }
      }
    ],
    Закуски: [
      {
        id: 1,
        type: "Закуски",
        name: "Начос",
        img: "assets/img/png/Snacks/Начос.png",
        cost: 250,
        weight: 220,
        calorie: 320,
        description: "Хрустящие кукурузные начос с пикантным сырным соусом и легким ароматом специй. Идеальная закуска для быстрого перекуса.",
        composition: {
          1: "Кукурузные чипсы",
          2: "Сырный соус",
          3: "Специи"
        }
      },
      {
        id: 2,
        type: "Закуски",
        name: "Картошка фри",
        img: "assets/img/png/Snacks/Картошка фри.png",
        cost: 245,
        weight: 180,
        calorie: 290,
        description: "Классическая картошка фри, обжаренная до золотистой корочки. Идеальный выбор для любителей хрустящего и сытного гарнира.",
        composition: {
          1: "Картофель",
          2: "Растительное масло",
          3: "Соль"
        }
      },
      {
        id: 3,
        type: "Закуски",
        name: "Луковые кольца",
        img: "assets/img/png/Snacks/Луковые кольца.png",
        cost: 230,
        weight: 160,
        calorie: 310,
        description: "Золотистые луковые кольца с хрустящей корочкой и нежным луком внутри. Прекрасное дополнение к любому блюду.",
        composition: {
          1: "Лук",
          2: "Панировочные сухари",
          3: "Растительное масло",
          4: "Специи"
        }
      }          
    ],
    Хотдоги: [
      {
        id: 1,
        type: "Хотдоги",
        name: "Домашний хот-дог",
        img: "assets/img/png/HotDogs/Домашний хот-дог.png",
        cost: 290,
        weight: 250,
        calorie: 360,
        description: "Домашний хот-дог с сочной сосиской, маринованными огурцами и соусом на основе майонеза и горчицы. Напоминает вкус детства!",
        composition: {
          1: "Булочка для хот-дога",
          2: "Сосиска",
          3: "Маринованные огурцы",
          4: "Соус майонезный",
          5: "Горчица"
        }
      },
      {
        id: 2,
        type: "Хотдоги",
        name: "Жгучий хот-дог",
        img: "assets/img/png/HotDogs/Жгучий хот-дог.png",
        cost: 239,
        weight: 245,
        calorie: 370,
        description: "Хот-дог для любителей острого! Сосиска, острый соус с халапеньо и ломтики красного лука создают жгучую комбинацию.",
        composition: {
          1: "Булочка для хот-дога",
          2: "Сосиска",
          3: "Острый соус",
          4: "Перец халапеньо",
          5: "Красный лук"
        }
      },
      {
        id: 3,
        type: "Хотдоги",
        name: "Классический хот-дог",
        img: "assets/img/png/HotDogs/Классический хот-дог.png",
        cost: 220,
        weight: 215,
        calorie: 330,
        description: "Классический хот-дог с сосиской, кетчупом и горчицей. Простой, но невероятно вкусный.",
        composition: {
          1: "Булочка для хот-дога",
          2: "Сосиска",
          3: "Кетчуп",
          4: "Горчица"
        }
      }      
    ],
    basket: [ ]
  }),

  getters: {
    getCountPositions: (state) => {
      return state.basket.reduce((total, item) => total + item.amount, 0);
    },

    getCostOfBasket: (state) => {
      return state.basket.reduce((total, item) => {
        const items = state[item.type];
        const product = items.find(product => product.id === item.id);
        return total + (product ? product.cost * item.amount : 0);
      }, 0);
    },

    getBasketItems: (state) => {
      return state.basket.map(item => {
        const items = state[item.type];
        const product = items.find(product => product.id === item.id);
        return product ? { ...product, amount: item.amount } : null;
      }).filter(item => item !== null);
    },

    getAmountOfItem: (state) => (type, id) => {
      const item = state.basket.find(item => item.type === type && item.id === id);
      return item ? item.amount : 0;
    },

    getPositionsByType: (state) => (type) => {
      if (state[type]) {
        return state[type];
      }
      return [];
    }
  },

  actions: {
    addToBasket(type, id, amount) {
      const itemIndex = this.basket.findIndex(item => item.type === type && item.id === id);
    
      if (itemIndex > -1) {
        this.basket[itemIndex].amount += amount;
        return this.basket[itemIndex].amount;
      } else {
        this.basket.push({ type, id, amount });
        return amount;
      }
    },    

    removeFromBasket(type, id, amount) {
      const itemIndex = this.basket.findIndex(item => item.type === type && item.id === id);

      if (itemIndex > -1) {
        if (this.basket[itemIndex].amount <= amount) {
          this.basket.splice(itemIndex, 1);

          return null;
        } else {
          this.basket[itemIndex].amount -= 1;

          return this.basket[itemIndex].amount;
        }
      }
    }
  }
});

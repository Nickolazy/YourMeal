import { defineStore } from 'pinia';

export const useMenuStore = defineStore('MenuStore', {
  state: () => ({
    burgers: [
      {
        id: 1,
        type: "burgers",

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
        type: "burgers",
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
        type: "burgers",
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
        type: "burgers",
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
        type: "burgers",
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
        type: "burgers",
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
    snacks: [
      {
        id: 1,
        type: "snacks",
        name: "Хрустящие картофельные палочки",
        img: "assets/img/png/Snacks/Хрустящие картофельные палочки.png",
        cost: 349,
        weight: 300,
        calorie: 400,
        description: "Золотистые палочки из картофеля с хрустящей корочкой. Подаются с соусом по вашему выбору.",
        composition: {
          1: "Картофель",
          2: "Мука",
          3: "Соль",
          4: "Перец",
          5: "Соус (по выбору)"
        }
      },
      {
        id: 2,
        type: "snacks",
        name: "Чизстики",
        img: "assets/img/png/Snacks/Чизстики.png",
        cost: 399,
        weight: 250,
        calorie: 350,
        description: "Хрустящие палочки из сыра, обжаренные до золотистой корочки. Идеальны в качестве закуски.",
        composition: {
          1: "Сыр моцарелла",
          2: "Мука",
          3: "Яйцо",
          4: "Сухари",
          5: "Соль"
        }
      },
      {
        id: 3,
        type: "snacks",
        name: "Острые куриные крылышки",
        img: "assets/img/png/Snacks/Острые куриные крылышки.png",
        cost: 449,
        weight: 400,
        calorie: 550,
        description: "Сочные куриные крылышки, маринованные в остром соусе и обжаренные до хрустящей корочки.",
        composition: {
          1: "Куриные крылышки",
          2: "Острый соус",
          3: "Соль",
          4: "Перец",
          5: "Специи"
        }
      },
      {
        id: 4,
        type: "snacks",
        name: "Луковые кольца",
        img: "assets/img/png/Snacks/Луковые кольца.png",
        cost: 379,
        weight: 280,
        calorie: 420,
        description: "Хрустящие луковые кольца, обжаренные в панировке. Подаются с соусом ранч.",
        composition: {
          1: "Лук",
          2: "Мука",
          3: "Яйцо",
          4: "Сухари",
          5: "Соус ранч"
        }
      },
      {
        id: 5,
        type: "snacks",
        name: "Куриные наггетсы",
        img: "assets/img/png/Snacks/Куриные наггетсы.png",
        cost: 399,
        weight: 300,
        calorie: 450,
        description: "Мягкие и сочные куриные наггетсы, обжаренные до золотистой корочки. Подаются с соусом барбекю.",
        composition: {
          1: "Куриное филе",
          2: "Мука",
          3: "Яйцо",
          4: "Сухари",
          5: "Соус барбекю"
        }
      },
      {
        id: 6,
        type: "snacks",
        name: "Мини-буррито",
        img: "assets/img/png/Snacks/Мини-буррито.png",
        cost: 429,
        weight: 250,
        calorie: 380,
        description: "Миниатюрные буррито с начинкой из говядины, сыра и овощей. Подаются с соусом гуакамоле.",
        composition: {
          1: "Тортилья",
          2: "Говядина",
          3: "Сыр",
          4: "Овощи",
          5: "Соус гуакамоле"
        }
      }      
    ],
    basket: [
      { type: "burgers", id: 1, amount: 1},
      { type: "burgers", id: 4, amount: 2},
      { type: "burgers", id: 2, amount: 3},
      { type: "burgers", id: 6, amount: 2},
    ]
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
    }
  },

  actions: {
    addToBasket(type, id) {
      const amount = 1;
      const itemIndex = this.basket.findIndex(item => item.type === type && item.id === id);
      if (itemIndex !== -1) {
        this.basket[itemIndex].amount += amount;

      } else {
        this.basket.push({ type, id, amount });

      }
    },

    removeFromBasket(type, id) {
      const amount = 1;
      const itemIndex = this.basket.findIndex(item => item.type === type && item.id === id);
      if (itemIndex !== -1) {
        if (this.basket[itemIndex].amount <= amount) {
          this.basket.splice(itemIndex, 1);
        } else {
          this.basket[itemIndex].amount -= amount;
        }
      }
    }
  }
});

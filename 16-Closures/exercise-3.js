function createStore() {
  const store = [];
  return function (items) {
    store.push(items);
    console.log(store);
  };
}

const redPants = { id: 1, name: "Red Pants" };
const whiteHat = { id: 2, name: "White Hat" };
const brownShirt = { id: 3, name: "Brown Shirt" };
const blackSneakers = { id: 4, name: "Black Sneakers" };
const whiteSneakers = { id: 5, name: "White Sneakers" };

console.log("--- Dress Store ---");
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);
dressStore(brownShirt);

console.log("--- Shoes Store ---");
const shoesStore = createStore();
shoesStore(blackSneakers);
shoesStore(whiteSneakers);

// HO AGGIUNTO ITEMS PER VERIFICARE ALCUNI COMPORTAMENTI SOSPETTI

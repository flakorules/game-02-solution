import { AgedBrieUpdater } from "../app/AgedBrieUpdater";
import { Item } from "../app/gilded-rose";

test("It should decrease sellIn in 1", () => {
  let item = new Item("Aged Brie", 10, 10);
  let updater = new AgedBrieUpdater(item);

  item = updater.update();

  expect(item.sellIn).toBe(9);
  expect(item.quality).toBe(11);
});

test("'Aged Brie' actually increases in Quality the older it gets", () => {
    let item = new Item("Aged Brie", 10, 10);
    let updater = new AgedBrieUpdater(item);
  
    item = updater.update();
  
    expect(item.quality).toBe(11);
  });

  test("The Quality of an item is never negative", () => {
    let item = new Item("Aged Brie", 10, 0);
    let updater = new AgedBrieUpdater(item);
  
    item = updater.update();
  
    expect(item.quality).toBe(1);
  });

  test("The Quality of an item is never more than 50", () => {
    let item = new Item("Aged Brie", 10, 50);
    let updater = new AgedBrieUpdater(item);
  
    item = updater.update();
  
    expect(item.quality).toBe(50);
  });

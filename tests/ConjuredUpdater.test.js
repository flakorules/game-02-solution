import { ConjuredUpdater } from "../app/ConjuredUpdater";
import { Item } from "../app/gilded-rose";

test("It should decrease sellIn in 1", () => {
  let item = new Item("Conjured", 10, 10);
  let updater = new ConjuredUpdater(item);

  item = updater.update();

  expect(item.sellIn).toBe(9);
});

test("The Quality of an item is never negative", () => {
  let item = new Item("Conjured", 10, 0);
  let updater = new ConjuredUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(0);
});

test("10 days left and quality of 1, quality should be updated to 0", () => {
  let item = new Item("Conjured", 10, 1);
  let updater = new ConjuredUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(0);
});

test("10 days left and quality of 2, quality should be updated to 0", () => {
  let item = new Item("Conjured", 10, 2);
  let updater = new ConjuredUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(0);
});

test("The Quality of an item is never more than 50", () => {
  let item = new Item("Conjured", 10, 50);
  let updater = new ConjuredUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(48);
});

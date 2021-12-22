import { BackstagePassesUpdater } from "../app/BackstagePassesUpdater";
import { Item } from "../app/gilded-rose";

test("It should decrease sellIn in 1", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.sellIn).toBe(9);
});

test("The Quality of an item is never negative", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 0);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(1);
});

test("The Quality of an item is never more than 50", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(50);
});

test("2 days left and quality of 49, quality should be updated to 50", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 2, 49);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(50);
});


test("7 days left and quality of 49, quality should be updated to 50", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 7, 49);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(50);
});

test("15 days left and quality of 49, quality should be updated to 50", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 49);
  let updater = new BackstagePassesUpdater(item);
  item = updater.update();
  expect(item.quality).toBe(50);
});

test("Quality increases by 2 when there are 10 days or less", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(12);
});

test("by 3 when there are 5 days or less", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(13);
});

test("Quality drops to 0 after the concert", () => {
  let item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
  let updater = new BackstagePassesUpdater(item);

  item = updater.update();

  expect(item.quality).toBe(0);
});

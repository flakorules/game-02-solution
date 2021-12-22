import { DefaultUpdater } from "../app/DefaultUpdater";
import { Item } from "../app/gilded-rose";

test("It should decrease sellIn in 1", () => {
  let item = new Item("Default Item", 10, 10);
  let updater = new DefaultUpdater(item);
  item = updater.update();
  expect(item.sellIn).toBe(9);
});
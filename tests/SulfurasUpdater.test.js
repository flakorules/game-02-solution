import { SulfurasUpdater } from "../app/SulfurasUpdater";
import { Item } from "../app/gilded-rose";

test("this.itemToUpdate.sellIn -= 1;", () => {
  let item = new Item("Sulfuras, Hand of Ragnaros", 10, 10);
  let updater = new SulfurasUpdater(item);

  item = updater.update();

  expect(item.sellIn).toBe(9);
  
});

test("'Sulfuras' is a legendary item and as such its Quality is 80 and it never alters", () => {
    let item = new Item("Sulfuras, Hand of Ragnaros", 10, 80);
    let updater = new SulfurasUpdater(item);
  
    item = updater.update();
  
    expect(item.quality).toBe(80);
    
  });

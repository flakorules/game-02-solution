import { GildedRose, Item } from "../app/gilded-rose";

const sellIn = 10;
const quality = 10;

let items = [
  new Item("Aged Brie", sellIn, quality),
  new Item("Backstage passes to a TAFKAL80ETC concert", sellIn, quality),
  new Item("Conjured", sellIn, quality),
  new Item("Sulfuras, Hand of Ragnaros", sellIn, quality),
];

test("It should initialize items property on GildedRose's object", () => {
  
  let gildedRose = new GildedRose(items);
  expect(gildedRose.items.length).toBeGreaterThan(0);
});

test("It should modify quality on each array element", () => {
  let gildedRose = new GildedRose(items);
  gildedRose.updateQuality();
  expect(gildedRose.items[0].quality).not.toEqual(quality);
  expect(gildedRose.items[1].quality).not.toEqual(quality);
  expect(gildedRose.items[2].quality).not.toEqual(quality);
  expect(gildedRose.items[3].quality).toEqual(quality);
});



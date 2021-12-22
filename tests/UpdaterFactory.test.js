import { SulfurasUpdater } from "../app/SulfurasUpdater";
import { UpdaterFactory } from "../app/UpdaterFactory";
import { Item } from "../app/gilded-rose";
import { AgedBrieUpdater } from "../app/AgedBrieUpdater";
import { BackstagePassesUpdater } from "../app/BackstagePassesUpdater";
import { ConjuredUpdater } from "../app/ConjuredUpdater";
import { DefaultUpdater } from "../app/DefaultUpdater";

test("It should create an instance of Agied Brie", () => {
    let item = new Item("Aged Brie", 10, 10);
    let updater = UpdaterFactory.Create(item);  
    expect(updater).toBeInstanceOf(AgedBrieUpdater);    
  });

  
test("It should create an instance of BackstagePassesUpdater", () => {
    let item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10);
    let updater = UpdaterFactory.Create(item);  
    expect(updater).toBeInstanceOf(BackstagePassesUpdater);    
  });

test("It should create an instance of ConjuredUpdater", () => {
    let item = new Item("Conjured", 10, 10);
    let updater = UpdaterFactory.Create(item);  
    expect(updater).toBeInstanceOf(ConjuredUpdater);    
  });

  test("It should create an instance of DefaultUpdater", () => {
    let item = new Item("Default", 10, 10);
    let updater = UpdaterFactory.Create(item);  
    expect(updater).toBeInstanceOf(DefaultUpdater);    
  });


test("It should create an instance of SulfurasUpdater", () => {
    let item = new Item("Sulfuras, Hand of Ragnaros", 10, 10);
    let updater = UpdaterFactory.Create(item);  
    expect(updater).toBeInstanceOf(SulfurasUpdater);    
  });
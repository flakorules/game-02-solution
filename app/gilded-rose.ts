import { runInThisContext } from "vm";
import { GildedRoseUpdater } from "./GildedRoseUpdater";
import { UpdaterFactory } from "./UpdaterFactory";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let updater:GildedRoseUpdater;
    for (let i = 0; i < this.items.length; i++) {
      updater = UpdaterFactory.Create(this.items[i]);
      this.items[i] = updater.update();
    }
  }
}

import { Item } from "./gilded-rose";
import { GildedRoseUpdater } from "./GildedRoseUpdater";

export class DefaultUpdater extends GildedRoseUpdater {
    constructor(itemToUpdate: Item) {
      super(itemToUpdate);
    }
  
    update(): Item {
      this.itemToUpdate.sellIn -= 1;
      return this.itemToUpdate;
    }
  }
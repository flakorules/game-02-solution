import { Item } from "./gilded-rose";
import { GildedRoseUpdater } from "./GildedRoseUpdater";

export class AgedBrieUpdater extends GildedRoseUpdater {
    constructor(itemToUpdate: Item) {
      super(itemToUpdate);
    }
  
    update(): Item {
      this.itemToUpdate.sellIn -= 1;
  
      if (this.itemToUpdate.quality >= 0 && this.itemToUpdate.quality < 50)
        this.itemToUpdate.quality += 1;
  
      return this.itemToUpdate;
    }
  }
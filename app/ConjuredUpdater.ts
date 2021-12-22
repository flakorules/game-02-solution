import { Item } from "./gilded-rose";
import { GildedRoseUpdater } from "./GildedRoseUpdater";

export class ConjuredUpdater extends GildedRoseUpdater {
    constructor(itemToUpdate: Item) {
      super(itemToUpdate);
    }

    
  
    update(): Item {
      this.itemToUpdate.sellIn -= 1;
      const setQualityDecrement = (quality,decrement)=> quality-decrement<0 ? 0 : quality-decrement;
  
      if (this.itemToUpdate.quality > 0 && this.itemToUpdate.quality <= 50)
        //this.itemToUpdate.quality -= 2;
        this.itemToUpdate.quality = setQualityDecrement(this.itemToUpdate.quality,2);
  
      return this.itemToUpdate;
    }
  }
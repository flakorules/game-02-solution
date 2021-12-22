import { Item } from "./gilded-rose";
import { GildedRoseUpdater } from "./GildedRoseUpdater";

export class BackstagePassesUpdater extends GildedRoseUpdater {
  constructor(itemToUpdate: Item) {
    super(itemToUpdate);
  }

  update(): Item {
    this.itemToUpdate.sellIn -= 1;

    const setQualityIncrement = (quality, increment) =>
      quality + increment > 50 ? 50 : quality + increment;

    if (!(this.itemToUpdate.quality >= 0 && this.itemToUpdate.quality < 50))
      return this.itemToUpdate;

    if (this.itemToUpdate.sellIn < 0) this.itemToUpdate.quality = 0;
    else if (this.itemToUpdate.sellIn > 0 && this.itemToUpdate.sellIn <= 5) {
      this.itemToUpdate.quality = setQualityIncrement(this.itemToUpdate.quality,3);
    } else if (this.itemToUpdate.sellIn > 5 && this.itemToUpdate.sellIn <= 10)
      this.itemToUpdate.quality = setQualityIncrement(this.itemToUpdate.quality,2);
    else
      this.itemToUpdate.quality = setQualityIncrement(this.itemToUpdate.quality,1);

    return this.itemToUpdate;
  }
}

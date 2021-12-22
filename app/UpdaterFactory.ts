import { AgedBrieUpdater } from "./AgedBrieUpdater";
import { BackstagePassesUpdater } from "./BackstagePassesUpdater";
import { ConjuredUpdater } from "./ConjuredUpdater";
import { DefaultUpdater } from "./DefaultUpdater";
import { Item } from "./gilded-rose";
import { GildedRoseUpdater } from "./GildedRoseUpdater";
import { SulfurasUpdater } from "./SulfurasUpdater";

export class UpdaterFactory {
  static Create(item: Item): GildedRoseUpdater {
    if (item.name.indexOf("Aged Brie") >= 0) 
    return new AgedBrieUpdater(item);
    else if (item.name.indexOf("Sulfuras") >= 0)
      return new SulfurasUpdater(item);
    else if (item.name.indexOf("Backstage passes") >= 0)
      return new BackstagePassesUpdater(item);
    else if (item.name.indexOf("Conjured") >= 0)
      return new ConjuredUpdater(item);

    return new DefaultUpdater(item);
  }
}

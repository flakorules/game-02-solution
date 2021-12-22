import { Item } from "./gilded-rose";

export abstract class GildedRoseUpdater {
    itemToUpdate: Item;
  
    constructor(itemToUpdate: Item) {
      this.itemToUpdate = itemToUpdate;
    }
  
    abstract update(): Item;
  }
import { items, Item } from '@/models/item';

export class ItemRepository {
  getAll(): Item[] {
    return items;
  }

  findById(id: number): Item | undefined {
    return items.find((item) => item.id === id);
  }

  create(item: Item): Item {
    items.push(item);
    return item;
  }

  update(id: number, name: string): Item | undefined {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;
    items[index].name = name;
    return items[index];
  }

  delete(id: number): Item | undefined {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return undefined;
    const [deletedItem] = items.splice(index, 1);
    return deletedItem;
  }
}

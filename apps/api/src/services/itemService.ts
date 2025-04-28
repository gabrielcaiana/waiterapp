import { Item } from '@/models/item';
import { ItemRepository } from '@/repositories/itemRepository';

export class ItemService {
  private repository = new ItemRepository();

  getAllItems(): Item[] {
    return this.repository.getAll();
  }

  getItemById(id: number): Item {
    const item = this.repository.findById(id);
    if (!item) throw new Error('Item not found');
    return item;
  }

  createItem(name: string): Item {
    const newItem: Item = { id: Date.now(), name };
    return this.repository.create(newItem);
  }

  updateItem(id: number, name: string): Item {
    const updated = this.repository.update(id, name);
    if (!updated) throw new Error('Item not found');
    return updated;
  }

  deleteItem(id: number): Item {
    const deleted = this.repository.delete(id);
    if (!deleted) throw new Error('Item not found');
    return deleted;
  }
}

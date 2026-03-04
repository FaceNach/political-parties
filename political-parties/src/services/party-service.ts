import { PartiesStore } from "../store/parties.store";
import type { PoliticalParty } from "../types";
import { generateUUID } from "../utils/generate-uuid";

class PartyService {
  private readonly PartiesStore: PartiesStore;

  constructor() {
    this.PartiesStore = new PartiesStore();
  }

  getAll(): PoliticalParty[] {
    return this.PartiesStore.getAll();
  }

  add(name: string, color: string, borderColor: string): PoliticalParty {
    const newParty: PoliticalParty = {
      id: generateUUID(),
      name: name,
      color: color,
      borderColor: borderColor,
      votes: 0,
    };

    this.PartiesStore.addParty(newParty);

    return newParty;
  }

  update(id: string, updates: Partial<PoliticalParty>): PoliticalParty | null {
    const party = this.PartiesStore.findById(id);

    if (!party) return null;

    if (updates.name) {
      party.name = updates.name;
    }

    if (updates.color) {
      party.color = updates.color;
    }

    if (updates.borderColor) {
      party.borderColor = updates.borderColor;
    }

    if (updates.votes) {
      party.votes = updates.votes;
    }

    return party;
  }

  delete(id: string): void {
    this.PartiesStore.removeParty(id);
  }

  incrementVotes(id: string): PoliticalParty | null {
    const party = this.PartiesStore.findById(id);

    if (!party) return null;

    party.votes += 1;

    return party;
  }

  decrementVotes(id: string): PoliticalParty | null {
    const party = this.PartiesStore.findById(id);

    if (!party) return null;

    party.votes -= 1;

    return party;
  }
}

export const partyService = new PartyService();

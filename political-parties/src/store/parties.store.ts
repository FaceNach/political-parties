import { createDefaultParties } from "../data/default-parties.data";
import type { PoliticalParty } from "../types";

interface PartiesState {
  parties: PoliticalParty[];
}

export class PartiesStore {
  private state: PartiesState = {
    parties: createDefaultParties(),
  };

  getAll(): PoliticalParty[] {
    return this.state.parties;
  }

  findById(id: string): PoliticalParty | undefined {
    return this.state.parties.find((party) => party.id === id);
  }

  addParty(party: PoliticalParty): void {
    this.state.parties.push(party);
  }

  removeParty(id: string): boolean {
    const initialLenght = this.state.parties.length;

    this.state.parties = this.state.parties.filter((party) => party.id !== id);

    return this.state.parties.length < initialLenght;
  }

  reset(): void {
    this.state.parties = createDefaultParties();
  }
}

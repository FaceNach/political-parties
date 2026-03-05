import type { PoliticalParty } from '../types';
import { generateUUID } from '../utils/generate-uuid';

const defaultParties = [
  {
    name: 'Red party',
    color: 'rgba(220, 53, 69, 0.2)',
    borderColor: 'rgb(220, 53, 69)',
    votes: 42,
  },
  {
    name: 'Blue party',
    color: 'rgba(0, 123, 255, 0.2)',
    borderColor: 'rgb(0, 123, 255)',
    votes: 40,
  },
  {
    name: 'Green party',
    color: 'rgba(40, 167, 69, 0.2)',
    borderColor: 'rgb(40, 167, 69)',
    votes: 28,
  },
  {
    name: 'Yellow party',
    color: 'rgba(255, 193, 7, 0.2)',
    borderColor: 'rgb(255, 193, 7)',
    votes: 23,
  },
  {
    name: 'Orange party',
    color: 'rgba(255, 152, 0, 0.2)',
    borderColor: 'rgb(255, 152, 0)',
    votes: 15,
  },
];

export const createDefaultParties = (): PoliticalParty[] => {
  return defaultParties.map((party) => ({
    ...party,
    id: generateUUID(),
  }));
};
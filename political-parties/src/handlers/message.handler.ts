import type { WebSocketMessage, WebSocketResponse } from "../types";

const createErrorResponse = (error: string): WebSocketResponse => {
  return {
    type: "ERROR",
    payload: { error: error },
  };
};

//Specific Handlers

const handleAddParty = (payload: unknown): WebSocketResponse => {
  return {
    type: "PARTY_ADDED",
    payload: {
      name: "New Party",
    },
  };
};

const handleUpdateParty = (payload: unknown): WebSocketResponse => {
  return {
    type: "PARTY_UPDATED",
    payload: {
      name: "Updated Party",
    },
  };
};
const handleDeleteParty = (payload: unknown): WebSocketResponse => {
  return {
    type: "PARTY_DELETED",
    payload: {
      name: "Delete Party",
    },
  };
};

const handleIncrementVotes = (payload: unknown): WebSocketResponse => {
  return {
    type: "VOTES_UPDATED",
    payload: {
      name: "Incremented votes Party",
    },
  };
};

const handleDecrementVotes = (payload: unknown): WebSocketResponse => {
  return {
    type: "VOTES_UPDATED",
    payload: {
      name: "Decremented votes Party",
    },
  };
};

const handleGetParties = (): WebSocketResponse => {
  return {
    type: "PARTIES_LIST",
    payload: {
      name: "Get all parties",
    },
  };
};

export const handleMessage = (msg: string): WebSocketResponse => {
  try {
    const jsonData: WebSocketMessage = JSON.parse(msg);
    console.log({ payload: jsonData });
    //TODO validate json
    const { type, payload } = jsonData;
    switch (type) {
      case "ADD_PARTY":
        return handleAddParty(payload);
      case "UPDATE_PARTY":
        return handleUpdateParty(payload);
      case "DELETE_PARTY":
        return handleDeleteParty(payload);
      case "INCREMENT_VOTES":
        return handleIncrementVotes(payload);
      case "DECREMENT_VOTES":
        return handleDecrementVotes(payload);
      case "GET_PARTIES":
        return handleGetParties();

      default:
        return createErrorResponse(`Unknown message type: ${type}`);
    }
  } catch (error) {
    //*TODO: Error
    return createErrorResponse(`Validation error: ${error}`);
  }
};

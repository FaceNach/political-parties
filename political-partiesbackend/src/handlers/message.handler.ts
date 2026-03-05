import {
  messageSchema,
  type MessageParsed,
} from "../schemas/webSocket-message.schema";
import { partyService } from "../services/party-service";
import type { WebSocketMessage, WebSocketResponse } from "../types";

const createErrorResponse = (error: string): WebSocketResponse => {
  return {
    type: "ERROR",
    payload: { error: error },
  };
};

//Specific Handlers

const handleAddParty = (
  payload: MessageParsed["payload"],
): WebSocketResponse => {
  if (!payload?.name || !payload.color || !payload.borderColor) {
    return createErrorResponse("Name, color and border color are required");
  }

  const newParty = partyService.add(
    payload.name,
    payload.color,
    payload.borderColor,
  );

  return {
    type: "PARTY_ADDED",
    payload: newParty,
  };
};

const handleUpdateParty = (
  payload: MessageParsed["payload"],
): WebSocketResponse => {
  if (!payload?.id) return createErrorResponse("Party id its mandatory");

  const updatedParty = partyService.update(payload.id, {
    name: payload.name,
    color: payload.name,
    borderColor: payload.borderColor,
    votes: payload.votes,
  });

  if (!updatedParty)
    return createErrorResponse(`Party with id ${payload.id} not found`);

  return {
    type: "PARTY_UPDATED",
    payload: updatedParty,
  };
};
const handleDeleteParty = (payload: MessageParsed["payload"]): WebSocketResponse => {
  if (!payload?.id) return createErrorResponse("Id its mandatory");

  const deleted = partyService.delete(payload.id);

  if (!deleted) {
    return createErrorResponse(`Party with id ${payload.id} not found`);
  }

  return {
    type: "PARTY_DELETED",
    payload: {
      id: payload.id,
      deleted: deleted,
    },
  };
};

const handleIncrementVotes = (payload: MessageParsed["payload"]): WebSocketResponse => {
  if (!payload?.id) return createErrorResponse("Id its mandatory");

  const party = partyService.incrementVotes(payload.id);

  if (!party) {
    return createErrorResponse(`No party found with id ${payload.id}`);
  }
  return {
    type: "VOTES_UPDATED",
    payload: party,
  };
};

const handleDecrementVotes = (payload: MessageParsed["payload"]): WebSocketResponse => {
  if (!payload?.id) return createErrorResponse("Id its mandatory");

  const party = partyService.decrementVotes(payload.id);

  if (!party) {
    return createErrorResponse(`No party found with id ${payload.id}`);
  }
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
    payload: partyService.getAll(),
  };
};

export const handleMessage = (msg: string): WebSocketResponse => {
  try {
    const jsonData: WebSocketMessage = JSON.parse(msg);
    const parsedResolved = messageSchema.safeParse(jsonData);

    if (!parsedResolved.success) {
      const errorMessage = parsedResolved.error.issues
        .map((issue) => issue.message)
        .join(", ");

      return createErrorResponse(`Validation error ${errorMessage}`);
    }

    console.log({ payload: jsonData });
    //TODO validate json
    const { type, payload } = parsedResolved.data;
    switch (type) {
      case "ADD_PARTY":
        return handleAddParty(payload || {});
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

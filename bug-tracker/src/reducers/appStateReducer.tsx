import { v4 as uuidv4 } from "uuid";
import { AppState, Action } from "../interfaces/appState";
import { findItemIndexById } from "../utils/findItemIndexById";

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuidv4(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: uuidv4(),
        text: action.payload.text,
      });

      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

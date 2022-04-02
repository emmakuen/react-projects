import { v4 as uuidv4 } from "uuid";
import { AppState, Action } from "../interfaces/appState";
import { findItemIndexById } from "../utils/findItemIndexById";
import { moveItem } from "../utils/moveItem";

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
      const newState = state;
      newState.lists[targetLaneIndex].tasks.push({
        id: uuidv4(),
        text: action.payload.text,
      });

      return { ...newState };
    }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload;
      const newState = state;
      newState.lists = moveItem(newState.lists, dragIndex, hoverIndex);
      return { ...newState };
    }
    default: {
      return state;
    }
  }
};

import type { Activity as ActivityType } from "@/types";

import type { ActivityAction } from "@/actions/activities";
import { ActivityActionType } from "@/actions/activities";

export type ActivityState = {
	activities: ActivityType[];
}

export const initialActivityState: ActivityState = {
	activities: [],
};

export const activityReducer = (state: ActivityState, action: ActivityAction) => {
	switch (action.type) {
		case ActivityActionType.LOAD_ACTIVITIES:
			return { ...state, activities: action.payload };
		case ActivityActionType.CREATE_ACTIVITY:
			return { ...state, activities: [...state.activities, action.payload] };
		case ActivityActionType.CREATE_ACTIVITY_OPTIMISTIC:
			return {
				...state,
				activities: [...state.activities, action.payload],
			};
		case ActivityActionType.MARK_AS_DONE:
			return {
				...state,
				activities: state.activities.map(activity =>
					activity.id === action.payload
						? { ...activity, done: true }
						: activity,
				),
			};
		default:
			return state;
	}
};
    
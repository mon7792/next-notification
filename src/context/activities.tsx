import { createContext, type Dispatch, useReducer } from "react";

import type { ActivityAction } from "@/actions/activities";
import {
	initialActivityState,
	activityReducer,
	type ActivityState,
} from "@/reducers/activities";

type ActivityContextType = {
	activities: ActivityState;
	dispatch: Dispatch<ActivityAction>;
};

export const ActivityContext = createContext<ActivityContextType>({
	activities: initialActivityState,
	dispatch: () => {},
});

const ActivityContextProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(activityReducer, initialActivityState);

	return (
		<ActivityContext.Provider value={{ activities: state, dispatch }}>
			{children}
		</ActivityContext.Provider>
	);
};

export default ActivityContextProvider;

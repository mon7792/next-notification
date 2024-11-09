import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../request/activity";

export const useActivities = () => {
	return useQuery({
		queryKey: ["activities"],
		queryFn: getActivities,
	});
};

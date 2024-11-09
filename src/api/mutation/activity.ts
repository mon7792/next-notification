import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Activity } from "@/types";
import { createActivity, updateActivity } from "../request/activity";


export const useCreateActivity = (onSuccess?: () => void) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createActivity,
		onMutate: async (data: Activity) => {
			await queryClient.cancelQueries({ queryKey: ["activities"] });

			const previousActivities = queryClient.getQueryData<Activity[]>([
				"activities",
			]);

			queryClient.setQueryData(["activities"], (old: Activity[]) => [
				...old,
				data,
			]);

			return { previousActivities };
		},
		onError: (err, data, context) => {
			if (!context) return;
			queryClient.setQueryData(["activities"], context.previousActivities);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["activities"] });
		},
	});
};

export const useUpdateActivity = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateActivity,
		onMutate: async (id: number) => {
			await queryClient.cancelQueries({ queryKey: ["activities"] });

			const previousActivities = queryClient.getQueryData<Activity[]>([
				"activities",
			]);

			queryClient.setQueryData(["activities"], (old: Activity[]) =>
				old.map((activity) =>
					activity.id === id ? { ...activity, done: !activity.done } : activity,
				),
			);

			return { previousActivities };
		},
		onError: (err, data, context) => {
			if (!context) return;
			queryClient.setQueryData(["activities"], context.previousActivities);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["activities"] });
		},
	});
};

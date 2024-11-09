import type { Activity as ActivityType } from "@/types";

export enum ActivityActionType {
	LOAD_ACTIVITIES = "LOAD_ACTIVITIES",
	CREATE_ACTIVITY = "CREATE_ACTIVITY",
	CREATE_ACTIVITY_OPTIMISTIC = "CREATE_ACTIVITY_OPTIMISTIC",
	MARK_AS_DONE = "MARK_AS_DONE",
}

export type LoadActivitiesAction = {
	type: ActivityActionType.LOAD_ACTIVITIES;
	payload: ActivityType[];
};

export type CreateActivityAction = {
	type: ActivityActionType.CREATE_ACTIVITY;
	payload: ActivityType;
};

export type MarkAsDoneAction = {
	type: ActivityActionType.MARK_AS_DONE;
	payload: number;
};

export type CreateActivityOptimisticAction = {
	type: ActivityActionType.CREATE_ACTIVITY_OPTIMISTIC;
	payload: ActivityType;
};

export type ActivityAction =
	| LoadActivitiesAction
	| CreateActivityAction
	| CreateActivityOptimisticAction
	| MarkAsDoneAction;

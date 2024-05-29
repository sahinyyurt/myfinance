import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
	Startup: undefined;
	Example: undefined;
	Todo: undefined;
	AddTodoCategory: undefined;
	Home: undefined;
	Profile: undefined;
	AddExpense: undefined;
};

export type RootScreenProps<
	S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

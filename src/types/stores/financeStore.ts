export interface User {
	name: string;
	salary: number;
}

export enum ExpenseType {
	SERVICE = 'SERVICE',
	FOOD = 'FOOD',
}

export interface Expense {
	kind: ExpenseType;
	amount: number;
	tax: number;
}

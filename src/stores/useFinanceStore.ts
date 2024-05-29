import { Expense, ExpenseType, User } from '@/types/stores/financeStore';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv-storage';

interface IFınanceStore {
	expences: Expense[];
	user?: User;
	setUser: (user: User) => void;
	addExpences: (expense: Expense) => void;
	clearExpences: () => void;
}

const TAXES: Record<ExpenseType, number> = {
	SERVICE: 20,
	FOOD: 18,
};

export const useFinanceStore = create<IFınanceStore>()(
	persist(
		(set, get) => ({
			expences: [],
			clearExpences: () => set(state => ({ ...state, expences: [] })),
			addExpences: expense => {
				expense.tax = (expense.amount * TAXES[expense.kind]) / 100;
				expense.amount = expense.amount - expense.tax;
				set(state => ({
					...state,
					expences: [...state.expences, expense],
				}));
			},
			setUser: user => {
				set(state => ({
					...state,
					user,
				}));
			},
		}),
		{
			name: 'finance-storage',
			storage: createJSONStorage(() => zustandStorage),
		},
	),
);

import TextInputLabel from '@/components/form/TextInputLabel';
import { SafeScreen } from '@/components/template';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useTheme } from '@/theme';
import { RootScreenProps } from '@/types/navigation';
import { Expense, ExpenseType } from '@/types/stores/financeStore';
import { useState } from 'react';
import { View, Button } from 'react-native';
import AddExpense from './AddExpense';

export default function AddExpenseContainer({
	navigation,
}: RootScreenProps<'AddExpense'>) {
	const { addExpences } = useFinanceStore();
	return (
		<AddExpense
			onExpenseAdded={(expense: Expense) => {
				addExpences(expense);
				navigation.goBack();
			}}
		/>
	);
}

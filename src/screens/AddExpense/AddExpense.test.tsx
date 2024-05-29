import { fireEvent, render, screen } from '@testing-library/react-native';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddExpense from './AddExpense';
import { Expense, ExpenseType } from '@/types/stores/financeStore';

describe('AddExpense screen should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('the users can save their expense', () => {
		let _exp: Expense = { amount: 100, kind: ExpenseType.FOOD, tax: 0 };
		const component = (
			<SafeAreaProvider>
				<ThemeProvider storage={storage}>
					<AddExpense onExpenseAdded={exp => (_exp = exp)} />
				</ThemeProvider>
			</SafeAreaProvider>
		);

		render(component);

		const amountInput = screen.getByTestId('amount');
		const kindInput = screen.getByTestId('kind');
		const saveBtn = screen.getByTestId('save');

		fireEvent.changeText(amountInput, 1500);
		fireEvent.changeText(kindInput, 'SERVICE');
		fireEvent.press(saveBtn);

		expect(_exp.amount).toBe(1500);
		expect(_exp.kind).toBe('SERVICE');
	});
});

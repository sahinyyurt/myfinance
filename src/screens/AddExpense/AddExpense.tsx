import TextInputLabel from '@/components/form/TextInputLabel';
import { SafeScreen } from '@/components/template';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useTheme } from '@/theme';
import { RootScreenProps } from '@/types/navigation';
import { Expense, ExpenseType } from '@/types/stores/financeStore';
import { PropsWithChildren, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type Props = PropsWithChildren<{
	onExpenseAdded: (expense: Expense) => void;
}>;

export default function AddExpense({ onExpenseAdded }: Props) {
	const { addExpences } = useFinanceStore();
	const { layout, gutters, fonts, colors } = useTheme();
	const [amount, setAmount] = useState('0');
	const [kind, setKind] = useState(ExpenseType.FOOD);
	return (
		<SafeScreen>
			<View
				style={[layout.flex_1, gutters.paddingHorizontal_12, gutters.gap_12]}
			>
				<TextInputLabel
					value={amount}
					testID="amount"
					onChangeText={setAmount}
					label="Amount"
				/>
				<TextInputLabel
					testID="kind"
					value={kind}
					onChangeText={txt => setKind(txt as ExpenseType)}
					label="Kind"
				/>
				<Button
					title="Save"
					testID="save"
					onPress={() =>
						onExpenseAdded &&
						onExpenseAdded({
							amount: parseFloat(amount),
							kind: kind as ExpenseType,
							tax: 0,
						})
					}
				/>
			</View>
		</SafeScreen>
	);
}

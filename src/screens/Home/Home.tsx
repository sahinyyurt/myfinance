import { useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

import useTodoStore from '@/stores/useTodoStore';
import { RootScreenProps } from '@/types/navigation';
import { useFinanceStore } from '@/stores/useFinanceStore';

function Home({ navigation }: RootScreenProps<'Home'>) {
	const { expences, user, clearExpences } = useFinanceStore();

	const { layout, gutters, colors, fonts } = useTheme();

	const leftSalary = user
		? user.salary - expences.reduce((sum, e) => sum + e.amount, 0)
		: 0;
	const tax = expences.reduce((sum, e) => sum + e.tax, 0);
	return (
		<SafeScreen>
			<View style={[layout.flex_1, gutters.paddingHorizontal_12]}>
				<View
					style={[layout.row, { alignSelf: 'stretch' }, layout.justifyBetween]}
				>
					<Button
						title="Profile"
						onPress={() => navigation.navigate('Profile')}
					/>
					<Button
						title="Add Expense"
						onPress={() => navigation.navigate('AddExpense')}
					/>
				</View>
				<View
					style={[
						{ alignSelf: 'stretch' },
						layout.justifyBetween,
						gutters.gap_12,
					]}
				>
					<Text style={[fonts.gray800, fonts.size_32]}>
						Balance: {leftSalary.toLocaleString()}
					</Text>
					<Text style={[fonts.gray800, fonts.size_24]}>
						Total tax:{tax.toLocaleString()}
					</Text>
					<Button title="Clear Expense" onPress={() => clearExpences()} />
				</View>
				<View></View>
				<View
					style={[
						layout.row,
						gutters.marginTop_32,
						gutters.marginBottom_12,
						layout.justifyBetween,
					]}
				>
					<Text style={[fonts.gray800, fonts.size_24]}>Amount</Text>
					<Text style={[fonts.gray800, fonts.size_24]}>Tax</Text>
					<Text style={[fonts.gray800, fonts.size_24]}>Total</Text>
				</View>
				<ScrollView>
					<View
						style={[layout.justifyCenter, layout.itemsCenter, gutters.gap_12]}
					>
						{expences.map((x, i) => (
							<View
								key={i}
								style={[
									layout.row,
									{ alignSelf: 'stretch' },
									layout.justifyBetween,
								]}
							>
								<Text style={[fonts.gray800, fonts.size_16]}>
									{x.amount + x.tax}
								</Text>
								<Text style={[fonts.gray800, fonts.size_16]}>{x.tax}</Text>
								<Text style={[fonts.gray800, fonts.size_16]}>{x.amount}</Text>
							</View>
						))}
					</View>
				</ScrollView>
			</View>
		</SafeScreen>
	);
}

export default Home;

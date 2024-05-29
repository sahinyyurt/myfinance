import { View, Text, Button } from 'react-native';
import React, { FC, PropsWithChildren, useState } from 'react';
import { useTheme } from '@/theme';
import { User } from '@/types/stores/financeStore';
import TextInputLabel from '@/components/form/TextInputLabel';

type Props = PropsWithChildren<{
	user?: User;
	onSetUser: (user: User) => void;
}>;

const Profile: FC<Props> = ({ user, onSetUser }) => {
	const { layout, gutters, fonts, colors } = useTheme();
	const [name, setName] = useState(user?.name || '');
	const [salary, setSalary] = useState(user?.salary || 0 + '');
	return (
		<View style={[layout.flex_1, gutters.paddingHorizontal_12, gutters.gap_12]}>
			<TextInputLabel
				testID="name-input"
				value={name}
				onChangeText={setName}
				label="Name"
			/>
			<TextInputLabel
				testID="salary-input"
				value={salary.toString()}
				onChangeText={setSalary}
				label="Salary"
			/>
			<Button
				title="Save"
				testID="save"
				onPress={() =>
					onSetUser && onSetUser({ name, salary: parseFloat(salary) })
				}
			/>
		</View>
	);
};

export default Profile;

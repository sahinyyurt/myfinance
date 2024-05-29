import { View, Button } from 'react-native';
import { FC, PropsWithChildren, useState } from 'react';
import { useTheme } from '@/theme';
import { User } from '@/types/stores/financeStore';
import TextInputLabel from '@/components/form/TextInputLabel';

type Props = PropsWithChildren<{
	user?: User;
	onSetUser: (user: User) => void;
}>;

const Profile: FC<Props> = ({ user = { name: '', salary: 0 }, onSetUser }) => {
	const { layout, gutters } = useTheme();
	const [name, setName] = useState(user?.name);
	const [salary, setSalary] = useState(String(user?.salary));
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
				value={salary}
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

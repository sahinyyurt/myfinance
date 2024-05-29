import { SafeScreen } from '@/components/template';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { RootScreenProps } from '@/types/navigation';
import { User } from '@/types/stores/financeStore';
import Profile from './Profile';

const ProfileContainer: React.FC<RootScreenProps<'Profile'>> = ({
	navigation,
}) => {
	const { user, setUser } = useFinanceStore();
	return (
		<SafeScreen>
			<Profile
				user={user}
				onSetUser={(user: User) => {
					setUser(user);
					navigation.goBack();
				}}
			/>
		</SafeScreen>
	);
};

export default ProfileContainer;

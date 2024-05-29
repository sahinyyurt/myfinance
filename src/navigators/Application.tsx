import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home, ProfileContainer, Startup } from '@/screens';
import { useTheme } from '@/theme';

import type { RootStackParamList } from '@/types/navigation';
import AddExpense from '@/screens/AddExpense/AddExpenseContainer';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Startup" component={Startup} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen
						name="Profile"
						component={ProfileContainer}
						options={{ presentation: 'modal' }}
					/>
					<Stack.Screen
						name="AddExpense"
						component={AddExpense}
						options={{ presentation: 'modal' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;

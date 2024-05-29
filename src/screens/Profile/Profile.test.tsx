import { fireEvent, render, screen } from '@testing-library/react-native';
import { MMKV } from 'react-native-mmkv';
import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from '@/theme';
import i18n from '@/translations';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Profile from './Profile';

describe('Profile screen should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('the users can see defaults values', () => {
		let _user = { name: '', salary: 0 };
		const component = (
			<SafeAreaProvider>
				<ThemeProvider storage={storage}>
					<Profile onSetUser={user => (_user = user)} user={_user} />
				</ThemeProvider>
			</SafeAreaProvider>
		);

		render(component);

		const nameInput = screen.getByTestId('name-input');
		const salaryInput = screen.getByTestId('salary-input');
		expect(nameInput).toHaveProp('value', '');
		expect(salaryInput).toHaveProp('value', '0');
	});

	test('the users can save their detail', () => {
		let _user = { name: 'Test', salary: 10000 };
		const component = (
			<SafeAreaProvider>
				<ThemeProvider storage={storage}>
					<Profile onSetUser={user => (_user = user)} user={_user} />
				</ThemeProvider>
			</SafeAreaProvider>
		);

		render(component);

		const nameInput = screen.getByTestId('name-input');
		const salaryInput = screen.getByTestId('salary-input');
		const saveBtn = screen.getByTestId('save');

		fireEvent.changeText(nameInput, 'test user');
		fireEvent.changeText(salaryInput, '150000');
		fireEvent.press(saveBtn);

		expect(_user.name).toBe('test user');
		expect(_user.salary).toBe(150000);
	});

	test('the users can see their detail', () => {
		const component = (
			<SafeAreaProvider>
				<ThemeProvider storage={storage}>
					<I18nextProvider i18n={i18n}>
						<Profile
							onSetUser={() => null}
							user={{ name: 'Test', salary: 1000 }}
						/>
					</I18nextProvider>
				</ThemeProvider>
			</SafeAreaProvider>
		);

		render(component);

		const nameInput = screen.getByTestId('name-input');
		const salaryInput = screen.getByTestId('salary-input');
		expect(nameInput).toHaveProp('value', 'Test');
		expect(salaryInput).toHaveProp('value', '1000');
	});
});

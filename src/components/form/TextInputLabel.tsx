import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/theme';
import { TextInput } from 'react-native';

type Props = {
	label: string;
} & TextInputProps;
const TextInputLabel = ({ label, ...inputProps }: Props) => {
	const { layout, fonts, gutters } = useTheme();
	return (
		<View style={[layout.row, layout.itemsCenter, gutters.gap_12]}>
			<Text style={[fonts.size_12, fonts.gray800]}>{label}</Text>
			<TextInput
				style={[
					gutters.padding_12,
					{ backgroundColor: 'white', minWidth: 200 },
				]}
				{...inputProps}
			/>
		</View>
	);
};

export default TextInputLabel;

const styles = StyleSheet.create({});

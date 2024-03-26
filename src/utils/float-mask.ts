import VMasker from 'vanilla-masker';

class FloatMask {
	public static transform(value: string): string {
		let floatValue = VMasker.toMoney(value, {
			delimiter: '|',
			separator: '.'
		});

		floatValue = floatValue.replaceAll('|', '');

		return floatValue;
	}

	public static normalize(value: string): number {
		return +value;
	}
}

export default FloatMask;
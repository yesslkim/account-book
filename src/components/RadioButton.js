const RadioButton = ({ id, group, label, isChecked, onChange }) => {
	return (
		<div className='input-radio'>
			<label htmlFor={id}>{label}</label>
			<input
				type='radio'
				id={id}
				name={id}
				value={isChecked}
				onBlur={onChange}
			/>
		</div>
	);
};

export default RadioButton;

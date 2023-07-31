const RadioButton = ({ id, group, label, isChecked, onChange }) => {
	return (
		<div className='input-group input-radio'>
			<label htmlFor={id}>{label}</label>
			<input
				type='radio'
				id={id}
				name={group}
				checked={isChecked}
				onChange={onChange}
			/>
		</div>
	);
};

export default RadioButton;

const Checkbox = ({ id, label, isChecked, onChange }) => {
	return (
		<div className='input-group checkbox'>
			<label htmlFor={id}>{label}</label>
			<input
				type='checkbox'
				id={id}
				name={id}
				defaultValue={isChecked}
				onChange={onChange}
			/>
		</div>
	);
};

export default Checkbox;

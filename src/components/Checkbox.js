const Checkbox = ({ id, label, isChecked, onChange }) => {
	return (
		<div className='input-group checkbox'>
			<label htmlFor={id}>{label}</label>
			<input
				type='checkbox'
				id={id}
				name={id}
				value={isChecked}
				onBlur={onChange}
			/>
		</div>
	);
};

export default Checkbox;

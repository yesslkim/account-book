const SelectInput = ({ id, label, options, value, onBlur }) => {
	return (
		<div className='select'>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} value={value} onBlur={onBlur}>
				{options &&
					options.map(option => <option value={option}>{option}</option>)}
			</select>
		</div>
	);
};

export default SelectInput;

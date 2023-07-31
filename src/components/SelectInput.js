const SelectInput = ({ id, label, options, value, onBlur }) => {
	return (
		<div className='select'>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} value={value} onBlur={onBlur}>
				{options}
			</select>
		</div>
	);
};

export default SelectInput;

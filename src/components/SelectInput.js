const SelectInput = ({ id, label, options, value, onChange }) => {
	return (
		<div className='input-group select'>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} value={value} onChange={onChange} required>
				{options &&
					options.map((option, index) => (
						<option key={option} value={index}>
							{option}
						</option>
					))}
			</select>
		</div>
	);
};

export default SelectInput;

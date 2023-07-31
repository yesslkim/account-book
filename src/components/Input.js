const Input = ({
	type = 'text',
	label,
	id,
	value,
	onBlur,
	isRequired = true,
}) => {
	return (
		<div className={`input-${type}`}>
			<label htmlFor={id}>{label}</label>
			{isRequired && (
				<input type={type} id={id} value={value} onBlur={onBlur} />
			)}
		</div>
	);
};

export default Input;

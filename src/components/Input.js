const Input = ({
	type = 'text',
	label,
	id,
	value,
	onBlur,
	isRequired = true,
}) => {
	return (
		<div className={`input-group input-${type}`}>
			<label htmlFor={id}>{label}</label>
			{isRequired && (
				<input
					required={isRequired}
					type={type}
					id={id}
					name={id}
					defaultValue={value}
					onBlur={onBlur}
				/>
			)}
		</div>
	);
};

export default Input;

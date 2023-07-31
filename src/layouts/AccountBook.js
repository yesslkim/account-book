import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import SelectInput from '../components/SelectInput';
import Checkbox from '../components/Checkbox';
import RadioButton from '../components/RadioButton';
import AccountLists from './AccountLists';

const AccountBook = () => {
	const accountTypeOptions = [
		'생활용품',
		'교육',
		'문화색활',
		'패션/미용',
		'교통/차량',
		'기타',
	];

	return (
		<>
			<Wrapper>
				<h2 className='sr_only'>가계부 폼</h2>
				<form>
					<Input label='이름' id='name' value='' onBlur={() => {}} />
					<Input
						type='number'
						label='가격'
						id='price'
						value=''
						onBlur={() => {}}
					/>
					<SelectInput
						label='유형'
						id='type'
						options={accountTypeOptions}
						value=''
						onBlur={() => {}}
					/>
					<div className='field-group'>
						<Input
							label='메모'
							id='memo'
							value=''
							onBlur={() => {}}
							isRequired={false}
						/>
						<Checkbox
							label='메모 작성'
							id='memo'
							isChecked={false}
							onChange={() => {}}
						/>
					</div>
					<div className='field-group'>
						<label>재구매 의사</label>
						<RadioButton
							label='한다'
							id='yes'
							group='willRepurchase'
							onChange={() => {}}
						/>
						<RadioButton
							label='안한다'
							id='no'
							group='willRepurchase'
							onChange={() => {}}
						/>
					</div>
				</form>
			</Wrapper>
			<AccountLists />
		</>
	);
};

export default AccountBook;

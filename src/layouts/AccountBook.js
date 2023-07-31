import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import SelectInput from '../components/SelectInput';
import Checkbox from '../components/Checkbox';
import RadioButton from '../components/RadioButton';
import AccountLists from './AccountLists';
import { useState } from 'react';

const AccountBook = () => {
	const accountTypeOptions = [
		'생활용품',
		'교육',
		'문화색활',
		'패션/미용',
		'교통/차량',
		'기타',
	];

	const [allAccountsList, setAllAccountsList] = useState([]);
	const [accountList, setAccountList] = useState({
		name: '',
		price: 0,
		type: accountTypeOptions[0],
		dateToPurchase: '',
		memo: '',
		willRepurchase: false,
	});
	const [isMemoInputActive, setIsMemoInputActive] = useState(false);

	const handleAccountInput = e => {
		setAccountList({ ...accountList, [e.target.name]: e.target.value });
	};

	const handleAccountRadioButton = willRepurchase => {
		setAccountList({ ...accountList, willRepurchase: willRepurchase });
	};

	const handleMemoInputActive = e => {
		if (!e.target.checked) {
			setAccountList({ ...accountList, memo: '' });
		}
		setIsMemoInputActive(e.target.checked);
	};

	const validForm = () => {
		if (accountList.name.trim().length === 0) {
			alert('이름을 입력해 주세요 (공백 제외)');
			return false;
		}
		if (isMemoInputActive && accountList.memo.trim().length === 0) {
			alert(
				'메모를 입력해 주세요 (공백 제외)\n입력을 원하지 않는 경우 메모 작성을 해제해 주세요.'
			);
			return false;
		}
		return true;
	};

	const resetForm = () => {
		setAccountList({
			name: '',
			price: 0,
			type: accountTypeOptions[0],
			dateToPurchase: '',
			memo: '',
			willRepurchase: false,
		});
	};

	const handleForm = e => {
		e.preventDefault();
		if (!validForm()) return;
		setAllAccountsList([...allAccountsList, accountList]);
		resetForm();
	};

	return (
		<>
			<Wrapper>
				<h2 className='sr-only'>가계부 폼</h2>
				<form onSubmit={handleForm}>
					<Input
						label='이름'
						id='name'
						value={accountList.name}
						onBlur={handleAccountInput}
					/>
					<Input
						type='number'
						label='가격'
						id='price'
						value={accountList.price}
						onBlur={handleAccountInput}
					/>
					<SelectInput
						label='유형'
						id='type'
						options={accountTypeOptions}
						value={accountList.type}
						onChange={handleAccountInput}
					/>
					<Input
						type='date'
						label='구입 날짜'
						id='dateToPurchase'
						value={accountList.dateToPurchase}
						onBlur={handleAccountInput}
					/>
					<div className='field-group'>
						<Input
							label='메모'
							id='memo'
							value={accountList.memo}
							onBlur={handleAccountInput}
							isRequired={isMemoInputActive}
						/>
						<Checkbox
							label='메모 작성'
							id='memo-check'
							isChecked={isMemoInputActive}
							onChange={handleMemoInputActive}
						/>
					</div>
					<div className='field-group'>
						<label>재구매 의사</label>
						<RadioButton
							label='한다'
							id='yes'
							group='willRepurchase'
							isChecked={accountList.willRepurchase}
							onChange={() => handleAccountRadioButton(true)}
						/>
						<RadioButton
							label='안한다'
							id='no'
							group='willRepurchase'
							isChecked={!accountList.willRepurchase}
							onChange={() => handleAccountRadioButton(false)}
						/>
					</div>
					<button type='submit'>추가하기</button>
				</form>
			</Wrapper>
			<AccountLists
				lists={allAccountsList}
				accountTypeList={accountTypeOptions}
				onFilterByAccount={() => {}}
				onSortByField={() => {}}
				onRangeByDate={() => {}}
			/>
		</>
	);
};

export default AccountBook;

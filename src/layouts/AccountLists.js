import { useState } from 'react';
import SelectInput from '../components/SelectInput';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';

const AccountLists = ({
	lists,
	filteredLists,
	accountTypeList,
	onFilterByAccount,
	onSortByField,
	onRangeByDate,
}) => {
	const sortLists = ['가격 높은 순', '가격 낮은 순', '최신 순', '오래된 순'];
	const [filterBy, setFilterBy] = useState(0);
	const [sortBy, setSortBy] = useState(sortLists[0]);
	const [date, setDate] = useState({ start: '', end: '' });

	const currentLists = filteredLists.length > 0 ? filteredLists : lists;
	return (
		<>
			<ul className='filter-lists'>
				<li>
					<SelectInput
						label='유형 필터'
						id='type'
						options={accountTypeList}
						value={filterBy}
						onChange={e => {
							setFilterBy(() => e.target.value);
							onFilterByAccount(e.target.value);
						}}
					/>
				</li>
				<li>
					<SelectInput
						label='정렬 기준'
						id='type'
						options={sortLists}
						value={sortBy}
						onChange={e => {
							setSortBy(() => e.target.value);
							onSortByField(sortBy);
						}}
					/>
				</li>
				<li>
					<Input
						type='date'
						label='시작 시간'
						id='startDate'
						value={date.start}
						onBlur={e => {
							setDate(prev => ({ ...prev, start: e.target.value }));
							onRangeByDate(date);
						}}
					/>
				</li>
				<li>
					<Input
						type='date'
						label='끝 시간'
						id='endDate'
						value={date.end}
						onBlur={e => {
							setDate(prev => ({ ...prev, end: e.target.value }));
							onRangeByDate(date);
						}}
					/>
				</li>
			</ul>
			<Wrapper>
				{currentLists &&
					currentLists.map(list => (
						<div className='account-list' key={list.name}>
							<span>이름: {list.name}</span>
							<span>가격: {list.price}</span>
							<span>유형: {list.type}</span>
							<span>구입 날짜: {list.dateToPurchase}</span>
							{list.memo.length > 0 && <span>메모: {list.memo}</span>}
							<span>재구매의사: {list.willRepurchase ? '있음' : '없음'}</span>
						</div>
					))}
			</Wrapper>
		</>
	);
};

export default AccountLists;

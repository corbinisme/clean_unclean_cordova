import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import {useState, useEffect, useMemo} from 'react';
import dataImport from './data.json';


const columns = [
	{
		name: 'Name',
		selector: row => row.name,
		sortable: true,
	},
	{
		name: 'Status',
		selector: row => row.status,
		sortable: true,
	},
];


const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<div className="input-group">
		<input
			id="search"
			type="text"
            className='form-control'
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<button className='btn btn-primary text-white' onClick={onClear}>
			X
		</button>
	</div>
);





function List(){


    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = dataImport.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );


    const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return (
        <div>
            <DataTable
                columns={columns}
                data={filteredItems}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
		    />


        </div>
    )
}

export default List;
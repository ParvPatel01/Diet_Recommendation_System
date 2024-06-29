import React from 'react';
import DietCalculatorSearchComponent from '../components/DietCalculatorComponent';

const DietCalculatorPage = () => {
    const [search, setSearch] = React.useState('');
    
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignContent: 'center', margin: '1em', flexDirection: 'column'}}>
            <h1>Diet Calculator</h1>
            <DietCalculatorSearchComponent search={search} setSearch={setSearch} />
            
        </div>
    );
}

export default DietCalculatorPage;
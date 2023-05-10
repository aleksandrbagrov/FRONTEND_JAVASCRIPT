export default function AccountsFilter({ radio, setRadio }) {

    const handleChange = r => {

        setRadio(r);

    }

    return (
        <div className="filter">
            <fieldset>
                    <legend>Filter Accounts</legend>
                    <div>
                        <input id="_Ar" type="checkbox" onChange={_ => handleChange('A')} checked={radio === 'A'} />
                        <label htmlFor="_Ar" >All Accounts</label>
                    </div>
                    <div>
                        <input id="_Br" type="checkbox" onChange={_ => handleChange('B')} checked={radio === 'B'} />
                        <label htmlFor="_Br">Accounts with Funds</label>
                    </div>
                    <div>
                        <input id="_Cr" type="checkbox" onChange={_ => handleChange('C')} checked={radio === 'C'} />
                        <label htmlFor="_Cr">Zero Funds Accounts</label>
                    </div>
                </fieldset>
        </div>
    )

}
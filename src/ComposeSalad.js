import { useState } from 'react';
import inventory from './inventory.mjs';

function ComposeSalad(props) {
  const proteinList = Object.keys(props.inventory).filter(name => props.inventory[name].protein);
  const extrasList = Object.keys(props.inventory).filter(name => props.inventory[name].extra);
  const dressingList = Object.keys(props.inventory).filter(name => props.inventory[name].dressing);
  const [extras, setExtra] = useState({ Bacon: true, Fetaost: true });

  return (
    <div className="row h-200 p-5 bg-light border rounded-3">
      <div className="continer col-12">
        <h2>Välj innehållet i din sallad</h2>
        <form>
          <Foundation inventory={inventory}></Foundation>
          <div className="form-group pb-3">
            <label htmlFor="protein">Välj protein</label>
            <select id="protein" className='form-select'>
              {proteinList.map(name => <option value={name} key={name}>{name}</option>)}
            </select>
          </div>
          <div className="row pb-3">
            {extrasList.map(name => 
            <div className="form-check col-4">
              <input id={name} value={name} key={name} className='form-check-input' type="checkbox"/>
              <label className='form-check-label' htmlFor={name}>{name}</label>
            </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="dressing">Välj dressing</label>
            <select id="dressing" className='form-select'>
              {dressingList.map(name => <option value={name} key={name}>{name}</option>)}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

function Foundation(props) {
  const foundationList = Object.keys(props.inventory).filter(name => props.inventory[name].foundation);
  const [foundation, setFoundation] = useState('Pasta');
  
  return (
    <div className="form-group pb-3">
    <label htmlFor="bas">Välj din bas</label>
    <select id="bas" className='form-select'>
      {foundationList.map(name => <option value={name} key={name}>{name}</option>)}
    </select>
  </div>
  );
}


export default ComposeSalad;
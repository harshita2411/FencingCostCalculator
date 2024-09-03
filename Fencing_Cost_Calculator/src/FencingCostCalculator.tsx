import React, { useState } from 'react';
import './LoginPage.css';

type Component = {
  name: string;
  weight: number;
  cost: number;
  quantity: number;
};

const FencingCostCalculator = () => {
  const [components, setComponents] = useState<Component[]>([
    { name: 'Weld Mesh Panel (2500x1560mm, 4mm wire)', weight: 20, cost: 50, quantity: 400 },
    { name: 'Fence Post (PRO Universal with base plate)', weight: 15, cost: 30, quantity: 398 },
    { name: 'Clamp (UNICO SHEILD with bolt & nut)', weight: 0.5, cost: 5, quantity: 1600 },
    { name: 'Post Cap (PVC PRO)', weight: 0.2, cost: 2, quantity: 398 },
    { name: 'Anchor Bolt (12x150mm with nut & washer)', weight: 0.1, cost: 1, quantity: 1592 },
    { name: 'Base Plate (175x80x10mm)', weight: 1, cost: 10, quantity: 398 },
  ]);

  const calculateTotal = () => {
    return components.reduce((total, component) => {
      return total + (component.cost * component.quantity);
    }, 0);
  };

  const handleInputChange = (index : number, field : keyof Component, value : string) => {
    const updatedComponents = [...components];

    if (field === 'weight' || field === 'cost' || field === 'quantity') {
      updatedComponents[index][field] = parseFloat(value) || 0;
    }
    else{
      updatedComponents[index][field] = value as any;
    }
    setComponents(updatedComponents);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="fencing-calculator">
        <div className="calculator-container">
          <h2 className="calculator-title">Fencing Cost Calculator (1 km based on Figure 1)</h2>
          <table className="calculator-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Weight (kg)</th>
                <th>Cost (₹)</th>
                <th>Quantity</th>
                <th>Total Cost (₹)</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component, index) => (
                <tr key={index}>
                  <td>{component.name}</td>
                  <td>
                    <input
                      type="number"
                      value={component.weight}
                      onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={component.cost}
                      onChange={(e) => handleInputChange(index, 'cost', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={component.quantity}
                      onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                    />
                  </td>
                  <td>₹{(component.cost * component.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-cost">
            <strong>Total Cost: ₹{calculateTotal().toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FencingCostCalculator;

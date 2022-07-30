const csvtojson = require('csvtojson');

const ProblemSolving = require('./index');

test('should return the same result as in Example', async () => {
  
  const orders = [
    {
      id: "ID1",
      area: "Minneapolis",
      name: "shoes",
      quantity: 2,
      brand: "Air"
    },
    {
      id: "ID2",
      area: "Chicago",
      name: "shoes",
      quantity: 1,
      brand: "Air"
    },
    {
      id: "ID3",
      area: "Central Department Store",
      name: "shoes",
      quantity: 5,
      brand: "BonPied"
    },
    {
      id: "ID4",
      area: "Quail Hollow",
      name: "forks",
      quantity: 3,
      brand: "Pfitzcraft"
    }
  ];
  try {
    await ProblemSolving(orders, 'input_example');

    const file0 = await csvtojson().fromFile('0_input_example.csv');
    const file1 = await csvtojson().fromFile('1_input_example.csv');

    expect(parseFloat(file0[0].quantity)).toEqual(2);
    expect(parseFloat(file0[1].quantity)).toEqual(0.75);

    expect(file1[0].brand).toBe('Air');
    expect(file1[1].brand).toBe('Pfitzcraft'); 
  } catch (error) {
    return error;
  }
})

test('should return the same result as in Sample', async () => {

  const orders = [
    {
      id: "ID944806",
      area: "Willard Vista",
      name: "Intelligent Copper Knife",
      quantity: 3,
      brand: "Hilll-Gorczany"
    },
    {
      id: "ID644525",
      area: "Roger Centers",
      name: "Intelligent Copper Knife",
      quantity: 1,
      brand: "Kunze-Bernhard"
    },
    {
      id: "ID348204",
      area: "Roger Centers",
      name: "Small Granite Shoes",
      quantity: 4,
      brand: "Rowe and Legros"
    },
    {
      id: "ID710139",
      area: "Roger Centers",
      name: "Intelligent Copper Knife",
      quantity: 4,
      brand: "Hilll-Gorczany"
    },
    {
      id: "ID426632",
      area: "Willa Hollow",
      name: "Intelligent Copper Knife",
      quantity: 4,
      brand: "Hilll-Gorczany"
    }
  ]
  try {
    await ProblemSolving(orders, 'order_log00');
    const file0 = await csvtojson().fromFile('0_order_log00.csv');
    const file1 = await csvtojson().fromFile('1_order_log00.csv');
    
    expect(parseFloat(file0[0].quantity)).toBe(2.4);
    expect(parseFloat(file0[1].quantity)).toBe(0.8);
    
    expect(file1[0].brand).toBe('Hilll-Gorczany');
    expect(file1[1].brand).toBe('Rowe and Legros');
  } catch (error) {
   return error; 
  }
})

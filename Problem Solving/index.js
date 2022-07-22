const csvtojson = require('csvtojson');
const readline = require('readline');
const jsontocsv = require('json-2-csv');
const fs = require('fs');

const readLineAsync = () => {
  const rl = readline.createInterface({
    input: process.stdin
  });

  return new Promise((resolve) => {
    rl.prompt();
    rl.on('line', (line) => {
      rl.close();
      resolve(line);
    });
  });
};

GetInputFile = async () => {
  console.log('Plesc enter filename with ext');
  const fileName = await readLineAsync();

  const orders = await csvtojson().fromFile(`${fileName}`)

  ProblemSolving(orders, fileName);
}

ProblemSolving = async (orders, fileName) => {

  
  const noOfOrders = orders.length;

  const file0Output = [];
  const file1Output = [];

  const productBrandTotals = {};
  
  for (const order of orders) {
    if (productBrandTotals[order.name]) {
      let brandTotal = 1;
      if (productBrandTotals[order.name][order.brand]) {
        brandTotal = productBrandTotals[order.name][order.brand] + 1;
      } 
      productBrandTotals[order.name] = {
        ...productBrandTotals[order.name],
        total: productBrandTotals[order.name].total + parseInt(order.quantity),
        [order.brand]: brandTotal,
      }
    } else {
    
      productBrandTotals[order.name] = {
        total: parseInt(order.quantity),
        [order.brand]: 1 ,
      }
    
    }
  }

  for (const key of Object.keys(productBrandTotals)) {
    file0Output.push({ product: key, quantity: productBrandTotals[key].total / noOfOrders  })
    let max = 0;
    let brand = '';
    for (const key2 of Object.keys(productBrandTotals[key])) {
      if(key2.toString() !== 'total') {
        if (productBrandTotals[key][key2] > max){
          brand = key2;
          max = productBrandTotals[key][key2];
        }
      }
    }
    file1Output.push({ product: key, brand })
  }

  const file0 = await jsontocsv.json2csvAsync(file0Output);
  const file1 = await jsontocsv.json2csvAsync(file1Output);
  
  fs.writeFileSync(`0_${fileName}`, file0);
  fs.writeFileSync(`1_${fileName}`, file1);
}


module.exports = ProblemSolving;
GetInputFile();
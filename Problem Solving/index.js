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

ConvertCsvToJson = (csv) => {
  const ordersCSV = csv.replace(/\r\n/g, ",");

  const splitOrders = ordersCSV.split(",")
  const orders = [];

  for (let index = 0; index < splitOrders.length; index += 5) {
    const order = {}

    order.id = splitOrders[index]
    order.area = splitOrders[index + 1]
    order.name = splitOrders[index + 2]
    order.quantity = splitOrders[index + 3]
    order.brand = splitOrders[index + 4]

    orders.push(order);
  }
  return orders;
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
  
  fs.writeFileSync(`0_${fileName}.csv`, file0);
  fs.writeFileSync(`1_${fileName}.csv`, file1);
}


module.exports = ProblemSolving;

GetInputFile = async () => {
  console.log('Please enter the filename');
  const fileName = await readLineAsync();

  const csv = await fs.readFileSync(`${fileName}.csv`, "utf8");

  const orders = ConvertCsvToJson(csv);

  ProblemSolving(orders, fileName);
}

GetInputFile();
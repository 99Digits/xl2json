const XlsxPopulate = require('xlsx-populate');

const xlfunction = async () => {
  const file1 = await XlsxPopulate.fromFileAsync('./Product_Image_Updated.xlsx');
  const file2 = await XlsxPopulate.fromFileAsync('./product.xlsx');

  const sheet1 = file1.sheet('Sheet1');
  if (!sheet1) {
    console.log('Sheet1 does not exist in the first Excel file.');
    return;
  }

  const sheet2 = file2.sheet('Sheet1');
  if (!sheet2) {
    console.log('Sheet1 does not exist in the second Excel file.');
    return;
  }

  const data1 = sheet1.usedRange().value();
  const data2 = sheet2.usedRange().value();

  if (JSON.stringify(data1) === JSON.stringify(data2)) {
    console.log('The data in the two Excel sheets is identical.');
  } else {
    console.log('The data in the two Excel sheets is different.');
  }
};

xlfunction();

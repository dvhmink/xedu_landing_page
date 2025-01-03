const defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';
const chuHangDonVi = ('1 một' + defaultNumbers).split(' ');
const chuHangChuc = ('lẻ mười' + defaultNumbers).split(' ');
const chuHangTram = ('không một' + defaultNumbers).split(' ');

function convertBlockThree(number: string) {
  if (number == '000') return '';
  const _a = number + ''; //Convert biến 'number' thành kiểu string

  let chuc_dv = '';
  const tram = chuHangTram[parseInt(_a[0])] + ' trăm';
  //Kiểm tra độ dài của khối
  switch (_a.length) {
    case 0:
      return '';
    case 1:
      return chuHangDonVi[parseInt(_a)];
    case 2:
      return convertBlockTwo(_a);
    case 3:
      if (_a.slice(1, 3) != '00') {
        chuc_dv = convertBlockTwo(_a.slice(1, 3));
      }
      return tram + ' ' + chuc_dv;
  }
}

export function convertBlockTwo(number: string) {
  let dv = chuHangDonVi[parseInt(number[1])];
  const chuc = chuHangChuc[parseInt(number[0])];
  let append = '';

  // Nếu chữ số hàng đơn vị là 5
  if (parseInt(number[0]) > 0 && parseInt(number[1]) == 5) {
    dv = 'lăm';
  }

  // Nếu số hàng chục lớn hơn 1
  if (parseInt(number[0]) > 1) {
    append = ' mươi';
    if (parseInt(number[1]) == 1) {
      dv = ' mốt';
    }
  }

  return chuc + '' + append + ' ' + dv;
}

const dvBlock = '1 ngàn triệu tỷ'.split(' ');

export function toVietnamese(number: string) {
  const str = parseInt(number) + '';
  let i = 0;
  const arr = [];
  let index = str.length;
  const result = [];
  let rsString = '';

  if (index == 0 || str == 'NaN') {
    return '';
  }

  // Chia chuỗi số thành một mảng từng khối có 3 chữ số
  while (index >= 0) {
    arr.push(str.substring(index, Math.max(index - 3, 0)));
    index -= 3;
  }

  // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != '' && arr[i] != '000') {
      result.push(convertBlockThree(arr[i]));

      // Thêm đuôi của mỗi khối
      if (dvBlock[i]) {
        result.push(dvBlock[i] + ', ');
      }
    }
  }

  // Join mảng kết quả lại thành chuỗi string
  rsString = result.join(' ');

  // Trả về kết quả kèm xóa những ký tự thừa
  const res = rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
  return res.charAt(0).toUpperCase() + res.slice(1, -1);
}

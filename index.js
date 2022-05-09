const inrWords = (n, rs = '₹', ps = 'paisa') => {
  const [SUB_TWENTY, TENS, DIGIT_MAP] = [[
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',],
  ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',],
  [['crore', 10000000, 0], ['lacs', 100000, 2], ['thousand', 1000, 2], ['hundred', 100, 3]]];

  const getWords = (num, k) => {
    const [val, rem] = [Math.floor(num / 100), num % 100];
    let z = val > 0 ? (SUB_TWENTY[val] + (k === 'crore' ? ' hundred ' : '')) : '';
    if (rem < 20) {
      z += SUB_TWENTY[rem];
    } else {
      const [tenVal, tenRem] = [Math.floor(rem / 10), rem % 10];
      z += `${TENS[tenVal]} `;
      z += tenRem > 0 ? SUB_TWENTY[tenRem] : '';
    }
    return z.trim();
  };

  const getNos = (val, yNo, k, left) => {
    const digits = yNo.length ? DIGIT_MAP.find(x => x[0] === k)[2] : 0;
    let str = (val < 10 && k === 'hundred' && left.toString().slice(-2) === '00')
      ? +val.toString().padEnd(3, '0')
      : (val === 0 && !yNo.length) ? '' : val.toString().padStart(digits, '0');
    if (yNo.slice(-4, yNo.length - 3) === ',' && k === 'hundred') {
      str = `${+yNo.slice(-3).toString()}${(+str).toString().padStart(2, '0')}`;
      return yNo.slice(0, -3) + str;
    }
    return yNo + (yNo.length ? ',' : '') + str;
  };

  const convertNum = (left, map) => map.reduce((y, [k, v]) => {
    const val = Math.floor(left / v);
    if (k === 'crore') {
      if (val > 999) {
        left -= (val * 10000000);
        const cr = pack([val]);
        y.words += `${cr.words} crores `;
        y.no = getNos(cr.no, y.no, k, left);
      } else {
        y.words += val > 0 ? `${getWords(val, k)} ${k} ` : '';
        y.no = getNos(val, y.no, k, left);
        left %= v;
      }
    } else {
      y.words += val > 0 ? `${getWords(val, k)} ${k} ` : '';
      y.no = getNos(val, y.no, k, left);
      left %= v;
      y.words += k === 'hundred' && left ? getWords(left, k) : '';
      y.no = k === 'hundred' && left ? getNos(left, y.no, k, left) : y.no;
    }
    return y;
  }, { no: '', words: '' });

  const pack = ([left, right = '00']) => {
    const lPart = convertNum(left, DIGIT_MAP);
    lPart.no = lPart.no.length ? lPart.no : '0';
    lPart.no = lPart.no.startsWith(rs) ? lPart.no : `${rs} ${lPart.no}`;
    lPart.words = (rs.length && lPart.words.startsWith(rs) ? lPart.words :
      `${rs} ${lPart.words.length ? lPart.words[0].toUpperCase() + lPart.words.substring(1) : 'Zero'}`).trim();
    if (right !== '00') {
      lPart.no += `.${right}`;
      lPart.words += ` and ${getWords(right)}${ps ? ' ' : ''}${ps}`;
    }
    return lPart;
  };

  if (!Number.isFinite(n)) return { error: 'Not a number which can be converted.' };
  return pack(Number.parseFloat(n).toFixed(2).toString().split('.'));
};

export default inrWords;

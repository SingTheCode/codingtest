## 풀이 현황
## 정리
### 배열 뒤집기 [6019.js](6019.js) 

`array.reverse()`를 사용해 배열을 뒤집는다.

### 진수 변환 [6027.js](6027.js)

**n진수 -> 10진수 (before는 문자)**

`const after = parseInt(before, n);`

**10진수 -> n진수 (before는 숫자)**

`const after = before.toString(n);`

### 대소문자 변환 [6028.js](6028.js)

**대문자로 변환**

`string.toUpperCase();`

**소문자로 변환**

`string.toLowerCase();`

### 유니코드 변환 [6030.js](6030.js)

**문자를 유니코드로 변환 (한 문자씩 변환 가능)**

`char.charCodeAt(0);`

**유니코드를 문자로 변환**

`String.fromCharCode(uni);`

### 올림, 내림, 반올림 [6042.js](6042.js)

**올림**

`Math.ceil(1.222 * 100) / 100; // 1.23`

**내림**

`Math.floor(1.222 * 100) / 100; // 1.21`

**반올림**

`Math.round(1.222 * 100)/ 100 // 1.21`

### 비트연산자 [6059.js](6059.js)

**AND 연산**

`1 & 3`

**OR 연산**

`1 | 3`

**XOR 연산**

`1 ^ 3`

**NOT 연산**

`~1`

**LEFT SHIFT 연산**

`1 << 3`

**RIGHT SHIFT 연산**

`1 >> 3`

**LOGICAL RIGHT SHIFT 연산**

`1 >>> 3`

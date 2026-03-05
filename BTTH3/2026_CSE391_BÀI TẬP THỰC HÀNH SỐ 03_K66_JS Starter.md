
## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console?
Em thấy dòng thông báo trong Console:

"Hello from JavaScript!"
> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?
Điều này cho biết:

Trình duyệt đã tải và thực thi file main.js khi trang được tải; lệnh console.log trong script được chạy.
---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)
Cả hai: trình duyệt (client) và server (ví dụ Node.js).
> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: ........HTML: cấu trúc nội dung trang (thẻ, văn bản, liên kết…).................................................
> - CSS: .........CSS: trình bày / kiểu dáng, bố cục, màu sắc, font................................................
> - JavaScript: ..............JavaScript: logic & tương tác, thao tác DOM, xử lý sự kiện, gọi API.....................................

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age = number ;
typeof name= string ;
typeof isStudent= boolean;

1 + 2 * 3 = 7 ;
"Hello " + "world" = "hello world";
```

> Câu hỏi:
> - Kết quả `typeof age` là gì? number
> - Kết quả `typeof name` là gì? string
> - Kết quả `typeof isStudent` là gì? boolean
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: ............kiểu số (số nguyên hoặc số thực), dùng để tính toán...................................
>   - `string` là: ......................chuỗi ký tự (văn bản).........................
>   - `boolean` là: ..............giá trị đúng/sai (true/false), dùng cho điều kiện.
GPT-5 mini • 1x...............................

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin? "Hello from JavaScript!" (dòng cũ)
"Xin chào, mình là An, năm nay mình 21 tuổi." (với giá trị ví dụ)
> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?
Nếu quên dấu ;: thường JavaScript tự chèn (ASI) nên thường không báo lỗi ngay, nhưng có trường hợp gây lỗi ngầm; DevTools sẽ hiển thị cảnh báo hoặc lỗi nếu cú pháp không hợp lệ.

Nếu quên dấu + khi nối chuỗi: sẽ ra lỗi cú pháp (SyntaxError) hoặc thông báo Unexpected string trong Console (được hiển thị bằng màu đỏ kèm stack trace).
---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?
> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?
Điều thú vị nhất: Console cho thấy kết quả và lỗi ngay lập tức — có thể thử lệnh nhanh, xem giá trị biến, và theo dõi stack trace khi có lỗi để debug nhanh.
Lỗi cú pháp đã gặp & cách xử lý: thường quên dấu + khi nối chuỗi (=> Unexpected string) hoặc quên nháy/ngoặc; sửa bằng cách đọc thông báo lỗi/đường dẫn dòng trong Console, chỉnh cú pháp, rồi reload; nếu cần, tìm nhanh trên Google hoặc hỏi bạn.
---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: .........giỏi...............
> b) Nếu `score = 6`, em dự đoán console sẽ in: .........trung bình...............

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: ............giỏi............
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: ............trung bình............

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?
khi score >= 8.
> - Khi nào chương trình in `"Yếu"`?
khi score < 5.
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):

.........if/else là một loạt điều kiện kiểm tra theo thứ tự; khi điều kiện đầu đúng thì thực hiện nhánh đó, nếu không thì kiểm tra điều kiện tiếp theo, cuối cùng làm nhánh else nếu không điều kiện nào đúng (ví dụ: chọn lối đi thích hợp tại các ngã rẽ)
---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: ...............giỏi...................

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: ....................tên để gọi hàm.............................
>   - Tham số (parameters): ........tên để gọi hàm............................
>   - Thân hàm (body): ..............các lệnh thực thi bên trong............................
>   - Giá trị trả về (return): ........kết quả trả về bởi return..........................
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?
Tái sử dụng code, giảm lặp lại.
Dễ bảo trì và sửa lỗi.
Dễ kiểm thử và đọc hiểu.
---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì? Lấy phần tử DOM có id="status" để tương tác (đọc/ghi nội dung, thay đổi style, ...).
> - Sự kiện `"click"` xảy ra khi nào? Khi người dùng nhấn (click) chuột lên phần tử.
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?
Nội dung thẻ <p id="status"> được cập nhật thành chuỗi "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.".
---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
Có, ví dụ: document.body.style.backgroundColor = "lightblue";

> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.
Ví dụ khác với document.body.style:
document.body.style.fontFamily = "Arial, sans-serif";
---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`? "input" kích hoạt khi nội dung ô nhập thay đổi (gõ/xóa), "click" là hành động nhấn chuột.
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?
Hiển thị rỗng (chuỗi trống) theo code trên.
---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
>   .....Hiển thị rỗng (chuỗi trống) theo code trên............................................................
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
document.getElementById("status").textContent = "Đã thay đổi nội dung.";


---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. ![alt text](image.png)
2. Sau khi nhấn “Chào”.
3. Sau khi đổi nền sang màu đỏ.
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì? Cả hai đoạn code đều có mục tiêu là lắng nghe sự kiện người dùng nhấn chuột (click) vào nút có ID là btnHello và hiển thị một thông báo (alert) lên màn hình.
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. ..........JS thuần: Sử dụng cú pháp dài hơn như document.getElementById("id") để tìm phần tử và addEventListener để gắn sự kiện.......................................................
>   2. ...................Sử dụng ký tự $ và bộ chọn ngắn gọn $("#id") để tìm phần tử, kết hợp với phương thức .on() để xử lý sự kiện, giúp mã nguồn ngắn và dễ đọc hơn..............................................

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
Thường là cách JavaScript có thể thay đổi toàn bộ màu sắc hoặc nội dung trang web chỉ bằng vài dòng lệnh (DOM Manipulation).
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?Bạn có thể chọn làm một Bộ đếm số lần click hoặc Đổi theme sáng/tối (Dark mode) vì nó sử dụng đúng những kiến thức bạn vừa học về sự kiện và thay đổi style.
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu  [ .] Tạm ổn  [ ] Khá rõ
>    - If/else \& hàm:       [ ] Chưa hiểu  [. ] Tạm ổn  [ ] Khá rõ
>    - DOM \& sự kiện:       [ ] Chưa hiểu  [. ] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```


// Đợi HTML tải xong rồi mới chạy JS để đảm bảo tìm thấy các ID
window.addEventListener('DOMContentLoaded', () => {
    console.log("Đã kết nối thành công file JS!");

    // 1. Lấy các phần tử từ HTML
    const statusEl = document.getElementById("status");
    const btnHello = document.getElementById("btnHello");
    const btnRed = document.getElementById("btnRed");
    const nameInput = document.getElementById("nameInput");
    const greeting = document.getElementById("greeting");

    // 2. Xử lý nút "Chào"
    if (btnHello) {
        btnHello.addEventListener("click", function () {
            statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi.";
            statusEl.style.color = "green";
        });
    }

    // 3. Xử lý nút "Đổi màu nền"
    if (btnRed) {
        btnRed.addEventListener("click", function () {
            document.body.style.backgroundColor = "red";
            statusEl.textContent = "Đã đổi màu nền sang đỏ!";
        });
    }

    // 4. Xử lý gõ tên hiện lời chào
    if (nameInput) {
        nameInput.addEventListener("input", function () {
            const value = nameInput.value;
            greeting.textContent = value ? "Xin chào, " + value + "!" : "";
        });
    }
});
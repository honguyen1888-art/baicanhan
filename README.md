# 🚀 MAI HUY PHONG - SMART INTERACTIVE SHOWCASE (TUẦN 3 - TUẦN 6)

> **Dự án:** Smart Interactive Showcase & Design System  
> **Sinh viên thực hiện:** Mai Huy Phong  
> **Mã học phần:** Thiết Kế Web (111101)  
> **Trường:** Đại Học Lạc Hồng (LHU)  

---

## 📌 GIỚI THIỆU TỔNG QUAN

Dự án **Smart Interactive Showcase & Design System** của sinh viên **Mai Huy Phong** là sản phẩm tổng hợp hoàn chỉnh từ Tuần 1 đến Tuần 6 của Học phần Thiết Kế Web (111101) tại Đại học Lạc Hồng.

Website được xây dựng theo kiến trúc **Mobile-First Design System**, tối ưu hóa bố cục bằng **CSS Grid & Flexbox**, tích hợp **60FPS GPU Animations**, **3D Flip Cards**, **AOS Scroll Revelation**, và phòng thí nghiệm **Cubic-Bezier Interactive Lab**.

---

## ⚙️ CÔNG NGHỆ & KỸ THUẬT NỔI BẬT

1. **Semantic HTML5 & W3C Validated:** Cấu trúc thẻ chuẩn `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<footer>` không có lỗi cú pháp.
2. **CSS Grid Layout (Tuần 3):** Khung trang chủ 2 chiều chia Sidebar tác giả (280px) và Main Content (phần còn lại).
3. **Flexbox System (Tuần 3):** Quản lý danh sách Kỹ năng (`flex-wrap: wrap`) và Bảng giá Dịch vụ bằng Equal-Height Flex Cards.
4. **Design System & CSS Tokens (Tuần 4):** Bộ biến CSS `:root` điều khiển màu sắc, khoảng cách (`rem`), thang chữ và giao diện Sáng/Tối (Dark/Light Mode Switcher).
5. **Mobile-First Responsive (Tuần 4):** Đạt hiển thị tối ưu trên Mobile (< 768px), Tablet (768px - 1024px) và Desktop (> 1024px) qua Media Queries.
6. **60FPS GPU Motion & 3D Flip (Tuần 5):** Chuyển động 100% bằng `transform` & `opacity`, thẻ lật 3D `rotateY(180deg)` và hiệu ứng gợn sóng nút bấm (Ripple Wave).
7. **Cubic-Bezier Interactive Lab (Tuần 5):** Cho phép người dùng tùy chỉnh slider tốc độ `--transition-speed` và thử nghiệm các đường cong Easing.
8. **Refactoring & 3-Column Footer (Tuần 6):** Mã nguồn được làm sạch, tối ưu nén hiệu năng và bổ sung chân trang Sticky Footer 3 cột chuyên nghiệp.

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
d:\phong\
├── index.html          # HTML5 Semantic structure đạt chuẩn W3C Validation
├── css/
│   └── style.css       # Design System Tokens, CSS Grid/Flexbox & 60FPS Animations
├── js/
│   └── main.js         # Theme toggle, 3D mouse tilt, 3D Flip, Bezier Lab & Form handlers
├── prompt_logic.md     # Báo cáo Prompt Engineering, giải thích Cubic-Bezier & Tư duy UX (W3 - W6)
└── README.md           # Hướng dẫn dự án & Rubric Self-Checklist
```

---

## 🛠️ HƯỚNG DẪN KHỞI CHẠY (QUICK START)

1. **Khởi chạy trực tiếp:**
   Mở file `index.html` trực tiếp trên các trình duyệt hiện đại (Google Chrome, Microsoft Edge, Safari, Firefox).

2. **Khởi chạy bằng Live Server trong VS Code:**
   - Mở VS Code trong thư mục `d:\phong`.
   - Nhấp chuột phải vào `index.html` -> Chọn **Open with Live Server**.

---

## ⚖️ TIÊU CHÍ CHẤM ĐIỂM (RUBRIC CHECKLIST METRICS)

| Tiêu chí | Trọng số | Tình trạng | Mô tả thực hiện của Mai Huy Phong |
| :--- | :--- | :--- | :--- |
| **Tính tương tác** | **40%** | 🟢 Đạt 100% | 60FPS GPU Animations, thẻ lật 3D Flip, Bezier Lab tương tác trực quan, hiệu ứng Ripple nút bấm. |
| **Tính nhất quán** | **20%** | 🟢 Đạt 100% | CSS Variables Tokens (`--primary`, `--transition-speed`, `--fs-*`) đồng bộ toàn bộ trang web. |
| **Kỹ thuật Git** | **20%** | 🟢 Đạt 100% | Lịch sử commit rõ ràng, phân nhánh feature, đầy đủ báo cáo `prompt_logic.md`. |
| **Tối ưu Mobile** | **20%** | 🟢 Đạt 100% | Bố cục Mobile-First responsive 100%, không bị xuất hiện thanh cuộn ngang (Horizontal scroll). |

---

## 📹 HỒ SƠ NỘP BÀI TỔNG HỢP

1. **Link GitHub Repository:** Toàn bộ mã nguồn hoàn thiện trên nhánh `main`.
2. **File `prompt_logic.md`:** Đã đính kèm chi tiết các Prompt đã dùng từ Tuần 3 đến Tuần 6.
3. **Video Demo / Showcase.gif:** Quay màn hình trải nghiệm từ Header -> Sidebar Grid -> Portfolio Flip -> Bezier Lab -> Form phản hồi.

---
*© 2026 Mai Huy Phong - Học Phần Thiết Kế Web (111101) - Đại Học Lạc Hồng.*

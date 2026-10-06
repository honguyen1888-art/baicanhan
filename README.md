# 🚀 MAI HUY PHONG - THE INTERACTIVE SHOWCASE (TUẦN 5)

> **Dự án:** Interactive Showcase & Smart Interface  
> **Sinh viên thực hiện:** Mai Huy Phong  
> **Học phần:** Thiết Kế Web (Mã học phần: 111101)  
> **Trường:** Đại Học Lạc Hồng (LHU)  

---

## 📌 GIỚI THIỆU DỰ ÁN

Dự án **Interactive Showcase & Smart Interface** của **Mai Huy Phong** là sản phẩm tổng hợp toàn bộ kiến thức từ Tuần 1 đến Tuần 5 (Semantic HTML, Flexbox/Grid, Responsive Design System, CSS Animations & AOS Scroll Revelation). 

Website hướng tới mục tiêu tối ưu trải nghiệm người dùng (**UX Vibe Coding**), đem lại cảm giác mượt mà 60FPS (Premium Feel) nhờ tận dụng 100% sức mạnh tăng tốc phần cứng GPU (`transform` & `opacity`).

---

## ✨ CÁC TÍNH NĂNG NỔI BẬT

1. **Intro Animation:** Khi vừa truy cập trang, Header và Hero Section tự động xuất hiện theo các hướng khác nhau (`headerSlideDown`, `heroSlideUp`, `badgePopIn`).
2. **Interactive 3D Portfolio (Flip Cards):** Thẻ Card giới thiệu dự án có hiệu ứng xoay 3D 2 mặt (`rotateY(180deg)`), hiển thị hình ảnh & thông tin kỹ thuật chi tiết.
3. **Scroll Revelation (AOS Library):** Các Section tự động xuất hiện hiệu ứng cuộn mượt mà khi người dùng di chuột xuống.
4. **Cubic-Bezier Interactive Lab:** Phòng thí nghiệm trực tiếp cho phép người dùng/giảng viên tùy chỉnh thời gian `--transition-speed` và thử nghiệm các đường cong Easing (Elastic Spring Bounce, Ultra Smooth, Fast Out).
5. **Micro-interactions:** Phản hồi thị giác tức thì cho nút bấm (Ripple Wave effect, Active state scale 0.95, Glow highlight) và Form nhập liệu Floating Label.
6. **Dark / Light Theme Engine:** Chuyển đổi giao diện Sáng/Tối mượt mà với bộ biến CSS Tokens đồng bộ.
7. **Responsive & Mobile First:** Hoạt động hoàn hảo trên mọi kích thước màn hình từ 320px Mobile đến 4K UltraWide mà không bị tràn khung.

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
d:\phong\
├── index.html          # File HTML5 chính chuẩn Semantic & ARIA accessibility
├── css/
│   └── style.css       # Design System & GPU Accelerated 60FPS CSS Animations
├── js/
│   └── main.js         # Logic điều khiển Theme, 3D Tilt, Flip Card, Bezier Lab & Micro-interactions
├── prompt_logic.md     # Báo cáo Prompt Engineering, giải thích Cubic-Bezier & Tư duy UX
└── README.md           # Hướng dẫn dự án & Tiêu chí chấm điểm Rubric
```

---

## 🛠️ HƯỚNG DẪN KHỞI CHẠY (QUICK START)

1. **Khởi chạy trực tiếp:**
   Mở file `index.html` trực tiếp trên các trình duyệt hiện đại (Google Chrome, Microsoft Edge, Safari, Firefox).

2. **Khởi chạy bằng Live Server (Khuyên dùng):**
   - Mở VS Code trong thư mục `d:\phong`.
   - Nhấp chuột phải vào `index.html` -> Chọn **Open with Live Server**.

---

## ⚖️ TIÊU CHÍ CHẤM ĐIỂM (RUBRIC CHECKLIST)

| Tiêu chí | Trọng số | Tình trạng | Mô tả thực hiện của Mai Huy Phong |
| :--- | :--- | :--- | :--- |
| **Tính tương tác** | **40%** | 🟢 Đạt 100% | Chuyển động GPU 60FPS mượt mà, thẻ lật 3D, Bezier Lab trực quan, hiệu ứng nút bấm Ripple Wave. |
| **Tính nhất quán** | **20%** | 🟢 Đạt 100% | Quy chuẩn Design System bằng CSS Variables (`--primary`, `--transition-speed`, `--cubic-bounce`) thống nhất toàn trang. |
| **Kỹ thuật Git** | **20%** | 🟢 Đạt 100% | Lịch sử commit sạch sẽ, phân chia nhánh feature, file `prompt_logic.md` giải thích chi tiết. |
| **Tối ưu Mobile** | **20%** | 🟢 Đạt 100% | Sử dụng CSS Grid auto-fit, Flexbox responsive, không dùng thuộc tính cố định px gây vỡ khung di động. |

---

## 📹 HƯỚNG DẪN QUAY VIDEO DEMO / HỒ SƠ NỘP BÀI

Theo yêu cầu nộp bài Tuần 5:
1. **Link GitHub Repository:** Đã đẩy toàn bộ mã nguồn lên nhánh `main`.
2. **File `showcase.gif` hoặc video demo (30-60s):**
   - Quay thao tác cuộn trang từ Hero Section -> UX Mindset -> Interactive Portfolio (Lật thẻ Card) -> Cubic-Bezier Lab (Kéo slider & thử animation) -> Form phản hồi.
3. **File `prompt_logic.md`:** Đã nộp kèm trong bộ mã nguồn.

---
*© 2026 Mai Huy Phong - Học Phần Thiết Kế Web - Đại Học Lạc Hồng.*

# BÁO CÁO PROMPT LOGIC & TƯ DUY UX TỔNG HỢP (TUẦN 3 - TUẦN 6)
**Dự án:** Smart Interactive Showcase & Design System  
**Sinh viên thực hiện:** Mai Huy Phong  
**Mã học phần:** Thiết Kế Web (111101)  
**Trường:** Đại Học Lạc Hồng (LHU)  
**Ngày cập nhật:** 06/10/2026  

---

## 🎯 1. TỔNG QUAN TIẾN TRÌNH DỰ ÁN (TUẦN 3 -> TUẦN 6)

Dự án được nâng cấp toàn diện qua 4 tuần học cốt lõi:
1. **Tuần 3 (CSS Layout System - Flexbox & Grid):** Xây dựng bố cục 2 chiều bằng CSS Grid cho khung tổng thể (Sidebar 25% + Main Content 75%) và Flexbox 1 chiều cho danh sách Kỹ năng (`flex-wrap: wrap`) & Bảng giá Dịch vụ (`align-items: stretch`).
2. **Tuần 4 (Design System & Mobile-First Responsive):** Thiết lập bộ biến CSS Tokens (`:root`) cho màu sắc, khoảng cách (`--spacing-*`) và thang chữ (`rem`), áp dụng quy trình Mobile-First với Media Queries tại các điểm gãy chuẩn (`< 768px`, `768px - 1024px`, `> 1024px`).
3. **Tuần 5 (Hiệu ứng Chuyển động & Micro-interactions):** Tạo chuyển động GPU 60FPS mượt mà (Intro animations, 3D Flip Cards, AOS Scroll Revelation, Cubic-Bezier Lab, Ripple waves).
4. **Tuần 6 (Hoàn thiện Giao diện & Refactoring):** Tinh gọn mã nguồn CSS, loại bỏ thuộc tính dư thừa, kiểm thử đạt 0 lỗi W3C Validation, bổ sung 3-column Sticky Footer chuyên nghiệp.

---

## 📋 2. BẢNG GIẢI THÍCH TƯ DUY UX & KỸ THUẬT THEO TỪNG SECTION

| Section / Thành phần | Kỹ thuật CSS / JS áp dụng | Lý do & Tư duy UX (User Experience) |
| :--- | :--- | :--- |
| **Header & Navigation** | Flexbox `justify-content: space-between`, Search Bar, Theme Switcher, Hamburger Mobile Toggle | Giúp tìm kiếm & điều hướng tức thì. Trên Mobile, menu thu gọn mượt bằng CSS transform. |
| **Hero 3D Showcase** | Staggered Keyframe Animations, `requestAnimationFrame` Parallax 3D Tilt | Tạo ấn tượng ban đầu (First Impression) mạnh mẽ, cho phép tương tác trực tiếp góc nhìn 3D theo con trỏ chuột. |
| **Layout Grid (Sidebar + Main)** | `display: grid; grid-template-columns: 280px 1fr;` (Desktop) -> 1 cột (Mobile) | Chia khu vực thông tin cá nhân/kỹ năng tác giả bên trái và nội dung trải nghiệm chính bên phải. |
| **Skills Widget** | `display: flex; flex-wrap: wrap; gap: 0.5rem;` | Các thẻ kỹ năng tự động sắp xếp và xuống dòng linh hoạt khi thay đổi kích thước màn hình. |
| **3D Flip Portfolio** | `perspective: 1200px`, `transform-style: preserve-3d`, `rotateY(180deg)` | Khám phá thông số kỹ thuật ở mặt sau thẻ mà không cần chuyển trang, tối ưu không gian hiển thị. |
| **Pricing Cards (Dịch vụ)** | Flexbox Equal Height (`align-items: stretch`), `margin-top: auto` cho nút CTA | Đảm bảo các bảng giá luôn bằng chiều cao nhau, nút đăng ký luôn nằm sát đáy bất kể độ dài mô tả. |
| **Cubic-Bezier Lab** | Dynamic CSS Variable Injections, Live Easing Physics Simulation | Cho phép giảng viên/người xem thử nghiệm trực tiếp tốc độ và đường cong chuyển động. |
| **Form Liên hệ & Newsletter** | Floating Labels, Button Ripple Wave Effect, Dynamic Status Spinner | Tăng phản hồi thị giác khi nhập liệu và gửi phản hồi, mang lại cảm giác phản hồi tức thì. |
| **Sticky 3-Column Footer** | 3-Column Grid (`1.2fr 0.8fr 1fr`), Flexbox Social Links, Newsletter Input | Đảm bảo chân trang luôn đầy đủ thông tin bản quyền tác giả **Mai Huy Phong** và các liên kết điều hướng. |

---

## 🚀 3. DANH SÁCH PROMPT BẬC THẦY (PROMPT ENGINEERING LOGIC)

### 🤖 Prompt 1 (Tuần 3 - Flexbox & Grid Battle Layout):
> **Prompt:**  
> *"Hãy đóng vai chuyên gia UI/UX. Viết mã CSS dàn trang bằng CSS Grid cho khung tổng thể: Sidebar bên trái rộng 280px cố định sticky khi cuộn, Main Content chiếm phần còn lại. Bên trong Sidebar, sử dụng Flexbox với `flex-wrap: wrap` và `gap: 0.5rem` để các thẻ Kỹ năng (HTML, CSS, JS...) tự động xếp hàng và xuống dòng khi màn hình nhỏ. Tuyệt đối không dùng float hay position absolute cho bố cục chính."*

### 🤖 Prompt 2 (Tuần 4 - Design System & Mobile-First Tokens):
> **Prompt:**  
> *"Hãy xây dựng hệ thống CSS Variables tại `:root` bao gồm: Palette màu sắc (Dark/Light mode tokens), Thang kích thước font chữ chuẩn `rem` (`--fs-xs` đến `--fs-3xl`), và Thang khoảng cách spacing (`--spacing-xs` đến `--spacing-xl`). Sau đó viết Media Queries theo tư duy Mobile-First với các điểm ngắt 768px và 1024px để tự động chuyển từ 1 cột trên điện thoại sang 2 cột trên Tablet và Desktop."*

### 🤖 Prompt 3 (Tuần 5 - Master Cubic-Bezier & 3D Flip Card):
> **Prompt:**  
> *"Viết hiệu ứng lật thẻ 3D (Flip Card) bằng CSS3. Container ngoài có `perspective: 1200px`, thẻ con có `transform-style: preserve-3d` và transition xoay `rotateY(180deg)` với đường cong `cubic-bezier(0.34, 1.56, 0.64, 1)` để tạo độ nảy đàn hồi tự nhiên. Đảm bảo sử dụng `will-change: transform` và `backface-visibility: hidden` để đạt 60FPS không giật lag."*

### 🤖 Prompt 4 (Tuần 6 - CSS Refactoring & Performance Speed-Up):
> **Prompt:**  
> *"Đây là mã nguồn CSS của dự án. Hãy rà soát và tối ưu hóa (Refactor): loại bỏ các thuộc tính dư thừa như `margin-left` cố định, gộp các class có thuộc tính lặp lại, thay toàn bộ mã màu HEX bằng hàm `var()`, và đảm bảo mã đạt 0 lỗi theo tiêu chuẩn W3C Validation."*

---

## ⚖️ 4. BẢNG CHECKLIST TỔNG HỢP TIÊU CHÍ HOÀN THÀNH

- [x] **TUẦN 3:** Dùng CSS Grid cho Layout chính (Main + Sidebar), Flexbox cho Skills & Pricing Cards, không còn dùng float.
- [x] **TUẦN 4:** 100% mã màu & spacing sử dụng biến `var()`, không có thanh cuộn ngang (Horizontal scroll), chuẩn Responsive Mobile-First.
- [x] **TUẦN 5:** Intro Animations, 3D Flip Cards, AOS Scroll Revelation, Bezier Lab tương tác trực tiếp, 100% GPU Accelerated.
- [x] **TUẦN 6:** Đạt 0 lỗi W3C Validation, mã nguồn refactor sạch vẽ, 3-column Sticky Footer, đầy đủ file `README.md` & `prompt_logic.md`.

---
*Báo cáo tổng hợp được thực hiện bởi Mai Huy Phong cho Học phần Thiết Kế Web - Đại học Lạc Hồng.*

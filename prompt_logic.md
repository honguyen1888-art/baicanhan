# BÁO CÁO PROMPT LOGIC & TƯ DUY UX (TUẦN 5)
**Dự án:** Interactive Showcase & Smart Interface  
**Tác giả / Sinh viên:** Mai Huy Phong  
**Học phần:** Thiết Kế Web (111101) - Đại Học Lạc Hồng  
**Ngày hoàn thành:** 06/10/2026  

---

## 🎯 1. TỔNG QUAN TƯ DUY UX VÀ THIẾT KẾ CHUYỂN ĐỘNG (UX MOTION MINDSET)

Trong thiết kế giao diện hiện đại (Modern Web Interfaces), chuyển động (Animation / Motion) không đơn thuần phục vụ mục đích trang trí thị giác mà là **ngôn ngữ tương tác trực quan (Visual Communication Language)** để dẫn dắt hành vi và nâng cao trải nghiệm người dùng (User Experience).

Tác giả **Mai Huy Phong** đã áp dụng các nguyên tắc cốt lõi sau xuyên suốt dự án:

1. **Hierarchy & Directing Focus (Phân cấp & Định hướng chú ý):**
   - Chuyển động Intro đưa tầm mắt người dùng từ trên xuống: **Header slide down** -> **Badge Pop-in** -> **Headline Gradient** -> **Hero 3D Visual Card**.
2. **Immediate Micro-Feedback (Phản hồi tức thì):**
   - Mọi thao tác click và hover trên nút bấm Call-To-Action (CTA) hay thẻ Card đều có phản hồi thị giác trong vòng **0.1s - 0.35s** (dưới ngưỡng nhận biết độ trễ của não người 100ms).
3. **Spatial Continuity & Cognitive Ease (Tính liên tục không gian):**
   - Thẻ Card sản phẩm sử dụng kỹ thuật lật 3D (**3D Flip Card**) giúp người dùng khám phá mặt sau thông tin chi tiết mà không làm mất ngữ cảnh (Context Switching) hoặc phải chuyển sang trang mới.
4. **Hardware Acceleration & 60FPS Performance (Hiệu năng tuyệt đối):**
   - Chỉ sử dụng `transform` (scale, translate3d, rotateY) và `opacity` để GPU đảm nhiệm render layer riêng biệt, loại bỏ hoàn toàn hiện tượng **Layout Reflow / Repaint** gây giật lag trên di động.

---

## 📋 2. BẢNG GIẢI THÍCH TƯ DUY UX THEO TỪNG SECTION (SECTION UX RATIONALE)

| Section | Hiệu ứng Animation | Tư duy UX & Mục đích Trải nghiệm | Kỹ thuật CSS / JS sử dụng |
| :--- | :--- | :--- | :--- |
| **1. Header & Navigation** | Slide-down, Glassmorphism, Theme Switcher Smooth Rotate | Giúp người dùng xác định ngay thương hiệu **Mai Huy Phong** và hệ thống điều hướng chính khi vừa truy cập trang. Menu thu gọn mượt trên Mobile. | `@keyframes headerSlideDown`, `backdrop-filter`, `transform: rotate()`, CSS Variables |
| **2. Hero Section** | Staggered Fade-In / Slide-Up, Interactive 3D Parallax Tilt, Counter-Up | Tạo ấn tượng ban đầu (First Impression) mạnh mẽ, thể hiện thông số 60FPS & tính hiện đại của Smart Interface. Thẻ 3D nghiêng theo con trỏ chuột tạo cảm giác "chạm" được vào giao diện. | `requestAnimationFrame`, `perspective`, `transform: rotateX() rotateY()`, IntersectionObserver |
| **3. About (UX Mindset)** | AOS Scroll Revelation (`data-aos="fade-up"`), Hover Elevation | Dẫn dắt người dùng đọc các giá trị cốt lõi khi cuộn trang. Khi cuộn tới đâu, nội dung tự xuất hiện tới đó mà không làm tràn ngợp thông tin (Information Overload). | `unpkg.com/aos`, `transform: translateY(-8px)`, `box-shadow` |
| **4. Interactive Portfolio** | 3D Card Flip (RotateY 180deg), Category Filter Smooth Slide | Thẻ lật 2 mặt tối ưu diện tích màn hình. Mặt trước thu hút bằng icon & tiêu đề, mặt sau cung cấp thông số kỹ thuật chi tiết. Bộ lọc giúp tìm kiếm thông tin theo nhu cầu mà không cần load lại trang. | `transform-style: preserve-3d`, `backface-visibility: hidden`, `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| **5. Cubic-Bezier Lab** | Live Physics Simulation Slider, Dynamic Easing Switcher | Cho phép giảng viên / người xem tương tác trực tiếp, tùy chỉnh tốc độ `--transition-speed` và đường cong easing để tự kiểm chứng độ mượt của Vibe Coding. | Dynamic CSS Variable Injections via JS, `transform: translateX() scale()` |
| **6. Contact & Footer** | Floating Label Inputs, Ripple Wave Click, Pulse Heart Animation | Tăng tính chuyên nghiệp khi người dùng nhập phản hồi. Nhãn floating di chuyển mượt mà lên trên input giúp tiết kiệm không gian và tránh bị mất tên trường. | `:focus ~ .form-label`, `@keyframes rippleWave`, `@keyframes spin` |

---

## 🚀 3. DANH SÁCH PROMPT BẬC THẦY (PROMPT ENGINEERING LOGIC)

Dưới đây là các câu Prompt được tối ưu theo kỹ thuật **Vibe Coding** nhằm tinh chỉnh các thông số `cubic-bezier` và xử lý triệt để lỗi hiệu ứng giật lag:

### 🤖 Prompt 1: Tinh chỉnh đường cong Cubic-Bezier tự nhiên (Master Elastic & Apple Easing)
> **Prompt:**  
> *"Hãy viết cho tôi 2 biến CSS timing-function chuyên nghiệp:  
> 1. `--cubic-smooth`: Mô phỏng đường cong decelerate của Apple (nút xuất hiện mượt, dừng êm không giật).  
> 2. `--cubic-bounce`: Mô phỏng hiệu ứng spring bounce (nảy nhẹ đàn hồi tự nhiên như iOS).  
> Vui lòng cung cấp tọa độ toán học `cubic-bezier(x1, y1, x2, y2)` chính xác, giải thích ý nghĩa các trục toán học và cấu hình thời gian chuẩn `--transition-speed: 0.35s` để đạt 60fps."*

- **Kết quả thu được:**
  ```css
  :root {
    --transition-speed: 0.35s;
    --cubic-smooth: cubic-bezier(0.16, 1, 0.3, 1);       /* Ultra Smooth Out */
    --cubic-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);    /* Elastic Spring */
  }
  ```
- **Giải thích:** `cubic-bezier(0.34, 1.56, 0.64, 1)` có giá trị `y1 = 1.56` (> 1.0) khiến cho phần tử vọt qua vị trí đích 56% rồi nảy lùi lại, tạo cảm giác đàn hồi chân thực.

---

### 🤖 Prompt 2: Refactor & Tối ưu hiệu năng loại bỏ GPU Reflow / Lag
> **Prompt:**  
> *"Đoạn CSS chuyển động hiện tại đang dùng `top: 20px` và `left: 50px` gây sụt giảm FPS trên trình duyệt di động do liên tục kích hoạt Layout Reflow & Repaint. Hãy refactor toàn bộ CSS sang 100% thuộc tính tăng tốc phần cứng GPU (`transform: translate3d()`, `scale()`, `rotate()`, `opacity`). Đảm bảo thêm `will-change: transform` ở các phần tử tương tác cao và thiết lập `backface-visibility: hidden` để khắc phục lỗi rung hình (flickering) khi lật thẻ 3D."*

- **Kết quả giải quyết lỗi:**
  - **Trước refactor (Lỗi giật lag):**
    ```css
    /* KHÔNG DÙNG - CŨ */
    .card:hover {
        top: -10px; /* Kích hoạt Reflow toàn trang */
        left: 5px;
    }
    ```
  - **Sau refactor (Chuẩn 60FPS GPU):**
    ```css
    /* TỐI ƯU GPU - MỚI */
    .feature-card {
        will-change: transform;
        transition: transform var(--transition-speed) var(--cubic-bounce);
    }
    .feature-card:hover {
        transform: translateY(-8px); /* 100% Render trên GPU Composite Layer */
    }
    ```

---

### 🤖 Prompt 3: Lập trình Thẻ Lật 3D (Interactive 3D Flip Card Architecture)
> **Prompt:**  
> *"Viết cấu trúc HTML/CSS cho hệ thống Flip Card 3D gồm 2 mặt (Front & Back). Yêu cầu:  
> - Sử dụng CSS `perspective: 1200px` ở container ngoài để tạo chiều sâu 3D.  
> - Thẻ `.flip-card` sử dụng `transform-style: preserve-3d` và `transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)`.  
> - 2 mặt `.flip-card-front` và `.flip-card-back` sử dụng `backface-visibility: hidden` để ẩn mặt sau khi xoay.  
> - Hỗ trợ cả 2 phương thức lật: Hover trên Desktop và Click nút bấm 'Lật thẻ' trên Mobile."*

- **Kết quả thu được:** Hệ thống card lật 3D phẳng mượt, hoạt động xuất sắc trên cả chuột và màn hình cảm ứng di động.

---

## 🛠️ 4. QUY TRÌNH REVIEW MÃ NGUỒN & GIT WORKFLOW

Để đáp ứng tiêu chí **Kỹ thuật Git (20%)** trong Rubric chấm điểm:

1. **Hệ thống nhánh Git (Branching Strategy):**
   - `main`: Nhánh sản phẩm hoàn thiện sẵn sàng nộp bài.
   - `feature/intro-animation`: Xây dựng Header, Hero Section & Intro keyframes.
   - `feature/portfolio-flip-cards`: Xây dựng hệ thống Flip Card 3D & Filter.
   - `feature/cubic-bezier-lab`: Lập trình phòng thí nghiệm chuyển động.
2. **Quy trình Pull Request (PR) & Peer Review:**
   - Mỗi tính năng animation đều được tạo PR, kiểm tra xung đột CSS Variables (`--transition-speed`) trước khi Merge vào `main`.
   - Lịch sử commit tuân thủ chuẩn **Conventional Commits**: `feat:`, `fix:`, `style:`, `docs:`.

---

## 🏆 5. ĐÁNH GIÁ TIÊU CHÍ RUBRIC (SELF-CHECKLIST)

- [x] **Tính tương tác (40%):** Hiệu ứng 60FPS mượt mà, không lag, mang lại trải nghiệm Premium Feel với 3D Flip Cards & Bezier Lab.
- [x] **Tính nhất quán (20%):** Sử dụng hệ thống CSS Variables đồng bộ màu sắc, font chữ và timing curves toàn bộ trang.
- [x] **Kỹ thuật Git (20%):** Cấu trúc repository sạch vẽ, lịch sử commit rõ ràng, file `prompt_logic.md` đầy đủ.
- [x] **Tối ưu Mobile (20%):** Thiết kế Responsive mượt từ 320px đến 4K, 100% Transform GPU không tràn khung.

---
*Báo cáo được hoàn tất bởi Mai Huy Phong cho học phần Thiết Kế Web - Đại học Lạc Hồng.*

# 📖 Phân Định Và An Ủi Giả — Web Experience (Academic Long-Read)

> **Khảo Luận Về Những An Ủi Giả Của Sự Dữ Trong Đời Sống Tâm Linh & Tâm Lý Học**  
> Nền tảng web trình bày báo cáo nghiên cứu học thuật dài (Long-read) được tối ưu hóa chuẩn biên tập, thiết kế theo phong cách Học thuật Công giáo (Catholic Academic Design System).

---

## 🌟 Tổng Quan Dự Án

Dự án là một trải nghiệm đọc web đơn trang (Single-Page Long-Read) chuyên sâu về phân định tâm linh, đối chiếu giữa Thần học Tu đức Inhaxiô, Tâm lý học Siêu cá nhân (*Spiritual Bypassing*) và Triết học Hiện sinh (*Mauvaise Foi* của Jean-Paul Sartre). 

Trang web được xây dựng nhằm mang lại cảm giác trang trọng, sâu lắng và học thuật như một cuốn sách cổ, đồng thời trang bị đầy đủ các công cụ tương tác hiện đại giúp nâng cao trải nghiệm đọc nội dung dài.

---

## 🚀 Công Nghệ Sử Dụng (Tech Stack)

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Thư viện UI:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) với hệ thống Design Tokens tùy chỉnh qua CSS Custom Properties
* **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes) (Hỗ trợ Chế độ Sáng / Tối mượt mà)
* **Accessibility & UI Components:** [@radix-ui/react-tooltip](https://www.radix-ui.com/)
* **Icons:** [lucide-react](https://lucide.dev/)
* **Fonts:** `Playfair Display` (Headings), `Lora` (Body text), `Inter` (UI elements) từ `next/font/google`

---

## ✨ Các Tính Năng Nổi Bật

### 🎨 1. Hệ Thống Thiết Kế Học Thuật & Công Giáo (Design System)
* **Bảng màu:**
  * **Background:** Nền giấy cổ *Parchment* (`#F9F8F6` / Dark `#121212`) giúp giảm mỏi mắt khi đọc lâu.
  * **Primary Accent:** Đỏ Hồng Y *Cardinal Red* (`#7F1D1D` / Dark `#EF4444`) đại diện cho Phụng vụ Công giáo và Thánh Linh.
  * **Secondary Accent:** Vàng Ochre/Gold (`#B45309` / Dark `#FBBF24`) cho các đường viền, trang trí và trích dẫn.
  * **Text:** Màu than *Charcoal* (`#292524` / Dark `#E5E5E5`) bảo vệ thị lực.
* **Hình khối & Trang trí:** Sử dụng họa tiết thánh giá ✟, đường phân cách hoàng gia, và chữ hoa đầu dòng (Drop-cap / Capitalization style).

### 📑 2. Điều Hướng & Mục Lục Thông Minh (Table of Contents)
* **Desktop:** Sidebar cố định (Sticky) ở bên trái bài viết.
* **Mobile:** Nút bấm nổi mở ra bảng chỉ mục dạng *Bottom Sheet* kèm lớp phủ mờ (Overlay).
* **Tự động theo dõi:** Sử dụng `IntersectionObserver` để tự động highlight phần mục lục tương ứng với vị trí người dùng đang đọc.

### 🛠️ 3. Thanh Công Cụ Đọc Đóng/Mở (Collapsible Reading Controls)
* Nút bấm tiện lợi ở góc màn hình có khả năng **đóng/mở gọn gàng** (Collapsible) để tránh che khuất nội dung bài viết.
* **Chế độ Sáng / Tối (Light / Dark Mode):** Chuyển đổi màu nền và màu chữ linh hoạt.
* **Tăng / Giảm cỡ chữ (A+ / A-):** Tự do điều chỉnh cỡ chữ bài đọc từ `12px` đến `30px`, lưu trạng thái qua `localStorage`.

### 💬 4. Tương Tác Trích Dẫn Học Thuật (Interactive Citations & Tooltips)
* **Tooltip tức thì:** Di chuột (Desktop) hoặc chạm (Mobile) vào số trích dẫn trong bài (ví dụ `[1]`, `[2]`) sẽ hiển thị hộp thoại xem nhanh thông tin nguồn tài liệu.
* **Smooth Scroll:** Click vào trích dẫn sẽ cuộn mượt xuống đúng mục tương ứng trong danh mục 49 tài liệu tham khảo cuối bài.

### 📤 5. Chia Sẻ & Tối Ưu In Ấn (SEO, Social & Print)
* **Nút Chia sẻ:** Hỗ trợ chia sẻ bài viết lên Facebook, Twitter (X) và Sao chép đường dẫn (Copy Link).
* **Tối ưu In ấn (`@media print`):** Khi bấm `Ctrl + P` (hoặc `Cmd + P`), trang web tự động loại bỏ tất cả thanh công cụ, sidebar, màu nền và chuyển chữ về đen thuần để in giấy chuẩn A4.
* **Chuẩn SEO:** Tích hợp đầy đủ thẻ OpenGraph, Twitter Card, Meta Robots, Viewport và cấu hình `themeColor`.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
phan-dinh/
├── app/
│   ├── globals.css         # Custom Design System, CSS Variables, Theme Tokens, Print Styles
│   ├── layout.tsx          # Root Layout, Next Font setup, ThemeProvider & SEO Metadata
│   └── page.tsx            # Nội dung 9 phần của bài báo cáo, bảng so sánh & 49 nguồn trích dẫn
├── components/
│   ├── Citation.tsx        # Radix UI Tooltip cho trích dẫn học thuật
│   ├── ReadingControls.tsx # Thanh công cụ đọc đóng/mở (Dark mode, Cỡ chữ)
│   ├── ReadingProgress.tsx # Thanh tiến trình đọc (Gradient bar ở đỉnh trang)
│   ├── ScrollToTop.tsx     # Nút cuộn lên đầu trang
│   ├── ShareButtons.tsx    # Nút chia sẻ Facebook, Twitter, Copy Link
│   ├── TableOfContents.tsx # Mục lục thông minh (Sticky Desktop + Mobile Bottom Sheet)
│   └── ThemeProvider.tsx  # Next-themes wrapper
├── public/                 # Tài nguyên tĩnh (Hình ảnh OG, Favicon...)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu cầu môi trường
* **Node.js:** `>= 18.0.0`
* **npm** hoặc **yarn** / **pnpm**

### Các bước thực hiện

1. **Di chuyển vào thư mục dự án:**
   ```bash
   cd phan-dinh
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies):**
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển (Dev Server):**
   ```bash
   npm run dev
   ```
   Trang web sẽ chạy tại đường dẫn: `http://localhost:3000`

4. **Đóng gói dự án (Production Build):**
   ```bash
   npm run build
   ```

5. **Chạy bản thử nghiệm Production:**
   ```bash
   npm run start
   ```

---

## 🌐 Hướng Dẫn Triển Khai (Deployment)

Dự án được tối ưu hóa 100% cho việc triển khai trên nền tảng **Vercel**:

1. Đẩy mã nguồn dự án lên **GitHub / GitLab / Bitbucket**.
2. Đăng nhập vào [Vercel](https://vercel.com/) và chọn **"Add New Project"**.
3. Import repository dự án `phan-dinh`.
4. Nhấn **Deploy**. Vercel sẽ tự động build và cấp cho bạn một đường dẫn URL chính thức (ví dụ: `https://phan-dinh.vercel.app`).

---

## 📄 Giấy Phép & Bản Quyền

* **Nội dung báo cáo:** Thuộc về tác giả nghiên cứu về chủ đề *Phân Định Và An Ủi Giả*.
* **Mã nguồn trang web:** Được phát triển và hoàn thiện bởi **Antigravity AI**.

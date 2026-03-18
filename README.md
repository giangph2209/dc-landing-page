## dc-landing-page

Landing page xây bằng **Next.js 16**, **React 19**, **Tailwind CSS 4**, dùng cho việc giới thiệu/dịch vụ.

### Cấu trúc thư mục chính

- `app/`: cấu trúc Next.js App Router (`layout.tsx`, `page.tsx`, API `app/api/contact/route.ts`).
- `components/`: các section của landing page và UI components.
- `public/`: hình ảnh, icons, favicon.
- `Dockerfile`: cấu hình build image production.
- `deploy.sh`: script build & run container Docker.
- `package.json`: scripts và dependencies.

### Yêu cầu môi trường

- **Node.js** ≥ 20
- **npm** (đi kèm Node.js)
- (Tuỳ chọn) **Docker** nếu muốn chạy bằng container

### Cài đặt & chạy local

1. Cài dependencies:

   ```bash
   npm install
   ```

2. Chạy dev server:

   ```bash
   npm run dev
   ```

3. Mở trình duyệt tại:

   ```text
   http://localhost:3000
   ```

4. Build production & chạy thử (tuỳ chọn):

   ```bash
   npm run build
   npm start
   ```

### Chạy bằng Docker (thủ công)

1. Build image:

   ```bash
   docker build -t dc-landing-page .
   ```

2. Run container:

   ```bash
   docker run -d \
     --name dc-landing \
     -p 3000:3000 \
     --restart unless-stopped \
     dc-landing-page
   ```

   Sau đó truy cập `http://localhost:3000`.

### Deploy bằng script `deploy.sh`

Script này:

- Build image `dc-landing-page`.
- Dừng & xoá container cũ tên `dc-landing` (nếu tồn tại).
- Chạy container mới, map cổng host `PORT` (mặc định 3000) → container `3000`.

#### Chuẩn bị

- Máy đã cài **Docker** và đang chạy Docker daemon.
- Hệ điều hành **Linux / macOS** hoặc WSL/Git Bash trên Windows (vì là shell script `.sh`).

#### Cách dùng

Trong thư mục project, chạy:

```bash
chmod +x deploy.sh     # lần đầu, nếu cần
./deploy.sh            # PORT mặc định 3000
```

Hoặc chỉ định cổng khác (ví dụ 8080):

```bash
PORT=8080 ./deploy.sh
```

Sau khi chạy thành công, ứng dụng sẽ chạy tại:

```text
http://localhost:<PORT>
```

Ví dụ: `http://localhost:3000` hoặc `http://localhost:8080`.
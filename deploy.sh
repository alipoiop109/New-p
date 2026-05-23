#!/bin/bash
set -e

echo "=== ديكورات المملكة - سكريبت النشر ==="

echo "[1/3] تثبيت المكتبات..."
pnpm install

echo "[2/3] بناء المشروع..."
pnpm --filter @workspace/dekorat-almamlakah run build

echo "[3/3] تشغيل الموقع مع pm2..."
# تأكد من تثبيت serve
npx serve --version > /dev/null 2>&1 || npm install -g serve

# إيقاف النسخة القديمة إن وُجدت
pm2 stop dekorat-almamlakah 2>/dev/null || true
pm2 delete dekorat-almamlakah 2>/dev/null || true

# تشغيل النسخة الجديدة
pm2 start ecosystem.config.cjs

echo ""
echo "=== تم النشر بنجاح! ==="
echo "الموقع يعمل على المنفذ 3000"
echo "لحفظ pm2 عند إعادة التشغيل: pm2 save && pm2 startup"

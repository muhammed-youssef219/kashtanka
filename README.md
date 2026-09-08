# Kashtanka Landing

واجهة React ثابتة ومتجاوبة مبنية من تصميم Kashtanka.

## المتطلبات

- Node.js 20 أو أحدث
- npm 10 أو أحدث

## التشغيل

```bash
npm install
npm run dev
```

يبدأ الخادم المحلي عادة على `http://localhost:3000`.

## أوامر المشروع

| الأمر | الغرض |
| --- | --- |
| `npm run dev` | تشغيل بيئة التطوير مع التحديث المباشر |
| `npm run lint` | فحص ملفات JavaScript وJSX |
| `npm run format` | تنسيق ملفات المصدر وملفات البناء باستخدام Prettier |
| `npm run assets:webp` | تحويل صور PNG من Figma إلى WebP |
| `npm run build` | بناء نسخة الإنتاج وإنشاء ملفات gzip وBrotli |
| `npm run preview` | معاينة نسخة الإنتاج محليًا |

## هيكل المصدر

```text
src/
  components/ui.jsx          عناصر الواجهة المتكررة: أزرار، أيقونات، بطاقات
  data/home.js               بيانات الصفحة وروابط الأصول
  sections/HomeSections.jsx  أقسام صفحة الهبوط
  App.jsx                    تركيب الصفحة
  App.css                    أنماط الصفحة والتجاوب
  index.css                  القواعد العامة
```

## الأصول

- الصور الأصلية توجد في `public/figma-images/photo/` بصيغة WebP.
- اربط أي صورة جديدة عبر `src/data/home.js`، ولا تضع روابط صور مباشرة داخل مكونات الواجهة.
- أيقونات الواجهة SVG. عند توفر أصول Figma النهائية، توضع داخل `public/icons/` وتستبدل في `src/components/ui.jsx`.

## تسليم الإنتاج

بعد تنفيذ `npm run build` ستجد الملفات في `dist/`:

- ملفات CSS وJavaScript بصيغة مقروءة غير minified.
- نسخ ضغط `gzip` و`Brotli` بجانب كل ملف CSS وJavaScript.
- صور WebP فقط، بدون صور PNG في ناتج الإنتاج.

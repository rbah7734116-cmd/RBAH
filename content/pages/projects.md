---
type: PageLayout
title: اتصل بنا
dir: rtl  # ✅ هذا يحدد اتجاه الصفحة ككل إلى اليمين
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg4.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - type: ContactSection
    title: "تواصل معي"
    colors: colors-f
    backgroundSize: full
    form:
      type: FormBlock
      elementId: form-contact
      action: "https://formspree.io/f/xrbqvory"   # ✅ رابط Formspree
      method: POST                                # ✅ لتحديد طريقة الإرسال
      fields:
        - name: firstName
          label: الاسم الأول
          placeholder: أدخل اسمك الأول
          isRequired: true
          width: 1/2
          type: TextFormControl

        - name: lastName
          label: الاسم الأخير
          placeholder: أدخل اسمك الأخير
          isRequired: false
          width: 1/2
          type: TextFormControl

        - name: email
          label: البريد الإلكتروني
          placeholder: example@email.com
          isRequired: true
          width: full
          type: EmailFormControl

        - name: message
          label: رسالتك
          placeholder: اكتب رسالتك هنا...
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: "أرسل الآن ✉️"
      styles:
        self:
          textAlign: center
    styles:
      self:
        width: wide
        padding:
          - pt-16
          - pb-16
          - pr-4
          - pl-4
        textAlign: right

  - type: SocialIconsSection
---

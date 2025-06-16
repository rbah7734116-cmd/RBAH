---
type: PageLayout
title: Contact Us
dir: ltr  # ✅ Set page direction to left-to-right
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
    title: "Get in Touch"
    colors: colors-f
    backgroundSize: full
    form:
      type: FormBlock
      elementId: form-contact
      action: "https://formspree.io/f/xnnvvglk"
 
      method: POST                                # ✅ POST method
      fields:
        - name: firstName
          label: First Name
          placeholder: Enter your first name
          isRequired: true
          width: 1/2
          type: TextFormControl

        - name: lastName
          label: Last Name
          placeholder: Enter your last name
          isRequired: false
          width: 1/2    
          type: TextFormControl

        - name: email
          label: Email
          placeholder: example@email.com
          isRequired: true
          width: full
          type: EmailFormControl

        - name: message
          label: Your Message
          placeholder: Write your message here...
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: "Send Now ✉️"
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
        textAlign: left

  - type: SocialIconsSection
---

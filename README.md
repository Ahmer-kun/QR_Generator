# 🚀 Quick QR Generator

<p align="center">
  A free, modern, and easy-to-use QR code generator built with React and Tailwind CSS. Turn any URL or text into a scannable QR code and download it as a high-quality PNG image instantly. This application is <strong>fully client-side</strong>, ensuring your data remains completely private.
</p>

---

## ✨ Features

-   **Instant Generation:** Create QR codes from URLs or any text in real-time.
-   **Live Preview:** See your QR code appear as soon as you generate it.
-   **Download as PNG:** Save your QR code in a high-quality, high-resolution PNG format.
-   **Custom Filenames:** Set a custom filename before downloading for better organization.
-   **Privacy-First:** All processing is done in your browser. Your data is never sent to a server.
-   **Fully Responsive:** Works beautifully on desktops, tablets, and mobile devices.
-   **Sleek & Modern UI:** A clean, intuitive, and visually appealing interface built with Tailwind CSS.
-   **No Ads, No Tracking:** A straightforward, clutter-free experience focused on functionality.

## 🛠️ Tech Stack

-   **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **QR Code Generation:** [qrcode](https://github.com/soldair/node-qrcode) library
-   **Icons:** Custom SVG components

## 🚀 How It Works

The application leverages the `qrcode` library to generate QR code data URLs directly in the user's browser. When you input text and click "Generate," the JavaScript running on the page converts your input into a QR code image without making any network requests to a backend server. This client-side approach guarantees that your input data remains completely private and secure.

## ⚙️ Getting Started

This project uses modern web technologies and is set up to be run directly in the browser without a complex build process.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ahmer-kun/quick-qr-generator.git
    cd quick-qr-generator
    ```

2.  **Run the application:**
    Since this project uses ES modules and CDN imports, no local server or dependency installation is required.
    Simply open the `index.html` file in your modern web browser.
    ```bash
    open index.html
    # Or right-click the file and choose "Open with..." your favorite browser.
    ```

## 📂 Project Structure

The project is organized with a clear separation of concerns, making it easy to navigate and maintain.

```
.
├── 📄 index.html         # Main HTML file, loads scripts and styles
├── 📄 index.tsx          # React app entry point
├── 📄 App.tsx           # Main App component with page routing logic
├── 📁 components/        # Reusable React components
│   ├── 📄 UrlInput.tsx
│   ├── 📄 QRCodeDisplay.tsx
│   ├── 📄 MainFooter.tsx
│   └── 📁 icons/          # SVG icon components
└── 📁 pages/            # Page-level components
    ├── 📄 IntroPage.tsx
    ├── 📄 GeneratorPage.tsx
    ├── 📄 PrivacyPolicyPage.tsx
    └── 📄 TermsOfServicePage.tsx
```

## 🛡️ Privacy

We take your privacy seriously. This tool is designed to be 100% private.

-   **No Server-Side Processing:** All QR code generation happens in your browser.
-   **No Data Storage:** We do not store, log, or transmit the data you enter.
-   **No Cookies or Trackers:** The site is free of analytics scripts and tracking cookies.

For more details, please review the [Privacy Policy](./pages/PrivacyPolicyPage.tsx) and [Terms of Service](./pages/TermsOfServicePage.tsx).

## ✍️ Author

Created with ❤️ by **Ahmer Amir**

-   **GitHub:** [@Ahmer-kun](https://github.com/Ahmer-kun)
-   **LinkedIn:** [Muhammad Ahmer](https://www.linkedin.com/in/muhammad-ahmer-b88485283/)
-   **Twitter / X:** [@AhmerAmir7](https://x.com/AhmerAmir7)

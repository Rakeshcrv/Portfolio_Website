# 🚀 Rakesh Sirvi N Portfolio Website

A modern DevOps Engineer portfolio showcasing cloud, automation, CI/CD, observability, and production deployment skills.

🌐 Live Website: https://rakeshsirvi.site

---

## 📌 Overview

This portfolio was built to showcase my experience in:

* AWS Cloud Infrastructure
* DevOps Engineering
* CI/CD Pipelines
* Linux Administration
* Monitoring & Observability
* Production Deployments

The website highlights my projects, skills, certifications, experience, and learning journey toward becoming a Site Reliability Engineer (SRE).

---

## 🛠 Tech Stack

### Frontend

* React 19
* TypeScript
* TanStack Start
* Tailwind CSS
* Framer Motion

### DevOps & Cloud

* AWS EC2
* Linux (Ubuntu)
* Nginx Reverse Proxy
* systemd Service Management
* SSL/TLS (Let's Encrypt)
* Git & GitHub

### Other Tools

* EmailJS
* Lucide React
* TanStack Router

---

## 🏗 Architecture

```text
Internet
    │
    ▼
rakeshsirvi.site
    │
    ▼
Nginx Reverse Proxy
    │
    ▼
Portfolio Service (systemd)
    │
    ▼
TanStack Start Application
    │
    ▼
AWS EC2 (Ubuntu)
```

---

## ⚡ Features

* Responsive Design
* Modern UI/UX
* Animated Hero Section
* Skills & Experience Showcase
* Project Portfolio
* Resume Download
* Contact Form Integration
* Custom 404 Page
* SEO Optimized
* HTTPS Enabled
* Mobile Friendly

---

## ☁ AWS Deployment

The portfolio is hosted on AWS EC2 and configured with:

### Infrastructure

* EC2 Instance
* Ubuntu Server
* Nginx
* Domain Configuration
* SSL Certificate
* systemd Service

### Deployment Flow

```text
GitHub Repository
        │
        ▼
AWS EC2
        │
        ▼
systemd Service
        │
        ▼
Nginx Reverse Proxy
        │
        ▼
Public Internet
```

---

## 🔒 Security

Implemented:

* HTTPS using Let's Encrypt
* Nginx Reverse Proxy
* Domain-based access
* Process management with systemd

---

## 📈 SEO Setup

Configured:

* robots.txt
* sitemap.xml
* Google Search Console
* Open Graph Metadata
* Meta Tags

---

## 🚀 Local Development

Clone repository:

```bash
git clone https://github.com/Rakeshcrv/Portfolio_Website.git

cd Portfolio_Website
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Application runs on:

```text
http://localhost:8080
```

---

## 🏭 Production Deployment

Build application:

```bash
npm run build
```

Restart service:

```bash
sudo systemctl restart portfolio
```

Check status:

```bash
sudo systemctl status portfolio
```

View logs:

```bash
journalctl -u portfolio -f
```

---

## 🎯 Future Improvements

* Docker Containerization
* GitHub Actions CI/CD
* Automated Deployments
* Monitoring Dashboard
* Infrastructure as Code (Terraform)

---

## 👨‍💻 Author

### Rakesh Sirvi N

DevOps Engineer | AWS Cloud Enthusiast | Future SRE

* Website: https://rakeshsirvi.site
* LinkedIn: https://www.linkedin.com/in/rakesh-sirvi-n-24232a3b3
* GitHub: https://github.com/Rakeshcrv

---

⭐ If you found this project interesting, feel free to explore the repository and connect with me.


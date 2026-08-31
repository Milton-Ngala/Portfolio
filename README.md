# Milton Ngala — Software Engineer Portfolio

> **Enterprise Backend Architect & Full-Stack Engineer**

A modern, responsive portfolio website showcasing my experience designing **cloud-native enterprise systems**, building **full-stack applications**, and delivering software that solves measurable business problems.

🌐 **Live:** [ngala.co.ke](https://ngala.co.ke)
💼 **LinkedIn:** [linkedin.com/in/milton-antony-ngala](https://linkedin.com/in/milton-antony-ngala)
🐙 **GitHub:** [github.com/Milton-Ngala](https://github.com/Milton-Ngala)

---

## Overview

This portfolio is designed to communicate more than a list of technologies. It presents the architecture, engineering decisions, business outcomes, and technical capabilities behind selected projects.

The site is built around two primary areas of expertise:

* **Enterprise Architecture & Consulting**
* **Full-Stack Application Development & MVP Delivery**

It includes detailed project case studies, technical expertise, professional experience, services, certifications, and contact functionality.

---

## Highlights

* ⚙️ Enterprise backend and API architecture
* ☁️ Cloud-native application development
* 🧩 Microservices and distributed systems
* 🐳 Containerized workloads and CI/CD
* ⚛️ React and Next.js application development
* 🔷 .NET / C# backend engineering
* 🗄️ SQL Server and PostgreSQL
* 🔄 REST API and third-party integrations
* 🚀 Performance optimization
* 📱 Responsive and accessible interfaces
* 🎞️ Framer Motion-powered interactions
* 🧪 Automated component testing
* 🔎 SEO and structured metadata
* 📊 Performance-focused project case studies

---

## Featured Projects

### Makio Tours & Travel

**Travel & Hospitality · Lead Full-Stack Developer**

A real-time booking and payment platform designed to replace a manual booking workflow.

**Results**

* Reduced booking turnaround from **48 hours to 15 minutes**
* Increased conversion by **180%**
* Processed **1,200+ bookings**

**Technology**

`React` `Node.js` `Express` `PostgreSQL` `Stripe` `Tailwind CSS`

---

### Hospitalini

**Health Technology · Solutions Architect & Lead Developer**

A real-time hospital queue management platform designed to improve patient flow and reduce waiting times.

**Results**

* Reduced average patient waiting time by **40%**
* Served **2,500+ patients** during the pilot
* Reduced average waiting time to **under 45 minutes**

**Technology**

`.NET Core` `C#` `React` `SignalR` `SQL Server` `Microservices` `Clean Architecture` `Docker`

---

### Saraka

**Web Application · Full-Stack Developer**

A responsive web application focused on performance, maintainability, and continuous delivery.

**Results**

* **Sub-second** load times
* **95+ Lighthouse** performance score
* Global CDN delivery
* Automated CI/CD deployment pipeline
* Branch preview deployments for iterative development

**Technology**

`React` `TypeScript` `Tailwind CSS` `REST APIs` `Netlify` `CI/CD`

---

### Additional Projects

The portfolio also includes case studies for:

* **Rex Otieno Portfolio** — Next.js, Sanity CMS and ISR optimization
* **Sharon Kubasu Portfolio** — Next.js, Tailwind CSS and Framer Motion

Each project presents the problem, solution, measurable impact, architecture, and implementation approach.

---

## Technology Stack

### Frontend

* React
* Next.js 14
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* React Intersection Observer

### Backend & APIs

* C#
* .NET / .NET Core
* Node.js
* REST APIs
* API integrations
* Resend

### Databases

* Microsoft SQL Server
* PostgreSQL

### Cloud & Infrastructure

* Microsoft Azure
* AWS
* Cloudflare
* Docker
* Kubernetes
* Netlify
* OpenNext
* CI/CD

### Engineering Practices

* Clean Architecture
* Microservices
* Domain-Driven Design
* API-first development
* Responsive design
* Performance optimization
* Automated testing
* Continuous delivery

---

## Certification

### KCNA — Kubernetes and Cloud Native Associate

**Issued by:** The Linux Foundation
**Issued:** August 30, 2026
**Expires:** August 29, 2028

The KCNA certification demonstrates foundational knowledge of Kubernetes and cloud-native technologies, including:

* Kubernetes architecture
* Containers, Pods, Nodes and Clusters
* `kubectl`
* Application deployment
* Cloud-native ecosystems
* Storage and networking
* GitOps
* Service meshes
* Cloud-native security

🔗 [View verified credential on Credly](https://www.credly.com/badges/3e4f9208-7676-4829-ac58-de445b34b56a)

---

## Architecture

The portfolio uses a component-driven architecture based on the Next.js App Router.

```text
Portfolio
│
├── Next.js App Router
│   │
│   ├── Pages / Routes
│   ├── Metadata & SEO
│   └── Structured Data
│
├── React Components
│   │
│   ├── Header
│   ├── Hero
│   ├── About
│   ├── Projects
│   ├── Services
│   ├── Technology Stack
│   ├── Contact
│   └── Footer
│
├── Data Layer
│   │
│   ├── Projects
│   ├── Technical Skills
│   └── Site Content
│
├── Styling
│   │
│   └── Tailwind CSS
│
├── Animation
│   │
│   └── Framer Motion
│
└── Deployment
    │
    └── OpenNext → Cloudflare
```

The application also includes reusable data structures for project case studies, including business impact, architectural decisions, and frontend execution details.

---

## Project Structure

```text
Portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── ...
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── ClientServices.tsx
│   │   ├── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── SocialProof.tsx
│   │   ├── StructuredData.tsx
│   │   ├── TechStack.tsx
│   │   └── ...
│   │
│   ├── constants/
│   ├── contexts/
│   ├── data/
│   │   └── projects.ts
│   ├── assets/
│   └── __tests__/
│
├── public/
├── next.config.mjs
├── open-next.config.ts
├── package.json
├── jest.config.cjs
├── tailwind.config.*
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) 18+
* npm, pnpm, or another compatible package manager
* Git

### Clone the repository

```bash
git clone https://github.com/Milton-Ngala/Portfolio.git

cd Portfolio
```

### Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### Configure environment variables

Create a `.env.local` file:

```env
# Add the environment variables required by the application.
# Do not commit secrets to source control.
```

Use the project's environment configuration as the source of truth for any required variables.

### Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Available Scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start the Next.js development server        |
| `npm run build`      | Build the production application            |
| `npm run start`      | Start the production server                 |
| `npm run lint`       | Run linting                                 |
| `npm test`           | Run the Jest test suite                     |
| `npm run test:watch` | Run tests in watch mode                     |
| `npm run preview`    | Build and preview the Cloudflare deployment |
| `npm run deploy`     | Build and deploy using OpenNext/Cloudflare  |

---

## Testing

The project uses **Jest** and **Testing Library** for automated testing.

Run the test suite with:

```bash
npm test
```

For development:

```bash
npm run test:watch
```

The testing setup uses a JSDOM environment to support React component testing.

---

## Deployment

The application is configured for deployment using **OpenNext for Cloudflare**.

The deployment workflow converts the Next.js application into an OpenNext-compatible Cloudflare deployment.

### Preview

```bash
npm run preview
```

### Deploy

```bash
npm run deploy
```

The production portfolio is available at:

**https://ngala.co.ke**

---

## Performance & SEO

Performance and discoverability are treated as first-class concerns.

The portfolio incorporates:

* Next.js image optimization
* Responsive layouts
* Semantic HTML
* Structured data
* SEO metadata
* Performance-conscious animations
* Lazy loading where appropriate
* CDN/edge deployment
* Accessible navigation and interactive elements
* Reduced-motion considerations

The application also exposes structured technology and professional information to improve discoverability by search engines and AI crawlers.

---

## Design Philosophy

The portfolio follows a simple principle:

> **Show the engineering impact, not just the technology.**

Instead of presenting projects as screenshots or technology lists, the case studies focus on:

```text
Problem
   ↓
Engineering Decision
   ↓
Architecture
   ↓
Implementation
   ↓
Business Impact
```

This makes the portfolio useful to both technical and non-technical audiences.

---

## Professional Focus

My primary areas of focus include:

### Enterprise Engineering

* Backend architecture
* .NET and C#
* Microservices
* Distributed systems
* API design
* Enterprise integrations
* Legacy system modernization

### Cloud Native

* Kubernetes
* Docker
* Azure
* AWS
* Cloud architecture
* CI/CD
* Container orchestration
* Observability

### Full-Stack Development

* React
* Next.js
* TypeScript
* Node.js
* REST APIs
* PostgreSQL
* SQL Server

### Product Engineering

* MVP development
* Performance optimization
* Responsive web applications
* Third-party integrations
* Payment integrations
* Production deployment

---

## Contact

Interested in working together?

🌐 **Website:** [ngala.co.ke](https://ngala.co.ke)
💼 **LinkedIn:** [Milton Antony Ngala](https://linkedin.com/in/milton-antony-ngala)
🐙 **GitHub:** [Milton-Ngala](https://github.com/Milton-Ngala) or [Milton-Ngala](https://github.com/MiltonNgala)

You can also use the contact form on the portfolio:

**[Get in touch →](https://ngala.co.ke/contact)**

---

## License

This repository contains the source code for my personal portfolio.

The code is publicly available for learning and reference. Personal branding, content, photography, and other original assets remain the property of their respective owners.

---

<p align="center">
  Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
</p>

<p align="center">
  <a href="https://ngala.co.ke">Visit the live portfolio →</a>
</p>
```

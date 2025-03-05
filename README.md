# 🏗️ Obinopaul.com

Cloud-native portfolio platform powering obinopaul.com. Demonstrates AWS solutions architecture through serverless APIs and infrastructure as code. Built with React 18, Next.js 14, AWS CDK, and modern DevOps practices.

## 🌟 Features

### Core Platform Features

- 🏗️ **Cloud Native Architecture**: Production-grade AWS infrastructure with CDK
- 🔐 **Enterprise Security**: Zero-trust architecture with AWS Cognito
- 🚀 **CI/CD Pipeline**: Automated deployments with GitHub Actions
- 📊 **Observability**: Comprehensive monitoring and logging
- 🔄 **Multi-Environment**: Development, staging, and production
- 🛡️ **Infrastructure as Code**: Complete AWS CDK implementation
- 📱 **Modern Frontend**: Next.js with Tailwind CSS
- 🌐 **Global Delivery**: CloudFront CDN integration

### Modern Tech Features

- ⚡ **React 18 RC Integration**

  - Document Metadata API
  - Asset Loading API
  - Progressive Loading
  - Optimization Compiler

- 🚀 **Next.js 14 App Router**

  - Server Components
  - Partial Prerendering
  - Parallel Routes
  - Edge Runtime

- 🔄 **Full-Stack Type Safety**

  - End-to-end typesafe APIs with tRPC
  - Runtime validation
  - Strict TypeScript
  - Comprehensive error handling

- ⚡ Performance First

  - Edge deployment
  - Streaming SSR
  - Smart bundling
  - Optimal caching

## 📚 Quick Links

- [🏗️ Obinopaul.com](#️-obinopaulcom)
  - [🌟 Features](#-features)
    - [Core Platform Features](#core-platform-features)
    - [Modern Tech Features](#modern-tech-features)
  - [📚 Quick Links](#-quick-links)
  - [🏛️ Architecture](#️-architecture)
    - [System Architecture](#system-architecture)
    - [Contact Form Flow](#contact-form-flow)
    - [DNS \& CDN Setup](#dns--cdn-setup)
  - [📁 Project Structure](#-project-structure)
    - [Core Components](#core-components)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Initial Setup](#initial-setup)
    - [Infrastructure Deployment](#infrastructure-deployment)
    - [Local Development](#local-development)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🏗️ AWS Services Integration](#️-aws-services-integration)
    - [Core Services](#core-services)
    - [Compute \& Messaging Services](#compute--messaging-services)
    - [Development \& Deployment](#development--deployment)
    - [Security Services](#security-services)
  - [💻 Development Scripts](#-development-scripts)
  - [📜 License](#-license)
  - [🌟 Star History](#-star-history)
  - [🙏 Acknowledgments](#-acknowledgments)

## 🏛️ Architecture

### System Architecture

```mermaid
graph TB
    subgraph "Global Edge Network"
        CF[CloudFront Distribution]
    end

    subgraph "Frontend"
        S3[S3 Bucket]
        CF --> S3
    end

    subgraph "API Layer"
        LAMBDA[Contact Form Lambda]
        SES[Amazon SES]
    end

    subgraph "DNS & SSL"
        R53[Route 53]
        ACM[ACM Certificate]
    end

    CF --> LAMBDA
    LAMBDA --> SES
    R53 --> CF
    ACM --> CF
```

### Contact Form Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Lambda
    participant SES

    User->>Frontend: Submit Contact Form
    Frontend->>Lambda: POST /api/contact
    Lambda->>SES: Send Email
    SES-->>Lambda: Email Sent
    Lambda-->>Frontend: Success Response
    Frontend-->>User: Show Success Message
```

### DNS & CDN Setup

```mermaid
graph LR
    subgraph "DNS Management"
        R53[Route 53]
        ZONE[Hosted Zone]
    end

    subgraph "Content Delivery"
        CF[CloudFront]
        S3[S3 Origin]
        ACM[SSL Certificate]
    end

    R53 --> CF
    CF --> S3
    ACM --> CF
```

## 📁 Project Structure

```bash
bjornmelin-platform-io/
├── .github/                # GitHub Actions workflows
├── docs/                  # Project documentation
│   ├── api/              # API documentation
│   ├── architecture/     # Architecture docs
│   ├── deployment/       # Deployment guides
│   ├── development/      # Development guides
│   └── security/         # Security docs
├── infrastructure/        # CDK infrastructure code
│   ├── bin/              # CDK app entry
│   └── lib/              # Infrastructure code
│       ├── functions/    # Lambda functions
│       ├── stacks/       # CDK stacks
│       └── types/        # Stack types
├── public/               # Static assets
│   ├── certifications/   # AWS certifications
│   ├── headshot/        # Profile images
│   └── projects/        # Project images
├── src/                  # Application source
│   ├── app/             # Next.js 14 App Router
│   │   ├── api/         # API routes
│   │   └── fonts/       # Custom fonts
│   ├── components/      # React components
│   ├── data/           # Static data
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities
│   └── types/          # TypeScript types
```

### Core Components

- **Frontend**: Next.js 14 application with App Router
- **Infrastructure**: AWS CDK for cloud resource management
- **CI/CD**: GitHub Actions for automated deployments
- **CDN**: CloudFront with Route 53 DNS
- **API**: Serverless Lambda functions with SES integration

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.0.0
yarn >= 4.0.0
AWS CLI configured
```

### Initial Setup

```bash
# Clone repository
git clone https://github.com/bjornmelin/bjornmelin-platform-io.git
cd bjornmelin-platform-io

# Install dependencies
yarn install

# Configure AWS credentials
aws configure

# Configure environment
cp .env.production .env.local
```

### Infrastructure Deployment

```bash
# Deploy infrastructure
cd infrastructure
yarn install
yarn cdk deploy
```

### Local Development

```bash
# Start development server
yarn dev
```

## 🛠️ Tech Stack

```yaml
Frontend:
  Core:
    - React 18
    - Next.js 14
    - TypeScript

  UI:
    - Tailwind CSS
    - shadcn/ui
    - Framer Motion
    - GeistVF Font

Infrastructure:
  Core:
    - AWS CDK
    - CloudFront
    - S3
    - Route 53
    - ACM
    - Lambda
    - SES

Development:
  Tools:
    - yarn 4.0
    - ESLint
    - Prettier
    - TypeScript
    - PostCSS
```

## 🏗️ AWS Services Integration

### Core Services

- **CloudFront**: Global content delivery network
- **Route53**: DNS management and domain routing
- **ACM**: SSL/TLS certificate management
- **S3**: Static website hosting and assets

### Compute & Messaging Services

- **Lambda**: Serverless contact form handling
- **SES**: Email delivery for contact form

### Development & Deployment

- **CDK**: Infrastructure as code
- **GitHub Actions**: CI/CD automation
- **CloudWatch**: Basic monitoring and logging

### Security Services

- **IAM**: Role-based access control
- **WAF**: Basic security rules (optional)

## 💻 Development Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build production application
yarn start        # Start production server
yarn lint         # Run ESLint
yarn serve        # Serve production build locally

# Infrastructure (in /infrastructure directory)
yarn cdk deploy   # Deploy AWS infrastructure
```
Connect with me on:

- [GitHub](https://github.com/obinopaul)
- [LinkedIn](https://www.linkedin.com/in/obinopaul/)
- [Instagram](https://www.instagram.com/obinopaul)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bjornmelin/bjornmelin-platform-io&type=Date)](https://star-history.com/#bjornmelin/bjornmelin-platform-io&Date)

## 🙏 Acknowledgments

- AWS Documentation and Best Practices
- [Bjorn Melin Github](https://urldefense.com/v3/__https://github.com/BjornMelin/bjornmelin-platform-io__;!!GNU8KkXDZlD12Q!8jwqKvfbrDMadgZvkULBBoo6KWm0i1xOV06utwF34ErK6DgSFsBT750d0ILnOhQtvgQre0DYxXtbWbbXGxGDN2Mw3asl$)
- AWS CDK Patterns Community
- Next.js Documentation

---

<div align="center">

Built with React 18 + Next.js 14 by [Bjorn Melin](https://bjornmelin.io)

</div>
#   p o r t f o l i o - w e b s i t e 
 
 #   p o r t f o l i o - w e b s i t e  
 
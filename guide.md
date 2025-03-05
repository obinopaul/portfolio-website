# Adapting the GitHub Project for Your Portfolio Website

This guide breaks down adapting the GitHub project (assumed to be `bjornmelin-platform-io`) into your own portfolio website, leveraging Next.js, React, Tailwind CSS, and AWS CDK.

**1. Project Setup and Initial Exploration**

*   **Fork the Repository (Crucially Important):** *Fork* the repository on GitHub (click the "Fork" button on the original repository page). This creates a copy under your GitHub account.  *Never* work directly on someone else's main branch.
*   **Clone Your Fork:** Clone *your forked repository* to your local machine:

    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/bjornmelin-platform-io.git](https://github.com/YOUR_GITHUB_USERNAME/bjornmelin-platform-io.git)  # Replace YOUR_GITHUB_USERNAME
    cd bjornmelin-platform-io
    ```

*   **Install Dependencies:**

    ```bash
    yarn install
    ```

    This uses `yarn` to install all necessary Node.js packages.

*   **Start the Development Server:**

    ```bash
    yarn dev
    ```

    This starts the Next.js development server (likely on `http://localhost:3000`).

*   **Initial Exploration and Familiarization:**

    *   **Live Site:** Navigate the running website.  Click links, try the contact form (it won't send emails yet).
    *   **Code Structure:** Explore the project's directory structure in your code editor. Key areas:
        *   `src/app`: Main page layouts and routing (Next.js App Router).  Folders within `app` represent routes (e.g., `app/about/page.tsx` is `/about`).
        *   `src/components`: Reusable React components.  `layout/navbar.tsx` and `layout/footer.tsx` are common header/footer. `sections/` has page-specific components. `ui/` holds Shadcn UI components.
        *   `src/data`: *Content* of the original portfolio (projects, skills, etc.).  You'll modify these.
        *   `public/`: Static assets (images).
        *   `infrastructure/`: AWS CDK code for deployment.  We'll tackle this *much* later.
        *   `tailwind.config.ts`, `postcss.config.mjs`: Tailwind CSS configuration.
        *   `next.config.mjs`: Next.js configuration. `output: 'export'` is VERY important; it dictates the static export.

**2. Content Customization (The Fun Part!)**

Replace example content with your own.

*   **`src/data` - Your Core Data:**

    *   **`projects.ts`:** *Crucial*. Defines the `Project` interface:

        ```typescript
        export interface Project {
          id: string;
          title: string;
          description: string;
          technologies: string[];
          category: string;
          image: string;
          links: {
            github?: string;
            live?: string;
            demo?: string;
          };
          featured?: boolean;
        }
        ```

        Create an entry in `projectsData` for each of *your* projects, following this structure. `image` field will point to your project images (in `public/projects`). The `?` denotes optional fields.
    *   **`skills.ts`:** Update `skillCategories` with your skills.
    *   **`certifications.ts`:** Replace example certifications. Place certification images in `public/certifications`.
    *   **`experience.ts`:** Your work experience.
    *   **`education.ts`:** Your education details.
    *   **`hobbies.ts`:** (Optional) Your hobbies.

*   **`src/app/layout.tsx` - Global Metadata:**

    *   Update the `metadata` object with your title, description, keywords, and social media links (for SEO).

*   **`src/app/page.tsx` - Homepage Content:**
    * Edit Hero, and other sections as you desire.

*   **`src/app/about/page.tsx` - About Page:**
    *   Your "About Me" information.

*   **`src/app/contact/page.tsx` - Contact Page:**
    *   Customize introductory text. The form itself is in `src/components/contact/contact-form.tsx`.

*   **`public/` - Images and Other Assets:**

    *   **`public/headshot/`:** Replace `headshot-2024.jpg` with your profile picture. *Keep the filename the same* or update the code.
    *   **`public/projects/`:** Add project images, referenced in `src/data/projects.ts`.
    *   **`public/certifications/`:** Add certification images.
*   **`src/components` - Adjusting the Components**
    * Review and Edit the components to suit the added content.

**3. Styling and Design (Tailwind CSS)**

*   **`src/app/globals.css`:** Base styles and Tailwind directives. Adjust `--background`, `--foreground`, `--primary`, etc., for the color scheme.
*   **`tailwind.config.ts`:** Main Tailwind configuration. Customize colors, fonts, spacing.  Familiarize yourself with Tailwind's utility-first approach (e.g., `text-lg`, `font-bold`, `bg-blue-500`).
*   **`components.json`:** For `shadcn/ui`.  Defines component aliases and configuration.  Likely minimal changes initially.
*   **Shadcn/ui:** The project uses `shadcn/ui` ([https://ui.shadcn.com/](https://ui.shadcn.com/)) for pre-built components. Explore `src/components/ui`.

**4. Contact Form Functionality (Serverless!)**

Uses a Next.js API route (`src/app/api/contact/route.ts`) and AWS SES.

*   **Understanding the Flow:** Form submission:
    1.  `ContactForm` (client-side) sends a POST to `/api/contact`.
    2.  `route.ts` (server-side) handles the request.
    3.  Validates data using `contactFormSchema` (`src/lib/schemas/contact.ts`).
    4.  Uses `EmailService` (`src/lib/services/email.ts`) to send via AWS SES.
    5.  Returns a success/error response.

*   **Local Testing (Limited):** Test *form validation* locally. Email sending requires AWS SES configuration and deployment.

*   **`.env.production` and `.env.local`:** Environment variables.
    *   `.env.local`: Local environment values.
    *   `.env.production`: *Production* values (used on deployment). *Never commit secrets to Git!* `.env.production` is a *template*. Values are set during deployment.
    *   `NEXT_PUBLIC_API_URL`: API endpoint URL (different local/production).
    *   `NEXT_PUBLIC_APP_URL`: Website URL.
    *   `NEXT_PUBLIC_CONTACT_EMAIL`: Where to receive submissions.
    *   `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `CONTACT_EMAIL`: For AWS SES. Set these *during deployment*, not directly in `.env` files.

**5. Deployment (AWS CDK)**

*Most involved part.* Uses AWS CDK to define and deploy infrastructure to AWS.

*   **Prerequisites:**
    *   An AWS account.
    *   AWS CLI installed and configured.
    *   AWS CDK installed globally (`npm install -g aws-cdk`).

*   **Key Files:**
    *   Files in `/infrastructure`.
    *   `infrastructure/bin/app.ts`: CDK app entry point. Creates *stacks* (groups of AWS resources).
    *   `infrastructure/lib/stacks/`: Each file defines a stack:
        *   `dns-stack.ts`: DNS (Route 53) and SSL certificates (ACM). *Must* deploy to `us-east-1` due to CloudFront requirements.
        *   `storage-stack.ts`: S3 bucket and CloudFront (CDN).
        *   `deployment-stack.ts`: IAM user for GitHub Actions deployments.
        *   `monitoring-stack.ts`: CloudWatch monitoring.
        *   `email-stack.ts`: AWS SES and API Gateway endpoint.
    *   `infrastructure/lib/constants.ts`: Constants
    *    `infrastructure/lib/functions`: Lambda Functions.

*   **Deployment Steps (High-Level - See `README.md` and `infrastructure/README.md`):**

    1.  **Set up your domain:** You *must* have a domain registered and configured in AWS Route 53.
    2.  **Configure AWS Credentials:** Ensure your AWS CLI is configured. You need an IAM user with sufficient permissions.
    3.  **Edit `infrastructure/lib/constants.ts`:**
        *   Set your `domainName`.
    4.  **Deploy `dns-stack.ts` *first* (to `us-east-1`):**

        ```bash
        cd infrastructure
        yarn deploy:dns
        ```

        This creates the SSL certificate, which needs validation. CDK output will provide instructions for DNS record validation in Route 53. *Complete validation before proceeding.*
    5.  **Deploy remaining stacks:**

        ```bash
        yarn deploy:storage
        yarn deploy:deployment
        yarn deploy:monitoring
        yarn deploy:email
        ```

        Or use `yarn deploy:all` (after DNS stack validation).

    6.  **Configure GitHub Actions:** `.github/workflows` contains workflow definitions. Set up secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`) with AWS credentials from `deployment-stack` output:
        *   `AWS_ACCESS_KEY_ID`
        *   `AWS_SECRET_ACCESS_KEY`
* **First deploy the infrastructure, then deploy the app.**
* You can deploy the app locally:
    * `yarn build`
    * `yarn serve`
    * The app runs on local port `3000`.

*   **Important Notes on Deployment:**

    *   **Cost:** AWS services *will incur costs*. Understand pricing.
    *   **Region:** `dns-stack` *must* be `us-east-1`. Others can be different (requires code modification).
    *   **CDK Context:** `cdk.context.json` stores AWS environment info. Delete it if making significant changes (e.g., region).

**6. Continuous Integration and Deployment (GitHub Actions)**

Set up for CI/CD with GitHub Actions.  Pushes to `main` trigger:

1.  Build Next.js app.
2.  Deploy static files to S3.
3.  Invalidate CloudFront cache.

Workflow files in `.github/workflows`:

*   `deploy.yml`: Deploys the Next.js app (static files).
*   `infrastructure.yml`: Deploys AWS infrastructure (CDK stacks). Triggered by changes to `infrastructure/**`.

**7. Key Files and Their Purposes (Recap)**

*   **`package.json`:** Dependencies, scripts, metadata.
*   **`next.config.mjs`:** Next.js configuration. `output: 'export'` is crucial for static export.
*   **`tsconfig.json`:** TypeScript configuration.
*   **`tailwind.config.ts`:** Tailwind CSS configuration.
*   **`postcss.config.mjs`:** PostCSS configuration.
*   **`components.json`:** Shadcn/ui configuration.
*   **`src/app/globals.css`:** Global CSS.
*   **`src/lib/utils.ts`:** Utility functions (e.g., `cn`).
*   **`src/lib/aws/ses.ts`:** AWS SES client.

**8. Troubleshooting**

*   **`yarn dev` not working:** Run `yarn install`. Check for port 3000 conflicts.
*   **Deployment errors:** Read error messages carefully. Common issues:
    *   Incorrect AWS credentials.
    *   Missing IAM permissions.
    *   Domain misconfiguration in Route 53.
    *   Unvalidated certificate (`dns-stack`).
    *   S3 bucket already exists (globally unique).
* **Contact Form:** Verify configuration, check the API Gateway, ensure it's set up.

This is a comprehensive overview.  Read the `README.md` files for specific instructions. Good luck!
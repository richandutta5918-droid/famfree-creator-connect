import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, 
                fill out a form, or contact us for support. This may include your name, email address, 
                phone number, and social media handles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send communications, and ensure the security of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground">
                We do not sell or rent your personal information to third parties. We may share 
                your information only in specific circumstances outlined in this policy or with 
                your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@famfree.com or through our support page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
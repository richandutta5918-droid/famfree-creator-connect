import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using FamFree, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Platform Usage
              </h2>
              <p className="text-muted-foreground">
                FamFree provides a platform for brands to create influencer marketing campaigns 
                and for creators to discover and apply for these opportunities. Users must comply 
                with all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Payment Terms
              </h2>
              <p className="text-muted-foreground">
                Brands agree to pay a 10% platform fee on successful campaigns. Creators receive 
                payments through our secure escrow system once content is approved. All payments 
                are processed in INR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Content Guidelines
              </h2>
              <p className="text-muted-foreground">
                All content created through our platform must comply with applicable advertising 
                standards, platform policies, and legal requirements. Users are responsible for 
                ensuring their content is original and does not infringe on third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                FamFree acts as a facilitator between brands and creators. We are not responsible 
                for the quality of content or the outcome of collaborations between users.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
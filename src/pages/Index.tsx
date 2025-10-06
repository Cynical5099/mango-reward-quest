import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, ClipboardCheck, Gift } from "lucide-react";
import heroImage from "@/assets/hero-mango.jpg";

const OFFER_LINK = "https://uplevelrewarded.com/aff_c?offer_id=290&aff_id=21664";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Earn a $750 Mango Gift Card
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Follow the steps below to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full sm:w-auto"
                  onClick={() => window.open(OFFER_LINK, '_blank')}
                >
                  Start Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Mango shopping experience with elegant gift card rewards" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete these simple steps to qualify for your reward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Enter Your Email
                  </h3>
                  <p className="text-muted-foreground">
                    Register your email address to receive your reward details and confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <ClipboardCheck className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Complete the Survey
                  </h3>
                  <p className="text-muted-foreground">
                    Share your honest opinions about the Mango brand and shopping experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Finish Required Deals
                  </h3>
                  <p className="text-muted-foreground">
                    Complete all participation requirements to qualify for your reward.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open(OFFER_LINK, '_blank')}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Participants Are Saying
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from people who completed the program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-foreground italic">
                  "I completed my Mango survey and deals — received my gift card via email the next week!"
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — Sophia R., California
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-foreground italic">
                  "The process was straightforward. Just followed the steps and completed everything as instructed."
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — Marcus T., Texas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-foreground italic">
                  "Took about 15 minutes to complete all the requirements. Very happy with my Mango gift card!"
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — Jennifer L., New York
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-foreground italic">
                  "Great experience! The instructions were clear and I received my reward exactly as described."
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  — David K., Florida
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Your $750 Mango Gift Card?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of participants who have successfully completed the program
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open(OFFER_LINK, '_blank')}
          >
            Start Now
          </Button>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Important:</strong> Rewards are only available to participants who complete all required steps. 
                Please ensure you follow all instructions carefully and complete the survey and participation requirements. 
                Reward delivery may take up to several business days after successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Mango Gift Card Reward Program. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

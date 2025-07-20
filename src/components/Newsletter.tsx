import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  return <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            
          </div>
          
          <h2 className="font-cabinet text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get monthly updates on our impact, stories from the field, and ways to get involved 
            in creating sustainable change in your community.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-white" required />
              <Button type="submit" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-6">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="text-sm text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>;
};
export default Newsletter;
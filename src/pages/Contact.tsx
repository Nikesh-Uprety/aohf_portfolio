import { useState } from 'react';
import { Mail, MessageSquare, Github, Users, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Formspree, EmailJS, or your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              ./contact --init
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to join our mission or collaborate? Let's connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-xl font-bold text-primary mb-4 font-mono">
                  ## Contact Channels
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Team Email</div>
                      <a 
                        href="mailto:info@aohf.team" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@aohf.team
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Discord Community</div>
                      <a 
                        href="https://discord.gg/aohfteam" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        discord.gg/aohfteam
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Github className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">GitHub Organization</div>
                      <a 
                        href="https://github.com/aohfteam" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/aohfteam
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Team Lead</div>
                      <a 
                        href="https://nikeshuprety.com.np/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        0xn1ku_hacks
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-primary mb-3 font-mono">
                  ## Interested in Joining?
                </h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>We're always looking for passionate cybersecurity enthusiasts!</p>
                  <p>Requirements:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Passion for cybersecurity and ethical hacking</li>
                    <li>Basic CTF experience or willingness to learn</li>
                    <li>Collaborative mindset and team spirit</li>
                    <li>Commitment to continuous learning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background border border-primary/20 p-4 rounded-lg font-mono text-sm">
                <div className="text-primary mb-2">root@aohf:~# echo $RESPONSE_TIME</div>
                <div className="text-muted-foreground">
                  "We typically respond within 24-48 hours. For urgent matters, reach out on Discord for faster response."
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-primary mb-6 font-mono">
                ## Send Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                      placeholder="Tell us about your interest in AOHF, collaboration ideas, or any questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'taufkh@gmail.com',
    href: 'mailto:taufkh@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 817-1413-42',
    href: 'https://wa.link/xk0hfx',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/taufkhidayat/',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider"
            style={{ animationDelay: '0.1s' }}
          >
            Get In Touch
          </span>
          <h2
            className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Let's Work Together
          </h2>
          <p
            className="reveal opacity-0 text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ animationDelay: '0.3s' }}
          >
            Ready to transform your business with Odoo? Let's discuss how I can help
            streamline your operations
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="reveal opacity-0 group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <Card className="h-full card-hover border-border/50 overflow-hidden">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Label */}
                  <p className="text-sm text-muted-foreground mb-1">{method.label}</p>

                  {/* Value */}
                  <p className="text-lg font-semibold text-foreground flex items-center justify-center gap-2">
                    {method.value}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA Card */}
        <div
          className="reveal opacity-0 max-w-2xl mx-auto"
          style={{ animationDelay: '0.7s' }}
        >
          <Card className="bg-gradient-to-br from-primary to-secondary border-0 overflow-hidden">
            <CardContent className="p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Start Your Odoo Journey?
              </h3>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Whether you need a full ERP implementation or module customization,
                I'm here to help you achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open('mailto:taufkh@gmail.com', '_blank')}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-white text-primary hover:bg-white/90"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location */}
        <div
          className="reveal opacity-0 mt-12 text-center"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Based in Jakarta, Indonesia • Available for remote work worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

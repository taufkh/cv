import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ShoppingCart,
  Package,
  Calculator,
  CreditCard,
  Factory,
  Users,
  Clock,
  Globe,
  Headphones,
  CheckCircle2,
  ArrowRight,
  X,
} from 'lucide-react';

const moduleIcons: Record<string, React.ElementType> = {
  Sales: ShoppingCart,
  Inventory: Package,
  Accounting: Calculator,
  Purchase: CreditCard,
  'Point of Sales': CreditCard,
  Manufacture: Factory,
  Employee: Users,
  Attendance: Clock,
  Payroll: Calculator,
  Recruitment: Users,
  Website: Globe,
  'Tour & Registration': Globe,
  CRM: Users,
  Helpdesk: Headphones,
  Invoice: Calculator,
  'Time Off': Clock,
};

const projects = [
  {
    company: 'PT Citra Busana Indonesia',
    modules: ['Sales', 'Inventory', 'Accounting', 'Purchase', 'Point of Sales'],
    description:
      'Led implementation for a prominent retail business, integrating essential modules to streamline operations. Developed complex promotional features and advanced reporting capabilities for improved operational efficiency.',
    achievements: [
      'Integrated 5 core modules for end-to-end retail management',
      'Developed custom promotional features',
      'Created advanced reporting dashboards',
      'Improved operational efficiency significantly',
    ],
    color: 'from-blue-900 to-blue-600',
  },
  {
    company: 'CV Senglie',
    modules: ['Sales', 'Invoice', 'Accounting', 'Purchase', 'Manufacture'],
    description:
      'Customized Odoo system for inventory management, production planning, and sales distribution using default modules for cost-effective implementation.',
    achievements: [
      'Streamlined manufacturing workflows',
      'Optimized inventory management',
      'Improved production planning efficiency',
      'Cost-effective implementation approach',
    ],
    color: 'from-blue-800 to-cyan-600',
  },
  {
    company: 'Dream Tour',
    modules: ['Tour & Registration', 'Accounting', 'Website'],
    description:
      'Implemented Odoo for a Tour & Travel Company to manage tour packages and enable travelers to purchase through the integrated website.',
    achievements: [
      'Built integrated booking system',
      'Created customer-facing website',
      'Automated tour package management',
      'Streamlined payment processing',
    ],
    color: 'from-slate-800 to-blue-500',
  },
  {
    company: 'Perum Bulog',
    modules: ['Sales', 'Accounting', 'Invoice', 'Purchase'],
    description:
      'Responsible for software testing, defect reporting, and creating comprehensive user manuals. Conducted UAT and SIT to ensure proper functionality.',
    achievements: [
      'Conducted thorough UAT and SIT testing',
      'Created detailed user manuals',
      'Identified and reported critical defects',
      'Ensured software met project requirements',
    ],
    color: 'from-indigo-900 to-blue-700',
  },
  {
    company: 'PT Arina Multi Karya',
    modules: ['Employee', 'Attendance', 'Payroll', 'Recruitment', 'Website'],
    description:
      'Full HR management system implementation including employee database, attendance tracking, payroll processing, and recruitment management.',
    achievements: [
      'Implemented complete HR module suite',
      'Automated payroll processing',
      'Streamlined recruitment workflow',
      'Integrated company website',
    ],
    color: 'from-blue-900 to-slate-700',
  },
  {
    company: 'Medika Plaza Indonesia',
    modules: ['Payroll'],
    description:
      'Project manager for Odoo payroll implementation, overseeing project progress and ensuring timely completion with high quality standards.',
    achievements: [
      'Delivered payroll system on schedule',
      'Maintained high quality standards',
      'Fostered productive team environment',
      'Proactively addressed roadblocks',
    ],
    color: 'from-sky-800 to-blue-600',
  },
  {
    company: 'PT Global Teknologi Niaga',
    modules: ['Inventory', 'Purchase', 'POS', 'Sales'],
    description:
      'Ensured successful project execution within timeline, fostering collaborative team environment and maintaining quality standards.',
    achievements: [
      'Executed project within timeline',
      'Maintained quality and accountability',
      'Provided regular stakeholder updates',
      'Achieved project goals successfully',
    ],
    color: 'from-blue-700 to-indigo-600',
  },
  {
    company: 'PT Indofresh',
    modules: ['Payroll', 'Attendance', 'Time Off'],
    description:
      'Oversaw implementation and optimization of HR modules for payroll, attendance, and time off management.',
    achievements: [
      'Optimized HR module usage',
      'Streamlined attendance tracking',
      'Improved time off management',
      'Kept project on track',
    ],
    color: 'from-navy-900 to-blue-500',
  },
  {
    company: 'PT Elemen Gemilang Suryamansika',
    modules: ['Sales', 'Inventory', 'Purchase', 'CRM', 'Helpdesk'],
    description:
      'Led implementation of comprehensive business management solution utilizing Sales, Inventory, Purchase, CRM, and Helpdesk modules.',
    achievements: [
      'Integrated CRM with sales workflow',
      'Implemented helpdesk support system',
      'Streamlined inventory management',
      'Met specific company requirements',
    ],
    color: 'from-indigo-800 to-blue-500',
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="reveal opacity-0 text-sm font-semibold text-primary uppercase tracking-wider"
            style={{ animationDelay: '0.1s' }}
          >
            Portfolio
          </span>
          <h2
            className="reveal opacity-0 text-3xl sm:text-4xl font-bold mt-2 text-foreground"
            style={{ animationDelay: '0.2s' }}
          >
            Odoo Project Experience
          </h2>
          <p
            className="reveal opacity-0 text-muted-foreground mt-4 max-w-2xl mx-auto"
            style={{ animationDelay: '0.3s' }}
          >
            Successful implementations across retail, manufacturing, tourism, and HR
            management sectors
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.company}
              className="reveal opacity-0 group cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-full bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden card-hover">
                {/* Card Header with Gradient */}
                <div className={`h-24 bg-gradient-to-r ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">
                      {project.company}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Modules */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.modules.slice(0, 4).map((module) => {
                      const Icon = moduleIcons[module] || Package;
                      return (
                        <Badge
                          key={module}
                          variant="secondary"
                          className="text-xs flex items-center gap-1 bg-primary/5 text-primary border-0"
                        >
                          <Icon className="w-3 h-3" />
                          {module}
                        </Badge>
                      );
                    })}
                    {project.modules.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        +{project.modules.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* View Details */}
                  <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Dialog */}
        <Dialog
          open={selectedProject !== null}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                {/* Dialog Header with Gradient */}
                <div
                  className={`h-32 -mx-6 -mt-6 mb-6 bg-gradient-to-r ${selectedProject.color} relative rounded-t-lg`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-6 right-6">
                    <DialogHeader>
                      <DialogTitle className="text-white text-2xl font-bold drop-shadow-md">
                        {selectedProject.company}
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                </div>

                <DialogDescription className="sr-only">
                  Project details for {selectedProject.company}
                </DialogDescription>

                {/* Modules */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Modules Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.modules.map((module) => {
                      const Icon = moduleIcons[module] || Package;
                      return (
                        <Badge
                          key={module}
                          variant="secondary"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary border-0"
                        >
                          <Icon className="w-4 h-4" />
                          {module}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Project Overview
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() =>
                      window.open('mailto:taufkh@gmail.com', '_blank')
                    }
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Thabo Mokoena",
        role: "Marketing Director",
        company: "Retail Group SA",
        content: "Enashy's Business Solutions completely transformed our in-store activations. Their team brought an energy and professionalism that directly wiped out our targets for the quarter. Highly recommended!",
        image: "https://picsum.photos/seed/thabo/150/150"
    },
    {
        name: "Lerato Khumalo",
        role: "Founder & CEO",
        company: "Innovate Tech",
        content: "The personal branding strategy they developed for me was a game-changer. I've seen a 300% increase in speaking engagement requests since we launched the new visual identity.",
        image: "https://picsum.photos/seed/lerato/150/150"
    },
    {
        name: "Johan Van Niekerk",
        role: "Regional Manager",
        company: "FMCG Distributors",
        content: "Professional, efficient, and results-driven. Our lead generation campaigns have never performed better. The database sourcing was accurate and the automation saved us hours every week.",
        image: "https://picsum.photos/seed/johan/150/150"
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-5xl font-black text-gray-900 uppercase mb-4">
                        What Our <span className="text-ebs-purple">Clients Say</span>
                    </h2>
                    <div className="w-24 h-2 bg-ebs-yellow mx-auto rounded-full" />
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-3xl p-8 md:p-10 relative group hover:shadow-xl transition-all duration-300 border border-gray-100 items-stretch"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            {/* Decorative Quote Icon */}
                            <div className="absolute top-8 right-8 text-ebs-purple/10 group-hover:text-ebs-purple/20 transition-colors">
                                <Quote size={64} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 text-ebs-yellow">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10 italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-ebs-red p-0.5">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <div className="text-sm text-ebs-purple font-medium">
                                        {testimonial.role}
                                    </div>
                                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

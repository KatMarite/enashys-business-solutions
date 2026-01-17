import React from 'react';
import { Mail, Clock } from 'lucide-react';

export const Maintenance: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://picsum.photos/seed/hero/1920/1080?grayscale&blur=2"
                    alt="Maintenance Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ebs-purple/90 via-ebs-red/80 to-ebs-yellow/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 max-w-2xl mx-auto text-center text-white">
                <div className="mb-8 flex justify-center">
                    <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                        <Clock size={48} className="text-ebs-yellow animate-pulse" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">
                    WE'LL BE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ebs-yellow to-white">
                        BACK SOON
                    </span>
                </h1>

                <p className="text-lg md:text-xl font-light text-gray-200 mb-10 leading-relaxed max-w-lg mx-auto">
                    We are currently upgrading our platform to serve you better.
                    Enashy's Business Solutions will be back online shortly with an improved experience.
                </p>

                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                    <Mail size={20} className="text-ebs-yellow" />
                    <a href="mailto:info@enashysbusinesssolutions.com" className="font-medium hover:text-white transition-colors">
                        info@enashysbusinesssolutions.com
                    </a>
                </div>

                <div className="mt-12 text-sm text-white/40">
                    &copy; {new Date().getFullYear()} Enashy's Business Solutions. All rights reserved.
                </div>
            </div>
        </div>
    );
};

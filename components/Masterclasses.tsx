import React, { useState } from 'react';
import { Play, Lock, Clock, Users, X, Video } from 'lucide-react';

const masterclasses = [
    {
        id: 1,
        title: "Introduction to EBS",
        description: "Welcome to Enashy's Business Solutions. Discover how we can transform your business presence.",
        duration: "Main Intro",
        audience: "Everyone",
        thumbnail: "https://i.vimeocdn.com/video/2111994302-0ea849dd5069f52df94e79b9aa69284b1f2ed0ed1ffe9d7d7819b0b54f514443-d_1280",
        isLocked: false,
        videoUrl: "https://player.vimeo.com/video/1158078207" // Intro video
    },
    {
        id: 2,
        title: "Strategic Impact in Business",
        description: "Explore how strategic decisions drive measurable business outcomes and sustainable growth.",
        duration: "Jan 24, 2026",
        audience: "Business Leaders",
        thumbnail: "https://i.vimeocdn.com/video/2111994105-3193329db07e37696cba1f9c8451a48d67b25b9ab7a6872d6ff1e2663da2b0f9-d_1280",
        isLocked: false,
        videoUrl: "https://player.vimeo.com/video/1158078085"
    },
    {
        id: 3,
        title: "Upcoming Masterclass",
        description: "Join us for our next exclusive deep dive. Mark your calendars for this upcoming session.",
        duration: "Feb 28, 2026",
        audience: "Coming Soon",
        thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        isLocked: true,
        videoUrl: ""
    }
];

export const Masterclasses: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const handleWatch = (videoUrl: string, isLocked: boolean) => {
        if (!isLocked && videoUrl) {
            setSelectedVideo(videoUrl);
        }
    };

    return (
        <section id="masterclasses" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ebs-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ebs-red/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        <span className="text-ebs-red">EBS</span> Masterclasses
                    </h2>
                    <div className="w-24 h-1 bg-ebs-purple mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Unlock your potential with our expert-led video sessions covering branding, marketing strategy, and execution.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {masterclasses.map((video, index) => (
                        <div
                            key={video.id}
                            className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-ebs-purple transition-all duration-300 hover:shadow-2xl hover:shadow-ebs-purple/20"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Thumbnail Container */}
                            <div
                                className={`relative aspect-video bg-gray-700 flex items-center justify-center overflow-hidden ${video.videoUrl && !video.isLocked ? 'cursor-pointer' : ''}`}
                                onClick={() => handleWatch(video.videoUrl, video.isLocked)}
                            >
                                {video.thumbnail.startsWith('http') ? (
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                ) : (
                                    /* Placeholder background if no image */
                                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                                )}

                                {/* Overlay - darker gradient at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />



                                {/* Top Left Icon - Mimicking the reference */}
                                <div className="absolute top-4 left-4 text-white drop-shadow-md">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                        <line x1="7" y1="2" x2="7" y2="22"></line>
                                        <line x1="17" y1="2" x2="17" y2="22"></line>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <line x1="2" y1="7" x2="7" y2="7"></line>
                                        <line x1="2" y1="17" x2="7" y2="17"></line>
                                        <line x1="17" y1="17" x2="22" y2="17"></line>
                                        <line x1="17" y1="7" x2="22" y2="7"></line>
                                    </svg>
                                </div>

                                {/* Duration - Bottom Left */}
                                <div className="absolute bottom-4 left-4 flex gap-2 items-center text-white font-bold text-lg drop-shadow-md">
                                    <Video size={20} className="fill-white" />
                                    <span>{video.duration}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-ebs-purple text-xs font-bold uppercase tracking-wider mb-3">
                                    <Users size={14} />
                                    {video.audience}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-ebs-purple transition-colors duration-300">
                                    {video.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {video.description}
                                </p>

                                <button
                                    onClick={() => handleWatch(video.videoUrl, video.isLocked)}
                                    disabled={!video.videoUrl && !video.isLocked === false} // Disable if no URL, but allow logic tied to isLocked for subscription if we had that flow. For now, just disable if no URL.
                                    className={`w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 ${!video.videoUrl
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : video.isLocked
                                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed hover:bg-gray-600'
                                            : 'bg-ebs-purple text-white hover:bg-ebs-red shadow-lg hover:shadow-ebs-red/30'
                                        }`}
                                >
                                    {!video.videoUrl ? 'Coming Soon' : (video.isLocked ? 'Subscribe to Watch' : 'Watch Now')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-ebs-red transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <iframe
                            src={`${selectedVideo}?autoplay=1`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Masterclass Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

import React from 'react';
import {StatusCard} from './StatusCard';
import {AnimatedStatusIndicator} from './AnimatedStatusIndicator';

interface ProfileImageProps {
    imageSrc: string;
    imageAlt: string;
    availabilityText?: string;
    locationText?: string;
    locationIcon?: string;
    className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
                                                              imageSrc,
                                                              imageAlt,
                                                              availabilityText = "Available for freelance",
                                                              locationText = "Netivot, Israel",
                                                              locationIcon = "flag.svg",
                                                              className = ""
                                                          }) => {
    return (
        <div className={`w-[270px] flex flex-col items-center ${className}`}>
            <img
                src={imageSrc}
                alt={imageAlt}
                className="w-[270px] h-[270px] object-cover rounded-4xl"
            />

            {/* Status Cards */}
            <div className="w-full mt-6 flex flex-col gap-4">
                <StatusCard
                    icon={<AnimatedStatusIndicator/>}
                    text={availabilityText}
                />

                <StatusCard
                    icon={<img src={locationIcon} alt="Location Flag" className="w-6 h-4"/>}
                    text={locationText}
                />
            </div>
        </div>
    );
};

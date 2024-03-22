import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


interface ContainerCardProps {
    title: string;
    subtitle: string;
    tracks: string; // or string, depending on what you're expecting
    imageSrc: string;
}

export default function ContainerCard({ title, subtitle, tracks, imageSrc }: ContainerCardProps) {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{subtitle}</p>
                <p className="text-default-500">{tracks} Tracks</p>
                <h4 className="font-bold text-large">{title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={imageSrc}
                    width={270}
                />
            </CardBody>
        </Card>
    );
}

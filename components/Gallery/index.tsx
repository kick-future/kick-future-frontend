import cn from "classnames";
import React, { FC, useEffect, useState } from "react";

import styles from "./Gallery.module.css";

interface IGallery {
    photos: string[];
}

const Gallery: FC<IGallery> = ({ photos }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const firstActive = photos.findIndex((photo) => photo !== "");

        setActiveIndex(firstActive);
    }, [photos]);

    return (
        <div className={styles.gallery}>
            {photos[activeIndex] ? (
                <img
                    className={styles.galleryMainPhoto}
                    src={photos[activeIndex]}
                    alt=""
                />
            ) : (
                <div className={styles.emptyActivePhotos}>
                    No active photo selected
                </div>
            )}
            <div className={styles.preview}>
                {photos.map((photo, index) => {
                    return (
                        photo && (
                            <img
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    styles.galleryPreviewPhoto,
                                    index === activeIndex &&
                                        styles.galleryPreviewActivePhoto
                                )}
                                src={photo}
                                alt=""
                            />
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;

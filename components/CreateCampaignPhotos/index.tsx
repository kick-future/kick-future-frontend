import cn from "classnames";
import React, { FC, useRef, useState } from "react";

import styles from "./CreateCampaignPhotos.module.css";

// interface IPhotoItem {
//     photo?: string;
//     setPhotos: (s: (prev: string[]) => string[]) => void;
//     index: number;
// }
//
// const PhotoItem: FC<IPhotoItem> = ({ photo = "", setPhotos, index }) => {
//
//     return (
//     );
// };

interface ICreateCampaignPhotos {
    photos: string[];
    setPhotos: (s: (prev: string[]) => string[]) => void;
}

const CreateCampaignPhotos: FC<ICreateCampaignPhotos> = ({
    photos,
    setPhotos,
}) => {
    const emptyArray = Array(4).fill(0);
    const [drag, setDrag] = useState(false);

    const uploadPhoto = (file: Blob, index: number) => {
        if (file.size > 2000000) {
            return;
        }

        console.log("file", file);

        const reader = new FileReader();
        reader.onload = (ev) => {
            if (ev.target && ev.target.result) {
                setPhotos((prev: string[]) => {
                    return [
                        ...prev.slice(0, index),
                        ev?.target?.result?.toString() || "",
                        ...prev.slice(index + 1),
                    ];
                });
            }
        };
        reader.readAsDataURL(file);
    };

    const addPhoto = (e, index: number) => {
        console.log("index:", index);
        e.preventDefault();
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];
            uploadPhoto(file, index);
        }
    };

    const onDropHandler = (e, index: number) => {
        e.preventDefault();
        const files = [...e.dataTransfer.files];
        const file = files[0];
        uploadPhoto(file, index);
        setDrag(false);
    };
    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);
    };
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    };

    console.log("photos:", photos);

    return (
        <div className={styles.photos}>
            {photos.map((photo, index) => {
                if (index > 3) {
                    return null;
                }

                return (
                    <label
                        key={index}
                        className={cn(
                            styles.photoItem,
                            drag && styles.photoDrag
                        )}
                        htmlFor="photo"
                        onDragOver={dragStartHandler}
                        onDragStart={dragStartHandler}
                        onDragLeave={dragLeaveHandler}
                        onDrop={(e) => onDropHandler(e, index)}
                    >
                        {!photo && (drag ? "Drop file" : "Add file")}
                        {photo && (
                            <img
                                className={cn(styles.photoItem, styles.photo)}
                                src={photo}
                                alt=""
                            />
                        )}
                        <input
                            onChange={(e) => addPhoto(e, index)}
                            type="file"
                            id="photo"
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default CreateCampaignPhotos;

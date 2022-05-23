import cn from "classnames";
import React, { FC, useRef } from "react";

import styles from "./CreateCampaignPhotos.module.css";

interface IPhotoItem {
    isMain?: boolean;
    photo?: string;
    setPhoto: (f: string) => void;
    index: number;
}

const PhotoItem: FC<IPhotoItem> = ({
    isMain = false,
    photo = "",
    setPhoto,
  index
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const addPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.currentTarget.files) {
            const newFile = e.currentTarget.files[0];

            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target && ev.target.result) {
                    console.log('index', index);
                    setPhoto(ev.target.result.toString() || "");
                }
            };
            reader.readAsDataURL(newFile);
        }
    };

    return (
        <label className={styles.photoItem} htmlFor="photo">
            {!photo && (isMain ? "Add main photo" : "Add photo")}
            {photo && (
                <img
                    className={cn(styles.photoItem, styles.photo)}
                    src={photo}
                    alt=""
                />
            )}
            <input
                ref={inputRef}
                onChange={addPhoto}
                className={styles.inputPhoto}
                type="file"
                id="photo"
            />
        </label>
    );
};

interface ICreateCampaignPhotos {
    mainPhoto: string;
    setMainPhoto: (s: string) => void;
    photos: string[];
    setPhotos: (s: (prev: string[]) => string[]) => void;
}

const CreateCampaignPhotos: FC<ICreateCampaignPhotos> = ({
    mainPhoto,
    setMainPhoto,
    photos,
    setPhotos,
}) => {
    const emptyArray = Array(4).fill(null);

    const addPhoto = (s: string, index: number) => {
        console.log('photos:', photos);
        setPhotos((prev: string[]) => {
            return [
              ...prev.slice(0, index),
              s,
              ...prev.slice(index),
            ];
        });
    };
    //
    // console.log('photos:', photos);
    // console.log('mainPhoto:', mainPhoto);
    return (
        <div className={styles.photos}>
            {emptyArray.map((photo, index) => (
                <PhotoItem
                  index={index}
                    setPhoto={(p: string) => addPhoto(p, index)}
                    isMain={index === 0}
                    photo={index === 0 ? mainPhoto : photos[index - 1]}
                    key={`${photo}_${index}`}
                />
            ))}
        </div>
    );
};

export default CreateCampaignPhotos;

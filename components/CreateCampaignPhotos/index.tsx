import cn from "classnames";
import React, { FC, useRef } from "react";

import styles from "./CreateCampaignPhotos.module.css";

interface IPhotoItem {
    isMain?: boolean;
    photo?: string;
    mainPhoto: string;
    setMainPhoto: (f: string) => void;
}

const PhotoItem: FC<IPhotoItem> = ({
    isMain = false,
    photo = "",
    mainPhoto,
    setMainPhoto,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const addPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.currentTarget.files) {
            const newFile = e.currentTarget.files[0];

            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target && ev.target.result) {
                    setMainPhoto(ev.target.result.toString() || "");
                }
            };
            reader.readAsDataURL(newFile);
        }
    };

    return (
        <label className={styles.photoItem} htmlFor="photo">
            {!mainPhoto && (isMain ? "Add main photo" : "Add photo")}
            {mainPhoto && (
                <img
                    className={cn(styles.photoItem, styles.photo)}
                    src={mainPhoto}
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
}

const CreateCampaignPhotos: FC<ICreateCampaignPhotos> = ({
    mainPhoto,
    setMainPhoto,
}) => {
    // const [photos, setPhotos] = useState([]);
    const photos = Array(4).fill(null);

    console.log("photo:", mainPhoto);
    return (
        <div className={styles.photos}>
            {photos.map((photo, index) => (
                <PhotoItem
                    mainPhoto={mainPhoto}
                    setMainPhoto={setMainPhoto}
                    isMain={!index}
                    photo={photo}
                />
            ))}
            {/* <PhotoItem isMain /> */}
            {/* <PhotoItem /> */}
            {/* <PhotoItem /> */}
            {/* <PhotoItem /> */}
        </div>
    );
};

export default CreateCampaignPhotos;

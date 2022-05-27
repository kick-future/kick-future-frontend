import cn from "classnames";
import React, {
    ChangeEvent,
    FC,
} from "react";
import { IoCloseSharp } from "react-icons/io5";

import styles from "./CreateCampaignPhotos.module.css";

interface IPhotoItem {
    photo?: string;
    setPhotos: (s: (prev: string[]) => string[]) => void;
    index: number;
}

const PhotoItem: FC<IPhotoItem> = ({ photo = "", setPhotos, index }) => {
    const removePhoto = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
        e.preventDefault();
        e.stopPropagation();
        setPhotos((prev: string[]) => {
            return [...prev.slice(0, i), "", ...prev.slice(i + 1)];
        });
    };

    const uploadPhoto = (file: Blob, i: number) => {
        if (file.size > 2000000) {
            // TODO: will need to add error handler
            return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
            if (ev.target && ev.target.result) {
                setPhotos((prev: string[]) => {
                    return [
                        ...prev.slice(0, i),
                        ev?.target?.result?.toString() || "",
                        ...prev.slice(i + 1),
                    ];
                });
            }
        };
        reader.readAsDataURL(file);
    };

    const addPhoto = (e: ChangeEvent<HTMLInputElement>, i: number) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];
            uploadPhoto(file, i);
        }
    };

    const onDropHandler = (e: React.DragEvent<HTMLLabelElement>, i: number) => {
        e.preventDefault();
        e.stopPropagation();
        // @ts-ignore
        const files = [...e.dataTransfer.files];
        const file = files[0];
        uploadPhoto(file, i);
    };

    return (
        <div>
            <label
                className={styles.photoItem}
                htmlFor={`photo_${index}`}
                onDrop={(e) => onDropHandler(e, index)}
            >
                {!photo && "Add file"}
                {photo && (
                    <div className={styles.photoBlock}>
                        <img
                            className={cn(styles.photoItem, styles.photo)}
                            src={photo}
                            alt=""
                        />
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <div
                            onClick={(e) => removePhoto(e, index)}
                            className={styles.closeTag}
                        >
                            <IoCloseSharp className={styles.closeIcon} />
                        </div>
                    </div>
                )}
            </label>
            <input
                className={styles.input}
                onChange={(e) => addPhoto(e, index)}
                type="file"
                id={`photo_${index}`}
            />
        </div>
    );
};

interface ICreateCampaignPhotos {
    photos: string[];
    setPhotos: (s: (prev: string[]) => string[]) => void;
}

const CreateCampaignPhotos: FC<ICreateCampaignPhotos> = ({
    photos,
    setPhotos,
}) => {
    return (
        <div className={styles.photos}>
            {photos.map((photo, index) => {
                if (index > 3) {
                    return null;
                }

                return (
                    <PhotoItem
                        key={index}
                        setPhotos={setPhotos}
                        photo={photo}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default CreateCampaignPhotos;

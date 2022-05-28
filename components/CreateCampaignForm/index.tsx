import React, { FC, useState } from "react";

import Button from "../Button";
import CreateCampaignPhotos from "../CreateCampaignPhotos";
import styles from "./CreateCampaignForm.module.css";

interface ICreateCampaignForm {
    name: string;
    setName: (s: string) => void;
    description: string;
    setDescription: (s: string) => void;
    photos: string[];
    setPhotos: (s: (prev: string[]) => string[]) => void;
}

const CreateCampaignForm: FC<ICreateCampaignForm> = ({
    name,
    setName,
    description,
    setDescription,
    photos,
    setPhotos,
}) => {
    return (
        <>
            <h3 className={styles.title}>Create campaign</h3>
            <form
                className={styles.form}
                onSubmit={() => console.log("onSubmit")}
            >
                <label className={styles.label} htmlFor="name">
                    Campaign name
                    <input
                        className={styles.input}
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className={styles.label} htmlFor="description">
                    Campaign description
                    <textarea
                        className={styles.textarea}
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <div className={styles.photos}>
                    <span>Campaign photos (please upload square photos)</span>
                    <CreateCampaignPhotos
                        photos={photos}
                        setPhotos={setPhotos}
                    />
                </div>
                <Button
                    typeButtonAction="submit"
                    className={styles.createButton}
                    size="M"
                >
                    Create
                </Button>
            </form>
        </>
    );
};

export default CreateCampaignForm;

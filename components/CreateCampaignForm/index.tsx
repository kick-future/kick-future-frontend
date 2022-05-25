import React, { useState } from "react";

import CreateCampaignPhotos from "../CreateCampaignPhotos";
import styles from "./CreateCampaignForm.module.css";

const CreateCampaignForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photos, setPhotos] = useState<string[]>(['','','','']);

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
            </form>
        </>
    );
};

export default CreateCampaignForm;

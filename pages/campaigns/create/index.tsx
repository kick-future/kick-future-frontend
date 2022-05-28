import React, { useState } from "react";

import AttentionModal from "../../../components/AttentionModal";
import CreateCampaignForm from "../../../components/CreateCampaignForm";
import Layout from "../../../components/Layout";
import Campaign from "../../../components/PreviewCampaign";
import styles from "./CreatePage.module.css";

const CreatePage = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photos, setPhotos] = useState<string[]>(["", "", "", ""]);

    return (
        <Layout>
            <div className={styles.topBlock}>
                <CreateCampaignForm
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    photos={photos}
                    setPhotos={setPhotos}
                />
            </div>
            <div className={styles.bottomBlock}>
                <h3 className={styles.title}>Preview</h3>
                <Campaign
                    name={name}
                    description={description}
                    photos={photos}
                />
            </div>
            <AttentionModal />
        </Layout>
    );
};

export default CreatePage;

import interactionsModel from './interactions-model.js';

export const getAllInteractions = () => interactionsModel.find();

export const findInteractionsByUserId = async (userId) => {
    try {
        const interactions = await interactionsModel.findOne({userId});
        return interactions;
    } catch (error) {
        console.error(error);
    }
}

export const findInteractionsByPlaceId = async (xid) => {
    try {
        const interactions = await interactionsModel.find({xid});
        return interactions;
    } catch (error) {
        console.error(error);
    }
}

export const findSpecific = async (xid, userId) => {
    try {
        const interaction = await interactionsModel.find({xid: xid, uid: userId});
        return interaction;
    } catch (error) {
        console.error(error);
    }
}

export const createInteraction = (interaction) => interactionsModel.create(interaction);

export const deleteInteraction = (iid) => interactionsModel.deleteOne({_id: iid});
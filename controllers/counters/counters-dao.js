import countersModel from './counters-model.js';

export const findCountersByPlaceId = async (xid) => {
    try {
        const counters = await countersModel.findOne({xid});
        return counters;
    } catch (error) {
        console.error(error);
    }
}

export const findAllCounters = async () => {
    try {
        const counters = await countersModel.find();
        return counters;
    } catch (error) {
        console.error(error);
    }
}

export const createCounter = (counter) => countersModel.create(counter);

export const updateCounter = async (xid, counter) => {
    try {
        const updatedCounter = await countersModel.updateOne({xid}, {$set:counter});
        return updatedCounter;
    } catch (error) {
        console.error(error);
    }
}


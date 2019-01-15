import * as R from 'ramda';

const MSGS = {
    SHOW_FORM: 'SHOW_FORM',
    UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
    UPDATE_CALORIES: 'UPDATE_CALORIES',
    SUBMIT_FORM: 'SUBMIT_FORM'
};

export function showFormMsg(showForm) {
    return {
        type: MSGS.SHOW_FORM,
        showForm
    }
}

export function updateDesc(description) {
    return {
        type: MSGS.UPDATE_DESCRIPTION,
        description
    }
}

export function updateCal(calories) {
    return {
        type: MSGS.UPDATE_CALORIES,
        calories
    }
}

export function submitForm() {
    return {
        type: MSGS.SUBMIT_FORM
    }
}

function Update(msg, model) {
    switch(msg.type) {
        case MSGS.SHOW_FORM: {
            const { showForm } = msg;
            return { ...model, showForm };
        }
        case MSGS.UPDATE_DESCRIPTION: {
            const { description } = msg;
            return { ...model, description };
        }
        case MSGS.UPDATE_CALORIES: {
            const calories = R.pipe(
                parseInt,
                R.defaultTo(0)
            )(msg.calories)
            return { ...model, calories };
        }
        case MSGS.SUBMIT_FORM: {
            return add(msg, model);
        }
        default:
            return model;
    }
}

function add(msg, model) {
    const { nextId, description, calories } = model;
    const meal = { id: nextId, description, calories };
    const meals = [...model.meals, meal];
    return {
        ...model,
        meals,
        nextId: nextId + 1,
        description: '',
        calories: 0,
        showForm: false
    }
}

export default Update;
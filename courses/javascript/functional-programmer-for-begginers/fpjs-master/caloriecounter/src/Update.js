const MSGS = {
    SHOW_FORM: 'SHOW_FORM'
};

export function showFormMsg(showForm) {
    return {
        type: MSGS.SHOW_FORM,
        showForm
    }
}

function Update(msg, model) {
    switch(msg.type) {
        case MSGS.SHOW_FORM: {
            const { showForm } = msg;
            return { ...model, showForm };
        }
        default:
            return model;
    }
}

export default Update;
import css from '../css/index.css'
class PraiseButton {
    constructor() {                 
    }
    clickAction() {
        axios.get('/index/update')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

class Muzhi extends PraiseButton {
    constructor() {
        super();
    }
}
class Star extends PraiseButton {
    constructor() {
        super();
    }
}
export {
    Muzhi,
    Star
}
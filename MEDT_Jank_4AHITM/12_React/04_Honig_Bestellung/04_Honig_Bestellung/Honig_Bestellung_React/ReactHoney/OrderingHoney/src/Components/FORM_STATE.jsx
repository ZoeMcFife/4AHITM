const  FORM_STATE = {
    selectedIndex: 0,
    steps:
        {
            buy:
                {
                    valid: false,
                    dirty: false,
                    value:
                        {
                            beeHoney: '',
                            spiderHoney: '',
                            buchiHoney: '',
                            alienHoney: ''
                        },
                },
            confirm:
                {
                    valid: false,
                    dirty: false,
                },
            details:
                {
                    valid: false,
                    dirty: false,
                    value:
                        {
                            name: '',
                            lastName: '',
                            address: '',
                            email: ''
                        },
                }
        }
};

export default FORM_STATE;
const CodeExampleEvents = {
  importAnalytics: `import Analytics from 'appcenter-analytics';`,
  mountEventObject: `//= =========================================================================================
    /** Cria um objeto com os dados necessários
     *  para criar um evento no AppCenter.
     *  @returns {object} EVENT_OBJECT
     */
    async function mountEventObject() {
        const EVENT_OBJECT = {};
    
        const user = await getUser();
    
        EVENT_OBJECT.userID = String(user?.IDS001);
        EVENT_OBJECT.environment = String(await getEnvironment());
        EVENT_OBJECT.time = String(moment().format('DD-MM-YYYY HH:mm:ss'));
    
        return EVENT_OBJECT;
    }`,
  trackEvent: `//= =========================================================================================
    /** Cria um evento no App Center com o ID do usuário e horário do acontecimento
     * @param {string} eventName
     * @param {string} newProperty
     */
    export const trackEvent = async (eventName, newProperty) => {
        const EVENT_DATA = await mountEventObject();
        const property = newProperty ? ]- |{JSON.stringify(newProperty)}] : '';
        
        if (EVENT_DATA.environment === 'PRD')
            await Analytics.trackEvent(eventName, {
                DATA: ]USER_ID: |{EVENT_DATA.userID} - TIME: |{EVENT_DATA.time} |{property}],
            });
    };`,
  trackEventUseExample: `
    export const SignUp = async (data) =>
        new Promise(async (resolve, reject) => {
            try {
                ...

                response = await api
                    .post('api/ev/usuario/app/signUp', data, {
                        cancelToken: source.token,
                    })
                    .then(async (res) => {
                        // ---- Chamada para disparar o evento
                        trackEvent('SIGN UP');
                        resolve(res.data);
                    })
                    .catch((err) => {
                        ...
                    });
            } catch (error) {
                ...
            }
        });`,
  trackEventUseExampleWithObject: `trackEvent('SEARCH_WITH_DATE_FILTER', { startDate, endDate });`,
};

export { CodeExampleEvents };
